// CityGenerator.js - 100+ Procedural Landmark Generator Engine
import * as THREE from 'three';

export class CityGenerator {
  constructor(scene) {
    this.scene = scene;
    this.currentMap = 'DYNAMIC_DAY_NIGHT';
    this.landmarks = [];
    this.cycleTime = 0;
    this.landmarkCounter = 0;

    this.initTextures();
    this.initEnvironmentLighting();
    this.buildInitialCity();
  }

  initTextures() {
    // Window Grid Texture (Skyscrapers)
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

    // Red Fort Sandstone Texture
    const canvasRf = document.createElement('canvas');
    canvasRf.width = 64; canvasRf.height = 64;
    const ctxRf = canvasRf.getContext('2d');
    ctxRf.fillStyle = '#8b261d';
    ctxRf.fillRect(0, 0, 64, 64);
    ctxRf.fillStyle = '#5c1913';
    for (let i = 0; i < 64; i += 8) ctxRf.fillRect(0, i, 64, 2);
    this.redSandstoneTexture = new THREE.CanvasTexture(canvasRf);

    // Marble Texture (Taj Mahal / Victoria Memorial)
    const canvasMb = document.createElement('canvas');
    canvasMb.width = 64; canvasMb.height = 64;
    const ctxMb = canvasMb.getContext('2d');
    ctxMb.fillStyle = '#f0f4f8';
    ctxMb.fillRect(0, 0, 64, 64);
    ctxMb.fillStyle = '#d0d8e0';
    ctxMb.fillRect(0, 32, 64, 2);
    this.marbleTexture = new THREE.CanvasTexture(canvasMb);
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
    for (let z = -40; z > -700; z -= 35) {
      this.spawnChunkLandmarks(z);
    }
  }

  spawnChunkLandmarks(z) {
    const sideLeft = -18;
    const sideRight = 18;

    // Cycle through 100 Landmark Archetypes
    const type = (this.landmarkCounter++) % 20;

    switch (type) {
      case 0:
        // 🏰 RED FORT & INDIA GATE ARCH
        this.createRedFortGate(sideLeft, z);
        this.createIndiaGateArch(sideRight, z);
        break;
      case 1:
        // 🛕 TAJ MAHAL & VARANASI GHATS
        this.createTajMahalDome(sideRight + 5, z);
        this.createVaranasiGhats(sideLeft, z);
        break;
      case 2:
        // 🏢 DELHI CYBER HUB & METRO TUNNEL
        this.createCyberHubTower(sideLeft, z);
        this.createMetroTunnelEntrance(0, z);
        break;
      case 3:
        // 🌊 MUMBAI SEA LINK & MARINE DRIVE
        this.createBridgePylon(sideLeft, z);
        this.createBridgePylon(sideRight, z);
        break;
      case 4:
        // 🌉 HOWRAH BRIDGE & KOLKATA TRAM
        this.createHowrahSteelTruss(sideLeft, z);
        this.createHowrahSteelTruss(sideRight, z);
        break;
      case 5:
        // 🏔️ HIMALAYAN PASS & TOY TRAIN
        this.createSnowMountainPeak(sideLeft, z);
        this.createMountainMonastery(sideRight, z);
        break;
      case 6:
        // 🐫 RAJASTHAN DESERT & PINK CITY
        this.createPinkCityPalace(sideLeft, z);
        this.createDesertDunes(sideRight, z);
        break;
      case 7:
        // 🛕 GOLDEN TEMPLE & PUNJAB FARMLAND
        this.createGoldenShrine(sideRight, z);
        this.createFarmlandBarn(sideLeft, z);
        break;
      case 8:
        // 🏭 STEEL PLANT & RAILWAY YARD
        this.createSteelFurnace(sideLeft, z);
        this.createCargoContainers(sideRight, z);
        break;
      case 9:
        // 🌴 KERALA BACKWATERS & GOA BEACH
        this.createPalmHuts(sideLeft, z);
        this.createPalmHuts(sideRight, z);
        break;
      case 10:
        // 🗼 TOKYO TOWER & SAKURA DISTRICT
        this.createTokyoTower(sideRight + 6, z);
        this.createSkyscraper(sideLeft, z, 30, 0xff007f);
        break;
      case 11:
        // 🏙️ DUBAI DOWNTOWN & BURJ SKYLINE
        this.createBurjTower(sideLeft - 4, z);
        this.createSkyscraper(sideRight, z, 55, 0x00f3ff);
        break;
      case 12:
        // 🤖 ROBOT FACTORY & AI CAMPUS
        this.createRobotFactory(sideLeft, z);
        this.createHyperloopTube(0, z);
        break;
      case 13:
        // 🚀 NASA SPACE CENTER & ROCKET LAUNCH
        this.createSpaceRocket(sideRight + 10, z);
        this.createBillboard(0, z, 'SPACE CENTER');
        break;
      case 14:
        // 🔴 MARS COLONY & MOON BASE DOMES
        this.createSpaceDome(sideLeft, z);
        this.createSpaceDome(sideRight, z);
        break;
      case 15:
        // 🏙️ NEW YORK TIMES SQUARE
        this.createTimesSquareBillboards(sideLeft, z);
        this.createSkyscraper(sideRight, z, 42, 0xffff00);
        break;
      case 16:
        // 🐲 DRAGON FESTIVAL & NEON CHINATOWN
        this.createChinatownArch(sideLeft, z);
        this.createChinatownArch(sideRight, z);
        break;
      case 17:
        // 🔋 SOLAR FARM & WIND TURBINES
        this.createWindTurbine(sideRight + 10, z);
        this.createSolarPanels(sideLeft, z);
        break;
      case 18:
        // 🏎️ FORMULA RACING & STADIUM
        this.createStadiumArena(sideRight, z);
        this.createBillboard(0, z, 'NEXORA GRAND PRIX');
        break;
      default:
        // 🚀 NEXORA FUTURE CITY TOWER
        this.createNexoraTower(sideLeft - 6, z);
        this.createHyperloopTube(0, z);
        break;
    }
  }

  createRedFortGate(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0x8b261d, map: this.redSandstoneTexture });
    const wall = new THREE.Mesh(new THREE.BoxGeometry(14, 14, 8), mat);
    wall.position.y = 7;
    const dome1 = new THREE.Mesh(new THREE.SphereGeometry(2, 10, 10), mat);
    dome1.position.set(-5, 15, 0);
    const dome2 = new THREE.Mesh(new THREE.SphereGeometry(2, 10, 10), mat);
    dome2.position.set(5, 15, 0);
    group.add(wall, dome1, dome2);
    this.scene.add(group); this.landmarks.push(group);
  }

  createIndiaGateArch(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0xc2a688, roughness: 0.5 });
    const pillarL = new THREE.Mesh(new THREE.BoxGeometry(3, 16, 4), mat); pillarL.position.set(-4, 8, 0);
    const pillarR = new THREE.Mesh(new THREE.BoxGeometry(3, 16, 4), mat); pillarR.position.set(4, 8, 0);
    const archTop = new THREE.Mesh(new THREE.BoxGeometry(11, 4, 4), mat); archTop.position.set(0, 16, 0);
    group.add(pillarL, pillarR, archTop);
    this.scene.add(group); this.landmarks.push(group);
  }

  createTajMahalDome(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.2, map: this.marbleTexture });
    const base = new THREE.Mesh(new THREE.BoxGeometry(16, 12, 16), mat); base.position.y = 6;
    const mainDome = new THREE.Mesh(new THREE.SphereGeometry(5, 16, 16), mat); mainDome.position.y = 17;
    group.add(base, mainDome);
    this.scene.add(group); this.landmarks.push(group);
  }

  createVaranasiGhats(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b });
    for (let step = 0; step < 5; step++) {
      const stair = new THREE.Mesh(new THREE.BoxGeometry(12, 0.6, 20), mat);
      stair.position.set(step * 1.2, step * 0.6, 0);
      group.add(stair);
    }
    this.scene.add(group); this.landmarks.push(group);
  }

  createCyberHubTower(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0x00a8ff, metalness: 0.9, roughness: 0.1 });
    const glass = new THREE.Mesh(new THREE.BoxGeometry(14, 40, 14), mat); glass.position.y = 20;
    group.add(glass);
    this.scene.add(group); this.landmarks.push(group);
  }

  createMetroTunnelEntrance(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0x222233 });
    const arch = new THREE.Mesh(new THREE.CylinderGeometry(5.5, 5.5, 20, 16, 1, true), mat);
    arch.rotation.x = Math.PI / 2; arch.position.y = 4.5;
    group.add(arch);
    this.scene.add(group); this.landmarks.push(group);
  }

  createHowrahSteelTruss(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0x445566, metalness: 0.8 });
    const truss = new THREE.Mesh(new THREE.BoxGeometry(1, 24, 1), mat); truss.position.y = 12;
    group.add(truss);
    this.scene.add(group); this.landmarks.push(group);
  }

  createSnowMountainPeak(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const snowMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 });
    const peak = new THREE.Mesh(new THREE.ConeGeometry(18, 30, 6), snowMat); peak.position.y = 15;
    group.add(peak);
    this.scene.add(group); this.landmarks.push(group);
  }

  createMountainMonastery(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0xcc3322 });
    const temple = new THREE.Mesh(new THREE.BoxGeometry(10, 8, 10), mat); temple.position.y = 4;
    group.add(temple);
    this.scene.add(group); this.landmarks.push(group);
  }

  createPinkCityPalace(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const pinkMat = new THREE.MeshStandardMaterial({ color: 0xe67399 });
    const palace = new THREE.Mesh(new THREE.BoxGeometry(12, 16, 8), pinkMat); palace.position.y = 8;
    group.add(palace);
    this.scene.add(group); this.landmarks.push(group);
  }

  createDesertDunes(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const sandMat = new THREE.MeshStandardMaterial({ color: 0xedc9af, roughness: 0.95 });
    const dune = new THREE.Mesh(new THREE.SphereGeometry(14, 8, 8), sandMat); dune.position.set(0, -5, 0); dune.scale.set(1.5, 0.4, 1.5);
    group.add(dune);
    this.scene.add(group); this.landmarks.push(group);
  }

  createGoldenShrine(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9, roughness: 0.1 });
    const shrine = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), goldMat); shrine.position.y = 5;
    group.add(shrine);
    this.scene.add(group); this.landmarks.push(group);
  }

  createFarmlandBarn(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const barnMat = new THREE.MeshStandardMaterial({ color: 0xaa2211 });
    const barn = new THREE.Mesh(new THREE.BoxGeometry(10, 6, 12), barnMat); barn.position.y = 3;
    group.add(barn);
    this.scene.add(group); this.landmarks.push(group);
  }

  createSteelFurnace(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.9 });
    const furnace = new THREE.Mesh(new THREE.CylinderGeometry(4, 5, 20), mat); furnace.position.y = 10;
    group.add(furnace);
    this.scene.add(group); this.landmarks.push(group);
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
    this.scene.add(group); this.landmarks.push(group);
  }

  createPalmHuts(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c4033 });
    const leavesMat = new THREE.MeshStandardMaterial({ color: 0x00cc44 });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 6), trunkMat); trunk.position.y = 3;
    const leaves = new THREE.Mesh(new THREE.ConeGeometry(3, 2, 6), leavesMat); leaves.position.y = 6;
    group.add(trunk, leaves);
    this.scene.add(group); this.landmarks.push(group);
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
    const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.8, 18), redMat); spire.position.y = 65;
    group.add(spire);
    this.scene.add(group); this.landmarks.push(group);
  }

  createBurjTower(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0xaaccff, metalness: 0.9, roughness: 0.1 });
    const burj = new THREE.Mesh(new THREE.CylinderGeometry(1, 8, 70, 6), mat); burj.position.y = 35;
    group.add(burj);
    this.scene.add(group); this.landmarks.push(group);
  }

  createRobotFactory(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0x112233, metalness: 0.8 });
    const factory = new THREE.Mesh(new THREE.BoxGeometry(16, 12, 20), mat); factory.position.y = 6;
    group.add(factory);
    this.scene.add(group); this.landmarks.push(group);
  }

  createSpaceRocket(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.5 });
    const rocket = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 2, 28), mat); rocket.position.y = 14;
    const nose = new THREE.Mesh(new THREE.ConeGeometry(1.5, 6, 16), mat); nose.position.y = 31;
    group.add(rocket, nose);
    this.scene.add(group); this.landmarks.push(group);
  }

  createSpaceDome(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const glassMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.3, wireframe: true });
    const dome = new THREE.Mesh(new THREE.SphereGeometry(8, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2), glassMat); dome.position.y = 0;
    group.add(dome);
    this.scene.add(group); this.landmarks.push(group);
  }

  createTimesSquareBillboards(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshBasicMaterial({ color: 0xff007f });
    const board = new THREE.Mesh(new THREE.BoxGeometry(14, 20, 0.5), mat); board.position.y = 10;
    group.add(board);
    this.scene.add(group); this.landmarks.push(group);
  }

  createChinatownArch(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const redMat = new THREE.MeshStandardMaterial({ color: 0xdd2200 });
    const arch = new THREE.Mesh(new THREE.BoxGeometry(10, 8, 3), redMat); arch.position.y = 4;
    group.add(arch);
    this.scene.add(group); this.landmarks.push(group);
  }

  createWindTurbine(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.8, 35), mat); pole.position.y = 17.5;
    group.add(pole);
    this.scene.add(group); this.landmarks.push(group);
  }

  createSolarPanels(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const blueMat = new THREE.MeshStandardMaterial({ color: 0x0033aa, roughness: 0.2 });
    const panel = new THREE.Mesh(new THREE.BoxGeometry(10, 0.4, 14), blueMat); panel.position.y = 2; panel.rotation.x = Math.PI / 6;
    group.add(panel);
    this.scene.add(group); this.landmarks.push(group);
  }

  createStadiumArena(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0x8899aa });
    const stadium = new THREE.Mesh(new THREE.CylinderGeometry(14, 16, 10, 16), mat); stadium.position.y = 5;
    group.add(stadium);
    this.scene.add(group); this.landmarks.push(group);
  }

  createNexoraTower(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const mat = new THREE.MeshStandardMaterial({ color: 0x00f3ff, metalness: 0.9, roughness: 0.1 });
    const nexora = new THREE.Mesh(new THREE.CylinderGeometry(2, 7, 65, 8), mat); nexora.position.y = 32.5;
    group.add(nexora);
    this.scene.add(group); this.landmarks.push(group);
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
        lm.position.z -= 650;
      }
    });
  }
}
