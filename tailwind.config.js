/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#00ff41',
          cyan: '#00d4ff',
          purple: '#bf00ff',
          pink: '#ff006e',
        },
        dark: {
          950: '#020408',
          900: '#050d14',
          800: '#080f1a',
          700: '#0a1628',
          600: '#0d1f3c',
        },
        glass: 'rgba(5,13,20,0.7)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'matrix-rain': 'matrixRain 20s linear infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'glitch': 'glitch 5s infinite',
        'border-flow': 'borderFlow 3s linear infinite',
        'type-cursor': 'typeCursor 1s step-end infinite',
      },
      keyframes: {
        matrixRain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 20px #00ff41' },
          '50%': { boxShadow: '0 0 10px #00ff41, 0 0 25px #00ff41, 0 0 50px #00ff41' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-2px, 1px)' },
          '94%': { transform: 'translate(2px, -1px)' },
          '96%': { transform: 'translate(-1px, 2px)' },
          '98%': { transform: 'translate(1px, -1px)' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        typeCursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)`,
        'neon-gradient': 'linear-gradient(135deg, #00ff41, #00d4ff, #bf00ff)',
        'dark-gradient': 'linear-gradient(180deg, #020408 0%, #050d14 50%, #020408 100%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-green': '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 40px rgba(0,255,65,0.3)',
        'neon-cyan': '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px rgba(0,212,255,0.3)',
        'neon-purple': '0 0 10px #bf00ff, 0 0 20px #bf00ff, 0 0 40px rgba(191,0,255,0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
};
