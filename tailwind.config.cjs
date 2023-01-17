/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'brand-dark-grey': '#787D8E',
				'brand-light-grey': '#B3B3B3',
				'brand-dirty-grey': '#F7F9FC',
				'brand-black': '#31343F'
			}
		}
	},
	plugins: []
};
