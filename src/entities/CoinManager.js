// CoinManager.js - 3D Coins, Sky Flight Formations & Magnet Physics
import * as THREE from 'three';
import { soundEngine } from '../audio/SoundEngine.js';

export class CoinManager {
  constructor(scene) {
    this.scene = scene;
    this.coins = [];
    this.lanes = [-2.5, 0, 2.5];

    this.initCoinTexture();

    this.coinGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.1, 24);
    this.coinMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.95,
      roughness: 0.1,
      map: this.coinTexture,
      emissive: 0xaa7700,
      emissiveIntensity: 0.4
    });

    this.initParticlePool();
  }

  initCoinTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createRadialGradient(64, 64, 5, 64, 64, 60);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.3, '#ffd700');
    grad.addColorStop(0.7, '#ffaa00');
    grad.addColorStop(1, '#b37700');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(64, 64, 60, 0, Math.PI * 2);
    ctx.fill();

    ctx.lineWidth = 6;
    ctx.strokeStyle = '#fff5aa';
    ctx.stroke();

    ctx.lineWidth = 4;
    ctx.strokeStyle = '#805500';
    ctx.beginPath();
    ctx.arc(64, 64, 50, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 48px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#ff8800';
    ctx.shadowBlur = 8;
    ctx.fillText('★', 64, 64);

    this.coinTexture = new THREE.CanvasTexture(canvas);
  }

  initParticlePool() {
    const count = 80;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      colors[i * 3] = 1.0;
      colors[i * 3 + 1] = Math.random() > 0.3 ? 0.85 : 0.95;
      colors[i * 3 + 2] = Math.random() > 0.5 ? 0.0 : 0.8;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
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
      arr[i * 3] = (Math.random() - 0.5) * 2.2;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 2.2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 2.2;
    }
    attr.needsUpdate = true;
    this.sparkles.visible = true;
    this.sparkleTimer = 0.45;
  }

  spawnCoin(laneIndex, yPos, zPos) {
    const group = new THREE.Group();
    group.position.set(this.lanes[laneIndex], yPos, zPos);

    const mesh = new THREE.Mesh(this.coinGeo, this.coinMat);
    mesh.rotation.x = Math.PI / 2;
    mesh.castShadow = true;
    group.add(mesh);

    // Glowing Golden Aura Disc
    const auraGeo = new THREE.CircleGeometry(0.5, 16);
    const auraMat = new THREE.MeshBasicMaterial({ color: 0xffcc00, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
    const aura = new THREE.Mesh(auraGeo, auraMat);
    aura.rotation.x = -Math.PI / 2;
    aura.position.y = -0.3;
    group.add(aura);

    const coinObj = { mesh: group, coinMesh: mesh, lane: laneIndex, baseY: yPos, timeAcc: Math.random() * 10, isCollected: false };
    this.scene.add(group);
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
      coin.timeAcc += delta * 5;
      coin.coinMesh.rotation.z += delta * 4;
      coin.mesh.position.y = coin.baseY + Math.sin(coin.timeAcc) * 0.08;

      if (magnetActive) {
        const distToPlayer = coin.mesh.position.distanceTo(playerPos);
        if (distToPlayer < magnetRadius) {
          coin.mesh.position.lerp(
            new THREE.Vector3(playerPos.x, playerPos.y + 0.9, playerPos.z),
            12.0 * delta
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
