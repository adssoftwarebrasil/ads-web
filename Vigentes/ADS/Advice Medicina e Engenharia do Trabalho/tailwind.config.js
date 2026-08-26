/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0faf1',
          100: '#d9f0dd',
          200: '#b3e1bb',
          300: '#7dcb8c',
          400: '#45b45f',
          500: '#22a34a',
          600: '#1c8a3f',
          700: '#176f33',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
