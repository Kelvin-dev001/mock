/**
 * TrustBadges.jsx — NTSA Compliance & Trust Badges section.
 * Displays placeholder certification badges with glassmorphism styling.
 * Builds social proof and regulatory credibility.
 */
import React from 'react'
import { motion } from 'framer-motion'
import { FaCertificate, FaShieldAlt, FaAward, FaCheckDouble, FaStar } from 'react-icons/fa'

// Badge/certification data
const BADGES = [
  {
    icon: FaCertificate,
    label: 'NTSA Approved',
    sub: 'Official NTSA Certification',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    icon: FaShieldAlt,
    label: 'ISO Certified',
    sub: 'Quality Management Standard',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
  },
  {
    icon: FaAward,
    label: 'Award Winning',
    sub: 'Best Telematics Provider Kenya',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
  },
  {
    icon: FaCheckDouble,
    label: 'Fully Licensed',
    sub: 'Business Registration Kenya',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
  {
    icon: FaStar,
    label: '5-Star Rated',
    sub: 'Customer Satisfaction',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
  },
]

// Partner / client logos (placeholder text badges)
const PARTNERS = [
  'Kenya Red Cross',
  'Matatu SACCO Alliance',
  'Corporate Fleet Managers',
  'NTSA Partners',
  'Insurance Companies',
]

export default function TrustBadges() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="section-padding bg-bg-teal"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            Verified & Trusted
          </span>
          <h2
            id="trust-heading"
            className="text-3xl sm:text-4xl font-extrabold text-text-dark"
          >
            Trusted &amp; <span className="gradient-text">Certified</span>
          </h2>
          <p className="mt-4 text-text-gray max-w-2xl mx-auto">
            Our certifications and partnerships demonstrate our commitment to quality,
            compliance, and customer trust.
          </p>
        </motion.div>

        {/* Certification badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-14"
        >
          {BADGES.map((badge, i) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className={`glass-card rounded-2xl px-6 py-5 flex flex-col items-center gap-2 border ${badge.border} min-w-[140px]`}
              >
                <div className={`w-14 h-14 ${badge.bg} rounded-full flex items-center justify-center`}>
                  <Icon className={`text-2xl ${badge.color}`} aria-hidden="true" />
                </div>
                <p className={`font-bold text-sm ${badge.color}`}>{badge.label}</p>
                <p className="text-text-gray text-xs text-center leading-tight">{badge.sub}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/50 mb-10" />

        {/* Partner logos / trust bar */}
        <div className="text-center">
          <p className="text-text-gray text-sm font-medium uppercase tracking-wider mb-6">
            Serving organisations across Kenya
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {PARTNERS.map((partner) => (
              <span
                key={partner}
                className="glass-card px-5 py-2.5 rounded-full text-text-gray text-sm font-medium border border-white/60"
              >
                {partner}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
