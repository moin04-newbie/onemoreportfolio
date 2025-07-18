"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SocialLinks from "@/components/social-links"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] text-black overflow-hidden">
      <Header />
      <Navigation />
      <SocialLinks />

      <main className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[12vw] md:text-[8vw] font-light leading-none tracking-tight mb-8"
          >
            NOT FOUND
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-4 text-lg"
          >
            <span>Ready to build something with us?</span>
            <motion.button
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center gap-2 text-2xl font-light"
            >
              Let's Chat
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
