import type { Meta, StoryObj } from '@storybook/html';
import { Expansion } from '@wowsims/constants/expansion';

import { ExpansionSelector, ExpansionSelectorProps } from './ExpansionSelector';

const meta: Meta<ExpansionSelectorProps> = {
	title: 'SimUI/ExpansionSelector',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		expansion: Expansion.CATA,
	},
};

export default meta;
type Story = StoryObj<ExpansionSelectorProps>;

export const Default: Story = {
	render: args => <ExpansionSelector {...args} />,
	args: {},
};
