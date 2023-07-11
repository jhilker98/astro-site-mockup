/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		configViewer: {
			// ... configViewer Options
			typographyExample: "The quick brown fox jumps over the lazy dog.",
			fonts: [
				"https://fonts.googleapis.com/css2?family=Rubik&display=swap",
			"https://fonts.googleapis.com/css2?family=Inter&display=swap",
			"https://fonts.googleapis.com/css2?family=PT+Sans&display=swap'"  
			],
			},
		extend: {
			fontFamily: {
				rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
				inter: ["'Inter'", ...defaultTheme.fontFamily.sans],
				ptSans: ["'PT Sans'", ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [
		// grid areas plugin
		require('@savvywombat/tailwindcss-grid-areas'),
		require('tailwind-scrollbar')
	],
}
