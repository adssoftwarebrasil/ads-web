/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#071b32', deep: '#04111f', soft: '#0a2746' },
        blue: { brand: '#176aab' },
        cyan: { brand: '#39c9e8', soft: '#a9ebf7' },
        surface: { DEFAULT: '#f8f8f5', warm: '#f0eee8' },
        ink: { DEFAULT: '#102238', muted: '#5d6b78' },
      },
      fontFamily: {
        display: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
        sans: ['Lato', 'Arial', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        card: '18px',
        panel: '24px',
        hero: '32px',
      },
      maxWidth: {
        container: '1240px',
      },
      boxShadow: {
        soft: '0 18px 40px rgba(7, 27, 50, .08)',
        card: '0 7px 20px rgba(7, 27, 50, .035)',
      },
      keyframes: {
        cue: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(5px)', opacity: '.55' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        cue: 'cue 1.9s ease-in-out infinite',
        'fade-up': 'fade-up .65s ease both',
      },
    },
  },
  plugins: [],
};
