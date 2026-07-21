"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="shell grid min-h-[100dvh] grid-cols-1 gap-8 pb-8 pt-24 md:grid-cols-[.86fr_1.14fr] md:items-center md:gap-12 md:pb-12 md:pt-20">
      <motion.div className="max-w-xl py-4 md:py-10" initial={reduce ? false : "hidden"} animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .07 } } }}>
        <motion.div variants={{ hidden: { opacity: 0, transform: "translateY(14px)" }, visible: { opacity: 1, transform: "translateY(0px)", transition: { duration: .6, ease: [0.23, 1, 0.32, 1] } } }}>
        <p className="eyebrow mb-6 text-[var(--accent)]">Event styling in New Jersey & New York</p>
        <h1 className="display text-balance text-[clamp(3.6rem,7vw,7.4rem)] leading-[.84]">Events, composed beautifully.</h1>
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, transform: "translateY(14px)" }, visible: { opacity: 1, transform: "translateY(0px)", transition: { duration: .6, ease: [0.23, 1, 0.32, 1] } } }}>
        <p className="mt-7 max-w-md text-base leading-7 text-[var(--muted)] md:text-lg">Florals, backdrops and tablescapes shaped around the way you want the room to feel.</p>
        <div className="mt-9 flex flex-wrap items-center gap-5">
          <Link href="/#contact" className="pressable inline-flex items-center gap-3 whitespace-nowrap bg-[var(--accent)] px-6 py-3.5 font-medium text-white hover:bg-[var(--accent-dark)]">Plan your event <ArrowDownRight size={18} /></Link>
          <Link href="/#gallery" className="border-b border-[var(--ink)] pb-1 text-sm font-medium">See the work</Link>
        </div>
        </motion.div>
      </motion.div>
      <motion.div className="relative min-h-[54vh] overflow-hidden md:min-h-[78vh]" initial={reduce ? false : { opacity: 0, clipPath: "polygon(8% 0, 100% 0, 100% 92%, 0 100%, 0 8%)", transform: "scale(.97) rotate(.4deg)" }} animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0)", transform: "scale(1) rotate(0deg)" }} transition={{ duration: 1, delay: .12, ease: [0.23, 1, 0.32, 1] }}>
        <Image src="/editorial/hero-installation.jpg" alt="Sculptural white and coral floral event installation" fill priority sizes="(max-width: 768px) 100vw, 58vw" className="object-cover object-[62%_center]" />
      </motion.div>
    </section>
  );
}
