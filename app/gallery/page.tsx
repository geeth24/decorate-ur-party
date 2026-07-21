"use client"
import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "motion/react"
import { CldImage } from "next-cloudinary"
import { Button } from "@/components/ui/button"
import { generateGalleryImages, type GalleryImage } from "@/lib/gallery-data"
import GalleryModal from "@/components/gallery-modal"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const IMAGES_PER_LOAD = 20
const ALL_IMAGES = generateGalleryImages()

export default function GalleryPage() {
  const [loadedImages, setLoadedImages] = useState<GalleryImage[]>(() => ALL_IMAGES.slice(0, IMAGES_PER_LOAD))
  const [currentIndex, setCurrentIndex] = useState(IMAGES_PER_LOAD)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const loadMoreRef = useRef<HTMLDivElement>(null)
  
  const allImages = ALL_IMAGES

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

  useEffect(() => {
    const target = loadMoreRef.current
    if (!target) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) loadMoreImages()
    }, { rootMargin: "800px 0px" })
    observer.observe(target)
    return () => observer.disconnect()
  }, [loadMoreImages])

  const handleImageClick = (index: number) => {
    setModalImageIndex(index)
    setModalOpen(true)
  }

  const handleModalNavigate = (index: number) => {
    setModalImageIndex(index)
  }

  return (
    <div className="min-h-[100dvh] bg-[var(--paper)] pt-16">
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
              initial={{ opacity: 0, transform: "scale(.94) rotate(.3deg)" }}
              animate={{ opacity: 1, transform: "scale(1) rotate(0deg)" }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
              onClick={() => handleImageClick(i)}
            >
              <CldImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                crop="fill"
                gravity="auto"
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
        <div ref={loadMoreRef} className="h-px" aria-hidden />
        {loading && <div className="grid grid-cols-2 gap-4 py-8 md:grid-cols-5" aria-label="Loading more event photos">{Array.from({ length: 5 }).map((_, index) => <motion.div key={index} className="aspect-square bg-[var(--surface)]" animate={{ opacity: [.45, .8, .45] }} transition={{ duration: 1.2, delay: index * .08, repeat: Infinity, ease: "easeInOut" }} />)}</div>}

        {/* End Message */}
        {!hasMore && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">You&apos;ve seen all our event decorations.</p>
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
