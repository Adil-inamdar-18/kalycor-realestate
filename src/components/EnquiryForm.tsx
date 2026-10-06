'use client';
import { useState } from 'react';
export function EnquiryForm({ property }: { property?: string }) {
  const [sent, setSent] = useState(false);
  const f = 'mt-1.5 w-full border border-ink/20 bg-white px-4 py-3 outline-none transition focus:border-patina';
  if (sent) return <div className="border border-patina/40 bg-white p-8"><p className="font-serif text-3xl">Thank you.</p><p className="mt-2 opacity-75">Your enquiry has been received. Our team will contact you shortly.</p></div>;
  // Connect onSubmit to your email/CRM endpoint (e.g. a Next.js route handler).
  return (<form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 text-sm">
    <label>Name<input required name="name" autoComplete="name" placeholder="Your full name" className={f} /></label>
    <div className="grid gap-4 sm:grid-cols-2"><label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className={f} /></label>
      <label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="+91" className={f} /></label></div>
    {!property && <label>I am interested in<select name="interest" className={f}><option>Buying</option><option>Selling</option><option>Investing</option><option>Property Management</option></select></label>}
    <label>Message<textarea name="message" rows={4} defaultValue={property ? `I am interested in ${property}. Please share more details.` : ''} placeholder="Tell us about your requirement" className={f} /></label>
    <button className="bg-ink px-6 py-4 text-paper transition hover:bg-patina">{property ? 'Request Property Details' : 'Send Enquiry'}</button></form>);
}
