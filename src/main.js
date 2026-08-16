// main.js - Application Entry Point for NEXORA METRO RUNNER
import './style.css';
import { Game } from './core/Game.js';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('canvas-container');
  if (container) {
    window.game = new Game(container);
  }
});
