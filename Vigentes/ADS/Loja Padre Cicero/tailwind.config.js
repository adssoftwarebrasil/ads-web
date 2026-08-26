/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#fcc723',
          'gold-dark': '#c99417',
          dark: '#0d0a06',
          'dark-2': '#141009',
          'dark-3': '#1c160d',
          cream: '#faf5ea',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out both',
        'fade-up': 'fadeUp 0.8s ease-out both',
        'float': 'float 2.5s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(8px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(37,211,102,0.5)' },
          '50%': { boxShadow: '0 4px 30px rgba(37,211,102,0.8)' },
        },
      },
    },
  },
  plugins: [],
};
