"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Services", "/#services", "Florals, tables and atmosphere"],
  ["Events", "/#events", "Weddings, birthdays and showers"],
  ["Gallery", "/#gallery", "A look through recent rooms"],
  ["Stories", "/#testimonials", "Notes from our clients"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Decorate Ur Party home">
          <Image src="/logo.png" alt="" width={34} height={34} className="h-8 w-8 rounded-full object-cover" />
          <span className="text-sm font-semibold tracking-[-.02em]">Decorate Ur Party</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={label} href={href} className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">{label}</Link>)}
          <Link href="/#contact" className="pressable whitespace-nowrap bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--paper)] hover:bg-[var(--accent)]">Plan your event</Link>
        </nav>
        <button className="relative z-50 grid h-10 w-10 place-items-center border border-[var(--line)] md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 top-16 z-40 overflow-hidden bg-[var(--ink)] text-[var(--paper)] md:hidden"
            initial={reduce ? false : { opacity: 0, transform: "translateY(-3%)" }}
            animate={{ opacity: 1, transform: "translateY(0%)" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(-2%)" }}
            transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.div className="absolute -right-24 top-16 h-72 w-72 bg-[var(--accent)] opacity-90" style={{ clipPath: "polygon(50% 0, 100% 32%, 82% 100%, 13% 83%, 0 24%)" }} animate={reduce ? undefined : { transform: ["rotate(0deg) scale(1)", "rotate(8deg) scale(1.05)", "rotate(0deg) scale(1)"] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
            <div className="relative flex min-h-[calc(100dvh-4rem)] flex-col px-5 pb-8 pt-10">
              <p className="eyebrow text-[var(--accent)]">Choose your next scene</p>
              <nav className="mt-8" aria-label="Mobile navigation">
                {links.map(([label, href, note], index) => (
                  <motion.div key={label} initial={reduce ? false : { opacity: 0, transform: "translateX(-18px)" }} animate={{ opacity: 1, transform: "translateX(0px)" }} transition={{ duration: 0.36, delay: index * 0.055, ease: [0.23, 1, 0.32, 1] }}>
                    <Link href={href} onClick={() => setOpen(false)} className="group grid grid-cols-[1fr_auto] items-center border-t border-white/20 py-4 last:border-b">
                      <span><span className="display block text-[clamp(2.5rem,13vw,4.7rem)] leading-none">{label}</span><span className="mt-1 block text-xs text-white/55">{note}</span></span><ArrowUpRight className="text-[var(--accent)]" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link href="/#contact" onClick={() => setOpen(false)} className="pressable mt-auto flex items-center justify-between bg-[var(--accent)] px-5 py-4 font-medium text-white" style={{ clipPath: "polygon(0 0, 96% 0, 100% 72%, 95% 100%, 0 100%)" }}>Plan your event <ArrowUpRight size={20} /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
