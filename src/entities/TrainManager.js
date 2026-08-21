// TrainManager.js - Metro, Cargo (Maal), Petro Tanker, Express Coaches with 2-3 Multi-Coach Rakes & Triangle Ramps
import * as THREE from 'three';
import { soundEngine } from '../audio/SoundEngine.js';

export class TrainManager {
  constructor(scene) {
    this.scene = scene;
    this.trains = [];
    this.lanes = [-2.5, 0, 2.5];

    // Shared Geometries
    this.metroBodyGeo = new THREE.BoxGeometry(2.3, 3.2, 14.0);
    this.cargoBodyGeo = new THREE.BoxGeometry(2.4, 3.4, 14.0);
    this.petroTankGeo = new THREE.CylinderGeometry(1.2, 1.2, 13.5, 16);
    this.expressBodyGeo = new THREE.BoxGeometry(2.2, 3.0, 14.0);

    // Triangle Ramp Geometry (Wedge)
    this.rampGeo = this.createWedgeGeometry(2.3, 3.2, 5.0);

    this.initTrainTextures();

    this.metroMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.7, roughness: 0.3, map: this.metroTrainTexture });
    this.cargoMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.4, roughness: 0.7, map: this.cargoTrainTexture });
    this.petroMat = new THREE.MeshStandardMaterial({ color: 0xffcc00, metalness: 0.8, roughness: 0.2, map: this.petroTrainTexture });
    this.expressMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.9, roughness: 0.1, map: this.expressTrainTexture });
    this.rampMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, metalness: 0.5, roughness: 0.4, map: this.rampTexture });
    
    this.windowMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.7 });
    this.headlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.darkMat = new THREE.MeshStandardMaterial({ color: 0x111622, roughness: 0.5 });
    this.wheelMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.9, roughness: 0.3 });
  }

  createWedgeGeometry(width, height, depth) {
    const geo = new THREE.BufferGeometry();
    const w = width / 2;
    const h = height;
    const d = depth;

    // Triangular wedge vertices (facing towards -Z)
    const vertices = new Float32Array([
      // Front slanted face
      -w, 0, 0,    w, 0, 0,    w, h, d,
      -w, 0, 0,    w, h, d,   -w, h, d,

      // Bottom face
      -w, 0, 0,   -w, 0, d,    w, 0, d,
      -w, 0, 0,    w, 0, d,    w, 0, 0,

      // Back face
      -w, 0, d,   -w, h, d,    w, h, d,
      -w, 0, d,    w, h, d,    w, 0, d,

      // Left triangle side
      -w, 0, 0,   -w, h, d,   -w, 0, d,

      // Right triangle side
       w, 0, 0,    w, 0, d,    w, h, d
    ]);

    geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geo.computeVertexNormals();
    return geo;
  }

  initTrainTextures() {
    // Metro Texture
    const canvasM = document.createElement('canvas');
    canvasM.width = 256; canvasM.height = 128;
    const ctxM = canvasM.getContext('2d');
    ctxM.fillStyle = '#0f388a'; ctxM.fillRect(0, 0, 256, 128);
    ctxM.fillStyle = '#00f3ff'; ctxM.fillRect(0, 40, 256, 40);
    ctxM.fillStyle = '#0a1428';
    for (let x = 10; x < 256; x += 32) ctxM.fillRect(x, 44, 20, 32);
    ctxM.fillStyle = '#ffffff'; ctxM.fillRect(0, 90, 256, 8);
    this.metroTrainTexture = new THREE.CanvasTexture(canvasM);

    // Maal / Cargo Freight Texture
    const canvasC = document.createElement('canvas');
    canvasC.width = 128; canvasC.height = 128;
    const ctxC = canvasC.getContext('2d');
    ctxC.fillStyle = '#6b3012'; ctxC.fillRect(0, 0, 128, 128);
    ctxC.fillStyle = '#3d1807';
    for (let x = 0; x < 128; x += 16) ctxC.fillRect(x, 0, 4, 128);
    this.cargoTrainTexture = new THREE.CanvasTexture(canvasC);

    // Petro Oil Tanker Texture
    const canvasP = document.createElement('canvas');
    canvasP.width = 256; canvasP.height = 128;
    const ctxP = canvasP.getContext('2d');
    ctxP.fillStyle = '#d99b00'; ctxP.fillRect(0, 0, 256, 128);
    ctxP.fillStyle = '#e60000'; ctxP.fillRect(0, 50, 256, 28);
    ctxP.fillStyle = '#ffffff'; ctxP.font = 'bold 22px sans-serif';
    ctxP.fillText('PETROLEUM • HIGHLY INFLAMMABLE', 10, 72);
    this.petroTrainTexture = new THREE.CanvasTexture(canvasP);

    // Express Coach Texture
    const canvasE = document.createElement('canvas');
    canvasE.width = 256; canvasE.height = 128;
    const ctxE = canvasE.getContext('2d');
    ctxE.fillStyle = '#e0e6ed'; ctxE.fillRect(0, 0, 256, 128);
    ctxE.fillStyle = '#ff0055'; ctxE.fillRect(0, 50, 256, 20);
    ctxE.fillStyle = '#00f3ff'; ctxE.fillRect(0, 75, 256, 8);
    this.expressTrainTexture = new THREE.CanvasTexture(canvasE);

    // Triangle Hazard Ramp Texture
    const canvasR = document.createElement('canvas');
    canvasR.width = 128; canvasR.height = 128;
    const ctxR = canvasR.getContext('2d');
    ctxR.fillStyle = '#ffcc00'; ctxR.fillRect(0, 0, 128, 128);
    ctxR.fillStyle = '#111827';
    for (let i = -128; i < 256; i += 32) {
      ctxR.beginPath();
      ctxR.moveTo(i, 0); ctxR.lineTo(i + 16, 0);
      ctxR.lineTo(i + 16 + 128, 128); ctxR.lineTo(i + 128, 128);
      ctxR.closePath(); ctxR.fill();
    }
    this.rampTexture = new THREE.CanvasTexture(canvasR);
  }

  createSingleCoach(type, coachIndex) {
    const coach = new THREE.Group();

    if (type === 'METRO') {
      const body = new THREE.Mesh(this.metroBodyGeo, this.metroMat);
      body.position.y = 1.7;
      body.castShadow = true;
      coach.add(body);

      const windows = new THREE.Mesh(new THREE.BoxGeometry(2.34, 1.0, 12.0), this.windowMat);
      windows.position.y = 1.8;
      coach.add(windows);

    } else if (type === 'CARGO' || type === 'MAAL') {
      const body = new THREE.Mesh(this.cargoBodyGeo, this.cargoMat);
      body.position.y = 1.8;
      body.castShadow = true;
      coach.add(body);

      // Cargo Container Ribs & Coal Heaps
      for (let z = -5; z <= 5; z += 2.5) {
        const rib = new THREE.Mesh(new THREE.BoxGeometry(2.46, 3.42, 0.2), this.darkMat);
        rib.position.set(0, 1.8, z);
        coach.add(rib);
      }

    } else if (type === 'PETRO') {
      const tank = new THREE.Mesh(this.petroTankGeo, this.petroMat);
      tank.rotation.x = Math.PI / 2;
      tank.position.y = 1.8;
      tank.castShadow = true;
      coach.add(tank);

      // Tanker Pressure Dome Valves
      for (let z of [-3, 0, 3]) {
        const dome = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.4, 12), this.darkMat);
        dome.position.set(0, 3.0, z);
        coach.add(dome);
      }

    } else { // EXPRESS / COACH
      const body = new THREE.Mesh(this.expressBodyGeo, this.expressMat);
      body.position.y = 1.6;
      body.castShadow = true;
      coach.add(body);

      if (coachIndex === 0) {
        const nose = new THREE.Mesh(new THREE.ConeGeometry(1.1, 3.0, 4), this.expressMat);
        nose.rotation.x = -Math.PI / 2;
        nose.position.set(0, 1.6, -8);
        coach.add(nose);
      }
    }

    // Wheels / Bogeys under coach
    for (let z of [-4.5, 4.5]) {
      for (let x of [-0.9, 0.9]) {
        const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.2, 12), this.wheelMat);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(x, 0.35, z);
        coach.add(wheel);
      }
    }

    return coach;
  }

  createTrain(type, laneIndex, zPos, isMoving = false, speed = 0, coachCount = null) {
    const trainGroup = new THREE.Group();
    const xPos = this.lanes[laneIndex];

    // Determine coach count (2 to 3 joined coaches by default)
    const numCoaches = coachCount || (Math.random() < 0.6 ? 2 : 3);
    const coachLength = 14.0;
    const totalDepth = numCoaches * coachLength;

    trainGroup.position.set(xPos, 0, zPos);

    // Build 2 to 3 joined coaches
    for (let i = 0; i < numCoaches; i++) {
      const coachMesh = this.createSingleCoach(type, i);
      const coachZ = (i * coachLength) - (totalDepth / 2) + (coachLength / 2);
      coachMesh.position.z = coachZ;
      trainGroup.add(coachMesh);
    }

    // Front Headlights on engine coach
    const headlightGeo = new THREE.SphereGeometry(0.25, 8, 8);
    const frontZ = -(totalDepth / 2) - 0.1;
    const hlLeft = new THREE.Mesh(headlightGeo, this.headlightMat);
    hlLeft.position.set(-0.7, 1.2, frontZ);
    trainGroup.add(hlLeft);

    const hlRight = new THREE.Mesh(headlightGeo, this.headlightMat);
    hlRight.position.set(0.7, 1.2, frontZ);
    trainGroup.add(hlRight);

    // Volumetric Headlight Light Cones
    const beamGeo = new THREE.ConeGeometry(0.8, 8.0, 12, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const beamL = new THREE.Mesh(beamGeo, beamMat);
    beamL.rotation.x = Math.PI / 2;
    beamL.position.set(-0.7, 1.2, frontZ - 4.0);
    trainGroup.add(beamL);

    const beamR = new THREE.Mesh(beamGeo, beamMat);
    beamR.rotation.x = Math.PI / 2;
    beamR.position.set(0.7, 1.2, frontZ - 4.0);
    trainGroup.add(beamR);

    // Sleek low-profile aerodynamic bumper & glowing cyan ramp direction indicator
    const bumperGeo = new THREE.BoxGeometry(2.3, 0.4, 0.8);
    const bumperMat = new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.8, roughness: 0.2 });
    const bumper = new THREE.Mesh(bumperGeo, bumperMat);
    bumper.position.set(0, 0.2, frontZ - 0.4);
    trainGroup.add(bumper);

    const arrowGeo = new THREE.PlaneGeometry(1.2, 2.5);
    const arrowMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.7, side: THREE.DoubleSide });
    const arrow = new THREE.Mesh(arrowGeo, arrowMat);
    arrow.rotation.x = -Math.PI / 2;
    arrow.position.set(0, 0.05, frontZ - 2.5);
    trainGroup.add(arrow);

    const rampLength = 6.0;
    const box = new THREE.Box3();

    const trainObj = {
      mesh: trainGroup,
      type: type,
      lane: laneIndex,
      isMoving: isMoving,
      speed: speed,
      box: box,
      width: 2.3,
      height: 3.2,
      depth: totalDepth,
      coachCount: numCoaches,
      hasRamp: true,
      rampLength: rampLength,
      hornPlayed: false
    };

    this.scene.add(trainGroup);
    this.trains.push(trainObj);
    return trainObj;
  }

  update(gameSpeed, delta, playerPos) {
    const pZ = (typeof playerPos === 'object' && playerPos !== null) ? playerPos.z : (typeof playerPos === 'number' ? playerPos : 0);

    for (let i = this.trains.length - 1; i >= 0; i--) {
      const train = this.trains[i];

      if (train.isMoving) {
        train.mesh.position.z -= (gameSpeed + train.speed) * delta;

        const distZ = train.mesh.position.z - pZ;
        if (distZ > 10 && distZ < 35 && !train.hornPlayed) {
          soundEngine.playSpatialTrainHorn(train.mesh.position.x, train.mesh.position.z);
          soundEngine.playTrainEnginePass(train.mesh.position.x);
          train.hornPlayed = true;
        }
      }

      train.box.setFromCenterAndSize(
        new THREE.Vector3(train.mesh.position.x, 1.6, train.mesh.position.z),
        new THREE.Vector3(train.width, train.height, train.depth)
      );

      if (train.mesh.position.z < pZ - 35) {
        this.scene.remove(train.mesh);
        this.trains.splice(i, 1);
      }
    }
  }

  getTrainRampHeight(playerPos, isJumping = false) {
    if (!playerPos) return null;
    const px = playerPos.x;
    const pz = playerPos.z;
    const py = playerPos.y;

    for (let i = 0; i < this.trains.length; i++) {
      const t = this.trains[i];
      const tx = t.mesh.position.x;
      const tz = t.mesh.position.z;
      const halfW = t.width / 2 + 0.6;
      const halfD = t.depth / 2;

      // Check if player is in same lane
      if (Math.abs(px - tx) <= halfW) {
        const frontZ = tz - halfD;

        // Triangle Ramp at front of train: only climb if player jumped or is already elevated
        if (pz >= (frontZ - 7.0) && pz <= frontZ) {
          if (py >= 0.8 || isJumping) {
            const progress = Math.max(0, Math.min(1.0, (pz - (frontZ - 7.0)) / 7.0));
            return progress * 3.2;
          }
        }

        // Running on top of train roof
        if (pz >= frontZ && pz <= (tz + halfD + 2.0)) {
          if (py >= 2.0) {
            return 3.2; // Roof height
          }
        }
      }
    }
    return null;
  }

  checkCollision(playerBox, playerY = 0, playerZ = 0, playerX = 0) {
    for (let i = 0; i < this.trains.length; i++) {
      const t = this.trains[i];
      if (t.box.intersectsBox(playerBox)) {
        // If player is elevated on train roof (y >= 2.8), they are safe running on top
        if (playerY >= 2.8) {
          continue;
        }
        return true;
      }
    }
    return false;
  }

  reset() {
    this.trains.forEach(t => this.scene.remove(t.mesh));
    this.trains = [];
  }
}
