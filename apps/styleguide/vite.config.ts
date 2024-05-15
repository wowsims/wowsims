/** @type {import('vite').UserConfig} */
import path from 'path';
import { defineConfig, PluginOption } from 'vite';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

import { modifyServeFilePath } from '../../packages/assets/helpers';

const replacePaths = [
	{
		replacePath: '@wowsims/assets',
		sourcePath: path.resolve(__dirname, '../../packages/assets'),
	},
];

const serveExternalAssets = () =>
	({
		name: 'serve-external-assets',
		configureServer(server) {
			server.middlewares.use((req, res, next) => {
				const url = req.url!;

				const replaceAsset = replacePaths.find(replacePath => url.includes(replacePath.replacePath));
				if (replaceAsset) {
					modifyServeFilePath(res, url, replaceAsset.sourcePath, replaceAsset.replacePath);
					return;
				} else {
					next();
				}
			});
		},
	}) satisfies PluginOption;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		checker({
			typescript: {
				tsconfigPath: path.resolve(__dirname, '../../'),
				buildMode: true,
			},
			enableBuild: true,
		}),
		tsconfigPaths(),
		serveExternalAssets(),
	],
	assetsInclude: ['@wowsims/assets/**/*'],
	esbuild: {
		jsxFactory: 'element',
		jsxFragment: 'fragment',
		jsxInject: "import { element, fragment, ref } from 'tsx-vanilla';",
	},
	build: {
		rollupOptions: {
			output: {
				globals: {
					'tsx-vanilla': 'tsx',
				},
			},
		},
	},
});
