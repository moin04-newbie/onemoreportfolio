"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
import CursorSpotlight from "@/components/cursor-spotlight"
import ScrollToTop from "@/components/scroll-to-top"
import Navigation from "@/components/navigation"
import SocialLinks from "@/components/social-links"

const projects = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    client: "Tech Startup",
    year: "2024",
    services: ["BRANDING", "LOGO DESIGN", "VISUAL IDENTITY", "BRAND GUIDELINES"],
  },
  {
    id: "web-design",
    title: "Web Design",
    client: "Fashion Brand",
    year: "2024",
    services: ["WEB DESIGN", "UI/UX", "RESPONSIVE DESIGN", "DEVELOPMENT"],
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    client: "Retail Chain",
    year: "2023",
    services: ["E-COMMERCE", "WEB DEVELOPMENT", "UX DESIGN", "PAYMENT INTEGRATION"],
  },
  {
    id: "nervana",
    title: "NERVANA",
    client: "Health Tech",
    year: "2024",
    services: ["ART DIRECTION", "BRANDING", "WEB DESIGN", "WEB DEVELOPMENT"],
  },
  {
    id: "campfire",
    title: "CAMPFIRE",
    client: "Adventure Company",
    year: "2024",
    services: ["ART DIRECTION", "BRANDING", "WEB DESIGN", "DEVELOPMENT"],
  },
  {
    id: "runway",
    title: "RUNWAY",
    client: "Fashion Platform",
    year: "2023",
    services: ["ART DIRECTION", "BRANDING", "WEB DESIGN", "WEB DEVELOPMENT"],
  },
 
]

export default function WorkPage() {
  return (
    <>
      <CursorSpotlight />
      <ScrollToTop />

      <div className="min-h-screen bg-[#F5F1E8] text-black">
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
                  transition={{ duration: 1 }}
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
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link href={`/work/${project.id}`}>
                        <motion.div
                          whileHover={{ x: 20 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          className="border-b border-black/10 py-8 cursor-pointer group"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h2 className="text-3xl md:text-4xl font-light mb-2 group-hover:opacity-60 transition-opacity">
                                {project.title}
                              </h2>
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
