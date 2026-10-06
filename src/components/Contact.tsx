import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE } from '@/data/site';
import { EnquiryForm } from './EnquiryForm';
export function Contact() {
  const rows = [[Phone, 'Phone', SITE.phone], [Mail, 'Email', SITE.email], [MapPin, 'Office', SITE.location]] as const;
  return (<section id="contact" className="bg-stone py-24"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-8">
    <div><h2 className="font-serif text-4xl leading-tight md:text-6xl">Let’s Find the Right Property for You.</h2>
      <p className="mt-5 max-w-md opacity-75">Whether you are buying, selling, investing or need your property looked after, tell us what you need and we will take it from there.</p>
      <dl className="mt-10 divide-y divide-ink/15 border-y border-ink/15">{rows.map(([I, k, v]) => <div key={k} className="flex items-center gap-4 py-4"><I size={18} className="text-patina" /><dt className="w-16 text-sm opacity-60">{k}</dt><dd>{v}</dd></div>)}</dl></div>
    <div className="bg-paper p-6 shadow-sm md:p-10"><EnquiryForm /></div></div></section>);
}
