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

export const Primary: Story = {
	...Default,
	args: {
		...defaultArgs,
		children: 'Primary button',
		variant: 'primary',
	},
};

export const PrimaryOutline: Story = {
	...Default,
	args: {
		...defaultArgs,
		children: 'Primary outline button',
		variant: 'outline-primary',
	},
};

export const Secondary: Story = {
	...Default,
	args: {
		...defaultArgs,
		children: 'Secondary button',
		variant: 'secondary',
	},
};

export const SecondaryOutline: Story = {
	...Default,
	args: {
		...defaultArgs,
		children: 'Secondary outline button',
		variant: 'outline-secondary',
	},
};

export const Close: Story = {
	...Default,
	args: {
		...defaultArgs,
		variant: 'close',
		iconLeft: {
			icon: 'close',
			className: 'ms-1',
		},
	},
};
export const Reset: Story = {
	...Default,
	args: {
		...defaultArgs,
		variant: 'reset',
		children: 'Reset',
		iconRight: {
			icon: 'close',
			className: 'ms-1',
		},
	},
};
