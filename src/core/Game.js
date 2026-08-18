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
import { AiBotRunner } from '../entities/AiBotRunner.js';
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
import { NeuralDirector } from '../ai/NeuralDirector.js';

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
    this.neuralDirector = new NeuralDirector(this);
    this.uiManager = new UIManager(this);

    // Game Loop States: 'LOADING', 'WELCOME', 'COUNTDOWN', 'PLAYING', 'PAUSED', 'REVIVE', 'GAMEOVER'
    this.state = 'LOADING';
    this.baseSpeed = 18.0;
    this.gameSpeed = 18.0;
    this.maxSpeed = 65.0;
    this.distanceTraveled = 0;
    this.clock = new THREE.Clock();

    // Loop Duplicate Safeguard
    this.animFrameId = null;
    this.fpsCount = 60;
    this.frameCount = 0;
    this.fpsTimer = 0;

    // Location Banner Tracking
    this.lastLocationMilestone = 0;
    this.nextSpawnZ = 40;

    this.initInputs();
    this.simulateAssetLoading();
  }

  initInputs() {
    this.inputController.on('left', () => {
      if (this.state === 'PLAYING') {
        this.player.moveLeft(); // Left steering moves character Left
      }
    });

    this.inputController.on('right', () => {
      if (this.state === 'PLAYING') {
        this.player.moveRight(); // Right steering moves character Right
      }
    });

    this.inputController.on('ability', () => {
      if (this.state === 'PLAYING') {
        this.player.triggerAbility();
      }
    });

    this.inputController.on('emote', (emoteType) => {
      if (this.player) {
        this.player.triggerEmote(emoteType || 'DANCE');
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
        if (this.isAiRaceMode) this.startAiRaceMode();
        else this.startSoloRun();
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

  startSoloRun() {
    this.isAiRaceMode = false;
    if (this.aiBot) {
      this.aiBot.destroy();
      this.aiBot = null;
    }
    const aiBox = document.getElementById('hud-ai-race-box');
    if (aiBox) aiBox.classList.add('hidden');
    this.startCountdownFlow();
  }

  startAiRaceMode() {
    this.isAiRaceMode = true;
    this.aiRaceTimer = 120.0;
    if (this.aiBot) this.aiBot.destroy();
    this.aiBot = new AiBotRunner(this.scene);

    const aiBox = document.getElementById('hud-ai-race-box');
    if (aiBox) aiBox.classList.remove('hidden');

    this.startCountdownFlow();
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
    this.nextSpawnZ = 40;
    this.player.reset();
    this.scoreManager.reset();

    this.trackManager.reset();
    this.trainManager.reset();
    this.obstacleManager.reset();
    this.powerUpManager.reset();
    this.coinManager.reset();
    this.policeNPCManager.reset();

    if (!this.isAiRaceMode) {
      if (this.aiBot) {
        this.aiBot.destroy();
        this.aiBot = null;
      }
      const aiBox = document.getElementById('hud-ai-race-box');
      if (aiBox) aiBox.classList.add('hidden');
    } else if (this.aiBot) {
      this.aiBot.reset();
    }
  }

  spawnWorldAhead() {
    while (this.nextSpawnZ < this.player.position.z + 200) {
      const z = this.nextSpawnZ;
      const rand = Math.random();
      const lane = Math.floor(Math.random() * 3); // 0, 1, 2

      if (rand < 0.30) {
        const types = ['LOW_BARRIER', 'HIGH_BARRIER', 'CONES', 'ELECTRIC_LASER_GRID', 'EXPLOSIVE_HAZARD_BARREL'];
        const type = types[Math.floor(Math.random() * types.length)];
        this.obstacleManager.createObstacle(type, lane, z);
      } else if (rand < 0.75) {
        // Increased train quantity & multi-coach train types
        const types = ['METRO', 'CARGO', 'MAAL', 'PETRO', 'COACH', 'EXPRESS'];
        const type = types[Math.floor(Math.random() * types.length)];
        const isMoving = Math.random() < 0.35;
        const speed = isMoving ? 8 + Math.random() * 8 : 0;
        const coachCount = Math.random() < 0.5 ? 2 : 3; // 2 to 3 coach trains joined together!
        this.trainManager.createTrain(type, lane, z, isMoving, speed, coachCount);
      }

      if (Math.random() < 0.7) {
        const patterns = ['LINE', 'ARCH', 'ZIGZAG'];
        const pat = patterns[Math.floor(Math.random() * patterns.length)];
        const coinLane = (lane + 1) % 3;
        this.coinManager.spawnPattern(pat, coinLane, z + 4);
      }

      if (Math.random() < 0.22) {
        const pTypes = ['AIR_ROCKET', 'JUMP_SHOES', 'DOUBLE_COIN', 'SAFETY_BUBBLE', 'MAGNET'];
        const pType = pTypes[Math.floor(Math.random() * pTypes.length)];
        const pLane = (lane + 2) % 3;
        this.powerUpManager.spawnPowerUp(pType, pLane, z + 12);
      }

      if (Math.random() < 0.25) {
        const pTypes = ['DIRECTING_TRAFFIC', 'WALKING', 'STANDING'];
        const pType = pTypes[Math.floor(Math.random() * pTypes.length)];
        const sideX = Math.random() > 0.5 ? 4.5 : -4.5;
        this.policeNPCManager.spawnPolice(sideX, z + 8, pType);
      }

      this.nextSpawnZ += 26 + Math.random() * 10;
    }
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
    const delta = Math.min(this.clock.getDelta(), 0.0166);

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

    // Automatic Continuous Running Acceleration (from 18.0 up to 65.0)
    this.gameSpeed = Math.min(this.maxSpeed, this.baseSpeed + (this.distanceTraveled * 0.012));
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

    // Triangle Train Ramp Climbing Check
    const rampY = this.trainManager.getTrainRampHeight(this.player.position);
    if (rampY !== null) {
      this.player.setRampTargetY(rampY);
    } else {
      this.player.setRampTargetY(0);
    }

    this.scoreManager.update(delta, this.gameSpeed, this.player.doubleScoreActive);
    this.player.update(delta, this.gameSpeed, this.distanceTraveled);
    this.neuralDirector.update(delta, this.distanceTraveled, this.gameSpeed);

    this.spawnWorldAhead();

    this.trackManager.update(this.player.position.z);
    this.trainManager.update(this.gameSpeed, delta, this.player.position);
    this.policeNPCManager.update(this.player.position, delta);
    this.cityGenerator.update(this.player.position.z, delta);
    this.weatherSystem.update(this.player.position.z, delta);

    const coinsGathered = this.coinManager.update(this.player.position, this.player.magnetActive, delta);
    if (coinsGathered > 0) {
      const multiplier = this.player.doubleScoreActive ? 2 : 1;
      this.scoreManager.addCoins(coinsGathered * multiplier);
      this.uiManager.showCoinPopup(coinsGathered * multiplier);
      if (Math.random() < 0.15) voiceSystem.speak('COIN');
    }

    // 2-Minute AI Computer Race Loop
    if (this.isAiRaceMode && this.aiBot) {
      this.aiRaceTimer -= delta;
      this.aiBot.update(this.gameSpeed, delta, this.player.position.z);

      const leadMeters = Math.floor(this.player.position.z - this.aiBot.distance);
      const timerEl = document.getElementById('ai-race-timer');
      const leadEl = document.getElementById('ai-race-lead');

      if (timerEl) {
        const secs = Math.max(0, Math.ceil(this.aiRaceTimer));
        const m = Math.floor(secs / 60).toString().padStart(2, '0');
        const s = (secs % 60).toString().padStart(2, '0');
        timerEl.textContent = `${m}:${s}`;
      }

      if (leadEl) {
        if (leadMeters >= 0) {
          leadEl.textContent = `+${leadMeters} m (PLAYER LEAD)`;
          leadEl.style.color = 'var(--accent-green)';
        } else {
          leadEl.textContent = `${leadMeters} m (AI BOT LEAD)`;
          leadEl.style.color = 'var(--accent-pink)';
        }
      }

      if (this.aiRaceTimer <= 0) {
        if (leadMeters >= 0) {
          voiceSystem.speak('VICTORY');
          progressManager.addCoins(1000);
          alert('🎉 VICTORY! YOU BEAT THE AI COMPUTER RUNNER BOT IN THE 2-MINUTE RACE! (+1000 BONUS COINS)');
        } else {
          alert('🤖 AI COMPUTER RUNNER BOT WON THE 2-MINUTE RACE! TRY AGAIN!');
        }
        this.enterGameOverLobby();
        return;
      }
    }

    this.cameraManager.update(this.player.position, this.player.lane, this.player.isJumping, delta, this.gameSpeed);
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
    if (this.trainManager.checkCollision(this.player.box, this.player.position.y)) {
      voiceSystem.speak('TRAIN');
      this.handlePlayerCrash();
      return;
    }

    if (this.obstacleManager.checkCollision(this.player.box, this.player.isSliding, this.player.isJumping, this.player.position.y)) {
      this.handlePlayerCrash();
      return;
    }
  }

  render() {
    this.appRenderer.render();
  }
}
