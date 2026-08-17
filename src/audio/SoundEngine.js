// SoundEngine.js - Procedural Web Audio Synthesizer, 4 Music Tracks & 3D Spatial Panning
export class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.musicPlaying = false;
    this.currentTrack = 'CYBER_PUNK_SYNTH';

    // Volume Gain Categories
    this.volumes = {
      master: 0.8,
      music: 0.7,
      train: 0.8,
      voice: 1.0,
      sfx: 0.8,
      ambience: 0.6
    };

    this.gainNodes = {};
    this.initAudioContext();
  }

  initAudioContext() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.volumes.master;
      this.masterGain.connect(this.ctx.destination);

      ['music', 'train', 'voice', 'sfx', 'ambience'].forEach(cat => {
        const gain = this.ctx.createGain();
        gain.gain.value = this.volumes[cat];
        gain.connect(this.masterGain);
        this.gainNodes[cat] = gain;
      });

      // Global user interaction handler to unlock Web Audio on modern browsers
      const unlockAudio = () => {
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume().then(() => console.log('Web AudioContext unlocked successfully.'));
        }
      };

      ['pointerdown', 'touchstart', 'keydown', 'click'].forEach(evt => {
        window.addEventListener(evt, unlockAudio, { passive: true, once: false });
      });
    }
  }

  ensureContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(category, val) {
    this.volumes[category] = val;
    if (category === 'master' && this.masterGain) {
      this.masterGain.gain.value = val;
    } else if (this.gainNodes[category]) {
      this.gainNodes[category].gain.value = val;
    }
  }

  toggleMute(muted) {
    this.isMuted = muted;
    if (this.masterGain) {
      this.masterGain.gain.value = muted ? 0 : this.volumes.master;
    }
  }

  setMusicTrack(trackKey) {
    this.currentTrack = trackKey;
    if (this.musicPlaying) {
      this.stopMusic();
      this.startMusic();
    }
  }

  startMusic() {
    if (this.isMuted || !this.ctx || this.musicPlaying) return;
    this.ensureContext();
    this.stopLobbyMusic();
    this.musicPlaying = true;
    this.playMusicLoop();
  }

  stopMusic() {
    this.musicPlaying = false;
    if (this.musicTimer) clearInterval(this.musicTimer);
  }

  startLobbyMusic() {
    if (this.isMuted || !this.ctx || this.lobbyPlaying) return;
    this.ensureContext();
    this.stopMusic();
    this.lobbyPlaying = true;
    this.playLobbyLoop();
  }

  stopLobbyMusic() {
    this.lobbyPlaying = false;
    if (this.lobbyTimer) clearInterval(this.lobbyTimer);
  }

  playLobbyLoop() {
    let index = 0;
    const notes = [130.81, 164.81, 196.00, 261.63, 196.00, 164.81, 130.81, 110.00];
    this.lobbyTimer = setInterval(() => {
      if (!this.lobbyPlaying || this.isMuted || !this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const freq = notes[index % notes.length];
      index++;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(this.gainNodes.music || this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    }, 280);
  }

  playMusicLoop() {
    let noteIndex = 0;

    // 4 Distinct Music Track Note Sequences
    const tracks = {
      CYBER_PUNK_SYNTH: [130.81, 146.83, 164.81, 196.00, 220.00, 196.00, 164.81, 146.83], // Fast Synthwave C3-A3
      INDIAN_METRO_BEAT: [146.83, 164.81, 196.00, 220.00, 261.63, 220.00, 196.00, 164.81], // Upbeat Raag Synth D3-C4
      CID_MYSTERY_THEME: [110.00, 123.47, 130.81, 146.83, 164.81, 130.81, 123.47, 110.00], // Suspense Bassline A2-E3
      SPEED_RUNNER_EDM: [164.81, 196.00, 220.00, 261.63, 293.66, 261.63, 220.00, 196.00]  // High Octane EDM E3-D4
    };

    const notes = tracks[this.currentTrack] || tracks.CYBER_PUNK_SYNTH;
    const tempo = this.currentTrack === 'SPEED_RUNNER_EDM' ? 140 : (this.currentTrack === 'INDIAN_METRO_BEAT' ? 180 : 160);

    this.musicTimer = setInterval(() => {
      if (!this.musicPlaying || this.isMuted) return;
      
      const freq = notes[noteIndex % notes.length];
      noteIndex++;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = this.currentTrack === 'INDIAN_METRO_BEAT' ? 'triangle' : (this.currentTrack === 'CID_MYSTERY_THEME' ? 'sawtooth' : 'sine');
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);

      osc.connect(gain);
      gain.connect(this.gainNodes.music || this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.23);
    }, tempo);
  }

  playSpatialTrainHorn(xPos, zPos) {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();

    const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
    if (panner) {
      const panVal = Math.max(-1, Math.min(1, xPos / 5.0));
      panner.pan.setValueAtTime(panVal, this.ctx.currentTime);
    }

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.6);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.65);

    if (panner) {
      osc.connect(panner);
      panner.connect(this.gainNodes.train || this.masterGain);
    } else {
      osc.connect(gain);
      gain.connect(this.gainNodes.train || this.masterGain);
    }

    osc.start();
    osc.stop(this.ctx.currentTime + 0.65);
  }

  playJump() {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(450, this.ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this.gainNodes.sfx || this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  playSlide() {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this.gainNodes.sfx || this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  playCoin() {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();
    const now = Date.now();
    if (now - (this.lastCoinTime || 0) < 500) {
      this.coinStreak = Math.min((this.coinStreak || 0) + 1, 6);
    } else {
      this.coinStreak = 0;
    }
    this.lastCoinTime = now;

    const pitchMult = 1.0 + (this.coinStreak * 0.08);

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(987.77 * pitchMult, this.ctx.currentTime);
    osc.frequency.setValueAtTime(1318.51 * pitchMult, this.ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.18);

    osc.connect(gain);
    gain.connect(this.gainNodes.sfx || this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }

  playPowerup() {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.32);

    osc.connect(gain);
    gain.connect(this.gainNodes.sfx || this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.32);
  }

  playCrash() {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(this.gainNodes.sfx || this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }

  playClick() {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.gainNodes.sfx || this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playCountdown(num) {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    const freq = num === 0 ? 880 : 440;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(this.gainNodes.sfx || this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
}

export const soundEngine = new SoundEngine();
