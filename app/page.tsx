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
