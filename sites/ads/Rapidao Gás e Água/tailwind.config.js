/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F15D22',
          blue: '#185297',
          yellow: '#F6E308',
          amber: '#F39F1D',
          whatsapp: '#25D366',
        },
      },
    },
  },
  plugins: [],
};
