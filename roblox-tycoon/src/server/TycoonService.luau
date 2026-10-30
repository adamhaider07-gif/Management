-- Builds the plots, hands them to players, and runs droppers, upgraders,
-- purchase buttons, the mine rock and rebirths. All geometry is generated in code,
-- so the game runs from an empty Baseplate with no models required.

local Debris = game:GetService("Debris")
local MarketplaceService = game:GetService("MarketplaceService")
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Config = require(ReplicatedStorage.Shared.Config)
local Format = require(ReplicatedStorage.Shared.Format)
local DataService = require(script.Parent.DataService)

local TycoonService = {}

local ItemsById = {}
for _, item in ipairs(Config.Items) do
	ItemsById[item.Id] = item
end

local PLOT_TOP = 1 -- height of the plot floor surface
local CONVEYOR_START_X = -42
local CONVEYOR_END_X = 33
local FURNACE_X = 36
local DROPPER_X = { -38, -32, -26, -20, -14, -8, -2, 4 }
local UPGRADER_X = { 10, 16, 22, 28 }
local FURNACE_COLOR = Color3.fromRGB(70, 40, 35)
local BUTTON_COLUMNS = 6

local plots = {}
local plotByPlayer = {}
local lastMine = {}
local notifyRemote

---------------------------------------------------------------- helpers

local function at(plot, x, y, z)
	return CFrame.new(plot.Center + Vector3.new(x, y, z))
end

local function makePart(parent, size, cframe, props)
	local part = Instance.new("Part")
	part.Anchored = true
	part.Size = size
	part.CFrame = cframe
	part.TopSurface = Enum.SurfaceType.Smooth
	part.BottomSurface = Enum.SurfaceType.Smooth
	if props then
		for key, value in pairs(props) do
			part[key] = value
		end
	end
	part.Parent = parent
	return part
end

local function makeBillboard(adornee, text, offsetY, size, maxDistance)
	local gui = Instance.new("BillboardGui")
	gui.Size = size or UDim2.fromOffset(200, 50)
	gui.StudsOffset = Vector3.new(0, offsetY, 0)
	gui.MaxDistance = maxDistance or 90
	gui.Adornee = adornee

	local label = Instance.new("TextLabel")
	label.Name = "Label"
	label.Size = UDim2.fromScale(1, 1)
	label.BackgroundTransparency = 1
	label.TextScaled = true
	label.Font = Enum.Font.FredokaOne
	label.TextColor3 = Color3.new(1, 1, 1)
	label.TextStrokeTransparency = 0.2
	label.Text = text
	label.Parent = gui

	gui.Parent = adornee
	return label
end

local function notify(player, text, color)
	if notifyRemote then
		notifyRemote:FireClient(player, text, color)
	end
end

local function isOreFor(plot, part)
	return part:GetAttribute("OreValue") ~= nil and part:GetAttribute("PlotIndex") == plot.Index
end

---------------------------------------------------------------- multipliers

function TycoonService.GetMultiplier(player)
	local data = DataService.Get(player)
	local rebirths = data and data.Rebirths or 0
	local mult = 1 + rebirths * Config.Rebirth.MultiplierPerRebirth
	if player:GetAttribute("Has2xCash") then
		mult *= 2
	end
	return mult
end

function TycoonService.GetRebirthCost(rebirths)
	return Config.Rebirth.BaseCost * Config.Rebirth.CostGrowth ^ rebirths
end

local function getPickaxeMultiplier(data)
	local mult = 1
	for id in pairs(data.Purchased) do
		local item = ItemsById[id]
		if item and item.Type == "Pickaxe" then
			mult = math.max(mult, item.Multiplier)
		end
	end
	return mult
end

-- The client HUD reads these attributes
local function updatePlayerAttributes(player)
	local data = DataService.Get(player)
	if not data then
		return
	end
	player:SetAttribute("Multiplier", TycoonService.GetMultiplier(player))
	player:SetAttribute("RebirthCost", TycoonService.GetRebirthCost(data.Rebirths))
	player:SetAttribute("NextMultiplier", 1 + (data.Rebirths + 1) * Config.Rebirth.MultiplierPerRebirth)
end

local function updateMineLabel(plot)
	local reward = Config.MineBaseReward
	if plot.Owner then
		local data = DataService.Get(plot.Owner)
		if data then
			reward *= getPickaxeMultiplier(data) * TycoonService.GetMultiplier(plot.Owner)
		end
	end
	plot.MineLabel.Text = "⛏ Click to mine!\n+" .. Format.Cash(reward)
end

local function updateFurnaceLabel(plot)
	plot.FurnaceLabel.Text = "🔥 Furnace x" .. plot.FurnaceMultiplier
end

---------------------------------------------------------------- ores

local function spawnOre(plot, item, cframe)
	local ore = Instance.new("Part")
	ore.Name = "Ore"
	ore.Size = Vector3.new(1, 1, 1)
	ore.CFrame = cframe
	ore.Color = item.Color
	ore.Material = Enum.Material.SmoothPlastic
	ore.TopSurface = Enum.SurfaceType.Smooth
	ore.BottomSurface = Enum.SurfaceType.Smooth
	ore:SetAttribute("OreValue", item.OreValue)
	ore:SetAttribute("PlotIndex", plot.Index)
	ore.Parent = plot.Ores
	-- Server owns ore physics so exploiters can't fling ores into the furnace
	pcall(function()
		ore:SetNetworkOwner(nil)
	end)
	Debris:AddItem(ore, Config.OreLifetime)
end

---------------------------------------------------------------- item builders

local Builders = {}

function Builders.Dropper(plot, item, model)
	local x = DROPPER_X[item.Slot]
	makePart(model, Vector3.new(2, 9, 2), at(plot, x, PLOT_TOP + 4.5, -5),
		{ Color = Color3.fromRGB(60, 60, 65), Material = Enum.Material.Metal })
	makePart(model, Vector3.new(2, 1.5, 5), at(plot, x, PLOT_TOP + 8.25, -2.5),
		{ Color = Color3.fromRGB(60, 60, 65), Material = Enum.Material.Metal })
	local head = makePart(model, Vector3.new(3, 3, 3), at(plot, x, PLOT_TOP + 7.5, 0),
		{ Name = "Head", Color = item.Color, Material = Enum.Material.Neon })
	makeBillboard(head, item.Name .. "\n" .. Format.Cash(item.OreValue) .. " / ore", 3.5,
		UDim2.fromOffset(160, 50), 60)

	local spout = at(plot, x, PLOT_TOP + 5, 0)
	task.spawn(function()
		while model.Parent do
			task.wait(item.Interval)
			if model.Parent then
				spawnOre(plot, item, spout)
			end
		end
	end)
end

function Builders.Upgrader(plot, item, model)
	local x = UPGRADER_X[item.Slot]
	local frame = { Color = Color3.fromRGB(45, 45, 50), Material = Enum.Material.Metal }
	makePart(model, Vector3.new(1, 7, 1), at(plot, x, PLOT_TOP + 3.5, 4), frame)
	makePart(model, Vector3.new(1, 7, 1), at(plot, x, PLOT_TOP + 3.5, -4), frame)
	local beam = makePart(model, Vector3.new(1, 1, 9), at(plot, x, PLOT_TOP + 7.5, 0), frame)
	makeBillboard(beam, item.Name, 2.5, UDim2.fromOffset(160, 40), 60)

	local scanner = makePart(model, Vector3.new(0.6, 5, 6), at(plot, x, PLOT_TOP + 3.5, 0), {
		Name = "Scanner",
		Color = item.Color,
		Material = Enum.Material.Neon,
		Transparency = 0.6,
		CanCollide = false,
	})

	local tag = "Up_" .. item.Id
	scanner.Touched:Connect(function(hit)
		if not isOreFor(plot, hit) or hit:GetAttribute(tag) then
			return
		end
		hit:SetAttribute(tag, true)
		hit:SetAttribute("OreValue", hit:GetAttribute("OreValue") * item.Multiplier)
		hit.Color = item.Color
		hit.Material = Enum.Material.Neon
	end)
end

function Builders.Furnace(plot, item, model)
	plot.FurnaceMultiplier = math.max(plot.FurnaceMultiplier, item.Multiplier)
	plot.Furnace.Color = item.Color
	Instance.new("Fire").Parent = plot.Furnace
	makePart(model, Vector3.new(2, 8, 2), at(plot, FURNACE_X + 1.5, PLOT_TOP + 10, 2),
		{ Color = FURNACE_COLOR, Material = Enum.Material.Brick })
	updateFurnaceLabel(plot)
end

function Builders.Pickaxe(plot)
	updateMineLabel(plot)
end

function Builders.Decor(plot, item, model)
	local size = Config.PlotSize
	local half = size / 2
	local height = 8
	local y = PLOT_TOP + height / 2
	local gate = 16
	local segment = (size - gate) / 2
	local props = { Color = item.Color, Material = Enum.Material.Brick }
	makePart(model, Vector3.new(size, height, 1), at(plot, 0, y, -half + 0.5), props)
	makePart(model, Vector3.new(1, height, size), at(plot, -half + 0.5, y, 0), props)
	makePart(model, Vector3.new(1, height, size), at(plot, half - 0.5, y, 0), props)
	makePart(model, Vector3.new(segment, height, 1), at(plot, -half + segment / 2, y, half - 0.5), props)
	makePart(model, Vector3.new(segment, height, 1), at(plot, half - segment / 2, y, half - 0.5), props)
end

local function buildItem(plot, item)
	local model = Instance.new("Model")
	model.Name = item.Id
	model.Parent = plot.Items
	Builders[item.Type](plot, item, model)
end

---------------------------------------------------------------- buttons

local refreshButtons

local function createButton(plot, item, index, data)
	local col = (index - 1) % BUTTON_COLUMNS
	local row = math.floor((index - 1) / BUTTON_COLUMNS)
	local required = item.RebirthRequired or 0
	local locked = data.Rebirths < required

	local button = makePart(plot.Buttons, Vector3.new(5, 0.4, 5),
		at(plot, -40 + col * 16, PLOT_TOP + 0.2, 15 + row * 11), {
			Name = item.Id,
			Material = Enum.Material.Neon,
			Color = locked and Color3.fromRGB(200, 50, 50) or Color3.fromRGB(60, 220, 90),
		})

	local text = locked
		and string.format("%s\n🔒 Rebirth %d", item.Name, required)
		or string.format("%s\n%s", item.Name, Format.Cash(item.Price))
	makeBillboard(button, text, 3, UDim2.fromOffset(200, 60), 70)

	local busy = false
	button.Touched:Connect(function(hit)
		if busy then
			return
		end
		local player = Players:GetPlayerFromCharacter(hit.Parent)
		if not player or player ~= plot.Owner then
			return
		end
		busy = true
		local bought = TycoonService.Purchase(player, item.Id)
		if not bought then
			-- Slow down the "can't afford" spam while the player stands on it
			task.delay(1.5, function()
				busy = false
			end)
		end
	end)
end

function refreshButtons(plot)
	plot.Buttons:ClearAllChildren()
	local owner = plot.Owner
	local data = owner and DataService.Get(owner)
	if not data then
		return
	end
	for index, item in ipairs(Config.Items) do
		local unlocked = item.Requires == nil or data.Purchased[item.Requires]
		if unlocked and not data.Purchased[item.Id] then
			createButton(plot, item, index, data)
		end
	end
end

---------------------------------------------------------------- plots

local function resetPlot(plot)
	plot.Items:ClearAllChildren()
	plot.Ores:ClearAllChildren()
	plot.Buttons:ClearAllChildren()
	plot.FurnaceMultiplier = 1
	plot.Furnace.Color = FURNACE_COLOR
	for _, child in ipairs(plot.Furnace:GetChildren()) do
		if child:IsA("Fire") then
			child:Destroy()
		end
	end
	updateFurnaceLabel(plot)
	updateMineLabel(plot)
end

local function buildOwnedItems(plot)
	local data = DataService.Get(plot.Owner)
	for _, item in ipairs(Config.Items) do
		if data.Purchased[item.Id] then
			buildItem(plot, item)
		end
	end
	refreshButtons(plot)
	updateMineLabel(plot)
end

local function onMine(plot, player)
	if player ~= plot.Owner then
		return
	end
	local now = os.clock()
	if lastMine[player] and now - lastMine[player] < Config.MineCooldown then
		return
	end
	lastMine[player] = now
	local data = DataService.Get(player)
	if data then
		local reward = Config.MineBaseReward * getPickaxeMultiplier(data) * TycoonService.GetMultiplier(player)
		DataService.AddCash(player, reward)
	end
end

local function onFurnaceTouched(plot, hit)
	if not isOreFor(plot, hit) then
		return
	end
	local value = hit:GetAttribute("OreValue")
	hit:SetAttribute("OreValue", nil) -- make sure an ore only pays once
	hit:Destroy()
	if plot.Owner then
		DataService.AddCash(plot.Owner, value * plot.FurnaceMultiplier * TycoonService.GetMultiplier(plot.Owner))
	end
end

local function createPlot(index, parent)
	local offsetX = (index - (Config.PlotCount + 1) / 2) * Config.PlotSpacing
	local plot = {
		Index = index,
		Center = Vector3.new(offsetX, 0, 0),
		Owner = nil,
		FurnaceMultiplier = 1,
	}

	local folder = Instance.new("Folder")
	folder.Name = "Plot" .. index
	folder.Parent = parent
	for _, name in ipairs({ "Static", "Items", "Buttons", "Ores" }) do
		local sub = Instance.new("Folder")
		sub.Name = name
		sub.Parent = folder
		plot[name] = sub
	end

	local static = plot.Static
	local size = Config.PlotSize
	makePart(static, Vector3.new(size, 1, size), at(plot, 0, PLOT_TOP - 0.5, 0), {
		Name = "Base",
		Material = Enum.Material.Slate,
		Color = index % 2 == 0 and Color3.fromRGB(70, 75, 85) or Color3.fromRGB(80, 85, 95),
	})

	-- Conveyor: an anchored part with velocity carries anything resting on it
	local length = CONVEYOR_END_X - CONVEYOR_START_X
	local midX = (CONVEYOR_START_X + CONVEYOR_END_X) / 2
	local conveyor = makePart(static, Vector3.new(length, 1, 6), at(plot, midX, PLOT_TOP + 0.5, 0), {
		Name = "Conveyor",
		Material = Enum.Material.DiamondPlate,
		Color = Color3.fromRGB(35, 35, 40),
	})
	conveyor.AssemblyLinearVelocity = Vector3.new(Config.ConveyorSpeed, 0, 0)

	local railProps = { Color = Color3.fromRGB(240, 190, 40), Material = Enum.Material.Metal }
	makePart(static, Vector3.new(length, 2, 0.5), at(plot, midX, PLOT_TOP + 1, 3.25), railProps)
	makePart(static, Vector3.new(length, 2, 0.5), at(plot, midX, PLOT_TOP + 1, -3.25), railProps)
	makePart(static, Vector3.new(0.5, 2, 7), at(plot, CONVEYOR_START_X - 0.25, PLOT_TOP + 1, 0), railProps)

	local furnace = makePart(static, Vector3.new(6, 6, 8), at(plot, FURNACE_X, PLOT_TOP + 3, 0), {
		Name = "Furnace",
		Material = Enum.Material.Brick,
		Color = FURNACE_COLOR,
	})
	makePart(static, Vector3.new(0.2, 2.5, 5.5), at(plot, FURNACE_X - 3.05, PLOT_TOP + 2.25, 0), {
		Material = Enum.Material.Neon,
		Color = Color3.fromRGB(255, 120, 20),
		CanCollide = false,
		CanTouch = false,
	})
	plot.Furnace = furnace
	plot.FurnaceLabel = makeBillboard(furnace, "", 5, UDim2.fromOffset(160, 40))
	furnace.Touched:Connect(function(hit)
		onFurnaceTouched(plot, hit)
	end)

	local rock = makePart(static, Vector3.new(6, 6, 6), at(plot, -30, PLOT_TOP + 3, -25), {
		Name = "MineRock",
		Material = Enum.Material.Rock,
		Color = Color3.fromRGB(110, 100, 95),
	})
	local click = Instance.new("ClickDetector")
	click.MaxActivationDistance = 32
	click.Parent = rock
	click.MouseClick:Connect(function(player)
		onMine(plot, player)
	end)
	plot.MineLabel = makeBillboard(rock, "", 5, UDim2.fromOffset(180, 50))

	local sign = makePart(static, Vector3.new(1, 1, 1), at(plot, 0, PLOT_TOP + 14, -40), {
		Transparency = 1,
		CanCollide = false,
	})
	plot.SignLabel = makeBillboard(sign, "Empty Plot", 0, UDim2.fromOffset(400, 70), 250)

	updateFurnaceLabel(plot)
	updateMineLabel(plot)
	return plot
end

local function teleportToPlot(player, character)
	local plot = plotByPlayer[player]
	if not plot or not character:WaitForChild("HumanoidRootPart", 5) then
		return
	end
	task.wait()
	local spawn = plot.Center + Vector3.new(0, PLOT_TOP + 4, 44)
	character:PivotTo(CFrame.lookAt(spawn, spawn + Vector3.new(0, 0, -1)))
end

---------------------------------------------------------------- gamepass

local function checkGamepass(player)
	local passId = Config.Gamepasses.DoubleCash
	if not passId or passId == 0 then
		return
	end
	local ok, owns = pcall(MarketplaceService.UserOwnsGamePassAsync, MarketplaceService, player.UserId, passId)
	if ok and owns and player.Parent then
		player:SetAttribute("Has2xCash", true)
		updatePlayerAttributes(player)
	end
end

MarketplaceService.PromptGamePassPurchaseFinished:Connect(function(player, passId, purchased)
	if purchased and passId == Config.Gamepasses.DoubleCash then
		player:SetAttribute("Has2xCash", true)
		updatePlayerAttributes(player)
		notify(player, "2x Cash activated! 🎉", Color3.fromRGB(255, 215, 0))
	end
end)

---------------------------------------------------------------- public API

function TycoonService.Init(remote)
	notifyRemote = remote

	if not workspace:FindFirstChild("Baseplate") then
		makePart(workspace, Vector3.new(Config.PlotCount * Config.PlotSpacing + 200, 1, 400),
			CFrame.new(0, -0.5, 0), {
				Name = "Baseplate",
				Material = Enum.Material.Grass,
				Color = Color3.fromRGB(80, 140, 70),
			})
	end

	local folder = Instance.new("Folder")
	folder.Name = "Tycoons"
	folder.Parent = workspace
	for index = 1, Config.PlotCount do
		plots[index] = createPlot(index, folder)
	end
end

function TycoonService.Assign(player)
	local plot
	for _, candidate in ipairs(plots) do
		if not candidate.Owner then
			plot = candidate
			break
		end
	end
	if not plot then
		notify(player, "All plots are taken - try another server!", Color3.fromRGB(255, 80, 80))
		return
	end

	plot.Owner = player
	plotByPlayer[player] = plot
	plot.SignLabel.Text = player.DisplayName .. "'s Forge"
	updatePlayerAttributes(player)
	buildOwnedItems(plot)
	task.spawn(checkGamepass, player)

	player.CharacterAdded:Connect(function(character)
		teleportToPlot(player, character)
	end)
	if player.Character then
		task.spawn(teleportToPlot, player, player.Character)
	end
end

function TycoonService.Release(player)
	lastMine[player] = nil
	local plot = plotByPlayer[player]
	if not plot then
		return
	end
	plotByPlayer[player] = nil
	plot.Owner = nil
	plot.SignLabel.Text = "Empty Plot"
	resetPlot(plot)
end

function TycoonService.Purchase(player, itemId)
	local plot = plotByPlayer[player]
	local item = ItemsById[itemId]
	local data = DataService.Get(player)
	if not (plot and item and data) or data.Purchased[itemId] then
		return false
	end
	if item.Requires and not data.Purchased[item.Requires] then
		return false
	end
	if data.Rebirths < (item.RebirthRequired or 0) then
		notify(player, "Rebirth " .. item.RebirthRequired .. " required!", Color3.fromRGB(255, 80, 80))
		return false
	end
	if not DataService.SpendCash(player, item.Price) then
		notify(player, "You need " .. Format.Cash(item.Price - data.Cash) .. " more!", Color3.fromRGB(255, 80, 80))
		return false
	end

	data.Purchased[itemId] = true
	buildItem(plot, item)
	refreshButtons(plot)
	notify(player, "Bought " .. item.Name .. "!", Color3.fromRGB(90, 230, 120))
	return true
end

function TycoonService.Rebirth(player)
	local plot = plotByPlayer[player]
	local data = DataService.Get(player)
	if not (plot and data) then
		return false, "You don't have a tycoon yet."
	end
	local cost = TycoonService.GetRebirthCost(data.Rebirths)
	if data.Cash < cost then
		return false, "You need " .. Format.Cash(cost - data.Cash) .. " more to rebirth!"
	end

	data.Cash = 0
	data.Rebirths += 1
	data.Purchased = {}
	DataService.Sync(player)
	updatePlayerAttributes(player)
	resetPlot(plot)
	buildOwnedItems(plot)
	return true, string.format("REBIRTH %d! Cash multiplier is now x%s", data.Rebirths,
		tostring(TycoonService.GetMultiplier(player)))
end

return TycoonService
