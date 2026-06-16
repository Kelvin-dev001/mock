/**
 * HomePage.jsx — The marketing homepage: the original single-page section
 * stack, now wrapped with route-level SEO + Organization/LocalBusiness and
 * ItemList (services) structured data.
 */
import React from 'react'
import Seo, { SITE_URL } from '../components/Seo'
import { SERVICES } from '../data/services'

import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import TrustBadges from '../components/TrustBadges'
import Branches from '../components/Branches'
import Contact from '../components/Contact'

// Organization + LocalBusiness graph. Mirrors index.html's static block but
// richer (phones per branch, sameAs/social slots). TODO: confirm details.
const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: 'Mock Electrical and Electronics Ltd',
  description:
    "Kenya's trusted leader in vehicle safety & tracking: NTSA-approved speed limiters, GPS trackers, telematics, and car alarms.",
  url: SITE_URL,
  telephone: '+254706888600',
  areaServed: 'Kenya',
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
    { '@type': 'PostalAddress', addressLocality: 'Sagana', addressCountry: 'KE' },
    { '@type': 'PostalAddress', addressLocality: 'Embu', addressCountry: 'KE' },
  ],
}

// ItemList of services so search/LLMs can enumerate the catalogue + deep links.
const SERVICES_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Vehicle Safety & Tracking Services',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `${SITE_URL}/services/${s.slug}`,
  })),
}

export default function HomePage() {
  return (
    <>
      <Seo
        title="Mock Electrical and Electronics Ltd | NTSA Approved Speed Limiters & GPS Trackers in Kenya"
        description="Kenya's leading provider of NTSA-approved vehicle speed limiters, GPS vehicle trackers, Bluetooth trackers, video telematics, and car alarms. Offices in Nairobi, Sagana & Embu. Call 0706888600."
        path="/"
        jsonLd={[ORG_JSONLD, SERVICES_JSONLD]}
      />

      <Hero />
      <Services />
      <WhyChooseUs />
      <TrustBadges />
      <Branches />
      <Contact />
    </>
  )
}
