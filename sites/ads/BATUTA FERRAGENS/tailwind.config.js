/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#78C137',
          light: '#8FD44E',
        },
        navy: {
          DEFAULT: '#0A2547',
          dark: '#00142D',
          light: '#123256',
        },
        cream: {
          DEFAULT: '#FAF8F3',
          dark: '#F0EDE4',
        },
      },
    },
  },
  plugins: [],
};
