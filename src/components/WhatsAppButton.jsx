/**
 * WhatsAppButton.jsx — Floating WhatsApp CTA button.
 * Features:
 *  - Fixed bottom-right corner, always visible above all content
 *  - Green WhatsApp icon with pulse ring animation
 *  - "We are online" tooltip bubble that shows on hover/mount
 *  - Links to https://wa.me/254716439680
 */
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true)

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      role="complementary"
      aria-label="WhatsApp contact button"
    >
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-text-dark text-sm font-semibold px-4 py-2 rounded-2xl shadow-lg border border-green-100 flex items-center gap-2 max-w-[160px]"
            role="tooltip"
          >
            {/* Online indicator dot */}
            <span
              className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0"
              aria-hidden="true"
            />
            We are online
            {/* Close tooltip */}
            <button
              onClick={() => setShowTooltip(false)}
              className="ml-1 text-slate-400 hover:text-slate-600 text-xs leading-none"
              aria-label="Dismiss tooltip"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button with pulse ring */}
      <div className="relative">
        {/* Animated pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"
          aria-hidden="true"
        />

        <motion.a
          href="https://wa.me/254716439680"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl transition-colors"
          aria-label="Chat with us on WhatsApp at 0716439680"
          onMouseEnter={() => setShowTooltip(true)}
        >
          <FaWhatsapp className="text-white text-3xl" aria-hidden="true" />
        </motion.a>
      </div>
    </div>
  )
}
