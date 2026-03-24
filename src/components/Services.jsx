/**
 * Services.jsx — Six service offering cards with glassmorphism styling.
 * Each card includes: icon, image placeholder, title, and description.
 * Staggered scroll-triggered animation via Framer Motion useInView.
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

// Service data
const SERVICES = [
  {
    icon: FaCar,
    title: 'NTSA Approved Vehicle Speed Limiters',
    description:
      'Stay compliant with Kenya\'s NTSA regulations. Our certified speed limiters ensure your vehicles operate within legal speed limits.',
    bgFrom: 'from-blue-100',
    bgTo: 'to-blue-50',
    iconColor: 'text-primary',
    imageBg: 'from-primary/20 to-blue-100',
    imageAlt: 'NTSA Approved Vehicle Speed Limiter device installed in a vehicle',
    emoji: '⚡',
    keyword: 'NTSA speed limiters Kenya',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'GPS Vehicle Trackers',
    description:
      'Real-time vehicle tracking with advanced GPS technology. Monitor your fleet 24/7 from anywhere in Kenya.',
    bgFrom: 'from-teal-100',
    bgTo: 'to-teal-50',
    iconColor: 'text-secondary',
    imageBg: 'from-secondary/20 to-teal-100',
    imageAlt: 'GPS vehicle tracker device showing real-time location on map',
    emoji: '📡',
    keyword: 'GPS vehicle tracking Kenya',
  },
  {
    icon: FaShieldAlt,
    title: 'Basic Vehicle Trackers',
    description:
      'Affordable and reliable vehicle tracking solutions for personal and commercial vehicles.',
    bgFrom: 'from-purple-100',
    bgTo: 'to-purple-50',
    iconColor: 'text-purple-600',
    imageBg: 'from-purple-200/40 to-purple-100',
    imageAlt: 'Basic vehicle tracker unit for affordable fleet monitoring',
    emoji: '🛡️',
    keyword: 'vehicle trackers Kenya',
  },
  {
    icon: FaBluetooth,
    title: 'Bluetooth Trackers',
    description:
      'Smart Bluetooth Ignition Technology for keyless vehicle security and convenience.',
    bgFrom: 'from-indigo-100',
    bgTo: 'to-indigo-50',
    iconColor: 'text-indigo-600',
    imageBg: 'from-indigo-200/40 to-indigo-100',
    imageAlt: 'Bluetooth tracker with smart ignition technology for vehicle security',
    emoji: '📶',
    keyword: 'Bluetooth vehicle tracker Kenya',
  },
  {
    icon: FaVideo,
    title: 'Vehicle Video Telematics',
    description:
      'HD video monitoring combined with telematics data for complete fleet visibility and driver safety.',
    bgFrom: 'from-orange-100',
    bgTo: 'to-orange-50',
    iconColor: 'text-accent',
    imageBg: 'from-accent/20 to-orange-100',
    imageAlt: 'Vehicle dash camera for video telematics and fleet safety monitoring',
    emoji: '📹',
    keyword: 'vehicle video telematics Kenya',
  },
  {
    icon: FaBell,
    title: 'Car Alarms',
    description:
      'Advanced car alarm systems to protect your vehicle from theft and unauthorized access.',
    bgFrom: 'from-red-100',
    bgTo: 'to-red-50',
    iconColor: 'text-red-500',
    imageBg: 'from-red-200/40 to-red-100',
    imageAlt: 'Car alarm system for vehicle theft protection in Kenya',
    emoji: '🔔',
    keyword: 'car alarms Nairobi Kenya',
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
            What We Offer
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-extrabold text-text-dark"
          >
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-text-gray max-w-2xl mx-auto text-base sm:text-lg">
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
                className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
                aria-label={service.title}
              >
                {/* Image placeholder */}
                <div
                  className={`w-full h-44 bg-gradient-to-br ${service.imageBg} flex items-center justify-center`}
                  role="img"
                  aria-label={service.imageAlt}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-2">{service.emoji}</div>
                    <p className="text-xs text-text-gray px-4 leading-tight">{service.imageAlt}</p>
                  </div>
                </div>

                {/* Card body */}
                <div className={`p-6 bg-gradient-to-br ${service.bgFrom} ${service.bgTo}`}>
                  <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`text-xl ${service.iconColor}`} aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-bold text-text-dark mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-text-gray text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1 mt-4 text-sm font-semibold ${service.iconColor} hover:underline`}
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
