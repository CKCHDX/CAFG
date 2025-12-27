/**
 * CAFG - Command And Fleet Game
 * Main Entry Point
 */

import Phaser from 'phaser';
import config from './config';

/**
 * Demo Scene - Shows basic space environment
 */
class DemoScene extends Phaser.Scene {
  constructor() {
    super({ key: 'DemoScene' });
  }

  create() {
    // Hide loading screen
    const loading = document.getElementById('loading');
    if (loading) {
      loading.style.display = 'none';
    }

    // Create starfield background
    this.createStarfield();

    // Add title text
    const title = this.add.text(
      this.cameras.main.centerX,
      100,
      'CAFG - Command And Fleet Game',
      {
        fontSize: '48px',
        color: '#00ff88',
        fontFamily: 'Arial, sans-serif',
        stroke: '#000000',
        strokeThickness: 4
      }
    );
    title.setOrigin(0.5);

    // Add version info
    const version = this.add.text(
      this.cameras.main.centerX,
      160,
      'v0.1.0-alpha - Development Build',
      {
        fontSize: '20px',
        color: '#888888',
        fontFamily: 'Arial, sans-serif'
      }
    );
    version.setOrigin(0.5);

    // Add instructions
    const instructions = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      'Game Initialized Successfully!\n\n' +
      'This is a placeholder scene.\n' +
      'Core game systems will be implemented next.\n\n' +
      'Press F12 to open developer console for logs.',
      {
        fontSize: '24px',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        align: 'center',
        lineSpacing: 10
      }
    );
    instructions.setOrigin(0.5);

    // Add status text at bottom
    const status = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.height - 50,
      'Status: Ready | FPS: 60 | Engine: Phaser ' + Phaser.VERSION,
      {
        fontSize: '16px',
        color: '#00ff88',
        fontFamily: 'Arial, sans-serif'
      }
    );
    status.setOrigin(0.5);

    console.log('✅ CAFG Demo Scene loaded successfully');
    console.log('📊 Canvas size:', this.cameras.main.width, 'x', this.cameras.main.height);
    console.log('🎮 Phaser version:', Phaser.VERSION);
  }

  createStarfield() {
    // Create animated starfield
    const stars = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      const x = Phaser.Math.Between(0, this.cameras.main.width);
      const y = Phaser.Math.Between(0, this.cameras.main.height);
      const size = Phaser.Math.Between(1, 3);
      const alpha = Phaser.Math.FloatBetween(0.3, 1);

      const star = this.add.circle(x, y, size, 0xffffff, alpha);
      stars.push(star);

      // Add twinkling effect
      this.tweens.add({
        targets: star,
        alpha: alpha * 0.3,
        duration: Phaser.Math.Between(1000, 3000),
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'
      });
    }
  }

  update() {
    // Game loop - will be used for entity updates
  }
}

/**
 * Initialize the game
 */
function initGame() {
  console.log('🚀 CAFG - Command And Fleet Game [v0.1.0-alpha]');
  console.log('⚙️  Initializing game engine...');

  // Add our demo scene to config
  const gameConfig = {
    ...config,
    scene: [DemoScene]
  };

  // Create game instance
  const game = new Phaser.Game(gameConfig);

  console.log('✅ Game instance created');
  console.log('📦 Ready to load scenes');

  return game;
}

/**
 * Entry point
 */
window.addEventListener('DOMContentLoaded', () => {
  console.log('📄 DOM Content Loaded');
  initGame();
});

export { initGame };
