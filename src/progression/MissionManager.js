// MissionManager.js - Daily and Weekly Missions Tracker
import { progressManager } from './ProgressManager.js';
import { voiceSystem } from '../audio/VoiceSystem.js';
import { soundEngine } from '../audio/SoundEngine.js';

export class MissionManager {
  constructor() {
    this.dailyMissions = [
      { id: 'd_coins', desc: 'Collect 100 Coins', target: 100, current: 0, rewardCoins: 150, rewardXp: 200, claimed: false },
      { id: 'd_dist', desc: 'Run 1 KM in total', target: 1000, current: 0, rewardCoins: 200, rewardXp: 250, claimed: false },
      { id: 'd_jumps', desc: 'Jump 20 obstacles', target: 20, current: 0, rewardCoins: 100, rewardXp: 150, claimed: false },
      { id: 'd_trains', desc: 'Pass 30 trains safely', target: 30, current: 0, rewardCoins: 150, rewardXp: 200, claimed: false },
      { id: 'd_powerups', desc: 'Collect 3 Power-Ups', target: 3, current: 0, rewardCoins: 120, rewardXp: 180, claimed: false },
      { id: 'd_rocket', desc: 'Use Rocket Boost once', target: 1, current: 0, rewardCoins: 150, rewardXp: 200, claimed: false },
      { id: 'd_bubble', desc: 'Use Safety Bubble once', target: 1, current: 0, rewardCoins: 150, rewardXp: 200, claimed: false },
      { id: 'd_cleanrun', desc: 'Run 500m without collision', target: 500, current: 0, rewardCoins: 250, rewardXp: 300, claimed: false }
    ];

    this.weeklyMissions = [
      { id: 'w_dist', desc: 'Run 10 KM in total', target: 10000, current: 0, rewardCoins: 1000, rewardXp: 1500, claimed: false },
      { id: 'w_coins', desc: 'Collect 2,000 Coins', target: 2000, current: 0, rewardCoins: 800, rewardXp: 1200, claimed: false },
      { id: 'w_runs', desc: 'Complete 10 Metro Runs', target: 10, current: 0, rewardCoins: 500, rewardXp: 800, claimed: false },
      { id: 'w_unlock', desc: 'Unlock 1 new Character', target: 1, current: 0, rewardCoins: 1000, rewardXp: 1000, claimed: false },
      { id: 'w_maps', desc: 'Complete 5 Map Challenges', target: 5, current: 0, rewardCoins: 1200, rewardXp: 1500, claimed: false }
    ];

    this.load();
  }

  load() {
    try {
      const data = localStorage.getItem('NEXORA_MISSIONS_V2');
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.daily) {
          parsed.daily.forEach(saved => {
            const m = this.dailyMissions.find(d => d.id === saved.id);
            if (m) {
              m.current = saved.current || 0;
              m.claimed = saved.claimed || false;
            }
          });
        }
        if (parsed.weekly) {
          parsed.weekly.forEach(saved => {
            const m = this.weeklyMissions.find(w => w.id === saved.id);
            if (m) {
              m.current = saved.current || 0;
              m.claimed = saved.claimed || false;
            }
          });
        }
      }
    } catch (e) {
      console.warn('Failed to load missions data', e);
    }
  }

  save() {
    try {
      const data = {
        daily: this.dailyMissions.map(m => ({ id: m.id, current: m.current, claimed: m.claimed })),
        weekly: this.weeklyMissions.map(m => ({ id: m.id, current: m.current, claimed: m.claimed }))
      };
      localStorage.setItem('NEXORA_MISSIONS_V2', JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save missions data', e);
    }
  }

  updateProgress(type, value = 1) {
    const checkAndIncrement = (m) => {
      if (!m.claimed && m.current < m.target) {
        m.current = Math.min(m.target, m.current + value);
        if (m.current >= m.target) {
          voiceSystem.speak('MISSION');
        }
      }
    };

    if (type === 'coins') {
      const m1 = this.dailyMissions.find(m => m.id === 'd_coins');
      const w1 = this.weeklyMissions.find(m => m.id === 'w_coins');
      if (m1) checkAndIncrement(m1);
      if (w1) checkAndIncrement(w1);
    } else if (type === 'distance') {
      const m1 = this.dailyMissions.find(m => m.id === 'd_dist');
      const m2 = this.dailyMissions.find(m => m.id === 'd_cleanrun');
      const w1 = this.weeklyMissions.find(m => m.id === 'w_dist');
      if (m1) checkAndIncrement(m1);
      if (m2) checkAndIncrement(m2);
      if (w1) checkAndIncrement(w1);
    } else if (type === 'jump') {
      const m1 = this.dailyMissions.find(m => m.id === 'd_jumps');
      if (m1) checkAndIncrement(m1);
    } else if (type === 'train') {
      const m1 = this.dailyMissions.find(m => m.id === 'd_trains');
      if (m1) checkAndIncrement(m1);
    } else if (type === 'powerup') {
      const m1 = this.dailyMissions.find(m => m.id === 'd_powerups');
      if (m1) checkAndIncrement(m1);
    } else if (type === 'rocket') {
      const m1 = this.dailyMissions.find(m => m.id === 'd_rocket');
      if (m1) checkAndIncrement(m1);
    } else if (type === 'bubble') {
      const m1 = this.dailyMissions.find(m => m.id === 'd_bubble');
      if (m1) checkAndIncrement(m1);
    } else if (type === 'run_complete') {
      const w1 = this.weeklyMissions.find(m => m.id === 'w_runs');
      const w2 = this.weeklyMissions.find(m => m.id === 'w_maps');
      if (w1) checkAndIncrement(w1);
      if (w2) checkAndIncrement(w2);
    } else if (type === 'char_unlock') {
      const w1 = this.weeklyMissions.find(m => m.id === 'w_unlock');
      if (w1) checkAndIncrement(w1);
    }

    this.save();
  }

  claimMission(missionId) {
    const list = [...this.dailyMissions, ...this.weeklyMissions];
    const m = list.find(item => item.id === missionId);

    if (m && !m.claimed && m.current >= m.target) {
      m.claimed = true;
      progressManager.addCoins(m.rewardCoins);
      progressManager.addXp(m.rewardXp);
      soundEngine.playPowerup();
      this.save();
      return true;
    }
    return false;
  }
}

export const missionManager = new MissionManager();
