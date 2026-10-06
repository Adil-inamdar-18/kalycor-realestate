'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/data/site';
import { Photo } from './Photo';
export function ServiceList() {
  const [a, setA] = useState(-1);
  return (<section className="relative overflow-hidden bg-ink py-24 text-paper">
    <div className="absolute inset-0 hidden md:block" aria-hidden>{SERVICES.map((s, i) => <div key={s.slug} className={`absolute inset-0 transition-opacity duration-700 ${a === i ? 'opacity-100' : 'opacity-0'}`}><Photo k={s.img} alt="" className="h-full w-full" /><div className="absolute inset-0 bg-ink/80" /></div>)}</div>
    <div className="relative mx-auto max-w-7xl px-5 lg:px-8"><h2 className="font-serif text-4xl md:text-6xl">Complete Property Support</h2><p className="mt-4 max-w-lg opacity-70">Everything around a property, handled by one team.</p>
      <ul className="mt-12 border-t border-paper/20" onMouseLeave={() => setA(-1)}>{SERVICES.map((s, i) => (<li key={s.slug} className="border-b border-paper/20">
        <Link href={`/${s.slug}`} onMouseEnter={() => setA(i)} onFocus={() => setA(i)} className="group flex items-center gap-5 py-7 md:gap-10">
          <span className="w-8 font-serif text-lg text-brass md:w-12">{String(i + 1).padStart(2, '0')}</span>
          <span className="flex-1 font-serif text-3xl transition-transform duration-500 group-hover:translate-x-3 md:text-5xl">{s.title}</span>
          <span className="hidden max-w-xs text-sm opacity-70 lg:block">{s.d}</span><ArrowUpRight className="shrink-0 text-brass transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></li>))}</ul></div></section>);
}
