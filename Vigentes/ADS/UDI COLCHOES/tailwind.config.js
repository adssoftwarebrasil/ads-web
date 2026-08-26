/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#020C7B',
          medium: '#0A1BA8',
          vibrant: '#1E3FD6',
          light: '#5B7FFF',
          navy: '#010952',
          electric: '#3D5FE3',
        },
        accent: {
          offwhite: '#F0F4FF',
          pastel: '#E8EFFF',
          soft: '#C7D9FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
