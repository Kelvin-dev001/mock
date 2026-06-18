/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand palette (derived from the company logo) ──
        primary: '#C8102E',          // Logo red — primary brand, CTAs, links
        'primary-dark': '#A00D24',   // Darker red — hover / active states
        'primary-light': '#E04B60',  // Lighter red — soft tints, badges
        dark: '#1A1A1A',             // Charcoal — dark sections, headings
        surface: '#F5F5F5',          // Off-white — page / section backgrounds
        'surface-light': '#FFFFFF',  // White — elevated card surfaces
        accent: '#3A3A3A',           // Muted gray — secondary accent / text

        // ── Glassmorphism overlay tints / shades ──
        'glass-light': 'rgba(255, 255, 255, 0.65)',   // light frosted panel fill
        'glass-surface': 'rgba(245, 245, 245, 0.55)', // off-white frosted panel fill
        'glass-dark': 'rgba(26, 26, 26, 0.55)',       // dark frosted panel fill
        'glass-border': 'rgba(255, 255, 255, 0.35)',  // subtle light glass border
        'glass-border-dark': 'rgba(58, 58, 58, 0.30)',// subtle dark glass border
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
