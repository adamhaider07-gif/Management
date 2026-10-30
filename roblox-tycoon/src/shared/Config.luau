-- Central tuning file. Every price, value and multiplier in the game lives here,
-- so you can rebalance the whole economy without touching any other script.

local Config = {}

Config.DataStoreName = "ForgeTycoon_v1" -- change the version suffix to wipe all saves
Config.AutosaveInterval = 60 -- seconds

-- World layout
Config.PlotCount = 6
Config.PlotSpacing = 120
Config.PlotSize = 100

-- Ores
Config.ConveyorSpeed = 10 -- studs per second
Config.OreLifetime = 25 -- seconds before a stuck ore is cleaned up

-- Clicking the mine rock (early-game grind)
Config.MineBaseReward = 1
Config.MineCooldown = 0.15

-- Rebirth: cost = BaseCost * CostGrowth ^ rebirths
-- Cash multiplier = 1 + rebirths * MultiplierPerRebirth
Config.Rebirth = {
	BaseCost = 1_000_000,
	CostGrowth = 3,
	MultiplierPerRebirth = 0.5,
}

-- Put your gamepass ID here once you create one (0 = disabled)
Config.Gamepasses = {
	DoubleCash = 0,
}

--[[
	Items are bought in this order of unlock. Fields:
	  Id               unique key (saved to DataStore, so don't rename after launch)
	  Type             "Dropper" | "Upgrader" | "Furnace" | "Pickaxe" | "Decor"
	  Price            cost in cash
	  Requires         Id of the item that must be owned before this button appears
	  RebirthRequired  minimum rebirths needed to buy it
	  Slot             position on the conveyor (Droppers 1-8, Upgraders 1-4)
	  OreValue/Interval  (Dropper) cash per ore and seconds between drops
	  Multiplier       (Upgrader/Furnace/Pickaxe) value multiplier
]]
Config.Items = {
	{ Id = "StoneDropper", Name = "Stone Dropper", Type = "Dropper", Slot = 1, Price = 15,
		OreValue = 2, Interval = 2, Color = Color3.fromRGB(150, 150, 150) },
	{ Id = "SteelPickaxe", Name = "Steel Pickaxe", Type = "Pickaxe", Price = 100,
		Multiplier = 3, Requires = "StoneDropper" },
	{ Id = "CopperDropper", Name = "Copper Dropper", Type = "Dropper", Slot = 2, Price = 150,
		OreValue = 8, Interval = 2, Color = Color3.fromRGB(196, 112, 60), Requires = "StoneDropper" },
	{ Id = "Walls", Name = "Forge Walls", Type = "Decor", Price = 750,
		Color = Color3.fromRGB(90, 76, 66), Requires = "CopperDropper" },
	{ Id = "IronDropper", Name = "Iron Dropper", Type = "Dropper", Slot = 3, Price = 1_000,
		OreValue = 30, Interval = 1.8, Color = Color3.fromRGB(200, 200, 210), Requires = "CopperDropper" },
	{ Id = "Polisher", Name = "Polisher (x1.5)", Type = "Upgrader", Slot = 1, Price = 2_500,
		Multiplier = 1.5, Color = Color3.fromRGB(90, 200, 255), Requires = "IronDropper" },
	{ Id = "GoldDropper", Name = "Gold Dropper", Type = "Dropper", Slot = 4, Price = 6_000,
		OreValue = 120, Interval = 1.6, Color = Color3.fromRGB(255, 200, 40), Requires = "IronDropper" },
	{ Id = "DiamondPickaxe", Name = "Diamond Pickaxe", Type = "Pickaxe", Price = 20_000,
		Multiplier = 10, Requires = "GoldDropper" },
	{ Id = "Smelter", Name = "Smelter (x2)", Type = "Upgrader", Slot = 2, Price = 30_000,
		Multiplier = 2, Color = Color3.fromRGB(255, 120, 40), Requires = "GoldDropper" },
	{ Id = "DiamondDropper", Name = "Diamond Dropper", Type = "Dropper", Slot = 5, Price = 40_000,
		OreValue = 600, Interval = 1.5, Color = Color3.fromRGB(120, 240, 255), Requires = "GoldDropper" },
	{ Id = "MegaFurnace", Name = "Mega Furnace (x2)", Type = "Furnace", Price = 100_000,
		Multiplier = 2, Color = Color3.fromRGB(255, 60, 30), Requires = "DiamondDropper" },
	{ Id = "ObsidianDropper", Name = "Obsidian Dropper", Type = "Dropper", Slot = 6, Price = 250_000,
		OreValue = 3_000, Interval = 1.4, Color = Color3.fromRGB(60, 30, 90),
		Requires = "DiamondDropper", RebirthRequired = 1 },
	{ Id = "Refinery", Name = "Refinery (x3)", Type = "Upgrader", Slot = 3, Price = 500_000,
		Multiplier = 3, Color = Color3.fromRGB(80, 255, 120), Requires = "Smelter", RebirthRequired = 1 },
	{ Id = "PlasmaDropper", Name = "Plasma Dropper", Type = "Dropper", Slot = 7, Price = 2_500_000,
		OreValue = 20_000, Interval = 1.2, Color = Color3.fromRGB(255, 60, 200),
		Requires = "ObsidianDropper", RebirthRequired = 2 },
	{ Id = "QuantumInfuser", Name = "Quantum Infuser (x5)", Type = "Upgrader", Slot = 4, Price = 10_000_000,
		Multiplier = 5, Color = Color3.fromRGB(170, 90, 255), Requires = "Refinery", RebirthRequired = 3 },
	{ Id = "VoidDropper", Name = "Void Dropper", Type = "Dropper", Slot = 8, Price = 15_000_000,
		OreValue = 150_000, Interval = 1, Color = Color3.fromRGB(20, 20, 30),
		Requires = "PlasmaDropper", RebirthRequired = 3 },
}

return Config
