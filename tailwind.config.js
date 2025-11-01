const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#05070f',
        surface: '#0b1220',
        'surface-muted': '#121a2b',
        outline: '#1b2334',
        accent: {
          DEFAULT: '#38bdf8',
          soft: '#7dd3fc',
          strong: '#0ea5e9',
          contrast: '#04111d',
        },
        copy: {
          DEFAULT: '#f8fafc',
          subtle: '#cbd5f5',
          muted: '#8ea2c0',
        },
        highlight: '#f9fafb',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.85rem',
        '3xl': '2.75rem',
        pill: '999px',
      },
      boxShadow: {
        layered: '0 50px 90px -45px rgba(12, 18, 31, 0.65)',
        outline: '0 0 0 1px rgba(148, 163, 184, 0.18)',
        glow: '0 0 35px rgba(14, 165, 233, 0.35)',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },
    },
  },
  plugins: [],
};
