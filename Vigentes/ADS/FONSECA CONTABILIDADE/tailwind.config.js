/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Paleta oficial da marca: Preto, Dourado e Branco
      colors: {
        preto: {
          DEFAULT: '#0A0A0A',
          900: '#111111',
          800: '#1C1C1C',
          700: '#2B2B2B',
        },
        dourado: {
          DEFAULT: '#C9A44C',
          claro: '#E8CE8A',
          pale: '#F0DDAE',
          escuro: '#8E6F2C',
        },
        branco: {
          DEFAULT: '#FFFFFF',
          off: '#F7F5F0',
        },
      },
    },
  },
  plugins: [],
};
