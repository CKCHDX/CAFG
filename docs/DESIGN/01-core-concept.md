# CAFG Core Concept & Game Overview

## Executive Summary

CAFG (Command And Fleet Game) is a hybrid real-time strategy and action game where players command massive space fleets while maintaining the ability to directly pilot individual ships. The game emphasizes large-scale battles with 500+ units, custom ship design, and continuous warfare without traditional wave mechanics.

## Core Gameplay Loop

```
Command Fleet → Engage Enemy → Direct Control Ships → 
Build/Upgrade → Expand Fleet → Bigger Battles → Repeat
```

## Game Pillars

### 1. **Dual Control System**
- **Strategic Mode (RTS)**: Top-down tactical view, command entire fleet
- **Tactical Mode (Action)**: First-person cockpit, directly pilot one ship
- **Seamless Switching**: Press TAB to toggle between modes
- **Hybrid Gameplay**: Let AI control some ships while you pilot others

### 2. **Massive Scale Warfare**
- 500-1000+ units on battlefield simultaneously
- No artificial wave mechanics
- Continuous reinforcements and battles
- Ships carry between missions
- Persistent fleet growth

### 3. **Custom Ship Design**
- Modular ship building system
- Design your own hull shapes and colors
- Mount weapons and systems where you want
- Power budgets create meaningful choices
- Loadouts for different mission types

### 4. **Pure 2D Space Combat**
- No 3D rendering (performance + accessibility)
- 2D sprites at scale (5000px+ maps)
- Parallax backgrounds for depth
- Clean visual style
- FX/particle effects for combat

## Game Modes

### Campaign Mode
- 20+ interconnected missions
- Persistent fleet carries between missions
- Resource accumulation
- Tech tree progression
- Optional narrative wrapper

### Skirmish Mode
- Quick battles, no progression
- Customizable difficulty
- Testing ground for ship designs
- Practice gameplay

### Scenario Missions
- **Assault**: Destroy enemy station
- **Defense**: Hold position for time limit
- **Fleet Battle**: Equal opposing fleets
- **Escort**: Protect transport ships
- **Boss Fight**: Epic single-unit threat
- **Survival**: Endless escalating waves

## Victory Conditions

Missions vary, but typically:
- Destroy all enemy capital ships
- Eliminate enemy flagship
- Destroy objective structures
- Survive time limit
- Protect allied units

## Losing Conditions

- Your flagship (super star destroyer) destroyed
- Lose critical objectives
- Lose too many allies
- Time limit expires

## Target Audience

- **RTS Fans**: FTL, StarCraft, Homeworld players
- **Action Players**: Space combat enthusiasts
- **Strategy Gamers**: Those who like Empire at War
- **Casual Players**: Accessible difficulty options

## Unique Selling Points

1. **Hybrid Gameplay**: Rare combination of RTS + Direct Control
2. **Massive Scale**: 500+ units without lag
3. **Custom Ships**: True ship designer, not presets
4. **No Waves**: Continuous warfare feels more organic
5. **2D Aesthetic**: Clean, readable, high performance

## Progression Systems

### Fleet Progression
- Unlock new ship types via tech tree
- Upgrade existing ships
- Build custom variants
- Manage fleet composition

### Resource Management
- Minerals: Ship building material
- Energy: Power system (regenerates)
- Alloy: Advanced materials
- Tech Points: Research currency

### Tech Tree
- Weapons branch: Unlock laser types, missiles, etc.
- Defense branch: Shields, armor, countermeasures
- Ships branch: New hull types and classes
- Systems branch: Engines, sensors, special abilities

## Design Philosophy

### Complexity
- Simple to learn (WASD to move, click to shoot)
- Deep mastery ceiling
- Optional advanced mechanics
- Tooltips and tutorials

### Balance
- No single "best" ship type
- Trade-offs in all designs
- Rock-paper-scissors weapon matchups
- Fleet composition matters

### Accessibility
- Scalable difficulty
- Customizable controls
- Color-blind friendly UI
- Difficulty assists

## Art Direction

### Visual Style
- "Gratuitous Space Battles" meets "FTL"
- Detailed 2D sprites
- Clean UI with military aesthetic
- Bright weapon effects against dark space
- Multiple color schemes (faction colors)

### Audio Design
- Ambient space background
- Satisfying weapon sounds
- Engine rumble/thruster audio
- Explosion effects
- Strategic pause menu music

## Technical Approach

### Engine: Phaser 3
- Excellent for 2D space games
- Built-in physics (Arcade or Matter)
- Good performance for 500+ entities
- Large community and documentation

### Architecture
- Entity-Component System (ECS) for ships
- Spatial partitioning for collision detection
- Object pooling for projectiles/particles
- Separate rendering layers for depth

### Performance Targets
- 60 FPS at 1920x1080
- 500+ units simultaneously
- Smooth camera panning/zooming
- Minimal network latency (single-player focus)

## Development Timeline

### Phase 1 (Weeks 1-2): Architecture
- Project structure
- Engine setup
- Design finalization
- Development pipeline

### Phase 2 (Weeks 3-4): Core Gameplay
- Ship rendering and movement
- Basic combat
- Single ship piloting
- Simple AI opponents

### Phase 3 (Weeks 5-6): Fleet Systems
- Fleet management UI
- RTS commands
- Multi-ship control
- Formation system

### Phase 4 (Weeks 7-8): Advanced Features
- Ship designer tool
- Mission system
- Campaigns
- Polish and optimization

## Success Metrics

- ✅ Playable core game loop in 2 weeks
- ✅ 500+ units without FPS drops
- ✅ Smooth RTS ↔ Action mode switching
- ✅ Engaging combat feel
- ✅ Fun progression system

## Risk Mitigation

**Risk**: Performance with 500+ units
**Mitigation**: Spatial partitioning, LOD system, early optimization

**Risk**: Balancing RTS and Action gameplay
**Mitigation**: Extensive testing, AI difficulty scaling, tutorial modes

**Risk**: Ship designer complexity
**Mitigation**: Start with templates, provide presets, iterative UI design

**Risk**: Content scope
**Mitigation**: MVP focuses on mechanics, missions added incrementally

## Next Steps

1. ✅ Define core concept (THIS DOCUMENT)
2. 🔄 Finalize art direction
3. 🔄 Design combat mechanics
4. 🔄 Create technical architecture
5. 🔄 Begin development

---

**Document Version**: 1.0  
**Last Updated**: December 27, 2025  
**Status**: Approved
