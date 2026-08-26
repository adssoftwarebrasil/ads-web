/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#dd1d25',
          dark: '#2a176f',
          darkDeep: '#1a0e4a',
          light: '#a5c9ff',
        },
      },
    },
  },
  plugins: [],
};
