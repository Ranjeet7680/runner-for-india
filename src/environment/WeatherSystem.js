// WeatherSystem.js - Dynamic Rain, Fog & Wet Reflection Shader Setup
import * as THREE from 'three';

export class WeatherSystem {
  constructor(scene) {
    this.scene = scene;
    this.mode = 'CLEAR'; // CLEAR, CLOUDY, RAIN, FOG

    this.initRainParticles();
  }

  initRainParticles() {
    const count = 600;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = Math.random() * 25 + 5;
      pos[i * 3 + 2] = Math.random() * 120;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x88ccff,
      size: 0.25,
      transparent: true,
      opacity: 0.65
    });

    this.rainMesh = new THREE.Points(geo, mat);
    this.rainMesh.visible = false;
    this.scene.add(this.rainMesh);
  }

  setMode(mode) {
    this.mode = mode;
    if (mode === 'RAIN') {
      this.rainMesh.visible = true;
      if (this.scene.fog) this.scene.fog.density = 0.018;
    } else if (mode === 'FOG') {
      this.rainMesh.visible = false;
      if (this.scene.fog) this.scene.fog.density = 0.025;
    } else if (mode === 'CLOUDY') {
      this.rainMesh.visible = false;
      if (this.scene.fog) this.scene.fog.density = 0.015;
    } else { // CLEAR
      this.rainMesh.visible = false;
      if (this.scene.fog) this.scene.fog.density = 0.01;
    }
  }

  update(playerZ, delta) {
    if (this.mode === 'RAIN' && this.rainMesh) {
      this.rainMesh.position.z = playerZ - 20;
      const attr = this.rainMesh.geometry.attributes.position;
      const arr = attr.array;
      for (let i = 0; i < arr.length / 3; i++) {
        arr[i * 3 + 1] -= delta * 35; // Fast downward rain speed
        if (arr[i * 3 + 1] < 0) arr[i * 3 + 1] = 25;
      }
      attr.needsUpdate = true;
    }
  }
}
