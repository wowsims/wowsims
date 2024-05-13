import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../../../packages/**/*.mdx",
    "../../../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ['../../../packages/assets'],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
  ],
  framework: "@storybook/react-vite",
  docs: {
    autodocs: "tag",
  },
};
export default config;
