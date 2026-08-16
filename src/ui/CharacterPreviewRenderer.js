// CharacterPreviewRenderer.js - 3D Character Selection Previewing Engine
import * as THREE from 'three';
import { Player } from '../entities/Player.js';

export class CharacterPreviewRenderer {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 50);
    this.camera.position.set(0, 1.2, 3.2);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(240, 240);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.container.appendChild(this.renderer.domElement);

    this.ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    this.scene.add(this.ambientLight);

    this.dirLight = new THREE.DirectionalLight(0x00f3ff, 2.0);
    this.dirLight.position.set(5, 10, 5);
    this.scene.add(this.dirLight);

    this.player = new Player(this.scene);
    this.player.position.set(0, 0, 0);

    this.isRunning = false;
    this.rotationAngle = 0;
  }

  setCharacter(type) {
    this.player.setCharacterType(type);
    this.player.position.set(0, 0, 0);
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.loop();
  }

  stop() {
    this.isRunning = false;
  }

  loop() {
    if (!this.isRunning) return;
    requestAnimationFrame(() => this.loop());

    this.rotationAngle += 0.015;
    if (this.player.mesh) {
      this.player.mesh.rotation.y = Math.sin(this.rotationAngle * 0.5) * 0.4;
      this.player.animTime += 0.03;
      this.player.updateAnimations(10);
    }

    this.renderer.render(this.scene, this.camera);
  }
}
