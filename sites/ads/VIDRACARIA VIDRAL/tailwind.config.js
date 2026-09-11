/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out both',
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
        'fade-in-up-delay': 'fadeInUp 0.8s ease-out 0.2s both',
        'fade-in-right': 'fadeInRight 0.8s ease-out both',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)' },
        },
      },
    },
  },
  plugins: [],
};
