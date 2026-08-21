# NEXORA METRO RUNNER - CID Detective Indian Metro Runner 🎮🏃‍♂️

**NEXORA METRO RUNNER V2.0** is a high-performance, 3D endless-runner web game built by **Nexora Team** using **Three.js**, **Web Audio API**, **Web Speech Synthesis**, and **Vite**.

- 📖 **Full Comprehensive Technical Wiki**: [Read WIKI.md](./WIKI.md)
- 🌐 **Official Company Website**: [https://nexora-financial-intelligence-reima.vercel.app/](https://nexora-financial-intelligence-reima.vercel.app/)
- 🎮 **Live Demo**: [https://nexora-financial-intelligence-reima.vercel.app/](https://nexora-financial-intelligence-reima.vercel.app/)

---

## 🌟 Key Features

### 🔄 Multi-Stage Procedural Loading Screen Flow
- **1st Loading Screen (Welcome Initializer)**: Web Audio, Three.js shaders, and CID voice synthesizer initialization ($0\% \rightarrow 100\%$).
- **2nd Loading Screen (Pre-Gameplay Run Initializer)**: Spawning 3D train rakes, calibrating 120FPS tracks, and preparing countdown.
- **3rd Loading Screen (Crash & Game Over Diagnostics)**: Triggered upon obstacle crash to compute high score records, XP rewards, and mission progress.
- **4th Loading Screen (Lobby & World Regenerator)**: Triggered when restarting a run to reset track chunks, obstacles, and coin paths.

### 🤖 Neural Adaptive AI Game Director
- **Real-Time Skill Rating**: Tracks player reaction speeds, near-misses, coin capture rate, and jump/slide accuracy (0% to 100%).
- **Dynamic Difficulty Modulation**: Dynamically scales speed, coin trail patterns, and obstacle frequency based on player skill.
- **AI Tactical Advice & Commentary**: Live HUD toast guidance and CID voice callouts ("🤖 AI DIRECTOR: High-Speed Train Rake Ahead! Vault the Ramp!").
- **Smart AI Competitor Bot**: Evasive AI bot runner in 2-Minute Race Mode with jumping, sliding, and pathfinding tactics.

### 🎵 Enhanced Web Audio BGM & Spatial Sound Synthesis
- **Biquad Filter Sweeps**: Low-pass filter sweeps ($1800\text{Hz} + \sin(t) \cdot 800\text{Hz}$, $Q = 3.5$) for authentic 80s Cyberpunk synthwave warmth.
- **Harmonic Synth Pads**: Dual-oscillator chord pads playing root + 5th fifth intervals across all 4 music tracks (`CYBER_PUNK_SYNTH`, `INDIAN_METRO_BEAT`, `CID_MYSTERY_THEME`, `SPEED_RUNNER_EDM`).
- **3D Spatial Doppler Horns**: 3-note locomotive chord with stereo panning and echo delay.

### 🎮 Game Modes
- **Solo Run Mode**: Infinite endless runner mode to set high score records, collect coins, and complete daily quests.
- **2-Minute AI Computer Race Mode**: 120-second head-to-head sprint against a smart AI Bot Runner with live lead distance HUD.

### 🚆 Expanded Indian Railway & Multi-Coach Rakes
- **Train Variety**: Goods Cargo (`MAAL`), Petroleum Tankers (`PETRO`), and Passenger Coaches (`COACH`).
- **Coupled Rakes**: Trains feature 2 to 3 joined coupled carriages.
- **3D Triangular Wedge Ramps**: Front wedge ramps allowing smooth climbing onto moving train roofs.

### ⚡ 10-Second Active Ability & Power-Ups
- **Hero Active Ability (`⚡ ABILITY` / `Key E` / `Shift`)**: Triggers 10-second Magnet Vacuum + Shield Aura + Speed Boost with 15s cooldown.
- **10-Second Power-Up System**:
  - 🧲 **Coin Magnet**: Pulls all nearby coins (10s duration).
  - 🚀 **Air Rocket Board**: High-altitude sky flight over all track obstacles (10s duration).
  - 👟 **Super Jump Shoes**: High vertical vaulting over trains (10s duration).
  - 💎 **Double Coins (2X)**: Multiplies collected coins by 2x (10s duration).
  - 🛡️ **Safety Bubble**: Protective forcefield barrier (10s duration).
  - ⚡ **Speed Boost**: Nitro acceleration forward (10s duration).

### ⚡ 2 Instant Game Over Hazards
- **⚡ Electric Laser Grid**: High-voltage cyan laser fence that triggers instant Game Over upon touch.
- **💥 Explosive Hazard Barrels**: Red petroleum hazard barrels causing instant detonation upon contact.

### 💃 High Score Celebration & Interactive Emotes
- **High Score Victory Jump**: Bending 360° leap with gold/cyan light aura, sound callouts, and lobby shimmer banner on new high score records.
- **Interactive Emotes (`Keys 1-4` / `Z, X, C, V`)**:
  - `1` / `Z`: 💃 **Dance Party** - Hip-hop celebration rhythm dance.
  - `2` / `X`: 🏆 **Victory Flex** - Double-arm lift celebration jump.
  - `3` / `C`: 🤸‍♂️ **Backflip Spin** - 360° acrobatic flip.
  - `4` / `V`: 🫡 **CID Salute** - CID Detective crisp stance.

### 🚀 120FPS+ Ultra Fast Rendering Performance
- **Single-Pass InstancedMesh**: Railway sleepers rendered using `THREE.InstancedMesh` (reducing draw calls from 500+ down to 1 per chunk for 120FPS+ smooth rendering).
- **Responsive Controls**: Left ◀ and Right ▶ steering controls with dynamic body bank roll leaning ($\text{roll} = -\Delta X \times 0.25$).

---

## 7 Playable Characters & Customization
- 🏃‍♂️ **Boy Runner**: Agile urban runner.
- 🏃‍♀️ **Girl Runner**: Speed specialist with ponytail spring physics.
- 👽 **Cyber Alien**: Zero-gravity jump suit.
- 🐕 **Cyber Dog**: 4-leg running dog with barking sound FX.
- 🐈 **Cyber Cat**: Acrobatic cat with meow audio.
- 🤖 **Cyber Droid (Robot)**: Titanium robot with pulsing cyan core reactor.
- 👮‍♂️ **CID Detective**: Detective squad leader with aviator glasses & gold badge.

---

## 🛠️ Built With

- **Three.js**: WebGL rendering, custom shaders, and particle systems.
- **Web Audio API**: Synthesized SFX, 4 music tracks, spatial 3D audio, biquad filter sweeps.
- **Web Speech Synthesis**: Voice speech engine for CID detective dialogues in Hindi, English, and Bilingual modes.
- **Vite**: Frontend bundler.

---

## 📜 Developer & Official Company Link

Designed & Developed by **Nexora Team**.  
🌐 **Company Website**: [https://nexora-financial-intelligence-reima.vercel.app/](https://nexora-financial-intelligence-reima.vercel.app/)
