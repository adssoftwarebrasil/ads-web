/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#91C844',
          dark: '#6FA834',
        },
        secondary: '#4CB549',
        brand: {
          dark: '#031429',
          white: '#FFFFFF',
          cream: '#F5F4EF',
          slate: '#64748B',
        },
      },
    },
  },
  plugins: [],
};
