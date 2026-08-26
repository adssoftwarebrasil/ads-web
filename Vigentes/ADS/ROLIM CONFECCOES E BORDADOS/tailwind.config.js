/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#E11D2A',
        'brand-red-dark': '#B01722',
        'brand-blue': '#0292CF',
        'brand-gold': '#D4A32C',
        'brand-gold-light': '#F0C75E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
