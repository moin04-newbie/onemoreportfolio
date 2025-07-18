"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const socialLinks = [
  { name: "LINKEDIN", href: "https://www.linkedin.com/in/moin-sayyad-9390aa2a9/" },
  { name: "INSTAGRAM", href: "https://www.instagram.com/moinnfr/?hl=en" },
  { name: "GITHUB", href: "https://github.com/moin04-newbie" },
]

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      
    </motion.div>
  )
}
