import type { Metadata } from "next";
import localFont from "next/font/local";
import { Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";

const geist = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-geist", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Decorate Ur Party | Event Styling in NJ & NY", template: "%s | Decorate Ur Party" },
  description: "Thoughtful event styling, florals, backdrops and tablescapes for celebrations across New Jersey and New York.",
  alternates: { canonical: "/" },
  openGraph: { title: "Decorate Ur Party", description: "Events, composed beautifully.", images: ["/editorial/hero-installation.jpg"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${newsreader.variable}`}><Navbar />{children}<Analytics /></body></html>;
}
