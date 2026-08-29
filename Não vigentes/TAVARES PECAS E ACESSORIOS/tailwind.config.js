/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E01E26',
          'red-dark': '#B01319',
          black: '#111214',
          navy: '#232a63',
          gray: '#F4F4F5',
          'gray-mid': '#E4E4E7',
          'gray-text': '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'bounce-slow': 'bounceSlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
};
