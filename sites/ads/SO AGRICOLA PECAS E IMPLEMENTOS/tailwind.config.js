/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1F791F',
          'green-dark': '#045103',
          orange: '#FF9221',
          'orange-dark': '#E07800',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse_soft: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(255,146,33,0.7)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 10px rgba(255,146,33,0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'pulse-soft': 'pulse_soft 2s infinite',
      },
    },
  },
  plugins: [],
};
