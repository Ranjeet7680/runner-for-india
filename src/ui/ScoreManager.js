import { progressManager } from '../progression/ProgressManager.js';

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
    return progressManager.highScore;
  }

  loadBestDistance() {
    return progressManager.bestDistance;
  }

  saveHighScore() {
    return progressManager.updateHighScore(Math.floor(this.score));
  }

  saveBestDistance() {
    if (this.distance > this.bestDistance) {
      this.bestDistance = Math.floor(this.distance);
      progressManager.bestDistance = this.bestDistance;
      progressManager.save();
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
