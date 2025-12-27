/**
 * Game Configuration
 * Central location for all game constants and settings
 */

export const GameConfig = {
  // World
  WORLD_WIDTH: 8192,
  WORLD_HEIGHT: 8192,
  
  // Camera
  CAMERA_WIDTH: 1920,
  CAMERA_HEIGHT: 1080,
  CAMERA_ZOOM_MIN: 0.5,
  CAMERA_ZOOM_MAX: 2.0,
  
  // Physics
  PHYSICS_GRAVITY: 0,
  PHYSICS_DEBUG: false,
  
  // Game
  TARGET_FPS: 60,
  TIME_SCALE: 1.0,
  
  // Combat
  DAMAGE_SCALE: 1.0,
  WEAPON_SPREAD: 0.05, // 5% inaccuracy
  
  // AI
  AI_UPDATE_INTERVAL: 500, // ms
  AI_DECISION_THRESHOLD: 1000, // ms
  
  // Rendering
  MAX_PARTICLES: 5000,
  MAX_PROJECTILES: 1000,
  LOD_DISTANCE: 3000, // Level of Detail threshold
  
  // Resources
  STARTING_MINERALS: 500,
  STARTING_ENERGY: 1000,
  STARTING_ALLOY: 100,
  STARTING_TECH_POINTS: 0,
};

export const GameDifficulty = {
  EASY: {
    name: 'Easy',
    playerDamageMultiplier: 1.5,
    enemyDamageMultiplier: 0.5,
    resourceMultiplier: 1.5,
  },
  NORMAL: {
    name: 'Normal',
    playerDamageMultiplier: 1.0,
    enemyDamageMultiplier: 1.0,
    resourceMultiplier: 1.0,
  },
  HARD: {
    name: 'Hard',
    playerDamageMultiplier: 0.8,
    enemyDamageMultiplier: 1.2,
    resourceMultiplier: 0.75,
  },
  INSANE: {
    name: 'Insane',
    playerDamageMultiplier: 0.6,
    enemyDamageMultiplier: 1.5,
    resourceMultiplier: 0.5,
  },
};

export const ShipClasses = {
  FIGHTER: { id: 0, name: 'Fighter', maxHealth: 100 },
  CORVETTE: { id: 1, name: 'Corvette', maxHealth: 500 },
  FRIGATE: { id: 2, name: 'Frigate', maxHealth: 1500 },
  CRUISER: { id: 3, name: 'Cruiser', maxHealth: 5000 },
  BATTLESHIP: { id: 4, name: 'Battleship', maxHealth: 15000 },
  DREADNOUGHT: { id: 5, name: 'Dreadnought', maxHealth: 50000 },
};
