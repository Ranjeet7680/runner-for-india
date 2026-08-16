// TrainManager.js - Metro, Cargo, Express Trains (Stationary & Moving)
import * as THREE from 'three';
import { soundEngine } from '../audio/SoundEngine.js';

export class TrainManager {
  constructor(scene) {
    this.scene = scene;
    this.trains = [];
    this.lanes = [-2.5, 0, 2.5];

    // Shared Geometries & Materials
    this.metroBodyGeo = new THREE.BoxGeometry(2.3, 3.2, 16.0);
    this.cargoBodyGeo = new THREE.BoxGeometry(2.4, 3.4, 18.0);
    this.expressBodyGeo = new THREE.BoxGeometry(2.2, 3.0, 20.0);

    this.metroMat = new THREE.MeshStandardMaterial({ color: 0x0066ff, metalness: 0.7, roughness: 0.3 });
    this.cargoMat = new THREE.MeshStandardMaterial({ color: 0x8a3b14, metalness: 0.4, roughness: 0.8 });
    this.expressMat = new THREE.MeshStandardMaterial({ color: 0xe0e6ed, metalness: 0.9, roughness: 0.1 });
    
    this.windowMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.7 });
    this.headlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.darkMat = new THREE.MeshStandardMaterial({ color: 0x111622, roughness: 0.5 });
  }

  createTrain(type, laneIndex, zPos, isMoving = false, speed = 0) {
    const trainGroup = new THREE.Group();
    const xPos = this.lanes[laneIndex];
    trainGroup.position.set(xPos, 0, zPos);

    let bodyMesh;
    if (type === 'METRO') {
      bodyMesh = new THREE.Mesh(this.metroBodyGeo, this.metroMat);
      bodyMesh.position.y = 1.7;
      bodyMesh.castShadow = true;
      bodyMesh.receiveShadow = true;

      // Large Glowing Metro Windows along side
      const windowGeo = new THREE.BoxGeometry(2.34, 1.0, 14.0);
      const windows = new THREE.Mesh(windowGeo, this.windowMat);
      windows.position.y = 1.8;
      trainGroup.add(windows);

      // NEXORA Logo Panel on Top
      const logoGeo = new THREE.BoxGeometry(2.36, 0.4, 8.0);
      const logoMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
      const logo = new THREE.Mesh(logoGeo, logoMat);
      logo.position.y = 3.1;
      trainGroup.add(logo);

    } else if (type === 'CARGO') {
      bodyMesh = new THREE.Mesh(this.cargoBodyGeo, this.cargoMat);
      bodyMesh.position.y = 1.8;
      bodyMesh.castShadow = true;
      bodyMesh.receiveShadow = true;

      // Container Ribs Detail
      for (let z = -7; z <= 7; z += 2) {
        const ribGeo = new THREE.BoxGeometry(2.46, 3.42, 0.2);
        const rib = new THREE.Mesh(ribGeo, this.darkMat);
        rib.position.y = 1.8;
        rib.position.z = z;
        trainGroup.add(rib);
      }

    } else { // EXPRESS
      bodyMesh = new THREE.Mesh(this.expressBodyGeo, this.expressMat);
      bodyMesh.position.y = 1.6;
      bodyMesh.castShadow = true;
      bodyMesh.receiveShadow = true;

      // Aerodynamic Front Nose Cone
      const noseGeo = new THREE.ConeGeometry(1.1, 3.0, 4);
      const nose = new THREE.Mesh(noseGeo, this.expressMat);
      nose.rotation.x = -Math.PI / 2;
      nose.position.set(0, 1.6, -11);
      trainGroup.add(nose);
    }

    trainGroup.add(bodyMesh);

    // Front Headlights (Twin glowing spheres)
    const headlightGeo = new THREE.SphereGeometry(0.25, 8, 8);
    const hlLeft = new THREE.Mesh(headlightGeo, this.headlightMat);
    hlLeft.position.set(-0.7, 1.2, -8.05);
    trainGroup.add(hlLeft);

    const hlRight = new THREE.Mesh(headlightGeo, this.headlightMat);
    hlRight.position.set(0.7, 1.2, -8.05);
    trainGroup.add(hlRight);

    // Spot Light Beam casting on tracks
    const spot = new THREE.SpotLight(0xffffff, 3.0, 30, Math.PI / 6, 0.5);
    spot.position.set(0, 1.5, -8.0);
    spot.target.position.set(xPos, 0, -30);
    trainGroup.add(spot);
    trainGroup.add(spot.target);

    // Bounding Box Hitbox setup
    const depth = (type === 'EXPRESS' ? 20.0 : (type === 'CARGO' ? 18.0 : 16.0));
    const box = new THREE.Box3();

    const trainObj = {
      mesh: trainGroup,
      type: type,
      lane: laneIndex,
      isMoving: isMoving,
      speed: speed, // Movement towards player
      box: box,
      width: 2.2,
      height: 3.2,
      depth: depth,
      hornPlayed: false
    };

    this.scene.add(trainGroup);
    this.trains.push(trainObj);
    return trainObj;
  }

  update(playerPos, delta, gameSpeed) {
    for (let i = this.trains.length - 1; i >= 0; i--) {
      const train = this.trains[i];

      // If moving train, move towards player (decreasing Z)
      if (train.isMoving) {
        train.mesh.position.z -= (gameSpeed + train.speed) * delta;

        // Play horn when approaching player
        const distZ = train.mesh.position.z - playerPos.z;
        if (distZ > 10 && distZ < 35 && !train.hornPlayed) {
          soundEngine.playTrainHorn();
          train.hornPlayed = true;
        }
      }

      // Update Hitbox AABB
      train.box.setFromCenterAndSize(
        new THREE.Vector3(train.mesh.position.x, 1.6, train.mesh.position.z),
        new THREE.Vector3(train.width, train.height, train.depth)
      );

      // Remove train if far behind player
      if (train.mesh.position.z < playerPos.z - 25) {
        this.scene.remove(train.mesh);
        this.trains.splice(i, 1);
      }
    }
  }

  reset() {
    this.trains.forEach(t => this.scene.remove(t.mesh));
    this.trains = [];
  }
}
