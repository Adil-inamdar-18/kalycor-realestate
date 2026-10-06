import Link from 'next/link';
import { BUSINESSES, SITE } from '@/data/site';
const col = (t: string, items: string[][]) => (<div><p className="mb-4 text-paper">{t}</p><ul className="space-y-2.5 text-sm">{items.map(([l, h]) => <li key={l}><Link href={h} className="transition-colors hover:text-brass">{l}</Link></li>)}</ul></div>);
export function Footer() {
  return (<footer className="bg-ink text-paper/70">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr] lg:px-8">
      <div><p className="font-serif text-3xl text-paper">Kalycor Real Estate</p><p className="mt-4 max-w-xs text-sm leading-relaxed">Helping clients buy, sell, invest in and manage residential, commercial and industrial property across Maharashtra.</p></div>
      {col('Explore', [['Properties', '/properties'], ['Buy', '/buy-property'], ['Sell', '/sell-property'], ['Invest', '/property-investment'], ['About', '/about-us']])}
      {col('Services', [['Property Management', '/property-management'], ['Legal Documentation', '/legal-documentation'], ['Architecture & Design', '/architecture-design']])}
      <div><p className="mb-4 text-paper">Our Businesses</p><ul className="space-y-2.5 text-sm">{BUSINESSES.map((b) => <li key={b.name}><a href={b.href} className="transition-colors hover:text-brass">{b.name}</a></li>)}</ul></div>
      <div className="text-sm"><p className="mb-4 text-paper">Contact</p><p>{SITE.phone}</p><p className="mt-2">{SITE.email}</p><p className="mt-2">{SITE.location}</p><ul className="mt-5 flex gap-4">{SITE.social.map((s) => <li key={s.label}><a href={s.href} className="hover:text-brass">{s.label}</a></li>)}</ul></div></div>
    <div className="border-t border-paper/10 px-5 py-6 text-xs lg:px-8"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3"><p>© 2026 Kalycor. All rights reserved.</p>
      <p className="flex gap-5"><Link href="/privacy-policy" className="hover:text-brass">Privacy Policy</Link><Link href="/terms-and-conditions" className="hover:text-brass">Terms &amp; Conditions</Link></p></div></div></footer>);
}
