/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      animation: {
        shine: 'shine 1.2s ease-in-out infinite',
      },
      keyframes: {
        shine: {
          '0%': { left: '-75%' },
          '100%': { left: '125%' },
        },
      },
    },
  },
  plugins: [],
};
