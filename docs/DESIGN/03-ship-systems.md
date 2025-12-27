# CAFG Ship Design & Classification System

## Ship Class Hierarchy

### Scale Overview

```
Dreadnought (3000-8000m)      ████████████████████████ Flagship
Battleship (1000-2000m)       ████████████ Heavy support
Cruiser (500-900m)            ████████ Versatile combat
Frigate (200-400m)            ████ Fast attack
Corvette (50-150m)            ██ Patrol/scout
Bomber (15-25m)               █ Anti-capital specialist
Fighter (8-15m)               █ Interceptor/scout
Station (5000-160000m)        ██████████████ Defensive anchor
```

## Fighter Class

**Role**: Interceptor, scout, harassment
**Size**: 8-15m length (12-20px sprite)
**Cost**: 100 minerals, 20 seconds build time
**Crew**: 1-2

### Stats
```
Health: 100 HP
Shields: 50 HP
Speed: 400 px/s
Acceleration: 500 px/s²
Rotation Speed: 180°/s
Armor: Light (10% reduction)
```

### Loadout
```
Primary: Twin Laser Cannons
  - Damage: 15 DPS
  - Range: 400px
  - Fire rate: 2 shots/sec

Secondary: Missiles (8 total)
  - Damage: 60 per missile
  - Range: 600px
  - Fire rate: 1 shot/sec
```

### Advantages
- Fast and maneuverable
- Cheap to build and replace
- Excellent at taking down other fighters
- Can swarm larger ships

### Disadvantages
- Low damage against capital ships
- Fragile (dies quickly)
- Limited weapons
- Short range

---

## Bomber Class

**Role**: Anti-capital ship specialist
**Size**: 15-25m (20-30px sprite)
**Cost**: 200 minerals, 30 seconds
**Crew**: 2-3

### Stats
```
Health: 150 HP
Shields: 75 HP
Speed: 300 px/s
Acceleration: 350 px/s²
Rotation Speed: 120°/s
Armor: Light (15% reduction)
```

### Loadout
```
Primary: Heavy Cannon
  - Damage: 80 DPS
  - Range: 500px
  - Fire rate: 0.5 shots/sec

Secondary: Torpedoes (12 total)
  - Damage: 200 per torpedo
  - Range: 800px
  - Fire rate: 0.2 shots/sec
```

### Advantages
- Highest damage vs capital ships
- Better armor than fighters
- Long-range weapons
- Effective against shields

### Disadvantages
- Slower than fighters
- Vulnerable to fighter swarms
- Limited ammunition
- Less maneuverable

---

## Corvette Class

**Role**: Patrol, escort, anti-fighter
**Size**: 50-150m (40-60px sprite)
**Cost**: 500 minerals, 1 minute
**Crew**: 10-30

### Stats
```
Health: 500 HP
Shields: 250 HP
Speed: 250 px/s
Acceleration: 250 px/s²
Rotation Speed: 90°/s
Armor: Light (20% reduction)
```

### Loadout
```
Primary: Turbolaser Turrets (3x)
  - Damage: 25 DPS each
  - Range: 450px
  - Fire rate: 1.5 shots/sec
  - Auto-aim turrets

Secondary: Missile Pod
  - Damage: 100 per missile
  - Range: 600px
  - Fire rate: 0.5 shots/sec
```

### Advantages
- Fast enough for patrol
- Multiple turrets (auto-defend)
- Good vs fighter swarms
- Balanced offense/defense

### Disadvantages
- Relatively weak vs capitals
- Medium armor
- Still fragile alone

---

## Frigate Class

**Role**: Fast attack, escort, support
**Size**: 200-400m (60-100px sprite)
**Cost**: 1500 minerals + 500 alloy, 2 minutes
**Crew**: 50-200

### Stats
```
Health: 1500 HP
Shields: 750 HP  
Speed: 180 px/s
Acceleration: 200 px/s²
Rotation Speed: 60°/s
Armor: Medium (25% reduction)
Hangar: 0 fighters
```

### Loadout
```
Primary: Turbolaser Turrets (6x)
  - Damage: 25 DPS each
  - Range: 500px
  - Fire rate: 1.5 shots/sec

Secondary: Torpedoes (20 total)
  - Damage: 180 per torpedo
  - Range: 800px
  - Fire rate: 0.3 shots/sec
```

### Advantages
- Still fast for a capital
- Decent firepower
- Good shield capacity
- Reliable workhorse

### Disadvantages
- Can't carry fighters
- Outgunned by larger capitals
- Medium armor

---

## Cruiser Class

**Role**: Heavy combat, versatile, backbone
**Size**: 500-900m (100-150px sprite)
**Cost**: 3000 minerals + 1500 alloy, 4 minutes
**Crew**: 500-2000

### Stats
```
Health: 5000 HP
Shields: 2500 HP
Speed: 120 px/s
Acceleration: 150 px/s²
Rotation Speed: 45°/s
Armor: Heavy (40% reduction)
Hangar: 12 fighters
```

### Loadout
```
Primary: Turbolaser Turrets (12x)
  - Damage: 30 DPS each
  - Range: 550px
  - Fire rate: 1 shot/sec
  - Multiple hardpoints

Secondary: Torpedo Launchers (2x)
  - Damage: 200 per torpedo
  - Range: 900px
  - Fire rate: 0.5 shots/sec each
  - 50 total ammunition

Tertiary: Ion Cannon
  - Damage: 50 DPS
  - Range: 600px
  - Effect: Disables shields temporarily
```

### Advantages
- Heavy firepower
- Can carry fighters
- Strong shields and armor
- Balanced stats
- Flagship-worthy

### Disadvantages
- Slower movement
- Expensive to build
- Expensive to replace
- High resource drain

---

## Battleship Class

**Role**: Fleet anchor, siege, heavy support
**Size**: 1000-2000m (150-250px sprite)
**Cost**: 8000 minerals + 4000 alloy, 10 minutes
**Crew**: 5000-20000

### Stats
```
Health: 15000 HP
Shields: 7500 HP
Speed: 80 px/s
Acceleration: 100 px/s²
Rotation Speed: 30°/s
Armor: Very Heavy (50% reduction)
Hangar: 48 fighters
```

### Loadout
```
Primary: Turbolaser Turrets (20x)
  - Damage: 35 DPS each
  - Range: 600px
  - Fire rate: 1 shot/sec

Secondary: Heavy Cannons (2x)
  - Damage: 400 DPS each
  - Range: 800px
  - Fire rate: 0.25 shots/sec

Tertiary: Torpedo Launchers (4x)
  - Damage: 250 per torpedo
  - Range: 1000px
  - Fire rate: 0.3 shots/sec each
  - 100 total ammunition

Quaternary: Point Defense
  - Damage: 10 DPS per turret (8x)
  - Range: 300px
  - Auto-fires at missiles/fighters
```

### Advantages
- Massive firepower
- Huge health pool
- Heavy armor
- Can carry many fighters
- Area denial capability

### Disadvantages
- Very slow
- Expensive to build and maintain
- Slow to turn
- Large target
- Takes forever to rebuild if lost

---

## Dreadnought Class (Flagship)

**Role**: Super flagship, superweapon, command center
**Size**: 3000-8000m (300-500px sprite)
**Cost**: 10000 minerals + 5000 alloy, 20 minutes
**Crew**: 50000-280000

### Stats
```
Health: 50000 HP
Shields: 25000 HP
Speed: 50 px/s
Acceleration: 50 px/s²
Rotation Speed: 15°/s
Armor: Ultra Heavy (60% reduction)
Hangar: 144 fighters
```

### Loadout
```
Primary: Turbolaser Turrets (60x)
  - Damage: 40 DPS each
  - Range: 650px
  - Fire rate: 1 shot/sec

Secondary: Heavy Cannons (6x)
  - Damage: 500 DPS each
  - Range: 900px
  - Fire rate: 0.2 shots/sec

Tertiary: Torpedo Launchers (8x)
  - Damage: 300 per torpedo
  - Range: 1200px
  - Fire rate: 0.2 shots/sec each
  - 200 total ammunition

Point Defense: 20x turrets
  - Damage: 15 DPS per turret
  - Range: 400px
  - Auto-fires constantly

Superweapon: Planetary Annihilator
  - Damage: 5000 total
  - Range: Unlimited
  - Fire rate: Once per mission
  - Charge time: 60 seconds
```

### Advantages
- Ultimate firepower
- Superweapon capability
- Can anchor entire fleet
- Regenerates shields
- Can be controlled directly
- Presence affects morale (AI)

### Disadvantages
- Extremely slow
- Takes forever to build
- Expensive to maintain
- Losing it = mission failure
- Overkill vs smaller threats

---

## Space Station

**Role**: Defensive anchor, production hub, objective
**Type**: Stationary structure
**Build Requirements**: Base established at location
**Construction Time**: 30+ minutes

### Stats
```
Health: Varies (10000-100000)
Shields: Sector-based (regenerating)
Size: 400-800px (massive)
Mobility: None (static)
Hangar: 50-200 fighters
```

### Defenses
```
Turbolaser Turrets: 40x
  - Damage: 40 DPS each
  - Range: 700px
  - Auto-targeting

Torpedo Launchers: 8x
  - Damage: 300 per shot
  - Unlimited ammunition
  - Auto-targeting

Point Defense: 20x
  - Auto-fires at missiles/fighters
  - Range: 400px

Shield Generators
  - Can be overloaded
  - Regenerate if unpressured
  - Can be selectively disabled
```

### Advantages
- Massive firepower
- Defensive advantage
- Unlimited ammunition
- Shields regenerate
- Strategic objective

### Disadvantages
- Cannot move
- Can be destroyed
- Vulnerable to coordinated assault
- Can be bypassed

---

## Ship Design Philosophy

### Balance Principles

1. **No single "best" ship**
   - Each class has strengths and weaknesses
   - Rock-paper-scissors matchups
   - Fleet composition matters

2. **Scale matters**
   - Larger = slower but stronger
   - Smaller = faster but fragile
   - Makes positioning critical

3. **Specialization trades off versatility**
   - Bombers great vs capitals, weak vs fighters
   - Fighters great vs fighters, weak vs capitals
   - Cruisers decent at everything

4. **Cost reflects power**
   - Fighter: 1 unit cost
   - Cruiser: 30 unit cost
   - Dreadnought: 100 unit cost
   - Forces tactical decisions

### Customization System

Players can modify:
- Weapon loadouts (within power budget)
- Shield/Armor ratios
- Engine capacity (affects speed)
- Specialized systems (ion cannons, cloak, etc.)
- Color schemes (cosmetic)

### Pre-Built Templates

For each class, provide:
1. **Balanced**: Good at everything
2. **Offensive**: Heavy weapons, weak defense
3. **Defensive**: Heavy shields/armor, light weapons
4. **Support**: Buffs/heals allies, utility focus
5. **Specialized**: Class-specific builds

---

**Document Version**: 1.0  
**Last Updated**: December 27, 2025  
**Status**: Approved
