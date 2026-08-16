// SoundEngine.js - Web Audio Synthesizer, 3D Spatial Audio & Granular Volume Sliders

export class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;

    // Granular Volume Levels (0.0 to 1.0)
    this.volumes = {
      master: 0.9,
      music: 0.4,
      train: 0.7,
      voice: 0.9,
      sfx: 0.6,
      ambience: 0.3
    };

    // Gain Nodes
    this.masterGain = null;
    this.musicGain = null;
    this.trainGain = null;
    this.sfxGain = null;
    this.ambienceGain = null;

    this.isPlayingMusic = false;
    this.musicInterval = null;
    this.stepCount = 0;
  }

  init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    this.ctx = new AudioCtx();

    // Master node
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = this.volumes.master;
    this.masterGain.connect(this.ctx.destination);

    // Sub-gain nodes
    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = this.volumes.music;
    this.musicGain.connect(this.masterGain);

    this.trainGain = this.ctx.createGain();
    this.trainGain.gain.value = this.volumes.train;
    this.trainGain.connect(this.masterGain);

    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = this.volumes.sfx;
    this.sfxGain.connect(this.masterGain);

    this.ambienceGain = this.ctx.createGain();
    this.ambienceGain.gain.value = this.volumes.ambience;
    this.ambienceGain.connect(this.masterGain);

    this.startAmbience();
  }

  resumeCtx() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(category, val) {
    this.volumes[category] = val;
    if (!this.ctx) return;

    if (category === 'master' && this.masterGain) this.masterGain.gain.value = val;
    else if (category === 'music' && this.musicGain) this.musicGain.gain.value = val;
    else if (category === 'train' && this.trainGain) this.trainGain.gain.value = val;
    else if (category === 'sfx' && this.sfxGain) this.sfxGain.gain.value = val;
    else if (category === 'ambience' && this.ambienceGain) this.ambienceGain.gain.value = val;
  }

  toggleMute(muted) {
    this.isMuted = muted;
    if (this.masterGain) {
      this.masterGain.gain.value = muted ? 0 : this.volumes.master;
    }
  }

  // --- 3D SPATIAL TRAIN AUDIO ---

  playSpatialTrainHorn(xPos, zPos) {
    if (this.isMuted || !this.ctx) return;
    this.resumeCtx();

    // Create 3D Stereo Panner Node
    let panner;
    if (this.ctx.createStereoPanner) {
      panner = this.ctx.createStereoPanner();
      // Map X pos (-2.5 to 2.5) to Pan (-0.8 to 0.8)
      panner.pan.setValueAtTime(xPos / 3.0, this.ctx.currentTime);
    } else {
      panner = this.ctx.createGain();
    }

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';

    osc1.frequency.setValueAtTime(293.66, this.ctx.currentTime); // D4
    osc2.frequency.setValueAtTime(349.23, this.ctx.currentTime); // F4

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.6);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(panner);
    panner.connect(this.trainGain);

    osc1.start();
    osc2.start();
    osc1.stop(this.ctx.currentTime + 0.6);
    osc2.stop(this.ctx.currentTime + 0.6);
  }

  // --- SOUND EFFECTS ---

  playJump() {
    if (this.isMuted || !this.ctx) return;
    this.resumeCtx();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(450, this.ctx.currentTime + 0.18);
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  playSlide() {
    if (this.isMuted || !this.ctx) return;
    this.resumeCtx();
    const bufferSize = this.ctx.sampleRate * 0.15;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, this.ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(300, this.ctx.currentTime + 0.15);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    noise.start();
  }

  playCoin() {
    if (this.isMuted || !this.ctx) return;
    this.resumeCtx();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(987.77, this.ctx.currentTime);
    osc.frequency.setValueAtTime(1318.51, this.ctx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.18);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }

  playPowerup() {
    if (this.isMuted || !this.ctx) return;
    this.resumeCtx();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.05);
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.05 + 0.15);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(this.ctx.currentTime + idx * 0.05);
      osc.stop(this.ctx.currentTime + idx * 0.05 + 0.15);
    });
  }

  playCrash() {
    if (this.isMuted || !this.ctx) return;
    this.resumeCtx();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.8, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  }

  playCountdown(number) {
    if (this.isMuted || !this.ctx) return;
    this.resumeCtx();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    const freq = number === 0 ? 880 : 440;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + (number === 0 ? 0.35 : 0.2));
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(this.ctx.currentTime + (number === 0 ? 0.35 : 0.2));
  }

  playClick() {
    if (this.isMuted || !this.ctx) return;
    this.resumeCtx();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  // Continuous Subtle Ambience
  startAmbience() {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(55, this.ctx.currentTime); // Low hum
    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    osc.connect(gain);
    gain.connect(this.ambienceGain);
    osc.start();
  }

  // --- BACKGROUND SYNTHWAVE MUSIC ---
  startMusic() {
    if (this.isPlayingMusic) return;
    this.init();
    this.resumeCtx();
    this.isPlayingMusic = true;

    const bassScale = [110, 110, 130.81, 146.83, 110, 110, 98.00, 110];
    const leadScale = [440, 523.25, 659.25, 587.33, 659.25, 783.99, 659.25, 523.25];

    this.musicInterval = setInterval(() => {
      if (!this.isPlayingMusic || !this.ctx || this.isMuted) return;

      const step = this.stepCount % 16;
      const bassNote = bassScale[step % 8];

      if (step % 4 === 0) {
        const kickOsc = this.ctx.createOscillator();
        const kickGain = this.ctx.createGain();
        kickOsc.frequency.setValueAtTime(140, this.ctx.currentTime);
        kickOsc.frequency.exponentialRampToValueAtTime(35, this.ctx.currentTime + 0.08);
        kickGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
        kickGain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
        kickOsc.connect(kickGain);
        kickGain.connect(this.musicGain);
        kickOsc.start();
        kickOsc.stop(this.ctx.currentTime + 0.08);
      }

      const bassOsc = this.ctx.createOscillator();
      const bassGain = this.ctx.createGain();
      bassOsc.type = 'sawtooth';
      bassOsc.frequency.setValueAtTime(bassNote / 2, this.ctx.currentTime);
      bassGain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      bassGain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
      bassOsc.connect(bassGain);
      bassGain.connect(this.musicGain);
      bassOsc.start();
      bassOsc.stop(this.ctx.currentTime + 0.1);

      if (step % 2 === 0 && Math.random() > 0.2) {
        const leadOsc = this.ctx.createOscillator();
        const leadGain = this.ctx.createGain();
        leadOsc.type = 'sine';
        leadOsc.frequency.setValueAtTime(leadScale[(step / 2) % 8], this.ctx.currentTime);
        leadGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        leadGain.gain.exponentialRampToValueAtTime(0.005, this.ctx.currentTime + 0.15);
        leadOsc.connect(leadGain);
        leadGain.connect(this.musicGain);
        leadOsc.start();
        leadOsc.stop(this.ctx.currentTime + 0.15);
      }

      this.stepCount++;
    }, 125);
  }

  stopMusic() {
    this.isPlayingMusic = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }
}

export const soundEngine = new SoundEngine();
