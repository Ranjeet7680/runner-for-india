// StationLobbyManager.js - 3D Metro Station Lobby (NEXORA CENTRAL)
import * as THREE from 'three';

export class StationLobbyManager {
  constructor(scene) {
    this.scene = scene;
    this.lobbyGroup = new THREE.Group();
    this.lobbyGroup.position.set(0, 0, -500); // Placed at lobby cutscene coordinate
    this.lobbyGroup.visible = false;

    this.buildLobbyArchitecture();
    this.scene.add(this.lobbyGroup);
  }

  buildLobbyArchitecture() {
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x0a1228, roughness: 0.6 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.3 });
    const cyanNeonMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    const pinkNeonMat = new THREE.MeshBasicMaterial({ color: 0xff007f });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.8 });

    // Main Lobby Floor & Ceiling
    const floorGeo = new THREE.BoxGeometry(40, 0.4, 40);
    const floor = new THREE.Mesh(floorGeo, wallMat);
    floor.position.y = -0.2;
    this.lobbyGroup.add(floor);

    const ceilingGeo = new THREE.BoxGeometry(40, 0.4, 40);
    const ceiling = new THREE.Mesh(ceilingGeo, wallMat);
    ceiling.position.y = 12.0;
    this.lobbyGroup.add(ceiling);

    // Back Glass Wall looking at Moonlight City
    const glassWallGeo = new THREE.BoxGeometry(38, 12, 0.4);
    const glassWall = new THREE.Mesh(glassWallGeo, glassMat);
    glassWall.position.set(0, 6, 19.8);
    this.lobbyGroup.add(glassWall);

    // Digital Departure Board
    const boardGroup = new THREE.Group();
    boardGroup.position.set(0, 8.5, -15);

    const boardFrameGeo = new THREE.BoxGeometry(18, 4.5, 0.4);
    const boardFrame = new THREE.Mesh(boardFrameGeo, wallMat);
    boardGroup.add(boardFrame);

    const screenGeo = new THREE.BoxGeometry(17.2, 3.8, 0.42);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x050e26 });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    boardGroup.add(screen);

    // Illuminated Text Band on Board
    const textBandGeo = new THREE.BoxGeometry(16, 0.6, 0.45);
    const textBand1 = new THREE.Mesh(textBandGeo, cyanNeonMat);
    textBand1.position.y = 1.0;
    boardGroup.add(textBand1);

    const textBand2 = new THREE.Mesh(textBandGeo, pinkNeonMat);
    textBand2.position.y = -0.4;
    boardGroup.add(textBand2);

    this.lobbyGroup.add(boardGroup);

    // Ticket Gates & Security Barriers
    for (let x = -10; x <= 10; x += 5) {
      const gateGeo = new THREE.BoxGeometry(1.2, 1.4, 3.0);
      const gate = new THREE.Mesh(gateGeo, wallMat);
      gate.position.set(x, 0.7, 5);

      const scannerGeo = new THREE.BoxGeometry(1.24, 0.1, 3.04);
      const scanner = new THREE.Mesh(scannerGeo, cyanNeonMat);
      scanner.position.y = 1.35;
      gate.add(scanner);

      this.lobbyGroup.add(gate);
    }

    // Escalators (Left & Right)
    const escGeo = new THREE.BoxGeometry(3.5, 0.5, 16);
    const escLeft = new THREE.Mesh(escGeo, wallMat);
    escLeft.position.set(-15, 3.5, -5);
    escLeft.rotation.x = -Math.PI / 6;
    this.lobbyGroup.add(escLeft);

    const escRight = new THREE.Mesh(escGeo, wallMat);
    escRight.position.set(15, 3.5, -5);
    escRight.rotation.x = -Math.PI / 6;
    this.lobbyGroup.add(escRight);

    // Benches
    for (let x of [-8, 8]) {
      const benchGeo = new THREE.BoxGeometry(4.0, 0.6, 1.0);
      const bench = new THREE.Mesh(benchGeo, goldMat);
      bench.position.set(x, 0.3, -5);
      this.lobbyGroup.add(bench);
    }

    // Passenger & Security Staff NPCs standing around in Lobby
    const npcMat1 = new THREE.MeshStandardMaterial({ color: 0xff007f });
    const npcMat2 = new THREE.MeshStandardMaterial({ color: 0x00f3ff });
    const npcMat3 = new THREE.MeshStandardMaterial({ color: 0xffcc00 });

    for (let i = 0; i < 6; i++) {
      const npcGeo = new THREE.BoxGeometry(0.5, 1.7, 0.4);
      const mat = (i % 3 === 0) ? npcMat1 : ((i % 3 === 1) ? npcMat2 : npcMat3);
      const npc = new THREE.Mesh(npcGeo, mat);
      const randX = (Math.random() - 0.5) * 24;
      const randZ = (Math.random() - 0.5) * 20;
      npc.position.set(randX, 0.85, randZ);
      this.lobbyGroup.add(npc);
    }
  }

  showLobby(active) {
    this.lobbyGroup.visible = active;
  }
}
