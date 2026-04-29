/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Outfit', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
      colors: {
        // Autaimate light palette — single source of truth
        cream: '#f7f5f0',          // page background
        ink: '#1a2332',            // primary text & headings
        slate: {
          DEFAULT: '#5a6470',      // muted text, secondary copy
          850: '#1a2332',          // legacy alias for ink
          950: '#0a0f1a',          // legacy alias (kept for safety)
        },
        sand: '#e5e1d8',           // borders, dividers
        teal: {
          DEFAULT: '#0a9d80',      // primary accent — CTAs, links, focus
          deep: '#0a9d80',
          soft: '#e6f4f0',         // highlight section backgrounds
          dark: '#087a64',         // hover state for primary accent
        },
      },
      boxShadow: {
        // Soft shadows tuned for cream backgrounds — replaces dark-theme glows
        'card': '0 1px 2px rgba(26, 35, 50, 0.04), 0 4px 12px rgba(26, 35, 50, 0.04)',
        'card-hover': '0 4px 12px rgba(26, 35, 50, 0.06), 0 12px 32px rgba(26, 35, 50, 0.08)',
        'cta': '0 4px 14px rgba(10, 157, 128, 0.25)',
        'cta-hover': '0 6px 20px rgba(10, 157, 128, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
