/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'plantae-dark': '#125172',
        'plantae-blue': '#0A7791',
        'plantae-teal': '#57BFBF',
        'plantae-green': '#A8C94A',
        'plantae-cream': '#FCEBCD',
      },
      fontFamily: {
        lato: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
