// PoliceNPCManager.js - Fictional Indian Metro City Police NPCs
import * as THREE from 'three';

export class PoliceNPCManager {
  constructor(scene) {
    this.scene = scene;
    this.policeUnits = [];

    // Shared Geometries & Materials
    this.headGeo = new THREE.BoxGeometry(0.38, 0.4, 0.38);
    this.capGeo = new THREE.BoxGeometry(0.42, 0.15, 0.46);
    this.bodyGeo = new THREE.BoxGeometry(0.65, 0.75, 0.38);
    this.armGeo = new THREE.BoxGeometry(0.18, 0.65, 0.18);
    this.legGeo = new THREE.BoxGeometry(0.22, 0.7, 0.22);

    this.skinMat = new THREE.MeshStandardMaterial({ color: 0xc89668, roughness: 0.6 });
    this.uniformMat = new THREE.MeshStandardMaterial({ color: 0x14203a, roughness: 0.5 }); // Dark navy police uniform
    this.vestMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 }); // Reflective yellow safety vest
    this.pantsMat = new THREE.MeshStandardMaterial({ color: 0x0c1424, roughness: 0.7 });
    this.capMat = new THREE.MeshStandardMaterial({ color: 0x14203a, roughness: 0.4 });
    this.badgeMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
  }

  spawnPolice(x, z, type = 'STANDING') {
    const policeGroup = new THREE.Group();
    policeGroup.position.set(x, 0, z);

    // Torso / Uniform
    const torso = new THREE.Mesh(this.bodyGeo, this.uniformMat);
    torso.position.y = 1.05;
    torso.castShadow = true;
    policeGroup.add(torso);

    // Reflective Safety Vest
    const vestGeo = new THREE.BoxGeometry(0.67, 0.5, 0.4);
    const vest = new THREE.Mesh(vestGeo, this.vestMat);
    vest.position.y = 1.1;
    policeGroup.add(vest);

    // Badge
    const badgeGeo = new THREE.BoxGeometry(0.12, 0.15, 0.42);
    const badge = new THREE.Mesh(badgeGeo, this.badgeMat);
    badge.position.set(0.18, 1.15, 0);
    policeGroup.add(badge);

    // Head & Police Cap
    const head = new THREE.Mesh(this.headGeo, this.skinMat);
    head.position.y = 1.6;
    policeGroup.add(head);

    const cap = new THREE.Mesh(this.capGeo, this.capMat);
    cap.position.set(0, 1.82, 0.04);
    policeGroup.add(cap);

    // Visor Peak
    const visorGeo = new THREE.BoxGeometry(0.42, 0.04, 0.18);
    const visor = new THREE.Mesh(visorGeo, this.capMat);
    visor.position.set(0, 1.76, 0.24);
    policeGroup.add(visor);

    // Arms
    const leftArmPivot = new THREE.Group();
    leftArmPivot.position.set(-0.42, 1.35, 0);
    const leftArm = new THREE.Mesh(this.armGeo, this.uniformMat);
    leftArm.position.y = -0.3;
    leftArmPivot.add(leftArm);
    policeGroup.add(leftArmPivot);

    const rightArmPivot = new THREE.Group();
    rightArmPivot.position.set(0.42, 1.35, 0);
    const rightArm = new THREE.Mesh(this.armGeo, this.uniformMat);
    rightArm.position.y = -0.3;
    rightArmPivot.add(rightArm);
    policeGroup.add(rightArmPivot);

    // Legs
    const leftLeg = new THREE.Mesh(this.legGeo, this.pantsMat);
    leftLeg.position.set(-0.18, 0.35, 0);
    policeGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(this.legGeo, this.pantsMat);
    rightLeg.position.set(0.18, 0.35, 0);
    policeGroup.add(rightLeg);

    const unit = {
      mesh: policeGroup,
      leftArmPivot: leftArmPivot,
      rightArmPivot: rightArmPivot,
      type: type,
      animTimer: Math.random() * 10
    };

    this.scene.add(policeGroup);
    this.policeUnits.push(unit);
    return unit;
  }

  update(playerPos, delta) {
    for (let i = this.policeUnits.length - 1; i >= 0; i--) {
      const p = this.policeUnits[i];
      p.animTimer += delta * 3;

      if (p.type === 'DIRECTING_TRAFFIC') {
        // Directing traffic arm signal animation
        p.leftArmPivot.rotation.z = Math.PI / 3 + Math.sin(p.animTimer) * 0.3;
        p.rightArmPivot.rotation.x = Math.sin(p.animTimer * 2) * 0.5;
      } else if (p.type === 'WALKING') {
        // Pacing along station platform
        p.mesh.position.z += Math.sin(p.animTimer * 0.5) * 0.05;
        p.leftArmPivot.rotation.x = Math.sin(p.animTimer) * 0.4;
        p.rightArmPivot.rotation.x = -Math.sin(p.animTimer) * 0.4;
      } else {
        // Standing guard idle bobbing
        p.mesh.position.y = Math.sin(p.animTimer * 0.5) * 0.03;
      }

      // Recycle if far behind player
      if (p.mesh.position.z < playerPos.z - 25) {
        this.scene.remove(p.mesh);
        this.policeUnits.splice(i, 1);
      }
    }
  }

  reset() {
    this.policeUnits.forEach(p => this.scene.remove(p.mesh));
    this.policeUnits = [];
  }
}
