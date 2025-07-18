"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const socialLinks = [
  { name: "LINKEDIN", href:"https://www.linkedin.com/in/moin-sayyad-9390aa2a9/"},
  { name: "INSTAGRAM", href: "https://www.instagram.com/moinnfr/?hl=en" },
  { name: "GITHUB", href: "https://github.com/moin04-newbie" },
]

const navItems = ["OUR WORK", "ABOUT US", "CONTACT US", "CAREERS"]

export default function Footer() {
  return (
    <footer className="bg-[#F5F1E8] pt-20 pb-8 relative overflow-hidden">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left - Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm font-light tracking-wide hover:opacity-60 transition-opacity block"
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="block"
                  >
                    {item}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg mb-4">Ready to build something with us?</p>
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = "/contact"
              }}
              className="text-4xl md:text-6xl font-light italic flex items-center gap-4 mx-auto cursor-pointer"
            >
              Let's Chat
              <motion.span animate={{ x: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 text-right"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={link.href} passHref legacyBehavior>
                  <a
                    className="text-xs font-light tracking-wider hover:opacity-60 transition-opacity block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.span
                      whileHover={{ x: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="block"
                    >
                      {link.name}
                    </motion.span>
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Large Reform Co Text */}
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[20vw] md:text-[15vw] font-bold leading-none tracking-tight text-black select-none"
        >
         MOIN's COLLECTION
        </motion.div>
      </div>

      {/* Bottom info */}
      <div className="flex justify-between items-center px-8 mt-8">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-xs"
        >
          EST. 2025
        </motion.span>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-xs"
        >
          WE LIVE IN THE DETAILS (©)
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center"
        >
          <span className="text-xs font-bold">©</span>
        </motion.div>
      </div>
    </footer>
  )
}
