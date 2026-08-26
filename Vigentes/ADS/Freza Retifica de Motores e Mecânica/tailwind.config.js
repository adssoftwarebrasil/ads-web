/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E11B22',
          'red-dark': '#B01419',
          gray: '#CBD0D6',
          'gray-light': '#F1F2F4',
          white: '#FAFAFA',
          dark: '#1F2328',
          'dark-deep': '#15181C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
