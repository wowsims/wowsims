const baseConfig = require('@wowsims/config/.eslintrc.base.js');

module.exports = {
	...baseConfig,
	plugins: [...baseConfig.plugins],
	extends: [...baseConfig.extends],
	env: {
		...baseConfig.env,
	},
	parserOptions: {
		...baseConfig.parserOptions,
	},
	globals: {
		...baseConfig.globals,
	},
	rules: {
		...baseConfig.rules,
	},
	settings: {
		...baseConfig.settings,
	},
};
