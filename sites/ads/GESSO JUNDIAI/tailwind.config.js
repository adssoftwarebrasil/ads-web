/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      scale: {
        108: '1.08',
      },
    },
  },
  plugins: [],
};
