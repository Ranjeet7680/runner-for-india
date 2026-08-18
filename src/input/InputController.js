// InputController.js - Centralized Unified Input System (Keyboard, Mobile Touch, Swipes, Smart TV)
export class InputController {
  constructor() {
    this.listeners = {};
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.swipeTriggered = false;
    this.minSwipeDistance = 18;
    this.initialized = false;

    this.initOnce();
  }

  on(event, callback) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }

  emit(event) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => cb());
    }
  }

  triggerHaptic(pattern = 15) {
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {}
    }
  }

  initOnce() {
    if (this.initialized) return;
    this.initialized = true;

    this.initKeyboardAndSmartTVRemote();
    this.initTouchSwipes();
    this.initOnScreenMobileButtons();
    this.initTouchRippleEffect();
  }

  initTouchRippleEffect() {
    window.addEventListener('pointerdown', (e) => {
      if (e.target && e.target.closest('button, input, select, .char-card, .map-card, .close-btn')) return;
      const ripple = document.createElement('div');
      ripple.className = 'touch-ripple-ring';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 400);
    }, { passive: true });
  }

  initKeyboardAndSmartTVRemote() {
    window.addEventListener('keydown', (e) => {
      const code = e.code;
      const keyCode = e.keyCode || e.which;

      // Prevent default scrolling for Arrow keys, Space, WASD, P, R
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'KeyW', 'KeyS', 'KeyA', 'KeyD'].includes(code) || [37, 38, 39, 40, 32].includes(keyCode)) {
        if (e.cancelable) e.preventDefault();
      }

      if (code === 'ArrowLeft' || code === 'KeyA' || keyCode === 37 || keyCode === 21) {
        this.triggerHaptic(12);
        this.emit('left');
      } else if (code === 'ArrowRight' || code === 'KeyD' || keyCode === 39 || keyCode === 22) {
        this.triggerHaptic(12);
        this.emit('right');
      } else if (code === 'ArrowUp' || code === 'KeyW' || code === 'Space' || keyCode === 38 || keyCode === 19 || keyCode === 32) {
        this.triggerHaptic(20);
        this.emit('jump');
      } else if (code === 'ArrowDown' || code === 'KeyS' || keyCode === 40 || keyCode === 20) {
        this.triggerHaptic(15);
        this.emit('slide');
      } else if (code === 'KeyE' || code === 'ShiftLeft' || code === 'ShiftRight' || keyCode === 16 || keyCode === 69) {
        this.triggerHaptic(25);
        this.emit('ability');
      } else if (code === 'Digit1' || code === 'KeyZ') {
        this.emit('emote', 'DANCE');
      } else if (code === 'Digit2' || code === 'KeyX') {
        this.emit('emote', 'VICTORY');
      } else if (code === 'Digit3' || code === 'KeyC') {
        this.emit('emote', 'FLIP');
      } else if (code === 'Digit4' || code === 'KeyV') {
        this.emit('emote', 'SALUTE');
      } else if (code === 'KeyP' || code === 'Escape' || code === 'Backspace' || keyCode === 10009 || keyCode === 461 || keyCode === 27) {
        this.emit('pause');
      } else if (code === 'KeyR') {
        this.emit('restart');
      } else if (code === 'Enter' || keyCode === 13 || keyCode === 23) {
        this.emit('select');
      } else if (code === 'Backquote' || keyCode === 192) {
        const dbg = document.getElementById('debug-hud-overlay');
        if (dbg) dbg.style.display = (dbg.style.display === 'none' || dbg.style.display === '') ? 'flex' : 'none';
      }
    });
  }

  initTouchSwipes() {
    const handleStart = (e) => {
      if (window.game && window.game.state !== 'PLAYING') return;
      if (e.touches && e.touches.length > 0) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.swipeTriggered = false;
      }
    };

    const handleMove = (e) => {
      if (window.game && window.game.state !== 'PLAYING') return;
      if (this.swipeTriggered || !e.touches || e.touches.length === 0) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      const deltaX = currentX - this.touchStartX;
      const deltaY = currentY - this.touchStartY;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (Math.max(absX, absY) >= this.minSwipeDistance) {
        if (absX > absY) {
          this.triggerHaptic(12);
          if (deltaX > 0) this.emit('right');
          else this.emit('left');
          this.swipeTriggered = true;
        } else {
          if (deltaY < 0) {
            this.triggerHaptic(20);
            this.emit('jump');
          } else {
            this.triggerHaptic(15);
            this.emit('slide');
          }
          this.swipeTriggered = true;
        }
      }
    };

    const handleEnd = () => {
      this.swipeTriggered = false;
    };

    window.addEventListener('touchstart', handleStart, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });
    window.addEventListener('touchend', handleEnd, { passive: true });
  }

  initOnScreenMobileButtons() {
    const lastTriggerMap = new Map();

    const bindBtn = (id, eventName) => {
      const btn = document.getElementById(id);
      if (!btn || btn.dataset.bound) return;
      btn.dataset.bound = 'true';

      const handlePress = (e) => {
        const now = Date.now();
        const last = lastTriggerMap.get(id) || 0;
        if (now - last < 90) return;
        lastTriggerMap.set(id, now);

        if (e.cancelable) e.preventDefault();
        e.stopPropagation();

        const hapDuration = eventName === 'jump' ? 20 : (eventName === 'slide' ? 15 : 12);
        this.triggerHaptic(hapDuration);

        btn.classList.add('pressed');
        this.emit(eventName);
      };

      const handleRelease = (e) => {
        btn.classList.remove('pressed');
      };

      btn.addEventListener('pointerdown', handlePress, { passive: false });
      btn.addEventListener('pointerup', handleRelease, { passive: true });
      btn.addEventListener('pointercancel', handleRelease, { passive: true });
      btn.addEventListener('pointerleave', handleRelease, { passive: true });

      btn.addEventListener('touchstart', handlePress, { passive: false });
      btn.addEventListener('touchend', handleRelease, { passive: true });
      btn.addEventListener('touchcancel', handleRelease, { passive: true });
    };

    const setupAll = () => {
      bindBtn('touch-btn-left', 'left');
      bindBtn('touch-btn-right', 'right');
      bindBtn('touch-btn-up', 'jump');
      bindBtn('touch-btn-down', 'slide');
      bindBtn('touch-btn-ability', 'ability');
      bindBtn('hud-btn-ability', 'ability');
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupAll);
    } else {
      setupAll();
    }
  }
}
