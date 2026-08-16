// CoinManager.js - 3D Coins, Sky Flight Formations & Magnet Physics
import * as THREE from 'three';
import { soundEngine } from '../audio/SoundEngine.js';

export class CoinManager {
  constructor(scene) {
    this.scene = scene;
    this.coins = [];
    this.lanes = [-2.5, 0, 2.5];

    this.coinGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.08, 16);
    this.coinMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0xaa8800,
      emissiveIntensity: 0.3
    });

    this.initParticlePool();
  }

  initParticlePool() {
    const count = 50;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xffd700,
      size: 0.3,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    this.sparkles = new THREE.Points(geo, mat);
    this.sparkles.visible = false;
    this.scene.add(this.sparkles);
    this.sparkleTimer = 0;
  }

  triggerSparkles(pos) {
    this.sparkles.position.copy(pos);
    const attr = this.sparkles.geometry.attributes.position;
    const arr = attr.array;
    for (let i = 0; i < arr.length / 3; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 1.5;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }
    attr.needsUpdate = true;
    this.sparkles.visible = true;
    this.sparkleTimer = 0.3;
  }

  spawnCoin(laneIndex, yPos, zPos) {
    const mesh = new THREE.Mesh(this.coinGeo, this.coinMat);
    mesh.rotation.x = Math.PI / 2;
    mesh.position.set(this.lanes[laneIndex], yPos, zPos);

    const coinObj = { mesh: mesh, lane: laneIndex, isCollected: false };
    this.scene.add(mesh);
    this.coins.push(coinObj);
  }

  spawnPattern(patternType, laneIndex, startZ) {
    if (patternType === 'SKY_FLIGHT') {
      // Aerial rocket flight coin trail at Y = 8.5m
      for (let z = 0; z < 15; z += 2.2) {
        const l = Math.floor(Math.random() * 3);
        this.spawnCoin(l, 8.5, startZ + z);
      }
    } else if (patternType === 'LINE') {
      for (let z = 0; z < 10; z += 2) {
        this.spawnCoin(laneIndex, 0.8, startZ + z);
      }
    } else if (patternType === 'ARCH') {
      const heights = [0.8, 1.4, 2.0, 2.2, 2.0, 1.4, 0.8];
      heights.forEach((h, idx) => {
        this.spawnCoin(laneIndex, h, startZ + idx * 1.8);
      });
    } else if (patternType === 'ZIGZAG') {
      let l = laneIndex;
      for (let z = 0; z < 9; z += 2.2) {
        this.spawnCoin(l, 0.8, startZ + z);
        l = (l === 0) ? (Math.random() > 0.5 ? 1 : -1) : 0;
      }
    }
  }

  update(playerPos, magnetActive, delta) {
    if (this.sparkleTimer > 0) {
      this.sparkleTimer -= delta;
      if (this.sparkleTimer <= 0) this.sparkles.visible = false;
    }

    const magnetRadius = 14.0;
    let collectedCount = 0;

    for (let i = this.coins.length - 1; i >= 0; i--) {
      const coin = this.coins[i];
      coin.mesh.rotation.z += delta * 4;

      if (magnetActive) {
        const distToPlayer = coin.mesh.position.distanceTo(playerPos);
        if (distToPlayer < magnetRadius) {
          coin.mesh.position.lerp(
            new THREE.Vector3(playerPos.x, playerPos.y + 0.9, playerPos.z),
            10.0 * delta
          );
        }
      }

      const dist = coin.mesh.position.distanceTo(
        new THREE.Vector3(playerPos.x, playerPos.y + 0.9, playerPos.z)
      );

      if (dist < 1.3 && !coin.isCollected) {
        coin.isCollected = true;
        soundEngine.playCoin();
        this.triggerSparkles(coin.mesh.position.clone());
        this.scene.remove(coin.mesh);
        this.coins.splice(i, 1);
        collectedCount++;
        continue;
      }

      if (coin.mesh.position.z < playerPos.z - 15) {
        this.scene.remove(coin.mesh);
        this.coins.splice(i, 1);
      }
    }

    return collectedCount;
  }

  reset() {
    this.coins.forEach(c => this.scene.remove(c.mesh));
    this.coins = [];
    if (this.sparkles) this.sparkles.visible = false;
  }
}
