import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kalycor Real Estate | Premium Homes, Apartments & Commercial Properties',
  description:
    "Discover exceptional homes, apartments, villas and commercial properties in locations that matter to you. Kalycor Real Estate — find a place you'll love to call home.",
  openGraph: {
    title: 'Kalycor Real Estate | Premium Homes, Apartments & Commercial Properties',
    description:
      'Discover exceptional homes, apartments, villas and commercial properties in locations that matter to you.',
    images: [
      {
        url: 'https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
