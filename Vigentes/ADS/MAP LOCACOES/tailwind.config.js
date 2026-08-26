/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00bfdf',
        'primary-dark': '#0099b8',
        'primary-light': '#66d9ed',
        'dark-blue': '#003d4d',
      },
    },
  },
  plugins: [],
};
