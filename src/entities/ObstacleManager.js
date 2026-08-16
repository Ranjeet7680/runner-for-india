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

    this.barrierMat = new THREE.MeshStandardMaterial({ color: 0xff0055, roughness: 0.5 }); // Neon red warning
    this.stripeMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 }); // Yellow hazard stripes
    this.postMat = new THREE.MeshStandardMaterial({ color: 0x334466, roughness: 0.7 });
    this.coneMat = new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.4 });
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
      // Must Jump Over (height ~ 0.8m)
      const mesh = new THREE.Mesh(this.lowBarrierGeo, this.barrierMat);
      mesh.position.y = 0.4;
      mesh.castShadow = true;
      group.add(mesh);

      // Yellow hazard stripe band
      const stripeGeo = new THREE.BoxGeometry(2.22, 0.2, 0.42);
      const stripe = new THREE.Mesh(stripeGeo, this.stripeMat);
      stripe.position.y = 0.5;
      group.add(stripe);

      width = 2.2;
      height = 0.8;
      centerY = 0.4;

    } else if (type === 'HIGH_BARRIER') {
      // Must Slide Under (barrier sits overhead at Y ~ 1.8m)
      const beam = new THREE.Mesh(this.highBarrierGeo, this.barrierMat);
      beam.position.y = 1.8;
      beam.castShadow = true;
      group.add(beam);

      // Side Posts holding the overhead beam
      const postL = new THREE.Mesh(this.postGeo, this.postMat);
      postL.position.set(-1.1, 1.2, 0);
      group.add(postL);

      const postR = new THREE.Mesh(this.postGeo, this.postMat);
      postR.position.set(1.1, 1.2, 0);
      group.add(postR);

      // Warning text plate
      const plateGeo = new THREE.BoxGeometry(1.6, 0.3, 0.42);
      const plate = new THREE.Mesh(plateGeo, this.stripeMat);
      plate.position.y = 1.8;
      group.add(plate);

      width = 2.4;
      height = 1.2;
      centerY = 1.9; // Overhead hitbox center

    } else if (type === 'CONES') {
      // Construction cones (Jump or Dodge)
      for (let i = -0.6; i <= 0.6; i += 0.6) {
        const cone = new THREE.Mesh(this.coneGeo, this.coneMat);
        cone.position.set(i, 0.4, 0);
        cone.castShadow = true;
        group.add(cone);
      }
      width = 1.8;
      height = 0.8;
      centerY = 0.4;
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

  update(playerPos) {
    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      const obs = this.obstacles[i];

      // Update Hitbox AABB
      obs.box.setFromCenterAndSize(
        new THREE.Vector3(obs.mesh.position.x, obs.centerY, obs.mesh.position.z),
        new THREE.Vector3(obs.width, obs.height, obs.depth)
      );

      // Recycle if passed behind player
      if (obs.mesh.position.z < playerPos.z - 20) {
        this.scene.remove(obs.mesh);
        this.obstacles.splice(i, 1);
      }
    }
  }

  reset() {
    this.obstacles.forEach(o => this.scene.remove(o.mesh));
    this.obstacles = [];
  }
}
