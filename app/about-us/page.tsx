"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SocialLinks from "@/components/social-links"

export default function AboutUs() {
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
            ABOUT US
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 text-xl md:text-2xl font-light leading-relaxed"
          >
            <p>
              We are Reform Collective, a creative digital agency dedicated to crafting exceptional digital experiences
              that inspire, engage, and drive results.
            </p>
            <p>
              Our team of passionate designers, developers, and strategists work collaboratively to bring your vision to
              life through innovative design and cutting-edge technology.
            </p>
            <p>
              From brand identity to web design, from digital campaigns to e-commerce platforms, we approach every
              project with creativity, precision, and a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
