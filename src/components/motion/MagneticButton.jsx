/**
 * MagneticButton — the element drifts slightly toward the cursor on hover,
 * giving CTAs a tactile, magnetic feel. Renders an <a> by default; pass
 * `as` to change the element. Transform-only; static under reduced motion.
 */
import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useReducedMotion from './useReducedMotion'

export default function MagneticButton({
  children,
  className = '',
  as = 'a',
  strength = 0.35,
  ...props
}) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 15 })
  const sy = useSpring(y, { stiffness: 250, damping: 15 })

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const MotionTag = motion[as] || motion.a

  if (reduced) {
    const Tag = as
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
