/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand palette
        primary: '#0066CC',
        secondary: '#00A6A6',
        accent: '#FF6B35',
        // Background shades
        'bg-light': '#F8FAFC',
        'bg-blue': '#EFF6FF',
        'bg-teal': '#F0FDFA',
        // Text
        'text-dark': '#1E293B',
        'text-gray': '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
