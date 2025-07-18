"use client"

import { motion } from "framer-motion"

export default function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header with decorative element */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center justify-center">
              <span className="text-sm tracking-wider mr-8">THE</span>
              <div className="relative">
                <span className="text-4xl md:text-6xl font-light italic">Details</span>
                <div className="absolute -top-4 -right-4 w-16 h-16">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.path
                      d="M50,10 L90,50 L50,90 L10,50 Z"
                      stroke="black"
                      strokeWidth="1"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                    <motion.line
                      x1="50"
                      y1="10"
                      x2="50"
                      y2="90"
                      stroke="black"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 1 }}
                      viewport={{ once: true }}
                    />
                    {[...Array(8)].map((_, i) => (
                      <motion.line
                        key={i}
                        x1="50"
                        y1="50"
                        x2={50 + 30 * Math.cos((i * Math.PI) / 4)}
                        y2={50 + 30 * Math.sin((i * Math.PI) / 4)}
                        stroke="black"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 + i * 0.1 }}
                        viewport={{ once: true }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
              <span className="text-sm tracking-wider ml-8">CLUB</span>
            </div>
            <div className="flex items-center justify-between text-xs tracking-wider mt-4">
              <span>FINDS UP</span>
              <span>EST. 2025</span>
            </div>
          </motion.div>
        </div>

        {/* Main content */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light mb-8 flex items-center justify-center gap-8"
          >
            Your business has a story.
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="text-2xl"
            >
              ←→
            </motion.span>
            We design and build to tell it.
          </motion.h2>
        </div>

        {/* Two column text */}
        <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              Not just a pitch, not just a product...there's a reason you do what you do. It's the late nights, the wild
              ideas, the belief that this thing you're building actually matters. That's the story people will connect
              with. That's the story worth telling. It's the story we can craft for you.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              A great story deserves more than a place to live. A story needs a way to move. We design brands, craft
              interfaces, and build digital experiences that don't just inform but pull people in. Every detail, every
              interaction, every pixel works to make your story impossible to ignore.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
