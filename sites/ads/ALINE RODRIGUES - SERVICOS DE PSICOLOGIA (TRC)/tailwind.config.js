/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          beige: '#F7F3EF',
          beigeDeep: '#F0EBE4',
          brown: '#4A3B2A',
          brownDeep: '#2C2017',
          gray: '#6F6455',
          green: '#2E7D32',
          greenHover: '#256B29',
          accent: '#A67C52',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
