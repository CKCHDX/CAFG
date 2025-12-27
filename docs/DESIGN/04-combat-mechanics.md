# CAFG Combat Mechanics & Weapon System

## Damage Model

### Three-Layer Defense System

```
┌─────────────────────────────────────┐
│  INCOMING DAMAGE                    │
└────────────────┬────────────────────┘
                 │
                 ▼
         ┌───────────────┐
         │   SHIELDS     │ (Absorbs first)
         │  Can regen    │
         └───────┬───────┘
                 │ (if shields broken)
                 ▼
         ┌───────────────┐
         │   ARMOR       │ (Reduces % damage)
         │  No regen     │
         └───────┬───────┘
                 │
                 ▼
         ┌───────────────┐
         │   HULL HP     │ (Takes remainder)
         │  If 0 = dead  │
         └───────────────┘
```

### Shield System

**Mechanics**
- Regenerates over time (10 HP/sec base)
- Regeneration delays 5 seconds after last hit
- Can be completely depleted
- Scales with ship class (fighter: 50 HP, dreadnought: 25,000 HP)
- Visual feedback: Blue ripple effect on impact

**Weapon Effectiveness**
```
Standard Weapons: 100% damage to shields
Ion Cannons: 150% damage to shields
Plasma: 100% damage to shields
Rocketry: 80% damage to shields
```

### Armor System

**Mechanics**
- Reduces incoming damage by percentage
- Does NOT regenerate
- Displayed as separate health bar (red)
- Can be individually targeted/disabled
- Degrades with damage

**Armor Values by Class**
```
Fighter: 10% reduction
Bomber: 15% reduction
Corvette: 20% reduction
Frigate: 25% reduction
Cruiser: 40% reduction
Battleship: 50% reduction
Dreadnought: 60% reduction
Station: 70% reduction
```

**Visual Representation**
```
Intact Armor: Shiny, reflective
Damaged Armor: Dull, scorched
Severe Damage: Visible breaches, fires
```

### Hull HP System

**Mechanics**
- Core health pool
- No regeneration (must repair at station)
- Ship destroyed when hull reaches 0
- Below 25% triggers critical status
- Visual indicators: Fire, smoke, system failures

**Critical Status Effects** (Below 25% HP)
- Hull breaches (visual)
- Power fluctuations (dim lights)
- System failures (weapons slower)
- Engine damage (reduced speed)
- Increased damage taken (15% more)

---

## Weapon Types & Mechanics

### Kinetic Weapons

#### Turbolasers (Most Common)
**Description**: Fast-firing laser cannons

```
Damage: 15-40 DPS (scales with ship)
Range: 400-650px
Fire Rate: 0.5-1.5 shots/sec
Projectile Speed: 800 px/s
Vs Shields: 100% effectiveness
Vs Armor: 100% effectiveness
Vs Hull: 100% effectiveness
```

**Mechanics**
- Instant hit (no travel time)
- Auto-targeting capable
- Multiple turrets can focus fire
- Cooldown between shots
- Infinite ammunition

**Visuals**
- Cyan beam (player) / Red beam (enemy)
- Bright flash on target
- Spark particles on hit
- Muzzle flash on fire

#### Cannons (Heavy)
**Description**: Large caliber ballistic weapons

```
Damage: 400-500 per shot
Range: 700-900px
Fire Rate: 0.2-0.3 shots/sec
Projectile Speed: 600 px/s
Vs Shields: 80% effectiveness
Vs Armor: 150% effectiveness
Vs Hull: 100% effectiveness
```

**Mechanics**
- Slow fire rate, high burst damage
- Visible projectiles that travel
- Can be dodged/intercepted
- Limited by power system
- Heavy recoil (affects ship movement)

**Visuals**
- Large glowing projectile
- Bright muzzle flash
- Smoke trail
- Massive explosion on impact

#### Point Defense (Fast)
**Description**: Rapid-fire turrets for intercepting

```
Damage: 10-15 DPS per turret
Range: 200-400px
Fire Rate: 5+ shots/sec
Projectile Speed: 1000 px/s
Vs Shields: 50% effectiveness
Vs Armor: 50% effectiveness
Vs Hull: 100% effectiveness
Auto-fires: At incoming missiles/fighters
```

**Mechanics**
- Automatic targeting of threats
- Cannot be manually aimed (defense only)
- Rapid bursts
- Good at interception
- Poor vs unarmored fighters

**Visuals**
- Red tracer fire
- Rapid flashes
- Bullet sparks

---

### Missile Weapons

#### Torpedoes (Anti-Capital)
**Description**: Large, slow, devastating weapons

```
Damage: 150-300 per hit
Range: 800-1200px
Fire Rate: 0.1-0.3 shots/sec
Missile Speed: 300 px/s
Vs Shields: 200% effectiveness (pierces)
Vs Armor: 100% effectiveness
Vs Hull: 100% effectiveness
Ammo: Limited (20-200 per launcher)
```

**Mechanics**
- Guided missile (can be intercepted)
- Travel time = can be dodged
- Explodes on direct hit
- Area-of-effect explosion
- Must be manually aimed (not auto)
- Locks onto target or free-fire

**Visuals**
- Small rocket sprite
- Bright engine trail
- Large explosion on impact
- Debris field

#### Missiles (Standard)
**Description**: Medium guided weapons

```
Damage: 80-150 per hit
Range: 600-800px
Fire Rate: 0.5-1 shots/sec
Missile Speed: 400 px/s
Vs Shields: 120% effectiveness
Vs Armor: 100% effectiveness
Vs Hull: 100% effectiveness
Ammo: Limited (50-100 per launcher)
```

**Mechanics**
- Guided but can be shot down
- Good vs mixed targets
- Slightly faster than torpedoes
- Area-of-effect damage
- Can have variants (heat-seeking, dumb-fire)

**Visuals**
- Medium rocket sprite
- Engine trail
- Moderate explosion

#### Rockets (Anti-Fighter)
**Description**: Fast, unguided, high volume

```
Damage: 40-80 per hit
Range: 400-500px
Fire Rate: 2+ shots/sec
Rocket Speed: 600 px/s
Vs Shields: 80% effectiveness
Vs Armor: 120% effectiveness
Vs Hull: 100% effectiveness
Ammo: High (200+ per pod)
```

**Mechanics**
- Dumb-fire (no guidance)
- Very fast
- Overwhelm defenses through volume
- Poor vs heavily shielded targets
- Good vs swarms

**Visuals**
- Small rocket
- Bright trail
- Small explosions

---

### Special Weapons

#### Ion Cannons (System Disruptors)
**Description**: Electrical weapons that disable systems

```
Damage: 40-80 DPS
Range: 500-700px
Fire Rate: 0.5-1 shots/sec
Vs Shields: 150% effectiveness
Vs Armor: 50% effectiveness (conducts electricity)
Vs Hull: 50% effectiveness
Special: Disables shields for 3-5 seconds
```

**Mechanics**
- Effective against shields
- Conducts through armor to systems
- Disables weapon fire temporarily
- Disables engines (brief slow)
- Drains energy on target

**Visuals**
- Blue lightning beam
- Crackling electrical effect
- Chain lightning on impact
- Target flashes/sparks

#### Beam Weapons (Sustained Damage)
**Description**: Continuous energy beams

```
Damage: 60-120 DPS (continuous)
Range: 800-1000px
Fire Rate: Continuous (costs energy)
Vs Shields: 100% effectiveness
Vs Armor: 120% effectiveness
Vs Hull: 100% effectiveness
Power Cost: High (drains energy fast)
```

**Mechanics**
- Must maintain line of sight
- Drains energy while firing
- Can sweep across multiple targets
- Creates burn marks
- Overheats if used too long

**Visuals**
- Bright laser beam
- Glowing target impact
- Heat distortion around beam
- Burning trail on hit

#### Plasma Cannons (Area Damage)
**Description**: Explosive plasma bursts

```
Damage: 200-300 per hit
Range: 500-700px
Fire Rate: 0.5 shots/sec
Projectile Speed: 400 px/s
Vs Shields: 100% effectiveness
Vs Armor: 150% effectiveness
Vs Hull: 150% effectiveness
Special: Burning damage over time (50 DPS for 3s)
```

**Mechanics**
- Slow projectiles
- Area-of-effect damage
- Leaves burning effect
- Can ignite debris
- Visual feedback (fire trails)

**Visuals**
- Glowing plasma bolt
- Bright impact
- Fire spreads at impact
- Burning effect lasts

---

## Combat Mechanics

### Targeting System

**Manual Targeting**
```
- Click on enemy to target
- Target indicator shows health
- Weapons fire at current target
- Can switch targets with click
- Hold Shift to maintain fire on location
```

**Auto-Targeting**
```
- Capital ships: Auto-target nearest threat
- Point defense: Auto-target incoming missiles
- Turrets: Independent targeting
- Fighter swarms: Focus fire on weakest
```

### Range & Line of Sight

**Mechanics**
- Must have line of sight to target (blocked by asteroids, some terrain)
- Range displayed as circle around ship
- Asteroids block beams but not missiles (usually)
- Can target behind obstacles if ship line of sight maintained

### Cooldowns & Refire

**System**
- Each weapon has independent cooldown
- Shown as progress bar for player
- Full volley = all weapons fire at once
- Staggered firing improves heat management
- Overheating increases cooldown

### Movement During Combat

**Physics** (Arcade Mode)
- WASD moves ship
- Rotation independent of movement
- Can strafe while firing
- Momentum-less (stops when key released)

**Physics** (Realistic Mode - Optional)
- Thrust builds momentum
- Rotation independent
- Inertia causes drift
- Higher skill ceiling

### Evasion & Dodging

**Mechanics**
- Missile: Can be dodged by moving perpendicular
- Beam: Cannot be dodged (must destroy source)
- Projectile: Dodgeable if you see it coming
- Timing matters

**Visual Feedback**
- Missile warning: Orange reticle
- Beam lock: Red reticle
- Incoming fire: HUD flash

---

## Weapon Mechanics Table

| Weapon | Dmg | Range | Speed | Ammo | Best vs | Worst vs |
|--------|-----|-------|-------|------|---------|----------|
| Turbolaser | Low | Med | Fast | Inf | Shields | Armor |
| Cannon | High | Long | Med | Inf | Armor | Shields |
| Point Def | Low | Short | Very Fast | Inf | Fighters | Capitals |
| Torpedo | Very High | Very Long | Slow | Limited | Capitals | PD |
| Missile | Med | Long | Med | Limited | Mixed | Armor |
| Rocket | Med | Med | Very Fast | High | Fighters | Armor |
| Ion | Med | Med | Fast | Inf | Shields | Hull |
| Beam | High | Very Long | Instant | Inf | Armor | Nothing |
| Plasma | Very High | Med | Med | Inf | Everything | PD |

---

## Combat Pacing

### Micro Battles (Fighter engagement)
- Duration: 10-30 seconds
- Fast, frantic action
- Requires quick reflexes
- Emphasis on positioning

### Skirmish (Cruiser engagement)
- Duration: 1-3 minutes
- Tactical positioning
- Shield/armor management
- Weapon choice matters

### Battle (Capital engagement)
- Duration: 5-20 minutes
- Strategic fleet positioning
- Long-range weapon exchanges
- Reinforcement timing

### Siege (Station assault)
- Duration: 20-60 minutes
- Very long engagement
- Resource management
- Attrition warfare

---

## Damage Falloff (Optional Advanced Rule)

**Idea**: Damage decreases with distance

```
0-50% range: 100% damage
50-75% range: 80% damage
75-100% range: 60% damage
Beyond range: 0 damage
```

Makes positioning more important but adds complexity.

---

**Document Version**: 1.0  
**Last Updated**: December 27, 2025  
**Status**: Approved
