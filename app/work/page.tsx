"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import Header from "@/components/header"
import CursorSpotlight from "@/components/cursor-spotlight"
import ScrollToTop from "@/components/scroll-to-top"
import Navigation from "@/components/navigation"
import SocialLinks from "@/components/social-links"

const projects = [
  {
    id: "white-lotus-portal",
    title: "White Lotus Portal",
    client: "Portal for Hospital",
    year: "2024",
    services: ["HEALTHCARE", "WEB DESIGN", "WEB DEVELOPMENT"],
  },
  {
    id: "SupplySnap",
    title: "SupplySnap",
    client: "B2B Ecosystem for Suppliers",
    year: "2024",
    services: ["B2B", "ECOMMERCE", "DEVELOPMENT"],
  },
  {
    id: "DevHub",
    title: "DevHub",
    client: "Developer,Network and Communities",
    year: "2023",
    services: ["DEVELOPER", "NETWORK", "COMMUNITIES"],
  },
 
]

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smooth scroll-based transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <>
      <CursorSpotlight />
      <ScrollToTop />

      <div 
        ref={containerRef}
        className="min-h-screen bg-[#F5F1E8] text-black overflow-x-hidden smooth-scroll-container scroll-container"
        style={{ willChange: 'transform' }}
      >
        <Header />
        <Navigation />
        <SocialLinks />

        <main className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex">
              {/* Main Content */}
              <div className="flex-1 pr-16">
                {/* Header */}
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{ y: smoothY }}
                  className="text-8xl md:text-9xl font-light mb-16 leading-none"
                >
                  OUR WORK
                </motion.h1>

                {/* Projects List */}
                <div className="space-y-0">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="intersection-optimized"
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <Link href={`/work/${project.id}`}>
                        <motion.div
                          whileHover={{ 
                            x: 20,
                            transition: { 
                              type: "spring", 
                              stiffness: 300, 
                              damping: 20 
                            }
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="border-b border-black/10 py-8 cursor-pointer group optimized-transition gpu-accelerated"
                          style={{ willChange: 'transform' }}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <motion.h2 
                                className="text-3xl md:text-4xl font-light mb-2 group-hover:opacity-60 transition-opacity duration-300"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              >
                                {project.title}
                              </motion.h2>
                              <p className="text-lg opacity-60">{project.client}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-lg opacity-60">{project.year}</span>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
