/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'holanda-green': '#03633E',
        'holanda-dark': '#024A2E',
        'holanda-light': '#10B981',
        'holanda-gray': '#1F2937',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-delayed': 'fadeIn 1s ease-out 0.3s both',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
