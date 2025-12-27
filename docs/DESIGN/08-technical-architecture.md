# CAFG Technical Architecture

## Technology Stack

### Core Engine
**Phaser 3** - HTML5 Game Framework
```
Version: 3.55.2+
Physics: Arcade Physics
Renderer: Canvas 2D (WebGL fallback)
Input: Keyboard, Mouse, Gamepad

Why Phaser 3:
  ✓ Excellent 2D support
  ✓ Built-in physics
  ✓ Large community
  ✓ Good performance
  ✓ Cross-platform
  ✓ Easy sprite management
```

### Build & Bundling
**Webpack 5**
```
Module Bundler: Webpack 5
Dev Server: webpack-dev-server
Loader: Babel (ES6+ transpilation)
Plugin: HtmlWebpackPlugin
Optimization: TerserPlugin (minification)
```

### Language
**JavaScript ES6+**
```
Language: ECMAScript 2020+
Modules: ES6 import/export
Strict Mode: Enabled
Transpilation: Babel
```

### Testing
**Jest**
```
Framework: Jest 29+
Coverage: Istanbul (nyc)
Target: 80%+ coverage
Types: No TypeScript (pure JS)
```

### Version Control
**Git + GitHub**
```
Repository: https://github.com/CKCHDX/CAFG
Branches: main, develop, feature/*
CI/CD: GitHub Actions
```

---

## Architecture Layers

### 1. Core Engine Layer

**GameEngine** (Main controller)
```
Responsibilities:
  - Initialize Phaser game
  - Manage game states
  - Handle game loop
  - Coordinate subsystems

File: src/js/core/game-engine.js

Class: GameEngine
  - initialize(config)
  - update(deltaTime)
  - render()
  - shutdown()
```

**PhysicsEngine** (Movement & collision)
```
Responsibilities:
  - Ship movement
  - Collision detection
  - Spatial partitioning
  - Force calculations

File: src/js/core/physics-engine.js

Used for:
  - Ship velocity updates
  - Collision checks
  - Obstacle avoidance (AI)
  - Proximity queries
```

**Renderer** (Visual output)
```
Responsibilities:
  - Sprite rendering
  - Camera management
  - UI rendering
  - Particle effects
  - Effects rendering

File: src/js/core/renderer.js

Systems:
  - Background layers (parallax)
  - Game objects
  - UI overlay
  - Debug rendering
```

**InputManager** (User input)
```
Responsibilities:
  - Keyboard input capture
  - Mouse input handling
  - Gamepad support
  - Input event dispatching

File: src/js/core/input-manager.js

Events:
  - keyDown, keyUp
  - mouseMove, click, rightClick
  - gamepadInput
```

### 2. Entity Layer

**Entity-Component System (ECS)**
```
Basic Structure:

Entity (ID-based)
  ├─ Components (data containers)
  │   ├─ TransformComponent (position, rotation)
  │   ├─ HealthComponent (HP, shields, armor)
  │   ├─ PhysicsComponent (velocity, acceleration)
  │   ├─ RenderComponent (sprite, animation)
  │   └─ AIComponent (behavior state)
  │
  └─ Systems (behavior processors)
      ├─ MovementSystem
      ├─ CombatSystem
      ├─ RenderSystem
      └─ AISystem
```

**File Structure**
```
src/js/entities/
├─ entity-manager.js       (ECS coordinator)
├─ components/
│   ├─ transform.js
│   ├─ health.js
│   ├─ physics.js
│   ├─ render.js
│   ├─ weapon.js
│   └─ ai.js
├─ systems/
│   ├─ movement-system.js
│   ├─ combat-system.js
│   ├─ render-system.js
│   └─ ai-system.js
└─ prefabs/
    ├─ ship.js
    ├─ projectile.js
    ├─ particle.js
    └─ environment.js
```

### 3. Gameplay Layer

**FleetManager**
```
Responsibilities:
  - Track player fleet
  - Fleet UI synchronization
  - Ship grouping & selection
  - Fleet commands

File: src/js/gameplay/fleet-manager.js

Methods:
  - addShip(ship)
  - removeShip(ship)
  - selectShips(ships)
  - issueCommand(command, target)
  - updateFleetUI()
```

**CombatSystem**
```
Responsibilities:
  - Weapon firing
  - Damage calculation
  - Targeting logic
  - Effect spawning

File: src/js/gameplay/combat-system.js

Methods:
  - fireWeapon(ship, weapon)
  - calculateDamage(weapon, target, distance)
  - spawnExplosion(position, size)
  - updateCombat(deltaTime)
```

**MissionSystem**
```
Responsibilities:
  - Mission loading
  - Objective tracking
  - Victory/defeat detection
  - Progress saving

File: src/js/gameplay/mission-system.js

Methods:
  - loadMission(missionID)
  - checkObjectives()
  - checkVictoryCondition()
  - checkDefeatCondition()
  - saveMission()
```

**AIDirector**
```
Responsibilities:
  - Enemy AI decision making
  - Fleet tactics
  - Difficulty scaling
  - Dynamic adjustments

File: src/js/gameplay/ai-director.js

Methods:
  - updateAI(deltaTime)
  - issueAICommand(ship)
  - evaluateThreat()
  - adjustDifficulty()
```

### 4. UI Layer

**HUD** (Head-up display)
```
Components:
  - Crosshair
  - Status bars (health, shields, energy)
  - Weapon info
  - Target info
  - Minimap
  - Damage numbers

File: src/js/ui/hud.js
```

**FleetPanel** (Fleet management UI)
```
Components:
  - Ship list
  - Selected ship details
  - Commands panel
  - Status indicators

File: src/js/ui/fleet-panel.js
```

**ShipDesigner** (Ship customization)
```
Components:
  - Hull selector
  - Component library
  - Design canvas
  - Stats display
  - Save/load

File: src/js/ui/ship-designer.js
```

**TacticalMap** (Strategic overview)
```
Components:
  - Map display
  - Unit markers
  - Order visualization
  - Range indicators

File: src/js/ui/tactical-map.js
```

**Menus** (Main UI)
```
Screens:
  - Main Menu
  - Pause Menu
  - Settings
  - Mission Briefing
  - Game Over

File: src/js/ui/menus.js
```

### 5. Utilities Layer

**MathUtils**
```
Functions:
  - distance(p1, p2)
  - angle(p1, p2)
  - normalize(vector)
  - lerp(a, b, t)
  - clamp(value, min, max)
  - randomRange(min, max)

File: src/js/utils/math-utils.js
```

**CollisionDetection**
```
Functions:
  - circleIntersect(c1, c2)
  - lineIntersect(l1, l2)
  - rectangleIntersect(r1, r2)
  - pointInCircle(p, c)
  - raycast(from, to, obstacles)

File: src/js/utils/collision-detection.js
```

**SaveSystem**
```
Functions:
  - saveGame(gameState)
  - loadGame(slot)
  - saveMission(missionState)
  - loadMission(missionID)
  - deleteGame(slot)
  - getSaveSlots()

File: src/js/utils/save-system.js

Storage: localStorage (browser)
Format: JSON
```

**DebugTools**
```
Functions:
  - drawGrid(graphics)
  - drawPathfinding(graphics, path)
  - drawColliders(graphics, objects)
  - showStats()
  - showLog(message)
  - toggleDebugMode()

File: src/js/utils/debug-tools.js
```

---

## Data Flow

### Input Flow
```
User Input
    ↓
InputManager (captures)
    ↓
Control Manager (interprets)
    ↓
Command System (executes)
    ↓
Gameplay Layer (updates state)
    ↓
Renderer (displays result)
```

### Update Loop
```
Phaser.Game.update()
    ↓
├─ InputManager.update()         → Handle input
├─ PhysicsEngine.update()        → Move entities
├─ CombatSystem.update()         → Process combat
├─ AIDirector.update()           → Update AI
├─ MissionSystem.update()        → Check objectives
└─ Renderer.update()             → Render scene
    ↓
Display next frame
```

### Entity Creation
```
Player/Code requests: new Ship(config)
    ↓
ShipPrefab factory creates Entity
    ↓
Add Components (Transform, Health, Physics, etc.)
    ↓
Systems start processing entity
    ↓
Renderer draws on screen
    ↓
Entity participates in game
```

---

## Performance Optimization

### Spatial Partitioning
```
Quadtree Implementation:
  - Divides world into 4x4 sections
  - Only check collisions within nearby sections
  - Reduces O(n²) to O(log n) checks
  - Updated every frame

Benefit: Handles 500+ ships efficiently
File: src/js/utils/quadtree.js
```

### Object Pooling
```
Pooled Objects:
  - Projectiles (bullet hell)
  - Particles (effects)
  - Explosions (recycled)
  - Damage numbers (UI)

Benefit:
  - Prevents garbage collection stutters
  - Reuses allocated memory
  - Faster spawn/despawn

File: src/js/utils/object-pool.js
```

### Level of Detail (LOD)
```
Distant Ships:
  - Simple physics
  - No detailed animations
  - Lower update frequency
  - Icon rendering

Near Ships:
  - Full physics
  - Detailed animation
  - Every-frame updates
  - Sprite rendering

Implementation:
  - Check distance from camera
  - Adjust update frequency
  - Swap rendering mode
```

### Culling
```
Screen-space Culling:
  - Don't render off-screen entities
  - Don't update off-screen AI
  - Reduces draw calls
  - Frees CPU cycles

Implementation:
  - Check if entity in camera view
  - Skip update for far entities
  - Use Phaser's built-in culling
```

### Batch Rendering
```
Sprite Batching:
  - Group same-sprite renders
  - Single draw call per sprite type
  - Uses texture atlases
  - Reduces GPU overhead

Implementation:
  - Use Phaser sprite groups
  - Organize by sprite texture
  - Phaser handles batching automatically
```

---

## File Structure

```
CAFG/
├─ src/
│  ├─ js/
│  │  ├─ main.js                    # Entry point
│  │  ├─ config.js                  # Game constants
│  │  ├─ core/
│  │  │  ├─ game-engine.js
│  │  │  ├─ physics-engine.js
│  │  │  ├─ renderer.js
│  │  │  └─ input-manager.js
│  │  ├─ entities/
│  │  │  ├─ entity-manager.js
│  │  │  ├─ components/
│  │  │  ├─ systems/
│  │  │  └─ prefabs/
│  │  ├─ gameplay/
│  │  │  ├─ fleet-manager.js
│  │  │  ├─ combat-system.js
│  │  │  ├─ mission-system.js
│  │  │  └─ ai-director.js
│  │  ├─ ui/
│  │  │  ├─ hud.js
│  │  │  ├─ fleet-panel.js
│  │  │  ├─ ship-designer.js
│  │  │  ├─ tactical-map.js
│  │  │  └─ menus.js
│  │  └─ utils/
│  │      ├─ math-utils.js
│  │      ├─ collision-detection.js
│  │      ├─ save-system.js
│  │      ├─ debug-tools.js
│  │      └─ quadtree.js
│  ├─ css/
│  │  ├─ main.css
│  │  ├─ ui.css
│  │  ├─ animations.css
│  │  └─ responsive.css
│  └─ index.html
├─ assets/
│  ├─ sprites/
│  ├─ audio/
│  ├─ fonts/
│  └─ data/
├─ tests/
│  ├─ unit/
│  ├─ integration/
│  └─ e2e/
├─ docs/
│  ├─ DESIGN/
│  ├─ README.md
│  └─ ROADMAP.md
├─ config/
│  ├─ webpack.config.js
│  ├─ .eslintrc.json
│  └─ jest.config.js
└─ package.json
```

---

## Build Process

### Development Build
```bash
npm run dev

1. Webpack watches files
2. Transpiles ES6 → ES5
3. Bundles JavaScript
4. Injects into HTML
5. Serves on localhost:8080
6. Hot reload on save
```

### Production Build
```bash
npm run build:prod

1. Minifies JavaScript (Terser)
2. Optimizes images
3. Extracts CSS
4. Generates source maps
5. Output to dist/
6. Ready for deployment
```

---

## State Management

### Game State
```javascript
GameState = {
  phase: 'menu' | 'loading' | 'playing' | 'paused' | 'gameOver',
  mission: { id, name, objectives, ... },
  player: {
    fleet: [ships...],
    resources: { minerals, energy, alloy, tech },
    unlockedTech: [...],
    ships: { templates... }
  },
  enemy: {
    fleets: [...],
    difficulty: 1.0
  },
  world: {
    entities: [...],
    time: 0,
    paused: false
  }
}
```

### Entity State
```javascript
ShipEntity = {
  id: 'ship_001',
  team: 'player' | 'enemy' | 'neutral',
  position: { x, y },
  velocity: { x, y },
  rotation: 0,
  health: 100,
  maxHealth: 100,
  shields: 50,
  maxShields: 50,
  energy: 100,
  maxEnergy: 100,
  weapons: [...],
  status: 'idle' | 'moving' | 'attacking' | 'retreating' | 'damaged'
}
```

---

## API Design

### Game Engine API
```javascript
// Initialize
const game = new GameEngine(config);

// Scene management
game.loadScene(sceneKey);
game.switchScene(sceneKey);

// Game control
game.pause();
game.resume();
game.reset();

// Events
game.on('sceneStart', callback);
game.on('shipDestroyed', callback);
game.on('missionComplete', callback);
```

### Entity API
```javascript
// Create
const ship = EntityManager.createShip(shipConfig);
const projectile = EntityManager.createProjectile(proj Config);

// Query
const ships = EntityManager.getEntitiesWithComponent('HealthComponent');
const nearby = EntityManager.getEntitiesInArea(x, y, radius);

// Commands
ship.moveTo(x, y);
ship.attackTarget(targetShip);
ship.takeDamage(amount);
```

### Fleet API
```javascript
// Management
FleetManager.addShip(ship);
FleetManager.removeShip(ship);
FleetManager.selectShips(ships);

// Commands
FleetManager.move(group, x, y);
FleetManager.attack(group, target);
FleetManager.formation(group, type);
```

---

## Testing Strategy

### Unit Tests
```
Test Files: src/**/*.test.js
Coverage Target: 80%+
Focus Areas:
  - Math utilities
  - Damage calculations
  - AI decision logic
  - Save/load system
```

### Integration Tests
```
Test: Core game systems together
  - Physics + Rendering
  - Combat + UI updates
  - Fleet manager + AI
```

### E2E Tests
```
Test: Full game scenarios
  - Complete mission
  - Win condition
  - Save/load game
```

### Manual Testing
```
Regular testing:
  - Performance profiling (DevTools)
  - UI responsiveness
  - Game feel/balance
  - Edge cases
```

---

## Deployment

### Hosting
```
Static hosting (GitHub Pages):
  - Build to dist/
  - Push to gh-pages branch
  - Auto-deploy via CI/CD

Alternatively:
  - Netlify
  - Vercel
  - Custom server
```

### Performance Targets
```
FPS: 60 (locked)
Load Time: < 5 seconds
Memory: < 500MB
Frame Time: < 16.67ms
Network: N/A (single-player)
```

---

**Document Version**: 1.0  
**Last Updated**: December 27, 2025  
**Status**: Approved
