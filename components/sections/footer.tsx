"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="overflow-hidden border-t border-[var(--line)] py-8">
      <div className="shell flex flex-col gap-7 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>Decorate Ur Party © {new Date().getFullYear()}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link href="tel:+17324911541" className="hover:text-[var(--ink)]">(732) 491-1541</Link>
          <Link href="mailto:info@decorateurparty.com" className="hover:text-[var(--ink)]">Email us</Link>
          <motion.a href="https://geeth.co" target="_blank" rel="noreferrer" className="inline-flex font-medium text-[var(--ink)]" whileTap={{ transform: "scale(.97)" }}>
            <motion.span
              className="bg-[linear-gradient(100deg,var(--ink)_0%,var(--ink)_38%,var(--accent)_49%,var(--paper)_50%,var(--accent)_51%,var(--ink)_62%,var(--ink)_100%)] bg-[length:260%_100%] bg-clip-text text-transparent"
              animate={reduce ? undefined : { backgroundPosition: ["120% 0%", "-120% 0%"] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.8, ease: [0.77, 0, 0.175, 1] }}
            >
              Built by Geeth
            </motion.span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
