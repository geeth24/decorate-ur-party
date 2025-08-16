"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GallerySection() {
  const containerVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.06 } } }
  const itemVariants = { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }
  return (
    <section id="gallery" className="relative bg-muted/60 py-16 md:py-24">
      <div className="bg-aurora-subtle" />
      <div className="container relative space-y-12">
        <motion.div className="text-center space-y-4" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <h2 className="section-title section-title-underline">Our Work</h2>
          <p className="section-subtitle">Browse through our portfolio of stunning event decorations</p>
        </motion.div>
        <motion.div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div key={i} className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-border image-shine" variants={itemVariants}>
              <Image src="/hero-bg.webp" alt={`Gallery image ${i + 1}`} fill className="object-cover transition-all group-hover:scale-105" />
              <div className="absolute inset-0 bg-background/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center backdrop-blur-sm animate-gradient-x" style={{backgroundImage: 'linear-gradient(120deg, transparent, hsl(var(--primary)/0.08), transparent)'}}>
                <Button variant="outline" className="border-border">View Details</Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center">
          <Button variant="outline" size="lg">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}
