/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'beige-light': '#D8CFC6',
        'beige-medium': '#B6A792',
        'beige-dark': '#8B7F72',
        'cream': '#F5F1ED',
        'brown-dark': '#6B4E3D',
        'terracota': '#C4A896',
        'gray-dark': '#2C2F33',
        'text-main': '#131619',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
