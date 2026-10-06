import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { Contact } from '@/components/Contact';
import { Process } from '@/components/Process';
import { Photo } from '@/components/Photo';
import { PropertyCard } from '@/components/PropertyCard';
import { ServiceList } from '@/components/ServiceList';
import { Reveal, ImageReveal } from '@/components/Reveal';
import { LISTINGS } from '@/data/listings';
import { BUY_STEPS } from '@/data/site';
import type { ImgKey } from '@/data/images';
const eyebrow = 'mb-3 text-sm tracking-wide text-patina';
const intents: { l: string; d: string; h: string; img: ImgKey }[] = [
  { l: 'Buy a Property', d: 'Homes and spaces matched to your requirement.', h: '/buy-property', img: 'interior' },
  { l: 'Sell Your Property', d: 'Presentation, buyers and paperwork, handled.', h: '/sell-property', img: 'home' },
  { l: 'Invest in Property', d: 'Residential, commercial and industrial options.', h: '/property-investment', img: 'skyline' },
  { l: 'Manage Your Property', d: 'Professional care for what you own.', h: '/property-management', img: 'commercial' },
];
const cats: { l: string; d: string; img: ImgKey; type: string }[] = [
  { l: 'Residential', d: 'Homes, apartments, villas and lifestyle properties.', img: 'apartment', type: 'Residential' },
  { l: 'Commercial', d: 'Office spaces, retail and business properties.', img: 'office', type: 'Commercial' },
  { l: 'Industrial', d: 'Warehouses, industrial facilities and land.', img: 'factory', type: 'Industrial' },
];
const why = [
  { t: 'Local Market Understanding', d: 'We know the neighbourhoods, corridors and pricing patterns we work in, so advice is grounded in the place, not a template.' },
  { t: 'End-to-End Property Support', d: 'Search, evaluation, documentation, transaction and ongoing management, with one team you can call.' },
  { t: 'Transparent Process', d: 'You see the steps, the paperwork and the trade-offs before you commit to anything.' },
  { t: 'Client-Focused Approach', d: 'We start with what you need, then recommend. Never the other way round.' },
];
const stats = [['10+', 'Property services'], ['3', 'Core property categories'], ['End-to-End', 'Property assistance'], ['Client First', 'Approach']];
export default function Home() {
  return (<>
    <Hero />
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6"><Reveal className="max-w-2xl"><p className={eyebrow}>Featured Properties</p><h2 className="font-serif text-4xl md:text-6xl">Properties Worth Exploring</h2>
        <p className="mt-4 opacity-70">Kalycor helps clients discover residential, commercial and investment properties, shortlisted with care.</p></Reveal>
        <Link href="/properties" className="border-b border-ink pb-1 transition hover:border-patina hover:text-patina">View all properties</Link></div>
      <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">{LISTINGS.slice(0, 3).map((p, n) => <li key={p.id}><Reveal delay={n * 0.1}><PropertyCard p={p} /></Reveal></li>)}</ul></section>
    <section className="bg-ink pb-24 pt-20 text-paper"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal><h2 className="max-w-2xl font-serif text-4xl md:text-6xl">Find What Fits Your Next Move</h2></Reveal>
      <ul className="mt-12 grid gap-px bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">{intents.map((i) => (<li key={i.h}><Link href={i.h} className="group relative block min-h-[26rem] overflow-hidden bg-ink">
        <Photo k={i.img} alt={i.l} className="absolute inset-0" sizes="(min-width:1024px) 25vw, 50vw" zoom /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30 transition-opacity duration-500 group-hover:from-ink/90" />
        <div className="absolute inset-x-0 bottom-0 p-7"><h3 className="font-serif text-3xl leading-tight md:text-4xl">{i.l}</h3><p className="mt-2 text-sm opacity-0 transition-all duration-500 group-hover:opacity-80 max-lg:opacity-80">{i.d}</p>
          <span className="mt-5 grid h-11 w-11 place-items-center border border-paper/40 transition-all duration-500 group-hover:border-brass group-hover:bg-brass group-hover:text-ink"><ArrowUpRight size={18} /></span></div></Link></li>))}</ul></div></section>
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><Reveal><p className={eyebrow}>Property Types</p><h2 className="font-serif text-4xl md:text-6xl">Explore Properties</h2></Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:grid-rows-2">{cats.map((c, i) => (<Link key={c.type} href={`/properties?type=${c.type}`} className={`group relative block overflow-hidden ${i === 0 ? 'min-h-[28rem] lg:row-span-2' : 'min-h-[16rem]'}`}>
        <ImageReveal className="absolute inset-0"><Photo k={c.img} alt={`${c.l} properties`} className="h-full w-full" sizes="(min-width:1024px) 50vw, 100vw" zoom /></ImageReveal>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" /><div className="absolute bottom-0 flex w-full items-end justify-between p-7 text-paper"><div><h3 className="font-serif text-4xl md:text-5xl">{c.l}</h3><p className="mt-2 max-w-xs text-sm opacity-80">{c.d}</p></div>
          <span className="flex items-center gap-2 border-b border-paper/60 pb-1 text-sm transition-all group-hover:gap-4 group-hover:border-brass group-hover:text-brass">Explore<ArrowUpRight size={16} /></span></div></Link>))}</div></section>
    <section className="bg-stone py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Reveal><p className={eyebrow}>Buying Process</p><h2 className="max-w-2xl font-serif text-4xl md:text-6xl">A Clearer Way to Find Your Property</h2></Reveal><div className="mt-16"><Process steps={BUY_STEPS} /></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><Reveal><p className={eyebrow}>Architecture &amp; Design</p><h2 className="font-serif text-4xl md:text-6xl">Designed for How Spaces Are Used</h2></Reveal>
      <div className="mt-12 space-y-14">{([['Residential Design', 'Modern homes and interiors planned around light, flow and everyday living.', 'architecture'], ['Industrial & Commercial Design', 'Offices, retail and industrial buildings planned for function and presence.', 'commercial']] as const).map(([t, d, k]) => (
        <div key={t}><ImageReveal><Photo k={k} alt={t} className="aspect-[16/9] md:aspect-[21/9]" zoom /></ImageReveal>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-b border-ink/15 pb-5"><div><h3 className="font-serif text-3xl md:text-4xl">{t}</h3><p className="mt-1 max-w-lg text-sm opacity-70">{d}</p></div><Link href="/architecture-design" className="flex items-center gap-2 text-patina">Learn more<ArrowUpRight size={16} /></Link></div></div>))}</div></section>
    <ServiceList />
    <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[1fr_1.4fr] lg:px-8"><Reveal><div className="lg:sticky lg:top-28"><p className={eyebrow}>Why Kalycor</p><h2 className="font-serif text-4xl md:text-6xl">Why Choose Kalycor</h2><p className="mt-5 max-w-sm opacity-70">Property decisions are significant. We aim to make each one clearer.</p></div></Reveal>
      <ol className="divide-y divide-ink/15 border-y border-ink/15">{why.map((w, i) => <li key={w.t} className="grid gap-4 py-8 sm:grid-cols-[5rem_1fr]"><span className="font-serif text-5xl text-brass">{String(i + 1).padStart(2, '0')}</span><div><h3 className="font-serif text-2xl md:text-3xl">{w.t}</h3><p className="mt-2 max-w-lg opacity-70">{w.d}</p></div></li>)}</ol></section>
    <section className="bg-ink text-paper"><dl className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">{stats.map(([v, l]) => <div key={l} className="border-l border-paper/15 px-6 py-12 first:border-0 max-lg:odd:border-0 lg:px-8"><dt className="font-serif text-4xl md:text-5xl">{v}</dt><dd className="mt-2 text-sm opacity-65">{l}</dd></div>)}</dl></section>
    <section className="relative isolate overflow-hidden text-paper"><Photo k="estate" alt="Premium residential exterior" className="absolute inset-0 -z-10" /><div className="absolute inset-0 -z-10 bg-ink/75" />
      <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-40"><Reveal><h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-7xl">Thinking About Selling Your Property?</h2><p className="mt-6 max-w-xl text-lg opacity-85">Tell us about your property and our team will help you understand the next step.</p>
        <div className="mt-10 flex flex-wrap gap-4"><Link href="/sell-property" className="bg-brass px-8 py-4 font-medium text-ink transition hover:bg-paper">List Your Property</Link><Link href="/contact-us" className="border border-paper/50 px-8 py-4 transition hover:bg-paper hover:text-ink">Talk to Our Team</Link></div></Reveal></div></section>
    <Contact />
  </>);
}
