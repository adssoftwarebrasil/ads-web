/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'flor-green': '#314a3e',
        'flor-beige': '#A88D83',
        'flor-pink': '#FFB5B8',
      },
    },
  },
  plugins: [],
};
