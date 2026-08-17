// ScoreManager.js - Score, High Score Storage & Stats Tracking

export class ScoreManager {
  constructor() {
    this.score = 0;
    this.distance = 0; // meters
    this.coins = 0;
    this.highScore = this.loadHighScore();
    this.bestDistance = this.loadBestDistance();
  }

  get coinsCollected() {
    return this.coins;
  }

  update(delta, gameSpeed, isDoubleScore = false) {
    const distThisFrame = gameSpeed * delta;
    this.addDistance(distThisFrame, isDoubleScore);
  }

  loadHighScore() {
    return parseInt(localStorage.getItem('NEXORA_HIGH_SCORE') || '0', 10);
  }

  loadBestDistance() {
    return parseInt(localStorage.getItem('NEXORA_BEST_DISTANCE') || '0', 10);
  }

  saveHighScore() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('NEXORA_HIGH_SCORE', this.highScore.toString());
      return true; // New High Score Record!
    }
    return false;
  }

  saveBestDistance() {
    if (this.distance > this.bestDistance) {
      this.bestDistance = this.distance;
      localStorage.setItem('NEXORA_BEST_DISTANCE', this.bestDistance.toString());
    }
  }

  addDistance(distMeters, isDoubleScore = false) {
    this.distance += distMeters;
    const multiplier = isDoubleScore ? 2 : 1;
    this.score += Math.floor(distMeters * 10 * multiplier);
  }

  addCoins(count = 1, isDoubleScore = false) {
    this.coins += count;
    const multiplier = isDoubleScore ? 2 : 1;
    this.score += 50 * count * multiplier;
  }

  reset() {
    this.score = 0;
    this.distance = 0;
    this.coins = 0;
  }
}
