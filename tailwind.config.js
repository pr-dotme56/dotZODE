import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config}*/

const config = {

	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],

	plugins: [require('flowbite/plugin'), skeleton({
		themes: { preset: [{ name: 'wintry', enhancements: true } ] }
	}),],
	
	themes: {
		'brand': '#F2AC57',
	},
  
	darkMode: 'class',
  };
  
  module.exports = config;