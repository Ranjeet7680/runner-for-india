// Player.js - 7 Original Playable Characters, Forward Z-Motion & Procedural Animations
import * as THREE from 'three';
import { soundEngine } from '../audio/SoundEngine.js';

export class Player {
  constructor(scene) {
    this.scene = scene;
    
    this.characterType = 'BOY';
    this.lane = 0;
    this.laneWidth = 2.5;
    this.targetX = 0;
    
    // Physics
    this.position = new THREE.Vector3(0, 0, 0);
    this.velocity = new THREE.Vector3();
    this.gravity = -36;
    this.jumpForce = 13.5;
    this.superJumpForce = 22.0;
    this.isGrounded = true;

    // Movement States
    this.isJumping = false;
    this.isSliding = false;
    this.slideTimer = 0;
    this.slideDuration = 0.8;

    // Rocket Flight State
    this.isRocketFlying = false;
    this.rocketTargetY = 8.5;

    // Hitbox Bounding Box (AABB)
    this.box = new THREE.Box3();
    this.width = 1.0;
    this.height = 1.8;
    this.depth = 0.8;

    this.animTime = 0;
    this.landingEffectTimer = 0;
    this.compressionScale = 1.0;

    // Powerup & Hero Ability Active States
    this.shieldActive = false;
    this.magnetActive = false;
    this.speedActive = false;
    this.doubleScoreActive = false;
    this.superJumpActive = false;
    this.rocketActive = false;

    // Hero Active Ability System
    this.abilityActive = false;
    this.abilityTimer = 0;
    this.abilityCooldown = 0;
    this.abilityCooldownMax = 15.0;
    this.rampTargetY = 0;

    // Emotes & Celebration Animations
    this.currentEmote = null;
    this.emoteTimer = 0;
    this.isCelebrating = false;
    this.celebrationTimer = 0;

    // Crash & Knockdown Animation State
    this.isCrashing = false;
    this.crashTimer = 0;

    this.mesh = new THREE.Group();
    this.buildCharacterMesh(this.characterType);
    this.buildPowerUpAuras();
    this.initLandingParticles();
    this.initCrashParticles();
    this.initSlideSparks();
    this.scene.add(this.mesh);
  }

  initLandingParticles() {
    const count = 24;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x00f3ff,
      size: 0.4,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    this.landingParticles = new THREE.Points(geo, mat);
    this.landingParticles.visible = false;
    this.scene.add(this.landingParticles);
  }

  initCrashParticles() {
    const count = 60;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 3;
      pos[i * 3 + 1] = Math.random() * 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3;

      if (Math.random() > 0.4) {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.2; colors[i * 3 + 2] = 0.1; // Red spark
      } else {
        colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.9; colors[i * 3 + 2] = 0.2; // Yellow spark
      }
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });

    this.crashParticles = new THREE.Points(geo, mat);
    this.crashParticles.visible = false;
    this.scene.add(this.crashParticles);
    this.crashParticleTimer = 0;
  }

  initSlideSparks() {
    const count = 30;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xffaa00,
      size: 0.35,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    this.slideSparks = new THREE.Points(geo, mat);
    this.slideSparks.visible = false;
    this.scene.add(this.slideSparks);
  }

  triggerCrash() {
    this.isCrashing = true;
    this.crashTimer = 1.5;
    this.velocity.set(0, 5.0, -12.0); // Knockback impulse
    this.isGrounded = false;
    this.compressionScale = 0.6;

    if (this.crashParticles) {
      this.crashParticles.position.copy(this.position);
      const attr = this.crashParticles.geometry.attributes.position;
      const arr = attr.array;
      for (let i = 0; i < arr.length / 3; i++) {
        arr[i * 3] = (Math.random() - 0.5) * 3.5;
        arr[i * 3 + 1] = Math.random() * 2.5;
        arr[i * 3 + 2] = (Math.random() - 0.5) * 3.5;
      }
      attr.needsUpdate = true;
      this.crashParticles.visible = true;
      this.crashParticleTimer = 0.8;
    }
  }

  triggerLandingDust() {
    if (!this.landingParticles) return;
    this.landingParticles.position.copy(this.position);
    const attr = this.landingParticles.geometry.attributes.position;
    const arr = attr.array;
    for (let i = 0; i < arr.length / 3; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 2.2;
      arr[i * 3 + 1] = Math.random() * 0.5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 2.2;
    }
    attr.needsUpdate = true;
    this.landingParticles.visible = true;
    this.landingEffectTimer = 0.3;
    this.compressionScale = 0.75;
  }

  setCharacterType(type) {
    this.characterType = type;
    this.scene.remove(this.mesh);
    this.mesh = new THREE.Group();
    this.buildCharacterMesh(type);
    this.buildPowerUpAuras();
    this.scene.add(this.mesh);
  }

  buildCharacterMesh(type) {
    this.characterGroup = new THREE.Group();

    if (type === 'ROBOT') {
      const robotMat = new THREE.MeshStandardMaterial({ color: 0x8899b0, metalness: 0.9, roughness: 0.2 });
      const coreMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff007f });

      const torso = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.85, 0.4), robotMat);
      torso.position.y = 1.1;
      this.characterGroup.add(torso);

      this.coreReactor = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), coreMat);
      this.coreReactor.position.set(0, 1.25, 0.22);
      this.characterGroup.add(this.coreReactor);

      this.headGroup = new THREE.Group();
      this.headGroup.position.set(0, 1.75, 0);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), robotMat);
      this.headMesh = head;
      this.headGroup.add(head);

      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.1, 0.42), eyeMat);
      visor.position.set(0, 0.05, 0.02);
      this.headGroup.add(visor);
      this.characterGroup.add(this.headGroup);

      this.leftArmPivot = this.createPivot(-0.42, 1.4, robotMat);
      this.rightArmPivot = this.createPivot(0.42, 1.4, robotMat);
      this.leftLegPivot = this.createPivot(-0.2, 0.7, robotMat);
      this.rightLegPivot = this.createPivot(0.2, 0.7, robotMat);
      this.characterGroup.add(this.leftArmPivot, this.rightArmPivot, this.leftLegPivot, this.rightLegPivot);

    } else if (type === 'POLICE') {
      const skinMat = new THREE.MeshStandardMaterial({ color: 0xe0a880, roughness: 0.5 });
      const uniformMat = new THREE.MeshStandardMaterial({ color: 0x112244, roughness: 0.5 });
      const vestMat = new THREE.MeshStandardMaterial({ color: 0x0a1428, roughness: 0.4 });
      const badgeMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9, roughness: 0.1 });
      const glassesMat = new THREE.MeshBasicMaterial({ color: 0x050814 });

      const torso = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.82, 0.4), vestMat);
      torso.position.y = 1.1;
      this.characterGroup.add(torso);

      const badge = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.15, 0.42), badgeMat);
      badge.position.set(-0.18, 1.3, 0.02);
      this.characterGroup.add(badge);

      this.headGroup = new THREE.Group();
      this.headGroup.position.set(0, 1.7, 0);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.45, 0.42), skinMat);
      this.headMesh = head;
      this.headGroup.add(head);

      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.15, 0.48), uniformMat);
      cap.position.set(0, 0.22, 0);
      this.headGroup.add(cap);

      const glasses = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.1, 0.44), glassesMat);
      glasses.position.set(0, 0.04, 0.02);
      this.headGroup.add(glasses);
      this.characterGroup.add(this.headGroup);

      this.leftArmPivot = this.createPivot(-0.44, 1.4, uniformMat);
      this.rightArmPivot = this.createPivot(0.44, 1.4, uniformMat);
      this.leftLegPivot = this.createPivot(-0.2, 0.7, uniformMat);
      this.rightLegPivot = this.createPivot(0.2, 0.7, uniformMat);
      this.characterGroup.add(this.leftArmPivot, this.rightArmPivot, this.leftLegPivot, this.rightLegPivot);

    } else if (type === 'GIRL') {
      const clothHex = this.clothColor ? parseInt(this.clothColor.replace('#', '0x'), 16) : 0xff007f;
      const pantsHex = this.pantsColor ? parseInt(this.pantsColor.replace('#', '0x'), 16) : 0x11052c;

      const skinMat = new THREE.MeshStandardMaterial({ color: 0xf2c8a0, roughness: 0.5 });
      const hairMat = new THREE.MeshStandardMaterial({ color: 0x662200, roughness: 0.8 });
      const jacketMat = new THREE.MeshStandardMaterial({ color: clothHex, roughness: 0.4 });
      const pantsMat = new THREE.MeshStandardMaterial({ color: pantsHex, roughness: 0.6 });
      const shoeMat = new THREE.MeshStandardMaterial({ color: 0x00f3ff, roughness: 0.3 });

      const torso = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.75, 0.36), jacketMat);
      torso.position.y = 1.05;
      this.characterGroup.add(torso);

      this.headGroup = new THREE.Group();
      this.headGroup.position.set(0, 1.65, 0);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.4, 0.38), skinMat);
      this.headMesh = head;
      this.headGroup.add(head);

      const hair = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.2, 0.42), hairMat);
      hair.position.set(0, 0.2, -0.02);
      this.headGroup.add(hair);

      this.ponytail = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.4), hairMat);
      this.ponytail.position.set(0, 0.1, -0.28);
      this.ponytail.rotation.x = 0.4;
      this.headGroup.add(this.ponytail);
      this.characterGroup.add(this.headGroup);

      this.leftArmPivot = this.createPivot(-0.38, 1.35, jacketMat);
      this.rightArmPivot = this.createPivot(0.38, 1.35, jacketMat);
      this.leftLegPivot = this.createPivot(-0.16, 0.68, pantsMat, shoeMat);
      this.rightLegPivot = this.createPivot(0.16, 0.68, pantsMat, shoeMat);
      this.characterGroup.add(this.leftArmPivot, this.rightArmPivot, this.leftLegPivot, this.rightLegPivot);

    } else if (type === 'ALIEN') {
      const alienMat = new THREE.MeshStandardMaterial({ color: 0x00ff88, roughness: 0.2, metalness: 0.8 });
      const suitMat = new THREE.MeshStandardMaterial({ color: 0x112244, roughness: 0.4 });
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });

      const torso = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.8, 0.35), suitMat);
      torso.position.y = 1.1;
      this.characterGroup.add(torso);

      this.headGroup = new THREE.Group();
      this.headGroup.position.set(0, 1.7, 0);
      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), alienMat);
      this.headMesh = dome;
      this.headGroup.add(dome);

      const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), eyeMat);
      eyeL.position.set(-0.12, 0.05, 0.28);
      const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), eyeMat);
      eyeR.position.set(0.12, 0.05, 0.28);
      this.headGroup.add(eyeL, eyeR);
      this.characterGroup.add(this.headGroup);

      this.leftArmPivot = this.createPivot(-0.35, 1.4, suitMat);
      this.rightArmPivot = this.createPivot(0.35, 1.4, suitMat);
      this.leftLegPivot = this.createPivot(-0.15, 0.7, suitMat);
      this.rightLegPivot = this.createPivot(0.15, 0.7, suitMat);
      this.characterGroup.add(this.leftArmPivot, this.rightArmPivot, this.leftLegPivot, this.rightLegPivot);

    } else if (type === 'DOG' || type === 'CAT') {
      const isDog = (type === 'DOG');
      const clothHex = this.clothColor ? parseInt(this.clothColor.replace('#', '0x'), 16) : null;
      const pantsHex = this.pantsColor ? parseInt(this.pantsColor.replace('#', '0x'), 16) : (isDog ? 0xd4a373 : 0x4a4e69);

      const petMat = new THREE.MeshStandardMaterial({ color: pantsHex, roughness: 0.8 });
      const collarMat = new THREE.MeshBasicMaterial({ color: clothHex || (isDog ? 0xff0055 : 0x00f3ff) });

      const body = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.8), petMat);
      body.position.y = 0.5;
      this.characterGroup.add(body);

      const collar = new THREE.Mesh(new THREE.BoxGeometry(0.47, 0.08, 0.47), collarMat);
      collar.position.set(0, 0.52, -0.25);
      this.characterGroup.add(collar);

      this.headGroup = new THREE.Group();
      this.headGroup.position.set(0, 0.75, 0.35);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.35), petMat);
      this.headMesh = head;
      this.headGroup.add(head);

      const earGeo = isDog ? new THREE.BoxGeometry(0.1, 0.2, 0.1) : new THREE.ConeGeometry(0.1, 0.25, 4);
      const earL = new THREE.Mesh(earGeo, petMat);
      earL.position.set(-0.15, 0.25, 0);
      const earR = new THREE.Mesh(earGeo, petMat);
      earR.position.set(0.15, 0.25, 0);
      this.headGroup.add(earL, earR);

      this.tail = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, 0.4), petMat);
      this.tail.position.set(0, 0.6, -0.45);
      this.tail.rotation.x = -Math.PI / 4;
      this.characterGroup.add(this.tail);

      this.characterGroup.add(this.headGroup);

      this.leftArmPivot = this.createLegPivot(-0.18, 0.4, 0.25, petMat);
      this.rightArmPivot = this.createLegPivot(0.18, 0.4, 0.25, petMat);
      this.leftLegPivot = this.createLegPivot(-0.18, 0.4, -0.25, petMat);
      this.rightLegPivot = this.createLegPivot(0.18, 0.4, -0.25, petMat);
      this.characterGroup.add(this.leftArmPivot, this.rightArmPivot, this.leftLegPivot, this.rightLegPivot);

    } else {
      // Default Boy Runner
      const clothHex = this.clothColor ? parseInt(this.clothColor.replace('#', '0x'), 16) : 0x00d2ff;
      const pantsHex = this.pantsColor ? parseInt(this.pantsColor.replace('#', '0x'), 16) : 0x11192e;

      const skinMat = new THREE.MeshStandardMaterial({ color: 0xe0a880, roughness: 0.5 });
      const jacketMat = new THREE.MeshStandardMaterial({ color: clothHex, roughness: 0.3, metalness: 0.2 });
      const trimMat = new THREE.MeshBasicMaterial({ color: 0xff007f });
      const pantsMat = new THREE.MeshStandardMaterial({ color: pantsHex, roughness: 0.7 });
      const shoeMat = new THREE.MeshStandardMaterial({ color: 0xff007f, roughness: 0.3 });

      const torso = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.8, 0.4), jacketMat);
      torso.position.y = 1.1;
      this.characterGroup.add(torso);

      // Sci-fi Chest Badge
      const badgeMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
      const badge = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.3, 0.42), badgeMat);
      badge.position.set(0, 1.15, 0.02);
      this.characterGroup.add(badge);

      this.headGroup = new THREE.Group();
      this.headGroup.position.set(0, 1.7, 0);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.45, 0.42), skinMat);
      this.headMesh = head;
      this.headGroup.add(head);

      // Visor / Headband Accent
      const visorGeo = new THREE.BoxGeometry(0.44, 0.12, 0.44);
      const visor = new THREE.Mesh(visorGeo, trimMat);
      visor.position.set(0, 0.08, 0.02);
      this.headGroup.add(visor);

      this.characterGroup.add(this.headGroup);

      this.leftArmPivot = this.createPivot(-0.44, 1.4, jacketMat);
      this.rightArmPivot = this.createPivot(0.44, 1.4, jacketMat);
      this.leftLegPivot = this.createPivot(-0.2, 0.7, pantsMat, shoeMat);
      this.rightLegPivot = this.createPivot(0.2, 0.7, pantsMat, shoeMat);
      this.characterGroup.add(this.leftArmPivot, this.rightArmPivot, this.leftLegPivot, this.rightLegPivot);
    }

    const rocketGeo = new THREE.BoxGeometry(1.2, 0.25, 2.2);
    const rocketMat = new THREE.MeshStandardMaterial({ color: 0xffcc00, metalness: 0.9, emissive: 0x884400 });
    this.rocketBoard = new THREE.Mesh(rocketGeo, rocketMat);
    this.rocketBoard.position.set(0, -0.15, 0);
    this.rocketBoard.visible = false;
    this.characterGroup.add(this.rocketBoard);

    this.mesh.add(this.characterGroup);

    // Apply custom face texture if present
    const savedFace = this.customFaceDataUrl || localStorage.getItem('nexora_custom_face');
    if (savedFace) {
      this.setCustomFaceImage(savedFace);
    }
  }

  createPivot(x, y, mat, shoeMat = null) {
    const pivot = new THREE.Group();
    pivot.position.set(x, y, 0);
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.7, 0.2), mat);
    mesh.position.y = -0.35;
    pivot.add(mesh);

    if (shoeMat) {
      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.18, 0.36), shoeMat);
      shoe.position.set(0, -0.65, 0.08);
      pivot.add(shoe);
    }
    return pivot;
  }

  createLegPivot(x, y, z, mat) {
    const pivot = new THREE.Group();
    pivot.position.set(x, y, z);
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.4, 0.14), mat);
    mesh.position.y = -0.2;
    pivot.add(mesh);
    return pivot;
  }

  buildPowerUpAuras() {
    const shieldGeo = new THREE.SphereGeometry(1.4, 16, 16);
    const shieldMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.4, wireframe: true });
    this.shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
    this.shieldMesh.position.y = 1.0;
    this.shieldMesh.visible = false;
    this.mesh.add(this.shieldMesh);

    // Soft Shadow Disk beneath feet
    const shadowGeo = new THREE.CircleGeometry(0.7, 16);
    const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4 });
    this.shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadowMesh.rotation.x = -Math.PI / 2;
    this.shadowMesh.position.y = 0.02;
    this.mesh.add(this.shadowMesh);
  }

  moveLeft() {
    if (this.lane > -1) {
      this.lane--;
      this.targetX = this.lane * this.laneWidth;
      soundEngine.playSlide();
    }
  }

  moveRight() {
    if (this.lane < 1) {
      this.lane++;
      this.targetX = this.lane * this.laneWidth;
      soundEngine.playSlide();
    }
  }

  jump() {
    if (this.isGrounded && !this.isSliding && !this.isRocketFlying) {
      this.isJumping = true;
      this.isGrounded = false;
      const force = this.superJumpActive ? this.superJumpForce : this.jumpForce;
      this.velocity.y = force;

      if (this.characterType === 'DOG') soundEngine.playClick();
      else if (this.characterType === 'CAT') soundEngine.playClick();
      else soundEngine.playJump();
    }
  }

  slide() {
    if (this.isGrounded && !this.isSliding && !this.isRocketFlying) {
      this.isSliding = true;
      this.slideTimer = this.slideDuration;
      soundEngine.playSlide();
    } else if (this.isJumping) {
      this.velocity.y = -25;
    }
  }

  setRocketFlight(active) {
    this.isRocketFlying = active;
    this.rocketBoard.visible = active;
  }

  triggerAbility() {
    if (this.abilityCooldown > 0) return false;

    this.abilityActive = true;
    this.abilityTimer = 10.0; // Fixed 10.0 seconds duration!
    this.abilityCooldown = this.abilityCooldownMax; // 15 seconds cooldown

    this.magnetActive = true;
    this.shieldActive = true;
    this.shieldMesh.visible = true;

    soundEngine.playPowerup();
    soundEngine.playSpatialTrainHorn(this.position.x, this.position.z);
    return true;
  }

  triggerEmote(type = 'DANCE') {
    this.currentEmote = type;
    this.emoteTimer = 2.8;
    soundEngine.playClick();
    this.triggerLandingDust();
    return true;
  }

  triggerHighscoreCelebration() {
    this.isCelebrating = true;
    this.celebrationTimer = 4.5;
    this.currentEmote = 'VICTORY';
    this.emoteTimer = 4.5;
    soundEngine.playPowerup();
    this.triggerLandingDust();
  }

  setRampTargetY(targetY) {
    this.rampTargetY = targetY;
  }

  update(delta, gameSpeed, distanceZ = 0) {
    const gaitSpeed = (gameSpeed / 12) * 12;
    this.animTime += delta * gaitSpeed;

    // Emote & Celebration timers update
    if (this.emoteTimer > 0) {
      this.emoteTimer -= delta;
      if (this.emoteTimer <= 0) {
        this.emoteTimer = 0;
        this.currentEmote = null;
      }
    }

    if (this.celebrationTimer > 0) {
      this.celebrationTimer -= delta;
      if (this.celebrationTimer <= 0) {
        this.celebrationTimer = 0;
        this.isCelebrating = false;
      }
    }

    // Ability timers update
    if (this.abilityActive) {
      this.abilityTimer -= delta;
      if (this.abilityTimer <= 0) {
        this.abilityActive = false;
        this.magnetActive = false;
        this.shieldActive = false;
        this.shieldMesh.visible = false;
      }
    }

    if (this.abilityCooldown > 0) {
      this.abilityCooldown -= delta;
      if (this.abilityCooldown < 0) this.abilityCooldown = 0;
    }

    // Advance forward along POSITIVE Z
    this.position.z = distanceZ;

    // Frame-rate independent lerp for smooth 144Hz/120Hz/60Hz movement
    const lerpX = 1.0 - Math.exp(-24 * delta);
    this.position.x = THREE.MathUtils.lerp(this.position.x, this.targetX, lerpX);

    // Smooth Bank Angle Lean during Lane Change
    const laneShiftDelta = (this.targetX - this.position.x);
    const lerpBank = 1.0 - Math.exp(-16 * delta);
    this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, -laneShiftDelta * 0.18, lerpBank);
    this.mesh.rotation.y = THREE.MathUtils.lerp(this.mesh.rotation.y, laneShiftDelta * 0.1, lerpBank);

    if (this.isCrashing) {
      this.crashTimer -= delta;
      this.velocity.y += this.gravity * delta;
      this.position.y += this.velocity.y * delta;
      if (this.position.y <= 0) {
        this.position.y = 0;
        this.velocity.set(0, 0, 0);
        this.isGrounded = true;
      }
    } else if (this.isRocketFlying) {
      const lerpY = 1.0 - Math.exp(-10 * delta);
      this.position.y = THREE.MathUtils.lerp(this.position.y, this.rocketTargetY, lerpY);
      this.isGrounded = false;
    } else if (this.rampTargetY > 0) {
      // Climbing train triangle ramp or running on train roof
      const lerpRamp = 1.0 - Math.exp(-18 * delta);
      this.position.y = THREE.MathUtils.lerp(this.position.y, this.rampTargetY, lerpRamp);
      this.velocity.y = 0;
      this.isGrounded = true;
      this.isJumping = false;
    } else if (!this.isGrounded) {
      this.velocity.y += this.gravity * delta;
      this.position.y += this.velocity.y * delta;

      if (this.position.y <= 0) {
        this.position.y = 0;
        this.velocity.y = 0;
        this.isGrounded = true;
        this.isJumping = false;
        this.triggerLandingDust();
      }
    }

    if (this.isSliding) {
      this.slideTimer -= delta;
      if (this.slideTimer <= 0) {
        this.isSliding = false;
        if (this.slideSparks) this.slideSparks.visible = false;
      } else if (this.slideSparks) {
        // Emit friction sparks behind shoes on track
        this.slideSparks.position.set(this.position.x, 0.05, this.position.z - 0.6);
        const attr = this.slideSparks.geometry.attributes.position;
        const arr = attr.array;
        for (let i = 0; i < arr.length / 3; i++) {
          arr[i * 3] = (Math.random() - 0.5) * 0.8;
          arr[i * 3 + 1] = Math.random() * 0.4;
          arr[i * 3 + 2] = -Math.random() * 1.5;
        }
        attr.needsUpdate = true;
        this.slideSparks.visible = true;
      }
    }

    if (this.crashParticleTimer > 0) {
      this.crashParticleTimer -= delta;
      if (this.crashParticleTimer <= 0 && this.crashParticles) {
        this.crashParticles.visible = false;
      }
    }

    if (this.landingEffectTimer > 0) {
      this.landingEffectTimer -= delta;
      if (this.landingEffectTimer <= 0 && this.landingParticles) {
        this.landingParticles.visible = false;
      }
    }

    if (this.compressionScale < 1.0) {
      this.compressionScale = THREE.MathUtils.lerp(this.compressionScale, 1.0, 0.18);
    }

    this.mesh.position.copy(this.position);
    this.mesh.scale.set(1.0, this.compressionScale, 1.0);
    this.updateAnimations(gameSpeed);
    this.updateHitbox();
  }

  updateAnimations(gameSpeed) {
    if (this.coreReactor) {
      this.coreReactor.scale.setScalar(1.0 + Math.sin(this.animTime * 6) * 0.3);
    }

    // Dramatic Crash Knockdown Tumble Animation
    if (this.isCrashing) {
      const t = Math.max(0, 1.5 - this.crashTimer);
      this.characterGroup.position.y = -0.3;
      this.characterGroup.rotation.x = Math.min(Math.PI / 2, t * 4.5); // Fall backwards onto back
      this.characterGroup.rotation.z = Math.sin(t * 8) * 0.25; // Side wobble
      this.leftArmPivot.rotation.x = -Math.PI * 0.85; // Arms flailing up
      this.rightArmPivot.rotation.x = -Math.PI * 0.85;
      this.leftLegPivot.rotation.x = 0.5;
      this.rightLegPivot.rotation.x = 0.7;
      if (this.headGroup) this.headGroup.rotation.x = -0.5;
      return;
    }

    if (this.isRocketFlying) {
      const hover = Math.sin(this.animTime * 4) * 0.12;
      this.characterGroup.position.y = hover;
      this.characterGroup.rotation.x = -0.22;
      this.characterGroup.rotation.z = Math.sin(this.animTime * 2) * 0.08;
      this.leftArmPivot.rotation.x = -Math.PI / 4;
      this.rightArmPivot.rotation.x = -Math.PI / 4;
      this.leftLegPivot.rotation.x = 0.3;
      this.rightLegPivot.rotation.x = 0.4;
      return;
    }

    // Emotes & Celebration Poses
    if (this.currentEmote || this.isCelebrating) {
      const emote = this.currentEmote || 'VICTORY';
      const t = this.animTime * 6;

      if (emote === 'DANCE') {
        // High Energy Hip-Hop Celebration Dance
        this.characterGroup.position.y = Math.abs(Math.sin(t)) * 0.28;
        this.characterGroup.rotation.y = Math.sin(t * 0.5) * 0.45;
        this.characterGroup.rotation.z = Math.sin(t) * 0.18;
        this.leftArmPivot.rotation.x = -Math.PI / 3 + Math.sin(t) * 0.7;
        this.rightArmPivot.rotation.x = -Math.PI / 3 - Math.sin(t) * 0.7;
        this.leftArmPivot.rotation.z = Math.cos(t) * 0.3;
        this.rightArmPivot.rotation.z = -Math.cos(t) * 0.3;
        this.leftLegPivot.rotation.x = Math.sin(t) * 0.6;
        this.rightLegPivot.rotation.x = -Math.sin(t) * 0.6;
        return;

      } else if (emote === 'VICTORY') {
        // High Score Victory Jump & Double Hand Flex
        const jumpY = Math.abs(Math.sin(t * 0.7)) * 0.85;
        this.characterGroup.position.y = jumpY;
        this.characterGroup.rotation.y = Math.sin(t * 0.5) * 0.3;
        this.leftArmPivot.rotation.x = -Math.PI * 0.9 + Math.sin(t * 2) * 0.25;
        this.rightArmPivot.rotation.x = -Math.PI * 0.9 - Math.sin(t * 2) * 0.25;
        this.leftArmPivot.rotation.z = 0.45;
        this.rightArmPivot.rotation.z = -0.45;
        this.leftLegPivot.rotation.x = -0.35;
        this.rightLegPivot.rotation.x = 0.35;
        return;

      } else if (emote === 'FLIP') {
        // Acrobatic 360 Spin Backflip
        this.characterGroup.position.y = Math.sin(t) * 0.95;
        this.characterGroup.rotation.x = -t * 1.8;
        this.leftArmPivot.rotation.x = -Math.PI / 2;
        this.rightArmPivot.rotation.x = -Math.PI / 2;
        this.leftLegPivot.rotation.x = -0.8;
        this.rightLegPivot.rotation.x = -0.8;
        return;

      } else if (emote === 'SALUTE') {
        // CID Detective Victory Salute
        this.characterGroup.position.y = 0.05;
        this.characterGroup.rotation.y = 0.12;
        this.rightArmPivot.rotation.x = -Math.PI * 0.85;
        this.rightArmPivot.rotation.z = -Math.PI * 0.28;
        this.leftArmPivot.rotation.x = 0.25;
        this.leftLegPivot.rotation.x = 0;
        this.rightLegPivot.rotation.x = 0;
        return;
      }
    }

    if (this.isSliding) {
      // Athletic Ground Slide
      this.characterGroup.position.y = -0.45;
      this.characterGroup.rotation.x = -Math.PI / 2.8;
      this.leftArmPivot.rotation.x = -Math.PI / 2;
      this.rightArmPivot.rotation.x = -Math.PI / 2;
      this.leftLegPivot.rotation.x = -Math.PI / 3;
      this.rightLegPivot.rotation.x = Math.PI / 4;
      if (this.headGroup) this.headGroup.rotation.x = 0.3;

    } else if (this.isJumping) {
      // Dynamic Air Jump Arc
      this.characterGroup.position.y = 0.05;
      const jumpPitch = THREE.MathUtils.clamp(-this.velocity.y * 0.04, -0.5, 0.5);
      this.characterGroup.rotation.x = jumpPitch;
      this.leftArmPivot.rotation.x = -Math.PI / 2.2;
      this.rightArmPivot.rotation.x = -Math.PI / 2.2;
      this.leftArmPivot.rotation.z = 0.3;
      this.rightArmPivot.rotation.z = -0.3;
      this.leftLegPivot.rotation.x = -0.6;
      this.rightLegPivot.rotation.x = 0.6;
      if (this.headGroup) this.headGroup.rotation.x = -jumpPitch * 0.5;

    } else {
      // Fluid Athletic Running Stride
      const runSpeedMultiplier = Math.min(1.8, Math.max(0.9, gameSpeed / 18.0));
      const t = this.animTime * runSpeedMultiplier;

      // Athletic Torso Bob & Spine Twist
      const bob = Math.abs(Math.sin(t * 2)) * 0.12;
      this.characterGroup.position.y = bob;
      this.characterGroup.rotation.x = 0.08;
      this.characterGroup.rotation.y = Math.sin(t) * 0.12; // Torso Yaw Twist
      this.characterGroup.rotation.z = Math.cos(t) * 0.06; // Shoulder Dip Roll

      // Alternating Elbow-Flexed Arm Swing
      const armSwing = Math.sin(t) * 0.95;
      this.leftArmPivot.rotation.x = armSwing;
      this.rightArmPivot.rotation.x = -armSwing;
      this.leftArmPivot.rotation.z = 0.12;
      this.rightArmPivot.rotation.z = -0.12;

      // Stride Leg Flexion & Drive
      const legSwing = Math.sin(t) * 0.9;
      this.leftLegPivot.rotation.x = -legSwing;
      this.rightLegPivot.rotation.x = legSwing;

      // Dynamic Ponytail & Tail Spring Physics
      if (this.ponytail) {
        this.ponytail.rotation.z = Math.sin(t) * 0.25;
        this.ponytail.rotation.x = 0.4 + Math.abs(Math.sin(t * 2)) * 0.2;
      }
      if (this.tail) {
        this.tail.rotation.y = Math.sin(t * 2) * 0.4;
        this.tail.rotation.z = Math.cos(t * 2) * 0.2;
      }
      if (this.headGroup) {
        this.headGroup.rotation.x = -bob * 0.5;
      }
    }
  }

  updateHitbox() {
    const yOffset = this.isSliding ? 0.45 : 0.9;
    const h = this.isSliding ? 0.9 : this.height;
    this.box.setFromCenterAndSize(
      new THREE.Vector3(this.position.x, this.position.y + yOffset, this.position.z),
      new THREE.Vector3(this.width, h, this.depth)
    );
  }

  setPowerupVisual(type, active) {
    if (type === 'SHIELD' || type === 'SAFETY_BUBBLE') {
      this.shieldActive = active;
      this.shieldMesh.visible = active;
    } else if (type === 'JUMP_SHOES' || type === 'JUMP') {
      this.superJumpActive = active;
    } else if (type === 'AIR_ROCKET') {
      this.setRocketFlight(active);
    } else if (type === 'MAGNET') {
      this.magnetActive = active;
    } else if (type === 'DOUBLE_COIN') {
      this.doubleScoreActive = active;
    } else if (type === 'SPEED_BOOST') {
      this.speedActive = active;
    }
  }

  reset() {
    this.lane = 0;
    this.targetX = 0;
    this.position.set(0, 0, 0);
    this.velocity.set(0, 0, 0);
    this.isGrounded = true;
    this.isJumping = false;
    this.isSliding = false;
    this.isCrashing = false;
    this.crashTimer = 0;
    this.isRocketFlying = false;
    this.rocketBoard.visible = false;
    this.shieldActive = false;
    this.superJumpActive = false;
    this.magnetActive = false;
    this.doubleScoreActive = false;
    this.speedActive = false;
    if (this.shieldMesh) this.shieldMesh.visible = false;
    if (this.slideSparks) this.slideSparks.visible = false;
    if (this.crashParticles) this.crashParticles.visible = false;
    if (this.characterGroup) {
      this.characterGroup.position.set(0, 0, 0);
      this.characterGroup.rotation.set(0, 0, 0);
    }
    this.mesh.rotation.set(0, 0, 0);
    this.compressionScale = 1.0;
  }

  setCustomFaceImage(dataUrl) {
    if (!dataUrl) return;
    this.customFaceDataUrl = dataUrl;
    const loader = new THREE.TextureLoader();
    loader.load(dataUrl, (texture) => {
      this.customFaceTexture = texture;
      this.applyFaceTextureToHead();
      try {
        localStorage.setItem('nexora_custom_face', dataUrl);
      } catch (e) {
        console.warn('Could not save face image to localStorage:', e);
      }
    });
  }

  removeCustomFaceImage() {
    this.customFaceDataUrl = null;
    this.customFaceTexture = null;
    try {
      localStorage.removeItem('nexora_custom_face');
    } catch (e) {}
    this.setCharacterType(this.characterType);
  }

  applyFaceTextureToHead() {
    if (!this.customFaceTexture || !this.headMesh) return;
    const faceMat = new THREE.MeshStandardMaterial({
      map: this.customFaceTexture,
      roughness: 0.4,
      metalness: 0.1
    });

    const baseMat = Array.isArray(this.headMesh.material) ? this.headMesh.material[0] : this.headMesh.material;
    this.headMesh.material = [
      baseMat, // +X right
      baseMat, // -X left
      baseMat, // +Y top
      baseMat, // -Y bottom
      faceMat, // +Z front face (CUSTOM FACE PHOTO!)
      baseMat  // -Z back
    ];
  }

  setClothColor(hexColor) {
    this.clothColor = hexColor;
    try {
      localStorage.setItem('nexora_cloth_color', hexColor);
    } catch(e) {}
    this.setCharacterType(this.characterType);
  }

  setPantsColor(hexColor) {
    this.pantsColor = hexColor;
    try {
      localStorage.setItem('nexora_pants_color', hexColor);
    } catch(e) {}
    this.setCharacterType(this.characterType);
  }
}
