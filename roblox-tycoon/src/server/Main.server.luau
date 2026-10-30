-- Server entry point: creates remotes and wires players to their data and tycoon.

local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local DataService = require(script.Parent.DataService)
local TycoonService = require(script.Parent.TycoonService)

local remotes = Instance.new("Folder")
remotes.Name = "Remotes"

local rebirthRemote = Instance.new("RemoteFunction")
rebirthRemote.Name = "RequestRebirth"
rebirthRemote.Parent = remotes

local notifyRemote = Instance.new("RemoteEvent")
notifyRemote.Name = "Notify"
notifyRemote.Parent = remotes

remotes.Parent = ReplicatedStorage

TycoonService.Init(notifyRemote)
DataService.StartAutosave()

local function onPlayerAdded(player)
	if DataService.Load(player) then
		TycoonService.Assign(player)
	end
end

Players.PlayerAdded:Connect(onPlayerAdded)
for _, player in ipairs(Players:GetPlayers()) do
	task.spawn(onPlayerAdded, player)
end

Players.PlayerRemoving:Connect(function(player)
	TycoonService.Release(player)
	DataService.Release(player)
end)

rebirthRemote.OnServerInvoke = function(player)
	return TycoonService.Rebirth(player)
end
