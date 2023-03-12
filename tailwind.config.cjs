/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateRows: {
				layout: '7vh 86vh 7vh'
			}
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
