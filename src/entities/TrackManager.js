// TrackManager.js - Elevated Catenary Gantries & Clean Railway Tracks
import * as THREE from 'three';

export class TrackManager {
  constructor(scene) {
    this.scene = scene;
    this.chunkLength = 60;
    this.visibleChunks = 6;
    this.chunks = [];

    // Shared Geometries & Materials
    this.railGeo = new THREE.BoxGeometry(0.14, 0.16, this.chunkLength);
    this.sleeperGeo = new THREE.BoxGeometry(2.1, 0.1, 0.3);
    this.ballastGeo = new THREE.BoxGeometry(10.0, 0.4, this.chunkLength);
    this.groundGeo = new THREE.BoxGeometry(250.0, 0.2, this.chunkLength);
    this.grassStripGeo = new THREE.BoxGeometry(8.0, 0.3, this.chunkLength);
    this.catenaryPoleGeo = new THREE.CylinderGeometry(0.16, 0.22, 9.5, 8);
    this.catenaryBeamGeo = new THREE.BoxGeometry(12.5, 0.25, 0.25);
    this.wallGeo = new THREE.BoxGeometry(0.4, 0.8, this.chunkLength);
    this.wallNeonGeo = new THREE.BoxGeometry(0.15, 0.1, this.chunkLength);

    this.railMat = new THREE.MeshStandardMaterial({
      color: 0x00f3ff,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x0066aa,
      emissiveIntensity: 0.5
    });

    this.sleeperMat = new THREE.MeshStandardMaterial({ color: 0x3a2518, roughness: 0.8 });
    this.ballastMat = new THREE.MeshStandardMaterial({ color: 0x161e33, roughness: 0.9 });
    this.groundMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.8, metalness: 0.1 });
    this.grassStripMat = new THREE.MeshStandardMaterial({ color: 0x4caf50, roughness: 0.7 });
    this.wallMat = new THREE.MeshStandardMaterial({ color: 0x162036, roughness: 0.7 });
    this.wallNeonMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    
    this.poleMat = new THREE.MeshStandardMaterial({
      color: 0x00f3ff,
      metalness: 0.7,
      emissive: 0x0088cc,
      emissiveIntensity: 0.4
    });

    this.lanes = [-2.5, 0, 2.5];
    this.spawnZ = 0;

    this.initTracks();
  }

  initTracks() {
    for (let i = 0; i < this.visibleChunks; i++) {
      this.createChunk(i * this.chunkLength);
    }
  }

  createChunk(zPos) {
    const chunkGroup = new THREE.Group();
    chunkGroup.position.z = zPos;

    const ground = new THREE.Mesh(this.groundGeo, this.groundMat);
    ground.position.set(0, -0.4, 0);
    ground.receiveShadow = true;
    chunkGroup.add(ground);

    const grassL = new THREE.Mesh(this.grassStripGeo, this.grassStripMat);
    grassL.position.set(-9.0, -0.15, 0);
    grassL.receiveShadow = true;
    chunkGroup.add(grassL);

    const grassR = new THREE.Mesh(this.grassStripGeo, this.grassStripMat);
    grassR.position.set(9.0, -0.15, 0);
    grassR.receiveShadow = true;
    chunkGroup.add(grassR);

    const ballast = new THREE.Mesh(this.ballastGeo, this.ballastMat);
    ballast.position.set(0, -0.2, 0);
    ballast.receiveShadow = true;
    chunkGroup.add(ballast);

    // Side Retaining Walls with Glowing Neon Strips
    const wallL = new THREE.Mesh(this.wallGeo, this.wallMat);
    wallL.position.set(-5.1, 0.2, 0);
    chunkGroup.add(wallL);

    const wallNeonL = new THREE.Mesh(this.wallNeonGeo, this.wallNeonMat);
    wallNeonL.position.set(-5.1, 0.62, 0);
    chunkGroup.add(wallNeonL);

    const wallR = new THREE.Mesh(this.wallGeo, this.wallMat);
    wallR.position.set(5.1, 0.2, 0);
    chunkGroup.add(wallR);

    const wallNeonR = new THREE.Mesh(this.wallNeonGeo, this.wallNeonMat);
    wallNeonR.position.set(5.1, 0.62, 0);
    chunkGroup.add(wallNeonR);

    // Optimized 1-Draw-Call InstancedMesh for Railway Sleepers (120FPS+ Ultra Fast Rendering)
    const sleeperCountPerChunk = 3 * Math.floor(this.chunkLength / 2.2);
    const instancedSleepers = new THREE.InstancedMesh(this.sleeperGeo, this.sleeperMat, sleeperCountPerChunk);
    instancedSleepers.receiveShadow = true;

    const dummy = new THREE.Object3D();
    let sleeperIdx = 0;

    this.lanes.forEach(x => {
      const railL = new THREE.Mesh(this.railGeo, this.railMat);
      railL.position.set(x - 0.7, 0.08, 0);
      railL.receiveShadow = true;
      chunkGroup.add(railL);

      const railR = new THREE.Mesh(this.railGeo, this.railMat);
      railR.position.set(x + 0.7, 0.08, 0);
      railR.receiveShadow = true;
      chunkGroup.add(railR);

      for (let z = -this.chunkLength / 2; z < this.chunkLength / 2; z += 2.2) {
        if (sleeperIdx < sleeperCountPerChunk) {
          dummy.position.set(x, 0.02, z);
          dummy.updateMatrix();
          instancedSleepers.setMatrixAt(sleeperIdx++, dummy.matrix);
        }
      }
    });

    instancedSleepers.instanceMatrix.needsUpdate = true;
    chunkGroup.add(instancedSleepers);

    // Elevated Catenary Gantries (Well above camera frustum!)
    for (let z = -this.chunkLength / 2 + 15; z < this.chunkLength / 2; z += 35) {
      const gantryGroup = new THREE.Group();
      gantryGroup.position.set(0, 0, z);

      const poleL = new THREE.Mesh(this.catenaryPoleGeo, this.poleMat);
      poleL.position.set(-6.0, 4.75, 0);
      gantryGroup.add(poleL);

      const poleR = new THREE.Mesh(this.catenaryPoleGeo, this.poleMat);
      poleR.position.set(6.0, 4.75, 0);
      gantryGroup.add(poleR);

      const beam = new THREE.Mesh(this.catenaryBeamGeo, this.poleMat);
      beam.position.set(0, 9.2, 0);
      gantryGroup.add(beam);

      const signalGeo = new THREE.SphereGeometry(0.35, 12, 12);
      const signal1 = new THREE.Mesh(signalGeo, new THREE.MeshBasicMaterial({ color: 0x00ff88 }));
      signal1.position.set(-2.5, 8.7, 0);
      gantryGroup.add(signal1);

      const signal2 = new THREE.Mesh(signalGeo, new THREE.MeshBasicMaterial({ color: 0xff007f }));
      signal2.position.set(2.5, 8.7, 0);
      gantryGroup.add(signal2);

      // Overhead Power Wire Lines
      const wireMat = new THREE.LineBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.7 });
      [-2.5, 0, 2.5].forEach(wx => {
        const wireGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(wx, 8.5, -this.chunkLength / 2),
          new THREE.Vector3(wx, 8.5, this.chunkLength / 2)
        ]);
        const wire = new THREE.Line(wireGeo, wireMat);
        gantryGroup.add(wire);
      });

      chunkGroup.add(gantryGroup);
    }

    this.scene.add(chunkGroup);
    this.chunks.push(chunkGroup);
    this.spawnZ = zPos + this.chunkLength;
  }

  update(playerZ) {
    if (this.chunks.length > 0) {
      const firstChunk = this.chunks[0];
      if (firstChunk.position.z + (this.chunkLength / 2) < playerZ - 30) {
        this.scene.remove(firstChunk);
        this.chunks.shift();
        this.createChunk(this.spawnZ);
      }
    }
  }

  reset() {
    this.chunks.forEach(c => this.scene.remove(c));
    this.chunks = [];
    this.spawnZ = 0;
    this.initTracks();
  }
}
