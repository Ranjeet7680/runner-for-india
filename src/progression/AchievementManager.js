// AchievementManager.js - Realtime In-Game Achievement Unlocks & Toast Triggers
import { progressManager } from './ProgressManager.js';
import { soundEngine } from '../audio/SoundEngine.js';

export class AchievementManager {
  constructor() {
    this.achievements = [
      { id: 'first_run', title: 'FIRST METRO RUN', desc: 'Complete your first metro track run', icon: '🏃', unlocked: false },
      { id: 'coin_100', title: 'COIN COLLECTOR', desc: 'Collect 100 total coins', icon: '🪙', unlocked: false },
      { id: 'jump_50', title: 'AIRBORNE JUMPER', desc: 'Perform 50 jumps over track barriers', icon: '👟', unlocked: false },
      { id: 'dist_1k', title: 'KM MILESTONE', desc: 'Run 1,000 meters in a single run', icon: '🚉', unlocked: false },
      { id: 'char_unlock', title: 'ROSTER EXPANDER', desc: 'Unlock any new playable character', icon: '🎭', unlocked: false },
      { id: 'high_flyer', title: 'JETPACK BOOST', desc: 'Activate Rocket Boost sky flight', icon: '🚀', unlocked: false }
    ];

    this.stats = {
      jumps: parseInt(localStorage.getItem('nexora_stat_jumps') || '0', 10),
    };

    this.loadUnlocked();
  }

  loadUnlocked() {
    const saved = localStorage.getItem('nexora_achievements');
    if (saved) {
      const unlockedIds = JSON.parse(saved);
      this.achievements.forEach(a => {
        if (unlockedIds.includes(a.id)) a.unlocked = true;
      });
    }
  }

  save() {
    const unlockedIds = this.achievements.filter(a => a.unlocked).map(a => a.id);
    localStorage.setItem('nexora_achievements', JSON.stringify(unlockedIds));
    localStorage.setItem('nexora_stat_jumps', this.stats.jumps.toString());
  }

  addJump() {
    this.stats.jumps++;
    if (this.stats.jumps >= 50) this.unlock('jump_50');
    this.save();
  }

  checkStats() {
    if (progressManager.totalCoins >= 100) this.unlock('coin_100');
    if (progressManager.bestDistance >= 1000) this.unlock('dist_1k');
    if (progressManager.unlockedCharacters.length > 1) this.unlock('char_unlock');
    this.unlock('first_run');
  }

  unlock(id) {
    const ach = this.achievements.find(a => a.id === id);
    if (ach && !ach.unlocked) {
      ach.unlocked = true;
      this.save();
      soundEngine.playPowerup();
      if (window.uiManager && typeof window.uiManager.showAchievementToast === 'function') {
        window.uiManager.showAchievementToast(ach);
      }
    }
  }
}

export const achievementManager = new AchievementManager();
