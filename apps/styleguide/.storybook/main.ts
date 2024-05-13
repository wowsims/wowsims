import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../../../packages/**/*.mdx",
    "../../../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ["../../../packages/assets"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-vite",
  docs: {
    autodocs: "tag",
  },
  managerHead: `<style>
  .sidebar-header a img { width: 32px; }
</style>`,
};
export default config;
