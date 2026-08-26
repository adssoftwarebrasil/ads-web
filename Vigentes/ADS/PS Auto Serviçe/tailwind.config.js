/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#F91D25',
          darkred: '#C4141A',
          dark: '#0C1A2E',
          blue: '#17549E',
          light: '#EEF2F7',
        },
      },
    },
  },
  plugins: [],
};
