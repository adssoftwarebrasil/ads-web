/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#57225D',
          light: '#8B3A96',
          dark: '#3E1544',
        },
        secondary: {
          DEFAULT: '#A8D47A',
          light: '#C3E39D',
        },
        cream: {
          DEFAULT: '#F3E7C9',
          dark: '#E6D2A8',
        },
        surface: '#F6F6F6',
      },
      fontFamily: {
        heading: ['"Josefin Sans"', 'system-ui', 'sans-serif'],
        sans: ['Livvic', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out both',
        'fade-up': 'fadeUp 0.7s ease-out both',
        float: 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
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
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' },
          '50%': { transform: 'scale(1.06)', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)' },
        },
      },
    },
  },
  plugins: [],
};
