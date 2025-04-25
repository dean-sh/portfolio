/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#64748b",
        accent: "#3b82f6",
        "accent-dark": "#2563eb",
        "accent-light": "#60a5fa",
        purple: {
          50: '#faf5ff',
          600: '#9333ea',
          800: '#5b21b6',
        },
        'bg-start': '#f8fafc',
        'bg-end': '#eef4ff',
        'bg-light': '#f8fafc',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        // glow: '0 0 20px rgba(59, 130, 246, 0.5)',
        // 'inner-glow': 'inset 0 0 20px 5px rgba(59, 130, 246, 0.2)',
      },
      animation: {
        // 'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-flow': 'gradient-flow 15s ease infinite',
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
} 