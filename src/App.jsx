/**
 * App.jsx — Root application component.
 * Assembles all page sections in order and renders the floating WhatsApp button.
 */
import React from 'react'
import { motion } from 'framer-motion'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import TrustBadges from './components/TrustBadges'
import Branches from './components/Branches'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    // Page-load fade-in transition
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-bg-light"
    >
      {/* Sticky navigation */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <TrustBadges />
        <Branches />
        <Contact />
      </main>

      {/* Site footer */}
      <Footer />

      {/* Floating WhatsApp CTA — always visible */}
      <WhatsAppButton />
    </motion.div>
  )
}

export default App
