import { BadgeCheck, MapPin, ShieldCheck, Headset } from 'lucide-react';

const features = [
  {
    icon: BadgeCheck,
    title: 'Verified Properties',
    description:
      'Every listing is checked and verified so you can browse with confidence.',
  },
  {
    icon: MapPin,
    title: 'Local Market Knowledge',
    description:
      'Our experts know every neighbourhood, street and development inside out.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Transactions',
    description:
      'No hidden charges, no surprises. Full clarity from inquiry to handover.',
  },
  {
    icon: Headset,
    title: 'Dedicated Property Experts',
    description:
      'A personal advisor guides you through every step of your property journey.',
  },
];

export default function WhyKalycor() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
            Why Kalycor
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-[42px] lg:leading-tight">
            Real Estate, Without the Guesswork.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            We combine verified listings, local expertise and transparent
            guidance so you can make confident property decisions.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className="group relative bg-card p-8 transition-colors duration-300 hover:bg-secondary/40"
            >
              <span className="absolute right-6 top-6 font-serif text-5xl font-bold text-muted/60 transition-colors duration-300 group-hover:text-accent/20">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="relative flex h-12 w-12 items-center justify-center bg-primary/8 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <feat.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-foreground">
                {feat.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
