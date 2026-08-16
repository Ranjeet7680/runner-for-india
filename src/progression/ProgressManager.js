// ProgressManager.js - Character Roster, Revive Tokens & Saved Stats
export class ProgressManager {
  constructor() {
    this.totalCoins = parseInt(localStorage.getItem('nexora_coins') || '0', 10);
    this.highScore = parseInt(localStorage.getItem('nexora_highscore') || '0', 10);
    this.bestDistance = parseInt(localStorage.getItem('nexora_bestdist') || '0', 10);

    this.selectedCharacter = localStorage.getItem('nexora_char') || 'BOY';
    this.selectedMap = localStorage.getItem('nexora_map') || 'NIGHT_METRO';

    try {
      const savedChars = localStorage.getItem('nexora_unlocked_chars');
      this.unlockedCharacters = savedChars ? JSON.parse(savedChars) : ['BOY'];
    } catch (e) {
      this.unlockedCharacters = ['BOY'];
    }

    try {
      const savedMaps = localStorage.getItem('nexora_unlocked_maps');
      this.unlockedMaps = savedMaps ? JSON.parse(savedMaps) : ['NIGHT_METRO', 'DAY_METRO', 'DYNAMIC_DAY_NIGHT', 'MUMBAI_METRO', 'CHENNAI_METRO', 'DHANBAD_RAIL'];
    } catch (e) {
      this.unlockedMaps = ['NIGHT_METRO', 'DAY_METRO', 'DYNAMIC_DAY_NIGHT', 'MUMBAI_METRO', 'CHENNAI_METRO', 'DHANBAD_RAIL'];
    }

    this.level = parseInt(localStorage.getItem('nexora_lvl') || '1', 10);
    this.xp = parseInt(localStorage.getItem('nexora_xp') || '0', 10);
    this.xpToNextLevel = this.level * 500;

    this.reviveTokens = parseInt(localStorage.getItem('nexora_revive_tokens') || '3', 10);

    this.loginStreak = parseInt(localStorage.getItem('nexora_streak') || '1', 10);
    this.lastLoginDate = localStorage.getItem('nexora_last_login') || '';
    this.loginClaimedToday = this.checkClaimedToday();
  }

  checkClaimedToday() {
    const today = new Date().toDateString();
    return this.lastLoginDate === today;
  }

  save() {
    try {
      localStorage.setItem('nexora_coins', this.totalCoins.toString());
      localStorage.setItem('nexora_highscore', this.highScore.toString());
      localStorage.setItem('nexora_bestdist', this.bestDistance.toString());
      localStorage.setItem('nexora_char', this.selectedCharacter);
      localStorage.setItem('nexora_map', this.selectedMap);
      localStorage.setItem('nexora_unlocked_chars', JSON.stringify(this.unlockedCharacters));
      localStorage.setItem('nexora_unlocked_maps', JSON.stringify(this.unlockedMaps));
      localStorage.setItem('nexora_lvl', this.level.toString());
      localStorage.setItem('nexora_xp', this.xp.toString());
      localStorage.setItem('nexora_revive_tokens', this.reviveTokens.toString());
      localStorage.setItem('nexora_streak', this.loginStreak.toString());
      localStorage.setItem('nexora_last_login', this.lastLoginDate);
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }

  addCoins(amount) {
    this.totalCoins += amount;
    this.save();
  }

  updateHighScore(score) {
    if (score > this.highScore) {
      this.highScore = score;
      this.save();
      return true;
    }
    return false;
  }

  useReviveToken() {
    if (this.reviveTokens > 0) {
      this.reviveTokens--;
      this.save();
      return true;
    }
    return false;
  }

  addReviveToken(count = 1) {
    this.reviveTokens += count;
    this.save();
  }

  addXP(amount) {
    this.addXp(amount);
  }

  addXp(amount) {
    this.xp += amount;
    while (this.xp >= this.xpToNextLevel) {
      this.xp -= this.xpToNextLevel;
      this.level++;
      this.xpToNextLevel = this.level * 500;
      this.addReviveToken(1);
    }
    this.save();
  }

  unlockCharacter(charId, cost) {
    if (this.totalCoins >= cost && !this.unlockedCharacters.includes(charId)) {
      this.totalCoins -= cost;
      this.unlockedCharacters.push(charId);
      this.save();
      return true;
    }
    return false;
  }

  claimDailyReward() {
    if (this.loginClaimedToday) return null;
    const today = new Date().toDateString();
    this.lastLoginDate = today;
    this.loginClaimedToday = true;

    let reward = { coins: 0, tokens: 0 };
    switch (this.loginStreak) {
      case 1: reward.coins = 100; break;
      case 2: reward.coins = 250; break;
      case 3: reward.tokens = 1; break;
      case 4: reward.coins = 500; break;
      case 5: reward.coins = 800; break;
      case 6: reward.coins = 1000; break;
      case 7: reward.coins = 2000; reward.tokens = 2; break;
    }

    this.addCoins(reward.coins);
    if (reward.tokens > 0) this.addReviveToken(reward.tokens);
    this.loginStreak = (this.loginStreak % 7) + 1;
    this.save();
    return reward;
  }
}

export const progressManager = new ProgressManager();
