import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";

const geist = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://decorateurparty.com"),
  title: { default: "Decorate Ur Party | Event Styling in NJ & NY", template: "%s | Decorate Ur Party" },
  description: "Custom event decorations, florals, balloon styling, backdrops and tablescapes for weddings, birthdays and celebrations across New Jersey and New York.",
  applicationName: "Decorate Ur Party",
  authors: [{ name: "Decorate Ur Party" }],
  creator: "Decorate Ur Party",
  publisher: "Decorate Ur Party",
  category: "Event Planning",
  keywords: ["event decorator New Jersey", "event decorator New York", "wedding decorations NJ", "birthday party decorations", "baby shower decor", "balloon decorations NJ", "floral event styling", "custom event backdrops", "Annaprashan decoration", "New Jersey party planner"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: "Decorate Ur Party", title: "Decorate Ur Party | Event Styling in NJ & NY", description: "Custom florals, backdrops, balloons and tablescapes for celebrations across New Jersey and New York.", images: [{ url: "/editorial/hero-installation.jpg", width: 1536, height: 1024, alt: "Coral and white floral event installation by Decorate Ur Party" }] },
  twitter: { card: "summary_large_image", title: "Decorate Ur Party | Event Styling in NJ & NY", description: "Custom event styling for celebrations across New Jersey and New York.", images: ["/editorial/hero-installation.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f4f4f0" }, { media: "(prefers-color-scheme: dark)", color: "#171816" }] };

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  name: "Decorate Ur Party",
  description: "Custom event decoration and styling for weddings, birthdays, baby showers and private celebrations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://decorateurparty.com",
  telephone: "+1-732-491-1541",
  email: "info@decorateurparty.com",
  image: "https://decorateurparty.com/editorial/hero-installation.jpg",
  priceRange: "$$",
  areaServed: [{ "@type": "State", name: "New Jersey" }, { "@type": "State", name: "New York" }],
  serviceType: ["Event decoration", "Wedding decoration", "Birthday decoration", "Baby shower decoration", "Floral styling", "Balloon styling", "Custom backdrops", "Tablescapes"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.variable}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><Navbar />{children}<Analytics /></body></html>;
}
