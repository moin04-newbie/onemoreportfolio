"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const heroWords = ["We", "do", "many", "things", "very", "well."]

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % heroWords.length)
    }, 800)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="text-center max-w-6xl mx-auto px-8">
        <div className="text-[8vw] md:text-[6vw] font-light leading-tight mb-12">
          {heroWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: index <= currentWordIndex ? 1 : 0.3,
                y: index <= currentWordIndex ? 0 : 100,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = "/work"
            }}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-light tracking-wide hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="flex items-center gap-2"
            >
              SEE ALL WORK →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
