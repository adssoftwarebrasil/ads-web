/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F58B32',
          dark: '#1C1F26',
          gray: '#64707D',
          'gray-mid': '#9AA5B1',
          'gray-light': '#F5F6F8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
