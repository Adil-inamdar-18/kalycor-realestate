import PropertySearch from "./PropertySearch";
import { ShieldCheck, Sparkles, Compass } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Verified Properties" },
  { icon: Sparkles, label: "Curated Listings" },
  { icon: Compass, label: "Trusted Guidance" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury modern villa with lush greenery"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-32 pt-32 lg:px-8 lg:pb-44 lg:pt-40">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-eyebrow text-white/80">
            Find Your Next Address
          </span>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-white text-balance sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Find a place you&apos;ll love to call home.
          </h1>
          <p className="mt-6 max-w-xl text-base font-semibold leading-relaxed text-white drop-shadow-md sm:text-lg lg:text-xl">
            Discover exceptional homes, apartments and commercial properties in
            locations that matter to you.
          </p>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {trustItems.map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-sm font-medium text-white/80"
              >
                <item.icon className="h-4 w-4 text-accent" />
                {item.label}
                {i < trustItems.length - 1 && (
                  <span className="ml-4 hidden h-4 w-px bg-white/25 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Search */}
      <div className="relative z-20 w-full">
        <PropertySearch />
      </div>
    </section>
  );
}
