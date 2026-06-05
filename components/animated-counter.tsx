"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  const spring = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0 
  })
  
  const display = useTransform(spring, (current) => {
    if (value >= 1000000) {
      return `${prefix}${(current / 1000000).toFixed(current >= 1000000 ? 0 : 1)}M${suffix}`
    }
    if (value >= 1000) {
      return `${prefix}${(current / 1000).toFixed(current >= 1000 ? 0 : 1)}K${suffix}`
    }
    return `${prefix}${Math.floor(current)}${suffix}`
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value)
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated, spring, value])

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
    </motion.span>
  )
}
