/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'force-yellow': '#F7B500',
        'force-blue': '#0B5394',
        'force-dark-blue': '#0A2540',
        'force-gray': '#4B5563',
      },
    },
  },
  plugins: [],
};
