/* =============================================================================
 * MyFoodFit Marketing Website - Tailwind Configuration
 * =============================================================================
 * Aligned with mobile app theme (src/theme/tokens.ts)
 * 
 * USAGE RULES:
 * - Use bg-primary for gunmetal backgrounds
 * - Use brand-primary for coach-green actions
 * - Use text-primary (white) and text-secondary (muted grey) for text hierarchy
 * - RAG colors only as small indicators
 */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds - Gunmetal palette
        bg: {
          primary: '#0E1116',
          surface: '#161A22',
          'surface-alt': '#1D222C',
        },
        
        // Brand - Coach Green
        brand: {
          primary: '#1F7A4D',
          'primary-hover': '#2FA36A',
          'primary-soft': 'rgba(31, 122, 77, 0.15)',
        },
        
        // Text Hierarchy
        text: {
          primary: '#FFFFFF',
          secondary: '#B6BDC9',
          muted: '#7C8391',
        },
        
        // RAG Indicators - Use sparingly
        rag: {
          green: '#2ECC71',
          amber: '#F4C430',
          red: '#E74C3C',
          'green-bg': 'rgba(46, 204, 113, 0.12)',
          'amber-bg': 'rgba(244, 196, 48, 0.14)',
          'red-bg': 'rgba(231, 76, 60, 0.12)',
        },
        
        // Borders & Dividers
        border: {
          subtle: '#252A36',
          divider: '#2A3036',
        },
        
        // Semantic Colors
        success: '#2ECC71',
        warning: '#F4C430',
        error: '#E74C3C',
        
        // Interactive States
        focus: 'rgba(47, 163, 106, 0.7)',
        disabled: 'rgba(124, 131, 145, 0.5)',
      },
      
      // Typography
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-xl': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-lg': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-md': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Border Radius
      borderRadius: {
        'sm': '6px',
        DEFAULT: '8px',
        'md': '10px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      
      // Box Shadow
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.15)',
        DEFAULT: '0 4px 12px rgba(0, 0, 0, 0.2)',
        'md': '0 6px 16px rgba(0, 0, 0, 0.25)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.3)',
        'xl': '0 12px 32px rgba(0, 0, 0, 0.35)',
        'brand': '0 4px 12px rgba(31, 122, 77, 0.3)',
        'brand-lg': '0 8px 24px rgba(31, 122, 77, 0.4)',
      },
      
      // Transitions
      transitionDuration: {
        DEFAULT: '200ms',
      },
      
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      // Backdrop Blur
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
      },
    },
  },
  plugins: [
    // Custom plugin for component classes
    function({ addComponents, theme }) {
      addComponents({
        // Button Components
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 24px',
          borderRadius: theme('borderRadius.md'),
          fontSize: theme('fontSize.body[0]'),
          fontWeight: theme('fontWeight.semibold'),
          textDecoration: 'none',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          fontFamily: 'inherit',
        },
        '.btn-primary': {
          backgroundColor: theme('colors.brand.primary'),
          color: theme('colors.text.primary'),
          '&:hover': {
            backgroundColor: theme('colors.brand.primary-hover'),
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.brand'),
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.bg.surface'),
          color: theme('colors.text.primary'),
          border: `2px solid ${theme('colors.brand.primary')}`,
          '&:hover': {
            backgroundColor: theme('colors.bg.surface-alt'),
            borderColor: theme('colors.brand.primary-hover'),
          },
        },
        '.btn-ghost': {
          backgroundColor: 'transparent',
          color: theme('colors.text.secondary'),
          border: `1px solid ${theme('colors.border.subtle')}`,
          '&:hover': {
            backgroundColor: theme('colors.bg.surface'),
            color: theme('colors.text.primary'),
          },
        },
        '.btn-large': {
          padding: '16px 32px',
          fontSize: theme('fontSize.body-lg[0]'),
        },
        '.btn-small': {
          padding: '8px 16px',
          fontSize: theme('fontSize.body-sm[0]'),
        },
        
        // Card Components
        '.card': {
          backgroundColor: theme('colors.bg.surface'),
          borderRadius: theme('borderRadius.lg'),
          padding: '24px',
          border: `1px solid ${theme('colors.border.subtle')}`,
        },
        '.card-hover': {
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: theme('boxShadow.lg'),
            borderColor: theme('colors.brand.primary'),
          },
        },
        
        // RAG Indicators
        '.rag-indicator': {
          display: 'inline-block',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          marginRight: '6px',
        },
        '.rag-indicator-green': {
          backgroundColor: theme('colors.rag.green'),
        },
        '.rag-indicator-amber': {
          backgroundColor: theme('colors.rag.amber'),
        },
        '.rag-indicator-red': {
          backgroundColor: theme('colors.rag.red'),
        },
        
        // RAG Badges
        '.rag-badge': {
          display: 'inline-flex',
          alignItems: 'center',
          padding: '4px 8px',
          borderRadius: theme('borderRadius.sm'),
          fontSize: theme('fontSize.caption[0]'),
          fontWeight: theme('fontWeight.semibold'),
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        },
        '.rag-badge-green': {
          backgroundColor: theme('colors.rag.green-bg'),
          color: theme('colors.rag.green'),
          border: `1px solid ${theme('colors.rag.green')}`,
        },
        '.rag-badge-amber': {
          backgroundColor: theme('colors.rag.amber-bg'),
          color: theme('colors.rag.amber'),
          border: `1px solid ${theme('colors.rag.amber')}`,
        },
        '.rag-badge-red': {
          backgroundColor: theme('colors.rag.red-bg'),
          color: theme('colors.rag.red'),
          border: `1px solid ${theme('colors.rag.red')}`,
        },
        
        // Feature Card
        '.feature-card': {
          backgroundColor: theme('colors.bg.surface'),
          borderRadius: theme('borderRadius.lg'),
          padding: '32px',
          border: `1px solid ${theme('colors.border.subtle')}`,
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: theme('colors.brand.primary'),
            transform: 'translateY(-4px)',
            boxShadow: theme('boxShadow.lg'),
          },
        },
      });
    },
  ],
};
