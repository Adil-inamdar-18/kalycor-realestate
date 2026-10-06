import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Phone } from 'lucide-react';
import { LISTINGS } from '@/data/listings';
import { SITE } from '@/data/site';
import { Gallery } from '@/components/Gallery';
import { EnquiryForm } from '@/components/EnquiryForm';
import { PropertyCard } from '@/components/PropertyCard';
export const generateStaticParams = () => LISTINGS.map((l) => ({ id: l.id }));
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> { const { id } = await params; const l = LISTINGS.find((x) => x.id === id); return l ? { title: `${l.title} in ${l.city}`, description: l.summary } : {}; }
export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const l = LISTINGS.find((x) => x.id === id); if (!l) notFound();
  const facts = [l.beds && ['Bedrooms', String(l.beds)], l.baths && ['Bathrooms', String(l.baths)], ['Area', `${l.area.toLocaleString('en-IN')} sq ft`], l.parking && ['Parking', `${l.parking} spaces`], ['Type', l.type]].filter(Boolean) as string[][];
  const more = LISTINGS.filter((x) => x.id !== l.id).sort((a, b) => Number(b.type === l.type) - Number(a.type === l.type)).slice(0, 3);
  return (<div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
    <nav aria-label="Breadcrumb" className="mb-6 text-sm opacity-65"><Link href="/properties" className="hover:text-patina">Properties</Link> / {l.title}</nav>
    <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr]"><div>
      <Gallery keys={l.gallery} alt={`${l.title} in ${l.city}`} />
      <div className="mt-10 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm text-patina">{l.type} · {l.purpose === 'Sale' ? 'For Sale' : 'For Investment'}</p><h1 className="mt-1 font-serif text-4xl md:text-6xl">{l.title} in {l.city}</h1><p className="mt-2 flex items-center gap-1 opacity-70"><MapPin size={16} />{l.location}</p></div><p className="font-serif text-4xl text-patina md:text-5xl">{l.price}</p></div>
      <dl className="mt-8 grid grid-cols-2 border border-ink/15 sm:grid-cols-3 lg:grid-cols-5">{facts.map(([k, v]) => <div key={k} className="border-b border-r border-ink/15 p-5"><dt className="text-xs opacity-60">{k}</dt><dd className="mt-1 font-serif text-2xl">{v}</dd></div>)}</dl>
      <h2 className="mt-12 font-serif text-3xl">About this property</h2><p className="mt-3 max-w-2xl leading-relaxed opacity-75">{l.summary}</p>
      <h2 className="mt-12 font-serif text-3xl">Highlights</h2><ul className="mt-4 grid gap-x-8 sm:grid-cols-2">{l.highlights.map((h) => <li key={h} className="border-b border-ink/10 py-3">{h}</li>)}</ul>
      <h2 className="mt-12 font-serif text-3xl">Location</h2><p className="mt-2 opacity-70">{l.location}</p>
      <iframe title={`Map of ${l.location}`} loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(l.location)}&output=embed`} className="mt-4 h-72 w-full border-0" /></div>
    <aside className="h-fit border border-ink/15 bg-white p-6 lg:sticky lg:top-28"><h2 className="font-serif text-3xl">Interested in this property?</h2><p className="mb-5 mt-1 text-sm opacity-65">Share your details and we will send the full information.</p><EnquiryForm property={`${l.title} in ${l.city}`} />
      <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="mt-4 flex items-center justify-center gap-2 border border-ink/20 py-3 text-sm hover:bg-stone"><Phone size={15} />{SITE.phone}</a></aside></div>
    <h2 className="mt-20 font-serif text-4xl">Similar properties</h2><ul className="mt-8 grid gap-8 md:grid-cols-3">{more.map((p) => <li key={p.id}><PropertyCard p={p} /></li>)}</ul></div>);
}
