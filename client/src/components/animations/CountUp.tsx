import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface CountUpProps {
  to: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
  className?: string
  preserveAspectRatio?: boolean
}

export default function CountUp({ 
  to, 
  duration = 1200, 
  delay = 0,
  suffix = "",
  prefix = "",
  className = "",
  preserveAspectRatio = false
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const startTimeRef = useRef<number>()
  const animationIdRef = useRef<number>()
  const prefersReducedMotion = useReducedMotion()

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp + delay
    }
    
    if (timestamp < startTimeRef.current) {
      animationIdRef.current = requestAnimationFrame(animate)
      return
    }

    const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
    
    // Use easeOut cubic for smooth animation
    const easedProgress = 1 - Math.pow(1 - progress, 3)
    const currentValue = Math.round(to * easedProgress)
    
    setCount(currentValue)
    
    if (progress < 1) {
      animationIdRef.current = requestAnimationFrame(animate)
    }
  }

  const startAnimation = () => {
    if (hasAnimated) return
    setHasAnimated(true)
    
    // For reduced motion, show final value immediately
    if (prefersReducedMotion) {
      setCount(to)
      return
    }
    
    animationIdRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [])

  // Format number with commas for large numbers
  const formatNumber = (num: number) => {
    if (preserveAspectRatio) {
      return num.toString()
    }
    return num.toLocaleString()
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={startAnimation}
      transition={{ duration: 0.3, delay: prefersReducedMotion ? delay * 0.5 : delay }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  )
}