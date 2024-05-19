import type { Meta, StoryObj } from '@storybook/html';
import { BASE_URL } from '@wowsims/constants';

import { Link, LinkProps } from './Link';

const meta: Meta<LinkProps> = {
	title: 'SimUI/Link',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		target: {
			options: ['_blank', '_self', '_parent', '_top'],
			control: { type: 'select' },
		},
		className: {
			control: { type: 'text' },
		},
		iconLeft: {
			description: 'Can be a <Icon /> or a IconName',
		},
		iconRight: {
			description: 'Can be a <Icon /> or a IconName',
		},
	},
	args: {
		href: BASE_URL,
		target: '_blank',
	},
};

export default meta;
type Story = StoryObj<LinkProps>;

const defaultArgs: Story['args'] = {};

const Default: Story = {
	render: args => <Link {...args} />,
};

export const Primary: Story = {
	...Default,
	args: {
		...defaultArgs,
		children: 'Example Link',
	},
};
