import { categories } from '@/lib/categories';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Asymmetric layout: first item tall, others varied
const layoutClasses = [
  'lg:col-span-2 lg:row-span-2 aspect-[5/3] lg:aspect-auto',
  'aspect-[5/3]',
  'aspect-[5/3]',
  'aspect-[5/3]',
  'aspect-[5/3]',
  'aspect-[5/3] lg:col-span-2',
];

export default function PropertyCategories() {
  return (
    <section id="categories" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
            Browse by Type
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-[42px] lg:leading-tight">
            Explore Properties
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            From apartments and villas to commercial spaces and land — find the
            right type of property for your needs.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href="#featured"
              className={cn(
                'group relative overflow-hidden shadow-sm',
                layoutClasses[i] || 'aspect-[5/3]'
              )}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/85" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-medium text-white/70">
                  {cat.count} Properties
                </p>
                <div className="mt-1.5 flex items-center justify-between">
                  <h3
                    className={cn(
                      'font-serif font-bold text-white',
                      i === 0 ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'
                    )}
                  >
                    {cat.name}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:scale-110">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
