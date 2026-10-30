-- Number formatting helpers shared by server and client (1500 -> "1.5K").

local Format = {}

local SUFFIXES = { "", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc" }

function Format.Number(n: number): string
	n = math.floor(n)
	if n < 1000 then
		return tostring(n)
	end
	local tier = math.min(math.floor(math.log10(n) / 3), #SUFFIXES - 1)
	local scaled = n / 10 ^ (tier * 3)
	local text = (string.format("%.2f", scaled):gsub("%.?0+$", ""))
	return text .. SUFFIXES[tier + 1]
end

function Format.Cash(n: number): string
	return "$" .. Format.Number(n)
end

return Format
