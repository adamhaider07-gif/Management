-- Loads, holds and saves player data. Everything else reads/writes cash through here
-- so leaderstats always stay in sync.

local DataStoreService = game:GetService("DataStoreService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")

local Config = require(ReplicatedStorage.Shared.Config)

local DataService = {}

local DEFAULT_DATA = {
	Cash = 0,
	Rebirths = 0,
	TotalEarned = 0,
	Purchased = {}, -- [itemId] = true
}

local store
pcall(function()
	store = DataStoreService:GetDataStore(Config.DataStoreName)
end)

local profiles = {} -- [player] = { Data = table, CanSave = boolean }
local activeSaves = 0

local function deepCopy(value)
	if type(value) ~= "table" then
		return value
	end
	local copy = {}
	for k, v in pairs(value) do
		copy[k] = deepCopy(v)
	end
	return copy
end

-- Fill in any fields added since the player last saved
local function reconcile(data)
	for key, value in pairs(DEFAULT_DATA) do
		if data[key] == nil then
			data[key] = deepCopy(value)
		end
	end
	return data
end

local function retry(callback)
	local lastError
	for attempt = 1, 3 do
		local ok, result = pcall(callback)
		if ok then
			return true, result
		end
		lastError = result
		task.wait(attempt)
	end
	return false, lastError
end

local function keyFor(player)
	return "Player_" .. player.UserId
end

local function createLeaderstats(player, data)
	local leaderstats = Instance.new("Folder")
	leaderstats.Name = "leaderstats"

	local cash = Instance.new("NumberValue")
	cash.Name = "Cash"
	cash.Value = data.Cash
	cash.Parent = leaderstats

	local rebirths = Instance.new("IntValue")
	rebirths.Name = "Rebirths"
	rebirths.Value = data.Rebirths
	rebirths.Parent = leaderstats

	leaderstats.Parent = player
end

local function save(player, profile)
	if not profile.CanSave then
		return
	end
	activeSaves += 1
	local ok, err = retry(function()
		store:UpdateAsync(keyFor(player), function()
			return profile.Data
		end)
	end)
	activeSaves -= 1
	if not ok then
		warn("[DataService] Failed to save", player.Name, err)
	end
end

-- Yields. Returns the player's data, or nil if they left / loading failed.
function DataService.Load(player)
	local data
	local canSave = false

	if store then
		local ok, result = retry(function()
			return store:GetAsync(keyFor(player))
		end)
		if ok then
			data = result
			canSave = true
		else
			warn("[DataService] Failed to load", player.Name, result)
		end
	end

	if not canSave then
		if not RunService:IsStudio() then
			-- Never let a player play on blank data: saving would wipe their real save.
			player:Kick("Couldn't load your data. Please rejoin in a moment!")
			return nil
		end
		warn("[DataService] DataStores unavailable - playing without saving. "
			.. "Enable 'Studio Access to API Services' in Game Settings to test saving.")
	end

	if not player.Parent then
		return nil
	end

	data = reconcile(type(data) == "table" and data or {})
	profiles[player] = { Data = data, CanSave = canSave }
	createLeaderstats(player, data)
	return data
end

function DataService.Get(player)
	local profile = profiles[player]
	return profile and profile.Data
end

-- Push data values to leaderstats after changing them directly
function DataService.Sync(player)
	local data = DataService.Get(player)
	local leaderstats = player:FindFirstChild("leaderstats")
	if not (data and leaderstats) then
		return
	end
	leaderstats.Cash.Value = data.Cash
	leaderstats.Rebirths.Value = data.Rebirths
end

function DataService.AddCash(player, amount)
	local data = DataService.Get(player)
	if not data then
		return
	end
	data.Cash += amount
	data.TotalEarned += amount
	DataService.Sync(player)
end

function DataService.SpendCash(player, amount)
	local data = DataService.Get(player)
	if not data or data.Cash < amount then
		return false
	end
	data.Cash -= amount
	DataService.Sync(player)
	return true
end

function DataService.Release(player)
	local profile = profiles[player]
	if not profile then
		return
	end
	profiles[player] = nil
	save(player, profile)
end

function DataService.StartAutosave()
	task.spawn(function()
		while true do
			task.wait(Config.AutosaveInterval)
			for player, profile in pairs(profiles) do
				task.spawn(save, player, profile)
			end
		end
	end)

	game:BindToClose(function()
		for player, profile in pairs(profiles) do
			task.spawn(save, player, profile)
		end
		-- Also waits for saves started by PlayerRemoving during shutdown
		while activeSaves > 0 do
			task.wait()
		end
	end)
end

return DataService
