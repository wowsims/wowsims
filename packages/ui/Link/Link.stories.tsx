import type { Meta, StoryObj } from "@storybook/html";
import { Link } from "./Link";
import { BASE_URL } from "@wowsims/constants";

const meta: Meta<typeof Link> = {
  title: "SimUI/Link",
  component: Link,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    target: {
      options: ["_blank", "_self", "_parent", "_top"],
      control: { type: "select" },
    },
    className: {
      control: { type: "text" },
    },
  },
  args: {
    href: BASE_URL,
    target: "_blank",
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

const defaultArgs: Story["args"] = {};

export const Primary: Story = {
  args: {
    ...defaultArgs,
    children: "Example Link",
  },
};
