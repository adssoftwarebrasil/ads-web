/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#393b3c',
          yellow: '#FBED00',
          light: '#FCFEFF',
          darkgray: '#2a2b2c',
          midgray: '#555759',
          softgray: '#f4f4f4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
