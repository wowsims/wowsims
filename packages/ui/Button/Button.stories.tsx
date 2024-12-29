import type { Meta, StoryObj } from '@storybook/html';

import { Button, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
	title: 'SimUI/Button',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			options: ['default', 'sm', 'lg'],
			control: { type: 'radio' },
			mapping: { default: undefined },
		},
		iconLeft: {
			description: 'Can be a <Icon /> or a IconName',
		},
		iconRight: {
			description: 'Can be a <Icon /> or a IconName',
		},
	},
	args: {
		size: undefined,
	},
};

export default meta;
type Story = StoryObj<ButtonProps>;

const defaultArgs: Story['args'] = {};

const Default: Story = {
	render: args => <Button {...args} />,
};

export const Standard: Story = {
	...Default,
	args: {
		...defaultArgs,
		children: 'Standard Button',
		variant: 'primary',
	},
};

export const Outline: Story = {
	...Default,
	args: {
		...defaultArgs,
		children: 'Outline Button',
		variant: 'outline-primary',
	},
};

export const Close: Story = {
	...Default,
	args: {
		...defaultArgs,
		variant: 'close',
		iconLeft: 'close',
	},
};
export const Reset: Story = {
	...Default,
	args: {
		...defaultArgs,
		variant: 'reset',
		children: 'Reset',
		iconRight: 'close',
	},
};
