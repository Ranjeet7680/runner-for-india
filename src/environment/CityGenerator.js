// CityGenerator.js - Lit Skyscraper Buildings, Procedural Window Lights & City Scenery
import * as THREE from 'three';

export class CityGenerator {
  constructor(scene) {
    this.scene = scene;
    this.cityModules = [];
    this.moduleLength = 120;
    this.spawnZ = 0;
    this.currentMap = 'NIGHT_METRO';

    // Procedural Window Textures for Lit Buildings
    this.buildingTextureCyan = this.createWindowTexture('#0a2048', '#00f3ff', '#ffcc00');
    this.buildingTexturePink = this.createWindowTexture('#280838', '#ff007f', '#00ff88');

    this.billboardTextures = {
      DAY_METRO: this.createBillboardTexture('NEXORA METRO', 'SPEED • POWER • FUTURE', '#00f3ff', '#ff007f'),
      NIGHT_METRO: this.createBillboardTexture('CYBER NIGHTS', 'NEON CITY METROPOLIS', '#ff007f', '#00f3ff'),
      MUMBAI_METRO: this.createBillboardTexture('MUMBAI LOCAL', 'SUBURBAN EXPRESS RAIL', '#ffd700', '#ff007f'),
      CHENNAI_METRO: this.createBillboardTexture('CHENNAI CONNECT', 'SOUTH METRO POWER', '#00ff88', '#0066ff'),
      DHANBAD_RAIL: this.createBillboardTexture('DHANBAD COAL EX', 'HEAVY INDUSTRIAL RAIL', '#ff6600', '#00f3ff')
    };

    this.initMoonAndSky();
    this.initMoonlightTrain();

    for (let i = 0; i < 4; i++) {
      this.createCityModule(i * this.moduleLength);
    }
  }

  createWindowTexture(bgColor, windowColor1, windowColor2) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Building Facade Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 256, 512);

    // Window Grid
    const cols = 8;
    const rows = 16;
    const w = 18;
    const h = 20;
    const gapX = 12;
    const gapY = 10;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * (w + gapX) + 10;
        const y = r * (h + gapY) + 15;

        const lit = Math.random() > 0.3;
        if (lit) {
          ctx.fillStyle = (Math.random() > 0.5) ? windowColor1 : windowColor2;
          ctx.shadowColor = ctx.fillStyle;
          ctx.shadowBlur = 8;
          ctx.fillRect(x, y, w, h);
        } else {
          ctx.fillStyle = '#050a18';
          ctx.shadowBlur = 0;
          ctx.fillRect(x, y, w, h);
        }
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 2);
    return tex;
  }

  createBillboardTexture(title, sub, color1, color2) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 512, 256);
    grad.addColorStop(0, '#0d1b40');
    grad.addColorStop(1, '#280c48');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 256);

    ctx.strokeStyle = color1;
    ctx.lineWidth = 10;
    ctx.shadowColor = color1;
    ctx.shadowBlur = 20;
    ctx.strokeRect(15, 15, 482, 226);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 44px sans-serif';
    ctx.textAlign = 'center';
    ctx.shadowColor = color1;
    ctx.shadowBlur = 20;
    ctx.fillText(title, 256, 110);

    ctx.fillStyle = color2;
    ctx.font = '700 24px sans-serif';
    ctx.shadowColor = color2;
    ctx.shadowBlur = 15;
    ctx.fillText(sub, 256, 175);

    return new THREE.CanvasTexture(canvas);
  }

  initMoonAndSky() {
    this.skyGroup = new THREE.Group();

    // Giant Bright Moon
    const moonGeo = new THREE.SphereGeometry(18, 24, 24);
    const moonMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.moonMesh = new THREE.Mesh(moonGeo, moonMat);
    this.moonMesh.position.set(0, 70, 210);
    this.skyGroup.add(this.moonMesh);

    // Cyan Moon Halo Ring
    const haloGeo = new THREE.RingGeometry(18.5, 36, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff, side: THREE.DoubleSide, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.position.set(0, 70, 209);
    this.skyGroup.add(halo);

    this.scene.add(this.skyGroup);
  }

  initMoonlightTrain() {
    this.moonTrainGroup = new THREE.Group();
    this.moonTrainGroup.position.set(-180, 65, 205);

    const bodyGeo = new THREE.BoxGeometry(38, 4.5, 3);
    const bodyMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    this.moonTrainGroup.add(body);

    const winGeo = new THREE.BoxGeometry(35, 1.4, 3.1);
    const winMat = new THREE.MeshBasicMaterial({ color: 0xff007f });
    const win = new THREE.Mesh(winGeo, winMat);
    this.moonTrainGroup.add(win);

    this.scene.add(this.moonTrainGroup);
  }

  setMap(mapId) {
    this.currentMap = mapId;
    this.reset();
  }

  createCityModule(zPos) {
    const moduleGroup = new THREE.Group();
    moduleGroup.position.z = zPos;

    // Bright Building Materials with Lit Windows
    const buildingMatCyan = new THREE.MeshStandardMaterial({
      map: this.buildingTextureCyan,
      emissiveMap: this.buildingTextureCyan,
      emissive: 0x0088cc,
      emissiveIntensity: 0.6,
      roughness: 0.4
    });

    const buildingMatPink = new THREE.MeshStandardMaterial({
      map: this.buildingTexturePink,
      emissiveMap: this.buildingTexturePink,
      emissive: 0xcc0066,
      emissiveIntensity: 0.6,
      roughness: 0.4
    });

    const flyoverMat = new THREE.MeshStandardMaterial({
      color: 0x1a2d54, roughness: 0.4, metalness: 0.6
    });

    // Left Elevated Flyover Track
    const flyoverGeo = new THREE.BoxGeometry(6, 1.2, this.moduleLength);
    const flyover = new THREE.Mesh(flyoverGeo, flyoverMat);
    flyover.position.set(-24, 14, 0);
    moduleGroup.add(flyover);

    const flyoverNeonGeo = new THREE.BoxGeometry(6.2, 0.3, this.moduleLength);
    const flyoverNeon = new THREE.Mesh(flyoverNeonGeo, new THREE.MeshBasicMaterial({ color: 0x00f3ff }));
    flyoverNeon.position.set(-24, 13.3, 0);
    moduleGroup.add(flyoverNeon);

    for (let z = -this.moduleLength / 2 + 20; z < this.moduleLength / 2; z += 40) {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.5, 14, 8), flyoverMat);
      pillar.position.set(-24, 7, z);
      moduleGroup.add(pillar);
    }

    // Skyscrapers with Lit Windows & Rooftop Neon Beams
    for (let z = -this.moduleLength / 2 + 15; z < this.moduleLength / 2; z += 30) {
      const isCyan = Math.random() > 0.5;
      const bMat = isCyan ? buildingMatCyan : buildingMatPink;

      // Left Building
      const hLeft = Math.random() * 32 + 26;
      const bLeft = new THREE.Mesh(new THREE.BoxGeometry(16, hLeft, 22), bMat);
      bLeft.position.set(-28, hLeft / 2, z);
      moduleGroup.add(bLeft);

      // Rooftop Neon Glow Beam
      const roofNeonL = new THREE.Mesh(new THREE.BoxGeometry(16.4, 0.8, 22.4), new THREE.MeshBasicMaterial({ color: isCyan ? 0x00f3ff : 0xff007f }));
      roofNeonL.position.set(-28, hLeft + 0.4, z);
      moduleGroup.add(roofNeonL);

      // Billboard
      const tex = this.billboardTextures[this.currentMap] || this.billboardTextures.NIGHT_METRO;
      const board = new THREE.Mesh(new THREE.PlaneGeometry(16, 8), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }));
      board.position.set(-19, 18, z);
      board.rotation.y = Math.PI / 2;
      moduleGroup.add(board);

      // Right Building
      const hRight = Math.random() * 35 + 26;
      const bRight = new THREE.Mesh(new THREE.BoxGeometry(16, hRight, 22), isCyan ? buildingMatPink : buildingMatCyan);
      bRight.position.set(28, hRight / 2, z);
      moduleGroup.add(bRight);

      // Rooftop Neon Glow Beam
      const roofNeonR = new THREE.Mesh(new THREE.BoxGeometry(16.4, 0.8, 22.4), new THREE.MeshBasicMaterial({ color: isCyan ? 0xff007f : 0x00f3ff }));
      roofNeonR.position.set(28, hRight + 0.4, z);
      moduleGroup.add(roofNeonR);
    }

    this.scene.add(moduleGroup);
    this.cityModules.push(moduleGroup);
    this.spawnZ = zPos + this.moduleLength;
  }

  update(playerZ, delta) {
    if (this.skyGroup) this.skyGroup.position.z = playerZ;
    if (this.moonTrainGroup) {
      this.moonTrainGroup.position.z = playerZ + 205;
      this.moonTrainGroup.position.x += delta * 25;
      if (this.moonTrainGroup.position.x > 180) this.moonTrainGroup.position.x = -180;
    }

    if (this.cityModules.length > 0) {
      const firstMod = this.cityModules[0];
      if (firstMod.position.z < playerZ - 60) {
        this.scene.remove(firstMod);
        this.cityModules.shift();
        this.createCityModule(this.spawnZ);
      }
    }
  }

  reset() {
    this.cityModules.forEach(m => this.scene.remove(m));
    this.cityModules = [];
    this.spawnZ = 0;
    for (let i = 0; i < 4; i++) {
      this.createCityModule(i * this.moduleLength);
    }
  }
}
