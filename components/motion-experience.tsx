"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function MotionExperience() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: .25 });

  if (reduce) return null;
  return <>
    <motion.div aria-hidden className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-[var(--accent)]" style={{ scaleX: progress }} />
    <motion.div aria-hidden className="pointer-events-none fixed -bottom-9 -right-9 z-40 hidden h-24 w-24 border border-[var(--accent)] md:block" style={{ clipPath: "polygon(50% 0, 100% 28%, 82% 100%, 10% 85%, 0 24%)" }} animate={{ transform: ["rotate(0deg)", "rotate(90deg)", "rotate(180deg)", "rotate(270deg)", "rotate(360deg)"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
  </>;
}

export function Reveal({ children, direction = "up" }: { children: React.ReactNode; direction?: "up" | "left" | "right" }) {
  const reduce = useReducedMotion();
  const offset = direction === "left" ? "translateX(-28px)" : direction === "right" ? "translateX(28px)" : "translateY(30px)";
  return <motion.div initial={reduce ? false : { opacity: 0, transform: offset, clipPath: "inset(0 0 8% 0)" }} whileInView={{ opacity: 1, transform: "translate(0px, 0px)", clipPath: "inset(0 0 0% 0)" }} viewport={{ once: true, amount: .12 }} transition={{ duration: .72, ease: [0.23, 1, 0.32, 1] }}>{children}</motion.div>;
}
