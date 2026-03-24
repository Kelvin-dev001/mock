/**
 * Hero.jsx — Above-the-fold hero section.
 * Features:
 *  - H1 headline: "Kenya's Trusted Leader in Vehicle Safety & Tracking Solutions"
 *  - Value proposition subtext
 *  - Two CTA buttons: Call Now + WhatsApp Us
 *  - Large hero image placeholder with gradient
 *  - Framer Motion entrance animations
 */
import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'

// Staggered container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// Quick trust signals shown below the headline
const TRUST_POINTS = [
  'NTSA Certified',
  '10,000+ Vehicles Protected',
  '3 Branches in Kenya',
]

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-bg-light via-bg-blue to-bg-teal"
    >
      {/* Decorative background blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* ── Left: Text content ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full border border-primary/20">
              🇰🇪 Kenya's #1 Automotive Electronics Provider
            </span>
          </motion.div>

          {/* H1 Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-dark leading-tight"
          >
            Kenya's Trusted Leader in{' '}
            <span className="gradient-text">Vehicle Safety &amp; Tracking</span>{' '}
            Solutions
          </motion.h1>

          {/* Value proposition */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-text-gray leading-relaxed max-w-xl"
          >
            NTSA-approved speed limiters, GPS tracking, and smart vehicle telematics
            — protecting your fleet and loved ones since day one. Serving Nairobi,
            Sagana, and Embu.
          </motion.p>

          {/* Trust points */}
          <motion.ul
            variants={itemVariants}
            className="flex flex-wrap gap-4"
            role="list"
            aria-label="Key highlights"
          >
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-1.5 text-sm font-medium text-text-dark"
              >
                <FaCheckCircle className="text-secondary shrink-0" aria-hidden="true" />
                {point}
              </li>
            ))}
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-2">
            {/* Primary: Call Now */}
            <a
              href="tel:0706888600"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all text-base"
              aria-label="Call us at 0706888600"
            >
              <FaPhone aria-hidden="true" />
              Call Now: 0706888600
            </a>

            {/* Secondary: WhatsApp */}
            <a
              href="https://wa.me/254716439680"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-green-600 border-2 border-green-500 font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all text-base"
              aria-label="Chat with us on WhatsApp"
            >
              <FaWhatsapp className="text-xl" aria-hidden="true" />
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Hero image placeholder ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="relative"
        >
          {/* Placeholder gradient box representing a vehicle fleet image */}
          <div
            className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-bg-teal border border-white/60"
            role="img"
            aria-label="Hero Image — Vehicle Fleet"
          >
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🚗🛻🚕</div>
              <p className="text-text-dark font-semibold text-lg">Hero Image — Vehicle Fleet</p>
              <p className="text-text-gray text-sm mt-2">Replace with an actual fleet photo</p>
            </div>
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 flex items-center gap-3 shadow-xl"
          >
            <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
              <span className="text-lg" aria-hidden="true">📍</span>
            </div>
            <div>
              <p className="font-bold text-text-dark text-sm">3 Locations</p>
              <p className="text-text-gray text-xs">Nairobi · Sagana · Embu</p>
            </div>
          </motion.div>

          {/* Floating compliance badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute -top-4 -right-4 glass-card rounded-2xl p-3 flex items-center gap-2 shadow-xl"
          >
            <span className="text-2xl" aria-hidden="true">✅</span>
            <div>
              <p className="font-bold text-primary text-xs">NTSA Approved</p>
              <p className="text-text-gray text-xs">Certified &amp; Compliant</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
