/**
 * Hero.jsx — Above-the-fold hero section.
 * Features:
 *  - H1 headline: "Kenya's Trusted Leader in Vehicle Safety & Tracking Solutions"
 *  - Value proposition subtext
 *  - Two CTA buttons: Call Now + WhatsApp Us
 *  - Large hero image placeholder (swap for a real fleet photo — see TODO)
 *  - Glassmorphism floating stat / compliance cards
 *  - Framer Motion entrance animations + hover effects
 */
import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import TiltCard from './motion/TiltCard'
import MagneticButton from './motion/MagneticButton'

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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-surface via-surface to-surface-light"
    >
      {/* Decorative background blobs (on-brand red / charcoal) */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 bg-dark/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"
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
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-tight"
          >
            Kenya's Trusted Leader in{' '}
            <span className="gradient-text">Vehicle Safety &amp; Tracking</span>{' '}
            Solutions
          </motion.h1>

          {/* Value proposition */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-accent leading-relaxed max-w-xl"
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
                className="flex items-center gap-1.5 text-sm font-medium text-dark"
              >
                <FaCheckCircle className="text-primary shrink-0" aria-hidden="true" />
                {point}
              </li>
            ))}
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-2">
            {/* Primary: Call Now (magnetic) */}
            <MagneticButton
              href="tel:0706888600"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-colors text-base"
              aria-label="Call us at 0706888600"
            >
              <FaPhone aria-hidden="true" />
              Call Now: 0706888600
            </MagneticButton>

            {/* Secondary: WhatsApp (magnetic glass button) */}
            <MagneticButton
              href="https://wa.me/254716439680"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 glass-card text-dark hover:text-primary font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-colors text-base"
              aria-label="Chat with us on WhatsApp"
            >
              <FaWhatsapp className="text-xl text-green-600" aria-hidden="true" />
              WhatsApp Us
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* ── Right: Hero image placeholder ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="relative"
        >
          {/* Glass frame around the hero visual — pointer-reactive 3D tilt */}
          <TiltCard max={7} className="glass-card rounded-3xl p-3 shadow-2xl">
            {/*
              TODO: Replace this placeholder with a real hero photo of a branded
              fleet / installed dashboard. Drop the asset in public/images/ and
              point src to e.g. "/images/hero-fleet.jpg".
            */}
            <img
              src="https://placehold.co/720x560/1A1A1A/F5F5F5?text=Protected+Fleet"
              alt="Mock Electrical protected vehicle fleet on a Kenyan road"
              loading="eager"
              className="w-full aspect-[4/3] object-cover rounded-2xl"
            />
          </TiltCard>

          {/* Floating stat card (glassmorphism) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 flex items-center gap-3 shadow-xl"
          >
            <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center">
              <span className="text-lg" aria-hidden="true">📍</span>
            </div>
            <div>
              <p className="font-bold text-dark text-sm">3 Locations</p>
              <p className="text-accent text-xs">Nairobi · Sagana · Embu</p>
            </div>
          </motion.div>

          {/* Floating compliance badge (glassmorphism) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="absolute -top-4 -right-4 glass-card rounded-2xl p-3 flex items-center gap-2 shadow-xl"
          >
            <span className="text-2xl" aria-hidden="true">✅</span>
            <div>
              <p className="font-bold text-primary text-xs">NTSA Approved</p>
              <p className="text-accent text-xs">Certified &amp; Compliant</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
