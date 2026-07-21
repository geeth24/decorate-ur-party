export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

const CURATED_IMAGE_NUMBERS = [
  121, 123, 136, 181, 190, 211,
  124, 126, 135, 137, 138, 145,
  151, 157, 163, 169, 175, 184,
  187, 192, 199, 205, 212, 217,
  223, 229, 241, 245, 251, 259,
  265, 271, 275, 279, 282, 283,
] as const;

export const generateGalleryImages = (): GalleryImage[] => CURATED_IMAGE_NUMBERS.map((imageNumber, index) => {
  const number = String(imageNumber).padStart(3, "0");
  return {
    id: `decor-${number}`,
    src: `/decors/decor-${number}.jpeg`,
    alt: `Selected event installation by Decorate Ur Party, portfolio image ${index + 1}`,
  };
});
