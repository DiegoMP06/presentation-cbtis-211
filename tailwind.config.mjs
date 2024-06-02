/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('/img/hero.jpg'), url('/img/textura.jpg')",
				'gradient-linear-hero': 'linear-gradient(130deg, rgba(0, 0, 0, 0.6), rgb(8 51 68 / 60%), rgb(76 5 25 / 60%), rgba(0, 0, 0, 0.6))',
			},
			backgroundColor: {
				'white-0.6': 'rgba(255, 255, 255, 0.6)',
			},
			backgroundSize: {
				'size-hero': 'cover, contain'
			},
			backgroundPosition: {
				'position-hero': 'center'
			}
		},
	},
	plugins: [],
}
