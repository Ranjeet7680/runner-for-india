// Game.js - Single Animation Loop, Smooth Acceleration, Location Banners & Debug System
import * as THREE from 'three';
import { AppRenderer } from './Renderer.js';
import { CameraManager } from './CameraManager.js';
import { Player } from '../entities/Player.js';
import { TrackManager } from '../entities/TrackManager.js';
import { TrainManager } from '../entities/TrainManager.js';
import { ObstacleManager } from '../entities/ObstacleManager.js';
import { PowerUpManager } from '../entities/PowerUpManager.js';
import { CoinManager } from '../entities/CoinManager.js';
import { PoliceNPCManager } from '../entities/PoliceNPCManager.js';
import { StationLobbyManager } from '../entities/StationLobbyManager.js';
import { CityGenerator } from '../environment/CityGenerator.js';
import { WeatherSystem } from '../environment/WeatherSystem.js';
import { InputController } from '../input/InputController.js';
import { ScoreManager } from '../ui/ScoreManager.js';
import { UIManager } from '../ui/UIManager.js';
import { soundEngine } from '../audio/SoundEngine.js';
import { voiceSystem } from '../audio/VoiceSystem.js';
import { progressManager } from '../progression/ProgressManager.js';
import { missionManager } from '../progression/MissionManager.js';
import { achievementManager } from '../progression/AchievementManager.js';

export class Game {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.appRenderer = new AppRenderer(this.container);
    this.scene = this.appRenderer.scene;

    this.cameraManager = new CameraManager(this.appRenderer.camera);
    this.player = new Player(this.scene);

    this.trackManager = new TrackManager(this.scene);
    this.trainManager = new TrainManager(this.scene);
    this.obstacleManager = new ObstacleManager(this.scene);
    this.powerUpManager = new PowerUpManager(this.scene);
    this.coinManager = new CoinManager(this.scene);

    this.policeNPCManager = new PoliceNPCManager(this.scene);
    this.stationLobbyManager = new StationLobbyManager(this.scene);
    this.cityGenerator = new CityGenerator(this.scene);
    this.weatherSystem = new WeatherSystem(this.scene);

    this.scoreManager = new ScoreManager();
    this.inputController = new InputController();
    this.uiManager = new UIManager(this);

    // Game Loop States: 'LOADING', 'WELCOME', 'COUNTDOWN', 'PLAYING', 'PAUSED', 'REVIVE', 'GAMEOVER'
    this.state = 'LOADING';
    this.baseSpeed = 8.0;
    this.gameSpeed = 8.0;
    this.maxSpeed = 38.0;
    this.distanceTraveled = 0;
    this.clock = new THREE.Clock();

    // Loop Duplicate Safeguard
    this.animFrameId = null;
    this.fpsCount = 60;
    this.frameCount = 0;
    this.fpsTimer = 0;

    // Location Banner Tracking
    this.lastLocationMilestone = 0;

    this.initInputs();
    this.simulateAssetLoading();
  }

  initInputs() {
    this.inputController.on('left', () => {
      if (this.state === 'PLAYING') {
        this.player.moveLeft();
      }
    });

    this.inputController.on('right', () => {
      if (this.state === 'PLAYING') {
        this.player.moveRight();
      }
    });

    this.inputController.on('jump', () => {
      if (this.state === 'PLAYING') {
        this.player.jump();
        achievementManager.addJump();
      }
    });

    this.inputController.on('slide', () => {
      if (this.state === 'PLAYING') {
        this.player.slide();
      }
    });

    this.inputController.on('pause', () => {
      if (this.state === 'PLAYING') this.pauseGame();
      else if (this.state === 'PAUSED') this.resumeGame();
    });

    this.inputController.on('restart', () => {
      if (this.state === 'GAMEOVER' || this.state === 'PAUSED') {
        this.startCountdownFlow();
      }
    });
  }

  simulateAssetLoading() {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 15;
      const statusText = progress < 40 ? 'Loading City Landmarks…' : (progress < 80 ? 'Initialising CID Voice Synthesizer…' : 'Ready!');
      this.uiManager.updateLoadingProgress(progress, statusText);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.state = 'WELCOME';
          this.uiManager.showScreen(this.uiManager.screenWelcome);
          soundEngine.startMusic();
          this.startLoop();
        }, 200);
      }
    }, 60);
  }

  startCountdownFlow() {
    this.resetGameState();
    this.state = 'COUNTDOWN';
    this.uiManager.showScreen(this.uiManager.screenCountdown);

    let count = 3;
    soundEngine.playCountdown(count);
    this.uiManager.updateCountdown(count.toString(), 'GET READY');
    voiceSystem.speak('MISSION_START');

    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        soundEngine.playCountdown(count);
        this.uiManager.updateCountdown(count.toString(), 'GET READY');
      } else if (count === 0) {
        soundEngine.playCountdown(0);
        this.uiManager.updateCountdown('GO!', 'RUN NOW!');
      } else {
        clearInterval(interval);
        this.startGameplay();
      }
    }, 700);
  }

  startGameplay() {
    this.state = 'PLAYING';
    this.uiManager.showScreen(this.uiManager.screenHUD);
    soundEngine.startMusic();
    this.showLocationBanner('🚉 METRO CENTRAL STATION');
  }

  pauseGame() {
    if (this.state !== 'PLAYING') return;
    this.state = 'PAUSED';
    document.getElementById('pause-score').textContent = this.scoreManager.score.toLocaleString();
    document.getElementById('pause-distance').textContent = `${Math.floor(this.distanceTraveled)} m`;
    this.uiManager.showModal(this.uiManager.modalPause);
  }

  resumeGame() {
    if (this.state !== 'PAUSED') return;
    this.uiManager.hideModal(this.uiManager.modalPause);
    this.state = 'PLAYING';
  }

  resetGameState() {
    this.gameSpeed = this.baseSpeed;
    this.distanceTraveled = 0;
    this.lastLocationMilestone = 0;
    this.player.reset();
    this.scoreManager.reset();

    this.trackManager.reset();
    this.trainManager.reset();
    this.obstacleManager.reset();
    this.powerUpManager.reset();
    this.coinManager.reset();
    this.policeNPCManager.reset();
  }

  handlePlayerCrash() {
    soundEngine.playCrash();
    voiceSystem.speak('GAME_OVER');

    if (this.player.shieldActive) {
      this.player.setPowerupVisual('SAFETY_BUBBLE', false);
      soundEngine.playPowerup();
      return;
    }

    if (progressManager.reviveTokens > 0) {
      this.state = 'REVIVE';
      this.uiManager.showReviveModal();
    } else {
      this.enterGameOverLobby();
    }
  }

  revivePlayer() {
    this.state = 'PLAYING';
    this.player.setPowerupVisual('SAFETY_BUBBLE', true);
    setTimeout(() => this.player.setPowerupVisual('SAFETY_BUBBLE', false), 4000);
    this.uiManager.showScreen(this.uiManager.screenHUD);
  }

  enterGameOverLobby() {
    this.state = 'GAMEOVER';
    const finalScore = this.scoreManager.score;
    const coinsCollected = this.scoreManager.coinsCollected;
    const isNewRecord = progressManager.updateHighScore(finalScore);

    const xpEarned = Math.floor(finalScore / 10) + coinsCollected * 2;
    progressManager.addXP(xpEarned);
    progressManager.addCoins(coinsCollected);

    missionManager.updateProgress('distance', Math.floor(this.distanceTraveled));
    missionManager.updateProgress('coins', coinsCollected);
    achievementManager.checkStats();

    this.uiManager.showGameOverLobby(
      finalScore,
      this.distanceTraveled,
      coinsCollected,
      progressManager.highScore,
      isNewRecord,
      xpEarned
    );
  }

  startLoop() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }

    this.clock.start();
    const loop = () => {
      this.animFrameId = requestAnimationFrame(loop);
      this.update();
      this.render();
    };
    loop();
  }

  showLocationBanner(title) {
    const banner = document.getElementById('location-banner-overlay');
    const text = document.getElementById('location-banner-text');
    if (banner && text) {
      text.textContent = title;
      banner.classList.remove('hidden');
      banner.classList.add('active');
      setTimeout(() => {
        banner.classList.remove('active');
        banner.classList.add('hidden');
      }, 3500);
    }
  }

  update() {
    const delta = Math.min(this.clock.getDelta(), 0.033);

    // FPS Counter Update
    this.frameCount++;
    this.fpsTimer += delta;
    if (this.fpsTimer >= 1.0) {
      this.fpsCount = this.frameCount;
      this.frameCount = 0;
      this.fpsTimer = 0;
    }

    if (this.state === 'WELCOME' || this.state === 'LOADING') {
      this.cameraManager.updateMenuCamera(this.player.position, delta);
      this.cityGenerator.update(0, delta);
      this.updateDebugHUD();
      return;
    }

    if (this.state !== 'PLAYING') {
      this.updateDebugHUD();
      return;
    }

    // Automatic Continuous Running Acceleration (from 8.0 up to 38.0)
    this.gameSpeed = Math.min(this.maxSpeed, this.baseSpeed + (this.distanceTraveled * 0.006));
    this.distanceTraveled += this.gameSpeed * delta;

    // Check Location Milestones for 108 procedural landmarks
    const milestone = Math.floor(this.distanceTraveled / 400);
    if (milestone > this.lastLocationMilestone) {
      this.lastLocationMilestone = milestone;
      const names = [
        '🏰 RED FORT GATE', '🛕 TAJ MAHAL AGRA', '🏙️ DELHI CYBER HUB',
        '🌉 MUMBAI SEA LINK', '🌉 HOWRAH BRIDGE', '🏔️ HIMALAYAN SNOW PASS',
        '🐫 RAJASTHAN PINK CITY', '🛕 GOLDEN TEMPLE', '🏭 STEEL PLANT',
        '🌴 KERALA BACKWATERS', '🗼 TOKYO TOWER', '🏙️ DUBAI SKYLINE',
        '🤖 ROBOT AI CAMPUS', '🚀 NASA SPACE CENTER', '🔴 MARS COLONY BASE'
      ];
      const name = names[milestone % names.length];
      this.showLocationBanner(name);
      soundEngine.playPowerup();
    }

    this.scoreManager.update(delta, this.gameSpeed);
    this.player.update(delta, this.gameSpeed, this.distanceTraveled);

    this.trackManager.update(this.player.position.z);
    this.trainManager.update(this.gameSpeed, delta, this.player.position);
    this.obstacleManager.update(this.gameSpeed, delta, this.player.position.z);
    this.powerUpManager.update(this.gameSpeed, delta, this.player.position);
    this.coinManager.update(this.gameSpeed, delta, this.player.position, this.player.magnetActive);

    this.policeNPCManager.update(delta, this.player.position, this.gameSpeed);
    this.cityGenerator.update(this.player.position.z, delta);
    this.weatherSystem.update(delta, this.player.position);

    this.cameraManager.update(this.player.position, this.player.lane, this.player.isJumping, delta);
    this.uiManager.updateHUD(this.scoreManager.score, this.distanceTraveled, this.scoreManager.coinsCollected);
    this.uiManager.updatePowerUpBadges(this.powerUpManager.activePowerups, this.powerUpManager.durations);

    // Debug System HUD Update
    this.updateDebugHUD();

    // Collision Detection
    this.checkCollisions();
  }

  updateDebugHUD() {
    const fpsEl = document.getElementById('dbg-fps');
    const stateEl = document.getElementById('dbg-state');
    const speedEl = document.getElementById('dbg-speed');
    const distEl = document.getElementById('dbg-dist');

    if (fpsEl) fpsEl.textContent = `${this.fpsCount} FPS`;
    if (stateEl) stateEl.textContent = `STATE: ${this.state}`;
    if (speedEl) speedEl.textContent = `SPEED: ${this.gameSpeed.toFixed(1)}`;
    if (distEl) distEl.textContent = `DIST: ${Math.floor(this.distanceTraveled)}m`;
  }

  checkCollisions() {
    if (this.trainManager.checkCollision(this.player.box)) {
      voiceSystem.speak('TRAIN');
      this.handlePlayerCrash();
      return;
    }

    if (this.obstacleManager.checkCollision(this.player.box)) {
      this.handlePlayerCrash();
      return;
    }

    const coinsGathered = this.coinManager.checkCollections(this.player.box);
    if (coinsGathered > 0) {
      const multiplier = this.player.doubleScoreActive ? 2 : 1;
      this.scoreManager.addCoins(coinsGathered * multiplier);
      soundEngine.playCoin();
      if (Math.random() < 0.1) voiceSystem.speak('COIN');
    }

    const powerUpType = this.powerUpManager.checkPickups(this.player.box);
    if (powerUpType) {
      soundEngine.playPowerup();
      this.player.setPowerupVisual(powerUpType, true);

      if (powerUpType === 'AIR_ROCKET') voiceSystem.speak('ROCKET');
      else if (powerUpType === 'SAFETY_BUBBLE') voiceSystem.speak('SAFETY_BUBBLE');
      else if (powerUpType === 'DOUBLE_COIN') voiceSystem.speak('DOUBLE_COINS');
    }
  }

  render() {
    this.appRenderer.render();
  }
}
