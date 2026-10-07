import {
  BedDouble,
  Bath,
  Maximize,
  ArrowRight,
  MapPin,
  BadgeCheck,
  CheckCircle2,
} from 'lucide-react';

const highlights = [
  'Private courtyard garden',
  'Floor-to-ceiling glazing',
  'Covered parking for 2 cars',
];

export default function PropertySpotlight() {
  return (
    <section id="spotlight" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-1 aspect-[4/5] overflow-hidden shadow-xl lg:order-1 sm:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src="https://images.pexels.com/photos/8134745/pexels-photo-8134745.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="The Modern Courtyard Villa"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {/* Price badge on image */}
            <div className="absolute bottom-5 left-5 bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Asking Price
              </p>
              <p className="font-serif text-2xl font-bold text-primary">
                ₹3.45 Cr
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="order-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
                Property Spotlight
              </span>
              <span className="flex items-center gap-1 bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                <BadgeCheck className="h-3 w-3" />
                Verified
              </span>
            </div>

            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-[44px] lg:leading-tight">
              The Modern Courtyard Villa
            </h2>

            <div className="mt-3 flex items-center gap-2 text-base text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              Pune, Maharashtra
            </div>

            {/* Details */}
            <div className="mt-8 flex flex-wrap gap-8 border-y border-border py-6">
              <div className="flex flex-col gap-1">
                <BedDouble className="h-5 w-5 text-accent" />
                <span className="font-serif text-xl font-bold text-foreground">
                  4
                </span>
                <span className="text-xs text-muted-foreground">Bedrooms</span>
              </div>
              <div className="flex flex-col gap-1">
                <Bath className="h-5 w-5 text-accent" />
                <span className="font-serif text-xl font-bold text-foreground">
                  4
                </span>
                <span className="text-xs text-muted-foreground">Bathrooms</span>
              </div>
              <div className="flex flex-col gap-1">
                <Maximize className="h-5 w-5 text-accent" />
                <span className="font-serif text-xl font-bold text-foreground">
                  3,200
                </span>
                <span className="text-xs text-muted-foreground">sq.ft.</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A contemporary residence designed around natural light, open
              spaces and private gardens. Every corner of this villa is crafted
              for refined living, blending modern architecture with the warmth
              of a true home.
            </p>

            {/* Highlights */}
            <ul className="mt-6 flex flex-col gap-2.5">
              {highlights.map((hl) => (
                <li
                  key={hl}
                  className="flex items-center gap-2.5 text-sm text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {hl}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-xl">
              Explore Property
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
