/**
 * WhyChooseUs.jsx — Feature highlights grid with animated fade-in effects.
 * Six reasons to choose Mock Electrical, shown as icon + text cards.
 */
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaCertificate,
  FaCar,
  FaMapMarkerAlt,
  FaHeadset,
  FaTools,
  FaTags,
} from 'react-icons/fa'

// Feature data
const FEATURES = [
  {
    icon: FaCertificate,
    title: 'NTSA Certified & Approved',
    description:
      'All our speed limiters are officially certified and approved by NTSA Kenya, ensuring full legal compliance for your vehicles.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: FaCar,
    title: '10,000+ Vehicles Protected',
    description:
      'Trusted by thousands of fleet managers and individual car owners across Kenya for reliable, proven vehicle security.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: FaMapMarkerAlt,
    title: '3 Branches Across Kenya',
    description:
      'Conveniently located in Nairobi, Sagana, and Embu — we bring expert automotive electronics close to you.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: FaHeadset,
    title: '24/7 Customer Support',
    description:
      'Our dedicated support team is available around the clock to assist you with installation, technical issues, and queries.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: FaTools,
    title: 'Professional Installation',
    description:
      'Certified technicians install all our products to manufacturer standards, ensuring optimal performance and longevity.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: FaTags,
    title: 'Competitive Pricing',
    description:
      'Quality automotive electronics at fair, transparent prices — no hidden fees, no surprises.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
]

// Stagger variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="section-padding bg-white"
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
            Why Us
          </span>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl font-extrabold text-text-dark"
          >
            Why Choose{' '}
            <span className="gradient-text">Mock Electrical?</span>
          </h2>
          <p className="mt-4 text-text-gray max-w-2xl mx-auto text-base sm:text-lg">
            We combine technical excellence, official certification, and customer-first
            service to deliver Kenya's best automotive electronics experience.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-4 p-6 rounded-3xl glass-card group"
              >
                {/* Icon badge */}
                <div
                  className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`text-2xl ${feature.color}`} aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-text-dark mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-text-gray text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
