import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-barlow)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        pitch: {
          black: '#080B0F',
          dark: '#0E1318',
          card: '#111820',
          border: '#1A2330',
          muted: '#1E2C3A',
        },
        accent: {
          green: '#00E5A0',
          'green-dim': '#00B87C',
          blue: '#0FA4FF',
          'blue-dim': '#0880CC',
        },
        text: {
          primary: '#F0F4F8',
          secondary: '#8A9BB0',
          muted: '#4A5B6E',
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,229,160,0.12), transparent)',
        'card-glow': 'linear-gradient(135deg, rgba(0,229,160,0.05) 0%, transparent 60%)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      animation: {
        'scan': 'scan 4s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
