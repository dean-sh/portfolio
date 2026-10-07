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
        border: 'hsl(var(--border) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        signal: {
          DEFAULT: 'hsl(var(--signal) / <alpha-value>)',
          foreground: 'hsl(var(--signal-foreground) / <alpha-value>)',
          hover: 'hsl(var(--signal-hover) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
        serif: ['var(--font-serif)', 'Georgia', 'Times New Roman', 'serif'],
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 2rem + 3.2vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        'display-lg': ['clamp(2.25rem, 1.7rem + 2.2vw, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.75rem, 1.4rem + 1.4vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
      },
    },
  },
};
