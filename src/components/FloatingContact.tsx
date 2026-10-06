import { Phone } from 'lucide-react';
import { SITE } from '@/data/site';
export function FloatingContact() { return <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} aria-label="Call us" className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center bg-ink text-white shadow-lg transition hover:bg-patina"><Phone size={20} /></a>; }
