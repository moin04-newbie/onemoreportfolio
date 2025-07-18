"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SocialLinks from "@/components/social-links"

const projects = [
  { title: "Brand Identity", client: "Tech Startup", year: "2024" },
  { title: "Web Design", client: "Fashion Brand", year: "2024" },
  { title: "Digital Campaign", client: "Luxury Hotel", year: "2023" },
  { title: "E-commerce Platform", client: "Retail Chain", year: "2023" },
]

export default function OurWork() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] text-black">
      <Header />
      <Navigation />
      <SocialLinks />

      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-light mb-16"
          >
            OUR WORK
          </motion.h1>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 20 }}
                className="border-b border-black/20 pb-8 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                    <p className="text-lg opacity-60">{project.client}</p>
                  </div>
                  <span className="text-lg opacity-60">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
