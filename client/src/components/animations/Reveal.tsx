'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

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