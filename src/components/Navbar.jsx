/**
 * Navbar.jsx — Sticky glassmorphism navigation bar.
 * Features:
 *  - Company logo/name on the left
 *  - Nav links: Home, Services, About, Branches, Contact
 *  - "Call Now" CTA button on the right
 *  - Transparent → glass background on scroll
 *  - Mobile hamburger menu with slide animation (Framer Motion)
 */
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone, FaBolt } from 'react-icons/fa'

// Navigation links definition — each `id` is a homepage section anchor.
const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'why-us' },
  { label: 'Branches', id: 'branches' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Add glass effect when user scrolls down
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smoothly scroll to a homepage section. If we're on another route (e.g. a
  // service page), navigate home first, then scroll once it has rendered.
  const goToSection = (id) => (e) => {
    e.preventDefault()
    setMenuOpen(false)
    const scroll = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for the homepage to mount before scrolling.
      setTimeout(scroll, 80)
    } else {
      scroll()
    }
  }

  // Brand click → home (top)
  const goHome = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname !== '/') navigate('/')
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-light/70 backdrop-blur-md shadow-md border-b border-glass-border'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* ── Logo / Brand ── */}
        <a href="/" onClick={goHome} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md">
            <FaBolt className="text-white text-lg" aria-hidden="true" />
          </div>
          <span className="font-bold text-lg leading-tight text-dark group-hover:text-primary transition-colors">
            Mock<span className="text-primary"> Electrical</span>
          </span>
        </a>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`/#${link.id}`}
                onClick={goToSection(link.id)}
                className="text-accent font-medium hover:text-primary transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA button ── */}
        <a
          href="tel:0706888600"
          className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all text-sm"
          aria-label="Call us now at 0706888600"
        >
          <FaPhone className="text-xs" aria-hidden="true" />
          Call Now: 0706888600
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden p-2 rounded-lg text-dark hover:bg-primary/10 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {/* ── Mobile slide-down menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface-light/90 backdrop-blur-md border-b border-glass-border shadow-lg"
          >
            <ul className="flex flex-col px-6 py-4 gap-4" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`/#${link.id}`}
                    onClick={goToSection(link.id)}
                    className="block text-dark font-medium py-1 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:0706888600"
                  className="flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-full shadow-md mt-2"
                  onClick={handleLinkClick}
                >
                  <FaPhone className="text-xs" />
                  Call Now: 0706888600
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
