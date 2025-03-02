const baseConfig = require("@wowsims/config/.eslintrc.base.js");

module.exports = {
	...baseConfig,
	plugins: [...baseConfig.plugins],
	extends: [...baseConfig.extends, "plugin:storybook/recommended"],
	env: {
		...baseConfig.env,
	},
	parserOptions: {
		...baseConfig.parserOptions,
		project: "./tsconfig.json", // required for rules that need type information
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
