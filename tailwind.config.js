export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./layouts/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
	],
	theme: {
		extend: {
			colors: {},
		},
		fontFamily: {
			suisse: ['var(--font-primary)', 'sans-serif'],
			forma: ['var(--font-secondary)', 'sans-serif'],
		},
	},
};
