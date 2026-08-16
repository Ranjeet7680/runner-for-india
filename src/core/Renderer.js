// Renderer.js - Cyberpunk Skybox, Starry Cosmos & Atmospheric Lighting
import * as THREE from 'three';

export class AppRenderer {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.quality = 'HIGH';

    this.isSmartTV = /TV|SmartTV|Tizen|WebOS|AndroidTV|NetCast|GoogleTV|AppleTV|BRAVIA/i.test(navigator.userAgent);

    // Deep Cyberpunk Space Sky & Volumetric Fog
    this.skyColor = new THREE.Color(0x0a1428);
    this.scene.background = this.skyColor;
    this.scene.fog = new THREE.FogExp2(0x0a1428, 0.0035);

    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      450
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
    this.renderer.toneMappingExposure = 1.6;

    // Prevent default touch scrolling on canvas
    this.renderer.domElement.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
    this.renderer.domElement.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

    // WebGL Context Recovery
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
    this.initStarrySky();
    window.addEventListener('resize', () => this.onWindowResize());
  }

  initStarrySky() {
    const starCount = 350;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 400;
      pos[i * 3 + 1] = Math.random() * 150 + 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 400;

      colors[i * 3] = 0.5 + Math.random() * 0.5;
      colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
      colors[i * 3 + 2] = 1.0;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    this.stars = new THREE.Points(geo, mat);
    this.scene.add(this.stars);
  }

  initLights() {
    this.ambientLight = new THREE.AmbientLight(0x5577aa, 2.6);
    this.scene.add(this.ambientLight);

    this.hemiLight = new THREE.HemisphereLight(0x00f3ff, 0x7928ca, 2.0);
    this.scene.add(this.hemiLight);

    this.dirLight = new THREE.DirectionalLight(0xffffff, 3.2);
    this.dirLight.position.set(30, 60, -30);
    this.dirLight.castShadow = !this.isSmartTV;
    
    if (!this.isSmartTV) {
      this.dirLight.shadow.mapSize.width = 1024;
      this.dirLight.shadow.mapSize.height = 1024;
      this.dirLight.shadow.camera.near = 1;
      this.dirLight.shadow.camera.far = 180;
      const d = 50;
      this.dirLight.shadow.camera.left = -d;
      this.dirLight.shadow.camera.right = d;
      this.dirLight.shadow.camera.top = d;
      this.dirLight.shadow.camera.bottom = -d;
      this.dirLight.shadow.bias = -0.0005;
    }
    this.scene.add(this.dirLight);

    this.cyanPointLight = new THREE.PointLight(0x00f3ff, 5.0, 100);
    this.cyanPointLight.position.set(0, 10, 20);
    this.scene.add(this.cyanPointLight);

    this.pinkPointLight = new THREE.PointLight(0xff007f, 4.0, 100);
    this.pinkPointLight.position.set(-15, 12, 40);
    this.scene.add(this.pinkPointLight);

    this.goldPointLight = new THREE.PointLight(0xffd700, 4.0, 100);
    this.goldPointLight.position.set(15, 12, 40);
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
