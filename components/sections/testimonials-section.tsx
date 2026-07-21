const quotes = [
  ["The room felt completely like us. Every flower, candle and color landed exactly where it should.", "Maya & Rohan", "Wedding clients"],
  ["They understood the mood immediately and made our home feel transformed without making it feel unfamiliar.", "Anika Shah", "Baby shower host"],
];

export default function TestimonialsSection() {
  return <section id="testimonials" className="section-space shell">
    <h2 className="display max-w-2xl text-5xl leading-none md:text-7xl">Kind words, after the confetti settles.</h2>
    <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-24">{quotes.map(([quote, name, role]) => <figure key={name} className="border-t border-[var(--ink)] pt-7"><blockquote className="display text-3xl leading-[1.16]">“{quote}”</blockquote><figcaption className="mt-8 text-sm"><strong className="font-medium">{name}</strong><span className="ml-3 text-[var(--muted)]">{role}</span></figcaption></figure>)}</div>
  </section>;
}
