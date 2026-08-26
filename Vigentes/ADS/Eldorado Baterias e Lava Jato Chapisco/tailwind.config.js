/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#042A84',
          'blue-dark': '#021B55',
          'blue-mid': '#0A3BA8',
          'blue-light': '#1A50C8',
          yellow: '#F9DB05',
          'yellow-dark': '#D4B800',
          'yellow-light': '#FBE54D',
        },
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
