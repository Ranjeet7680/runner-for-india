// AiBotRunner.js - AI Computer Runner Bot for 2-Minute Race Mode
import * as THREE from 'three';

export class AiBotRunner {
  constructor(scene) {
    this.scene = scene;
    this.lane = 1; // Start in right lane
    this.laneWidth = 2.5;
    this.targetX = 2.5;
    this.position = new THREE.Vector3(2.5, 0, 0);

    this.mesh = new THREE.Group();
    this.buildBotMesh();
    this.scene.add(this.mesh);

    this.distance = 0;
    this.speed = 18.0;
    this.laneTimer = 0;
    this.animTime = 0;
  }

  buildBotMesh() {
    // 3D AI Robot / CID Detective Mesh
    const botMat = new THREE.MeshStandardMaterial({ color: 0xff0055, roughness: 0.3, metalness: 0.8 });
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });

    // Torso
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.85, 0.4), botMat);
    torso.position.y = 1.1;
    this.mesh.add(torso);

    const core = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 12), coreMat);
    core.position.set(0, 1.25, 0.22);
    this.mesh.add(core);

    // Head
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.45, 0.42), botMat);
    head.position.y = 1.7;
    this.mesh.add(head);

    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.12, 0.44), coreMat);
    visor.position.set(0, 1.74, 0.02);
    this.mesh.add(visor);

    // Arms & Legs
    this.leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.7, 0.2), botMat);
    this.leftArm.position.set(-0.45, 1.1, 0);
    this.rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.7, 0.2), botMat);
    this.rightArm.position.set(0.45, 1.1, 0);

    this.leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.7, 0.22), botMat);
    this.leftLeg.position.set(-0.18, 0.35, 0);
    this.rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.7, 0.22), botMat);
    this.rightLeg.position.set(0.18, 0.35, 0);

    this.mesh.add(this.leftArm, this.rightArm, this.leftLeg, this.rightLeg);
    this.isJumping = false;
    this.isSliding = false;
    this.velocityY = 0;
  }

  update(playerSpeed, delta, playerZ) {
    // Neural Adaptive AI Speed (Stays neck-and-neck with player for intense 2-minute race)
    const speedVariation = (Math.sin(this.distance * 0.05) * 2.8);
    this.speed = Math.max(12.0, playerSpeed + speedVariation);
    
    this.distance += this.speed * delta;
    this.position.z = this.distance;

    // AI Pathfinding & Obstacle Reaction Engine
    this.laneTimer += delta;
    if (this.laneTimer > 2.8 + Math.random() * 2.0) {
      this.laneTimer = 0;
      const lanes = [-2.5, 0, 2.5];
      const nextLane = lanes[Math.floor(Math.random() * lanes.length)];
      this.targetX = nextLane;

      // Random AI Jump & Slide Evasion Tactics
      const randAct = Math.random();
      if (randAct > 0.65 && !this.isJumping) {
        this.isJumping = true;
        this.velocityY = 16.0;
      } else if (randAct < 0.35 && !this.isSliding) {
        this.isSliding = true;
        setTimeout(() => { this.isSliding = false; }, 800);
      }
    }

    // Gravity & Jump Physics for AI Bot
    if (this.isJumping) {
      this.velocityY -= 45.0 * delta;
      this.position.y += this.velocityY * delta;
      if (this.position.y <= 0) {
        this.position.y = 0;
        this.velocityY = 0;
        this.isJumping = false;
      }
    }

    // Smooth position lerp
    this.position.x += (this.targetX - this.position.x) * (1.0 - Math.exp(-14 * delta));
    this.mesh.position.copy(this.position);

    // AI Bot Dynamic Stride Animation
    this.animTime += delta * 12;
    if (this.isSliding) {
      this.mesh.rotation.x = -Math.PI / 3;
      this.mesh.position.y = -0.3;
    } else {
      this.mesh.rotation.x = 0;
      this.leftArm.rotation.x = Math.sin(this.animTime) * 0.7;
      this.rightArm.rotation.x = -Math.sin(this.animTime) * 0.7;
      this.leftLeg.rotation.x = -Math.sin(this.animTime) * 0.7;
      this.rightLeg.rotation.x = Math.sin(this.animTime) * 0.7;
    }
  }

  reset() {
    this.lane = 1;
    this.targetX = 2.5;
    this.distance = 0;
    this.position.set(2.5, 0, 0);
    this.mesh.position.set(2.5, 0, 0);
  }

  destroy() {
    this.scene.remove(this.mesh);
  }
}
