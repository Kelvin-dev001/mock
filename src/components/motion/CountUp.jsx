/**
 * CountUp — animates a number from 0 to `value` when it scrolls into view.
 * Honours reduced-motion by rendering the final value immediately.
 */
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import useReducedMotion from './useReducedMotion'

export default function CountUp({
  value,
  duration = 1400,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setDisplay(value)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduced, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}
