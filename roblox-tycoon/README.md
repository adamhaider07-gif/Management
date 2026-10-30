# Forge Tycoon ⛏🔥

A mining and forging tycoon for Roblox built around a long grind:
**buy droppers → ore rides the conveyor → upgraders multiply it → the furnace pays you → rebirth for a permanent multiplier → unlock stronger tiers → repeat.**

Everything (plots, conveyors, droppers, buttons, HUD) is generated in code, so you can run it from an empty Baseplate without building any models.

## Core loop

| Stage | What the player does |
|---|---|
| Start | Click the **mine rock** for cash, then buy the first Stone Dropper ($15) |
| Early | Step on green buttons to buy droppers, pickaxes and walls |
| Mid | **Upgraders** (Polisher x1.5, Smelter x2) multiply every ore that passes through |
| Late | Mega Furnace x2, Diamond Dropper |
| Rebirth | At $1M, rebirth: cash and items reset, you get **+0.5x cash forever**, and red 🔒 buttons unlock (Obsidian, Plasma, Void droppers…) |
| Endless | Each rebirth costs 3x more, so the grind keeps scaling |

## Project layout

```
roblox-tycoon/
├── default.project.json        Rojo project file
└── src/
    ├── shared/   → ReplicatedStorage.Shared
    │   ├── Config.luau          ALL prices, items and rebirth math (edit this to balance)
    │   └── Format.luau          1500 → "1.5K"
    ├── server/   → ServerScriptService.Server
    │   ├── Main.server.luau     Entry point, remotes, player join/leave
    │   ├── DataService.luau     DataStore saving (retries, autosave, shutdown save)
    │   └── TycoonService.luau   Plots, droppers, upgraders, buttons, rebirth
    └── client/   → StarterPlayer.StarterPlayerScripts.Client
        └── HUD.client.luau      Cash counter, rebirth button and progress bar, toasts
```

## Setup

### Option A: Rojo (recommended)
1. Install [Rojo](https://rojo.space) (VS Code extension, or `aftman add rojo-rbx/rojo`) and the Rojo plugin in Roblox Studio.
2. In this folder, run `rojo serve`.
3. In Studio, open a new **Baseplate** place, open the Rojo plugin and click **Connect**.
4. Press **Play**.

### Option B: Copy and paste (no tools)
In Roblox Studio, create these objects and paste in each file's contents:

| Studio location | Type | Name | File |
|---|---|---|---|
| ReplicatedStorage | Folder | `Shared` | |
| ReplicatedStorage.Shared | ModuleScript | `Config` | `src/shared/Config.luau` |
| ReplicatedStorage.Shared | ModuleScript | `Format` | `src/shared/Format.luau` |
| ServerScriptService | Folder | `Server` | |
| ServerScriptService.Server | Script | `Main` | `src/server/Main.server.luau` |
| ServerScriptService.Server | ModuleScript | `DataService` | `src/server/DataService.luau` |
| ServerScriptService.Server | ModuleScript | `TycoonService` | `src/server/TycoonService.luau` |
| StarterPlayer.StarterPlayerScripts | LocalScript | `HUD` | `src/client/HUD.client.luau` |

### Turn on saving
Saving only works once the place is **published**. Then go to **Game Settings → Security → Enable Studio Access to API Services**.
Until then, the game still runs in Studio but prints a warning and doesn't save.

### Test multiplayer
**Test tab → Clients and Servers → 2 Players → Start** gives each test player their own plot.

## Balancing
All tuning lives in `Config.luau`:
- **Item prices and ore values:** the `Config.Items` table
- **Rebirth cost and reward:** `Config.Rebirth` (`BaseCost`, `CostGrowth`, `MultiplierPerRebirth`)
- **Click reward:** `MineBaseReward`, `MineCooldown`
- **2x Cash gamepass:** create the gamepass on the Creator Dashboard and put its ID in `Config.Gamepasses.DoubleCash`. A gold shop button then appears automatically.

> ⚠️ Item `Id`s are saved to the DataStore. Rename the display `Name` freely, but don't change an `Id` after launch.

## Roadmap (next things to build)
1. **Super Rebirths / Prestige:** reset rebirths for a "Gems" currency spent on permanent perks
2. **Offline earnings:** pay a percentage of income per second while the player is away (`os.time()` on save/load)
3. **Pets / workers:** hatch eggs with cash for extra multipliers (strong grind and retention hook)
4. **Conveyor speed and dropper-rate upgrades** as repeatable purchases with scaling cost
5. **Global leaderboard** (OrderedDataStore on `TotalEarned` / `Rebirths`)
6. **Daily rewards and playtime gifts** for retention
7. **Real models:** replace the generated parts in `TycoonService` builders with your own models for the full look
8. **Session locking** (e.g. ProfileStore) before a big launch, to stop data duplication when a player server-hops quickly
