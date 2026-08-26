/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#924786',
        'primary-light': '#B87FAD',
        secondary: '#363157',
        'secondary-dark': '#2A254A',
        'off-white': '#F5F3F7',
        'pastel-pink': '#D4A5C9',
        'medium-purple': '#4A4470',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
