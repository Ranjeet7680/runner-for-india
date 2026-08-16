// InputController.js - Ultra-Responsive Mobile Finger Swipe & Gesture Engine
export class InputController {
  constructor() {
    this.listeners = {};
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
    this.touchEndY = 0;
    this.isSwiping = false;

    // Ultra-sensitive swipe threshold for instant finger flick response
    this.minSwipeDistance = 18; 

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
        this.isSwiping = true;
      }
    };

    const handleMove = (e) => {
      if (!this.isSwiping || !e.touches || e.touches.length === 0) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      const deltaX = currentX - this.touchStartX;
      const deltaY = currentY - this.touchStartY;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      // Trigger swipe immediately once threshold is reached (low latency)
      if (Math.max(absX, absY) >= this.minSwipeDistance) {
        if (absX > absY) {
          // Horizontal Finger Swipe
          if (deltaX > 0) this.emit('right');
          else this.emit('left');
        } else {
          // Vertical Finger Swipe
          if (deltaY < 0) this.emit('jump');
          else this.emit('slide');
        }

        // Reset tracking point after trigger for smooth continuous swiping
        this.touchStartX = currentX;
        this.touchStartY = currentY;
        this.isSwiping = false;
      }
    };

    const handleEnd = () => {
      this.isSwiping = false;
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
