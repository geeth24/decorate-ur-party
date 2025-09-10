"use client"
import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { generateGalleryImages } from "@/lib/gallery-data"
import GalleryModal from "@/components/gallery-modal"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const IMAGES_PER_LOAD = 20

export default function GalleryPage() {
  const [loadedImages, setLoadedImages] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(IMAGES_PER_LOAD)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  
  const allImages = generateGalleryImages()

  // Load initial images
  useEffect(() => {
    setLoadedImages(allImages.slice(0, IMAGES_PER_LOAD))
  }, [])

  // Infinite scroll function
  const loadMoreImages = useCallback(() => {
    if (loading || !hasMore) return

    setLoading(true)
    
    setTimeout(() => {
      const nextImages = allImages.slice(currentIndex, currentIndex + IMAGES_PER_LOAD)
      
      if (nextImages.length === 0) {
        setHasMore(false)
      } else {
        setLoadedImages(prev => [...prev, ...nextImages])
        setCurrentIndex(prev => prev + IMAGES_PER_LOAD)
      }
      
      setLoading(false)
    }, 500) // Small delay to show loading state
  }, [currentIndex, loading, hasMore, allImages])

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
        loadMoreImages()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loadMoreImages])

  const handleImageClick = (index: number) => {
    setModalImageIndex(index)
    setModalOpen(true)
  }

  const handleModalNavigate = (index: number) => {
    setModalImageIndex(index)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b">
        <div className="container py-4">
          <div className="flex items-center gap-4">
            <Link href="/#gallery">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Our Gallery</h1>
              <p className="text-muted-foreground">
                Showing {loadedImages.length} of {allImages.length} images
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {loadedImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleImageClick(i)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                className="object-cover transition-all duration-300 group-hover:scale-105"
                loading="lazy"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center backdrop-blur-sm">
                <Button variant="outline" className="bg-white/90 text-black border-white/90 hover:bg-white">
                  View Full Size
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span className="text-muted-foreground">Loading more images...</span>
            </div>
          </div>
        )}

        {/* End Message */}
        {!hasMore && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">You've seen all our amazing decorations! 🎉</p>
            <Link href="/#contact">
              <Button className="mt-4">
                Ready to Plan Your Event?
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        images={loadedImages}
        currentIndex={modalImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNavigate={handleModalNavigate}
      />
    </div>
  )
}
