/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1e3a8a',
        'brand-blue-dark': '#152a63',
        'brand-red': '#e11d2a',
        'brand-red-dark': '#b8141f',
      },
    },
  },
  plugins: [],
};
