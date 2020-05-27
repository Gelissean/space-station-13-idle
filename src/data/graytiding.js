export const ACTIONS = {
	graytideMaint: {
		name: "DEBUG E",
		icon: require("@/assets/art/debug/E.png"),
		time: 1,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				itemTable: [
					{
						id: 'junk',
						weight: 3
					},
					{
						id: 'spacejunk',
						weight: 3
					},
					{
						id: 'armorjunk',
						weight: 3
					},
				]
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
						id: 'limbNinja',
						weight: 1
					}
				]
			}
		]
	},
	graytideServiceClown: {
		name: "Engineering",
		icon: require("@/assets/art/debug/D.png"),
		time: 2.5,
		xp: 10,
		requiredLevel: 1,
		itemTables: [
			{
				chance: 1,
				item: 'junk'
			},
			{
				chance: 1,
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
					id: "limbInsuls",
					weight: 100
				}, {
					id: null,
					weight: 99
				}
				]
			}
		]
	},
	graytideSecurity: {
		name: "Security",
		icon: require("@/assets/art/debug/D.png"),
		time: 2.5,
		xp: 10,
		requiredLevel: 1,
		itemTable: [
			{
				id: "ammoE1",
				count: [1, 3],
				weight: 600
			}, {
				id: "ammoE2",
				count: 2,
				weight: 200
			}, {
				id: "ammoE3",
				weight: 100
			}, {
				id: "ammoE4",
				weight: 50
			}, {
				id: "ammoB1",
				count: [1, 3],
				weight: 600
			}, {
				id: "ammoB2",
				count: 2,
				weight: 200
			}, {
				id: "ammoB3",
				weight: 100
			}, {
				id: "ammoB4",
				weight: 50
			}, {
				id: "limbJackboots",
				weight: 1
			},
			{
				id: null,
				weight: 199
			}
		]
	},
	graytideDebugA: {
		name: "DEBUG A",
		icon: require("@/assets/art/debug/A.png"),
		time: 1,
		xp: 10,
		requiredLevel: 1,
		item: "iron"
	},
	graytideDebugB: {
		name: "DEBUG B",
		icon: require("@/assets/art/debug/B.png"),
		time: 1,
		xp: 10,
		requiredLevel: 1,
		items: {
			id: "iron",
			count: 2
		}
	},
	graytideDebugC: {
		name: "DEBUG C",
		icon: require("@/assets/art/debug/C.png"),
		time: 1,
		xp: 10,
		requiredLevel: 1,
		items: {
			id: "iron",
			count: [0, 3]
		}
	},
	graytideDebugD: {
		name: "DEBUG D",
		icon: require("@/assets/art/debug/D.png"),
		time: 1,
		xp: 10,
		requiredLevel: 1,
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
	graytideDebugE: {
		name: "DEBUG E",
		icon: require("@/assets/art/debug/E.png"),
		time: 1,
		xp: 10,
		requiredLevel: 1,
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

export const JOB = {
	id: "graytiding",
	name: "Graytiding",
	icon: require("@/assets/art/graytiding/icon.png"),
	color: "#B0B0B0"
}