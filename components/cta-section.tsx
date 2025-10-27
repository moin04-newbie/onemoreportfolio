"use client"

import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="py-20 bg-[#F5F1E8]">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 text-lg mb-8">
            <span>Ready to build something with us?</span>
            <motion.button
              whileHover={{ x: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = "/"
              }}
              className="flex items-center gap-2 text-4xl md:text-6xl font-light italic cursor-pointer"
            >
              Let's Build Something Together
              <motion.span animate={{ x: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
