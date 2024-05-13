import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "SimUI/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "radio" },
      mapping: { default: undefined },
    },
  },
  args: {
    size: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Story["args"] = {
  size: undefined,
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
    children: "Primary button",
    variant: "primary",
  },
};

export const PrimaryOutline: Story = {
  args: {
    ...defaultArgs,
    children: "Primary outline button",
    variant: "outline-primary",
  },
};

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    children: "Secondary button",
    variant: "secondary",
  },
};

export const SecondaryOutline: Story = {
  args: {
    ...defaultArgs,
    children: "Secondary outline button",
    variant: "outline-secondary",
  },
};

export const Close: Story = {
  args: {
    ...defaultArgs,
    variant: "close",
    iconLeft: "fas fa-close ms-1",
  },
};
export const Reset: Story = {
  args: {
    ...defaultArgs,
    variant: "reset",
    children: "Reset",
    iconRight: "fas fa-close ms-1",
  },
};
