-- Player HUD: animated cash counter, multiplier, rebirth button with progress bar,
-- optional 2x Cash gamepass button, and toast notifications from the server.

local MarketplaceService = game:GetService("MarketplaceService")
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")
local TweenService = game:GetService("TweenService")

local Shared = ReplicatedStorage:WaitForChild("Shared")
local Config = require(Shared:WaitForChild("Config"))
local Format = require(Shared:WaitForChild("Format"))
local remotes = ReplicatedStorage:WaitForChild("Remotes")

local player = Players.LocalPlayer

local function create(className, props, children)
	local instance = Instance.new(className)
	for key, value in pairs(props) do
		instance[key] = value
	end
	for _, child in ipairs(children or {}) do
		child.Parent = instance
	end
	return instance
end

local function corner(radius)
	return create("UICorner", { CornerRadius = UDim.new(0, radius or 12) })
end

local function stroke(thickness, onBorder)
	return create("UIStroke", {
		Thickness = thickness or 3,
		Color = Color3.fromRGB(20, 20, 25),
		ApplyStrokeMode = onBorder and Enum.ApplyStrokeMode.Border or Enum.ApplyStrokeMode.Contextual,
	})
end

local gui = create("ScreenGui", {
	Name = "TycoonHUD",
	ResetOnSpawn = false,
	ZIndexBehavior = Enum.ZIndexBehavior.Sibling,
})

---------------------------------------------------------------- cash display

local cashFrame = create("Frame", {
	AnchorPoint = Vector2.new(0.5, 0),
	Position = UDim2.new(0.5, 0, 0, 10),
	Size = UDim2.fromOffset(280, 70),
	BackgroundColor3 = Color3.fromRGB(35, 120, 55),
	Parent = gui,
}, { corner(), stroke(3, true) })

local cashLabel = create("TextLabel", {
	Size = UDim2.new(1, -16, 0.65, 0),
	Position = UDim2.fromOffset(8, 4),
	BackgroundTransparency = 1,
	Font = Enum.Font.FredokaOne,
	TextScaled = true,
	TextColor3 = Color3.new(1, 1, 1),
	Text = "$0",
	Parent = cashFrame,
}, { stroke(2) })

local multLabel = create("TextLabel", {
	Size = UDim2.new(1, -16, 0.3, 0),
	Position = UDim2.new(0, 8, 0.65, 0),
	BackgroundTransparency = 1,
	Font = Enum.Font.FredokaOne,
	TextScaled = true,
	TextColor3 = Color3.fromRGB(255, 235, 120),
	Text = "x1 cash",
	Parent = cashFrame,
})

---------------------------------------------------------------- rebirth button

local rebirthButton = create("TextButton", {
	AnchorPoint = Vector2.new(1, 1),
	Position = UDim2.new(1, -16, 1, -16),
	Size = UDim2.fromOffset(210, 90),
	BackgroundColor3 = Color3.fromRGB(140, 60, 230),
	AutoButtonColor = true,
	Text = "",
	Parent = gui,
}, { corner(), stroke(3, true) })

local rebirthLabel = create("TextLabel", {
	Size = UDim2.new(1, -16, 0.7, -4),
	Position = UDim2.fromOffset(8, 4),
	BackgroundTransparency = 1,
	Font = Enum.Font.FredokaOne,
	TextScaled = true,
	TextColor3 = Color3.new(1, 1, 1),
	Text = "REBIRTH",
	Parent = rebirthButton,
}, { stroke(2) })

local progressBack = create("Frame", {
	Position = UDim2.new(0, 10, 0.72, 0),
	Size = UDim2.new(1, -20, 0.18, 0),
	BackgroundColor3 = Color3.fromRGB(40, 20, 70),
	Parent = rebirthButton,
}, { corner(6) })

local progressFill = create("Frame", {
	Size = UDim2.fromScale(0, 1),
	BackgroundColor3 = Color3.fromRGB(255, 215, 60),
	Parent = progressBack,
}, { corner(6) })

---------------------------------------------------------------- 2x cash gamepass

local passId = Config.Gamepasses.DoubleCash
local passButton
if passId and passId ~= 0 then
	passButton = create("TextButton", {
		AnchorPoint = Vector2.new(1, 1),
		Position = UDim2.new(1, -16, 1, -116),
		Size = UDim2.fromOffset(210, 50),
		BackgroundColor3 = Color3.fromRGB(255, 190, 30),
		Font = Enum.Font.FredokaOne,
		TextScaled = true,
		TextColor3 = Color3.new(1, 1, 1),
		Text = "💰 2x CASH",
		Parent = gui,
	}, { corner(), stroke(3, true) })
	passButton.Activated:Connect(function()
		MarketplaceService:PromptGamePassPurchase(player, passId)
	end)
end

---------------------------------------------------------------- toasts

local toastHolder = create("Frame", {
	AnchorPoint = Vector2.new(0.5, 0),
	Position = UDim2.new(0.5, 0, 0, 90),
	Size = UDim2.fromOffset(420, 200),
	BackgroundTransparency = 1,
	Parent = gui,
}, {
	create("UIListLayout", {
		HorizontalAlignment = Enum.HorizontalAlignment.Center,
		Padding = UDim.new(0, 6),
	}),
})

local function showToast(text, color)
	local toast = create("TextLabel", {
		Size = UDim2.fromOffset(400, 36),
		BackgroundColor3 = Color3.fromRGB(25, 25, 30),
		BackgroundTransparency = 0.15,
		Font = Enum.Font.FredokaOne,
		TextScaled = true,
		TextColor3 = color or Color3.new(1, 1, 1),
		Text = text,
		Parent = toastHolder,
	}, { corner(8), create("UIPadding", { PaddingLeft = UDim.new(0, 8), PaddingRight = UDim.new(0, 8) }) })

	task.delay(2.5, function()
		local fade = TweenInfo.new(0.4)
		TweenService:Create(toast, fade, { BackgroundTransparency = 1, TextTransparency = 1 }):Play()
		task.wait(0.4)
		toast:Destroy()
	end)
end

remotes:WaitForChild("Notify").OnClientEvent:Connect(showToast)

gui.Parent = player:WaitForChild("PlayerGui")

---------------------------------------------------------------- live updates

local leaderstats = player:WaitForChild("leaderstats")
local cashValue = leaderstats:WaitForChild("Cash")
local displayedCash = cashValue.Value
local confirmToken = 0
local confirming = false

local function refreshRebirth()
	local cost = player:GetAttribute("RebirthCost") or Config.Rebirth.BaseCost
	local nextMult = player:GetAttribute("NextMultiplier") or 1
	progressFill.Size = UDim2.fromScale(math.clamp(cashValue.Value / cost, 0, 1), 1)
	if confirming then
		rebirthLabel.Text = "CLICK AGAIN!\nResets cash & items"
	else
		rebirthLabel.Text = string.format("REBIRTH  %s\n→ x%s cash", Format.Cash(cost), tostring(nextMult))
	end
end

local function refreshMultiplier()
	multLabel.Text = "x" .. tostring(player:GetAttribute("Multiplier") or 1) .. " cash"
	if passButton and player:GetAttribute("Has2xCash") then
		passButton.Visible = false
	end
end

cashValue.Changed:Connect(refreshRebirth)
player:GetAttributeChangedSignal("RebirthCost"):Connect(refreshRebirth)
player:GetAttributeChangedSignal("Multiplier"):Connect(refreshMultiplier)
player:GetAttributeChangedSignal("Has2xCash"):Connect(refreshMultiplier)
refreshRebirth()
refreshMultiplier()

-- Smoothly count the cash label toward the real value
RunService.RenderStepped:Connect(function(dt)
	local target = cashValue.Value
	displayedCash += (target - displayedCash) * math.min(1, dt * 10)
	if math.abs(target - displayedCash) < 1 then
		displayedCash = target
	end
	cashLabel.Text = Format.Cash(displayedCash)
end)

rebirthButton.Activated:Connect(function()
	if not confirming then
		confirming = true
		confirmToken += 1
		local token = confirmToken
		refreshRebirth()
		task.delay(3, function()
			if confirmToken == token then
				confirming = false
				refreshRebirth()
			end
		end)
		return
	end

	confirming = false
	confirmToken += 1
	local ok, message = remotes:WaitForChild("RequestRebirth"):InvokeServer()
	showToast(message or "", ok and Color3.fromRGB(200, 140, 255) or Color3.fromRGB(255, 80, 80))
	refreshRebirth()
end)
