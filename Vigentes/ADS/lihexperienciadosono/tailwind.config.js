/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f9aa9',
        'primary-hover': '#0d8896',
        secondary: '#848484',
        neutral: '#fefefe',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
