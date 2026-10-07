'use client';

import { useState } from 'react';
import {
  Heart,
  BedDouble,
  Bath,
  Maximize,
  ArrowRight,
  BadgeCheck,
  MapPin,
} from 'lucide-react';
import type { Property } from '@/lib/properties';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'large';
}

export default function PropertyCard({
  property,
  variant = 'default',
}: PropertyCardProps) {
  const [liked, setLiked] = useState(false);

  const badges: { label: string; className: string }[] = [];
  badges.push({
    label: property.status,
    className:
      property.status === 'FOR SALE'
        ? 'bg-primary text-primary-foreground'
        : property.status === 'FOR RENT'
          ? 'bg-accent text-white'
          : 'bg-foreground text-white',
  });
  if (property.newLaunch) {
    badges.push({ label: 'New Launch', className: 'bg-white/95 text-primary' });
  }
  if (property.readyToMove) {
    badges.push({ label: 'Ready to Move', className: 'bg-white/95 text-primary' });
  }

  const aspectClass = variant === 'large' ? 'aspect-[16/10]' : 'aspect-[4/3]';

  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-500 ease-premium hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)] hover:border-border/60">
      {/* Image */}
      <div className={cn('relative overflow-hidden', aspectClass)}>
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Top Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {badges.map((badge, i) => (
            <span
              key={i}
              className={cn(
                'px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] shadow-sm',
                badge.className
              )}
            >
              {badge.label}
            </span>
          ))}
        </div>

        {/* Favorite + Verified */}
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <button
            onClick={() => setLiked(!liked)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Save property"
          >
            <Heart
              className={cn(
                'h-4 w-4 transition-all duration-300',
                liked ? 'fill-destructive text-destructive' : 'text-foreground'
              )}
            />
          </button>
          {property.verified && (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm backdrop-blur-sm">
              <BadgeCheck className="h-4 w-4 text-primary" />
            </div>
          )}
        </div>

        {/* Type tag bottom-left */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground shadow-sm backdrop-blur-sm">
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-serif text-xl font-bold text-primary">
              {property.price}
            </p>
            <h3 className="mt-1 truncate text-base font-semibold text-foreground">
              {property.title}
            </h3>
          </div>
          {property.featured && (
            <span className="shrink-0 bg-accent/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-accent">
              Featured
            </span>
          )}
        </div>

        <div className="mt-1.5 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Details */}
        <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
          {property.beds > 0 && (
            <span className="flex items-center gap-1.5">
              <BedDouble className="h-4 w-4 text-accent" />
              {property.beds} Beds
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-accent" />
            {property.baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-accent" />
            {property.area}
          </span>
        </div>

        {/* CTA */}
        <button className="mt-4 flex w-full items-center justify-center gap-1.5 border border-border py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground">
          View Property
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}
