import { locations } from '@/lib/locations';
import { ArrowRight, MapPin } from 'lucide-react';

export default function ExploreLocations() {
  return (
    <section id="locations" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
              Popular Destinations
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-[42px] lg:leading-tight">
              Explore by Location
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Browse properties across India&apos;s most vibrant cities and
              emerging real-estate destinations.
            </p>
          </div>
          <button className="group hidden whitespace-nowrap items-center gap-2 border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:flex">
            View All Locations
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <a
              key={loc.id}
              href="#featured"
              className="group relative aspect-[4/3] overflow-hidden shadow-sm"
            >
              <img
                src={loc.image}
                alt={loc.city}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-all duration-500 group-hover:from-black/90" />

              {/* Top-right arrow */}
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:scale-110">
                <ArrowRight className="h-4 w-4 text-white" />
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1.5 text-xs font-medium text-white/60">
                  <MapPin className="h-3.5 w-3.5" />
                  India
                </div>
                <h3 className="mt-1.5 font-serif text-2xl font-bold text-white">
                  {loc.city}
                </h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="h-px w-8 bg-accent transition-all duration-300 group-hover:w-12" />
                  <p className="text-sm text-white/80">
                    {loc.count} Properties
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
