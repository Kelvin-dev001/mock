/**
 * Branches.jsx — Three branch location cards with contact details.
 * Branches: Nairobi (HQ), Sagana, Embu.
 * Each card includes: location icon, name, phone, "Call" button, map placeholder.
 * Glass card styling with hover effects and scroll animations.
 */
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaClock, FaBuilding } from 'react-icons/fa'

// Branch data
const BRANCHES = [
  {
    name: 'Nairobi',
    badge: 'Head Office',
    phone: '0706888600',
    tel: 'tel:0706888600',
    hours: 'Mon – Sat: 8am – 6pm',
    description:
      'Our main headquarters serving the greater Nairobi metropolitan area. Visit us for consultations, installations, and product demos.',
    mapAlt: 'Map showing location of Mock Electrical Nairobi Head Office',
    emoji: '🏢',
    accent: 'from-primary/20 to-blue-50',
    badgeColor: 'bg-primary text-white',
  },
  {
    name: 'Sagana Branch',
    badge: 'Branch',
    phone: '0703222356',
    tel: 'tel:0703222356',
    hours: 'Mon – Sat: 8am – 5pm',
    description:
      'Serving Sagana, Karatina, and surrounding Mount Kenya region with full installation and support services.',
    mapAlt: 'Map showing location of Mock Electrical Sagana Branch',
    emoji: '🏪',
    accent: 'from-secondary/20 to-teal-50',
    badgeColor: 'bg-secondary text-white',
  },
  {
    name: 'Embu Branch',
    badge: 'Branch',
    phone: '0703222356',
    tel: 'tel:0703222356',
    hours: 'Mon – Sat: 8am – 5pm',
    description:
      'Serving Embu County and Eastern Kenya with expert automotive electronics installation and after-sales support.',
    mapAlt: 'Map showing location of Mock Electrical Embu Branch',
    emoji: '🏬',
    accent: 'from-accent/20 to-orange-50',
    badgeColor: 'bg-accent text-white',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Branches() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="branches"
      aria-labelledby="branches-heading"
      className="section-padding bg-bg-blue"
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
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Our Locations
          </span>
          <h2
            id="branches-heading"
            className="text-3xl sm:text-4xl font-extrabold text-text-dark"
          >
            Find Us <span className="gradient-text">Near You</span>
          </h2>
          <p className="mt-4 text-text-gray max-w-2xl mx-auto text-base sm:text-lg">
            Three convenient locations across Kenya — Nairobi, Sagana, and Embu — ready
            to serve you with expert vehicle electronics installation and support.
          </p>
        </motion.div>

        {/* Branch cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BRANCHES.map((branch) => (
            <motion.article
              key={branch.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl overflow-hidden"
              aria-label={`${branch.name} branch`}
            >
              {/* Map placeholder */}
              <div
                className={`w-full h-48 bg-gradient-to-br ${branch.accent} flex flex-col items-center justify-center gap-2`}
                role="img"
                aria-label={branch.mapAlt}
              >
                <span className="text-5xl">{branch.emoji}</span>
                <p className="text-xs text-text-gray px-4 text-center">{branch.mapAlt}</p>
              </div>

              {/* Card content */}
              <div className="p-6">
                {/* Branch name + badge */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-text-dark flex items-center gap-2">
                    <FaBuilding className="text-primary" aria-hidden="true" />
                    {branch.name}
                  </h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${branch.badgeColor}`}>
                    {branch.badge}
                  </span>
                </div>

                <p className="text-text-gray text-sm leading-relaxed mb-4">
                  {branch.description}
                </p>

                {/* Phone */}
                <div className="flex items-center gap-2 text-text-dark mb-2">
                  <FaPhone className="text-primary text-sm" aria-hidden="true" />
                  <a
                    href={branch.tel}
                    className="font-semibold text-sm hover:text-primary transition-colors"
                    aria-label={`Call ${branch.name} branch at ${branch.phone}`}
                  >
                    {branch.phone}
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-2 text-text-gray mb-5">
                  <FaClock className="text-secondary text-sm" aria-hidden="true" />
                  <span className="text-sm">{branch.hours}</span>
                </div>

                {/* Location marker */}
                <div className="flex items-center gap-2 text-text-gray mb-5">
                  <FaMapMarkerAlt className="text-accent text-sm" aria-hidden="true" />
                  <span className="text-sm">{branch.name}, Kenya</span>
                </div>

                {/* CTA button */}
                <a
                  href={branch.tel}
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all hover:shadow-md"
                  aria-label={`Call ${branch.name} branch`}
                >
                  <FaPhone className="text-sm" aria-hidden="true" />
                  Call This Branch
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
