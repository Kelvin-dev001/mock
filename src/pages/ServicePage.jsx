/**
 * ServicePage.jsx — Detail page for a single service at /services/:slug.
 *
 * Pulls content from the shared services data module and renders:
 *  - SEO (title/description/canonical) + Service, FAQ, and Breadcrumb JSON-LD
 *  - a glass hero band with a tilt-reactive image placeholder
 *  - benefit bullets, an FAQ block, a related-services strip, and CTAs
 *
 * Unknown slugs fall through to the 404 route.
 */
import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaCheckCircle, FaChevronRight } from 'react-icons/fa'

import Seo, { SITE_URL } from '../components/Seo'
import TiltCard from '../components/motion/TiltCard'
import MagneticButton from '../components/motion/MagneticButton'
import { SERVICES, getServiceBySlug } from '../data/services'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ServicePage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  // Unknown slug → 404
  if (!service) return <Navigate to="/404" replace />

  const Icon = service.icon
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3)
  const path = `/services/${service.slug}`

  // ── Structured data ──
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.short,
    serviceType: service.title,
    areaServed: 'Kenya',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Mock Electrical and Electronics Ltd',
      telephone: '+254706888600',
      url: SITE_URL,
    },
    url: `${SITE_URL}${path}`,
  }

  const faqJsonLd = service.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}${path}` },
    ],
  }

  return (
    <article className="pt-20">
      <Seo
        title={`${service.title} | Mock Electrical and Electronics Ltd`}
        description={service.short}
        path={path}
        image={service.image}
        jsonLd={[serviceJsonLd, breadcrumbJsonLd, ...(faqJsonLd ? [faqJsonLd] : [])]}
      />

      {/* ── Hero band ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-surface via-surface to-surface-light section-padding">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-accent" role="list">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <FaChevronRight className="text-xs" />
                </li>
                <li>
                  <Link to="/#services" className="hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">
                  <FaChevronRight className="text-xs" />
                </li>
                <li className="text-dark font-medium" aria-current="page">
                  {service.title}
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-5">
              <Icon className="text-2xl text-primary" aria-hidden="true" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark leading-tight">
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-accent leading-relaxed max-w-xl">
              {service.intro}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <MagneticButton
                href="tel:0706888600"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full shadow-lg transition-colors"
                aria-label="Call us at 0706888600"
              >
                <FaPhone aria-hidden="true" />
                Call Now: 0706888600
              </MagneticButton>
              <MagneticButton
                href="https://wa.me/254716439680"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 glass-card text-dark hover:text-primary font-bold px-8 py-4 rounded-full shadow-md transition-colors"
                aria-label="Chat with us on WhatsApp"
              >
                <FaWhatsapp className="text-xl text-green-600" aria-hidden="true" />
                WhatsApp Us
              </MagneticButton>
            </div>
          </motion.div>

          {/* Image (tilt-reactive glass frame) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <TiltCard className="glass-card rounded-3xl p-3 shadow-2xl">
              {/* TODO: swap this placehold.co URL for the real product photo
                  (store under public/images/ — see Image Plan in CLAUDE.md). */}
              <img
                src={service.image}
                alt={service.imageAlt}
                loading="eager"
                className="w-full aspect-video object-cover rounded-2xl"
              />
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section-padding bg-surface" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            id="benefits-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-extrabold text-dark mb-8"
          >
            Why choose our <span className="gradient-text">{service.title}</span>
          </motion.h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid sm:grid-cols-2 gap-5"
            role="list"
          >
            {service.benefits.map((benefit) => (
              <motion.li
                key={benefit}
                variants={fadeUp}
                className="glass-card rounded-2xl p-5 flex items-start gap-3"
              >
                <FaCheckCircle className="text-primary shrink-0 mt-1" aria-hidden="true" />
                <span className="text-accent leading-relaxed">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      {service.faqs?.length > 0 && (
        <section
          className="section-padding bg-surface-light"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto">
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-extrabold text-dark mb-8 text-center"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                  <p className="text-accent leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related services ── */}
      <section className="section-padding bg-surface" aria-labelledby="related-heading">
        <div className="max-w-7xl mx-auto">
          <h2
            id="related-heading"
            className="text-2xl sm:text-3xl font-extrabold text-dark mb-8 text-center"
          >
            Explore More <span className="gradient-text">Services</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((r) => {
              const RIcon = r.icon
              return (
                <motion.div
                  key={r.slug}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                >
                  <Link
                    to={`/services/${r.slug}`}
                    className="glass-card rounded-2xl p-6 flex flex-col gap-3 h-full"
                    aria-label={`View ${r.title}`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      <RIcon className="text-lg text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-dark leading-snug">{r.title}</h3>
                    <p className="text-sm text-accent leading-relaxed line-clamp-2">
                      {r.short}
                    </p>
                    <span className="mt-auto text-sm font-semibold text-primary inline-flex items-center gap-1">
                      Learn more <FaChevronRight className="text-xs" aria-hidden="true" />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </article>
  )
}
