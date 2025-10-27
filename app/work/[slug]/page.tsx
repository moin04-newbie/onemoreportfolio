"use client"

import Link from "next/link"

import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import Header from "@/components/header"
import CursorSpotlight from "@/components/cursor-spotlight"
import ScrollToTop from "@/components/scroll-to-top"
import Navigation from "@/components/navigation"
import SocialLinks from "@/components/social-links"

const projectData: Record<string, any> = {
  "white-lotus-portal": {
    title: "White Lotus Portal",
    subtitle: "Portal for Hospital",
    description:
      "Portal for Hospital",
    services: ["HEALTHCARE", "WEB DESIGN", "WEB DEVELOPMENT"],
    year: "2024",
    client: "Portal for Hospital",
    challenge:
      "The existing hospital website lacked clarity, accessibility, and mobile responsiveness. Patients found it hard to book appointments, access services, or locate departments. The brand identity didn't reflect the hospital's advanced medical capabilities and compassionate care.",
    solution:
      "We designed a clean, calming interface with a strong focus on accessibility (WCAG-compliant), streamlined appointment booking, and clear service categories. Our solution emphasized trust, warmth, and professionalism through color, typography, and UX flow.",
    results: [
      "📈 300% increase in online appointment booking",
      "🏥 Reduced walk-in congestion by 40% ",
      "👩‍⚕️ Positive feedback from over 2,000 patients and staff",
    ],
    images: ["/Hospital .png"],
    color: "from-orange-400 to-pink-500",
    textColor: "text-orange-900",
    url: "https://white-lotus-portal.vercel.app/",
  },
  "SupplySnap": {
    title: "SupplySnap",
    subtitle: "B2B Ecommerce Platform for Suppliers",
    description: "A comprehensive B2B ecommerce platform connecting suppliers with businesses, featuring advanced procurement tools, bulk ordering capabilities, and streamlined supply chain management.",
    services: ["B2B", "ECOMMERCE", "DEVELOPMENT"],
    year: "2024",
    client: "Supply Chain Solutions Inc.",
    challenge: "Traditional B2B procurement processes were inefficient, with complex ordering systems, lack of real-time inventory visibility, and fragmented supplier relationships. Businesses needed a unified platform to streamline their supply chain operations.",
    solution: "We developed a comprehensive B2B ecommerce platform with advanced procurement features, real-time inventory management, bulk ordering capabilities, and integrated supplier management tools. The platform includes automated workflows, custom pricing tiers, and comprehensive analytics.",
    results: ["40% reduction in procurement time", "60% increase in order accuracy", "200+ active suppliers onboarded", "85% customer satisfaction rate"],
    images: ["/SupplySnap.png"],
    color: "",
    textColor: "text-gray-900",
    url: "https://e-commerce-web-application-3pzu.vercel.app/",
  },
  "DevHub": {
    title: "DevHub",
    subtitle: "Comprehensive Developer Platform & Community",
    description: "An all-in-one developer platform featuring collaborative workspaces, knowledge repositories, global community networks, and AI-powered analytics. Built for students, developers, and tech enthusiasts to learn, collaborate, and grow together.",
    services: ["DEVELOPER", "NETWORK", "COMMUNITIES"],
    year: "2023",
    client: "Tech Education Foundation",
    challenge: "Developers and students needed a unified platform that combined learning resources, collaboration tools, and community features. Existing solutions were fragmented, making it difficult to manage projects, access knowledge, and connect with peers in one place.",
    solution: "We created a comprehensive platform with four core modules: Interactive Home with live stats and trending projects, Collaborative Workspaces with real-time editing and task management, Central Repository with AI-powered search and recommendations, Global Community with hackathons and competitions, and Analytics Dashboard with skill tracking and personalized learning paths.",
    results: ["50,000+ active developers", "200+ hackathons hosted", "95% user engagement rate", "40% faster project completion"],
    images: ["/DevHub.png"],
    color: "from-gray-600 to-gray-800",
    textColor: "text-gray-900",
    url: "",
  }, 
}

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectData[slug]

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project not found</h1>
          <Link href="/work" className="text-lg underline hover:no-underline">
            ← Back to Work
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <CursorSpotlight />
      <ScrollToTop />

      <div className="min-h-screen bg-[#F5F1E8] text-black">
        <Header />
        <Navigation />
        <SocialLinks />

        <main className="pt-32 pb-20">
          {/* Hero Section */}
          <section className="mb-20">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-5xl md:text-7xl font-light mb-4">{project.title}</h1>
                  <h2 className="text-2xl font-light mb-8 opacity-70">{project.subtitle}</h2>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.services.map((service: string) => (
                      <span key={service} className="text-xs px-3 py-1 border border-black/30 rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>

                  <p className="text-lg leading-relaxed mb-8">{project.description}</p>

                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white px-8 py-4 rounded-full text-lg font-light flex items-center gap-2"
                  >
                    VISIT {project.title}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </motion.div>

                {/* Right Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative"
                >
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${project.color || 'from-gray-100 to-gray-200'} rounded-2xl relative overflow-hidden flex items-center justify-center`}
                  >
                    {/* Project Image */}
                    {project.images && project.images.length > 0 ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-center text-gray-600">
                        <div className="text-6xl mb-4">🚀</div>
                        <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                        <p className="text-lg opacity-80">{project.subtitle}</p>
                      </div>
                    )}
                    
                    {/* Decorative elements */}
                    <div className="absolute top-8 right-8">
                      <svg width="60" height="60" viewBox="0 0 60 60" className="text-white/20">
                        <path d="M30 10L35 25L50 30L35 35L30 50L25 35L10 30L25 25Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="absolute bottom-8 left-8">
                      <svg width="40" height="40" viewBox="0 0 40 40" className="text-white/30">
                        <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                        <circle cx="20" cy="20" r="8" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Project Details */}
          <section className="mb-20">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid md:grid-cols-3 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-light mb-4">Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-light mb-4">Solution</h3>
                  <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-light mb-4">Results</h3>
                  <ul className="space-y-2">
                    {project.results.map((result: string, index: number) => (
                      <li key={index} className="text-gray-600 flex items-center gap-2">
                        <span className="w-1 h-1 bg-black rounded-full"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Project Info */}
          <section className="border-t border-black/10 pt-12">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-light opacity-60 mb-2">CLIENT</h4>
                  <p className="text-lg">{project.client}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-light opacity-60 mb-2">YEAR</h4>
                  <p className="text-lg">{project.year}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-light opacity-60 mb-2">SERVICES</h4>
                  <p className="text-lg">{project.services.length}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = "/work")}
                    className="text-lg underline hover:no-underline transition-all"
                  >
                    ← Back to Work
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
