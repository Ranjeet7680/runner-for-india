// InputController.js - Smart TV Remote (Samsung Tizen, LG WebOS, Android TV) & Touch Control Engine
export class InputController {
  constructor() {
    this.listeners = {};
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.swipeTriggered = false;

    // Minimum distance threshold in pixels for clean swipe registration
    this.minSwipeDistance = 18; 

    this.initKeyboardAndSmartTVRemote();
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

  initKeyboardAndSmartTVRemote() {
    window.addEventListener('keydown', (e) => {
      const code = e.code;
      const keyCode = e.keyCode || e.which;

      // Smart TV Remote Key Codes:
      // Samsung Tizen / LG WebOS / Android TV / Fire TV / Apple TV
      // 37 / 21 = Left, 39 / 22 = Right, 38 / 19 = Up, 40 / 20 = Down, 13 / 23 = OK/Enter, 10009 / 461 / 27 = Back/Return

      if (code === 'ArrowLeft' || code === 'KeyA' || keyCode === 37 || keyCode === 21) {
        e.preventDefault();
        this.emit('left');
      } else if (code === 'ArrowRight' || code === 'KeyD' || keyCode === 39 || keyCode === 22) {
        e.preventDefault();
        this.emit('right');
      } else if (code === 'ArrowUp' || code === 'KeyW' || keyCode === 38 || keyCode === 19) {
        e.preventDefault();
        this.emit('jump');
      } else if (code === 'ArrowDown' || code === 'KeyS' || keyCode === 40 || keyCode === 20) {
        e.preventDefault();
        this.emit('slide');
      } else if (code === 'Space' || code === 'Enter' || keyCode === 13 || keyCode === 23) {
        // Smart TV OK / Select Button
        e.preventDefault();
        this.emit('select');
        this.emit('jump');
      } else if (code === 'Escape' || code === 'KeyP' || code === 'Backspace' || keyCode === 10009 || keyCode === 461 || keyCode === 27) {
        // Smart TV Back / Return Button
        e.preventDefault();
        this.emit('pause');
        this.emit('back');
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
          if (deltaX > 0) {
            this.emit('right');
          } else {
            this.emit('left');
          }
          this.swipeTriggered = true;
        } else {
          if (deltaY < 0) {
            this.emit('jump');
          } else {
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
