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
import { FaBars, FaTimes, FaPhone, FaBolt } from 'react-icons/fa'

// Navigation links definition
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#why-us' },
  { label: 'Branches', href: '#branches' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Add glass effect when user scrolls down
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-white/50'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* ── Logo / Brand ── */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
            <FaBolt className="text-white text-lg" aria-hidden="true" />
          </div>
          <span className="font-bold text-lg leading-tight text-text-dark group-hover:text-primary transition-colors">
            Mock<span className="text-primary"> Electrical</span>
          </span>
        </a>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-gray font-medium hover:text-primary transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA button ── */}
        <a
          href="tel:0706888600"
          className="hidden md:flex items-center gap-2 bg-accent hover:bg-orange-500 text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all text-sm"
          aria-label="Call us now at 0706888600"
        >
          <FaPhone className="text-xs" aria-hidden="true" />
          Call Now: 0706888600
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden p-2 rounded-lg text-text-dark hover:bg-primary/10 transition-colors"
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
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-white/50 shadow-lg"
          >
            <ul className="flex flex-col px-6 py-4 gap-4" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block text-text-dark font-medium py-1 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:0706888600"
                  className="flex items-center justify-center gap-2 bg-accent text-white font-semibold py-3 rounded-full shadow-md mt-2"
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
