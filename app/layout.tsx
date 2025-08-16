import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next"

const pd = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' });
const m = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Decorate Ur Party',
    template: '%s | Decorate Ur Party',
  },
  description:
    'Event decoration services for birthdays, weddings, baby showers, corporate events and more. Elegant themes, balloon décor, backdrops, lights and complete party styling.',
  keywords: [
    'event decorations',
    'party decorations',
    'balloon decorations',
    'wedding decor',
    'birthday decor',
    'baby shower decor',
    'corporate event decor',
    'backdrops',
    'stage decoration',
    'party styling',
  ],
  applicationName: 'Decorate Ur Party',
  authors: [{ name: 'Decorate Ur Party' }],
  creator: 'Decorate Ur Party',
  publisher: 'Decorate Ur Party',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Decorate Ur Party',
    title: 'Decorate Ur Party',
    description:
      'Event decoration services for birthdays, weddings, baby showers, corporate events and more.',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Decorate Ur Party - Event Decorations',
      },
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Decorate Ur Party Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decorate Ur Party',
    description:
      'Event decoration services for birthdays, weddings, baby showers, corporate events and more.',
    images: ['/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Event Planning',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pd.variable} ${m.variable} antialiased`}
      >
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
