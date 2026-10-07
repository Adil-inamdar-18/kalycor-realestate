const stats = [
  { value: '1,200+', label: 'Properties Listed' },
  { value: '35+', label: 'Locations Covered' },
  { value: '850+', label: 'Happy Clients' },
  { value: '12+', label: 'Years of Expertise' },
];

export default function Stats() {
  return (
    <section className="bg-primary py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-white/50">
            By the Numbers
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            A track record built on trust.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-y-10 border-t border-white/15 pt-12 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 text-center lg:px-8">
              <p className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-[56px] lg:leading-none">
                {stat.value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/55 lg:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
