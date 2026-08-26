/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#bf9b5f',
          light: '#d4b57e',
        },
        stone: {
          DEFAULT: '#57493b',
          light: '#8a7b6c',
        },
        cream: '#f0e9df',
        tan: '#c9b79c',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
