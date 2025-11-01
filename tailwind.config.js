const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--color-canvas) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-muted': 'rgb(var(--color-surface-muted) / <alpha-value>)',
        outline: 'rgb(var(--color-outline) / <alpha-value>)',
        page: 'rgb(var(--color-page) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          soft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
          strong: 'rgb(var(--color-accent-strong) / <alpha-value>)',
          contrast: 'rgb(var(--color-accent-contrast) / <alpha-value>)',
        },
        copy: {
          DEFAULT: 'rgb(var(--color-copy) / <alpha-value>)',
          subtle: 'rgb(var(--color-copy-subtle) / <alpha-value>)',
          muted: 'rgb(var(--color-copy-muted) / <alpha-value>)',
        },
        highlight: 'rgb(var(--color-highlight) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        ring: 'rgb(var(--color-ring) / <alpha-value>)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.85rem',
        '3xl': '2.75rem',
        pill: '999px',
      },
      boxShadow: {
        layered: 'var(--shadow-layered)',
        outline: 'var(--shadow-outline)',
        glow: 'var(--shadow-glow)',
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
