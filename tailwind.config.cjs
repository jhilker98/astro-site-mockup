/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		gridTemplateAreas: {
			mobile: ['header header header', 'main main main', 'footer footer footer'],
			desktop: ['sidebar header header', 'sidebar main main', 'sidebar footer footer'],
		  },
		  
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
			gridTemplateColumns: {
				layout: '0.7fr 2.3fr 1fr',
			  },
			  gridTemplateRows: {
				layout: '0.2fr 2.6fr 0.2fr',
			  },
			fontFamily: {
				rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
				inter: ["'Inter'", ...defaultTheme.fontFamily.sans],
				ptSans: ["'PT Sans'", ...defaultTheme.fontFamily.sans]
			},
			colors: {
				background: "#fafaf8",
				foreground: "#303238",
				neutral: {
				  50: "#fafaf8",
				  100: "#fafbfa",
				  200: "#f1f1f2",
				  300: "#e3e4e6",
				  400: "#b2b4b6",
				  500: "#818286",
				  600: "#606266",
				  700: "#4c4e53",
				  800: "#303238",
				  900: "#16181d",
				},
				myblue: {
				  DEFAULT: "#36394a",
				  50: "#fafafa",
				  100: "#f1f1f2",
				  200: "#dedfe3",
				  300: "#cccdd3",
				  400: "#979aa9",
				  500: "#676a7b",
				  600: "#484c5f",
				  700: "#36394a",
				  800: "#24252a",
				  900: "#18181b",
				},
				brown: {
				  DEFAULT: "#997655",
				  50: "#fafaf9",
				  100: "#f9f9f8",
				  200: "#f1edeb",
				  300: "#e5ded8",
				  400: "#c1ab99",
				  500: "#997655",
				  600: "#645844",
				  700: "#4b4338",
				  800: "#2c2624",
				  900: "#1c1917",
				},
				gray: {
				  DEFAULT: "#626d87",
				  50: "#f9fafb",
				  100: "#f1f2f4",
				  200: "#e1e3e9",
				  300: "#cbd0d9",
				  400: "#949eb2",
				  500: "#626d87",
				  600: "#445269",
				  700: "#333f55",
				  800: "#1e2839",
				  900: "#121827",
				},
				 "royal": {
				  DEFAULT: "#3d50aa",
				  50: "#f0f6ff",
				  100: "#e2edff",
				  200: "#cde1ff",
				  300: "#a9ccff",
				  400: "#7caefe",
				  500: "#608df6",
				  600: "#4e71e7",
				  700: "#445fd2",
				  800: "#3d50aa",
				  900: "#29378a",
				},
			  },
		},
	},
	plugins: [
		// grid areas plugin
		require('@savvywombat/tailwindcss-grid-areas'),
		require('tailwind-scrollbar')
	],
}
