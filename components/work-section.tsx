"use client"

import { motion } from "framer-motion"

const featuredProjects = [
  {
    id: "nervana",
    title: "NERVANA",
    subtitle: "THE PAIN FREE ERA",
    tags: ["ART DIRECTION", "BRANDING", "WEB DESIGN", "WEB DEVELOPMENT"],
    color: "bg-gradient-to-br from-orange-400 to-pink-500",
    year: "2024",
  },
  {
    id: "campfire",
    title: "CAMPFIRE",
    subtitle: "OUTDOOR ADVENTURES",
    tags: ["ART DIRECTION", "BRANDING", "WEB DESIGN", "DEVELOPMENT"],
    color: "bg-gradient-to-br from-green-400 to-orange-500",
    year: "2024",
  },
  {
    id: "runway",
    title: "RUNWAY",
    subtitle: "FASHION FORWARD",
    tags: ["ART DIRECTION", "BRANDING", "WEB DESIGN", "WEB DEVELOPMENT"],
    color: "bg-gradient-to-br from-gray-600 to-gray-800",
    year: "2023",
  },
]

export default function WorkSection() {
  return (
    <section className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light mb-4"
          >
            Our <em className="italic">featured</em> Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg opacity-70 tracking-wide"
          >
            GIVING STARTUPS THE UNFAIR ADVANTAGE
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => (window.location.href = `/work/${project.id}`)}
              className="group cursor-pointer"
            >
              <div className="bg-black rounded-2xl overflow-hidden mb-4 relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`aspect-[4/3] ${project.color} relative`}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/20 flex items-center justify-center"
                  >
                    <motion.span initial={{ y: 20 }} whileHover={{ y: 0 }} className="text-white text-lg font-light">
                      View Project →
                    </motion.span>
                  </motion.div>
                </motion.div>

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
                        className="text-xs px-3 py-1 border border-white/30 rounded-full text-white/80 hover:bg-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Work Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/work")}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-light hover:bg-gray-800 transition-colors duration-300"
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="flex items-center gap-2"
            >
              VIEW ALL WORK →
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
