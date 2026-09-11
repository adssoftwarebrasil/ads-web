/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'comuny-purple': '#7C07D8',
        'comuny-green': '#01FF6A',
        'comuny-blue': '#102CF6',
        'comuny-dark': '#0A0A0F',
        'comuny-dark-light': '#14141F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      scale: {
        80: '.8',
      },
      rotate: {
        360: '360deg',
      },
    },
  },
  plugins: [],
};
