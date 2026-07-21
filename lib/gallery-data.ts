export interface GalleryImage {
  id: string
  src: string
  alt: string
}

// Cloudinary configuration
export const CLOUDINARY_CLOUD_NAME = "dfgs3dzes"
export const CLOUDINARY_FOLDER = "decors"

// Generate gallery data for all 284 images from Cloudinary
export const generateGalleryImages = (): GalleryImage[] => {
  const images: GalleryImage[] = []
  
  for (let i = 1; i <= 284; i++) {
    const paddedNumber = String(i).padStart(3, '0')
    images.push({
      id: `decor-${paddedNumber}`,
      src: `${CLOUDINARY_FOLDER}/decor-${paddedNumber}`,
      alt: `Event decoration ${i}`
    })
  }
  
  return images
}

export const IMAGES_PER_PAGE = 12
