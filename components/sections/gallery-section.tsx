import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-muted py-16 md:py-24">
      <div className="container space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-playfair text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Work</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Browse through our portfolio of stunning event decorations
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/hero-bg.webp"
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                <Button variant="outline" className="text-white border-white">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
