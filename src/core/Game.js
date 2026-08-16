// Game.js - High-Performance 60 FPS Game Loop Engine
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

    // States: 'LOADING', 'WELCOME', 'COUNTDOWN', 'PLAYING', 'PAUSED', 'REVIVE', 'GAMEOVER'
    this.state = 'LOADING';
    this.gameSpeed = 16.0;
    this.baseSpeed = 16.0;
    this.maxSpeed = 38.0;
    this.distanceTraveled = 0;
    this.clock = new THREE.Clock();

    this.initInputs();
    this.simulateAssetLoading();
  }

  initInputs() {
    this.inputController.on('left', () => {
      if (this.state === 'PLAYING') {
        this.player.moveLeft();
        voiceSystem.speak('LEFT');
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
        voiceSystem.speak('JUMP');
      }
    });

    this.inputController.on('slide', () => {
      if (this.state === 'PLAYING') {
        this.player.slide();
        voiceSystem.speak('SLIDE');
      }
    });

    this.inputController.on('pause', () => {
      if (this.state === 'PLAYING') this.pauseGame();
      else if (this.state === 'PAUSED') this.resumeGame();
    });
  }

  simulateAssetLoading() {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 12;
      const statusText = progress < 40 ? 'Loading City Landmarks…' : (progress < 80 ? 'Initialising CID Voice Synthesizer…' : 'Ready!');
      this.uiManager.updateLoadingProgress(progress, statusText);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          this.state = 'WELCOME';
          this.uiManager.showScreen(this.uiManager.screenWelcome);
          soundEngine.startMusic();
          this.startLoop();
        }, 300);
      }
    }, 80);
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
    }, 750);
  }

  startGameplay() {
    this.state = 'PLAYING';
    this.uiManager.showScreen(this.uiManager.screenHUD);
    this.cameraManager.setMode('THIRD_PERSON');
    soundEngine.startMusic();
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
    this.clock.start();
    const loop = () => {
      requestAnimationFrame(loop);
      this.update();
      this.render();
    };
    loop();
  }

  update() {
    // Frame Delta Clamp for 60fps Stutter Prevention on Low-End Mobile Devices
    const delta = Math.min(this.clock.getDelta(), 0.033);

    if (this.state === 'WELCOME' || this.state === 'LOADING') {
      this.cameraManager.updateWelcomeOrbit(delta);
      this.cityGenerator.update(0, delta);
      return;
    }

    if (this.state !== 'PLAYING') return;

    this.gameSpeed = Math.min(this.maxSpeed, this.gameSpeed + delta * 0.15);
    this.distanceTraveled += this.gameSpeed * delta;

    this.scoreManager.update(delta, this.gameSpeed);
    this.player.update(delta, this.gameSpeed);

    this.trackManager.update(this.gameSpeed, delta, this.player.position.z);
    this.trainManager.update(this.gameSpeed, delta, this.player.position);
    this.obstacleManager.update(this.gameSpeed, delta, this.player.position.z);
    this.powerUpManager.update(this.gameSpeed, delta, this.player.position);
    this.coinManager.update(this.gameSpeed, delta, this.player.position, this.player.magnetActive);

    this.policeNPCManager.update(delta, this.player.position, this.gameSpeed);
    this.cityGenerator.update(this.player.position.z, delta);
    this.weatherSystem.update(delta, this.player.position);

    this.cameraManager.update(this.player.position, delta);
    this.uiManager.updateHUD(this.scoreManager.score, this.distanceTraveled, this.scoreManager.coinsCollected);
    this.uiManager.updatePowerUpBadges(this.powerUpManager.activePowerups, this.powerUpManager.durations);

    // Collision Detection
    this.checkCollisions();
  }

  checkCollisions() {
    // Train Collision
    if (this.trainManager.checkCollision(this.player.box)) {
      voiceSystem.speak('TRAIN');
      this.handlePlayerCrash();
      return;
    }

    // Barrier / Obstacle Collision
    if (this.obstacleManager.checkCollision(this.player.box)) {
      this.handlePlayerCrash();
      return;
    }

    // Coin Collection
    const coinsGathered = this.coinManager.checkCollections(this.player.box);
    if (coinsGathered > 0) {
      const multiplier = this.player.doubleScoreActive ? 2 : 1;
      this.scoreManager.addCoins(coinsGathered * multiplier);
      soundEngine.playCoin();
      if (Math.random() < 0.1) voiceSystem.speak('COIN');
    }

    // Powerup Pickup
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
