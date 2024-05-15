export enum Expansion {
	SOD,
	TBC,
	WOTLK,
	CATA,
}

export interface ExpansionData {
	name: string;
	// CSS theme identifier
	theme: string;
	// Live site link
	link: string;
	// Icon link
	iconURI: string;
}

export const EXPANSIONS: Record<Expansion, ExpansionData> = {
	[Expansion.SOD]: {
		name: 'Season of Discovery',
		theme: 'sod',
		link: 'https://wowsims.github.io/sod',
		iconURI: '@wowsims/assets/images/expansion-icon-classic.png',
	},
	[Expansion.TBC]: {
		name: 'The Burning Crusade',
		theme: 'tbc',
		link: 'https://wowsims.github.io/tbc',
		iconURI: '@wowsims/assets/images/expansion-icon-tbc.png',
	},
	[Expansion.WOTLK]: {
		name: 'Wrath of the Lich King',
		theme: 'wotlk',
		link: 'https://wowsims.github.io/wotlk',
		iconURI: '@wowsims/assets/images/expansion-icon-wotlk.png',
	},
	[Expansion.CATA]: {
		name: 'Cataclysm',
		theme: 'cata',
		link: 'https://wowsims.github.io/cata',
		iconURI: '@wowsims/assets/images/expansion-icon-cata.png',
	},
};
