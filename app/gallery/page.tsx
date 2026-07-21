"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import GalleryModal from "@/components/gallery-modal";
import { generateGalleryImages } from "@/lib/gallery-data";
import Footer from "@/components/sections/footer";

const ALL_IMAGES = generateGalleryImages();
const BATCH_SIZE = 24;
const ratios = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]", "aspect-[4/5]", "aspect-[2/3]"];

export default function GalleryPage() {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const visibleImages = ALL_IMAGES.slice(0, visibleCount);

  return <div className="min-h-[100dvh] bg-[var(--paper)] pt-16">
    <main>
      <section className="shell grid min-h-[72dvh] items-end gap-10 py-12 md:grid-cols-[.75fr_1.25fr] md:py-16">
        <motion.div initial={reduce ? false : { opacity: 0, transform: "translateY(18px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} transition={{ duration: .65, ease: [0.23, 1, 0.32, 1] }}>
          <Link href="/#gallery" className="mb-12 inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)]"><ArrowLeft size={17} /> Back home</Link>
          <p className="eyebrow mb-5 text-[var(--accent)]">The celebration archive</p>
          <h1 className="display text-[clamp(4rem,9vw,8rem)] leading-[.82]">Made for the moment.</h1>
          <p className="mt-7 max-w-md leading-7 text-[var(--muted)]">Weddings, birthdays, showers and gatherings styled across New Jersey and New York.</p>
        </motion.div>
        <motion.div className="relative min-h-[48vh] overflow-hidden md:min-h-[62vh]" initial={reduce ? false : { opacity: 0, clipPath: "polygon(8% 0, 100% 0, 100% 92%, 0 100%, 0 8%)" }} animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0)" }} transition={{ duration: .9, delay: .1, ease: [0.23, 1, 0.32, 1] }}>
          <Image src="/decors/decor-013.jpeg" alt="Floral event styling by Decorate Ur Party" fill priority sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
        </motion.div>
      </section>

      <section className="border-t border-[var(--line)] py-16 md:py-24">
        <div className="shell">
          <div className="mb-12 flex items-end justify-between gap-6"><div><h2 className="display text-5xl leading-none md:text-7xl">Scenes from real celebrations.</h2><p className="mt-4 text-sm text-[var(--muted)]">Showing {visibleImages.length} of {ALL_IMAGES.length} photographs</p></div><span className="hidden text-sm text-[var(--muted)] md:block">Select any image to view it closely</span></div>
          <div className="columns-2 gap-3 md:columns-3 md:gap-5 lg:columns-4">
            {visibleImages.map((image, index) => <motion.button key={image.id} type="button" onClick={() => setModalIndex(index)} className={`group relative mb-3 block w-full break-inside-avoid overflow-hidden bg-[var(--surface)] md:mb-5 ${ratios[index % ratios.length]}`} initial={reduce ? false : { opacity: 0, transform: "translateY(18px)" }} whileInView={{ opacity: 1, transform: "translateY(0px)" }} viewport={{ once: true, amount: .08 }} transition={{ duration: .48, delay: (index % 4) * .035, ease: [0.23, 1, 0.32, 1] }} aria-label={`Open event photograph ${index + 1}`}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]" />
              <span className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between bg-[var(--ink)]/90 px-4 py-3 text-left text-xs text-white transition-transform duration-200 ease-out group-hover:translate-y-0"><span>View photograph</span><ArrowUpRight size={15} /></span>
            </motion.button>)}
          </div>
          {visibleCount < ALL_IMAGES.length && <div className="mt-14 flex justify-center"><button onClick={() => setVisibleCount((count) => Math.min(count + BATCH_SIZE, ALL_IMAGES.length))} className="pressable border border-[var(--ink)] px-7 py-3.5 text-sm font-medium hover:bg-[var(--ink)] hover:text-[var(--paper)]">Load more photographs</button></div>}
        </div>
      </section>

      <section className="bg-[var(--ink)] py-20 text-[var(--paper)] md:py-28"><div className="shell flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow mb-5 text-[var(--accent)]">Your event belongs here</p><h2 className="display max-w-3xl text-5xl leading-[.92] md:text-7xl">Let’s make a room people remember.</h2></div><Link href="/#contact" className="pressable inline-flex items-center gap-3 whitespace-nowrap bg-[var(--accent)] px-6 py-4 font-medium text-white">Plan your event <ArrowUpRight size={18} /></Link></div></section>
    </main>
    <Footer />
    <GalleryModal images={ALL_IMAGES} currentIndex={modalIndex ?? 0} isOpen={modalIndex !== null} onClose={() => setModalIndex(null)} onNavigate={setModalIndex} />
  </div>;
}
