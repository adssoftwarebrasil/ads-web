/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#401E0A',
        primaryMedium: '#6B3410',
        primaryLight: '#8B4513',
        offWhite: '#FFF8F0',
        accent: '#D2691E',
        darkBrown: '#2C1607',
        beigeSand: '#F5E6D3',
        sienna: '#A0522D',
        whatsapp: '#25D366',
        error: '#DC2626',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
