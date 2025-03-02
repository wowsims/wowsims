import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
	stories: ['../../../packages/**/*.mdx', '../../../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	staticDirs: ['../../../packages/assets'],

	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@chromatic-com/storybook'),
		getAbsolutePath('@storybook/addon-interactions'),
	],
	framework: getAbsolutePath('@storybook/html-vite'),
	managerHead: `<style>
  .sidebar-header a img { width: 32px; }
</style>`,
	docs: {},
};
export default config;

function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}
