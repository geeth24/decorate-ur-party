"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  ["Services", "/#services"], ["Events", "/#events"], ["Gallery", "/#gallery"], ["Stories", "/#testimonials"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[color:var(--paper)]/92 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Decorate Ur Party home">
          <Image src="/logo.png" alt="" width={34} height={34} className="h-8 w-8 rounded-full object-cover" />
          <span className="text-sm font-semibold tracking-[-.02em]">Decorate Ur Party</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={label} href={href} className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">{label}</Link>)}
          <Link href="/#contact" className="pressable whitespace-nowrap bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--paper)] hover:bg-[var(--accent)]">Plan your event</Link>
        </nav>
        <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-[var(--line)] bg-[var(--paper)] px-4 py-5 md:hidden" aria-label="Mobile navigation">
        <div className="flex flex-col gap-1">{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="px-3 py-3 text-lg">{label}</Link>)}<Link href="/#contact" onClick={() => setOpen(false)} className="mt-3 bg-[var(--ink)] px-4 py-3 text-center text-[var(--paper)]">Plan your event</Link></div>
      </nav>}
    </header>
  );
}
