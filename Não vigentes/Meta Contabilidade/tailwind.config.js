/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E84C4A',
          light: '#F06B69',
          dark: '#D13835',
        },
        brand: {
          DEFAULT: '#4D1D58',
          light: '#6B2A78',
          dark: '#32123A',
        },
        neutral: {
          DEFAULT: '#E2E2E2',
          light: '#F5F5F7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
