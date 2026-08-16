// Player.js - 7 Original Playable Characters, Responsive Mobile Interpolation & Animations
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

    // Powerup Active States
    this.shieldActive = false;
    this.magnetActive = false;
    this.speedActive = false;
    this.doubleScoreActive = false;
    this.superJumpActive = false;
    this.rocketActive = false;

    this.mesh = new THREE.Group();
    this.buildCharacterMesh(this.characterType);
    this.buildPowerUpAuras();
    this.initLandingParticles();
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
      const skinMat = new THREE.MeshStandardMaterial({ color: 0xf2c8a0, roughness: 0.5 });
      const hairMat = new THREE.MeshStandardMaterial({ color: 0x662200, roughness: 0.8 });
      const jacketMat = new THREE.MeshStandardMaterial({ color: 0xff007f, roughness: 0.4 });
      const pantsMat = new THREE.MeshStandardMaterial({ color: 0x11052c, roughness: 0.6 });
      const shoeMat = new THREE.MeshStandardMaterial({ color: 0x00f3ff, roughness: 0.3 });

      const torso = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.75, 0.36), jacketMat);
      torso.position.y = 1.05;
      this.characterGroup.add(torso);

      this.headGroup = new THREE.Group();
      this.headGroup.position.set(0, 1.65, 0);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.4, 0.38), skinMat);
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
      const petMat = new THREE.MeshStandardMaterial({ color: isDog ? 0xd4a373 : 0x4a4e69, roughness: 0.8 });
      const collarMat = new THREE.MeshBasicMaterial({ color: isDog ? 0xff0055 : 0x00f3ff });

      const body = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.8), petMat);
      body.position.y = 0.5;
      this.characterGroup.add(body);

      const collar = new THREE.Mesh(new THREE.BoxGeometry(0.47, 0.08, 0.47), collarMat);
      collar.position.set(0, 0.52, -0.25);
      this.characterGroup.add(collar);

      this.headGroup = new THREE.Group();
      this.headGroup.position.set(0, 0.75, 0.35);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.35), petMat);
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
      const skinMat = new THREE.MeshStandardMaterial({ color: 0xe0a880, roughness: 0.5 });
      const jacketMat = new THREE.MeshStandardMaterial({ color: 0x00f3ff, roughness: 0.3 });
      const pantsMat = new THREE.MeshStandardMaterial({ color: 0x1a2238, roughness: 0.7 });
      const shoeMat = new THREE.MeshStandardMaterial({ color: 0xff007f, roughness: 0.4 });

      const torso = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.8, 0.4), jacketMat);
      torso.position.y = 1.1;
      this.characterGroup.add(torso);

      this.headGroup = new THREE.Group();
      this.headGroup.position.set(0, 1.7, 0);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.45, 0.42), skinMat);
      this.headGroup.add(head);
      this.characterGroup.add(this.headGroup);

      this.leftArmPivot = this.createPivot(-0.45, 1.4, jacketMat);
      this.rightArmPivot = this.createPivot(0.45, 1.4, jacketMat);
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

  update(delta, gameSpeed) {
    const gaitSpeed = (gameSpeed / 12) * 12;
    this.animTime += delta * gaitSpeed;

    // Snappy Snapping Lerp for Mobile Touch Latency (0.35 factor)
    this.position.x = THREE.MathUtils.lerp(this.position.x, this.targetX, 0.35);

    // Smooth Bank Angle Lean during Lane Change
    const laneShiftDelta = (this.targetX - this.position.x);
    this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, -laneShiftDelta * 0.18, 0.22);
    this.mesh.rotation.y = THREE.MathUtils.lerp(this.mesh.rotation.y, laneShiftDelta * 0.1, 0.22);

    if (this.isRocketFlying) {
      this.position.y = THREE.MathUtils.lerp(this.position.y, this.rocketTargetY, 0.12);
      this.isGrounded = false;
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
      if (this.slideTimer <= 0) this.isSliding = false;
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
      this.coreReactor.scale.setScalar(1.0 + Math.sin(this.animTime * 4) * 0.25);
    }

    if (this.isRocketFlying) {
      this.characterGroup.rotation.x = -0.18;
      this.leftArmPivot.rotation.x = -Math.PI / 4;
      this.rightArmPivot.rotation.x = -Math.PI / 4;
      return;
    }

    if (this.isSliding) {
      this.characterGroup.position.y = -0.42;
      this.characterGroup.rotation.x = -Math.PI / 3;
      this.leftArmPivot.rotation.x = -Math.PI / 2;
      this.rightArmPivot.rotation.x = -Math.PI / 2;
      this.leftLegPivot.rotation.x = Math.PI / 4;
      this.rightLegPivot.rotation.x = Math.PI / 4;
    } else if (this.isJumping) {
      this.characterGroup.position.y = 0;
      this.characterGroup.rotation.x = THREE.MathUtils.clamp(-this.velocity.y * 0.035, -0.45, 0.45);
      this.leftArmPivot.rotation.x = -Math.PI / 2;
      this.rightArmPivot.rotation.x = -Math.PI / 2;
      this.leftLegPivot.rotation.x = -0.5;
      this.rightLegPivot.rotation.x = 0.5;
    } else {
      const bob = Math.abs(Math.sin(this.animTime * 2)) * 0.08;
      this.characterGroup.position.y = bob;
      this.characterGroup.rotation.x = 0.06;

      const swing = Math.sin(this.animTime) * 0.85;
      this.leftArmPivot.rotation.x = swing;
      this.rightArmPivot.rotation.x = -swing;
      this.leftLegPivot.rotation.x = -swing;
      this.rightLegPivot.rotation.x = swing;

      if (this.ponytail) this.ponytail.rotation.z = Math.sin(this.animTime) * 0.15;
      if (this.tail) this.tail.rotation.y = Math.sin(this.animTime * 2) * 0.3;
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
    this.isRocketFlying = false;
    this.rocketBoard.visible = false;
    this.compressionScale = 1.0;
    if (this.landingParticles) this.landingParticles.visible = false;
  }
}
