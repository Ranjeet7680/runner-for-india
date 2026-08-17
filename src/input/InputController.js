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

  initOnce() {
    if (this.initialized) return;
    this.initialized = true;

    this.initKeyboardAndSmartTVRemote();
    this.initTouchSwipes();
    this.initOnScreenMobileButtons();
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
        this.emit('left');
      } else if (code === 'ArrowRight' || code === 'KeyD' || keyCode === 39 || keyCode === 22) {
        this.emit('right');
      } else if (code === 'ArrowUp' || code === 'KeyW' || code === 'Space' || keyCode === 38 || keyCode === 19 || keyCode === 32) {
        this.emit('jump');
      } else if (code === 'ArrowDown' || code === 'KeyS' || keyCode === 40 || keyCode === 20) {
        this.emit('slide');
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
      if (e.touches && e.touches.length > 0) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.swipeTriggered = false;
      }
    };

    const handleMove = (e) => {
      if (this.swipeTriggered || !e.touches || e.touches.length === 0) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      const deltaX = currentX - this.touchStartX;
      const deltaY = currentY - this.touchStartY;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (Math.max(absX, absY) >= this.minSwipeDistance) {
        if (absX > absY) {
          if (deltaX > 0) this.emit('right');
          else this.emit('left');
          this.swipeTriggered = true;
        } else {
          if (deltaY < 0) this.emit('jump');
          else this.emit('slide');
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
    const bindBtn = (id, eventName) => {
      const btn = document.getElementById(id);
      if (!btn) return;

      let lastTrigger = 0;
      const handlePress = (e) => {
        const now = Date.now();
        if (now - lastTrigger < 100) return;
        lastTrigger = now;

        if (e.cancelable) e.preventDefault();
        e.stopPropagation();

        btn.classList.add('pressed');
        setTimeout(() => btn.classList.remove('pressed'), 120);
        this.emit(eventName);
      };

      btn.addEventListener('pointerdown', handlePress, { passive: false });
      btn.addEventListener('touchstart', handlePress, { passive: false });
    };

    document.addEventListener('DOMContentLoaded', () => {
      bindBtn('touch-btn-left', 'left');
      bindBtn('touch-btn-right', 'right');
      bindBtn('touch-btn-up', 'jump');
      bindBtn('touch-btn-down', 'slide');
    });

    bindBtn('touch-btn-left', 'left');
    bindBtn('touch-btn-right', 'right');
    bindBtn('touch-btn-up', 'jump');
    bindBtn('touch-btn-down', 'slide');
  }
}
