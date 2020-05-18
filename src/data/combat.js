export const ITEMS = {
	mouseCarcass: {
		name: "Mouse Carcass",
		sellPrice: 3,
		icon: require("@/assets/art/combat/items/dead_mouse.png"),
		healAmount: 15
	},
	sord: {
		name: "SORD",
		sellPrice: 420,
		icon: require("@/assets/art/combat/items/sord.png"),
		overlay: require("@/assets/art/combat/items/sord_overlay.png"),
		equipmentSlot: "hand"
	},
	riotSuit: {
		name: "Riot Suit",
		sellPrice: 600,
		icon: require("@/assets/art/combat/items/riot_suit.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/riot_suit_overlay.png"),
	},
	syndiHardsuit: {
		name: "Syndicate Hardsuit",
		sellPrice: 1200,
		icon: require("@/assets/art/combat/items/syndi_hardsuit_overlay.png"),
		equipmentSlot: "chest",
		overlay: require("@/assets/art/combat/items/syndi_hardsuit_overlay.png")
	}
};

export const ENEMIES = {
	mouse: {
		name: "Mouse",
		icon: require("@/assets/art/combat/enemies/mouse.png"),
		stats: {
			maxHealth: 10,
			attackSpeed: 2.5,
			precision: -1,
			power: -1,
			evasion: -1,
			protection: 1
		},
		robustness: 1,
		item: "mouseCarcass"
	},
	cargoTech: {
		name: "Cargo Technician",
		icon: require("@/assets/art/combat/enemies/cargo_tech.png"),
		robustness: 6,
		stats: {
			maxHealth: 20,
			attackSpeed: 3
		},
		itemTables: [
			{
				chance: 1,
				items: {
					id: "money",
					count: [20, 40]
				}
			},
			{
				chance: .8,
				item: "iron"
			}
		]
	},
	debugA: {
		name: "Debug A",
		icon: require("@/assets/art/debug/A.png"),
		robustness: 1,
		stats: {
			maxHealth: 20,
			attackSpeed: 2,
			precision: -20,
			power: -1,
			evasion: -20,
		},
		item: "iron"
	},
	debugB: {
		name: "Debug B",
		icon: require("@/assets/art/debug/B.png"),
		robustness: 2,
		stats: {
			maxHealth: 20,
			attackSpeed: 2,
			precision: -10,
			power: -1,
			evasion: -10,
		},
		items: {
			id: "iron",
			count: 2
		}
	},
	debugC: {
		name: "Debug C",
		icon: require("@/assets/art/debug/C.png"),
		robustness: 3,
		stats: {
			maxHealth: 20,
			attackSpeed: 2,
			precision: 0,
			power: -1,
			evasion: 0,
		},
		items: {
			id: "iron",
			count: [0, 3]
		}
	},
	debugD: {
		name: "Debug D",
		icon: require("@/assets/art/debug/D.png"),
		robustness: 4,
		stats: {
			maxHealth: 20,
			attackSpeed: 2,
			precision: 10,
			power: -1,
			evasion: 10,
		},
		itemTable: [
			{
				id: "iron",
				count: [1, 3],
				weight: 600
			}, {
				id: "silver",
				count: 2,
				weight: 200
			}, {
				id: "gold",
				weight: 100
			}, {
				id: "titanium",
				weight: 1
			},
			{
				id: null,
				weight: 99
			}
		]
	},
	debugE: {
		name: "Debug E",
		icon: require("@/assets/art/debug/E.png"),
		robustness: 5,
		stats: {
			maxHealth: 20,
			attackSpeed: 2,
			precision: 20,
			power: -1,
			evasion: 20,
		},
		itemTables: [
			{
				chance: 1,
				item: 'iron'
			},
			{
				chance: 0.1,
				items: {
					id: 'silver',
					count: [0, 2]
				}
			},
			{
				chance: 0.01,
				itemTable: [
					{
						id: 'gold',
						weight: 3
					},
					{
						id: 'titanium',
						weight: 1
					}
				]
			}
		]
	}
}

export const ZONES = [
	{
		name: "Maintenance",
		icon: require("@/assets/art/combat/zones/maint.png"),
		enemies: ["mouse", "cargoTech"]
	},
	{
		name: "Debug Land",
		icon: require("@/assets/art/debug/banner.png"),
		enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	}
]