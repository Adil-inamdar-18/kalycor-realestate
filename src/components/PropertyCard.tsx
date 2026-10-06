import Link from 'next/link';
import { ArrowUpRight, BedDouble, Bath, Maximize } from 'lucide-react';
import { Photo } from './Photo';
import type { Listing } from '@/data/listings';
export function PropertyCard({ p }: { p: Listing }) {
  return (<Link href={`/properties/${p.id}`} className="group block bg-white transition-shadow duration-500 hover:shadow-2xl">
    <div className="relative"><Photo k={p.image} alt={`${p.title} in ${p.city}`} className="aspect-[4/3]" sizes="(min-width:1024px) 33vw, 100vw" zoom />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/20 transition-opacity duration-500 group-hover:opacity-90" />
      <span className="absolute left-4 top-4 bg-paper px-3 py-1 text-xs text-ink">{p.type}</span>
      <span className="absolute right-4 top-4 bg-brass px-3 py-1 text-xs text-ink">{p.purpose === 'Sale' ? 'For Sale' : 'For Investment'}</span>
      <p className="absolute bottom-4 left-4 font-serif text-3xl text-paper">{p.price}</p>
      <span className="absolute bottom-4 right-4 grid h-10 w-10 translate-y-2 place-items-center bg-paper text-ink opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight size={18} /></span></div>
    <div className="border border-t-0 border-ink/10 p-5"><h3 className="font-serif text-2xl">{p.title} in {p.city}</h3><p className="mt-1 text-sm opacity-65">{p.location}</p>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 border-t border-ink/10 pt-4 text-sm">
        {p.beds && <li className="flex items-center gap-1.5"><BedDouble size={15} className="text-patina" />{p.beds} Beds</li>}{p.baths && <li className="flex items-center gap-1.5"><Bath size={15} className="text-patina" />{p.baths} Baths</li>}
        <li className="flex items-center gap-1.5"><Maximize size={15} className="text-patina" />{p.area.toLocaleString('en-IN')} sq ft</li></ul>
      <p className="mt-4 text-sm text-patina">View Property</p></div></Link>);
}
