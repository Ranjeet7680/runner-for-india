// CameraManager.js - Clean Third Person Follow & Fixed Upright Camera Alignment
import * as THREE from 'three';

export class CameraManager {
  constructor(camera) {
    this.camera = camera;
    
    // Ensure camera up vector is always strictly Y-UP (0, 1, 0)
    this.camera.up.set(0, 1, 0);

    this.baseOffset = new THREE.Vector3(0, 3.2, -7.5);
    this.lookOffset = new THREE.Vector3(0, 1.8, 12.0);

    this.currentPos = new THREE.Vector3(0, 3.2, -7.5);
    this.currentLookAt = new THREE.Vector3(0, 1.8, 12.0);

    this.shakeIntensity = 0;
    this.shakeDecay = 5.0;
  }

  triggerShake(intensity = 0.5) {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
  }

  updateMenuCamera(playerPos, delta) {
    // Upright third-person camera behind player standing on center track looking down the track
    const desiredPos = new THREE.Vector3(0, 3.2, playerPos.z - 8.0);
    const desiredLookAt = new THREE.Vector3(0, 1.8, playerPos.z + 22.0);

    this.currentPos.lerp(desiredPos, 0.1);
    this.currentLookAt.lerp(desiredLookAt, 0.1);

    this.camera.up.set(0, 1, 0);
    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentLookAt);
  }

  update(playerPos, playerLane, playerIsJumping, delta) {
    const targetX = playerPos.x * 0.65;
    const targetY = Math.max(playerPos.y + 3.2, 3.2);
    const targetZ = playerPos.z + this.baseOffset.z;

    const desiredPos = new THREE.Vector3(targetX, targetY, targetZ);
    const desiredLookAt = new THREE.Vector3(
      playerPos.x * 0.4,
      playerPos.y + this.lookOffset.y,
      playerPos.z + this.lookOffset.z
    );

    if (this.shakeIntensity > 0) {
      const offsetX = (Math.random() - 0.5) * this.shakeIntensity;
      const offsetY = (Math.random() - 0.5) * this.shakeIntensity;
      desiredPos.x += offsetX;
      desiredPos.y += offsetY;

      this.shakeIntensity = Math.max(0, this.shakeIntensity - this.shakeDecay * delta);
    }

    const lerpFactor = 1.0 - Math.exp(-12 * delta);
    this.currentPos.lerp(desiredPos, lerpFactor);
    this.currentLookAt.lerp(desiredLookAt, lerpFactor);

    this.camera.up.set(0, 1, 0);
    this.camera.position.copy(this.currentPos);
    this.camera.lookAt(this.currentLookAt);
  }
}
