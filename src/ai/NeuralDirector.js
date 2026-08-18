// NeuralDirector.js - Real-Time Neural Adaptive AI Game Director & Dynamic Tactical Commentary
import { voiceSystem } from '../audio/VoiceSystem.js';

export class NeuralDirector {
  constructor(game) {
    this.game = game;
    this.playerSkillRating = 75; // 0% to 100%
    this.reactionTime = 0.2; // seconds
    this.nearMisses = 0;
    this.coinsCollectedInWindow = 0;
    this.commentaryTimer = 0;
    this.evaluationTimer = 0;
    this.aiAdviceList = [
      "🤖 AI DIRECTOR: High-Speed Train Rake Ahead! Vault the Ramp!",
      "🤖 AI NEURAL ENGINE: Skill Rating 95%! Speed Multiplier Boosted!",
      "🤖 AI TACTICAL ADVISOR: Instant Electric Laser Hazard Ahead!",
      "🤖 AI COMPANION: Trigger ⚡ ABILITY to Magnetize Coins!",
      "🤖 AI INTELLIGENCE: Optimal Path Detected - Switch to Left Rail!",
      "🤖 AI DIRECTOR: 10s Rocket Boost Active! Enjoy Aerial Flight!"
    ];
  }

  recordNearMiss() {
    this.nearMisses++;
    this.playerSkillRating = Math.min(100, this.playerSkillRating + 3);
  }

  recordCoinPickup() {
    this.coinsCollectedInWindow++;
  }

  update(delta, distance, speed) {
    this.evaluationTimer += delta;
    this.commentaryTimer += delta;

    // Evaluate Neural Skill Metrics every 8 seconds
    if (this.evaluationTimer > 8.0) {
      this.evaluationTimer = 0;
      
      const coinsPerSec = this.coinsCollectedInWindow / 8.0;
      if (coinsPerSec > 2.5) {
        this.playerSkillRating = Math.min(100, this.playerSkillRating + 4);
      } else if (coinsPerSec < 0.5 && this.playerSkillRating > 40) {
        this.playerSkillRating = Math.max(30, this.playerSkillRating - 3);
      }
      this.coinsCollectedInWindow = 0;
    }

    // Trigger Dynamic AI Voice Commentary & HUD Toast Advice every 18 seconds
    if (this.commentaryTimer > 18.0 && this.game.state === 'PLAYING') {
      this.commentaryTimer = 0;
      this.triggerAiAdvice();
    }
  }

  triggerAiAdvice() {
    const idx = Math.floor(Math.random() * this.aiAdviceList.length);
    const msg = this.aiAdviceList[idx];
    if (this.game && this.game.uiManager) {
      this.game.uiManager.showToast(msg, '🤖', 4000);
    }
    
    // CID Detective Voice AI Callout
    if (Math.random() > 0.5) {
      voiceSystem.speak('TRAIN_APPROACHING');
    }
  }

  getDynamicSpeedFactor() {
    // Dynamic difficulty scaling based on AI skill rating
    return 1.0 + ((this.playerSkillRating - 50) / 200.0);
  }

  reset() {
    this.playerSkillRating = 75;
    this.nearMisses = 0;
    this.coinsCollectedInWindow = 0;
    this.commentaryTimer = 0;
    this.evaluationTimer = 0;
  }
}
