/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-slow': 'scroll 35s linear infinite',
        'scroll-medium': 'scroll 20s linear infinite',
        'scroll-fast': 'scroll 15s linear infinite',
      },
    },
  },
  plugins: [],
};
