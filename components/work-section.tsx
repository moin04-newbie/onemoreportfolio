"use client"

import { motion } from "framer-motion"
import { useDevMode } from "./dev-mode-provider"

const featuredProjects = [
  {
    id: "white-lotus-portal",
    title: "White Lotus Portal",
    subtitle: "Portal for Hospital",
    tags: ["HEALTHCARE", "WEB DESIGN", "WEB DEVELOPMENT"],
    image: "/Hospital .png",
    year: "2024",
  },
  {
    id: "SupplySnap",
    title: "SupplySnap",
    subtitle: "B2B Ecosystem for Suppliers",
    tags: ["B2B", "ECOMMERCE", "DEVELOPMENT"],
     image: "/SupplySnap.png",
    year: "2024",
  },
  {
    id: "DevHub",
    title: "DevHub",
    subtitle: "Comprehensive Developer Platform & Community",
    tags: ["DEVELOPER", "NETWORK", "COMMUNITIES"],
    image: "/DevHub.png",
    color: "bg-gradient-to-br from-gray-600 to-gray-800",
    year: "2023",
  },
]

export default function WorkSection() {
  const { isDev } = useDevMode()
  if (isDev) {
    // Render a static, fast version in dev mode
    return (
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-light mb-4">
              My <em className="italic">featured</em> Work
            </h2>
            <p className="text-lg opacity-70 tracking-wide">
              GIVING STARTUPS THE UNFAIR ADVANTAGE
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => (window.location.href = `/work/${project.id}`)}
                className="group cursor-pointer bg-black rounded-2xl overflow-hidden mb-4 relative"
              >
                <div className={`aspect-[4/3] relative ${project.color}`}>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white text-xl font-light">{project.title}</h3>
                    <span className="text-white/60 text-sm">{project.year}</span>
                  </div>
                  {project.subtitle && <p className="text-white/70 text-sm mb-4">{project.subtitle}</p>}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 border border-white/30 rounded-full text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => (window.location.href = "/work")}
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-light hover:bg-gray-800 transition-colors duration-300"
            >
              VIEW ALL WORK →
            </button>
          </div>
        </div>
      </section>
    )
  }
  // ...existing code for prod...
  return (
    <section className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* ...existing animated content... */}
        {/* The rest of the original code remains unchanged for production */}
      </motion.div>
    </section>
  )
}
