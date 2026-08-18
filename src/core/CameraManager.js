// CameraManager.js - Dynamic 4-Mode Camera System with Spring Dampening & Speed FOV
import * as THREE from 'three';

export class CameraManager {
  constructor(camera) {
    this.camera = camera;
    this.camera.up.set(0, 1, 0);

    this.modes = ['CHASE', 'LOW_RACE', 'FIRST_PERSON', 'DRONE'];
    this.currentModeIndex = 0;
    this.mode = localStorage.getItem('nexora_cam_mode') || 'CHASE';
    this.currentModeIndex = Math.max(0, this.modes.indexOf(this.mode));

    this.currentPos = new THREE.Vector3(0, 3.6, -7.8);
    this.currentLookAt = new THREE.Vector3(0, 1.8, 18.0);

    this.shakeIntensity = 0;
    this.shakeDecay = 5.0;
  }

  cycleCameraMode() {
    this.currentModeIndex = (this.currentModeIndex + 1) % this.modes.length;
    this.mode = this.modes[this.currentModeIndex];
    try {
      localStorage.setItem('nexora_cam_mode', this.mode);
    } catch(e) {}
    return this.mode;
  }

  triggerShake(intensity = 0.5) {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
  }

  updateMenuCamera(playerPos, delta) {
    const desiredPos = new THREE.Vector3(0, 3.2, playerPos.z - 8.0);
    const desiredLookAt = new THREE.Vector3(0, 1.8, playerPos.z + 22.0);

    const lerpFactor = 1.0 - Math.exp(-8 * delta);
    this.currentPos.lerp(desiredPos, lerpFactor);
    this.currentLookAt.lerp(desiredLookAt, lerpFactor);

    this.camera.up.set(0, 1, 0);
    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentLookAt);
  }

  update(playerPos, playerLane, playerIsJumping, delta, gameSpeed = 18.0) {
    let baseOffset, lookOffset, fovBase;

    switch (this.mode) {
      case 'LOW_RACE':
        baseOffset = new THREE.Vector3(0, 2.0, -6.2);
        lookOffset = new THREE.Vector3(0, 2.4, 25.0);
        fovBase = 68;
        break;

      case 'FIRST_PERSON':
        baseOffset = new THREE.Vector3(0, 1.65, 0.2);
        lookOffset = new THREE.Vector3(0, 1.65, 30.0);
        fovBase = 75;
        break;

      case 'DRONE':
        baseOffset = new THREE.Vector3(0, 11.5, -13.0);
        lookOffset = new THREE.Vector3(0, 0.5, 20.0);
        fovBase = 55;
        break;

      case 'CHASE':
      default:
        baseOffset = new THREE.Vector3(0, 3.6, -7.8);
        lookOffset = new THREE.Vector3(0, 1.9, 18.0);
        fovBase = 62;
        break;
    }

    const targetX = playerPos.x * (this.mode === 'FIRST_PERSON' ? 1.0 : 0.65);
    const targetY = Math.max(playerPos.y + baseOffset.y, baseOffset.y);
    const targetZ = playerPos.z + baseOffset.z;

    const desiredPos = new THREE.Vector3(targetX, targetY, targetZ);
    const desiredLookAt = new THREE.Vector3(
      playerPos.x * (this.mode === 'FIRST_PERSON' ? 1.0 : 0.4),
      playerPos.y + lookOffset.y,
      playerPos.z + lookOffset.z
    );

    // Screen Shake Effect
    if (this.shakeIntensity > 0) {
      desiredPos.x += (Math.random() - 0.5) * this.shakeIntensity;
      desiredPos.y += (Math.random() - 0.5) * this.shakeIntensity;
      this.shakeIntensity = Math.max(0, this.shakeIntensity - this.shakeDecay * delta);
    }

    const decay = (this.mode === 'FIRST_PERSON') ? 22 : 14;
    const lerpFactor = 1.0 - Math.exp(-decay * delta);

    this.currentPos.lerp(desiredPos, lerpFactor);
    this.currentLookAt.lerp(desiredLookAt, lerpFactor);

    // Dynamic FOV Zoom scaling with speed & mobile portrait orientation
    const speedFovBoost = Math.min(22, (gameSpeed - 18.0) * 0.5);
    const aspect = this.camera.aspect || 1.0;
    const portraitFovBoost = aspect < 1.0 ? Math.min(22, (1.0 - aspect) * 30) : 0;
    const targetFov = fovBase + speedFovBoost + portraitFovBoost;

    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFov, 0.1);
    this.camera.updateProjectionMatrix();

    // Subtle Roll Banking on Lane Change
    const laneDelta = (targetX - this.currentPos.x);
    this.camera.up.set(-laneDelta * 0.03, 1, 0).normalize();
    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentLookAt);
  }
}
