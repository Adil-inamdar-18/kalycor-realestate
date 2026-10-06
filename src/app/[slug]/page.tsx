import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { PAGES, getPage, SITE } from '@/data/site';
import { LISTINGS } from '@/data/listings';
import { Contact } from '@/components/Contact';
import { Process } from '@/components/Process';
import { Photo } from '@/components/Photo';
import { PropertyCard } from '@/components/PropertyCard';
import { EnquiryForm } from '@/components/EnquiryForm';
import { Reveal, ImageReveal } from '@/components/Reveal';
export const generateStaticParams = () => PAGES.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPage((await params).slug); if (!p) return {};
  return { title: p.title, description: p.lead, openGraph: { title: `${p.title} | Kalycor Real Estate`, description: p.lead }, alternates: { canonical: `/${p.slug}` } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPage((await params).slug); if (!p) notFound();
  const imgs = p.imgs ?? [p.img];
  return (<>
    <section className="relative isolate flex min-h-[52vh] items-end overflow-hidden text-paper md:min-h-[62vh]"><Photo k={p.img} alt={p.title} priority className="absolute inset-0 -z-10" /><div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="mx-auto w-full max-w-7xl px-5 pb-14 lg:px-8"><p className="mb-3 text-sm text-brass">{p.kicker}</p><h1 className="max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">{p.title}</h1><p className="mt-5 max-w-xl text-lg opacity-85">{p.lead}</p></div></section>

    {p.variant === 'process' && <><section className="bg-stone py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Process steps={p.steps!} /></div></section>
      <section className="mx-auto max-w-7xl space-y-20 px-5 py-24 lg:px-8">{p.items.map((it, i) => (<div key={it.t} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <ImageReveal><Photo k={imgs[i % imgs.length]} alt={it.t} className="aspect-[4/3]" sizes="(min-width:768px) 50vw, 100vw" /></ImageReveal><Reveal><h2 className="font-serif text-3xl md:text-5xl">{it.t}</h2><p className="mt-4 max-w-md opacity-70">{it.d}</p></Reveal></div>))}</section></>}

    {p.variant === 'services' && <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.3fr_1fr] lg:px-8"><div><ol className="divide-y divide-ink/15 border-y border-ink/15">{p.items.map((it, i) => <li key={it.t} className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr]"><span className="font-serif text-3xl text-brass">{String(i + 1).padStart(2, '0')}</span><div><h2 className="font-serif text-2xl md:text-3xl">{it.t}</h2><p className="mt-2 max-w-md opacity-70">{it.d}</p></div></li>)}</ol>
      {p.note && <p className="mt-6 border-l-2 border-brass pl-4 text-sm opacity-75">{p.note}</p>}</div>
      <div className="lg:sticky lg:top-28 lg:h-fit"><ImageReveal><Photo k={imgs[0] === p.img ? 'interior' : imgs[0]} alt={p.title} className="aspect-[4/5]" sizes="40vw" /></ImageReveal></div></section>}

    {p.variant === 'duo' && <section className="mx-auto max-w-7xl space-y-16 px-5 py-24 lg:px-8">{p.items.map((it, i) => (<div key={it.t}><ImageReveal><Photo k={imgs[i]} alt={it.t} className="aspect-[16/9] md:aspect-[21/9]" zoom /></ImageReveal>
      <div className="mt-5 border-b border-ink/15 pb-5"><h2 className="font-serif text-3xl md:text-5xl">{it.t}</h2><p className="mt-2 max-w-xl opacity-70">{it.d}</p></div></div>))}</section>}

    {p.variant === 'listings' && <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="flex items-end justify-between gap-4"><h2 className="font-serif text-4xl md:text-5xl">Available {p.type} Properties</h2><Link href={`/properties?type=${p.type}`} className="flex items-center gap-1 text-patina">All filters<ArrowUpRight size={16} /></Link></div>
      <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">{LISTINGS.filter((l) => l.type === p.type).map((l) => <li key={l.id}><PropertyCard p={l} /></li>)}</ul></section>}

    {p.variant === 'about' && <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><ol className="divide-y divide-ink/15 border-y border-ink/15">{p.items.map((it, i) => <li key={it.t} className="grid gap-4 py-10 md:grid-cols-[6rem_1fr_1.2fr]"><span className="font-serif text-5xl text-brass">{String(i + 1).padStart(2, '0')}</span><h2 className="font-serif text-3xl">{it.t}</h2><p className="opacity-70">{it.d}</p></li>)}</ol></section>}

    {p.variant === 'text' && <section className="mx-auto max-w-3xl px-5 py-20">{p.items.map((it) => <div key={it.t} className="mb-10"><h2 className="font-serif text-2xl">{it.t}</h2><p className="mt-2 opacity-75">{it.d}</p></div>)}</section>}

    {p.variant === 'contact' ? <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8"><div><h2 className="font-serif text-4xl md:text-5xl">Get in touch</h2><p className="mt-4 opacity-70">{SITE.phone}<br />{SITE.email}<br />{SITE.location}</p></div><EnquiryForm /></section>
      : p.variant !== 'text' && <Contact />}
  </>);
}
