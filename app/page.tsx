"use client"
import { useState } from "react"
import Header from "@/components/header"
import CursorSpotlight from "@/components/cursor-spotlight"
import HeroSection from "@/components/hero-section"
import WorkSection from "@/components/work-section"
import AwardsSection from "@/components/awards-section"
import StorySection from "@/components/story-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"
import ScrollToTop from "@/components/scroll-to-top"

export default function HomePage() {
  const [isTransitioning, setIsTransitioning] = useState(false)

  return (
    <>
      <CursorSpotlight />
      <PageTransition isTransitioning={isTransitioning} />
      <ScrollToTop />

      <div className="bg-[#F5F1E8] text-black overflow-hidden">
        <Header />

        <section className="py-12 px-4 bg-[#F5F1E8]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-6 text-black">Education Qualifications</h2>
            <ul className="space-y-2">
              <li>
                <span className="font-bold text-black">BBA(CA) in Computer </span>
                <span className="text-gray-600 block">Savitribai Phule Pune University, 2023</span>
              </li>
              {/* Add more education items as needed */}
            </ul>
          </div>
        </section>

        <main>
          <HeroSection />
          <WorkSection />
          <AwardsSection />
          <StorySection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  )
}
