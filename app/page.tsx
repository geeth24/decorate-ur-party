import Hero from "@/components/hero"
import ServicesSection from "@/components/sections/services-section"
import EventsSection from "@/components/sections/events-section"
import GallerySection from "@/components/sections/gallery-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <ServicesSection />

        {/* Events Section */}
        <EventsSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

