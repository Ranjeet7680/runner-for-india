// AchievementManager.js - Trophies & Achievement Badges
import { progressManager } from './ProgressManager.js';
import { soundEngine } from '../audio/SoundEngine.js';

export class AchievementManager {
  constructor() {
    this.achievements = [
      { id: 'first_run', title: 'FIRST RUN', desc: 'Complete your first metro run', icon: '🏃', unlocked: false },
      { id: 'coin_master', title: 'COIN MASTER', desc: 'Collect 1,000 coins in total', icon: '🪙', unlocked: false },
      { id: 'sky_runner', title: 'SKY RUNNER', desc: 'Fly with Rocket Boost', icon: '🚀', unlocked: false },
      { id: 'high_jumper', title: 'HIGH JUMPER', desc: 'Perform 100 jumps', icon: '👟', unlocked: false },
      { id: 'metro_master', title: 'METRO MASTER', desc: 'Complete 10 metro runs', icon: '🚇', unlocked: false },
      { id: 'city_explorer', title: 'CITY EXPLORER', desc: 'Unlock three city maps', icon: '🏙️', unlocked: false },
      { id: 'nexora_champion', title: 'NEXORA CHAMPION', desc: 'Reach Player Level 50', icon: '🏆', unlocked: false }
    ];

    this.jumpsCount = 0;
    this.runsCount = 0;
    this.load();
  }

  load() {
    try {
      const data = localStorage.getItem('NEXORA_ACHIEVEMENTS_V2');
      if (data) {
        const parsed = JSON.parse(data);
        this.jumpsCount = parsed.jumpsCount || 0;
        this.runsCount = parsed.runsCount || 0;
        if (parsed.unlocked) {
          parsed.unlocked.forEach(id => {
            const a = this.achievements.find(ach => ach.id === id);
            if (a) a.unlocked = true;
          });
        }
      }
    } catch (e) {
      console.warn('Failed to load achievements', e);
    }
  }

  save() {
    try {
      const data = {
        jumpsCount: this.jumpsCount,
        runsCount: this.runsCount,
        unlocked: this.achievements.filter(a => a.unlocked).map(a => a.id)
      };
      localStorage.setItem('NEXORA_ACHIEVEMENTS_V2', JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save achievements', e);
    }
  }

  trigger(id) {
    const a = this.achievements.find(ach => ach.id === id);
    if (a && !a.unlocked) {
      a.unlocked = true;
      progressManager.addXp(500);
      progressManager.addCoins(300);
      soundEngine.playPowerup();
      this.save();
    }
  }

  checkStats() {
    this.runsCount++;
    this.trigger('first_run');
    if (this.runsCount >= 10) this.trigger('metro_master');
    if (progressManager.totalCoins >= 1000) this.trigger('coin_master');
    if (progressManager.unlockedMaps.length >= 3) this.trigger('city_explorer');
    if (progressManager.level >= 50) this.trigger('nexora_champion');
    this.save();
  }

  addJump() {
    this.jumpsCount++;
    if (this.jumpsCount >= 100) this.trigger('high_jumper');
    this.save();
  }
}

export const achievementManager = new AchievementManager();
