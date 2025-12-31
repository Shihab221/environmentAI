import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'env-light-bg': '#f8fafc',
        'env-light-primary': '#10b981',
        'env-light-secondary': '#6ee7b7',
        'env-light-accent': '#84cc16',
        'env-light-card': '#ffffff',

        // Dark mode colors
        'env-dark-bg': '#020617',
        'env-dark-primary': '#065f46',
        'env-dark-secondary': '#34d399',
        'env-dark-accent': '#a3e635',
        'env-dark-card': '#0f172a',
        'env-dark-text': '#e2e8f0',
        'env-dark-text-secondary': '#94a3b8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'env-gradient': 'linear-gradient(135deg, #10b981 0%, #6ee7b7 100%)',
        'env-gradient-dark': 'linear-gradient(135deg, #065f46 0%, #34d399 100%)',
        'modern-gradient': 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(110, 231, 183, 0.06) 50%, rgba(132, 204, 22, 0.04) 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)',
        'card-gradient-dark': 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(2, 6, 23, 0.9) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'env-light': '0 4px 20px rgba(16, 185, 129, 0.15)',
        'env-dark': '0 4px 20px rgba(6, 95, 70, 0.3)',
        'modern-sm': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'modern': '0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.1)',
        'modern-lg': '0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 25px rgba(0, 0, 0, 0.15)',
        'modern-xl': '0 20px 25px rgba(0, 0, 0, 0.15), 0 40px 50px rgba(0, 0, 0, 0.2)',
        'modern-inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px rgba(16, 185, 129, 0.15), 0 10px 20px rgba(110, 231, 183, 0.1)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
        'glow-pale-green': '0 0 20px rgba(110, 231, 183, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config

