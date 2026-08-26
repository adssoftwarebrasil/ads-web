/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#2A455E',
        'off-white': '#F7F3ED',
        beige: '#E8DFCB',
        gold: '#BF9155',
        'gold-light': '#D9B37C',
        'gold-medium': '#C69C64',
        'gold-dark': '#9E7539',
        whatsapp: '#25D366',
        'whatsapp-dark': '#128C7E',
      },
    },
  },
  plugins: [],
};
