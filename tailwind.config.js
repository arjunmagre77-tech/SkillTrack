/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // SkillTrack Primary Design Tokens
        navy: {
          50:  '#F0F5FA',
          100: '#E1EBF5',
          200: '#BDD1E8',
          300: '#94B3D5',
          400: '#6990BE',
          500: '#4472A8',
          600: '#2C5A8E',
          700: '#1E3A5F',
          800: '#0B2342',
          900: '#071A33',
          950: '#040F1E',
        },
        // Blue accent system
        brand: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Cyan accent
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        // Legacy gov colors (keep for backward compat)
        gov: {
          50:  '#F5F8FC',
          100: '#E8EFF7',
          200: '#D2E0EE',
          300: '#AFC8DD',
          400: '#82A8C5',
          500: '#5B89AD',
          600: '#3D6D94',
          700: '#2B4D6B',
          800: '#1C3048',
          900: '#102332',
          950: '#071828',
        },
        // Soft UI
        surface: {
          DEFAULT: '#FFFFFF',
          soft:    '#F5F8FC',
          muted:   '#F0F4F9',
        },
        border: {
          DEFAULT: '#D9E2EF',
          soft:    '#E8EFF7',
          strong:  '#BDD1E8',
        },
        // Semantic status colors (toned down to match design system)
        success: {
          50:  '#F0FDF4',
          100: '#DCFCE7',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          900: '#14532D',
        },
        warning: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        danger: {
          50:  '#FFF1F2',
          100: '#FFE4E6',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
        // Text tokens
        text: {
          main:  '#0F172A',
          body:  '#334155',
          muted: '#64748B',
          faint: '#94A3B8',
          white: '#FFFFFF',
        },
        accent: {
          emerald: '#10b981',
          teal:    '#0d9488',
          cyan:    '#06b6d4',
          amber:   '#f59e0b',
          rose:    '#f43f5e',
          indigo:  '#6366f1',
          violet:  '#7c3aed',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'sm':    '0 1px 2px 0 rgba(7,26,51,0.04)',
        'card':  '0 1px 4px 0 rgba(7,26,51,0.06), 0 0 0 1px rgba(7,26,51,0.04)',
        'card-hover': '0 4px 12px -1px rgba(7,26,51,0.10), 0 0 0 1px rgba(7,26,51,0.05)',
        'nav':   '0 1px 3px 0 rgba(7,26,51,0.08), 0 1px 2px 0 rgba(7,26,51,0.04)',
        'panel': '0 8px 24px -4px rgba(7,26,51,0.12), 0 0 0 1px rgba(7,26,51,0.06)',
        'blue':  '0 4px 14px -1px rgba(37,99,235,0.20)',
        'blue-sm': '0 2px 8px -1px rgba(37,99,235,0.15)',
        // Legacy
        'gov':   '0 1px 3px 0 rgba(16,42,67,0.05), 0 1px 2px 0 rgba(16,42,67,0.03)',
        'gov-md':'0 4px 6px -1px rgba(16,42,67,0.08), 0 2px 4px -1px rgba(16,42,67,0.04)',
        'gov-lg':'0 10px 15px -3px rgba(16,42,67,0.10), 0 4px 6px -2px rgba(16,42,67,0.05)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
        'navy-gradient':  'linear-gradient(135deg, #071A33 0%, #0B2342 60%, #1E3A5F 100%)',
        'surface-gradient': 'linear-gradient(135deg, #F5F8FC 0%, #EBF1FA 100%)',
        'hero-gradient':  'linear-gradient(135deg, #071A33 0%, #0B2342 40%, #1E3A5F 100%)',
      },
      animation: {
        'fade-in':    'fadeIn 0.3s ease-out',
        'slide-up':   'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(8px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
