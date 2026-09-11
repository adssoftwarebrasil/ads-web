/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F5577',
        secondary: '#062E43',
        accent: '#FFB84D',
        'accent-vibrant': '#FF9800',
        'blue-light': '#1A6B8F',
        'blue-intermediate': '#0A4460',
        'blue-off-white': '#F0F7FA',
        'blue-pastel': '#D4E8F0',
        'blue-very-light': '#E8F4F8',
        'blue-very-dark': '#04243A',
        'blue-soft': '#B8D9E8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
