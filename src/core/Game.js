// Game.js - Upgraded for 3D Camera Menu Orbit & Dynamic Background
import * as THREE from 'three';
import { AppRenderer } from './Renderer.js';
import { CameraManager } from './CameraManager.js';
import { Player } from '../entities/Player.js';
import { TrackManager } from '../entities/TrackManager.js';
import { CityGenerator } from '../environment/CityGenerator.js';
import { WeatherSystem } from '../environment/WeatherSystem.js';
import { PoliceNPCManager } from '../entities/PoliceNPCManager.js';
import { StationLobbyManager } from '../entities/StationLobbyManager.js';
import { TrainManager } from '../entities/TrainManager.js';
import { ObstacleManager } from '../entities/ObstacleManager.js';
import { CoinManager } from '../entities/CoinManager.js';
import { PowerUpManager } from '../entities/PowerUpManager.js';
import { InputController } from '../input/InputController.js';
import { ScoreManager } from '../ui/ScoreManager.js';
import { UIManager } from '../ui/UIManager.js';
import { soundEngine } from '../audio/SoundEngine.js';
import { voiceSystem } from '../audio/VoiceSystem.js';
import { progressManager } from '../progression/ProgressManager.js';
import { missionManager } from '../progression/MissionManager.js';
import { achievementManager } from '../progression/AchievementManager.js';

export const GameState = {
  LOADING: 'LOADING',
  WELCOME: 'WELCOME',
  COUNTDOWN: 'COUNTDOWN',
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
  REVIVE: 'REVIVE',
  GAMEOVER_LOBBY: 'GAMEOVER_LOBBY'
};

export class Game {
  constructor(container) {
    this.container = container;
    this.state = GameState.LOADING;

    this.appRenderer = new AppRenderer(container);
    this.cameraManager = new CameraManager(this.appRenderer.camera);

    this.player = new Player(this.appRenderer.scene);
    this.trackManager = new TrackManager(this.appRenderer.scene);
    this.cityGenerator = new CityGenerator(this.appRenderer.scene);
    this.weatherSystem = new WeatherSystem(this.appRenderer.scene);
    this.policeNPCManager = new PoliceNPCManager(this.appRenderer.scene);
    this.stationLobbyManager = new StationLobbyManager(this.appRenderer.scene);
    this.trainManager = new TrainManager(this.appRenderer.scene);
    this.obstacleManager = new ObstacleManager(this.appRenderer.scene);
    this.coinManager = new CoinManager(this.appRenderer.scene);
    this.powerUpManager = new PowerUpManager(this.appRenderer.scene);
    this.scoreManager = new ScoreManager();
    this.input = new InputController();
    this.ui = new UIManager(this);

    this.baseSpeed = 16.0;
    this.currentSpeed = this.baseSpeed;
    this.maxSpeed = 32.0;
    this.nextSpawnZ = 40.0;
    this.lastTime = 0;
    this.invulnerableTimer = 0;

    this.initInputBindings();
    this.startLoadingFlow();

    requestAnimationFrame((t) => this.loop(t));
  }

  initInputBindings() {
    this.input.on('left', () => {
      if (this.state === GameState.RUNNING) this.player.moveLeft();
    });
    this.input.on('right', () => {
      if (this.state === GameState.RUNNING) this.player.moveRight();
    });
    this.input.on('jump', () => {
      if (this.state === GameState.RUNNING) {
        this.player.jump();
        missionManager.updateProgress('jump');
        achievementManager.addJump();
      }
    });
    this.input.on('slide', () => {
      if (this.state === GameState.RUNNING) this.player.slide();
    });
    this.input.on('pause', () => {
      if (this.state === GameState.RUNNING) this.pauseGame();
      else if (this.state === GameState.PAUSED) this.resumeGame();
    });
  }

  startLoadingFlow() {
    this.state = GameState.LOADING;
    this.ui.showScreen(this.ui.screenLoading);

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        this.ui.updateLoadingProgress(100, 'Metro Cities Ready!');
        setTimeout(() => {
          this.state = GameState.WELCOME;
          this.ui.showScreen(this.ui.screenWelcome);
          soundEngine.startMusic();
        }, 500);
      } else {
        this.ui.updateLoadingProgress(progress, 'Preparing Metro Cities…');
      }
    }, 100);
  }

  startCountdownFlow() {
    this.stationLobbyManager.showLobby(false);
    this.resetGameData();
    this.state = GameState.COUNTDOWN;
    this.ui.showScreen(this.ui.screenCountdown);

    let count = 3;
    this.ui.updateCountdown('3', 'GET READY');
    soundEngine.playCountdown(3);

    const timer = setInterval(() => {
      count--;
      if (count === 2) {
        this.ui.updateCountdown('2', 'SET YOUR PACER');
        soundEngine.playCountdown(2);
      } else if (count === 1) {
        this.ui.updateCountdown('1', 'ENGAGE METRO RUN');
        soundEngine.playCountdown(1);
      } else if (count === 0) {
        this.ui.updateCountdown('RUN!', 'METRO RUNNER');
        soundEngine.playCountdown(0);
        voiceSystem.speak('START');
      } else {
        clearInterval(timer);
        this.state = GameState.RUNNING;
        this.ui.showScreen(this.ui.screenHUD);
      }
    }, 700);
  }

  pauseGame() {
    if (this.state !== GameState.RUNNING) return;
    this.state = GameState.PAUSED;
    this.ui.showModal(this.ui.modalPause);
    document.getElementById('pause-score').textContent = this.scoreManager.score.toLocaleString();
    document.getElementById('pause-distance').textContent = `${Math.floor(this.scoreManager.distance)} m`;
  }

  resumeGame() {
    if (this.state !== GameState.PAUSED) return;
    this.ui.hideModal(this.ui.modalPause);
    this.state = GameState.RUNNING;
  }

  onCollisionHit() {
    soundEngine.playCrash();
    this.cameraManager.triggerShake(1.2);

    this.state = GameState.REVIVE;
    this.ui.showReviveModal();
  }

  revivePlayer() {
    this.state = GameState.RUNNING;
    this.invulnerableTimer = 3.0;
    this.powerUpManager.activatePowerUp('SAFETY_BUBBLE', this.player);
    this.ui.showScreen(this.ui.screenHUD);
  }

  enterGameOverLobby() {
    this.state = GameState.GAMEOVER_LOBBY;
    voiceSystem.speak('GAMEOVER');

    this.stationLobbyManager.showLobby(true);
    this.player.position.set(0, 0, -500);
    this.player.velocity.set(0, 0, 0);
    this.player.isGrounded = true;

    progressManager.addCoins(this.scoreManager.coins);
    const xpEarned = Math.floor(this.scoreManager.distance * 0.5) + (this.scoreManager.coins * 5);
    progressManager.addXp(xpEarned);

    missionManager.updateProgress('run_complete');
    achievementManager.checkStats();

    this.scoreManager.saveBestDistance();
    const isNewRecord = this.scoreManager.saveHighScore();
    if (isNewRecord) voiceSystem.speak('RECORD');

    this.ui.showGameOverLobby(
      this.scoreManager.score,
      this.scoreManager.distance,
      this.scoreManager.coins,
      this.scoreManager.highScore,
      isNewRecord,
      xpEarned
    );
  }

  resetGameData() {
    this.player.setCharacterType(progressManager.selectedCharacter);
    this.player.reset();
    this.trackManager.reset();
    this.cityGenerator.setMap(progressManager.selectedMap);
    this.cityGenerator.reset();
    this.policeNPCManager.reset();
    this.trainManager.reset();
    this.obstacleManager.reset();
    this.powerUpManager.reset(this.player);
    this.coinManager.reset();
    this.scoreManager.reset();

    this.currentSpeed = this.baseSpeed;
    this.nextSpawnZ = 40.0;
    this.invulnerableTimer = 0;
  }

  spawnAhead(playerZ) {
    if (this.nextSpawnZ < playerZ + 120.0) {
      const spawnZ = this.nextSpawnZ;
      const patternType = Math.random();
      const lane = Math.floor(Math.random() * 3);

      if (Math.random() < 0.25) {
        const pType = Math.random() > 0.5 ? 'DIRECTING_TRAFFIC' : 'WALKING';
        this.policeNPCManager.spawnPolice((lane === 0 ? -4.5 : 4.5), spawnZ, pType);
      }

      if (this.powerUpManager.isActive('AIR_ROCKET')) {
        this.coinManager.spawnPattern('SKY_FLIGHT', lane, spawnZ);
      } else if (patternType < 0.35) {
        const types = ['METRO', 'CARGO', 'EXPRESS'];
        const type = types[Math.floor(Math.random() * types.length)];
        const isMoving = Math.random() > 0.5;
        const speed = isMoving ? Math.random() * 8 + 6 : 0;
        const train = this.trainManager.createTrain(type, lane, spawnZ + 20, isMoving, speed);
        
        soundEngine.playSpatialTrainHorn(train.mesh.position.x, train.mesh.position.z);
        missionManager.updateProgress('train');

        const altLane = (lane + 1) % 3;
        this.coinManager.spawnPattern('LINE', altLane, spawnZ);

      } else if (patternType < 0.70) {
        const obsType = Math.random() > 0.5 ? 'LOW_BARRIER' : 'HIGH_BARRIER';
        this.obstacleManager.createObstacle(obsType, lane, spawnZ);
        if (obsType === 'LOW_BARRIER') this.coinManager.spawnPattern('ARCH', lane, spawnZ - 2);
        else this.coinManager.spawnPattern('LINE', lane, spawnZ - 2);

      } else {
        this.coinManager.spawnPattern('ZIGZAG', lane, spawnZ);
        if (Math.random() > 0.3) {
          const powerTypes = ['AIR_ROCKET', 'JUMP_SHOES', 'DOUBLE_COIN', 'SAFETY_BUBBLE', 'MAGNET', 'SPEED_BOOST'];
          const pType = powerTypes[Math.floor(Math.random() * powerTypes.length)];
          this.powerUpManager.spawnPowerUp(pType, (lane + 2) % 3, spawnZ + 10);
        }
      }

      this.nextSpawnZ += Math.random() * 25 + 28;
    }
  }

  loop(timestamp) {
    requestAnimationFrame((t) => this.loop(t));
    const delta = Math.min((timestamp - this.lastTime) / 1000, 0.1);
    this.lastTime = timestamp;

    if (this.state === GameState.RUNNING) {
      this.updateRunning(delta);
      this.cameraManager.update(
        this.player.position,
        this.player.lane,
        this.player.isJumping,
        delta
      );
    } else if (this.state === GameState.WELCOME || this.state === GameState.LOADING) {
      // Cinematic 3D Menu Camera orbiting standing player on track
      this.player.animTime += delta * 2;
      this.player.updateAnimations(8);
      this.cityGenerator.update(this.player.position.z, delta);
      this.weatherSystem.update(this.player.position.z, delta);
      this.cameraManager.updateMenuCamera(this.player.position, delta);
    } else {
      this.cameraManager.update(
        this.player.position,
        this.player.lane,
        this.player.isJumping,
        delta
      );
    }

    this.appRenderer.render();
  }

  updateRunning(delta) {
    const isRocket = this.powerUpManager.isActive('AIR_ROCKET');
    const isSpeed = this.powerUpManager.isActive('SPEED_BOOST');
    const speedMultiplier = isRocket ? 1.8 : (isSpeed ? 1.6 : 1.0);
    const effectiveSpeed = this.currentSpeed * speedMultiplier;

    const distTraveled = effectiveSpeed * delta;
    this.player.position.z += distTraveled;

    if (this.currentSpeed < this.maxSpeed) {
      this.currentSpeed += delta * 0.15;
    }

    this.player.update(delta, effectiveSpeed);
    this.trackManager.update(this.player.position.z);
    this.cityGenerator.update(this.player.position.z, delta);
    this.weatherSystem.update(this.player.position.z, delta);
    this.policeNPCManager.update(this.player.position, delta);

    this.spawnAhead(this.player.position.z);

    this.trainManager.update(this.player.position, delta, effectiveSpeed);
    this.obstacleManager.update(this.player.position);

    const isMagnet = this.powerUpManager.isActive('MAGNET');
    const coinsCollected = this.coinManager.update(this.player.position, isMagnet, delta);
    const isDouble = this.powerUpManager.isActive('DOUBLE_COIN');

    if (coinsCollected > 0) {
      this.scoreManager.addCoins(coinsCollected, isDouble);
      missionManager.updateProgress('coins', coinsCollected);
    }

    this.powerUpManager.update(this.player.position, this.player, delta);
    this.scoreManager.addDistance(distTraveled, isDouble);
    missionManager.updateProgress('distance', Math.floor(distTraveled));

    if (this.invulnerableTimer > 0) this.invulnerableTimer -= delta;

    if (this.invulnerableTimer <= 0 && !isRocket && !isSpeed) {
      this.checkCollisions();
    }

    this.ui.updateHUD(this.scoreManager.score, this.scoreManager.distance, this.scoreManager.coins);
    this.ui.updatePowerUpBadges(this.powerUpManager.activePowerups, this.powerUpManager.durations);
  }

  checkCollisions() {
    const playerBox = this.player.box;
    for (const obs of this.obstacleManager.obstacles) {
      if (playerBox.intersectsBox(obs.box)) {
        this.handleHit();
        return;
      }
    }
    for (const train of this.trainManager.trains) {
      if (playerBox.intersectsBox(train.box)) {
        this.handleHit();
        return;
      }
    }
  }

  handleHit() {
    if (this.powerUpManager.consumeProtection(this.player)) {
      this.invulnerableTimer = 1.2;
      this.cameraManager.triggerShake(0.8);
      soundEngine.playCrash();
    } else {
      this.onCollisionHit();
    }
  }
}
