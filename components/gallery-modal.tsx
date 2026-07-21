"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery-data";

interface GalleryModalProps { images: GalleryImage[]; currentIndex: number; isOpen: boolean; onClose: () => void; onNavigate: (index: number) => void; }

export default function GalleryModal({ images, currentIndex, isOpen, onClose, onNavigate }: GalleryModalProps) {
  const reduce = useReducedMotion();
  const previous = () => onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  const next = () => onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  return <AnimatePresence>{isOpen && <motion.div role="dialog" aria-modal="true" aria-label="Event photograph viewer" className="fixed inset-0 z-[80] grid place-items-center bg-[#11120f]/96 p-4 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .2 }} onClick={onClose} onKeyDown={(event) => { if (event.key === "Escape") onClose(); if (event.key === "ArrowLeft") previous(); if (event.key === "ArrowRight") next(); }} tabIndex={-1}>
    <button onClick={onClose} className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center border border-white/25 hover:bg-white hover:text-[#11120f]" aria-label="Close photograph"><X /></button>
    <button onClick={(event) => { event.stopPropagation(); previous(); }} className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center bg-white text-[#11120f] md:left-6" aria-label="Previous photograph"><ChevronLeft /></button>
    <button onClick={(event) => { event.stopPropagation(); next(); }} className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center bg-white text-[#11120f] md:right-6" aria-label="Next photograph"><ChevronRight /></button>
    <motion.figure key={currentIndex} className="relative h-[82dvh] w-[88vw]" initial={reduce ? false : { opacity: 0, transform: "scale(.97)", filter: "blur(3px)" }} animate={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }} transition={{ duration: .28, ease: [0.23, 1, 0.32, 1] }} onClick={(event) => event.stopPropagation()}>
      <Image src={images[currentIndex]?.src ?? ""} alt={images[currentIndex]?.alt ?? "Event decoration"} fill priority sizes="90vw" className="object-contain" />
      <figcaption className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#11120f]/80 px-4 py-2 text-xs text-white/70">{currentIndex + 1} / {images.length}</figcaption>
    </motion.figure>
  </motion.div>}</AnimatePresence>;
}
