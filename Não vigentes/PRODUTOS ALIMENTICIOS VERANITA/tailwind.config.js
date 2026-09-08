/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#ffcc00',
          'gold-dark': '#e6b800',
          brown: '#693d19',
          'brown-dark': '#4d2c10',
          beige: '#f9f2e3',
          'beige-dark': '#efe5c9',
          cream: '#fdfaf2',
          red: '#e7231d',
        },
      },
      fontFamily: {
        sans: ['FinalSix', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontWeight: {
        book: '400',
        heavy: '900',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(105, 61, 25, 0.08)',
        card: '0 8px 32px rgba(105, 61, 25, 0.12)',
        'card-hover': '0 16px 48px rgba(105, 61, 25, 0.18)',
      },
    },
  },
  plugins: [],
};
