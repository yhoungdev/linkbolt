/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#F46412",
				secondary: "#212121",
				night: "#191919",
			  },
		},
	},
	plugins: [],
}
