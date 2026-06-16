/**
 * TiltCard — pointer-reactive 3D tilt wrapper.
 *
 * Tracks the cursor over the element and applies a subtle perspective tilt
 * (transform only — GPU friendly). Falls back to a plain div when the user
 * prefers reduced motion. Pass any className/props through to the surface.
 */
import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import useReducedMotion from './useReducedMotion'

export default function TiltCard({
  children,
  className = '',
  max = 8, // max tilt in degrees
  ...props
}) {
  const reduced = useReducedMotion()
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18 })
  const sy = useSpring(y, { stiffness: 200, damping: 18 })

  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max])

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  if (reduced) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: 'preserve-3d' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
