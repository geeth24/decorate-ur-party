export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export const generateGalleryImages = (): GalleryImage[] => Array.from({ length: 284 }, (_, index) => {
  const number = String(index + 1).padStart(3, "0");
  return {
    id: `decor-${number}`,
    src: `/decors/decor-${number}.jpeg`,
    alt: `Event decoration by Decorate Ur Party, photograph ${index + 1}`,
  };
});
