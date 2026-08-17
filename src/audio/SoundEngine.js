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
    this.stopCustomSong();
    this.currentTrack = trackKey;
    if (this.musicPlaying) {
      this.stopMusic();
      this.startMusic();
    }
  }

  playCustomSongUrl(url) {
    if (!url) return;
    this.stopMusic();
    this.stopLobbyMusic();

    if (this.customAudio) {
      this.customAudio.pause();
      this.customAudio = null;
    }

    try {
      this.customAudio = new Audio(url);
      this.customAudio.loop = true;
      this.customAudio.volume = this.volumes.music || 0.7;
      this.customAudio.play().then(() => {
        console.log('Custom song playing in loop:', url);
        this.isCustomSongActive = true;
      }).catch(err => {
        console.warn('Custom song playback error:', err);
      });
    } catch (e) {
      console.warn('Invalid custom audio URL:', e);
    }
  }

  stopCustomSong() {
    if (this.customAudio) {
      this.customAudio.pause();
      this.customAudio = null;
    }
    this.isCustomSongActive = false;
  }

  startMusic() {
    if (this.isCustomSongActive) return;
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
    if (this.isCustomSongActive) return;
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
    let step = 0;

    // Rich Cyberpunk / Synthwave Tracks
    const tracks = {
      CYBER_PUNK_SYNTH: {
        lead: [523.25, 659.25, 783.99, 1046.50, 783.99, 659.25, 587.33, 523.25], // C5-C6
        bass: [130.81, 130.81, 146.83, 164.81, 130.81, 130.81, 110.00, 123.47], // C3-A2
        tempo: 135
      },
      INDIAN_METRO_BEAT: {
        lead: [587.33, 659.25, 783.99, 880.00, 1046.50, 880.00, 783.99, 659.25],
        bass: [146.83, 146.83, 164.81, 196.00, 146.83, 146.83, 130.81, 146.83],
        tempo: 145
      },
      CID_MYSTERY_THEME: {
        lead: [440.00, 493.88, 523.25, 587.33, 659.25, 523.25, 493.88, 440.00],
        bass: [110.00, 110.00, 123.47, 130.81, 110.00, 110.00, 98.00, 110.00],
        tempo: 140
      },
      SPEED_RUNNER_EDM: {
        lead: [659.25, 783.99, 880.00, 1046.50, 1174.66, 1046.50, 880.00, 783.99],
        bass: [164.81, 164.81, 196.00, 220.00, 164.81, 164.81, 146.83, 164.81],
        tempo: 125
      }
    };

    this.musicTimer = setInterval(() => {
      if (!this.musicPlaying || this.isMuted || !this.ctx) return;
      this.ensureContext();

      const trk = tracks[this.currentTrack] || tracks.CYBER_PUNK_SYNTH;
      const idx = step % trk.lead.length;

      // 1. Lead Melody Synthesizer
      const leadOsc = this.ctx.createOscillator();
      const leadGain = this.ctx.createGain();
      leadOsc.type = 'sawtooth';
      leadOsc.frequency.setValueAtTime(trk.lead[idx], this.ctx.currentTime);

      leadGain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      leadGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);

      leadOsc.connect(leadGain);
      leadGain.connect(this.gainNodes.music || this.masterGain);

      leadOsc.start();
      leadOsc.stop(this.ctx.currentTime + 0.18);

      // 2. Sub-Bass Pulse (every 2 steps)
      if (step % 2 === 0) {
        const bassOsc = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        bassOsc.type = 'square';
        bassOsc.frequency.setValueAtTime(trk.bass[idx], this.ctx.currentTime);

        bassGain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        bassGain.gain.exponentialRampToValueAtTime(0.005, this.ctx.currentTime + 0.25);

        bassOsc.connect(bassGain);
        bassGain.connect(this.gainNodes.music || this.masterGain);

        bassOsc.start();
        bassOsc.stop(this.ctx.currentTime + 0.25);
      }

      // 3. Electronic Hi-Hat Rhythm Click
      const noiseGain = this.ctx.createGain();
      const noiseOsc = this.ctx.createOscillator();
      noiseOsc.type = 'triangle';
      noiseOsc.frequency.setValueAtTime(step % 4 === 0 ? 3500 : 7000, this.ctx.currentTime);
      noiseGain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      noiseOsc.connect(noiseGain);
      noiseGain.connect(this.gainNodes.music || this.masterGain);
      noiseOsc.start();
      noiseOsc.stop(this.ctx.currentTime + 0.04);

      step++;
    }, tracks[this.currentTrack]?.tempo || 135);
  }

  playSpatialTrainHorn(xPos, zPos) {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();

    const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
    if (panner) {
      const panVal = Math.max(-1, Math.min(1, xPos / 5.0));
      panner.pan.setValueAtTime(panVal, this.ctx.currentTime);
    }

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';

    osc1.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc2.frequency.setValueAtTime(277.18, this.ctx.currentTime); // Dual tone chord (A3 + C#4)

    osc1.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.65);
    osc2.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.65);

    gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.65);

    if (panner) {
      osc1.connect(panner);
      osc2.connect(panner);
      panner.connect(this.gainNodes.train || this.masterGain);
    } else {
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.gainNodes.train || this.masterGain);
    }

    osc1.start(); osc2.start();
    osc1.stop(this.ctx.currentTime + 0.65);
    osc2.stop(this.ctx.currentTime + 0.65);
  }

  playJump() {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(520, this.ctx.currentTime + 0.16);

    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.16);

    osc.connect(gain);
    gain.connect(this.gainNodes.sfx || this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.16);
  }

  playSlide() {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.16);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.16);

    osc.connect(gain);
    gain.connect(this.gainNodes.sfx || this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.16);
  }

  playCoin() {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();
    const now = Date.now();
    if (now - (this.lastCoinTime || 0) < 500) {
      this.coinStreak = Math.min((this.coinStreak || 0) + 1, 8);
    } else {
      this.coinStreak = 0;
    }
    this.lastCoinTime = now;

    const pitchMult = 1.0 + (this.coinStreak * 0.08);

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'sine';

    osc1.frequency.setValueAtTime(987.77 * pitchMult, this.ctx.currentTime);
    osc2.frequency.setValueAtTime(1318.51 * pitchMult, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.18);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.gainNodes.sfx || this.masterGain);

    osc1.start(); osc2.start();
    osc1.stop(this.ctx.currentTime + 0.18);
    osc2.stop(this.ctx.currentTime + 0.18);
  }

  playPowerup() {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5 -> E5 -> G5 -> C6 Arpeggio
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.06 + 0.15);

      osc.connect(gain);
      gain.connect(this.gainNodes.sfx || this.masterGain);

      osc.start(this.ctx.currentTime + idx * 0.06);
      osc.stop(this.ctx.currentTime + idx * 0.06 + 0.15);
    });
  }

  playCrash() {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(25, this.ctx.currentTime + 0.4);

    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.42);

    osc.connect(gain);
    gain.connect(this.gainNodes.sfx || this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.42);
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
