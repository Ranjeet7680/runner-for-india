// PowerUpManager.js - Power-Ups (Air Rocket, Super Jump Shoes, Double Coin x2, Safety Bubble, Magnet, Shield)
import * as THREE from 'three';
import { soundEngine } from '../audio/SoundEngine.js';
import { voiceSystem } from '../audio/VoiceSystem.js';

export class PowerUpManager {
  constructor(scene) {
    this.scene = scene;
    this.powerups = [];
    this.lanes = [-2.5, 0, 2.5];

    this.boxGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    
    this.materials = {
      AIR_ROCKET: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.createIconTexture('🚀', '#d92600'), metalness: 0.8, roughness: 0.2 }),
      JUMP_SHOES: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.createIconTexture('👟', '#00b359'), metalness: 0.8, roughness: 0.2 }),
      DOUBLE_COIN: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.createIconTexture('2X', '#b38600'), metalness: 0.8, roughness: 0.2 }),
      SAFETY_BUBBLE: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.createIconTexture('🛡️', '#0055b3'), metalness: 0.8, roughness: 0.2 }),
      MAGNET: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.createIconTexture('🧲', '#661a99'), metalness: 0.8, roughness: 0.2 }),
      SPEED_BOOST: new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.createIconTexture('⚡', '#0099b3'), metalness: 0.8, roughness: 0.2 })
    };

    this.activePowerups = {
      AIR_ROCKET: 0,
      JUMP_SHOES: 0,
      DOUBLE_COIN: 0,
      SAFETY_BUBBLE: 0,
      MAGNET: 0,
      SPEED_BOOST: 0
    };

    this.durations = {
      AIR_ROCKET: 10.0,
      JUMP_SHOES: 10.0,
      DOUBLE_COIN: 10.0,
      SAFETY_BUBBLE: 10.0, // Fixed 10.0 seconds
      MAGNET: 10.0,        // Fixed 10.0 seconds
      SPEED_BOOST: 10.0
    };

    this.bubbleHealth = 0;
  }

  createIconTexture(symbol, bgColor) {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 128, 128);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 8;
    ctx.strokeRect(4, 4, 120, 120);
    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, 108, 108);
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 64px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#00f3ff';
    ctx.shadowBlur = 10;
    ctx.fillText(symbol, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }

  spawnPowerUp(type, laneIndex, zPos) {
    const group = new THREE.Group();
    group.position.set(this.lanes[laneIndex], 1.3, zPos);

    const mat = this.materials[type] || this.materials.MAGNET;
    const mesh = new THREE.Mesh(this.boxGeo, mat);
    mesh.castShadow = true;
    group.add(mesh);

    // Double Glowing Torus Rings for High Quality 3D Visuals
    const ringGeo = new THREE.TorusGeometry(0.85, 0.07, 8, 24);
    const ringMat = new THREE.MeshBasicMaterial({ color: mat.color });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    group.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(1.0, 0.04, 8, 24);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.6 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 2;
    group.add(ring2);

    const pObj = { mesh: group, ring: ring1, ring2: ring2, type: type, lane: laneIndex, baseZ: zPos, timeAcc: Math.random() * 10 };
    this.scene.add(group);
    this.powerups.push(pObj);
  }

  update(playerPos, playerRef, delta) {
    for (let i = this.powerups.length - 1; i >= 0; i--) {
      const p = this.powerups[i];
      p.timeAcc += delta * 4;
      p.mesh.rotation.y += delta * 3;
      p.ring.rotation.x += delta * 4;
      if (p.ring2) p.ring2.rotation.y += delta * 2;
      p.mesh.position.y = 1.3 + Math.sin(p.timeAcc) * 0.15;

      const dist = p.mesh.position.distanceTo(
        new THREE.Vector3(playerPos.x, playerPos.y + 0.9, playerPos.z)
      );

      if (dist < 1.4) {
        this.activatePowerUp(p.type, playerRef);
        soundEngine.playPowerup();
        this.scene.remove(p.mesh);
        this.powerups.splice(i, 1);
        continue;
      }

      if (p.mesh.position.z < playerPos.z - 15) {
        this.scene.remove(p.mesh);
        this.powerups.splice(i, 1);
      }
    }

    Object.keys(this.activePowerups).forEach(type => {
      if (this.activePowerups[type] > 0) {
        this.activePowerups[type] -= delta;
        if (this.activePowerups[type] <= 0) {
          this.activePowerups[type] = 0;
          playerRef.setPowerupVisual(type, false);
        }
      }
    });
  }

  activatePowerUp(type, playerRef) {
    this.activePowerups[type] = this.durations[type];
    playerRef.setPowerupVisual(type, true);

    if (type === 'AIR_ROCKET') voiceSystem.speak('ROCKET');
    else if (type === 'DOUBLE_COIN') voiceSystem.speak('DOUBLE');
    else if (type === 'SAFETY_BUBBLE') {
      this.bubbleHealth = 2; // Absorbs 2 hits!
      voiceSystem.speak('BUBBLE');
    } else {
      voiceSystem.speak('POWERUP');
    }
  }

  isActive(type) {
    return this.activePowerups[type] > 0;
  }

  consumeProtection(playerRef) {
    if (this.activePowerups.SAFETY_BUBBLE > 0 && this.bubbleHealth > 0) {
      this.bubbleHealth--;
      if (this.bubbleHealth <= 0) {
        this.activePowerups.SAFETY_BUBBLE = 0;
        playerRef.setPowerupVisual('SAFETY_BUBBLE', false);
      }
      soundEngine.playPowerup();
      return true;
    }
    return false;
  }

  reset(playerRef) {
    this.powerups.forEach(p => this.scene.remove(p.mesh));
    this.powerups = [];
    this.bubbleHealth = 0;
    Object.keys(this.activePowerups).forEach(type => {
      this.activePowerups[type] = 0;
      if (playerRef) playerRef.setPowerupVisual(type, false);
    });
  }
}
