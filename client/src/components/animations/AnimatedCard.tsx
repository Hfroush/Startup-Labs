import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hoverScale?: number
  hoverY?: number
}

export function AnimatedCard({ 
  children, 
  className = "",
  delay = 0,
  hoverScale = 1,
  hoverY = -4
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut" 
      }}
      whileHover={{ 
        scale: hoverScale,
        y: hoverY,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {children}
    </motion.div>
  )
}