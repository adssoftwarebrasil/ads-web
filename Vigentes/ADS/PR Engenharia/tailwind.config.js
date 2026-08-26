/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pr-dark': '#2a2320',
        'pr-cream': '#f1e7e0',
        'pr-light': '#fbf2f1',
        'pr-rose': '#c2919a',
        'pr-taupe': '#cfc0b4',
        'pr-grey': '#837972',
        'pr-muted': '#a99c92',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
