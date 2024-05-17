import type { Meta, StoryObj } from '@storybook/html';

import { Icon, IconProps } from './Icon';

const meta: Meta<IconProps> = {
	title: 'SimUI/Icon',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		icon: {
			description: 'https://fontawesome.com/search?m=free&o=r',
			control: { type: 'text' },
		},
		type: {
			description: 'https://docs.fontawesome.com/web/style/style-cheatsheet#sizing-icons',
			control: { type: 'text' },
		},
		isFixedWidth: {
			description: 'https://docs.fontawesome.com/web/style/fixed-width',
			control: { type: 'boolean' },
		},
		isInList: {
			description: 'https://docs.fontawesome.com/web/style/lists',
			control: { type: 'boolean' },
		},
	},
	args: {},
};

export default meta;
type Story = StoryObj<IconProps>;

const Default: Story = {
	render: args => <Icon {...args} />,
};

export const Primary: Story = {
	...Default,
};
