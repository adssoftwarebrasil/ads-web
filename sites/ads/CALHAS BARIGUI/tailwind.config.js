/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFC201',
          50: '#FFFBEB',
          100: '#FFF3C4',
          200: '#FFE680',
          300: '#FFD93D',
          400: '#FFCC1A',
          500: '#FFC201',
          600: '#E6A800',
          700: '#CC9400',
          800: '#A37600',
          900: '#7A5800',
        },
        dark: {
          DEFAULT: '#111111',
          50: '#F8F8F8',
          100: '#E8E8E8',
          200: '#C4C4C4',
          300: '#A4A4A4',
          400: '#737373',
          500: '#4A4A4A',
          600: '#2E2E2E',
          700: '#1F1F1F',
          800: '#161616',
          900: '#111111',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
