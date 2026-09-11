/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'clinic-teal': {
          DEFAULT: '#2C5F58',
          dark: '#1E463F',
          light: '#3B7A70',
          50: '#EDF4F2',
        },
        'clinic-gold': {
          DEFAULT: '#CFA24B',
          light: '#DEB86C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
