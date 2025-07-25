/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Professional Dark Theme Base Colors
        'dark': {
          50: '#f8fafc',   // very light gray for text on dark
          100: '#f1f5f9',  // light backgrounds, cards
          150: '#e8f0fe',  // enhanced readability text
          200: '#e2e8f0',  // borders, dividers
          300: '#cbd5e1',  // disabled text
          400: '#94a3b8',  // secondary text
          500: '#64748b',  // primary text on light backgrounds
          600: '#475569',  // headings on light backgrounds
          700: '#334155',  // dark surfaces, elevated elements
          800: '#1e293b',  // darker surfaces
          900: '#0f172a',  // darkest backgrounds
          950: '#020617',  // absolute darkest (new)
        },
        
        // Professional Energy Color System
        'energy': {
          50: '#ecfdf5',   // very light energy green
          100: '#d1fae5',  // light energy green  
          200: '#a7f3d0',  // lighter energy green
          300: '#6ee7b7',  // light energy green
          400: '#34d399',  // medium energy green
          500: '#10b981',  // primary energy green
          600: '#059669',  // darker energy green (professional)
          700: '#047857',  // dark energy green
          800: '#065f46',  // darker energy green
          900: '#064e3b',  // darkest energy green
        },
        
        // Supporting Energy Colors
        'solar': {
          400: '#fbbf24',  // amber-400
          500: '#f59e0b',  // amber-500  
          600: '#d97706',  // amber-600
        },
        
        'wind': {
          400: '#0ea5e9',  // sky-500
          500: '#0284c7',  // sky-600
          600: '#0369a1',  // sky-700
        },
        
        'grid': {
          400: '#8b5cf6',  // violet-500
          500: '#7c3aed',  // violet-600
          600: '#6d28d9',  // violet-700
        },

        // Semantic colors
        primary: "#020617",        // dark-950 for main backgrounds
        secondary: "#64748b",      // dark-500 for secondary text
        accent: "#059669",         // energy-600 for primary actions
        muted: "#1e293b",         // dark-800 for muted backgrounds
        border: "#334155",        // dark-700 for borders
        
        // Glass morphism support
        'glass': {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.2)',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        // Energy-themed glows
        'energy-glow': '0 0 20px rgba(5, 150, 105, 0.4)',
        'energy-glow-lg': '0 0 40px rgba(5, 150, 105, 0.3)',
        'solar-glow': '0 0 20px rgba(245, 158, 11, 0.4)',
        'wind-glow': '0 0 20px rgba(2, 132, 199, 0.4)',
        
        // Glass morphism shadows
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05)',
        'glass-lg': '0 20px 64px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.1)',
        
        // Professional depth
        'professional': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'professional-lg': '0 10px 40px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        // Energy-themed animations
        'wind-turbine': 'wind-turbine 3s linear infinite',
        'wind-turbine-slow': 'wind-turbine 6s linear infinite',
        'solar-track': 'solar-track 20s ease-in-out infinite',
        'energy-pulse': 'energy-pulse 2s ease-in-out infinite',
        'energy-flow': 'energy-flow 3s ease-in-out infinite',
        
        // Glass morphism animations
        'glass-shimmer': 'glass-shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        
        // Professional animations
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-scale': 'fade-in-scale 0.5s ease-out',
        'gradient-flow': 'gradient-flow 15s ease infinite',
      },
      keyframes: {
        // Energy-themed keyframes
        'wind-turbine': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'wind-turbine-realistic': {
          '0%': { 
            transform: 'rotate(0deg)',
            filter: 'blur(0px)',
            opacity: '0.8'
          },
          '25%': { 
            transform: 'rotate(90deg)',
            filter: 'blur(0.8px)',
            opacity: '0.6'
          },
          '50%': { 
            transform: 'rotate(180deg)',
            filter: 'blur(0px)',
            opacity: '0.8'
          },
          '75%': { 
            transform: 'rotate(270deg)',
            filter: 'blur(0.8px)',
            opacity: '0.6'
          },
          '100%': { 
            transform: 'rotate(360deg)',
            filter: 'blur(0px)',
            opacity: '0.8'
          },
        },
        'solar-track': {
          '0%': { transform: 'rotateY(-15deg)' },
          '50%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(15deg)' },
        },
        'energy-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(5, 150, 105, 0.4)',
            transform: 'scale(1)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(5, 150, 105, 0.6)',
            transform: 'scale(1.05)' 
          },
        },
        'energy-flow': {
          '0%': { 
            transform: 'translateX(-100%) scale(0)',
            opacity: '0' 
          },
          '50%': { 
            transform: 'translateX(50%) scale(1)',
            opacity: '1' 
          },
          '100%': { 
            transform: 'translateX(200%) scale(0)',
            opacity: '0' 
          },
        },
        
        // Glass morphism keyframes
        'glass-shimmer': {
          '0%': { 
            background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 100%)',
            transform: 'translateX(-100%)' 
          },
          '100%': { 
            transform: 'translateX(100%)' 
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        
        // Professional animations
        'fade-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          },
        },
        'fade-in-scale': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)' 
          },
        },
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backdropBlur: {
        xs: '2px',
        'glass': '12px',
        'glass-lg': '20px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'energy-gradient': 'linear-gradient(135deg, rgba(5, 150, 105, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'professional-gradient': 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 0.9) 100%)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
} 