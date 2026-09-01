/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ethos: {
          black: '#000000',
          aqua: '#069892',
          petrol: '#004f5b',
        },
      },
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};