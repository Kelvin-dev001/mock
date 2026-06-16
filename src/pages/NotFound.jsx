/**
 * NotFound.jsx — 404 page for unmatched routes (and unknown service slugs).
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHome } from 'react-icons/fa'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-surface via-surface to-surface-light">
      <Seo
        title="Page Not Found | Mock Electrical and Electronics Ltd"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-10 text-center max-w-lg"
      >
        <p className="text-6xl font-extrabold gradient-text">404</p>
        <h1 className="mt-4 text-2xl font-bold text-dark">Page not found</h1>
        <p className="mt-3 text-accent">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-colors"
        >
          <FaHome aria-hidden="true" />
          Back to Home
        </Link>
      </motion.div>
    </section>
  )
}
