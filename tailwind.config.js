/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0b1d30',
        },
        navy: {
          50: '#f0f5fa',
          100: '#e1ebf5',
          500: '#1e3a8a',
          700: '#1e293b',
          800: '#0f172a',
          900: '#0b1329',
        },
        accent: {
          emerald: '#10b981',
          teal: '#0d9488',
          cyan: '#06b6d4',
          amber: '#f59e0b',
          rose: '#f43f5e',
          indigo: '#6366f1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gov': '0 1px 3px 0 rgba(16, 42, 67, 0.05), 0 1px 2px 0 rgba(16, 42, 67, 0.03)',
        'gov-md': '0 4px 6px -1px rgba(16, 42, 67, 0.08), 0 2px 4px -1px rgba(16, 42, 67, 0.04)',
        'gov-lg': '0 10px 15px -3px rgba(16, 42, 67, 0.1), 0 4px 6px -2px rgba(16, 42, 67, 0.05)',
      }
    },
  },
  plugins: [],
}
