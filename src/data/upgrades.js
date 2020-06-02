

const COMBAT_UPGRADES = {
	autoeat: {
		name: "Unlock Auto-Eat",
		description: "Allows food to automatically be consumed when missing more health than the food's heal amount.",
		icon: require('@/assets/art/combat/upgrades/autoeat.png'),
		requiredItems: {
			money: 10000
		},
		upgrade: "autoeat",
		requiredUpgrades: {
			autoeat: 0
		}
	}
}

const MINING_UPGRADES = {
	upgradeMining1: {
		name: "Upgrade Mining Tools",
		description: "Increases mining speed by +20%",
		icon: require('@/assets/art/mining/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			mining: 10
		},
		upgrade: "miningTools",
		requiredUpgrades: {
			miningTools: 0
		}
	},
	upgradeMining2: {
		name: "Upgrade Mining Tools",
		description: "Increases mining speed by +20%, to +40%",
		icon: require('@/assets/art/mining/upgrade1.png'),
		requiredItems: {
			money: 75000
		},
		requiredLevels: {
			mining: 20
		},
		upgrade: "miningTools",
		requiredUpgrades: {
			miningTools: 1
		}
	},
	upgradeMining3: {
		name: "Upgrade Mining Tools",
		description: "Increases mining speed by an additional +20%, to +60%",
		icon: require('@/assets/art/mining/upgrade1.png'),
		requiredItems: {
			money: 250000
		},
		requiredLevels: {
			mining: 30
		},
		upgrade: "miningTools",
		requiredUpgrades: {
			miningTools: 2
		}
	},
	upgradeMining4: {
		name: "Upgrade Mining Tools",
		description: "Increases mining speed by an additional +20%, to +80%",
		icon: require('@/assets/art/mining/upgrade1.png'),
		requiredItems: {
			money: 800000
		},
		requiredLevels: {
			mining: 40
		},
		upgrade: "miningTools",
		requiredUpgrades: {
			miningTools: 3
		}
	},
	upgradeMining5: {
		name: "Upgrade Mining Tools",
		description: "Increases mining speed by an additional +20%, to +100%",
		icon: require('@/assets/art/mining/upgrade1.png'),
		requiredItems: {
			money: 2000000
		},
		requiredLevels: {
			mining: 50
		},
		upgrade: "miningTools",
		requiredUpgrades: {
			miningTools: 4
		}
	}
}

const XENOBIO_UPGRADES = {
	upgradeXenobio1: {
		name: "Upgrade Xenobiology Pens",
		description: "x2 tier 1 slime yield.",
		icon: require('@/assets/art/xenobio/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			xenobiology: 10
		},
		upgrade: "xenobiologyPens",
		requiredUpgrades: {
			xenobiologyPens: 0
		}
	},
	upgradeXenobio2: {
		name: "Upgrade Xenobiology Pens",
		description: "x4 tier 1 slime yield, x2 tier 2 slime yield.",
		icon: require('@/assets/art/xenobio/upgrade1.png'),
		requiredItems: {
			money: 500000
		},
		requiredLevels: {
			xenobiology: 25
		},
		upgrade: "xenobiologyPens",
		requiredUpgrades: {
			xenobiologyPens: 1
		}
	},
	upgradeXenobio3: {
		name: "Upgrade Xenobiology Pens",
		description: "x8 tier 1 slime yield, x4 tier 2 slime yield, x2 tier 3 slime yield.",
		icon: require('@/assets/art/xenobio/upgrade1.png'),
		requiredItems: {
			money: 1500000
		},
		requiredLevels: {
			xenobiology: 40
		},
		upgrade: "xenobiologyPens",
		requiredUpgrades: {
			xenobiologyPens: 2
		}
	}
}
const ENGINEERING_UPGRADES = {
	upgradeEngineering1: {
		name: "Upgrade Cable Management",
		description: "Increases engineering XP by 15%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			engineering: 10
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 0
		}
	},
	upgradeEngineering2: {
		name: "Upgrade Cable Management",
		description: "Increases engineering XP by 15%, to +30%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 75000
		},
		requiredLevels: {
			engineering: 20
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 1
		}
	},
	upgradeEngineering3: {
		name: "Upgrade Cable Management",
		description: "Increases engineering XP by 15%, to +45%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 250000
		},
		requiredLevels: {
			engineering: 30
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 2
		}
	},
	upgradeEngineering4: {
		name: "Upgrade Cable Management",
		description: "Increases engineering XP by 15%, to +60%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 800000
		},
		requiredLevels: {
			engineering: 40
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 3
		}
	},
	upgradeEngineering5: {
		name: "Upgrade Cable Management",
		description: "Increases engineering XP by 15%, to +75%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 2000000
		},
		requiredLevels: {
			engineering: 50
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 4
		}
	}
}

const FABRICATION_UPGRADES = {
	upgradeFabrication1: {
		name: "Upgrade Matter Bins",
		description: "Reduces fabrication ore costs by 20%",
		icon: require('@/assets/art/fabrication/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			fabrication: 10
		},
		upgrade: "fabricationBins",
		requiredUpgrades: {
			fabricationBins: 0
		}
	},
	upgradeFabrication2: {
		name: "Upgrade Matter Bins",
		description: "Reduces fabrication ore costs by an additional 20%, to 40%",
		icon: require('@/assets/art/fabrication/upgrade1.png'),
		requiredItems: {
			money: 500000
		},
		requiredLevels: {
			fabrication: 25
		},
		upgrade: "fabricationBins",
		requiredUpgrades: {
			fabricationBins: 1
		}
	},
	upgradeFabrication3: {
		name: "Upgrade Matter Bins",
		description: "Reduces fabrication ore costs by an additional 20%, to 60%",
		icon: require('@/assets/art/fabrication/upgrade1.png'),
		requiredItems: {
			money: 1500000
		},
		requiredLevels: {
			fabrication: 40
		},
		upgrade: "fabricationBins",
		requiredUpgrades: {
			fabricationBins: 2
		}
	},

}

export default {
	...MINING_UPGRADES,
	...ENGINEERING_UPGRADES,
	...FABRICATION_UPGRADES,
	...XENOBIO_UPGRADES,
	...COMBAT_UPGRADES
}