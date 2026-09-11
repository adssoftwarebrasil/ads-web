/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      scale: {
        115: '1.15',
      },
    },
  },
  plugins: [],
};
