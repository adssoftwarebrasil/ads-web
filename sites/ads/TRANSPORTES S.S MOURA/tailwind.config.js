/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#60a5fa',
          50: '#eff6ff',
          100: '#dbeafe',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
