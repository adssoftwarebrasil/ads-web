/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B0B0B',
          dark: '#000000',
          light: '#1F1F1F',
        },
        accent: {
          DEFAULT: '#B20000',
          dark: '#7A0000',
          light: '#E11D1D',
        },
        secondary: '#7A7A7A',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightish: '-0.02em',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(0, 0, 0, 0.25)',
        ring: '0 0 0 1px rgba(0, 0, 0, 0.08), 0 8px 32px -12px rgba(178, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
