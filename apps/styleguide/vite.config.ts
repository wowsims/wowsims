/** @type {import('vite').UserConfig} */
import { Plugin, defineConfig } from 'vite';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import DynamicPublicDirectory from 'vite-multiple-assets';
import { checker } from 'vite-plugin-checker';

const vanillaTsxFragmentString = `import { element, fragment, ref } from "tsx-vanilla";`;
const injectVanillaTsx = (): Plugin => ({
	name: 'transform-file',
	transform: (src, id) => {
		if (path.extname(id) === '.tsx') src = vanillaTsxFragmentString + src;
		return src;
	},
});

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// injectVanillaTsx(),
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
