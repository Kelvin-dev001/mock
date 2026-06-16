/**
 * Seo.jsx — Per-route document head management via react-helmet-async.
 *
 * The static index.html already ships strong sitewide defaults (title,
 * description, Open Graph, Twitter, and a LocalBusiness JSON-LD block) so the
 * page is crawlable even before React hydrates. This component OVERRIDES those
 * defaults per route once the SPA mounts: title, meta description, canonical,
 * social tags, and any route-specific JSON-LD passed via `jsonLd`.
 *
 * NOTE (client-side rendering): crawlers that execute JS will see these
 * per-route tags; the static index.html guarantees a sensible baseline for
 * those that don't. For full static HTML per route, see the
 * "PRERENDER UPGRADE" note in vite.config.js / README.
 */
import React from 'react'
import { Helmet } from 'react-helmet-async'

// Canonical site origin. TODO: confirm production domain.
const SITE_URL = 'https://mockelectrical.co.ke'
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.jpg`

export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  jsonLd,
}) {
  const canonical = `${SITE_URL}${path}`
  // Support a single object or an array of JSON-LD blocks.
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Route-specific structured data */}
      {blocks.map((block, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  )
}

export { SITE_URL }
