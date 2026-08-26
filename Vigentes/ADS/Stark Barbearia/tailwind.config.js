/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      animation: {
        shine: 'shine 0.7s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
    },
  },
  plugins: [],
};
