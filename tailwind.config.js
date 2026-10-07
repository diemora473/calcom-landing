/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './data/**/*.{js,jsx}',
    './shared/**/*.{jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        tertiary: '#7d5800',
        'on-secondary-fixed-variant': '#414755',
        'on-primary-fixed': '#2f1500',
        'inverse-on-surface': '#f0f1f2',
        'on-tertiary-fixed-variant': '#5e4100',
        'on-tertiary': '#ffffff',
        'surface-container': '#edeeef',
        'tertiary-container': '#dc9d00',
        'on-surface': '#191c1d',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        background: '#f8f9fa',
        'surface-bright': '#f8f9fa',
        outline: '#8a7362',
        'tertiary-fixed': '#ffdea9',
        'surface-variant': '#e1e3e4',
        'primary-container': '#ff8a00',
        'on-secondary-fixed': '#161c28',
        'inverse-surface': '#2e3132',
        'outline-variant': '#ddc1ae',
        'surface-container-lowest': '#ffffff',
        'inverse-primary': '#ffb77f',
        'on-secondary': '#ffffff',
        'primary-fixed-dim': '#ffb77f',
        'on-secondary-container': '#5e6473',
        'primary-fixed': '#ffdcc4',
        'surface-dim': '#d9dadb',
        primary: '#914c00',
        'on-primary-fixed-variant': '#6f3900',
        'secondary-container': '#dde2f4',
        'tertiary-fixed-dim': '#ffba27',
        secondary: '#585e6d',
        'on-surface-variant': '#564334',
        surface: '#f8f9fa',
        'on-primary': '#ffffff',
        'error-container': '#ffdad6',
        'on-tertiary-fixed': '#271900',
        'on-tertiary-container': '#523900',
        'surface-tint': '#914c00',
        'secondary-fixed': '#dde2f4',
        'surface-container-high': '#e7e8e9',
        'on-primary-container': '#613100',
        'secondary-fixed-dim': '#c1c6d7',
        'on-error-container': '#93000a',
        'surface-container-highest': '#e1e3e4',
        'on-background': '#191c1d',
        'surface-container-low': '#f3f4f5'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      spacing: {
        'space-xl': '2rem',
        margin: '1rem',
        'space-sm': '0.5rem',
        gutter: '1rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xs': '0.25rem'
      },
      fontFamily: {
        'headline-sm': ['"Plus Jakarta Sans"'],
        'body-lg': ['Inter'],
        'label-lg': ['"Plus Jakarta Sans"'],
        'label-sm': ['"Plus Jakarta Sans"'],
        'body-sm': ['Inter'],
        'label-md': ['"Plus Jakarta Sans"'],
        'headline-xl': ['"Plus Jakarta Sans"'],
        'headline-xl-mobile': ['"Plus Jakarta Sans"'],
        'body-md': ['Inter'],
        'headline-lg': ['"Plus Jakarta Sans"'],
        'headline-md': ['"Plus Jakarta Sans"']
      },
      fontSize: {
        'headline-sm': ['18px', { lineHeight: '24px', fontWeight: '700' }],
        'body-lg': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'label-lg': ['14px', { lineHeight: '18px', fontWeight: '700' }],
        'label-sm': ['10px', { lineHeight: '12px', fontWeight: '700' }],
        'body-sm': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'label-md': ['12px', { lineHeight: '16px', fontWeight: '700' }],
        'headline-xl': ['40px', { lineHeight: '48px', fontWeight: '800' }],
        'headline-xl-mobile': ['32px', { lineHeight: '40px', fontWeight: '800' }],
        'body-md': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'headline-lg': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'headline-md': ['22px', { lineHeight: '28px', fontWeight: '700' }]
      }
    }
  }
};
