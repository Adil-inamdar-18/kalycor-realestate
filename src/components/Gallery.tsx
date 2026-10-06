'use client';
import { useState } from 'react';
import { Photo } from './Photo';
import type { ImgKey } from '@/data/images';
export function Gallery({ keys, alt }: { keys: ImgKey[]; alt: string }) {
  const [i, setI] = useState(0);
  return (<div><Photo k={keys[i]} alt={alt} priority className="aspect-[16/10]" sizes="(min-width:1024px) 60vw, 100vw" />
    <div className="mt-3 grid grid-cols-3 gap-3">{keys.map((k, n) => <button key={k + n} onClick={() => setI(n)} aria-label={`Show photo ${n + 1}`} aria-pressed={i === n} className={`transition ${i === n ? 'ring-2 ring-brass' : 'opacity-70 hover:opacity-100'}`}><Photo k={k} alt="" className="aspect-[16/10]" sizes="20vw" /></button>)}</div></div>);
}
