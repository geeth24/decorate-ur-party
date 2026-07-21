import Hero from "@/components/hero"
import ServicesSection from "@/components/sections/services-section"
import EventsSection from "@/components/sections/events-section"
import GallerySection from "@/components/sections/gallery-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/sections/footer"
import { MotionExperience, Reveal } from "@/components/motion-experience"

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <MotionExperience />
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Reveal><ServicesSection /></Reveal>

        {/* Events Section */}
        <Reveal direction="right"><EventsSection /></Reveal>

        {/* Gallery Section */}
        <Reveal direction="left"><GallerySection /></Reveal>

        {/* Testimonials Section */}
        <Reveal><TestimonialsSection /></Reveal>

        {/* Contact Section */}
        <Reveal direction="right"><ContactSection /></Reveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
