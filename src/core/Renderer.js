// Renderer.js - Bright Electric Neon Lighting & Colorful Atmosphere
import * as THREE from 'three';

export class AppRenderer {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.quality = 'HIGH';

    // Vibrant Electric Blue Sky Background (Not pitch black!)
    this.scene.background = new THREE.Color(0x0c1b40);
    this.scene.fog = new THREE.FogExp2(0x0f2252, 0.005); // Light atmospheric fog

    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      350
    );

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.45; // High bright exposure

    this.container.appendChild(this.renderer.domElement);

    this.initLights();
    window.addEventListener('resize', () => this.onWindowResize());
  }

  initLights() {
    // Bright Ambient Lighting
    this.ambientLight = new THREE.AmbientLight(0x4a6fa5, 2.2);
    this.scene.add(this.ambientLight);

    // Hemisphere Light: Vibrant Cyan Sky & Purple Ground bounce
    this.hemiLight = new THREE.HemisphereLight(0x00f3ff, 0x7928ca, 1.8);
    this.scene.add(this.hemiLight);

    // Main Sunlight / Moonlight Directional Light
    this.dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
    this.dirLight.position.set(25, 45, -20);
    this.dirLight.castShadow = true;
    
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.camera.near = 1;
    this.dirLight.shadow.camera.far = 150;
    const d = 40;
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;
    this.dirLight.shadow.bias = -0.0005;
    this.scene.add(this.dirLight);

    // Bright Neon Point Lights for Vibrant Environment Glow
    this.cyanPointLight = new THREE.PointLight(0x00f3ff, 4.0, 80);
    this.cyanPointLight.position.set(0, 6, 15);
    this.scene.add(this.cyanPointLight);

    this.pinkPointLight = new THREE.PointLight(0xff007f, 3.5, 80);
    this.pinkPointLight.position.set(-12, 10, 30);
    this.scene.add(this.pinkPointLight);

    this.goldPointLight = new THREE.PointLight(0xffd700, 3.5, 80);
    this.goldPointLight.position.set(12, 10, 30);
    this.scene.add(this.goldPointLight);
  }

  setQuality(qualityMode) {
    this.quality = qualityMode;
    if (qualityMode === 'LOW') {
      this.renderer.shadowMap.enabled = false;
      this.renderer.setPixelRatio(1);
      this.scene.fog.density = 0.004;
    } else if (qualityMode === 'MEDIUM') {
      this.renderer.shadowMap.enabled = true;
      this.dirLight.shadow.mapSize.width = 1024;
      this.dirLight.shadow.mapSize.height = 1024;
      this.renderer.setPixelRatio(1.25);
      this.scene.fog.density = 0.005;
    } else {
      this.renderer.shadowMap.enabled = true;
      this.dirLight.shadow.mapSize.width = 2048;
      this.dirLight.shadow.mapSize.height = 2048;
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.scene.fog.density = 0.005;
    }
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
