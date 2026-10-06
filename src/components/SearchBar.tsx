'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
export function SearchBar() {
  const r = useRouter(); const [purpose, setP] = useState('Buy'); const [type, setT] = useState(''); const [q, setQ] = useState('');
  const f = 'w-full border-b border-ink/20 bg-transparent py-2 text-ink outline-none focus:border-patina';
  return (<form onSubmit={(e) => { e.preventDefault(); r.push(`/properties?purpose=${purpose === 'Buy' ? 'Sale' : 'Investment'}&type=${type}&q=${encodeURIComponent(q)}`); }} className="max-w-4xl bg-paper text-ink shadow-2xl">
    <div role="tablist" className="flex border-b border-ink/10">{['Buy', 'Invest'].map((t) => <button type="button" role="tab" aria-selected={purpose === t} key={t} onClick={() => setP(t)} className={`px-7 py-3 text-sm transition ${purpose === t ? 'bg-ink text-paper' : 'hover:bg-stone'}`}>{t}</button>)}
      <a href="/sell-property" className="px-7 py-3 text-sm hover:bg-stone">Sell</a></div>
    <div className="grid gap-5 p-5 md:grid-cols-[1.4fr_1fr_auto] md:items-end">
      <label className="text-xs opacity-80">Location<input value={q} onChange={(e) => setQ(e.target.value)} placeholder="City, area or project" className={f} /></label>
      <label className="text-xs opacity-80">Property type<select value={type} onChange={(e) => setT(e.target.value)} className={f}><option value="">All types</option><option>Residential</option><option>Commercial</option><option>Industrial</option></select></label>
      <button className="flex items-center justify-center gap-2 bg-patina px-8 py-3.5 text-white transition hover:bg-ink"><Search size={18} />Search</button></div></form>);
}
