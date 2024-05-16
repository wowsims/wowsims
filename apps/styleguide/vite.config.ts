/** @type {import('vite').UserConfig} */
import path from 'path';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

import { serveExternalAssets } from '../../packages/assets/helpers';

const replacePaths = [
	{
		replacePath: '@wowsims/assets',
		sourcePath: path.resolve(__dirname, '../../packages/assets/public'),
	},
];

// https://vitejs.dev/config/
export default defineConfig(() => ({
	plugins: [
		checker({
			typescript: {
				tsconfigPath: path.resolve(__dirname, '../../'),
				buildMode: true,
			},
			enableBuild: true,
		}),
		tsconfigPaths(),
		serveExternalAssets({
			assets: replacePaths,
		}),
	],
	esbuild: {
		jsxFactory: 'element',
		jsxFragment: 'fragment',
		jsxInject: "import { element, fragment } from 'tsx-vanilla';",
	},
}));
