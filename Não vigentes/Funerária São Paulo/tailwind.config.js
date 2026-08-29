/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#009625',
          dark: '#006B1A',
          light: '#E6F7EA',
        },
        accent: {
          DEFAULT: '#dd9a25',
          dark: '#B87D1E',
          light: '#FFF4E6',
        },
        neutral: {
          DEFAULT: '#737373',
          dark: '#4A4A4A',
          light: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
