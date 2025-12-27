/**
 * CAFG - Command And Fleet Game
 * Main Entry Point
 * 
 * This file initializes the Phaser game instance and sets up
 * the core game systems.
 */

// Configuration
const CONFIG = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 },
      enableBody: true,
    },
  },
  scene: [],
  render: {
    pixelArt: false,
    antialias: true,
  },
  fps: {
    target: 60,
    forceSetTimeOut: true,
  },
};

/**
 * Initialize the game
 */
function initGame() {
  console.log('CAFG - Command And Fleet Game [v0.1.0-alpha]');
  console.log('Initializing...');
  
  // Create game instance
  const game = new Phaser.Game(CONFIG);
  
  console.log('Game instance created');
  console.log('Ready to load scenes');
  
  return game;
}

/**
 * Entry point
 */
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  initGame();
});

export { initGame };
