/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0c0e16',
        'brand-surface': '#13161f',
        'brand-white': '#f4f6fb',
        'brand-gray': '#8a909c',
        'brand-gray-light': '#c3c8d2',
        'brand-orange': '#f5a623',
        'brand-green': '#22c55e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
