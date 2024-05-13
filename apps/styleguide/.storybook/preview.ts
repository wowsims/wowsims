import type { Preview } from '@storybook/react'
import '@wowsims/ui/global/wowsims.scss'
import 'bootstrap/dist/js/bootstrap.bundle'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
