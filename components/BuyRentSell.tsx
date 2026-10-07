import { ArrowRight } from 'lucide-react';

const items = [
  {
    id: 'buy',
    label: 'Buy',
    title: 'Find your perfect home.',
    description: 'Browse verified listings across India\u2019s top cities.',
    image:
      'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&w=900',
    cta: 'Browse Properties',
  },
  {
    id: 'rent',
    label: 'Rent',
    title: 'Move into a place that fits your lifestyle.',
    description: 'Rental homes in neighbourhoods you\u2019ll love.',
    image:
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=900',
    cta: 'Find Rentals',
  },
  {
    id: 'sell',
    label: 'Sell',
    title: 'Get your property in front of serious buyers.',
    description: 'List with Kalycor and reach qualified prospects.',
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900',
    cta: 'List Your Property',
  },
];

export default function BuyRentSell() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
            What You Can Do
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-[42px] lg:leading-tight">
            Buy, Rent or Sell with Confidence
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((item) => (
            <a
              key={item.id}
              href="#featured"
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden shadow-sm"
            >
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-all duration-500 group-hover:from-black/90" />
              <div className="relative z-10 p-7">
                <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
                  {item.label}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  {item.description}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-white">
                  {item.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
