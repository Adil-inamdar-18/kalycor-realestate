import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';

const columns = [
  {
    title: 'Explore',
    links: ['Buy', 'Rent', 'Commercial', 'New Projects'],
  },
  {
    title: 'Locations',
    links: ['Mumbai', 'Pune', 'Nagpur', 'Bengaluru', 'Hyderabad'],
  },
  {
    title: 'Company',
    links: ['About', 'Our Team', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Property Guide', 'Market Insights', 'FAQs'],
  },
];

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        {/* Top */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-bold text-white">
                KALYCOR
              </span>
              <span className="mt-1 text-[10px] font-medium tracking-[0.32em] text-white/45">
                REAL ESTATE
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Premium homes, apartments, villas and commercial properties in
              locations that matter to you.
            </p>

            {/* Contact */}
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-white/55">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Pune, Maharashtra, India
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                hello@kalycor.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                +91 98765 43210
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center border border-white/12 text-white/55 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/55 transition-colors duration-200 hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kalycor Real Estate. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
