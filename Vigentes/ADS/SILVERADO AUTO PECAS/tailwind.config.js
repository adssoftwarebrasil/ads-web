/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0d0d0f',
        'brand-red': '#e11526',
        'brand-red-dark': '#b30f1d',
        'brand-blue': '#1e3fae',
        'brand-blue-dark': '#16308a',
        'brand-blue-light': '#6ea8ff',
        'brand-gray-light': '#f4f5f7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
