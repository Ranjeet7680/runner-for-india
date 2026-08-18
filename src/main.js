// main.js - Application Entry Point for NEXORA METRO RUNNER
import './style.css';
import { Game } from './core/Game.js';
import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
inject();

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('canvas-container');
  if (container) {
    window.game = new Game(container);
  }
});

