// CityGenerator.js - 8 Location Landmarks & Real-time Dynamic Day-Night Cycle
import * as THREE from 'three';

export class CityGenerator {
  constructor(scene) {
    this.scene = scene;
    this.currentMap = 'DYNAMIC_DAY_NIGHT';
    this.landmarks = [];
    this.cycleTime = 0;

    this.initTextures();
    this.initEnvironmentLighting();
    this.buildInitialCity();
  }

  initTextures() {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#0a1428';
    ctx.fillRect(0, 0, 128, 128);
    ctx.fillStyle = '#00f3ff';
    for (let y = 8; y < 128; y += 16) {
      for (let x = 8; x < 128; x += 16) {
        if (Math.random() > 0.3) ctx.fillRect(x, y, 10, 10);
      }
    }
    this.buildingTextureCyan = new THREE.CanvasTexture(canvas);
    this.buildingTextureCyan.wrapS = THREE.RepeatWrapping;
    this.buildingTextureCyan.wrapT = THREE.RepeatWrapping;
    this.buildingTextureCyan.repeat.set(2, 8);

    const canvasWh = document.createElement('canvas');
    canvasWh.width = 64; canvasWh.height = 64;
    const ctxWh = canvasWh.getContext('2d');
    ctxWh.fillStyle = '#4a2511';
    ctxWh.fillRect(0, 0, 64, 64);
    ctxWh.fillStyle = '#2b1408';
    for (let y = 0; y < 64; y += 8) {
      ctxWh.fillRect(0, y, 64, 2);
    }
    this.warehouseTexture = new THREE.CanvasTexture(canvasWh);
    this.warehouseTexture.wrapS = THREE.RepeatWrapping;
    this.warehouseTexture.wrapT = THREE.RepeatWrapping;
    this.warehouseTexture.repeat.set(4, 4);
  }

  initEnvironmentLighting() {
    this.skyColor = new THREE.Color(0x0c1b40);
    this.scene.background = this.skyColor;
    this.scene.fog = new THREE.FogExp2(0x0c1b40, 0.005);
  }

  setMap(mapType) {
    this.currentMap = mapType;
    if (mapType === 'DAY_METRO') {
      this.skyColor.setHex(0x3a86ff);
      this.scene.fog.color.setHex(0x3a86ff);
    } else if (mapType === 'NIGHT_METRO') {
      this.skyColor.setHex(0x0c1b40);
      this.scene.fog.color.setHex(0x0c1b40);
    } else if (mapType === 'MUMBAI_METRO') {
      this.skyColor.setHex(0x0a2472);
      this.scene.fog.color.setHex(0x0a2472);
    } else if (mapType === 'DHANBAD_RAIL') {
      this.skyColor.setHex(0x1a120b);
      this.scene.fog.color.setHex(0x1a120b);
    } else {
      // Dynamic Day-Night
      this.skyColor.setHex(0x0c1b40);
      this.scene.fog.color.setHex(0x0c1b40);
    }
    this.scene.background = this.skyColor;
  }

  toggleDayNightMode() {
    if (this.currentMap === 'NIGHT_METRO') {
      this.setMap('DAY_METRO');
      return 'DAY';
    } else if (this.currentMap === 'DAY_METRO') {
      this.setMap('DYNAMIC_DAY_NIGHT');
      return 'DYNAMIC';
    } else {
      this.setMap('NIGHT_METRO');
      return 'NIGHT';
    }
  }

  buildInitialCity() {
    for (let z = -40; z > -600; z -= 35) {
      this.spawnChunkLandmarks(z);
    }
  }

  spawnChunkLandmarks(z) {
    const sideLeft = -18;
    const sideRight = 18;
    const locationType = Math.abs(Math.floor(z / 70)) % 8;

    if (locationType === 0) {
      this.createStationPlatform(sideLeft, z);
      this.createStationPlatform(sideRight, z);
    } else if (locationType === 1) {
      this.createSkyscraper(sideLeft, z, 35, 0x00f3ff);
      this.createSkyscraper(sideRight, z, 45, 0xff007f);
      if (Math.random() > 0.4) this.createBillboard(0, z, 'NEXORA METRO');
    } else if (locationType === 2) {
      this.createWarehouse(sideLeft, z);
      this.createCargoContainers(sideRight, z);
    } else if (locationType === 3) {
      this.createCoalMountain(sideLeft, z);
      this.createMineTrestle(sideRight, z);
    } else if (locationType === 4) {
      this.createBridgePylon(sideLeft, z);
      this.createBridgePylon(sideRight, z);
    } else if (locationType === 5) {
      this.createTokyoTower(sideRight + 8, z);
      this.createSkyscraper(sideLeft, z, 28, 0x00ff88);
    } else if (locationType === 6) {
      this.createVillageHut(sideLeft, z);
      this.createTreesAndFences(sideRight, z);
    } else {
      this.createHyperloopTube(0, z);
    }
  }

  createStationPlatform(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const platformMat = new THREE.MeshStandardMaterial({ color: 0x334466, roughness: 0.6 });
    const platform = new THREE.Mesh(new THREE.BoxGeometry(8, 1.2, 30), platformMat);
    platform.position.y = 0.6;
    group.add(platform);

    const glassRoofMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.3, wireframe: true });
    const roof = new THREE.Mesh(new THREE.BoxGeometry(10, 0.4, 32), glassRoofMat);
    roof.position.y = 6.5;
    group.add(roof);

    for (let pillarZ = -12; pillarZ <= 12; pillarZ += 8) {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 6), platformMat);
      pillar.position.set(0, 3.5, pillarZ);
      group.add(pillar);
    }

    this.scene.add(group);
    this.landmarks.push(group);
  }

  createSkyscraper(x, z, height, neonColorHex) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const mat = new THREE.MeshStandardMaterial({
      color: 0x0a1428,
      map: this.buildingTextureCyan,
      roughness: 0.3
    });

    const building = new THREE.Mesh(new THREE.BoxGeometry(12, height, 12), mat);
    building.position.y = height / 2;
    group.add(building);

    const neonMat = new THREE.MeshBasicMaterial({ color: neonColorHex });
    const beam = new THREE.Mesh(new THREE.BoxGeometry(0.5, height, 0.5), neonMat);
    beam.position.set(6, height / 2, 6);
    group.add(beam);

    this.scene.add(group);
    this.landmarks.push(group);
  }

  createBillboard(x, z, titleText) {
    const group = new THREE.Group();
    group.position.set(x, 8.5, z);

    const frameMat = new THREE.MeshStandardMaterial({ color: 0x111122 });
    const frame = new THREE.Mesh(new THREE.BoxGeometry(14, 3.5, 0.4), frameMat);
    group.add(frame);

    const screenMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    const screen = new THREE.Mesh(new THREE.BoxGeometry(13.2, 2.8, 0.45), screenMat);
    group.add(screen);

    this.scene.add(group);
    this.landmarks.push(group);
  }

  createWarehouse(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const whMat = new THREE.MeshStandardMaterial({ color: 0x553322, map: this.warehouseTexture });
    const building = new THREE.Mesh(new THREE.BoxGeometry(14, 10, 24), whMat);
    building.position.y = 5;
    group.add(building);

    const roofMat = new THREE.MeshStandardMaterial({ color: 0x222233, metalness: 0.8 });
    const roof = new THREE.Mesh(new THREE.ConeGeometry(11, 4, 4), roofMat);
    roof.position.y = 12;
    roof.rotation.y = Math.PI / 4;
    group.add(roof);

    this.scene.add(group);
    this.landmarks.push(group);
  }

  createCargoContainers(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const colors = [0xff0055, 0x0066ff, 0xffcc00];
    for (let i = 0; i < 4; i++) {
      const mat = new THREE.MeshStandardMaterial({ color: colors[i % 3], metalness: 0.6 });
      const container = new THREE.Mesh(new THREE.BoxGeometry(4.5, 3.2, 10), mat);
      container.position.set((i % 2) * 5 - 2.5, (i > 1 ? 4.8 : 1.6), (i % 2) * 4);
      group.add(container);
    }

    this.scene.add(group);
    this.landmarks.push(group);
  }

  createCoalMountain(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const coalMat = new THREE.MeshStandardMaterial({ color: 0x111116, roughness: 0.95 });
    const mountain = new THREE.Mesh(new THREE.ConeGeometry(16, 18, 7), coalMat);
    mountain.position.y = 9;
    group.add(mountain);

    this.scene.add(group);
    this.landmarks.push(group);
  }

  createMineTrestle(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const woodMat = new THREE.MeshStandardMaterial({ color: 0x4a2c11, roughness: 0.9 });
    for (let stepZ = -10; stepZ <= 10; stepZ += 5) {
      const pillar1 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 9, 0.6), woodMat);
      pillar1.position.set(-2, 4.5, stepZ);
      const pillar2 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 9, 0.6), woodMat);
      pillar2.position.set(2, 4.5, stepZ);
      group.add(pillar1, pillar2);
    }

    const beam = new THREE.Mesh(new THREE.BoxGeometry(6, 0.6, 24), woodMat);
    beam.position.y = 9;
    group.add(beam);

    this.scene.add(group);
    this.landmarks.push(group);
  }

  createBridgePylon(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const pylonMat = new THREE.MeshStandardMaterial({ color: 0xddddee, metalness: 0.5 });
    const pylon = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.6, 40), pylonMat);
    pylon.position.y = 20;
    group.add(pylon);

    const cableMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    for (let c = -15; c <= 15; c += 5) {
      const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 25), cableMat);
      cable.position.set(0, 15, c);
      cable.rotation.z = Math.PI / 6 * (x > 0 ? 1 : -1);
      group.add(cable);
    }

    this.scene.add(group);
    this.landmarks.push(group);
  }

  createTokyoTower(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const redMat = new THREE.MeshStandardMaterial({ color: 0xff2200, roughness: 0.4 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });

    for (let tier = 0; tier < 5; tier++) {
      const mat = (tier % 2 === 0) ? redMat : whiteMat;
      const w = 12 - tier * 2;
      const tierMesh = new THREE.Mesh(new THREE.ConeGeometry(w, 14, 4), mat);
      tierMesh.position.y = 7 + tier * 12;
      group.add(tierMesh);
    }

    const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.8, 18), redMat);
    spire.position.y = 65;
    group.add(spire);

    this.scene.add(group);
    this.landmarks.push(group);
  }

  createVillageHut(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const clayMat = new THREE.MeshStandardMaterial({ color: 0xc28d53, roughness: 0.9 });
    const hut = new THREE.Mesh(new THREE.BoxGeometry(6, 4, 6), clayMat);
    hut.position.y = 2;
    group.add(hut);

    const thatchMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.95 });
    const roof = new THREE.Mesh(new THREE.ConeGeometry(5.2, 3.5, 4), thatchMat);
    roof.position.y = 5.5;
    roof.rotation.y = Math.PI / 4;
    group.add(roof);

    this.scene.add(group);
    this.landmarks.push(group);
  }

  createTreesAndFences(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a2e12 });
    const leavesMat = new THREE.MeshStandardMaterial({ color: 0x00aa44, roughness: 0.8 });

    for (let t = -8; t <= 8; t += 8) {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 3), trunkMat);
      trunk.position.set(0, 1.5, t);
      const foliage = new THREE.Mesh(new THREE.SphereGeometry(2, 8, 8), leavesMat);
      foliage.position.set(0, 4, t);
      group.add(trunk, foliage);
    }

    this.scene.add(group);
    this.landmarks.push(group);
  }

  createHyperloopTube(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 4.5, z);

    const tubeMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.15, wireframe: true });
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.5, 30, 16, 1, true), tubeMat);
    tube.rotation.x = Math.PI / 2;
    group.add(tube);

    this.scene.add(group);
    this.landmarks.push(group);
  }

  update(playerZ, delta) {
    if (this.currentMap === 'DYNAMIC_DAY_NIGHT') {
      this.cycleTime += delta * 0.05;
      const phase = Math.sin(this.cycleTime);

      // Smooth Sky Color lerp (Day Blue -> Sunset Pink -> Night Dark)
      const dayColor = new THREE.Color(0x3a86ff);
      const nightColor = new THREE.Color(0x0c1b40);
      const sunsetColor = new THREE.Color(0xff007f);

      if (phase > 0.3) {
        this.skyColor.lerpColors(sunsetColor, dayColor, (phase - 0.3) / 0.7);
      } else if (phase > -0.3) {
        this.skyColor.lerpColors(nightColor, sunsetColor, (phase + 0.3) / 0.6);
      } else {
        this.skyColor.copy(nightColor);
      }

      this.scene.background = this.skyColor;
      this.scene.fog.color.copy(this.skyColor);
    }

    this.landmarks.forEach(lm => {
      if (lm.position.z > playerZ + 25) {
        lm.position.z -= 450;
      }
    });
  }
}
