'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  duration?: number
  staggerChildren?: number
  className?: string
}

export function Reveal({ 
  children, 
  delay = 0, 
  y = 24, 
  duration = 0.6, 
  staggerChildren,
  className = ""
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  // Reduced motion fallback
  if (prefersReducedMotion) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: delay * 0.5 }}
      >
        {children}
      </motion.div>
    )
  }

  const containerVariants = staggerChildren ? {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay
      }
    }
  } : undefined

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration,
        ease: "easeOut",
        delay: staggerChildren ? 0 : delay
      }
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerChildren ? containerVariants : itemVariants}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ 
  children, 
  className = "",
  y = 24,
  duration = 0.6
}: { 
  children: ReactNode
  className?: string
  y?: number
  duration?: number
}) {
  const prefersReducedMotion = useReducedMotion()

  const itemVariants = prefersReducedMotion ? {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  } : {
    hidden: { 
      opacity: 0, 
      y 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  )
}