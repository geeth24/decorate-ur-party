"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { generateGalleryImages, IMAGES_PER_PAGE } from "@/lib/gallery-data"
import GalleryModal from "@/components/gallery-modal"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function GallerySection() {
  const [currentPage, setCurrentPage] = useState(1)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  
  const allImages = generateGalleryImages()
  
  const totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE)
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE
  const displayedImages = allImages.slice(startIndex, startIndex + IMAGES_PER_PAGE)
  
  const handleImageClick = (index: number) => {
    setModalImageIndex(startIndex + index)
    setModalOpen(true)
  }
  
  const handleModalNavigate = (index: number) => {
    setModalImageIndex(index)
  }

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
        
        <div className="flex justify-center">
          <div className="text-sm text-muted-foreground">
            Showing {displayedImages.length} of {allImages.length} images
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedImages.map((image, i) => (
            <div 
              key={`${image.id}-page-${currentPage}`} 
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300" 
              onClick={() => handleImageClick(i)}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-all duration-300 group-hover:scale-105" 
                priority={currentPage === 1}
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center backdrop-blur-sm">
                <Button variant="outline" className="bg-white/90 text-black border-white/90 hover:bg-white">View Full Size</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link href="/gallery">
            <Button size="lg" className="gap-2">
              View All {allImages.length} Photos
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      
      <GalleryModal
        images={allImages}
        currentIndex={modalImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNavigate={handleModalNavigate}
      />
    </section>
  )
}
