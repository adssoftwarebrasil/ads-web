/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#16327a',
        'brand-red': '#e11d29',
        'brand-red-dark': '#b8151f',
      },
    },
  },
  plugins: [],
};
