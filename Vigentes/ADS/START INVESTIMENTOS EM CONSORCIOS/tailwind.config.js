/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#E7251C',
        brandDark: '#c41f18',
      },
    },
  },
  plugins: [],
};
