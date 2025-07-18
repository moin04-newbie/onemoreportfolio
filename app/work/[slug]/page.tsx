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
  "brand-identity": {
    title: "Hospital Website Redesign",
    subtitle: "MODERN HEALTHCARE EXPERIENCE",
    description:
      "CREATING A BOLD, INNOVATIVE BRAND IDENTITY FOR A CUTTING-EDGE TECH STARTUP THAT DISRUPTS THE TRADITIONAL INDUSTRY LANDSCAPE.",
    services: ["WEB DESIGN","UX/UI DESIGN","HEALTHCARE","RESPONSIVE DESIGN"],
    year: "2024",
    client: "Tech Startup",
    challenge:
      "The existing hospital website lacked clarity, accessibility, and mobile responsiveness. Patients found it hard to book appointments, access services, or locate departments. The brand identity didn’t reflect the hospital’s advanced medical capabilities and compassionate care.",
    solution:
      "We designed a clean, calming interface with a strong focus on accessibility (WCAG-compliant), streamlined appointment booking, and clear service categories. Our solution emphasized trust, warmth, and professionalism through color, typography, and UX flow.",
    results: [
      "📈 300% increase in online appointment booking",
      "🏥 Reduced walk-in congestion by 40% ",
      "👩‍⚕️ Positive feedback from over 2,000 patients and staff",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=500&width=700",
    ],
    color: "from-blue-500 to-purple-600",
    textColor: "text-blue-900",
    url: "https://white-lotus-portal.vercel.app/",
  },
  "web-design": {
    title: "Web Design",
    subtitle: "Cooking Website Platform",
    description:
      "CRAFTING A VISUALLY DELICIOUS RECIPE WEBSITE FOR FOOD ENTHUSIASTS TO DISCOVER, COOK, AND SHARE RECIPES ACROSS CULTURES AND CUISINES.",
    services: ["WEB DESIGN", "UI/UX", "RESPONSIVE DESIGN", "DEVELOPMENT"],
    year: "2024",
    client: "Fashion Brand",
    challenge:
      "Foodies loved the brand, but the original platform didn’t match the energy of the recipes it shared. The UI was cluttered, loading was slow, and the UX didn’t encourage browsing or saving recipes. The lack of community features made users feel disconnected.",
    solution:
      "We served up a modern, clean, and bold UI with mouth-watering imagery, dark/light toggle for night cooks, and smooth filtering based on diet, region, and difficulty.",
    results: [
      "300% increase in online sales",
      "180% improvement in user engagement",
      "Award-winning design recognition",
    ],
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=400&width=600"],
    color: "from-pink-400 to-rose-500",
    textColor: "text-pink-900",
    url: "https://hearth-whisk-alchemy.vercel.app/",
  },
  "ecommerce-platform": {
    title: "E-commerce Platform",
    subtitle: "STREETWEAR & URBAN FASHION STORE",
    description:
      "BUILT A FUNCTIONAL AND MINIMALIST ECOMMERCE PLATFORM FROM SCRATCH FOR A MODERN STREETWEAR BRAND THAT CATERS TO GEN Z SHOPPERS.",
    services: ["E-COMMERCE", "WEB DEVELOPMENT", "UX DESIGN", "PAYMENT INTEGRATION"],
    year: "2023",
    client: "Retail Chain",
    challenge:
      "We had to design and build a complete e-commerce experience from scratch, with limited resources. The platform had to be mobile-first, visually sleek, and equipped with core commerce features — all without relying on third-party platforms like Shopify or WooCommerce.",
    solution:
      "We architected a login-based shopping system using PHP and MySQL, focused on speed and clarity.",
    results: ["600% increase in online revenue", "150% improvement in conversion rate", "99.9% uptime reliability"],
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=400&width=600"],
    color: "from-green-500 to-teal-500",
    textColor: "text-green-900",
    url: "https://ethicallifeworld.com/",
  },
  nervana: {
    title: "NERVANA",
    subtitle: "THE PAIN FREE ERA",
    description:
      "FEEL BETTER IN MINUTES WITH NERVANA'S ALL-NATURAL PAIN RELIEF PATCHES. EFFECTIVE, REUSABLE, AND POWERED BY YOUR BODY'S OWN ENERGY.",
    services: ["ART DIRECTION", "BRANDING", "WEB DESIGN", "WEB DEVELOPMENT"],
    year: "2024",
    client: "Health Tech",
    challenge:
      "The existing hospital website lacked clarity, accessibility, and mobile responsiveness. Patients found it hard to book appointments, access services, or locate departments. The brand identity didn’t reflect the hospital’s advanced medical capabilities and compassionate care.",
    solution:
      "We designed a clean, calming interface with a strong focus on accessibility (WCAG-compliant), streamlined appointment booking, and clear service categories. Our solution emphasized trust, warmth, and professionalism through color, typography, and UX flow.",
    results: [
      "📈 300% increase in online appointment booking",
      "🏥 Reduced walk-in congestion by 40% ",
      "👩‍⚕️ Positive feedback from over 2,000 patients and staff",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=500&width=700",
    ],
    color: "from-orange-400 to-pink-500",
    textColor: "text-orange-900",
    url: "https://white-lotus-portal.vercel.app/",
  },
  campfire: {
    title: "CAMPFIRE",
    subtitle: "OUTDOOR ADVENTURES",
    description: "CONNECTING PEOPLE WITH NATURE THROUGH CURATED OUTDOOR EXPERIENCES AND SUSTAINABLE ADVENTURE GEAR.",
    services: ["ART DIRECTION", "BRANDING", "WEB DESIGN", "DEVELOPMENT"],
    year: "2024",
    client: "Adventure Company",
    challenge: "Build a brand that captures the spirit of adventure while promoting environmental responsibility.",
    solution:
      "Created an earthy, authentic brand identity with interactive digital experiences that inspire outdoor exploration.",
    results: ["200% increase in bookings", "85% customer retention rate", "Featured in outdoor magazines"],
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=400&width=600"],
    color: "from-green-400 to-orange-500",
    textColor: "text-green-900",
    url: "https://webyulelog.com/log/campfire?r=0",
  },
  runway: {
    title: "RUNWAY",
    subtitle: "FASHION FORWARD",
    description: "NEXT-GENERATION FASHION MARKETPLACE CONNECTING EMERGING DESIGNERS WITH FASHION-FORWARD CONSUMERS.",
    services: ["ART DIRECTION", "BRANDING", "WEB DESIGN", "WEB DEVELOPMENT"],
    year: "2023",
    client: "Fashion Platform",
    challenge:
      "Create a platform that elevates emerging fashion designers while providing an exceptional shopping experience.",
    solution:
      "We designed a sophisticated marketplace with editorial-quality presentation and seamless user experience.",
    results: ["500+ designer partnerships", "300% growth in user base", "Industry recognition awards"],
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=400&width=600"],
    color: "from-gray-600 to-gray-800",
    textColor: "text-gray-900",
    url: "https://www.salonheleenhulsmann.nl/",
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
                    className={`aspect-[4/3] bg-gradient-to-br ${project.color} rounded-2xl relative overflow-hidden flex items-center justify-center`}
                  >
                    {/* Spline 3D Model */}
                    <iframe
                      src="https://my.spline.design/nexbotrobotcharacterconcept-H5q1HQWiqwlgHnJh9FY791Tp/"
                      frameBorder="0"
                      width="100%"
                      height="100%"
                      allow="autoplay; fullscreen"
                      style={{ border: 'none', width: '100%', height: '100%' }}
                      title="3D Spline Model"
                    ></iframe>
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
