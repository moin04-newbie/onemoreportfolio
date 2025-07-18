"use client"

import { motion } from "framer-motion"

const navItems = ["OUR WORK", "ABOUT US", "CONTACT US", "CAREERS"]

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    ></motion.nav>
  )
}
