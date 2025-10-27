"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SocialLinks from "@/components/social-links"

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] text-black">
      <Header />
      <Navigation />
      <SocialLinks />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-light mb-16"
          >
            CONNECT WITH ME
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl font-light mb-8">Get in Touch</h2>
              <div className="space-y-4 text-lg">
                <p>moinsayyad529@gmail.com</p>
                <p>+91 7249592867</p>
                <p>Pune, Maharashtra, India</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center gap-4 text-3xl font-light"
              >
                Let's Connect
                <motion.span animate={{ x: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
