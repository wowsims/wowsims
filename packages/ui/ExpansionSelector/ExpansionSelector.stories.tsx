import type { Meta, StoryObj } from "@storybook/html";
import { ExpansionSelector } from "./ExpansionSelector";
import { Expansion } from "@wowsims/constants/expansion";

const meta: Meta<typeof ExpansionSelector> = {
  title: "SimUI/ExpansionSelector",
  component: ExpansionSelector,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    defaultSelection: Expansion.CATA,
  },
};
