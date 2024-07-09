/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,js,ts,md}'],
	theme: {
		extend: {
			animation: {
				text: 'text 5s ease infinite'
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				}
			}
		}
	},
	daisyui: {
		themes: [
			'dark',
			{
				// Custom theme definitions
				dark: {
					...require('daisyui/src/theming/themes')['dark'],
					primary: '#1eb854',
					secondary: '#1db990',
					'base-content': '#ffffff'
				}
			}
		]
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
