/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'rgb(155, 39, 40)',
          dark: 'rgb(120, 30, 31)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        crimson: ['"Crimson Pro"', 'serif'],
      },
    },
  },
  plugins: [],
};
