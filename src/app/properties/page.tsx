import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Photo } from '@/components/Photo';
import { PropertyBrowser } from '@/components/PropertyBrowser';
export const metadata: Metadata = { title: 'Properties for Sale & Investment', description: 'Browse residential, commercial and industrial properties for sale and investment with Kalycor Real Estate.' };
export default function Properties() {
  return (<><section className="relative isolate overflow-hidden text-paper"><Photo k="skyline" alt="City skyline" priority className="absolute inset-0 -z-10" /><div className="absolute inset-0 -z-10 bg-ink/80" />
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><h1 className="font-serif text-5xl md:text-7xl">Properties</h1><p className="mt-4 max-w-xl text-lg opacity-85">Residential, commercial and industrial properties, chosen with care. Filter by location, type, price and area.</p></div></section>
    <Suspense><PropertyBrowser /></Suspense></>);
}
