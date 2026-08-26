/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'imperio-blue': '#152367',
        'imperio-light-blue': '#0b8bc9',
        'imperio-dark': '#2d2a2e',
        'imperio-mid-blue': '#2f4478',
        'imperio-ice': '#c4cecb',
      },
    },
  },
  plugins: [],
};
