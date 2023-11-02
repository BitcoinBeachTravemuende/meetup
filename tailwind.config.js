// https://tailwindcss.com/docs/content-configuration
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/.vitepress/theme/**/*.{js,ts,vue}',
		'./src/**/*.md',
	],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'external': "url('/icon-external.svg')",
      }
    }
  }
}
