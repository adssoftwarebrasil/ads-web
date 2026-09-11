/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B83A41',
          50: '#F7E5E6',
          100: '#F0CDCF',
          200: '#E2A0A5',
          300: '#D4737B',
          400: '#C65651',
          500: '#B83A41',
          600: '#932E34',
          700: '#6E2327',
          800: '#49171A',
          900: '#240C0D',
        },
        neutral: {
          DEFAULT: '#7A7A79',
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#BABABA',
          400: '#A3A3A2',
          500: '#7A7A79',
          600: '#626261',
          700: '#494949',
          800: '#313131',
          900: '#181818',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
