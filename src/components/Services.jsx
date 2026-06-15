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
import {
  FaCar,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaBluetooth,
  FaVideo,
  FaBell,
} from 'react-icons/fa'

// Service data. `image` = placeholder URL; `todo` = the real photo to drop in.
const SERVICES = [
  {
    icon: FaCar,
    title: 'NTSA Approved Vehicle Speed Limiters',
    description:
      'Stay compliant with Kenya\'s NTSA regulations. Our certified speed limiters ensure your vehicles operate within legal speed limits.',
    // TODO: Replace with a close-up photo of a fitted NTSA speed-limiter unit.
    image: 'https://placehold.co/600x400/C8102E/F5F5F5?text=NTSA+Speed+Limiter',
    imageAlt: 'NTSA Approved Vehicle Speed Limiter device installed in a vehicle',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'GPS Vehicle Trackers',
    description:
      'Real-time vehicle tracking with advanced GPS technology. Monitor your fleet 24/7 from anywhere in Kenya.',
    // TODO: Replace with GPS tracker hardware or a live tracking dashboard/map UI.
    image: 'https://placehold.co/600x400/1A1A1A/F5F5F5?text=GPS+Tracker',
    imageAlt: 'GPS vehicle tracker device showing real-time location on map',
  },
  {
    icon: FaShieldAlt,
    title: 'Basic Vehicle Trackers',
    description:
      'Affordable and reliable vehicle tracking solutions for personal and commercial vehicles.',
    // TODO: Replace with a basic tracker product photo (compact tracker unit).
    image: 'https://placehold.co/600x400/3A3A3A/F5F5F5?text=Basic+Tracker',
    imageAlt: 'Basic vehicle tracker unit for affordable fleet monitoring',
  },
  {
    icon: FaBluetooth,
    title: 'Bluetooth Trackers',
    description:
      'Smart Bluetooth Ignition Technology for keyless vehicle security and convenience.',
    // TODO: Replace with a Bluetooth ignition module / phone app screen photo.
    image: 'https://placehold.co/600x400/C8102E/F5F5F5?text=Bluetooth+Ignition',
    imageAlt: 'Bluetooth tracker with smart ignition technology for vehicle security',
  },
  {
    icon: FaVideo,
    title: 'Vehicle Video Telematics',
    description:
      'HD video monitoring combined with telematics data for complete fleet visibility and driver safety.',
    // TODO: Replace with a dash-cam mounted in a vehicle cab.
    image: 'https://placehold.co/600x400/1A1A1A/F5F5F5?text=Video+Telematics',
    imageAlt: 'Vehicle dash camera for video telematics and fleet safety monitoring',
  },
  {
    icon: FaBell,
    title: 'Car Alarms',
    description:
      'Advanced car alarm systems to protect your vehicle from theft and unauthorized access.',
    // TODO: Replace with a car alarm system / siren / key fob photo.
    image: 'https://placehold.co/600x400/3A3A3A/F5F5F5?text=Car+Alarm',
    imageAlt: 'Car alarm system for vehicle theft protection in Kenya',
  },
]

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
              <motion.article
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="glass-card rounded-3xl overflow-hidden group cursor-pointer flex flex-col"
                aria-label={service.title}
              >
                {/* Image placeholder — swap per the TODO in the data above */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle charcoal gradient for text legibility on real photos */}
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
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary hover:text-primary-dark hover:underline"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    Enquire Now →
                  </a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
