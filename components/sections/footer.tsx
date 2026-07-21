import Link from "next/link";

export default function Footer() {
  return <footer className="border-t border-[var(--line)] py-8"><div className="shell flex flex-col gap-5 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between"><p>Decorate Ur Party © {new Date().getFullYear()}</p><div className="flex gap-6"><Link href="tel:+17324911541" className="hover:text-[var(--ink)]">(732) 491-1541</Link><Link href="mailto:info@decorateurparty.com" className="hover:text-[var(--ink)]">Email us</Link><Link href="https://geeth.co" className="hover:text-[var(--ink)]">Site by Geeth</Link></div></div></footer>;
}
