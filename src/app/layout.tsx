import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';

const pd = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' });
const m = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'Decorate Ur Party',
  description: 'Decorate Ur Party',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pd.variable} ${m.variable}`}>{children}</body>
    </html>
  );
}
