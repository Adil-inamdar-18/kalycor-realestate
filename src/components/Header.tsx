'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { BUSINESSES, SITE } from '@/data/site';
const links = [['Properties', '/properties'], ['Buy', '/buy-property'], ['Sell', '/sell-property'], ['Invest', '/property-investment'], ['About', '/about-us'], ['Services', '/property-management'], ['Contact', '/contact-us']];
export function Header() {
  const [open, setOpen] = useState(false); const [biz, setBiz] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="hidden bg-ink py-1.5 text-xs text-paper/75 md:block"><div className="mx-auto flex max-w-7xl justify-between px-5 lg:px-8"><span>{SITE.phone} · {SITE.email}</span>
        <div className="relative" onMouseLeave={() => setBiz(false)}><button aria-expanded={biz} onMouseEnter={() => setBiz(true)} onClick={() => setBiz(!biz)} className="flex items-center gap-1">Our Businesses <ChevronDown size={12} /></button>
          {biz && <ul className="absolute right-0 top-full z-10 w-56 border border-ink/10 bg-paper p-2 text-sm text-ink shadow-xl">{BUSINESSES.map((b) => <li key={b.name}><a href={b.href} className="block px-3 py-2 hover:bg-stone">{b.name}</a></li>)}</ul>}</div></div></div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="font-serif text-xl tracking-tight">Kalycor <span className="text-patina">Real Estate</span></Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm lg:flex">{links.map(([l, h]) => <Link key={l} href={h} className="transition-colors hover:text-patina">{l}</Link>)}
          <Link href="/contact-us" className="bg-ink px-5 py-2.5 text-paper transition hover:bg-patina">Talk to Us</Link></nav>
        <button className="lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
      <div className={`fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-ink text-paper transition-transform duration-500 lg:hidden ${open ? 'translate-y-0' : '-translate-y-[120%]'}`} aria-hidden={!open}>
        <ul className="space-y-1 p-6 font-serif text-3xl">{links.map(([l, h]) => <li key={l}><Link onClick={() => setOpen(false)} href={h} className="block py-2">{l}</Link></li>)}</ul>
        <Link onClick={() => setOpen(false)} href="/contact-us" className="mx-6 block bg-brass py-4 text-center text-ink">Talk to Us</Link>
        <ul className="mt-8 border-t border-paper/20 p-6 text-sm">{BUSINESSES.map((b) => <li key={b.name}><a href={b.href} className="block py-2 opacity-80">{b.name}</a></li>)}</ul></div>
    </header>);
}
