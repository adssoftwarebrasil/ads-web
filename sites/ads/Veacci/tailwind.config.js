/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1c1b16',
        graphite: '#34322b',
        paper: '#faf9f5',
        ivory: '#f0eee6',
        sand: '#e7e3d6',
        stone: '#5d5c52',
        mist: '#8f8d80',
        faint: '#c9c7bc',
        line: '#e4e1d6',
        'line-strong': '#d2cec1',
        lime: '#cbe74f',
        'lime-bright': '#d8f065',
        moss: '#5b6a38',
        clay: '#c15f3c',
        'clay-deep': '#9c4a2b',
        'clay-wash': '#f2e8e1',
        'clay-soft': '#dcc3b4',
        night: '#191b12',
        'night-line': '#2c2e22',
      },
      fontFamily: {
        sans: ['"Anthropic Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['"Anthropic Serif"', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        pop: '0 12px 40px -12px rgba(28, 27, 22, 0.22), 0 4px 12px -6px rgba(28, 27, 22, 0.12)',
      },
    },
  },
  plugins: [],
};
