/**
 * Contact.jsx — Contact section with phone numbers, WhatsApp CTA, and a simple form.
 * Form fields: Name, Phone, Service Needed (dropdown), Message.
 * Frontend only — no backend integration.
 */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa'

// Services offered (for dropdown)
const SERVICES_LIST = [
  'NTSA Approved Vehicle Speed Limiters',
  'GPS Vehicle Trackers',
  'Basic Vehicle Trackers',
  'Bluetooth Trackers',
  'Vehicle Video Telematics',
  'Car Alarms',
  'Other / General Enquiry',
]

// Contact info items
const CONTACT_ITEMS = [
  {
    icon: FaPhone,
    label: 'Nairobi (Head Office)',
    value: '0706888600',
    href: 'tel:0706888600',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: FaPhone,
    label: 'Sagana & Embu Branch',
    value: '0703222356',
    href: 'tel:0703222356',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '0716439680',
    href: 'https://wa.me/254716439680',
    color: 'text-green-600',
    bg: 'bg-green-50',
    external: true,
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Locations',
    value: 'Nairobi · Sagana · Embu',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend only — log and show success message
    console.log('Contact form submitted:', form)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding bg-white"
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
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Contact Us
          </span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-text-dark"
          >
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <p className="mt-4 text-text-gray max-w-2xl mx-auto">
            Ready to protect your vehicle or fleet? Reach out today and our team will
            get back to you promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ── Left: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold text-text-dark">Contact Information</h3>
            <p className="text-text-gray">
              Call, WhatsApp, or fill in the form. We're available Monday to Saturday,
              8am–6pm (Nairobi) and 8am–5pm (Sagana &amp; Embu).
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className={`flex items-center gap-4 glass-card rounded-2xl p-4`}>
                    <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}>
                      <Icon className={`text-xl ${item.color}`} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-text-gray font-medium">{item.label}</p>
                      <p className={`font-bold text-text-dark`}>{item.value}</p>
                    </div>
                  </div>
                )

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="hover:opacity-90 transition-opacity"
                      aria-label={`${item.label}: ${item.value}`}
                    >
                      {content}
                    </a>
                  )
                }
                return <div key={item.label}>{content}</div>
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254716439680"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all mt-2"
              aria-label="Chat with us on WhatsApp"
            >
              <FaWhatsapp className="text-2xl" aria-hidden="true" />
              Chat on WhatsApp: 0716439680
            </a>
          </motion.div>

          {/* ── Right: Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="glass-card rounded-3xl p-10 text-center flex flex-col items-center gap-4">
                <div className="text-5xl">✅</div>
                <h3 className="text-xl font-bold text-text-dark">Message Sent!</h3>
                <p className="text-text-gray">
                  Thank you for reaching out. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-semibold underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 flex flex-col gap-5"
                noValidate
                aria-label="Contact form"
              >
                <h3 className="text-xl font-bold text-text-dark mb-1">Send Us a Message</h3>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-sm font-semibold text-text-dark">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Kamau"
                    className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-phone" className="text-sm font-semibold text-text-dark">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 0712 345 678"
                    className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white transition-all"
                  />
                </div>

                {/* Service dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-service" className="text-sm font-semibold text-text-dark">
                    Service Needed
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white transition-all text-text-dark"
                  >
                    <option value="">Select a service…</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-sm font-semibold text-text-dark">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your vehicle or fleet needs…"
                    className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all mt-1"
                >
                  <FaPaperPlane aria-hidden="true" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
