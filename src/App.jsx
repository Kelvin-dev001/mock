/**
 * App.jsx — Root layout + client-side routes.
 *
 * Navbar, Footer, and the floating WhatsApp button persist across every route.
 * The routed content swaps between the homepage, the per-service detail pages,
 * and a 404. A ScrollToTop helper resets scroll position on navigation.
 */
import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import NotFound from './pages/NotFound'

// Reset scroll to top whenever the route changes (SPA navigation).
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-surface"
    >
      <ScrollToTop />

      {/* Sticky navigation (persists across routes) */}
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Site footer + floating WhatsApp CTA (persist across routes) */}
      <Footer />
      <WhatsAppButton />
    </motion.div>
  )
}

export default App
