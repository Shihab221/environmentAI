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
        'env-light-secondary': '#f59e0b',
        'env-light-accent': '#84cc16',
        'env-light-card': '#ffffff',

        // Dark mode colors
        'env-dark-bg': '#020617',
        'env-dark-primary': '#065f46',
        'env-dark-secondary': '#92400e',
        'env-dark-accent': '#a3e635',
        'env-dark-card': '#0f172a',
        'env-dark-text': '#e2e8f0',
        'env-dark-text-secondary': '#94a3b8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'env-gradient': 'linear-gradient(135deg, #10b981 0%, #f59e0b 100%)',
        'env-gradient-dark': 'linear-gradient(135deg, #065f46 0%, #92400e 100%)',
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
      },
    },
  },
  plugins: [],
}
export default config

