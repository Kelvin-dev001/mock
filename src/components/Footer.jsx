/**
 * Footer.jsx — Site footer with company info, quick links, service links, and contact details.
 * Copyright: © 2026 Mock Electrical and Electronics Ltd.
 */
import React from 'react'
import { FaBolt, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

// Quick navigation links
const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Branches', href: '#branches' },
  { label: 'Contact', href: '#contact' },
]

// Service links
const SERVICE_LINKS = [
  'NTSA Speed Limiters',
  'GPS Vehicle Trackers',
  'Basic Trackers',
  'Bluetooth Trackers',
  'Video Telematics',
  'Car Alarms',
]

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white"
      role="contentinfo"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Column 1: Brand ── */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group w-fit">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <FaBolt className="text-white text-lg" aria-hidden="true" />
              </div>
              <span className="font-bold text-lg">
                Mock<span className="text-secondary"> Electrical</span>
              </span>
            </a>

            <p className="text-slate-300 text-sm leading-relaxed">
              Kenya's trusted provider of NTSA-approved vehicle speed limiters, GPS
              trackers, video telematics, and car alarms. Serving Nairobi, Sagana,
              and Embu.
            </p>

            {/* Social / contact quick links */}
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="tel:0706888600"
                className="flex items-center gap-2 text-slate-300 hover:text-white text-sm transition-colors"
                aria-label="Call Nairobi Head Office"
              >
                <FaPhone className="text-primary shrink-0" aria-hidden="true" />
                0706888600 (Nairobi)
              </a>
              <a
                href="https://wa.me/254716439680"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-green-400 text-sm transition-colors"
                aria-label="WhatsApp us"
              >
                <FaWhatsapp className="text-green-400 shrink-0" aria-hidden="true" />
                WhatsApp: 0716439680
              </a>
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <nav aria-label="Footer quick links">
            <h4 className="text-white font-bold text-base mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3" role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Column 3: Services ── */}
          <nav aria-label="Footer services links">
            <h4 className="text-white font-bold text-base mb-5">Our Services</h4>
            <ul className="flex flex-col gap-3" role="list">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-300 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Column 4: Locations ── */}
          <div>
            <h4 className="text-white font-bold text-base mb-5">Our Branches</h4>
            <ul className="flex flex-col gap-4" role="list">
              {/* Nairobi */}
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white text-sm font-semibold">Nairobi (Head Office)</p>
                  <a href="tel:0706888600" className="text-slate-300 hover:text-white text-sm transition-colors">
                    📞 0706888600
                  </a>
                </div>
              </li>
              {/* Sagana */}
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-secondary mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white text-sm font-semibold">Sagana Branch</p>
                  <a href="tel:0703222356" className="text-slate-300 hover:text-white text-sm transition-colors">
                    📞 0703222356
                  </a>
                </div>
              </li>
              {/* Embu */}
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white text-sm font-semibold">Embu Branch</p>
                  <a href="tel:0703222356" className="text-slate-300 hover:text-white text-sm transition-colors">
                    📞 0703222356
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom copyright bar ── */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-sm text-center sm:text-left">
            © 2026 Mock Electrical and Electronics Ltd. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs flex items-center gap-1">
            Built with <FaHeart className="text-red-400 mx-0.5" aria-hidden="true" /> in Kenya
          </p>
        </div>
      </div>
    </footer>
  )
}
