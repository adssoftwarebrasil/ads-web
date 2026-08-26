/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#F5A623',
          light: '#F7B84B',
          dark: '#D98E12',
        },
        ink: {
          DEFAULT: '#0a0a0a',
          card: '#141414',
          soft: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Be Vietnam Pro"', 'Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        floaty: 'floaty 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
