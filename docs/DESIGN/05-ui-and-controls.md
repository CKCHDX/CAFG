# CAFG UI & Control Systems

## Dual Control Modes

### Strategic Mode (RTS/Command View)

**Camera View**
```
Type: Top-down orthographic
Zoom: 0.5x to 2.0x (adjustable)
Center: Selected ship or fleet center
Pan: Click-drag or arrow keys
FOV: Shows wide battlefield area
```

**Control Scheme**
```
Select Unit: Left-click on ship/icon
Multi-select: Ctrl+click
Drag-select: Click-drag rectangle
Deselect: Click empty space
Issue Order: Right-click location
Queue Order: Shift+right-click
Form Group: Ctrl+1-9 (assign)
Select Group: 1-9 (select)
Toggle Mode: TAB (switch to tactical)
Pause Game: Space
```

**UI Elements**
```
Minimap (top-right corner)
├─ Shows entire map
├─ Colored dots for units
├─ Rectangle showing camera FOV
├─ Zoomable
└─ Click to pan camera

Fleet Panel (left sidebar)
├─ Ship list with portraits
├─ Health bars
├─ Status indicators
├─ Click to select/control
└─ Scroll for more ships

Command Panel (bottom)
├─ Selected unit info
├─ Current orders
├─ Available commands
├─ Upgrade buttons
└─ Special abilities

Resources Display (top-left)
├─ Minerals: XXX
├─ Energy: XXX/XXX
├─ Alloy: XXX
└─ Tech Points: XXX

Status Bar (center-bottom)
├─ Mission objective
├─ Enemy count: XXX
├─ Friendly count: XXX
└─ Time elapsed: XX:XX
```

### Tactical Mode (Pilot/Action View)

**Camera View**
```
Type: Third-person follow camera
Zoom: Fixed (can adjust with scroll)
Center: Currently piloted ship
FollowDistance: 200-400px
Rotation: Follow ship rotation
Target: Front of ship
```

**Control Scheme**
```
Move Forward: W
Move Back: S
Turn Left: A
Turn Right: D
Aim Weapon: Mouse cursor
Fire Primary: Left-click / Space
Fire Secondary: Right-click / E
Launch Fighters: F
Boost Engines: Shift
Target Nearby: T
Target Lock: L

Fleet Commands (while piloting):
Attack My Target: Z
Defend Position: X  
Hold Position: C
Retreat to Base: V

Switch Ships:
Next Ship: Tab
Previous Ship: Shift+Tab
Select Specific: F1-F12

Return to Strategy: ESC
Pause Game: Space
```

**UI Elements**
```
Crosshair (center)
├─ White when no target
├─ Cyan when locked
├─ Flashing when active
└─ Range indicator circle

HUD Status (left side)
├─ Hull HP: Green bar
├─ Shields: Blue bar
├─ Energy: Yellow bar
├─ Engine Status: Indicator
└─ System Health: Icons

Weapon Status (right side)
├─ Primary Weapon: Name + cooldown
├─ Secondary Weapon: Name + ammo
├─ Tertiary Weapon: Name + status
└─ Special Abilities: Cooldowns

Target Info (top-center)
├─ Target Name
├─ Target Type
├─ Target Health
├─ Distance
└─ Threat Level

Ship Portraits (bottom-left)
├─ All fleet members
├─ Health indicators
├─ Status icons
└─ Click to switch control

Minimap (top-right)
├─ Local area only
├─ Shows enemies nearby
├─ Shows allies
├─ Threat indicator
└─ Click to target

Warnings (various)
├─ Missile incoming: Red alert + sound
├─ Shield overload: Blue flash
├─ Hull breach: Orange warning
└─ System failure: Yellow caution
```

## HUD Elements

### Crosshair System

**Primary Crosshair**
```
Appearance: 
  - Default: White "+" shape (30x30px)
  - Locked: Cyan circle (40x40px)
  - Firing: Red outline
  - Tracking: Flashing

Position: Center of screen
Respond to: Mouse cursor
Scale: Varies with weapon selected

States:
  No Target: White static crosshair
  In Range: Cyan static crosshair
  Locked: Cyan flashing crosshair
  Weapon Ready: Green outline
  Weapon Charging: Orange outline
  Weapon Overheating: Red flashing
```

### Shield & Damage Display

**Shield Indicator**
```
Position: Left HUD
Color: Cyan/Blue
Shape: Bar graph
Animation: 
  - Ripple on hit
  - Pulsing when low
  - Flashing when critical

Status:
  Full: Solid blue
  Damaged: Dull blue
  Recharging: Pulsing blue
  Overloaded: Flashing red
```

**Hull Damage Display**
```
Position: Left HUD below shields
Color: Green (full) to Red (critical)
Shape: Bar graph with segments
Number: Current/Max HP
Animation:
  - Flashes white on hit
  - Turns red when critical
  - Smoke particles at critical

Critical State (Below 25%):
  Visual: Heavy smoke, fires
  HUD: Pulsing red warning
  Audible: Alarm beeping
  Effect: Reduced speed, weapon damage
```

**Energy Display**
```
Position: Left HUD below hull
Color: Yellow
Shape: Bar graph
Number: Current/Max energy
Use: Powers weapons, shields, engines

Status:
  Full: Solid yellow
  Low: Dull yellow
  Critical: Flashing red
  Charging: Pulsing green
```

### Weapon Status

**Weapon Cooldown Bars**
```
Position: Right HUD
Color:
  Ready: Green
  Cooling: Yellow
  Recharging: Blue
  Overheating: Red

Display:
  Primary Weapon: Large bar
  Secondary: Medium bar
  Tertiary: Small bar
  Special: Custom display

Ammo Count (if applicable):
  Show: XX/XX missiles
  Warning: When low
  Critical: When 3 or fewer
```

**Overheat System**
```
Trigger: Continuous firing
Effect: Weapon gradually slows
Cooldown: Takes time to recover
Visual Feedback:
  Slight: Orange tint
  Moderate: Yellow smoke
  Critical: Red glow + sounds
```

### Radar/Minimap

**Tactical Mode Minimap (Top-Right)**
```
Size: 200x200px
Position: Top-right corner
Background: Dark with grid
Zoom: Fixed (shows local area)
Refresh: Real-time

Unit Display:
  Player Ships: Cyan dots
  Enemy Ships: Red dots
  Objectives: Green squares
  Asteroids: Gray circles
  You: Larger cyan dot

Ranges:
  Weapon Range: Circle overlay
  Sensor Range: Dashed circle
  Danger Zone: Orange tint
```

**Strategic Mode Minimap (Top-Right)**
```
Size: 300x300px
Position: Top-right corner
Background: Dark with full map grid
Zoom: 100% view of entire map
Refresh: Real-time

Unit Display:
  Player Ships: Cyan icons
  Enemy Ships: Red icons
  Stations: Large squares
  Resources: Small icons
  Formations: Connected lines

Features:
  Click to pan camera
  Drag rectangle to select
  Right-click for orders
```

## Fleet Management Panel

### Left Sidebar Layout

**Header**
```
Fleet Status
├─ Fleet Name: "Main Fleet"
├─ Total Ships: 42
├─ Total Health: 85%
└─ Fleet Power: 8500
```

**Ship List**
```
Scrollable list of ships:

[ Flagship Portrait ] 100/100 HP  [Shield Icon]
Star Destroyer Alpha

[ Ship Portrait ]  75/100 HP  [Shield Icon]  
Cruiser Beta

[ Ship Portrait ]  30/100 HP  [DAMAGED]
Frigate Gamma

[ + ] Add Ship  [ Sort ] [ Filter ]

Each ship shows:
- Portrait image
- Current/Max HP
- Shield status
- Damage indicator
- Select on click
```

### Ship Detail Panel

**When Ship Selected (Bottom-Right)**
```
┌─────────────────────────────────┐
│ STAR DESTROYER ALPHA             │
├─────────────────────────────────┤
│ Type: Battleship                 │
│ Class: Capital Ship              │
│ Role: Heavy Support              │
├─────────────────────────────────┤
│ SYSTEMS STATUS                   │
│ Hull:    ████████░ 80/100        │
│ Shields: ███████░░ 70/100        │
│ Energy:  █████░░░░ 50/100        │
├─────────────────────────────────┤
│ WEAPONS                          │
│ Turbolasers: Ready   (CD: 0.5s)  │
│ Cannons: Recharging  (CD: 2.3s)  │
│ Torpedoes: 20/50 ammo            │
├─────────────────────────────────┤
│ ABILITIES                        │
│ [ Boost Shields ]  [ Repair ]    │
│ [ Target Lock ]    [ Scan ]      │
├─────────────────────────────────┤
│ ORDERS                           │
│ Current: Attack target           │
│ Queued: Move to waypoint         │
├─────────────────────────────────┤
│ [ Control ] [ Upgrade ] [ Scrap ]│
└─────────────────────────────────┘
```

## Menu Design

### Main Menu

**Layout**
```
┌─────────────────────────────────┐
│                                 │
│          CAFG LOGO              │ (Animated, glowing)
│      Command And Fleet Game     │
│                                 │
├─────────────────────────────────┤
│       [ NEW GAME ]              │
│       [ CONTINUE ]              │
│       [ SETTINGS ]              │
│       [ HELP/TUTORIAL ]         │
│       [ ABOUT ]                 │
│       [ EXIT ]                  │
├─────────────────────────────────┤
│  Version: 0.1.0-alpha           │
│  Status: In Development         │
└─────────────────────────────────┘

Background: Animated space scene with
parallax stars, slow camera pan,
nearly ships in background.
```

### Pause Menu

**Layout**
```
┌─────────────────────────────────┐
│          GAME PAUSED            │
├─────────────────────────────────┤
│       [ RESUME GAME ]           │
│       [ SETTINGS ]              │
│       [ SAVE GAME ]             │
│       [ LOAD GAME ]             │
│       [ RESTART MISSION ]       │
│       [ MAIN MENU ]             │
├─────────────────────────────────┤
│  Mission Progress: 45%          │
│  Time Elapsed: 12:45            │
└─────────────────────────────────┘

Background: Blurred game scene,
semi-transparent dark overlay.
```

### Settings Menu

**Categories**
```
Display Settings
├─ Resolution: 1920x1080 [▼]
├─ FPS Cap: 60 [▼]
├─ V-Sync: ON / OFF
├─ Quality: High / Medium / Low [▼]
├─ Brightness: [===●====] 60%
└─ Contrast: [====●===] 50%

Audio Settings
├─ Master Volume: [===●====] 70%
├─ Music Volume: [==●=====] 60%
├─ SFX Volume: [====●===] 80%
├─ Voice Volume: [===●====] 70%
└─ Subtitles: ON / OFF

Gameplay Settings
├─ Difficulty: Normal [▼]
├─ Control Mode: Arcade [▼]
├─ Camera Speed: Fast [▼]
├─ Auto-aim: ON / OFF
├─ Show Hints: ON / OFF
└─ Show FPS: ON / OFF

Controls
├─ Forward: W [Change]
├─ Back: S [Change]
├─ Left: A [Change]
├─ ... (full keybind list)
└─ [Reset to Default]

[ APPLY ] [ CANCEL ]
```

## Ship Designer Interface

**Layout**
```
Top: Ship Class & Hull Selection
├─ Choose Class: Fighter / Corvette / Cruiser [▼]
├─ Choose Shape: Wedge / Needle / Hammerhead [▼]
└─ Ship Name: _____________ [Edit]

Left: Component Library
├─ Weapons
│  ├─ [ ] Turbolaser
│  ├─ [ ] Missile Launcher
│  └─ [ ] Ion Cannon
├─ Systems
│  ├─ [ ] Shield Generator
│  ├─ [ ] Engine Bank
│  └─ [ ] Armor Plating
└─ [Info] [Preview]

Center: Design Canvas
├─ Hull blueprint with gridpoints
├─ Drag components to place
├─ Right-click to rotate
├─ Left-click + drag to move
└─ Power budget indicator

Right: Ship Stats
├─ Total Cost: 3000 minerals
├─ Power Budget: 80/100
├─ Heat: 60/100
├─ Weight: 75/100
├─ Speed: Fast ████░░░░░
├─ Armor: Medium █████░░░░
├─ Weapons: 3x Lasers, 1x Missiles
└─ [ SAVE DESIGN ] [ TEST ]

Bottom: Loadout Presets
├─ Balanced / Offensive / Defensive / Custom
└─ [Load Preset] [Save As]
```

## Tutorial & Help System

### Contextual Tooltips

**Hover Tooltips**
```
Appear on: Hover over UI elements
Delay: 500ms
Content: One-line explanation
Example:
  "Click to select this ship.
   Ctrl+click to multi-select."
```

**Tutorial Overlays**
```
First-time only:
├─ Highlight important UI
├─ Show control schemes
├─ Guide through mission objectives
├─ Can be skipped
└─ Available in help menu
```

## Accessibility Features

### Colorblind Mode
```
Options:
├─ Normal colors (default)
├─ Protanopia (red-blind)
├─ Deuteranopia (green-blind)
└─ Tritanopia (blue-blind)

Changes:
├─ UI colors adjusted
├─ Unit colors use patterns
├─ Text labels for all
└─ High contrast option
```

### Text Scaling
```
Options:
├─ Small (80%)
├─ Normal (100%)
├─ Large (120%)
└─ Very Large (150%)

Applies to:
├─ All UI text
├─ HUD elements
├─ Menus
└─ Tooltips
```

### Sound Cues
```
For deaf/hard of hearing:
├─ Visual alerts for sounds
├─ Subtitle system
├─ Haptic feedback (if controller)
└─ Visual warning lights
```

---

**Document Version**: 1.0  
**Last Updated**: December 27, 2025  
**Status**: Approved
