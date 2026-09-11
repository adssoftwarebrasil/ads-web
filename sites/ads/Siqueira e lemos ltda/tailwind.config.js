/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#054DA2',
          light: '#0A6DD9',
          dark: '#122759',
          50: '#EBF3FC',
          300: '#6BA5E5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        brand: '0 10px 30px -10px rgba(5, 77, 162, 0.4)',
        'brand-lg': '0 20px 50px -12px rgba(5, 77, 162, 0.45)',
        card: '0 4px 20px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 14px 34px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out both',
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'bounce-soft': 'bounceSoft 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
