// Renderer.js - Bright Electric Lighting, Vibrant Sky & WebGL Optimization
import * as THREE from 'three';

export class AppRenderer {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.quality = 'HIGH';

    this.isSmartTV = /TV|SmartTV|Tizen|WebOS|AndroidTV|NetCast|GoogleTV|AppleTV|BRAVIA/i.test(navigator.userAgent);

    // Bright Electric Sky Background & Fog
    this.skyColor = new THREE.Color(0x1a428a);
    this.scene.background = this.skyColor;
    this.scene.fog = new THREE.FogExp2(0x1a428a, 0.0035);

    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      400
    );

    this.renderer = new THREE.WebGLRenderer({
      antialias: !this.isSmartTV,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    
    const maxRatio = this.isSmartTV ? 1.0 : Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(maxRatio);

    this.renderer.shadowMap.enabled = !this.isSmartTV;
    if (!this.isSmartTV) {
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
    
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.8; // Bright vivid tone mapping exposure

    // Prevent default touch scrolling on canvas
    this.renderer.domElement.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
    this.renderer.domElement.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

    // WebGL Context Lost & Restored
    this.renderer.domElement.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      console.warn('WebGL context lost. Pausing rendering...');
    }, false);

    this.renderer.domElement.addEventListener('webglcontextrestored', () => {
      console.log('WebGL context restored. Re-initializing lights...');
      this.initLights();
    }, false);

    this.container.appendChild(this.renderer.domElement);

    this.initLights();
    window.addEventListener('resize', () => this.onWindowResize());
  }

  initLights() {
    // Ultra-Bright Ambient & Hemisphere Lights
    this.ambientLight = new THREE.AmbientLight(0x7099cc, 3.2);
    this.scene.add(this.ambientLight);

    this.hemiLight = new THREE.HemisphereLight(0x00f3ff, 0x7928ca, 2.5);
    this.scene.add(this.hemiLight);

    // Bright Sun/Moon Directional Light
    this.dirLight = new THREE.DirectionalLight(0xffffff, 3.8);
    this.dirLight.position.set(25, 50, -20);
    this.dirLight.castShadow = !this.isSmartTV;
    
    if (!this.isSmartTV) {
      this.dirLight.shadow.mapSize.width = 1024;
      this.dirLight.shadow.mapSize.height = 1024;
      this.dirLight.shadow.camera.near = 1;
      this.dirLight.shadow.camera.far = 160;
      const d = 45;
      this.dirLight.shadow.camera.left = -d;
      this.dirLight.shadow.camera.right = d;
      this.dirLight.shadow.camera.top = d;
      this.dirLight.shadow.camera.bottom = -d;
      this.dirLight.shadow.bias = -0.0005;
    }
    this.scene.add(this.dirLight);

    // Glowing Neon Point Lights
    this.cyanPointLight = new THREE.PointLight(0x00f3ff, 6.0, 90);
    this.cyanPointLight.position.set(0, 8, 15);
    this.scene.add(this.cyanPointLight);

    this.pinkPointLight = new THREE.PointLight(0xff007f, 5.0, 90);
    this.pinkPointLight.position.set(-14, 12, 30);
    this.scene.add(this.pinkPointLight);

    this.goldPointLight = new THREE.PointLight(0xffd700, 5.0, 90);
    this.goldPointLight.position.set(14, 12, 30);
    this.scene.add(this.goldPointLight);
  }

  setQuality(qualityMode) {
    this.quality = qualityMode;
    if (qualityMode === 'LOW' || this.isSmartTV) {
      this.renderer.shadowMap.enabled = false;
      this.renderer.setPixelRatio(1);
      this.scene.fog.density = 0.003;
    } else if (qualityMode === 'MEDIUM') {
      this.renderer.shadowMap.enabled = true;
      this.dirLight.shadow.mapSize.width = 1024;
      this.dirLight.shadow.mapSize.height = 1024;
      this.renderer.setPixelRatio(1.25);
      this.scene.fog.density = 0.0035;
    } else {
      this.renderer.shadowMap.enabled = true;
      this.dirLight.shadow.mapSize.width = 1024;
      this.dirLight.shadow.mapSize.height = 1024;
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.scene.fog.density = 0.0035;
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
