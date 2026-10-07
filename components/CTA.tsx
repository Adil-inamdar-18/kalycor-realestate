import { ArrowRight, Plus } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-28 lg:py-40">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/14603131/pexels-photo-14603131.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury modern mansion"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center lg:px-8">
        <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/60">
          Start Your Journey
        </span>
        <h2 className="mt-5 font-serif text-3xl font-bold text-white text-balance sm:text-4xl lg:text-[52px] lg:leading-tight">
          Ready to find your next address?
        </h2>
        <p className="mt-5 text-base text-white/75 sm:text-lg">
          Explore properties, compare options and connect with our real estate
          experts.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="inline-flex w-full items-center justify-center gap-2 bg-accent px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-xl sm:w-auto">
            Explore Properties
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex w-full items-center justify-center gap-2 border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/40 sm:w-auto">
            <Plus className="h-4 w-4" />
            List Your Property
          </button>
        </div>
      </div>
    </section>
  );
}
