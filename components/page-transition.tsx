"use client"

import { motion, AnimatePresence } from "framer-motion"

interface PageTransitionProps {
  isTransitioning: boolean
}

export default function PageTransition({ isTransitioning }: PageTransitionProps) {
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
