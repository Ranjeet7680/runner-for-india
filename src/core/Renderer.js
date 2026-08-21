// Renderer.js - Cyberpunk Skybox, Starry Cosmos & Atmospheric Lighting
import * as THREE from 'three';

export class AppRenderer {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.quality = 'HIGH';

    this.isSmartTV = /TV|SmartTV|Tizen|WebOS|AndroidTV|NetCast|GoogleTV|AppleTV|BRAVIA/i.test(navigator.userAgent);

    // Deep Cyberpunk Space Sky & Volumetric Fog
    this.skyColor = new THREE.Color(0x060e20);
    this.scene.background = this.skyColor;
    this.scene.fog = new THREE.FogExp2(0x060e20, 0.0035);

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
    this.initAtmosphericParticles();
    this.initSpeedWindLines();
    window.addEventListener('resize', () => this.onWindowResize());
  }

  initStarrySky() {
    const starCount = 400;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 450;
      pos[i * 3 + 1] = Math.random() * 160 + 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 450;

      colors[i * 3] = 0.4 + Math.random() * 0.6;
      colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
      colors[i * 3 + 2] = 1.0;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    this.stars = new THREE.Points(geo, mat);
    this.scene.add(this.stars);
  }

  initAtmosphericParticles() {
    const count = 120;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = Math.random() * 12 + 0.5;
      pos[i * 3 + 2] = Math.random() * 80;

      // Glowing Cyan and Gold Neon Motes
      if (Math.random() > 0.5) {
        colors[i * 3] = 0.0; colors[i * 3 + 1] = 0.95; colors[i * 3 + 2] = 1.0; // Cyan
      } else {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.84; colors[i * 3 + 2] = 0.0; // Gold
      }
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    this.dustParticles = new THREE.Points(geo, mat);
    this.scene.add(this.dustParticles);
  }

  initSpeedWindLines() {
    const lineCount = 40;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(lineCount * 6); // 2 vertices per line

    for (let i = 0; i < lineCount; i++) {
      const x = (Math.random() - 0.5) * 16;
      const y = Math.random() * 6 + 0.5;
      const z = Math.random() * 60;
      const len = 3 + Math.random() * 5;

      pos[i * 6] = x; pos[i * 6 + 1] = y; pos[i * 6 + 2] = z;
      pos[i * 6 + 3] = x; pos[i * 6 + 4] = y; pos[i * 6 + 5] = z + len;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.LineBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending
    });

    this.speedWindLines = new THREE.LineSegments(geo, mat);
    this.scene.add(this.speedWindLines);
  }

  updateAtmosphere(playerPos, gameSpeed, delta) {
    const pZ = (typeof playerPos === 'object' && playerPos !== null) ? playerPos.z : 0;
    const pX = (typeof playerPos === 'object' && playerPos !== null) ? playerPos.x : 0;

    // Follow player smoothly
    if (this.dustParticles) {
      this.dustParticles.position.set(pX * 0.3, 0, pZ);
      const attr = this.dustParticles.geometry.attributes.position;
      const arr = attr.array;
      for (let i = 0; i < arr.length / 3; i++) {
        arr[i * 3 + 2] -= (gameSpeed * 0.3) * delta;
        arr[i * 3 + 1] += Math.sin(pZ * 0.05 + i) * 0.01;
        if (arr[i * 3 + 2] < -10) arr[i * 3 + 2] = 70;
      }
      attr.needsUpdate = true;
    }

    // High Speed Wind Streaks
    if (this.speedWindLines) {
      this.speedWindLines.position.set(0, 0, pZ - 5);
      const speedProgress = Math.max(0, Math.min(1.0, (gameSpeed - 24.0) / 30.0));
      this.speedWindLines.material.opacity = speedProgress * 0.7;

      if (speedProgress > 0) {
        const attr = this.speedWindLines.geometry.attributes.position;
        const arr = attr.array;
        for (let i = 0; i < arr.length / 6; i++) {
          arr[i * 6 + 2] -= gameSpeed * 1.5 * delta;
          arr[i * 6 + 5] -= gameSpeed * 1.5 * delta;
          if (arr[i * 6 + 2] < -20) {
            const newZ = 45 + Math.random() * 20;
            const len = 4 + Math.random() * 6;
            arr[i * 6 + 2] = newZ;
            arr[i * 6 + 5] = newZ + len;
          }
        }
        attr.needsUpdate = true;
      }
    }
  }

  initLights() {
    this.ambientLight = new THREE.AmbientLight(0x6688bb, 2.8);
    this.scene.add(this.ambientLight);

    this.hemiLight = new THREE.HemisphereLight(0x00f3ff, 0x7928ca, 2.4);
    this.scene.add(this.hemiLight);

    this.dirLight = new THREE.DirectionalLight(0xffffff, 3.4);
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

    this.cyanPointLight = new THREE.PointLight(0x00f3ff, 6.0, 100);
    this.cyanPointLight.position.set(0, 10, 20);
    this.scene.add(this.cyanPointLight);

    this.pinkPointLight = new THREE.PointLight(0xff007f, 5.0, 100);
    this.pinkPointLight.position.set(-15, 12, 40);
    this.scene.add(this.pinkPointLight);

    this.goldPointLight = new THREE.PointLight(0xffd700, 5.0, 100);
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
