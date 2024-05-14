import { create } from '@storybook/theming/create';
import { BASE_URL } from '@wowsims/constants';

export default create({
	base: 'light',
	brandTitle: 'WoWSims',
	brandUrl: BASE_URL,
	brandImage: '/images/wowsims-icon.png',
	brandTarget: '_self',
});
