import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Decoration Gallery",
  description: "Browse wedding, birthday, baby shower, balloon, floral and backdrop installations created by Decorate Ur Party across New Jersey and New York.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
