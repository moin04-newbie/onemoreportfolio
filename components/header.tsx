"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "OUR WORK", href: "/work" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
    { name: "CAREERS", href: "/careers" },
  ]

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E8]/80 backdrop-blur-sm border-b border-black/5"
      >
        <div className="flex items-center justify-between px-8 py-6">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link href="/" className="block">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </Link>
          </motion.div>

          {/* Center Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            <span className="text-sm font-light tracking-wide">MOIN SAYYAD</span>
          </motion.div>

          {/* Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-sm font-light tracking-wide z-50 relative"
          >
            <div className="flex flex-col gap-1">
              <motion.div
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 6 : 0,
                  backgroundColor: isMenuOpen ? "#fff" : "#000",
                }}
                className="w-4 h-0.5 bg-black"
              />
              <motion.div
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                  backgroundColor: isMenuOpen ? "#fff" : "#000",
                }}
                className="w-4 h-0.5 bg-black"
              />
              <motion.div
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -6 : 0,
                  backgroundColor: isMenuOpen ? "#fff" : "#000",
                }}
                className="w-4 h-0.5 bg-black"
              />
            </div>
            <motion.span animate={{ color: isMenuOpen ? "#fff" : "#000" }}>MENU</motion.span>
          </motion.button>
        </div>
      </motion.header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl"
          >
            <div className="flex items-center justify-center min-h-screen">
              <nav className="text-center">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-8"
                  >
                    <Link
                      href={item.href}
                      className="text-4xl md:text-6xl font-light text-white hover:text-gray-300 transition-colors duration-300 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.span
                        whileHover={{ x: 20 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="block"
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
