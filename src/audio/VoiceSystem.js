// VoiceSystem.js - CID Detective Dialogues & Multilingual Speech System
export class VoiceSystem {
  constructor() {
    this.enabled = true;
    this.mode = 'HINDI'; // 'HINDI', 'ENGLISH', 'HINDI_ENGLISH'
    this.synth = window.speechSynthesis || null;
    this.volume = 0.9;

    // Fictional CID Detective Lines
    this.lines = {
      HINDI: {
        START: 'Team ready hai. Track ko dhyan se observe karo.',
        POLICE: 'Rukiye! Aage railway track par danger hai.',
        DETECTIVE: 'Kuch suspicious movement hai. Evidence collect karo.',
        COIN: 'Coin mil gaya!',
        TRAIN: 'Savdhaan! Train aa rahi hai!',
        JUMP: 'Upar se niklo!',
        SLIDE: 'Neeche se nikal jao!',
        ROCKET: 'Rocket boost activate!',
        BUBBLE: 'Safety shield activate ho gaya.',
        DOUBLE: 'Ab har coin double milega!',
        MISSION: 'Shabash! Mission successfully complete.',
        MAP_UNLOCK: 'Naya city map unlock ho gaya!',
        GAMEOVER: 'Run khatam ho gaya. Dobara try karo.',
        RECORD: 'Wah! Naya high score!',
        LEVEL_UP: 'Excellent! Tumhara level badh gaya.',
        POLICE_INVESTIGATION: 'Team, area ko secure karo aur clues search karo.',
        MYSTERY_MISSION: 'Humein is mystery ka solution dhoondhna hai.',
        FINAL_MISSION: 'Nexora Team, ye sabse important mission hai. Ready?',
        CONTINUE: 'Ek aur chance lena hai?'
      },
      ENGLISH: {
        START: 'Team ready. Observe the track carefully.',
        POLICE: 'Halt! Danger ahead on the railway track.',
        DETECTIVE: 'Suspicious movement detected. Gather evidence.',
        COIN: 'Coin acquired!',
        TRAIN: 'Caution! Train approaching!',
        JUMP: 'Leap over!',
        SLIDE: 'Slide under!',
        ROCKET: 'Rocket boost activated!',
        BUBBLE: 'Safety shield deployed.',
        DOUBLE: 'Double coin multiplier active!',
        MISSION: 'Excellent! Mission successfully completed.',
        MAP_UNLOCK: 'New city map unlocked!',
        GAMEOVER: 'Run ended. Try again.',
        RECORD: 'Awesome! New high score!',
        LEVEL_UP: 'Level upgraded. Fantastic work.',
        POLICE_INVESTIGATION: 'Team, secure the perimeter and search for clues.',
        MYSTERY_MISSION: 'We must solve this mystery.',
        FINAL_MISSION: 'Nexora Team, this is the final mission. Ready?',
        CONTINUE: 'Use a revive token to continue?'
      }
    };

    this.hindiVoice = null;
    this.englishVoice = null;
    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;
    const load = () => {
      const voices = this.synth.getVoices();
      this.hindiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('HI')) || null;
      this.englishVoice = voices.find(v => v.lang.includes('en')) || null;
    };
    load();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = load;
    }
  }

  speak(key) {
    if (!this.enabled || !this.synth) return;

    let text = '';
    let useHindiVoice = false;

    if (this.mode === 'HINDI_ENGLISH') {
      text = this.lines.HINDI[key] || '';
      useHindiVoice = true;
    } else if (this.mode === 'ENGLISH') {
      text = this.lines.ENGLISH[key] || this.lines.HINDI[key] || '';
      useHindiVoice = false;
    } else {
      text = this.lines.HINDI[key] || '';
      useHindiVoice = true;
    }

    if (!text) return;

    setTimeout(() => {
      try {
        if (this.synth.speaking || this.synth.pending) {
          this.synth.cancel();
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.1;
        utterance.pitch = 1.05;
        utterance.volume = this.volume;

        if (useHindiVoice && this.hindiVoice) {
          utterance.voice = this.hindiVoice;
          utterance.lang = 'hi-IN';
        } else if (this.englishVoice) {
          utterance.voice = this.englishVoice;
          utterance.lang = 'en-US';
        }

        this.synth.speak(utterance);
      } catch (e) {
        console.warn('Voice synthesis error:', e);
      }
    }, 0);
  }

  setVolume(vol) {
    this.volume = vol;
  }

  setMode(mode) {
    this.mode = mode;
  }

  setEnabled(val) {
    this.enabled = val;
    if (!val && this.synth) this.synth.cancel();
  }
}

export const voiceSystem = new VoiceSystem();
