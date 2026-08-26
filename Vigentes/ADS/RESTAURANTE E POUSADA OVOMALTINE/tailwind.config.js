/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          cream: '#FDF7F1',
          'warm-gray': '#F3ECE4',
          dark: '#17120F',
          navy: '#1E1B4B',
          orange: '#E8620E',
          'orange-light': '#FB8B3E',
          'orange-dark': '#B84B00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out both',
        'fade-up': 'fadeUp 0.8s ease-out both',
        'bounce-subtle': 'bounceSubtle 2.2s ease-in-out infinite',
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
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
};
