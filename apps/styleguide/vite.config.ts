/** @type {import('vite').UserConfig} */
import path from 'path';
import { defineConfig } from 'vite';
import DynamicPublicDirectory from 'vite-multiple-assets';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

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
		DynamicPublicDirectory(['../../packages/assets'], {
			ssr: false,
		}),
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
