export interface GalleryImage {
  id: string
  src: string
  alt: string
}

// Generate gallery data for all 284 images
export const generateGalleryImages = (): GalleryImage[] => {
  const images: GalleryImage[] = []
  
  for (let i = 1; i <= 284; i++) {
    const paddedNumber = String(i).padStart(3, '0')
    images.push({
      id: `decor-${paddedNumber}`,
      src: `/decors/decor-${paddedNumber}.jpeg`,
      alt: `Event decoration ${i}`
    })
  }
  
  return images
}

export const IMAGES_PER_PAGE = 12
