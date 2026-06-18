/**
 * Services.jsx — Six service offering cards with glassmorphism styling.
 * Each card includes: image placeholder, icon badge, title, and description.
 * Staggered scroll-triggered animation via Framer Motion useInView.
 *
 * NOTE: All `image` values are on-brand placehold.co placeholders. Each card is
 * marked with a TODO indicating the real product photo to swap in (store the
 * final assets in public/images/ — see the Image Plan in CLAUDE.md).
 *
 * Services:
 *  1. NTSA Approved Vehicle Speed Limiters
 *  2. GPS Vehicle Trackers
 *  3. Basic Vehicle Trackers
 *  4. Bluetooth Trackers
 *  5. Vehicle Video Telematics
 *  6. Car Alarms
 */
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { SERVICES } from '../data/services'
import TiltCard from './motion/TiltCard'

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-surface relative overflow-hidden"
    >
      {/* Decorative on-brand blob */}
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            What We Offer
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-extrabold text-dark"
          >
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-accent max-w-2xl mx-auto text-base sm:text-lg">
            From NTSA-approved speed limiters to advanced video telematics — we provide
            end-to-end vehicle safety and tracking solutions across Kenya.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.slug} variants={cardVariants}>
                <TiltCard
                  max={6}
                  className="glass-card rounded-3xl overflow-hidden group h-full"
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex flex-col h-full"
                    aria-label={`View details for ${service.title}`}
                  >
                    {/* Image placeholder — real photo swapped via the TODO in
                        src/data/services.js */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Subtle charcoal gradient for legibility on real photos */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Card body */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="w-12 h-12 rounded-2xl bg-surface-light shadow-sm flex items-center justify-center mb-4 -mt-10 relative z-10 border border-glass-border group-hover:scale-110 transition-transform">
                        <Icon className="text-xl text-primary" aria-hidden="true" />
                      </div>

                      <h3 className="text-lg font-bold text-dark mb-2 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-accent text-sm leading-relaxed">
                        {service.short}
                      </p>

                      {/* Learn more link */}
                      <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary group-hover:text-primary-dark group-hover:gap-2 transition-all">
                        Learn More →
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
