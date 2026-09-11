/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E4C1',
          dark: '#B8860B',
        },
        burgundy: '#800020',
        bronze: '#CD7F32',
        ivory: '#FFFFF0',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
