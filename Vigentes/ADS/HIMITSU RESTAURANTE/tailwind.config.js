/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        himitsu: {
          DEFAULT: '#E02023',
          dark: '#c01a1e',
        },
      },
      fontFamily: {
        exo: ['"Exo 2"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
