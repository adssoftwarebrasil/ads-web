/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      scale: {
        102: '1.02',
      },
    },
  },
  plugins: [],
};
