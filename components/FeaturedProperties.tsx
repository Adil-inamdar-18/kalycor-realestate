import PropertyGrid from './PropertyGrid';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProperties() {
  return (
    <section id="featured" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
              Featured Properties
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-[42px] lg:leading-tight">
              Exceptional properties selected for you.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Handpicked listings across India&apos;s most sought-after
              neighbourhoods — each verified and ready for your next move.
            </p>
          </div>
          <button className="group hidden whitespace-nowrap items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:flex">
            View All Properties
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Grid */}
        <PropertyGrid />

        {/* Mobile View All */}
        <div className="mt-8 text-center sm:hidden">
          <button className="border border-border px-5 py-2.5 text-sm font-medium text-foreground">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
