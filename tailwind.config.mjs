/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': 'radial-gradient(#ffffff33_1px, #00091d_1px)',
      },
    },
  },
  plugins: [],
}
