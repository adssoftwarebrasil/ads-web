/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#161320',
        'brand-darkgray': '#241d30',
        'brand-red': '#ec2b29',
        'brand-white': '#f5f5f5',
      },
    },
  },
  plugins: [],
};
