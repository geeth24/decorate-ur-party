import { ArrowUpRight } from "lucide-react";

const services = [
  ["Floral direction", "Seasonal arrangements, statement installations and personal flowers."],
  ["Backdrops & forms", "Custom compositions built for ceremonies, portraits and focal moments."],
  ["Tables & atmosphere", "Layered linens, candles, centerpieces and details that hold the room together."],
  ["Balloon styling", "Sculptural arrangements with considered color, scale and placement."],
];

export default function ServicesSection() {
  return <section id="services" className="section-space border-y border-[var(--line)]">
    <div className="shell grid gap-14 md:grid-cols-[.8fr_1.2fr] md:gap-20">
      <div><p className="eyebrow mb-5 text-[var(--accent)]">What we create</p><h2 className="display max-w-md text-5xl leading-[.95] md:text-7xl">A complete visual language for your celebration.</h2></div>
      <div className="grid content-start sm:grid-cols-2">
        {services.map(([title, body], i) => <article key={title} className={`min-h-56 border-[var(--line)] p-6 ${i % 2 ? "sm:border-l" : ""} ${i > 1 ? "border-t" : i === 1 ? "border-t sm:border-t-0" : ""}`}>
          <div className="flex items-start justify-between"><span className="text-sm text-[var(--muted)]">0{i + 1}</span><ArrowUpRight size={18} /></div><h3 className="mt-14 text-xl font-medium">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[var(--muted)]">{body}</p>
        </article>)}
      </div>
    </div>
  </section>;
}
