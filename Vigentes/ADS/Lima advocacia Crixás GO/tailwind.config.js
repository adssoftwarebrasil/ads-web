/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8f0',
          100: '#f5e8c8',
          200: '#ead3a0',
          300: '#d4b278',
          400: '#C49A52',
          500: '#A1825A',
          600: '#8a6d4a',
          700: '#72593d',
          800: '#5a4530',
          900: '#3d2f20',
        },
        sand: {
          50: '#faf9f7',
          100: '#f0ede7',
          200: '#e0d9cf',
          300: '#ccc2b4',
          400: '#BBB39D',
          500: '#a89e89',
          600: '#8f8571',
          700: '#756c5c',
          800: '#5c5448',
          900: '#3d3830',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.7s ease-out forwards',
        'slide-left': 'slideLeft 0.7s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
