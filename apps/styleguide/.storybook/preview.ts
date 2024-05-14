import type { Preview } from "@storybook/html";
import "@wowsims/ui/global/wowsims.scss";
import "bootstrap/dist/js/bootstrap.bundle";

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
