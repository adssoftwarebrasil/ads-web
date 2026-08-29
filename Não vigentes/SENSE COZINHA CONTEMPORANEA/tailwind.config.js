/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#f36c0f',
        'orange-dark': '#d45a0a',
        'orange-light': '#ff8534',
        'sage': '#9cac8e',
        'sage-dark': '#5a6b52',
        'cream': '#faf8f5',
        'warm-gray': '#4a4a4a',
        'mint-subtle': '#e8ede5',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
