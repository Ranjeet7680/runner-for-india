// UIManager.js - Realtime Achievement Toasts, Day/Night Mode Toggle & Referral System Engine
import { soundEngine } from '../audio/SoundEngine.js';
import { voiceSystem } from '../audio/VoiceSystem.js';
import { progressManager } from '../progression/ProgressManager.js';
import { missionManager } from '../progression/MissionManager.js';
import { achievementManager } from '../progression/AchievementManager.js';
import { CharacterPreviewRenderer } from './CharacterPreviewRenderer.js';

export class UIManager {
  constructor(game) {
    this.game = game;
    window.uiManager = this;

    // Screens
    this.screenLoading = document.getElementById('screen-loading');
    this.screenWelcome = document.getElementById('screen-welcome');
    this.screenCharacters = document.getElementById('screen-characters');
    this.screenMaps = document.getElementById('screen-maps');
    this.screenMissions = document.getElementById('screen-missions');
    this.screenRewards = document.getElementById('screen-rewards');
    this.screenAchievements = document.getElementById('screen-achievements');
    this.screenCountdown = document.getElementById('screen-countdown');
    this.screenHUD = document.getElementById('screen-hud');

    // Modals
    this.modalPause = document.getElementById('modal-pause');
    this.modalRevive = document.getElementById('modal-revive');
    this.modalGameOver = document.getElementById('modal-gameover');
    this.modalSettings = document.getElementById('modal-settings');
    this.modalReferral = document.getElementById('modal-referral');

    // Toast
    this.achievementToast = document.getElementById('ui-achievement-toast');
    this.toastTitle = document.getElementById('toast-title');
    this.toastIcon = document.getElementById('toast-icon');

    // HUD Elements
    this.hudScoreVal = document.getElementById('hud-score-val');
    this.hudDistanceVal = document.getElementById('hud-distance-val');
    this.hudCoinsVal = document.getElementById('hud-coins-val');
    this.hudPowerupsList = document.getElementById('hud-powerups-list');

    this.countdownNum = document.getElementById('countdown-number');
    this.countdownSub = document.getElementById('countdown-subtext');

    const previewContainer = document.getElementById('char-preview-container');
    this.charPreview = previewContainer ? new CharacterPreviewRenderer(previewContainer) : null;

    this.isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

    this.initListeners();
    this.initReferralSystem();
    this.updateProfileBadge();
  }

  initReferralSystem() {
    // Check if player opened site via a referral link: https://nexora-metrorunner.vercel.app/?ref=NEXORA-XXXX
    const urlParams = new URLSearchParams(window.location.search);
    const refCodeParam = urlParams.get('ref');

    if (refCodeParam && !progressManager.redeemedReferralCode) {
      setTimeout(() => {
        const inputField = document.getElementById('input-redeem-code');
        if (inputField) inputField.value = refCodeParam;
        this.openReferralModal();
      }, 1000);
    }
  }

  openReferralModal() {
    soundEngine.playClick();
    const codeDisplay = document.getElementById('ref-code-display');
    if (codeDisplay) codeDisplay.textContent = progressManager.myReferralCode;
    this.showModal(this.modalReferral);
  }

  initListeners() {
    // Day / Night Toggle Buttons
    const toggleDN = () => {
      soundEngine.playClick();
      const mode = this.game.cityGenerator.toggleDayNightMode();
      const icons = { DAY: '☀️', NIGHT: '🌙', DYNAMIC: '🌅' };
      const icon = icons[mode] || '☀️';
      const btn1 = document.getElementById('btn-daynight-toggle');
      const btn2 = document.getElementById('btn-hud-daynight');
      if (btn1) btn1.textContent = icon;
      if (btn2) btn2.textContent = icon;
    };

    document.getElementById('btn-daynight-toggle')?.addEventListener('click', toggleDN);
    document.getElementById('btn-hud-daynight')?.addEventListener('click', toggleDN);

    // Fullscreen Toggle Buttons
    const toggleFS = () => {
      soundEngine.playClick();
      this.toggleFullscreen();
    };
    document.getElementById('btn-fullscreen-toggle')?.addEventListener('click', toggleFS);
    document.getElementById('btn-hud-fullscreen')?.addEventListener('click', toggleFS);

    // Welcome Buttons - Trigger Automatic Mobile Fullscreen on START RUN!
    document.getElementById('btn-nav-start')?.addEventListener('click', () => {
      soundEngine.playClick();
      voiceSystem.speak('START');
      if (this.isMobileDevice) this.requestFullscreenAuto();
      this.game.startCountdownFlow();
    });

    document.getElementById('btn-nav-chars')?.addEventListener('click', () => { soundEngine.playClick(); this.openCharacterScreen(); });
    document.getElementById('btn-nav-maps')?.addEventListener('click', () => { soundEngine.playClick(); this.openMapScreen(); });
    document.getElementById('btn-nav-missions')?.addEventListener('click', () => { soundEngine.playClick(); this.openMissionsScreen(); });
    document.getElementById('btn-nav-rewards')?.addEventListener('click', () => { soundEngine.playClick(); this.openRewardsScreen(); });
    document.getElementById('btn-nav-referral')?.addEventListener('click', () => { this.openReferralModal(); });
    document.getElementById('btn-nav-settings')?.addEventListener('click', () => { soundEngine.playClick(); this.showModal(this.modalSettings); });

    // Global Close Button Event Delegation (Bulletproof Mobile & Laptop Tap Interception)
    const handleCloseClick = (e) => {
      const targetBtn = e.target.closest('.close-btn');
      if (targetBtn) {
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        soundEngine.playClick();
        if (this.charPreview) this.charPreview.stop();
        this.closeAllModals();
        if (this.game.state !== 'PLAYING') {
          this.showScreen(this.screenWelcome);
        }
      }
    };

    document.body.addEventListener('click', handleCloseClick, { capture: true });
    document.body.addEventListener('pointerdown', (e) => {
      if (e.target && e.target.closest && e.target.closest('.close-btn')) {
        handleCloseClick(e);
      }
    }, { capture: true, passive: false });

    document.getElementById('btn-close-chars')?.addEventListener('click', () => {
      soundEngine.playClick();
      if (this.charPreview) this.charPreview.stop();
      this.showScreen(this.screenWelcome);
    });
    document.getElementById('btn-close-maps')?.addEventListener('click', () => { soundEngine.playClick(); this.showScreen(this.screenWelcome); });
    document.getElementById('btn-close-missions')?.addEventListener('click', () => { soundEngine.playClick(); this.showScreen(this.screenWelcome); });
    document.getElementById('btn-close-rewards')?.addEventListener('click', () => { soundEngine.playClick(); this.showScreen(this.screenWelcome); });
    document.getElementById('btn-close-referral')?.addEventListener('click', () => { soundEngine.playClick(); this.hideModal(this.modalReferral); });
    document.getElementById('btn-close-settings')?.addEventListener('click', () => { soundEngine.playClick(); this.hideModal(this.modalSettings); });

    // Custom Song URL Play Button
    document.getElementById('btn-play-custom-song')?.addEventListener('click', () => {
      soundEngine.playClick();
      const input = document.getElementById('setting-custom-song-url');
      if (input && input.value) {
        soundEngine.playCustomSongUrl(input.value.trim());
        alert('🎵 Custom BGM Song URL loaded & playing in loop!');
      } else {
        alert('Please enter a valid audio URL (e.g. https://example.com/song.mp3)');
      }
    });

    // Custom Character Face Image Upload
    const inputFace = document.getElementById('input-custom-face');
    const btnRemoveFace = document.getElementById('btn-remove-face');

    if (localStorage.getItem('nexora_custom_face') && btnRemoveFace) {
      btnRemoveFace.style.display = 'block';
    }

    inputFace?.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        soundEngine.playClick();
        const reader = new FileReader();
        reader.onload = (evt) => {
          const dataUrl = evt.target.result;
          if (this.game.player) {
            this.game.player.setCustomFaceImage(dataUrl);
          }
          if (this.charPreview && this.charPreview.player) {
            this.charPreview.player.setCustomFaceImage(dataUrl);
          }
          if (btnRemoveFace) btnRemoveFace.style.display = 'block';
          alert('📸 Custom Face Photo successfully applied to your character!');
        };
        reader.readAsDataURL(file);
      }
    });

    btnRemoveFace?.addEventListener('click', () => {
      soundEngine.playClick();
      if (this.game.player) this.game.player.removeCustomFaceImage();
      if (this.charPreview && this.charPreview.player) this.charPreview.player.removeCustomFaceImage();
      btnRemoveFace.style.display = 'none';
      alert('Custom face photo removed.');
    });

    // Referral Modal Share & Redeem Buttons
    document.getElementById('btn-share-whatsapp')?.addEventListener('click', () => {
      soundEngine.playClick();
      const msg = progressManager.getShareMessage();
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
      window.open(whatsappUrl, '_blank');
    });

    document.getElementById('btn-share-copy')?.addEventListener('click', () => {
      soundEngine.playClick();
      const link = progressManager.getReferralUrl();
      navigator.clipboard.writeText(link).then(() => {
        alert('📋 Referral Link Copied to Clipboard!\n' + link);
      }).catch(() => {
        prompt('Copy your referral link:', link);
      });
    });

    document.getElementById('btn-redeem-code')?.addEventListener('click', () => {
      soundEngine.playClick();
      const input = document.getElementById('input-redeem-code');
      const msgSpan = document.getElementById('redeem-msg');
      if (input && msgSpan) {
        const res = progressManager.redeemReferralCode(input.value);
        msgSpan.textContent = res.message;
        msgSpan.style.color = res.success ? 'var(--accent-green)' : 'var(--accent-pink)';
        if (res.success) {
          soundEngine.playPowerup();
          this.updateProfileBadge();
        }
      }
    });

    // HUD Controls
    document.getElementById('btn-hud-pause')?.addEventListener('click', () => { soundEngine.playClick(); this.game.pauseGame(); });
    document.getElementById('btn-hud-sound')?.addEventListener('click', () => {
      soundEngine.playClick();
      soundEngine.toggleMute(!soundEngine.isMuted);
      document.getElementById('btn-hud-sound').innerHTML = soundEngine.isMuted ? '🔇' : '🔊';
    });

    // Pause Modal Buttons
    document.getElementById('btn-pause-resume')?.addEventListener('click', () => { soundEngine.playClick(); this.game.resumeGame(); });
    document.getElementById('btn-pause-restart')?.addEventListener('click', () => { soundEngine.playClick(); this.game.startCountdownFlow(); });
    document.getElementById('btn-pause-settings')?.addEventListener('click', () => { soundEngine.playClick(); this.showModal(this.modalSettings); });
    document.getElementById('btn-pause-main')?.addEventListener('click', () => { soundEngine.playClick(); this.showScreen(this.screenWelcome); });

    // Revive Modal Buttons
    document.getElementById('btn-revive-yes')?.addEventListener('click', () => {
      soundEngine.playClick();
      if (progressManager.useReviveToken()) {
        this.hideModal(this.modalRevive);
        this.game.revivePlayer();
      } else {
        alert('No Revive Tokens available! Earn more from Daily Login & Referral Rewards.');
        this.hideModal(this.modalRevive);
        this.game.enterGameOverLobby();
      }
    });

    document.getElementById('btn-revive-no')?.addEventListener('click', () => {
      soundEngine.playClick();
      this.hideModal(this.modalRevive);
      this.game.enterGameOverLobby();
    });

    // Game Over Lobby Buttons
    document.getElementById('btn-go-again')?.addEventListener('click', () => {
      soundEngine.playClick();
      if (this.isMobileDevice) this.requestFullscreenAuto();
      this.game.startCountdownFlow();
    });
    document.getElementById('btn-go-share')?.addEventListener('click', () => { this.openReferralModal(); });
    document.getElementById('btn-go-main')?.addEventListener('click', () => { soundEngine.playClick(); this.showScreen(this.screenWelcome); });

    // Settings Modal Close
    document.getElementById('btn-close-settings')?.addEventListener('click', () => { soundEngine.playClick(); this.hideModal(this.modalSettings); });

    // Music Track Changer Selector
    document.getElementById('setting-music-track')?.addEventListener('change', (e) => {
      soundEngine.setMusicTrack(e.target.value);
    });

    // Voice Mode & Granular Sliders
    document.getElementById('setting-voice-mode')?.addEventListener('change', (e) => {
      voiceSystem.setMode(e.target.value);
    });

    document.getElementById('setting-mute-all')?.addEventListener('change', (e) => {
      soundEngine.toggleMute(e.target.checked);
    });

    const categories = ['master', 'music', 'train', 'voice', 'sfx', 'ambience'];
    categories.forEach(cat => {
      document.getElementById(`vol-${cat}`)?.addEventListener('input', (e) => {
        soundEngine.setVolume(cat, parseFloat(e.target.value));
        if (cat === 'voice') voiceSystem.setVolume(parseFloat(e.target.value));
      });
    });

    // Character Selector
    document.querySelectorAll('.char-card').forEach(card => {
      card.addEventListener('click', () => {
        const charId = card.getAttribute('data-char');
        document.querySelectorAll('.char-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        if (this.charPreview) this.charPreview.setCharacter(charId);
        document.getElementById('preview-char-name').textContent = charId;
      });
    });

    document.getElementById('btn-select-character')?.addEventListener('click', () => {
      const activeCard = document.querySelector('.char-card.active');
      if (activeCard) {
        const charId = activeCard.getAttribute('data-char');
        if (progressManager.unlockedCharacters.includes(charId)) {
          progressManager.selectedCharacter = charId;
          this.game.player.setCharacterType(charId);
          soundEngine.playPowerup();
          if (this.charPreview) this.charPreview.stop();
          this.showScreen(this.screenWelcome);
        } else {
          const costs = { GIRL: 200, ALIEN: 500, DOG: 800, CAT: 1200, ROBOT: 1500, POLICE: 2000 };
          if (progressManager.unlockCharacter(charId, costs[charId] || 0)) {
            missionManager.updateProgress('char_unlock');
            this.openCharacterScreen();
          } else {
            alert(`Need ${costs[charId]} Coins to unlock ${charId}!`);
          }
        }
      }
    });

    // Map Selector
    document.querySelectorAll('.map-card').forEach(card => {
      card.addEventListener('click', () => {
        const mapId = card.getAttribute('data-map');
        document.querySelectorAll('.map-card').forEach(m => m.classList.remove('active'));
        card.classList.add('active');
      });
    });

    document.getElementById('btn-select-map')?.addEventListener('click', () => {
      const activeCard = document.querySelector('.map-card.active');
      if (activeCard) {
        const mapId = activeCard.getAttribute('data-map');
        if (progressManager.unlockedMaps.includes(mapId)) {
          progressManager.selectedMap = mapId;
          this.game.cityGenerator.setMap(mapId);
          soundEngine.playPowerup();
          this.showScreen(this.screenWelcome);
        }
      }
    });

    // Mission Tabs
    document.getElementById('tab-daily')?.addEventListener('click', () => {
      document.getElementById('tab-daily').classList.add('active');
      document.getElementById('tab-weekly').classList.remove('active');
      this.renderMissions('daily');
    });

    document.getElementById('tab-weekly')?.addEventListener('click', () => {
      document.getElementById('tab-weekly').classList.add('active');
      document.getElementById('tab-daily').classList.remove('active');
      this.renderMissions('weekly');
    });

    // Daily Claim
    document.getElementById('btn-claim-daily')?.addEventListener('click', () => {
      const reward = progressManager.claimDailyReward();
      if (reward) {
        soundEngine.playPowerup();
        this.updateProfileBadge();
        this.openRewardsScreen();
      }
    });
  }

  showAchievementToast(ach) {
    if (!this.achievementToast) return;
    if (this.toastTitle) this.toastTitle.textContent = ach.title;
    if (this.toastIcon) this.toastIcon.textContent = ach.icon || '🏆';

    this.achievementToast.classList.remove('hidden');
    this.achievementToast.classList.add('active');

    setTimeout(() => {
      this.achievementToast.classList.remove('active');
      this.achievementToast.classList.add('hidden');
    }, 3200);
  }

  requestFullscreenAuto() {
    const doc = window.document;
    const docEl = doc.documentElement;
    if (!doc.fullscreenElement && !doc.webkitFullscreenElement) {
      const req = docEl.requestFullscreen || docEl.webkitRequestFullscreen || docEl.mozRequestFullScreen || docEl.msRequestFullscreen;
      if (req) {
        req.call(docEl).catch(() => {});
      }
    }
  }

  toggleFullscreen() {
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFS = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullscreen || docEl.msRequestFullscreen;
    const exitFS = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      if (requestFS) requestFS.call(docEl).catch(err => console.log('Fullscreen failed:', err));
    } else {
      if (exitFS) exitFS.call(doc);
    }
  }

  showScreen(targetScreen) {
    [
      this.screenLoading, this.screenWelcome, this.screenCharacters,
      this.screenMaps, this.screenMissions, this.screenRewards,
      this.screenAchievements, this.screenCountdown, this.screenHUD
    ].forEach(s => {
      if (s) {
        s.classList.add('hidden');
        s.classList.remove('active');
      }
    });
    this.closeAllModals();

    if (targetScreen) {
      targetScreen.classList.remove('hidden');
      targetScreen.classList.add('active');
    }

    if (targetScreen === this.screenWelcome || targetScreen === this.screenCharacters || targetScreen === this.screenMaps || targetScreen === this.screenMissions || targetScreen === this.screenRewards || targetScreen === this.screenAchievements) {
      soundEngine.startLobbyMusic();
    } else if (targetScreen === this.screenCountdown || targetScreen === this.screenHUD) {
      soundEngine.stopLobbyMusic();
    }

    this.updateProfileBadge();
  }

  showModal(modal) { if (modal) modal.classList.remove('hidden'); }
  hideModal(modal) { if (modal) modal.classList.add('hidden'); }

  closeAllModals() {
    [this.modalPause, this.modalRevive, this.modalGameOver, this.modalSettings, this.modalReferral].forEach(m => {
      if (m) m.classList.add('hidden');
    });
  }

  updateProfileBadge() {
    const badge = document.getElementById('welcome-lvl-badge');
    const xpFill = document.getElementById('welcome-xp-fill');
    const coinsVal = document.getElementById('welcome-coins-val');

    if (badge) badge.textContent = `LVL ${progressManager.level}`;
    if (xpFill) {
      const pct = Math.min(100, (progressManager.xp / progressManager.xpToNextLevel) * 100);
      xpFill.style.width = `${pct}%`;
    }
    if (coinsVal) coinsVal.textContent = progressManager.totalCoins.toLocaleString();
  }

  showReviveModal() {
    const tokenVal = document.getElementById('revive-token-val');
    if (tokenVal) tokenVal.textContent = `${progressManager.reviveTokens} 🛡️`;
    voiceSystem.speak('CONTINUE');
    this.showModal(this.modalRevive);
  }

  openCharacterScreen() {
    this.showScreen(this.screenCharacters);
    if (this.charPreview) {
      this.charPreview.setCharacter(progressManager.selectedCharacter);
      this.charPreview.start();
    }
    const charIds = ['GIRL', 'ALIEN', 'DOG', 'CAT', 'ROBOT', 'POLICE'];
    charIds.forEach(id => {
      const tag = document.getElementById(`tag-char-${id}`);
      if (tag && progressManager.unlockedCharacters.includes(id)) {
        tag.className = 'status-tag unlocked';
        tag.textContent = 'UNLOCKED';
      }
    });
  }

  openMapScreen() {
    this.showScreen(this.screenMaps);
    const mapIds = ['NIGHT_METRO', 'DAY_METRO', 'DYNAMIC_DAY_NIGHT', 'MUMBAI_METRO', 'CHENNAI_METRO', 'DHANBAD_RAIL'];
    mapIds.forEach(id => {
      const tag = document.getElementById(`tag-map-${id}`);
      if (tag && progressManager.unlockedMaps.includes(id)) {
        tag.className = 'status-tag unlocked';
        tag.textContent = 'UNLOCKED';
      }
    });
  }

  openMissionsScreen() {
    this.showScreen(this.screenMissions);
    this.renderMissions('daily');
  }

  renderMissions(tab) {
    const container = document.getElementById('missions-list-container');
    if (!container) return;
    container.innerHTML = '';
    const list = (tab === 'daily') ? missionManager.dailyMissions : missionManager.weeklyMissions;

    list.forEach(m => {
      const pct = Math.min(100, (m.current / m.target) * 100);
      const isComplete = m.current >= m.target;

      const tile = document.createElement('div');
      tile.className = 'mission-tile';
      tile.innerHTML = `
        <div class="mission-info">
          <span class="mission-desc">${m.desc}</span>
          <div class="m-progress-bar">
            <div class="m-progress-fill" style="width: ${pct}%"></div>
          </div>
          <span style="font-size: 0.8rem; color: #8a99ad;">${m.current} / ${m.target}</span>
        </div>
        <button class="btn-secondary" style="width: auto; padding: 6px 14px;" ${m.claimed ? 'disabled' : ''}>
          ${m.claimed ? 'CLAIMED' : (isComplete ? 'CLAIM' : `+${m.rewardCoins} 🪙`)}
        </button>
      `;

      const claimBtn = tile.querySelector('button');
      if (isComplete && !m.claimed) {
        claimBtn.className = 'btn-primary';
        claimBtn.addEventListener('click', () => {
          if (missionManager.claimMission(m.id)) {
            this.updateProfileBadge();
            this.renderMissions(tab);
          }
        });
      }
      container.appendChild(tile);
    });
  }

  openRewardsScreen() {
    this.showScreen(this.screenRewards);
    for (let i = 1; i <= 7; i++) {
      const tile = document.getElementById(`day-tile-${i}`);
      if (tile) {
        if (i < progressManager.loginStreak) tile.style.opacity = '0.5';
        else if (i === progressManager.loginStreak) tile.classList.add('highlight');
      }
    }
    const claimBtn = document.getElementById('btn-claim-daily');
    if (claimBtn) {
      claimBtn.disabled = progressManager.loginClaimedToday;
      claimBtn.textContent = progressManager.loginClaimedToday ? 'CLAIMED TODAY' : 'CLAIM DAILY REWARD';
    }
  }

  openAchievementsScreen() {
    this.showScreen(this.screenAchievements);
    const container = document.getElementById('achievements-list-container');
    if (!container) return;
    container.innerHTML = '';
    achievementManager.achievements.forEach(a => {
      const card = document.createElement('div');
      card.className = `achieve-card ${a.unlocked ? 'unlocked' : ''}`;
      card.innerHTML = `
        <span class="achieve-icon">${a.icon}</span>
        <div class="achieve-info">
          <h4>${a.title}</h4>
          <p>${a.desc}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }

  updateLoadingProgress(percent, statusText) {
    const fill = document.getElementById('loading-progress-fill');
    const status = document.getElementById('loading-status-text');
    const pct = document.getElementById('loading-percentage');
    if (fill) fill.style.width = `${percent}%`;
    if (status) status.textContent = statusText;
    if (pct) pct.textContent = `${Math.floor(percent)}%`;
  }

  updateCountdown(numText, subText) {
    if (this.countdownNum) {
      this.countdownNum.textContent = numText;
      this.countdownNum.style.animation = 'none';
      this.countdownNum.offsetHeight;
      this.countdownNum.style.animation = 'countdownPulse 0.8s ease-out infinite';
    }
    if (this.countdownSub) this.countdownSub.textContent = subText;
  }

  updateHUD(score, distanceMeters, coins) {
    if (this.hudScoreVal) this.hudScoreVal.textContent = score.toLocaleString();
    if (this.hudDistanceVal) {
      this.hudDistanceVal.textContent = distanceMeters >= 1000
        ? `${(distanceMeters / 1000).toFixed(2)} KM`
        : `${Math.floor(distanceMeters)} m`;
    }
    if (this.hudCoinsVal) this.hudCoinsVal.textContent = coins.toString();
  }

  updatePowerUpBadges(activePowerups, durations) {
    if (!this.hudPowerupsList) return;
    this.hudPowerupsList.innerHTML = '';
    const labels = {
      AIR_ROCKET: { name: 'ROCKET BOOST', icon: '🚀' },
      JUMP_SHOES: { name: 'SUPER JUMP', icon: '👟' },
      DOUBLE_COIN: { name: '2X COINS', icon: '💎' },
      SAFETY_BUBBLE: { name: 'SAFETY BUBBLE', icon: '🛡️' },
      MAGNET: { name: 'MAGNET', icon: '🧲' },
      SPEED_BOOST: { name: 'BOOST', icon: '⚡' }
    };

    Object.keys(activePowerups).forEach(type => {
      const remaining = activePowerups[type];
      if (remaining > 0) {
        const info = labels[type] || { name: type, icon: '⚡' };
        const total = durations[type] || 10;
        const pct = Math.max(0, (remaining / total) * 100);

        const badge = document.createElement('div');
        badge.className = 'powerup-badge';
        badge.innerHTML = `
          <span class="powerup-icon">${info.icon}</span>
          <div class="powerup-info">
            <span class="powerup-name">${info.name}</span>
            <div class="powerup-timer-bar">
              <div class="powerup-timer-fill" style="width: ${pct}%"></div>
            </div>
          </div>
        `;
        this.hudPowerupsList.appendChild(badge);
      }
    });
  }

  showGameOverLobby(score, distance, coins, bestScore, isNewRecord, xpEarned) {
    document.getElementById('go-score').textContent = score.toLocaleString();
    document.getElementById('go-distance').textContent = distance >= 1000 ? `${(distance / 1000).toFixed(2)} KM` : `${Math.floor(distance)} m`;
    document.getElementById('go-coins').textContent = coins.toString();
    document.getElementById('go-xp').textContent = `+${xpEarned} XP`;

    const banner = document.getElementById('high-score-banner');
    if (banner) {
      if (isNewRecord) banner.classList.remove('hidden');
      else banner.classList.add('hidden');
    }

    this.showModal(this.modalGameOver);
  }
}
