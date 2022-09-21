module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'xo', 'prettier'],
	overrides: [
		{
			extends: ['xo-typescript'],
			files: ['*.ts', '*.tsx'],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		indent: ['off'],
		'react/react-in-jsx-scope': 'off',
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/indent': ['off', 2],
		'react/prop-types': 'off',
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
};
