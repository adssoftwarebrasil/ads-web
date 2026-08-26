/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#012d78',
          dark: '#001f54',
        },
        secondary: {
          DEFAULT: '#0298d2',
          light: '#66c2e8',
        },
        neutral: {
          light: '#d0d0d0',
          lighter: '#e4eef8',
          lightest: '#f8f9fa',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      lineHeight: {
        'body': '1.5',
        'heading': '1.2',
      },
    },
  },
  plugins: [],
};
