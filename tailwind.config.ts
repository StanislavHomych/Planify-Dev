import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6FCFF',
          100: '#B3F5FF',
          200: '#80E9FF',
          300: '#4DD9FF',
          400: '#1AC2FF',
          500: '#0052CC',
          600: '#0747A6',
          700: '#09326C',
          800: '#091E42',
          900: '#172B4D',
        },
        jira: {
          blue: '#0052CC',
          darkBlue: '#172B4D',
          lightBlue: '#0065FF',
          background: '#F4F5F7',
          card: '#FFFFFF',
          border: '#DFE1E6',
          text: '#172B4D',
          textSecondary: '#5E6C84',
          success: '#00875A',
          warning: '#FF991F',
          error: '#DE350B',
        },
      },
      boxShadow: {
        'jira': '0 1px 1px rgba(9,30,66,0.25), 0 0 1px 0 rgba(9,30,66,0.31)',
        'jira-md': '0 4px 8px -2px rgba(9,30,66,0.25), 0 0 1px rgba(9,30,66,0.31)',
        'jira-lg': '0 8px 12px -4px rgba(9,30,66,0.25), 0 0 1px rgba(9,30,66,0.31)',
      },
    },
  },
  plugins: [],
}
export default config

