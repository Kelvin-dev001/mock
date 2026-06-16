/**
 * useReducedMotion — true when the user has requested reduced motion.
 * All 3D-feel effects degrade to static when this is true.
 */
import { useEffect, useState } from 'react'

export default function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return reduced
}
