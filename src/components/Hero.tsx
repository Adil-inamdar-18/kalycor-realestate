'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { City } from './Art';
import { SearchBar } from './SearchBar';
export function Hero() {
  const { scrollY } = useScroll(); const y1 = useTransform(scrollY, [0, 700], [0, 90]); const y2 = useTransform(scrollY, [0, 700], [0, 200]); const yt = useTransform(scrollY, [0, 700], [0, -60]);
  const words = 'Find the Right Space for Your Next Move.'.split(' ');
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-gradient-to-b from-[#1b3a45] via-[#0E1B24] to-[#0A1218] text-paper">
      <motion.div style={{ y: y1 }} className="absolute right-[12%] top-[14%] h-28 w-28 rounded-full bg-brass/90 blur-[1px]"><div className="floaty h-full w-full" /></motion.div>
      <motion.div style={{ y: y1 }} className="absolute inset-x-0 bottom-0 h-[62%] opacity-60"><City className="h-full w-full text-[#1c3540]" lit="#2E6B63" /></motion.div>
      <motion.div style={{ y: y2 }} className="absolute inset-x-0 -bottom-6 h-[48%]"><City className="h-full w-full text-[#0A1218]" /></motion.div>
      <motion.div style={{ y: yt }} className="relative mx-auto w-full max-w-7xl px-5 pb-24 lg:px-8">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-5 text-sm tracking-wide text-brass">Kalycor Real Estate</motion.p>
        <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl" aria-label="Find the Right Space for Your Next Move.">
          {words.map((w, i) => <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom"><motion.span className="inline-block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.25 + i * 0.09, ease: [0.2, 0.7, 0.2, 1] }}>{w}</motion.span></span>)}
        </h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.8 }} className="mt-10"><SearchBar /><p className="mt-4 text-sm opacity-80">Not sure yet? <Link href="/contact-us" className="underline">Talk to us</Link></p></motion.div>
      </motion.div>
    </section>);
}
