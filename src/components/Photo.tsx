'use client';
import Image from 'next/image';
import { useState } from 'react';
import { IMG, type ImgKey } from '@/data/images';
export function Photo({ k, alt, className = '', priority = false, sizes = '100vw', zoom = false }: { k: ImgKey; alt: string; className?: string; priority?: boolean; sizes?: string; zoom?: boolean }) {
  const [bad, setBad] = useState(false);
  return (<div className={`relative overflow-hidden bg-[#13232d] ${className}`}>
    {bad ? <div className="grid-lines absolute inset-0 flex items-end p-3 text-[11px] text-white/40">Add photo: public/images/{k}.jpg</div>
      : <Image src={IMG[k]} alt={alt} fill priority={priority} sizes={sizes} onError={() => setBad(true)} className={`object-cover ${zoom ? 'transition-transform duration-[1400ms] ease-out group-hover:scale-105' : ''}`} />}
  </div>);
}
