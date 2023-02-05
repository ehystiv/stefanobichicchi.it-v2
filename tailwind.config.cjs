/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateRows: {
				layout: '8vh 84vh 8vh'
			}
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
