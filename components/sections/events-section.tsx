import Image from "next/image";

export default function EventsSection() {
  return <section id="events" className="section-space shell">
    <div className="max-w-2xl"><h2 className="display text-5xl leading-none md:text-7xl">Every gathering has its own rhythm.</h2><p className="mt-6 max-w-xl leading-7 text-[var(--muted)]">From a first birthday at home to a full wedding reception, we scale the design without losing the personal details.</p></div>
    <div className="mt-14 grid gap-4 md:grid-cols-[1.35fr_.65fr]">
      <figure className="image-zoom relative min-h-[34rem] overflow-hidden"><Image src="/editorial/shower-installation.jpg" alt="Airy baby shower backdrop with flowers and blue-grey fabric" fill sizes="(max-width: 768px) 100vw, 65vw" className="object-cover" /><figcaption className="absolute bottom-0 left-0 bg-[var(--paper)] px-5 py-4 text-sm">Baby showers and family ceremonies</figcaption></figure>
      <div className="grid gap-4"><figure className="image-zoom relative min-h-72 overflow-hidden"><Image src="/editorial/birthday-table.jpg" alt="Coral floral birthday tablescape in natural light" fill sizes="(max-width: 768px) 100vw, 35vw" className="object-cover" /></figure><div className="flex min-h-60 flex-col justify-end bg-[var(--surface)] p-7"><p className="display text-4xl leading-none">Birthdays, showers, weddings and intimate dinners.</p></div></div>
    </div>
  </section>;
}
