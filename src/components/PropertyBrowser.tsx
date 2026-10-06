'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal } from 'lucide-react';
import { LISTINGS, CITIES } from '@/data/listings';
import { PropertyCard } from './PropertyCard';
const price = { '': [0, 1e9], u1: [0, 1], b13: [1, 3], b35: [3, 5], o5: [5, 1e9] } as Record<string, number[]>;
const area = { '': [0, 1e9], s: [0, 1500], m: [1500, 5000], l: [5000, 1e9] } as Record<string, number[]>;
export function PropertyBrowser() {
  const sp = useSearchParams(); const [open, setOpen] = useState(false);
  const [f, setF] = useState({ q: sp.get('q') || '', city: '', type: sp.get('type') || '', purpose: sp.get('purpose') || '', price: '', area: '', sort: '' });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });
  const q = f.q.toLowerCase();
  const list = LISTINGS.filter((l) => (!f.type || l.type === f.type) && (!f.purpose || l.purpose === f.purpose) && (!f.city || l.city === f.city) && l.priceCr >= price[f.price][0] && l.priceCr < price[f.price][1] && l.area >= area[f.area][0] && l.area < area[f.area][1] && (!q || `${l.title} ${l.location} ${l.type}`.toLowerCase().includes(q)))
    .sort((a, b) => (f.sort === 'lo' ? a.priceCr - b.priceCr : f.sort === 'hi' ? b.priceCr - a.priceCr : f.sort === 'area' ? b.area - a.area : 0));
  const c = 'w-full border border-ink/20 bg-white px-3 py-2.5 text-sm outline-none focus:border-patina';
  return (<div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
    <div className="flex gap-3"><input value={f.q} onChange={set('q')} placeholder="Search by location or property" aria-label="Search properties" className={`${c} flex-1`} />
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 border border-ink px-4 text-sm lg:hidden" aria-expanded={open}><SlidersHorizontal size={16} />Filters</button></div>
    <div className={`${open ? 'grid' : 'hidden'} mt-4 gap-3 sm:grid-cols-2 lg:grid lg:grid-cols-6`}>
      <select aria-label="Location" value={f.city} onChange={set('city')} className={c}><option value="">All locations</option>{CITIES.map((x) => <option key={x}>{x}</option>)}</select>
      <select aria-label="Property type" value={f.type} onChange={set('type')} className={c}><option value="">All types</option><option>Residential</option><option>Commercial</option><option>Industrial</option></select>
      <select aria-label="Purpose" value={f.purpose} onChange={set('purpose')} className={c}><option value="">Sale &amp; investment</option><option value="Sale">For Sale</option><option value="Investment">For Investment</option></select>
      <select aria-label="Price" value={f.price} onChange={set('price')} className={c}><option value="">Any price</option><option value="u1">Under ₹1 Cr</option><option value="b13">₹1 – 3 Cr</option><option value="b35">₹3 – 5 Cr</option><option value="o5">₹5 Cr+</option></select>
      <select aria-label="Area" value={f.area} onChange={set('area')} className={c}><option value="">Any area</option><option value="s">Under 1,500 sq ft</option><option value="m">1,500 – 5,000 sq ft</option><option value="l">5,000+ sq ft</option></select>
      <select aria-label="Sort" value={f.sort} onChange={set('sort')} className={c}><option value="">Featured first</option><option value="lo">Price: low to high</option><option value="hi">Price: high to low</option><option value="area">Largest area</option></select></div>
    <p className="mt-8 text-sm opacity-65">{list.length} {list.length === 1 ? 'property' : 'properties'}</p>
    <ul className="mt-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">{list.map((p) => <li key={p.id}><PropertyCard p={p} /></li>)}</ul>
    {!list.length && <div className="py-24 text-center"><p className="font-serif text-3xl">No properties match your filters.</p><p className="mt-2 opacity-70">Try widening your search, or <a href="/contact-us" className="underline">tell us your requirement</a> and we will find options for you.</p></div>}</div>);
}
