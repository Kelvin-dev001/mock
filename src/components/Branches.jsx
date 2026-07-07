/**
 * Branches.jsx — Three branch location cards with contact details + live maps.
 * Branches: Nairobi (HQ), Sagana, Embu.
 * Each card includes: embedded Google Map, name, phone, hours, and a "Call" button.
 * Glass card styling with hover effects and scroll animations.
 */
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaClock, FaBuilding } from 'react-icons/fa'

// Branch data
// mapSrc: paste the `src` value from Google Maps → Share → "Embed a map".
// (The width/height Google gives you don't matter — the iframe is sized via CSS.)
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
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.826998160168!2d36.82612807496561!3d-1.2772545987105903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTYnMzguMSJTIDM2wrA0OSc0My4zIkU!5e0!3m2!1sen!2ske!4v1783401026039!5m2!1sen!2ske',
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
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.5512955265167!2d37.20498657496495!3d-0.6628866993306478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMzknNDYuNCJTIDM3wrAxMicyNy4yIkU!5e0!3m2!1sen!2ske!4v1783400986463!5m2!1sen!2ske',
    badgeColor: 'bg-dark text-white',
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
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.639478764192!2d37.45274667496475!3d-0.5424964994521918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMzInMzMuMCJTIDM3wrAyNycxOS4yIkU!5e0!3m2!1sen!2ske!4v1783401051771!5m2!1sen!2ske',
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
      className="section-padding bg-surface-light"
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
            className="text-3xl sm:text-4xl font-extrabold text-dark"
          >
            Find Us <span className="gradient-text">Near You</span>
          </h2>
          <p className="mt-4 text-accent max-w-2xl mx-auto text-base sm:text-lg">
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
              {/* Embedded Google Map (falls back to a branded panel until a src is added) */}
              {branch.mapSrc ? (
                <iframe
                  title={branch.mapAlt}
                  src={branch.mapSrc}
                  className="w-full h-48 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div
                  className="w-full h-48 bg-gradient-to-br from-primary/20 to-surface flex flex-col items-center justify-center gap-2"
                  role="img"
                  aria-label={branch.mapAlt}
                >
                  <FaMapMarkerAlt className="text-4xl text-primary" aria-hidden="true" />
                  <p className="text-xs text-accent px-4 text-center">{branch.mapAlt}</p>
                </div>
              )}

              {/* Card content */}
              <div className="p-6">
                {/* Branch name + badge */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-dark flex items-center gap-2">
                    <FaBuilding className="text-primary" aria-hidden="true" />
                    {branch.name}
                  </h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${branch.badgeColor}`}>
                    {branch.badge}
                  </span>
                </div>

                <p className="text-accent text-sm leading-relaxed mb-4">
                  {branch.description}
                </p>

                {/* Phone */}
                <div className="flex items-center gap-2 text-dark mb-2">
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
                <div className="flex items-center gap-2 text-accent mb-5">
                  <FaClock className="text-primary text-sm" aria-hidden="true" />
                  <span className="text-sm">{branch.hours}</span>
                </div>

                {/* Location marker */}
                <div className="flex items-center gap-2 text-accent mb-5">
                  <FaMapMarkerAlt className="text-primary text-sm" aria-hidden="true" />
                  <span className="text-sm">{branch.name}, Kenya</span>
                </div>

                {/* CTA button */}
                <a
                  href={branch.tel}
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-all hover:shadow-md"
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