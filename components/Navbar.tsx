'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Heart, Menu, X, Plus, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Buy', href: '#featured' },
  { label: 'Rent', href: '#featured' },
  { label: 'Commercial', href: '#categories' },
  { label: 'New Projects', href: '#spotlight' },
  { label: 'Locations', href: '#locations' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium',
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.07)]'
            : 'bg-gradient-to-b from-black/25 to-transparent'
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8 lg:py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span
              className={cn(
                'font-serif text-xl font-bold tracking-tight transition-colors duration-500 lg:text-2xl',
                scrolled ? 'text-primary' : 'text-white'
              )}
            >
              KALYCOR
            </span>
            <span
              className={cn(
                'mt-0.5 text-[9px] font-medium tracking-[0.32em] transition-colors duration-500 lg:text-[10px]',
                scrolled ? 'text-muted-foreground' : 'text-white/65'
              )}
            >
              REAL ESTATE
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full',
                    scrolled
                      ? 'text-foreground hover:text-accent'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="#saved"
              className={cn(
                'flex items-center gap-1.5 text-sm font-medium transition-colors duration-300',
                scrolled
                  ? 'text-foreground hover:text-accent'
                  : 'text-white/90 hover:text-white'
              )}
            >
              <Heart className="h-4 w-4" />
              Saved
            </Link>
            <Link
              href="#signin"
              className={cn(
                'text-sm font-medium transition-colors duration-300',
                scrolled
                  ? 'text-foreground hover:text-accent'
                  : 'text-white/90 hover:text-white'
              )}
            >
              Sign In
            </Link>
            <button
              className={cn(
                'inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:shadow-md',
                scrolled
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'bg-white/95 text-primary hover:bg-white'
              )}
            >
              <Plus className="h-4 w-4" />
              List Property
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              'transition-colors lg:hidden',
              scrolled ? 'text-foreground' : 'text-white'
            )}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] lg:hidden',
          mobileOpen ? 'visible' : 'invisible'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300',
            mobileOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            'absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-400 ease-premium',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-bold text-primary">
                KALYCOR
              </span>
              <span className="mt-0.5 text-[9px] font-medium tracking-[0.32em] text-muted-foreground">
                REAL ESTATE
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-foreground"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <ul className="flex flex-col px-3 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-md px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 border-t border-border px-6 py-6">
            <Link
              href="#saved"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <Heart className="h-4 w-4" />
              Saved Properties
            </Link>
            <Link
              href="#signin"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-foreground"
            >
              Sign In
            </Link>
            <button className="mt-1 inline-flex items-center justify-center gap-1.5 bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              <Plus className="h-4 w-4" />
              List Property
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
