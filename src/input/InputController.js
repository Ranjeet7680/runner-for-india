// InputController.js - Keyboard, Touch Swipe & Mobile D-Pad Control Engine
export class InputController {
  constructor() {
    this.listeners = {};
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
    this.touchEndY = 0;

    this.minSwipeDistance = 30; // Threshold in pixels for quick responsive swipe

    this.initKeyboard();
    this.initTouchSwipes();
    this.initOnScreenButtons();
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

  initKeyboard() {
    window.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyA':
          this.emit('left');
          break;
        case 'ArrowRight':
        case 'KeyD':
          this.emit('right');
          break;
        case 'ArrowUp':
        case 'KeyW':
        case 'Space':
          this.emit('jump');
          break;
        case 'ArrowDown':
        case 'KeyS':
          this.emit('slide');
          break;
        case 'KeyP':
        case 'Escape':
          this.emit('pause');
          break;
      }
    });
  }

  initTouchSwipes() {
    window.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      if (e.changedTouches.length > 0) {
        this.touchEndX = e.changedTouches[0].clientX;
        this.touchEndY = e.changedTouches[0].clientY;
        this.handleSwipe();
      }
    }, { passive: true });
  }

  handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;

    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    if (Math.max(absX, absY) > this.minSwipeDistance) {
      if (absX > absY) {
        // Horizontal Swipe
        if (deltaX > 0) this.emit('right');
        else this.emit('left');
      } else {
        // Vertical Swipe
        if (deltaY < 0) this.emit('jump'); // Swipe Up -> Jump
        else this.emit('slide');          // Swipe Down -> Slide
      }
    }
  }

  initOnScreenButtons() {
    document.addEventListener('DOMContentLoaded', () => {
      this.bindTouchButton('touch-btn-left', 'left');
      this.bindTouchButton('touch-btn-right', 'right');
      this.bindTouchButton('touch-btn-up', 'jump');
      this.bindTouchButton('touch-btn-down', 'slide');
    });

    // Immediate bind attempt if DOM is already parsed
    this.bindTouchButton('touch-btn-left', 'left');
    this.bindTouchButton('touch-btn-right', 'right');
    this.bindTouchButton('touch-btn-up', 'jump');
    this.bindTouchButton('touch-btn-down', 'slide');
  }

  bindTouchButton(id, eventName) {
    const btn = document.getElementById(id);
    if (!btn) return;

    const trigger = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.emit(eventName);
    };

    btn.addEventListener('touchstart', trigger, { passive: false });
    btn.addEventListener('mousedown', trigger);
  }
}
