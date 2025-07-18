"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import CursorSpotlight from "@/components/cursor-spotlight"
import ScrollToTop from "@/components/scroll-to-top"

export default function CareersPage() {
  return (
    <>
      <CursorSpotlight />
      <ScrollToTop />

      <div className="min-h-screen bg-[#F5F1E8] text-black">
        <Header />

        <main className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-8">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-8xl font-light mb-16"
            >
              Careers
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8 text-xl md:text-2xl font-light leading-relaxed"
            >
              <p>Join our team of creative minds and help shape the future of digital experiences.</p>
              <p>
                We're always looking for talented designers, developers, and strategists who share our passion for
                excellence.
              </p>
              <p>Ready to make an impact? Let's chat about opportunities.</p>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  )
}
