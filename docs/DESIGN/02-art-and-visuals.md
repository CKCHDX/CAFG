# CAFG Art & Visual Design

## Visual Style Overview

CAFG uses a **clean 2D aesthetic** inspired by:
- **Gratuitous Space Battles**: Detailed ship sprites, dramatic effects
- **FTL**: Readable UI, clear visual feedback
- **Star Sector**: Military aesthetic with customization
- **Homeworld**: Space scale and beauty

## Art Direction

### Color Palette

**Space Environment**
```
Background: Deep black (#000000) to dark blue (#0a1128)
Stars: Bright white points (#FFFFFF) at varying opacity
Nebulas: Purples (#8B3A8B), Blues (#1E90FF), Reds (#FF4500)
Asteroids: Gray/Brown (#696969 - #8B7355)
```

**UI Colors**
```
Primary: Cyan (#00FFFF) - Targeting, selections
Secondary: Orange (#FF8C00) - Enemy indicators
Success: Green (#00FF00) - Friendly, successful actions
Warning: Red (#FF0000) - Damage, alerts
Neutral: Gray (#CCCCCC) - Disabled, background
```

**Faction Colors** (Customizable)
```
Player Forces: Blue + Cyan accents
Enemy Forces: Red + Orange accents  
Neutral: White + Gray
```

### Typography

**Fonts**
- **UI Text**: Clean sans-serif (Arial, Helvetica, or custom)
- **HUD Numbers**: Monospace (Courier, Orbitron)
- **Titles**: Bold sans-serif (Impact-style)

**Sizing**
```
Title: 32-48px
Heading: 24-32px
Body: 14-18px
Small: 10-12px
Numbers (HUD): 12-16px
```

## Ship Visual System

### Ship Size Classes & Sprite Dimensions

```javascript
FIGHTER = 12-20px length
BOMBER = 20-30px length  
CORVETTE = 40-60px length
FRIGATE = 60-100px length
CRUISER = 100-150px length
BATTLESHIP = 150-250px length
DREADNOUGHT = 300-500px length
STATION = 400-800px diameter
```

### Ship Component Layers

Every ship sprite consists of:

**1. Hull Layer (Base)**
- Main body outline
- Armor plating details
- Portholes/Windows
- Paint scheme

**2. Weapon Layer**
- Turret hardpoints
- Missile launcher bays
- Visible gun placements
- Weapon tracking (animates)

**3. Engine Layer**
- Main engine exhausts (glowing)
- Thruster ports
- Intensity varies with speed
- Color: Blue/White

**4. System Layer**
- Shield generator glow
- Sensor antennae
- Hangar bay doors
- Status lights (blinking)

**5. Effects Layer (Animated)**
- Engine trails
- Weapon firing effects
- Damage particles
- Shield impacts

### Example Fighter Design

```
Top-Down View (16x16px sprite):

    /\\        ← Nose cone
   /  \\       ← Wing edges
  |◉  ◉|      ← Cockpit + gun hardpoints
   \\  /       ← Fuselage taper
    ╱╲         ← Engine pods
   ::||        ← Engine glow (animated)

Colors:
- Hull: #666666 (gray)
- Cockpit: #00FFFF (cyan)
- Engines: #0099FF (bright blue)
- Windows: #FFFF00 (yellow)
- Accents: #FF6600 (orange)
```

### Example Battleship Design

```
Side View (200x60px sprite):

  ╔══════════════════╗      ← Bridge tower
  ║  ◼  ◼  ◼  ◼  ◼  ║      ← Turret hardpoints
══╩══════════════════╩══    ← Main hull with armor plating
◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼ ◼    ← Point defense turrets
════════════════════════    ← Lower armor
   ╚══╚═══╚═══╚══╚         ← Engine banks (glowing blue)

Layers:
- Base Hull: #4a4a4a
- Armor Plating: #333333 (darker edges)
- Weapon Hardpoints: #FF6600
- Engine Glow: 0099FF (animated intensity)
- Window lights: #FFFFAA
```

## Visual Effects

### Weapon Fire

**Laser Bolts**
```
Appearance: Colored beam (green, blue, red)
Speed: Fast (instant to 500px/frame)
Effect: Bright streak with slight glow
Explosion: Small spark burst on impact
Trail: Optional light trail
```

**Missiles**
```
Appearance: Small rocket sprite with exhaust
Speed: Medium (slower than lasers, can be intercepted)
Effect: Smoke trail behind missile
Explosion: Large explosion sprite on impact
Glow: Trail glows with faction color
```

**Ion Cannons**
```
Appearance: Blue lightning-like beam
Speed: Medium
Effect: Crackling electrical effect
Explosion: Electrical discharge on hit
Trail: Fades after being fired
```

### Explosions

**Fighter Explosion** (Small)
- 3-frame animation
- 16x16px max size
- Orange/Yellow/Red colors
- Lasts 300ms
- Leaves debris particles

**Cruiser Explosion** (Medium)
- 8-frame animation  
- 100x100px size
- Multiple colors (yellow core, orange outer, dark smoke)
- Lasts 800ms
- Debris field
- Secondary explosions

**Capital Ship Explosion** (Massive)
- 15+ frame animation
- 300x300px+ size
- Chain reaction explosions
- Lasts 2+ seconds
- Visible from anywhere on map
- Massive debris field

### Shield Effects

**Shield Impact**
```
Appearance: Translucent dome effect
Color: Blue/Cyan tint
Animation: Ripple outward from hit point
Duration: 100-200ms per impact
Stacking: Multiple impacts pile up
Sound: Electric pop/crackle
```

**Shield Overload**
```
Appearance: Flashing/crackling intensifies
Color: Bright cyan flashing
Animation: Rapidly pulsing brightness
Duration: Until shield recharges
Effect: Alert to player
```

### Damage Indicators

**Hull Damage**
```
Minor: Small spark particles at hit point
Moderate: Smoke wisps emerging
Severe: Fire trails, hull breaches
Critical: Large fires, structural failure visible
```

**Floating Damage Numbers**
```
Color: 
  - Yellow for normal damage
  - Red for critical hits
  - Blue for shield damage
  - Green for healing

Font: Monospace, bold
Size: 12-20px (scales with damage)
Animation: Float upward, fade out
Duration: 1-2 seconds
```

## User Interface

### HUD Elements

**Crosshair**
```
Style: Simple + shape
Size: 30x30px
Color: Cyan when on target, white when off
Animation: Pulses when locked
```

**Ship Status Bar** (Pilot Mode)
```
Location: Bottom left
Elements:
  - Hull HP: Green bar
  - Shields: Blue bar above
  - Energy: Yellow bar
  - Weapon cooldowns: Small bars
Size: 200px width
```

**Minimap**
```
Location: Top right
Size: 200x200px (scalable)
Background: Dark blue with grid
Units: Colored dots
  - Cyan: Player ships
  - Red: Enemies
  - Green: Objectives
  - White: Neutral
Zoom: Shows whole battle area
FOV: Shows camera viewport as rectangle
```

**Tactical Map** (RTS Mode)
```
View: Top-down, entire map visible
Scale: Adjustable zoom
Units: Larger icons than minimap
Formations: Show ship groupings
Selection: Highlight selected units
Orders: Show movement/attack lines
```

### Menu Design

**Main Menu**
```
Background: Animated space scene
Title: Large, glowing "CAFG" logo
Buttons: Dark panels with cyan borders
Animation: Slow pulsing, subtle parallax
Music: Epic orchestral theme
```

**Pause Menu**
```
Overlay: Semi-transparent dark
Buttons: Centered, clear options
Background: Blurred game scene
Text: White on dark, easy to read
```

### Fleet Panel

**Layout**
```
Left side:
  - Ship list with portraits
  - Health/status indicators
  - Click to select or control

Right side:
  - Selected ship details
  - Weapon info
  - Commands available
  - Upgrade options
```

## Backgrounds & Environment

### Space Environment

**Parallax Layers**
```
Layer 1 (Far): Distant nebula colors - barely moves
Layer 2 (Mid): Star field - slow movement
Layer 3 (Near): Star field - faster movement
Layer 4 (Game): Actual game objects - full speed
```

**Asteroid Fields**
```
Visual: Gray/brown rocks at various sizes
Color: #696969 to #8B7355
Placement: Random but not clustered
Animation: Slow rotation
```

**Nebulas**
```
Appearance: Soft colorful clouds
Colors: Purple, blue, red, cyan
Opacity: Translucent 30-60%
Animation: Slow drift
Effect: Reduces visibility in area
```

## Animation Guidelines

### Frame Rates
- **Ships**: 60fps (smooth movement)
- **Effects**: 24fps (acceptable for particles)
- **UI**: 60fps (responsive feedback)

### Movement Animation
- Ships interpolate smoothly between positions
- Rotation is smooth (not snappy)
- Camera pans smoothly when following ships

### Weapon Animation
- Turrets rotate to track target
- Muzzle flashes on fire
- Missile launches with door animation
- Beam weapons fade in/out

## Asset Organization

```
assets/
├── sprites/
│   ├── ships/
│   │   ├── fighters/
│   │   ├── cruisers/
│   │   ├── capitals/
│   │   └── stations/
│   ├── weapons/
│   │   ├── lasers/
│   │   ├── missiles/
│   │   └── effects/
│   ├── effects/
│   │   ├── explosions/
│   │   ├── shields/
│   │   └── particles/
│   ├── ui/
│   │   ├── buttons/
│   │   ├── icons/
│   │   └── panels/
│   └── backgrounds/
│       ├── nebulas/
│       ├── asteroids/
│       └── stars/
└── data/
    ├── ships.json
    ├── weapons.json
    └── colors.json
```

## Responsive Design

### UI Scaling
- 1024x768: Minimum supported
- 1920x1080: Target resolution
- 4K: Supported with scaling

### Mobile Considerations
- Touch-friendly UI buttons (40px+ minimum)
- Simplified HUD for smaller screens
- Scalable camera zoom
- Optional controller support

## Performance Considerations

### Sprite Optimization
- Maximum sprite: 500x500px
- Use texture atlases when possible
- Reuse base sprites with color tinting
- Pool particle systems

### Effect Budgets
- Max 5000 particles on screen
- Max 100 active effects
- LOD system for distant effects
- Fade out effects outside camera view

---

**Document Version**: 1.0  
**Last Updated**: December 27, 2025  
**Status**: In Review
