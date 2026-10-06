import type { Metadata } from 'next';
import { Newsreader, Instrument_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { SITE } from '@/data/site';
const serif = Newsreader({ subsets: ['latin'], variable: '--f-serif', display: 'swap' });
const sans = Instrument_Sans({ subsets: ['latin'], variable: '--f-sans', display: 'swap' });
const description = 'Kalycor Real Estate: support for buying, selling, investing in and managing residential and industrial property, with documentation and architecture & design assistance.';
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Kalycor Real Estate | Buy, Sell, Invest & Manage Property', template: '%s | Kalycor Real Estate' },
  description, openGraph: { title: 'Kalycor Real Estate', description, type: 'website', siteName: SITE.name, url: SITE.url },
};
export default function Root({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${serif.variable} ${sans.variable}`}><body>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:bg-white focus:p-3">Skip to content</a>
    <Header /><main id="main">{children}</main><Footer /><FloatingContact /></body></html>);
}
