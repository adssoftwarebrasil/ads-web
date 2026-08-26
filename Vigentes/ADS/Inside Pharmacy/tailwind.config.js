/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': {
          DEFAULT: '#e11d2a',
          dark: '#b8141f',
          light: '#f43f4b',
        },
        'brand-black': {
          DEFAULT: '#111111',
          soft: '#1a1a1a',
        },
        'brand-gray': {
          light: '#f7f7f8',
          mid: '#e5e7eb',
          dark: '#4b5563',
          text: '#9ca3af',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 1s infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
