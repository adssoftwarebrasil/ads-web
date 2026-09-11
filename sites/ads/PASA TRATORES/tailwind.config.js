/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': {
          DEFAULT: 'rgb(177, 30, 41)',
          light: 'rgb(255, 120, 130)',
        },
        'brand-dark': 'rgb(61, 61, 61)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
