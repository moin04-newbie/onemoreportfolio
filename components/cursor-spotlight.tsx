"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-96 h-96 pointer-events-none z-50 mix-blend-difference"
      style={{
        background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
        x: mousePosition.x - 192,
        y: mousePosition.y - 192,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}
