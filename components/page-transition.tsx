"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useDevMode } from "./dev-mode-provider"

interface PageTransitionProps {
  isTransitioning: boolean
}

export default function PageTransition({ isTransitioning }: PageTransitionProps) {
  const { isDev } = useDevMode()
  
  // Skip animations in development mode
  if (isDev) return null
  
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 bg-red-600 z-50 origin-left"
        />
      )}
    </AnimatePresence>
  )
}
