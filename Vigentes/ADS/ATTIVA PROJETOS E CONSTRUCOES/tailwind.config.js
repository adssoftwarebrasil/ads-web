/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#c96a0e',
          'orange-light': '#e8a45c',
          blue: '#4963a0',
          'blue-light': '#7a93c4',
          'blue-dark': '#2d3e5f',
        },
        background: {
          light: '#f3faff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
