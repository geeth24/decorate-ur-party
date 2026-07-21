import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GallerySection() {
  return <section id="gallery" className="section-space bg-[var(--ink)] text-[var(--paper)]">
    <div className="shell">
      <div className="flex flex-col items-start gap-7 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow mb-5 text-[var(--accent)]">Selected celebrations</p><h2 className="display text-5xl leading-none md:text-7xl">Rooms made memorable.</h2></div><Link href="/gallery" className="pressable inline-flex items-center gap-3 whitespace-nowrap border-b border-current pb-1 text-sm">Open full gallery <ArrowRight size={17} /></Link></div>
      <div className="mt-14 grid gap-4 md:grid-cols-[.78fr_1.22fr] md:items-end"><div className="relative min-h-[28rem] overflow-hidden"><Image src="/editorial/birthday-table.jpg" alt="Floral table styling for an intimate celebration" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" /></div><div className="relative min-h-[36rem] overflow-hidden"><Image src="/editorial/evening-reception.jpg" alt="Candlelit wedding reception with a floral ceremony backdrop" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" /></div></div>
    </div>
  </section>;
}
