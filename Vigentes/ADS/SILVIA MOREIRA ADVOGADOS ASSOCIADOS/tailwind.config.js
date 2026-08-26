/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#fffdfa',
          cream: '#faf5ec',
          'cream-dark': '#e9dfcc',
          gold: '#d4a24c',
          'gold-dark': '#a97d1c',
          red: '#9b1c1c',
          'red-dark': '#6b1212',
        },
      },
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
