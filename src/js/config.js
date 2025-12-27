/**
 * CAFG - Game Configuration
 * Central configuration for Phaser game engine
 */

import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 1600,
  height: 900,
  backgroundColor: '#0a0e27',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 }, // Space has no gravity
      enableBody: true,
    },
  },
  scene: [], // Scenes will be added in main.js
  render: {
    pixelArt: false,
    antialias: true,
    roundPixels: false,
  },
  fps: {
    target: 60,
    forceSetTimeOut: false,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  audio: {
    disableWebAudio: false,
  },
};

export default config;
