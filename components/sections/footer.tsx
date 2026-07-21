"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const reduce = useReducedMotion();
  return <footer className="overflow-hidden border-t border-[var(--line)] py-8"><div className="shell flex flex-col gap-7 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between"><p>Decorate Ur Party © {new Date().getFullYear()}</p><div className="flex flex-wrap items-center gap-x-6 gap-y-4"><Link href="tel:+17324911541" className="hover:text-[var(--ink)]">(732) 491-1541</Link><Link href="mailto:info@decorateurparty.com" className="hover:text-[var(--ink)]">Email us</Link><motion.a href="https://geeth.co" target="_blank" rel="noreferrer" className="group relative isolate inline-flex items-center gap-2 overflow-hidden bg-[var(--ink)] px-4 py-2.5 font-semibold text-[var(--paper)]" whileHover={reduce ? undefined : { transform: "translateY(-2px) rotate(-1deg)" }} whileTap={{ transform: "scale(.97)" }} transition={{ type: "spring", duration: .4, bounce: .18 }}>
          <motion.span aria-hidden className="absolute -inset-16 -z-10 bg-[conic-gradient(from_90deg,transparent_0_35%,var(--accent)_45%,transparent_55%_100%)] opacity-80" animate={reduce ? undefined : { transform: "rotate(360deg)" }} transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }} />
          <Sparkles size={15} className="text-[var(--accent)]" /><span>Built by <span className="underline decoration-[var(--accent)] decoration-2 underline-offset-4">Geeth</span></span>
        </motion.a></div></div></footer>;
}
