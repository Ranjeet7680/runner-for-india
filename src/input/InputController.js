// InputController.js - Precise Left/Right & Up/Down Mobile Swipe Control Engine
export class InputController {
  constructor() {
    this.listeners = {};
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.swipeTriggered = false;

    // Minimum distance threshold in pixels for clean swipe registration
    this.minSwipeDistance = 24; 

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
        // Clear separation between Horizontal (Left/Right) and Vertical (Jump/Slide)
        if (absX > absY * 1.1) {
          // Horizontal Finger Swipe
          if (deltaX > 0) {
            this.emit('right'); // Finger moved Right -> Move Character Right
          } else {
            this.emit('left');  // Finger moved Left -> Move Character Left
          }
          this.swipeTriggered = true;
        } else if (absY > absX * 1.1) {
          // Vertical Finger Swipe
          if (deltaY < 0) {
            this.emit('jump');  // Finger moved Up -> Jump
          } else {
            this.emit('slide'); // Finger moved Down -> Slide
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

  initOnScreenButtons() {
    const bindTouch = (id, eventName) => {
      const btn = document.getElementById(id);
      if (!btn) return;

      const trigger = (e) => {
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        this.emit(eventName);
      };

      btn.addEventListener('touchstart', trigger, { passive: false });
      btn.addEventListener('mousedown', trigger);
    };

    document.addEventListener('DOMContentLoaded', () => {
      bindTouch('touch-btn-left', 'left');
      bindTouch('touch-btn-right', 'right');
      bindTouch('touch-btn-up', 'jump');
      bindTouch('touch-btn-down', 'slide');
    });

    bindTouch('touch-btn-left', 'left');
    bindTouch('touch-btn-right', 'right');
    bindTouch('touch-btn-up', 'jump');
    bindTouch('touch-btn-down', 'slide');
  }
}
