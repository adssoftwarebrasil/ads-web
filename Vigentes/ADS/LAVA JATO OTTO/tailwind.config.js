/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C874',
        },
      },
      transitionDuration: {
        '800': '800ms',
      },
    },
  },
  plugins: [],
};
