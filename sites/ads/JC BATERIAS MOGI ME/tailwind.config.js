/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#270e71',
          yellow: '#FFD400',
        },
        light: '#F7F8FA',
        dark: '#101014',
      },
    },
  },
  plugins: [],
};
