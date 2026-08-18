// ObstacleManager.js - Low Jump Hurdles, Overhead Slide Barriers, Signal Poles
import * as THREE from 'three';

export class ObstacleManager {
  constructor(scene) {
    this.scene = scene;
    this.obstacles = [];
    this.lanes = [-2.5, 0, 2.5];

    // Shared Geometries & Materials
    this.lowBarrierGeo = new THREE.BoxGeometry(2.2, 0.8, 0.4);
    this.highBarrierGeo = new THREE.BoxGeometry(2.4, 0.6, 0.4);
    this.postGeo = new THREE.CylinderGeometry(0.1, 0.1, 3.2, 8);
    this.coneGeo = new THREE.ConeGeometry(0.35, 0.8, 8);

    this.initHazardTexture();

    this.barrierMat = new THREE.MeshStandardMaterial({ color: 0xff0055, roughness: 0.5 });
    this.stripeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.hazardTexture, roughness: 0.3 });
    this.postMat = new THREE.MeshStandardMaterial({ color: 0x334466, roughness: 0.7 });
    this.coneMat = new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.4 });
  }

  initHazardTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffcc00';
    ctx.fillRect(0, 0, 128, 128);
    ctx.fillStyle = '#111827';
    for (let i = -128; i < 256; i += 32) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + 16, 0);
      ctx.lineTo(i + 16 + 128, 128);
      ctx.lineTo(i + 128, 128);
      ctx.closePath();
      ctx.fill();
    }
    this.hazardTexture = new THREE.CanvasTexture(canvas);
  }

  createObstacle(type, laneIndex, zPos) {
    const group = new THREE.Group();
    const xPos = this.lanes[laneIndex];
    group.position.set(xPos, 0, zPos);

    let width = 2.0;
    let height = 1.0;
    let depth = 0.5;
    let centerY = 0.5;

    if (type === 'LOW_BARRIER') {
      const mesh = new THREE.Mesh(this.lowBarrierGeo, this.barrierMat);
      mesh.position.y = 0.4;
      mesh.castShadow = true;
      group.add(mesh);

      const stripeGeo = new THREE.BoxGeometry(2.22, 0.2, 0.42);
      const stripe = new THREE.Mesh(stripeGeo, this.stripeMat);
      stripe.position.y = 0.5;
      group.add(stripe);

      width = 2.2;
      height = 0.8;
      centerY = 0.4;

    } else if (type === 'HIGH_BARRIER') {
      const beam = new THREE.Mesh(this.highBarrierGeo, this.barrierMat);
      beam.position.y = 1.8;
      beam.castShadow = true;
      group.add(beam);

      const postL = new THREE.Mesh(this.postGeo, this.postMat);
      postL.position.set(-1.1, 1.2, 0);
      group.add(postL);

      const postR = new THREE.Mesh(this.postGeo, this.postMat);
      postR.position.set(1.1, 1.2, 0);
      group.add(postR);

      const plateGeo = new THREE.BoxGeometry(1.6, 0.3, 0.42);
      const plate = new THREE.Mesh(plateGeo, this.stripeMat);
      plate.position.y = 1.8;
      group.add(plate);

      width = 2.4;
      height = 1.2;
      centerY = 1.9;

    } else if (type === 'CONES') {
      for (let i = -0.6; i <= 0.6; i += 0.6) {
        const cone = new THREE.Mesh(this.coneGeo, this.coneMat);
        cone.position.set(i, 0.4, 0);
        cone.castShadow = true;
        group.add(cone);
      }
      width = 1.8;
      height = 0.8;
      centerY = 0.4;

    } else if (type === 'ELECTRIC_LASER_GRID') {
      // 1st Game Over Hazard: High-Voltage Laser Field
      const pillarGeo = new THREE.CylinderGeometry(0.12, 0.14, 2.5, 8);
      const pillarMat = new THREE.MeshStandardMaterial({ color: 0x223344, metalness: 0.8, roughness: 0.2 });
      const pLeft = new THREE.Mesh(pillarGeo, pillarMat); pLeft.position.set(-1.1, 1.25, 0);
      const pRight = new THREE.Mesh(pillarGeo, pillarMat); pRight.position.set(1.1, 1.25, 0);
      group.add(pLeft, pRight);

      // Glowing Cyan Laser Beams
      const beamMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
      for (let y = 0.5; y <= 2.1; y += 0.5) {
        const laser = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.2, 8), beamMat);
        laser.rotation.z = Math.PI / 2;
        laser.position.set(0, y, 0);
        group.add(laser);
      }

      width = 2.2;
      height = 2.4;
      centerY = 1.2;

    } else if (type === 'EXPLOSIVE_HAZARD_BARREL') {
      // 2nd Game Over Hazard: Red Explosive Petroleum Barrels
      const barrelGeo = new THREE.CylinderGeometry(0.4, 0.4, 1.1, 12);
      const barrelMat = new THREE.MeshStandardMaterial({ color: 0xdd1100, roughness: 0.3, metalness: 0.7 });
      const warningMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 });

      for (let offset of [-0.6, 0.6]) {
        const barrel = new THREE.Mesh(barrelGeo, barrelMat);
        barrel.position.set(offset, 0.55, 0);
        group.add(barrel);

        const band = new THREE.Mesh(new THREE.CylinderGeometry(0.41, 0.41, 0.2, 12), warningMat);
        band.position.set(offset, 0.55, 0);
        group.add(band);
      }

      width = 1.9;
      height = 1.2;
      centerY = 0.6;
    }

    const box = new THREE.Box3();
    const obsObj = {
      mesh: group,
      type: type,
      lane: laneIndex,
      box: box,
      width: width,
      height: height,
      depth: depth,
      centerY: centerY
    };

    this.scene.add(group);
    this.obstacles.push(obsObj);
    return obsObj;
  }

  update(gameSpeed, delta, playerZ) {
    const pZ = (typeof playerZ === 'number') ? playerZ : (playerZ && playerZ.z ? playerZ.z : 0);

    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      const obs = this.obstacles[i];

      obs.box.setFromCenterAndSize(
        new THREE.Vector3(obs.mesh.position.x, obs.centerY, obs.mesh.position.z),
        new THREE.Vector3(obs.width, obs.height, obs.depth)
      );

      if (obs.mesh.position.z < pZ - 20) {
        this.scene.remove(obs.mesh);
        this.obstacles.splice(i, 1);
      }
    }
  }

  checkCollision(playerBox, isSliding = false, isJumping = false, playerY = 0) {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obs = this.obstacles[i];
      if (obs.box.intersectsBox(playerBox)) {
        if (obs.type === 'HIGH_BARRIER' && isSliding) {
          continue; // Slide safely under high barrier!
        }
        if ((obs.type === 'LOW_BARRIER' || obs.type === 'CONES') && (isJumping || playerY > 0.8)) {
          continue; // Jump safely over low hurdle!
        }
        return true;
      }
    }
    return false;
  }

  reset() {
    this.obstacles.forEach(o => this.scene.remove(o.mesh));
    this.obstacles = [];
  }
}
