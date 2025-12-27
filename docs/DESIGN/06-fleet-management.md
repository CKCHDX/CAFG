# CAFG Fleet Management & Progression

## Resource System

### Resource Types

#### Minerals
**Primary building material**
```
Acquisition:
  - Mine asteroids (Mining ships)
  - Salvage destroyed ships
  - Mission rewards
  - Trade (future)
  - Base production (very slow)

Use:
  - Build ships (primary cost)
  - Construct bases
  - Upgrade facilities

Storage: Station silos
Capacity: Upgradeable
Decay: None (stable)
```

#### Energy
**Power for weapons, shields, movement**
```
Generation:
  - Reactors (main sources)
  - Solar collectors (passive)
  - Geothermal (if near planet)
  - Energy from resources (converters)

Use:
  - Ship weapons fire
  - Shield regeneration
  - Engine thrust
  - Special abilities
  - Base operations

Storage: Battery capacity
Capacity: Limited per ship
Regeneration: Automatic over time
Decay: None (maintains)

Management:
  - Priority system
  - Rationing mode (limit to 50% output)
  - Emergency power (reduce efficiency)
```

#### Alloy
**Advanced building material**
```
Acquisition:
  - Refine minerals (1:2 ratio at shipyard)
  - Tech rewards
  - Trade routes (future)

Use:
  - Build advanced ships
  - Upgrade weapons
  - Advanced systems

Storage: Advanced storage
Capacity: Limited
Conversion: 1 mineral = 0.5 alloy
```

#### Tech Points
**Research currency**
```
Acquisition:
  - Destroy enemy ships
  - Complete missions
  - Research projects
  - Tech salvage
  - Achievements

Use:
  - Unlock ship types
  - Unlock weapons
  - Unlock upgrades
  - Unlock abilities

Storage: Account-wide
Capacity: Unlimited
Decay: None
```

## Tech Tree System

### Tree Structure

**Tier 1: Foundations** (Available from start)
```
Basic Weapons
├─ Turbolaser Cannons
├─ Missile Pods
└─ Rocket Launchers

Basic Ships
├─ Fighter
├─ Corvette
└─ Frigate

Basic Systems
├─ Light Shields
├─ Light Armor
└─ Basic Engines

Cost: 0 (free)
Time: Instant
Requirement: None
```

**Tier 2: Intermediate** (Unlock after Tier 1)
```
Advanced Weapons
├─ Heavy Cannons
├─ Torpedoes
├─ Ion Cannons
└─ Beam Weapons

Advanced Ships
├─ Bomber
├─ Cruiser
└─ Transport (support ship)

Advanced Systems
├─ Medium Shields
├─ Medium Armor
├─ Advanced Engines
└─ Sensors

Cost: 500-1000 tech points
Time: 10-20 minutes research
Requirement: Tier 1 complete
```

**Tier 3: Advanced** (Unlock after Tier 2)
```
High-Tech Weapons
├─ Plasma Cannons
├─ Experimental Torpedoes
├─ Defense Lasers
└─ Cloaking System

Capital Ships
├─ Battleship
├─ Carrier
└─ Command Ship

Elite Systems
├─ Heavy Shields
├─ Heavy Armor
├─ Afterburners
└─ Long-Range Sensors

Cost: 2000-3000 tech points
Time: 30-60 minutes research
Requirement: Tier 2 complete
```

**Tier 4: Ultimate** (Late-game unlock)
```
Superweapons
├─ Planet Destroyer
├─ Station Annihilator
└─ Fleet Killer

Super Ships
├─ Dreadnought
├─ Super Carrier
└─ Battlestation

Special Systems
├─ Regenerating Hull
├─ Temporal Shields
└─ Dimensional Engine

Cost: 5000+ tech points
Time: 90+ minutes research
Requirement: All Tier 3 complete
```

## Fleet Composition

### Fleet Building

**Fleet Slots** (Upgradeable)
```
Starting Fleet: 5 ships
Maximum Tier 1: 10 ships
Maximum Tier 2: 20 ships
Maximum Tier 3: 50 ships
Maximum Tier 4: 100+ ships

Upgrade Cost:
  5 → 10: 1000 minerals
  10 → 20: 2500 minerals
  20 → 50: 5000 minerals
  50 → 100: 10000 minerals
```

**Fleet Composition Types**

**Balanced Fleet** (All-rounder)
```
Composition:
  - 1x Battleship (commander)
  - 2x Cruisers (support)
  - 4x Frigates (attackers)
  - 8x Corvettes (scouts)
  - 20x Fighters (swarm)

Strength: Works in all situations
Weakness: Not specialized
Cost: Medium
Flexibility: High
```

**Aggressive Fleet** (Offense)
```
Composition:
  - 2x Battleships (firepower)
  - 4x Bombers (capital hunter)
  - 30x Fighters (overwhelming swarm)
  - 2x Frigates (escort)

Strength: Destroys capitals quickly
Weakness: Weak to concentrated fire
Cost: Medium-High
Flexibility: Medium
```

**Defensive Fleet** (Defense)
```
Composition:
  - 2x Battleships (anchor)
  - 4x Cruisers (layered defense)
  - 12x Corvettes (patrol)
  - 20x Point Defense Turrets
  - Station Shield

Strength: Hard to break
Weakness: Slow to attack
Cost: High
Flexibility: Low
```

**Economic Fleet** (Mining/Harvesting)
```
Composition:
  - Mining Ships (8x)
  - Transport Ships (4x)
  - 2x Escort Ships

Strength: Generates resources
Weakness: Poor in combat
Cost: Low
Flexibility: High (can switch)
```

## Ship Building & Construction

### Shipyard System

**Build Queue**
```
Simultaneous Builds: 3 ships
Priority: Reorderable
Cancel: Refund 50% cost
Rush: 2x speed (costs extra minerals)

Build Times (Base):
  Fighter: 10 seconds
  Corvette: 30 seconds
  Frigate: 60 seconds
  Cruiser: 120 seconds
  Battleship: 300 seconds
  Dreadnought: 600 seconds

Speedups:
  Tech 1: -5% time
  Tech 2: -10% time
  Tech 3: -15% time
  Tech 4: -20% time
  Efficiency Upgrade: -5%
```

**Shipyard Levels**
```
Level 1 (Starting)
├─ Can build: Fighters, Corvettes
├─ Upgrade Time: -10%
├─ Slots: 1
└─ Capacity: 50,000 tons

Level 2 (Tech 2 unlock)
├─ Can build: + Frigates
├─ Upgrade Time: -15%
├─ Slots: 2
└─ Capacity: 100,000 tons

Level 3 (Tech 3 unlock)
├─ Can build: + Cruisers
├─ Upgrade Time: -20%
├─ Slots: 3
└─ Capacity: 200,000 tons

Level 4 (Tech 4 unlock)
├─ Can build: All ships
├─ Upgrade Time: -25%
├─ Slots: 4
└─ Capacity: Unlimited
```

## Ship Upgrades

### Upgrade System

**Weapon Upgrades**
```
Base Turbolaser → Turbolaser I (+10% damage)
                 → Turbolaser II (+20% damage)
                 → Turbolaser III (+30% damage)

Each upgrade:
  Cost: 200 minerals + 100 alloy
  Time: 30 seconds per level
  Effect: +10% effectiveness
  Max Level: 5 per weapon
```

**Shield Upgrades**
```
Light Shield → Shield I (+10% capacity)
              → Shield II (+20% capacity)
              → Shield III (+30% capacity)

Each upgrade:
  Cost: 150 minerals + 75 alloy
  Time: 20 seconds per level
  Effect: +10% shield capacity
  Max Level: 5 per ship
```

**Armor Upgrades**
```
Light Armor → Armor I (+5% reduction)
             → Armor II (+10% reduction)
             → Armor III (+15% reduction)

Each upgrade:
  Cost: 100 minerals + 50 alloy
  Time: 15 seconds
  Effect: +5% armor reduction
  Max Level: 5 per ship
```

**Engine Upgrades**
```
Basic Engines → Engines I (+10% speed)
               → Engines II (+20% speed)
               → Engines III (+30% speed)

Each upgrade:
  Cost: 150 minerals
  Time: 30 seconds
  Effect: +10% max speed
  Max Level: 5 per ship
```

## Ship Maintenance

### Energy Management

**Per-Ship Energy Usage**
```
Fighter: 10 units/sec at max thrust
Cruiser: 50 units/sec at max thrust
Battleship: 200 units/sec at max thrust
Dreadnought: 500 units/sec at max thrust

Weapon Fire: Extra 20-100 units per shot
Shield Recharge: 5-50 units per second
Idling: 0 units/sec
```

**Power Rationing**
```
Full Power (100%): All systems operate normally
High Power (75%): Reduced weapon damage (-5%)
Normal (50%): Weapons slower, shields slower
Low (25%): Minimal systems, emergency only
Critical (0%): Dead in the water

Manual Control: Can prioritize systems
Automatic: AI balances resources
```

### Repair & Recovery

**Repair Sources**
```
At Station:
  - Automatic repair (1% HP/second)
  - Bay repair (10% HP/second, costs energy)
  - Full restoration (costs minerals)

In Combat:
  - Repair Ships (healing support ship)
  - Nanite Swarms (special tech)
  - Medical Bay (capital ships only)

Recovery Time: 5-30 minutes depending on damage
Cost: 10-50% of ship cost per full repair
```

## Loadout Customization

### Preset System

**Balanced Loadout** (Default)
```
Weapons: 3x Turbolasers, 1x Missile Launcher
Shields: 50% of capacity
Armor: 30% of capacity
Systems: Standard
Fuel: Full
Cost: Base price
```

**Aggressive Loadout** (Max Weapons)
```
Weapons: All weapons mounted, minimal shields
Shields: 25% of capacity
Armor: 20% of capacity
Systems: Bare minimum
Fuel: Full
Cost: +20% more minerals (lighter armor)
```

**Defensive Loadout** (Max Protection)
```
Weapons: 2x Turbolasers only
Shields: 100% capacity
Armor: 100% capacity
Systems: Full defensive systems
Fuel: Full
Cost: +30% more minerals (heavy armor)
```

**Specialist Loadout** (Task-specific)
```
Assault: Heavy weapons, medium protection
Escort: Medium weapons, high shields
Support: Healing systems, sensor boost
Scout: High speed, light weapons
Mining: Mining lasers, cargo hold

Each costs different amounts based on components
```

## Fleet Progression

### Early Game (Turns 1-5)
```
Starting Fleet:
  - 1x Flagship (Frigate or Cruiser)
  - 4x Fighters

Goals:
  - Gather 1000 minerals
  - Build 5 corvettes
  - Unlock Tier 2 weapons

Fleet Size: 10 ships
Missions: 3-5 skirmish missions
Time: 30-45 minutes
```

### Mid Game (Turns 6-15)
```
Fleet Size: 20-30 ships
  - 1x Battleship
  - 3x Cruisers
  - 6x Frigates
  - 10x Corvettes
  - 20x Fighters

Goals:
  - Gather 10,000 minerals
  - Research Tier 3 tech
  - Defeat medium enemy fleet

Missions: 5-10 varied missions
Time: 2-3 hours
```

### Late Game (Turns 16+)
```
Fleet Size: 50-100+ ships
  - 1-2x Dreadnoughts
  - 3x Battleships
  - 10x Cruisers
  - 20x Frigates
  - 30+ Corvettes
  - 100+ Fighters

Goals:
  - Unlimited resources
  - All tech unlocked
  - Defeat final bosses

Missions: 10+ campaign missions
Time: 5+ hours
```

## Economy Balance

### Cost Scaling

**Fighter**: 100 minerals = 1 unit cost
**Corvette**: 300 minerals = 3 unit cost
**Frigate**: 1000 minerals = 10 unit cost
**Cruiser**: 3000 minerals = 30 unit cost
**Battleship**: 8000 minerals = 80 unit cost
**Dreadnought**: 15000 minerals = 150 unit cost

### Income Balance

**Resource Generation**
```
Base Passive: 5 minerals/min
Mining 1 Ship: +25 minerals/min
Mining 5 Ships: +100 minerals/min
Max Passive Income: 500+ minerals/min
```

**Farming Efficiency**
```
1 Hour Mining = 30,000 minerals
Build 30 fighters with 3000 minerals
Use 30 fighters to farm more
Repeat

Exponential growth if unchecked
Mitigation: Scaling enemy difficulty
```

---

**Document Version**: 1.0  
**Last Updated**: December 27, 2025  
**Status**: Approved
