// https://tailwindcss.com/docs/content-configuration
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/.vitepress/theme/**/*.{js,ts,vue}',
		'./src/**/*.md',
	],
  plugins: [
    require('@pyncz/tailwind-mask-image')
  ],
  darkMode: 'class',
  theme: {
    extend: {
    }
  }
}
