/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0faf0',
          100: '#dcf2dc',
          200: '#b8e6b8',
          300: '#8ad68a',
          400: '#5cc65c',
          500: '#36a335',
          600: '#2b8229',
          700: '#226820',
          800: '#1a5018',
          900: '#123a10',
        },
      },
    },
  },
  plugins: [],
};
