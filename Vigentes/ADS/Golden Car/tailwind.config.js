/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        golden: '#F5DF6C',
        'brand-black': '#0a0a0a',
      },
    },
  },
  plugins: [],
};
