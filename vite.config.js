import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//
// Rendering: this is a client-side-rendered SPA (react-router). Vite's dev
// server and `vite preview` both fall back to index.html for deep links, so
// /services/<slug> works on refresh. The static index.html ships sitewide SEO
// defaults, and react-helmet-async overrides them per route on hydration.
//
// PRERENDER UPGRADE (optional, for full static HTML per route):
//   To emit a crawlable static .html for `/` and every /services/<slug> — the
//   strongest setup for search engines and LLM crawlers that don't run JS —
//   add a prerender step, e.g. `vite-react-ssg`, or a simple post-build crawler
//   (puppeteer) that snapshots each route listed in public/sitemap.xml. The
//   route list already lives in src/data/services.js, so wiring it in is a
//   localized change — no rewrite of the app structure required.
export default defineConfig({
  plugins: [react()],
})
