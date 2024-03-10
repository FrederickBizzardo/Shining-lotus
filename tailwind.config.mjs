/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Onest': ['Onest-Regular', 'sans-serif'],
				'OnestB': ['Onest-Black', 'sans-serif'],
				'Inter': ['Inter-Regular'],
				'InterI': ['Inter-Italic'],
				'Archivo': ['Archivo-Bold'],
			}
		},
	},
	plugins: [],
}
