import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenLegal: (doc: 'privacy' | 'terms') => void;
}

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Specials', href: '#specials' },
  { label: 'Contact', href: '#contact' },
];

export function Footer({ onOpenLegal }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-14 pb-8 text-sm text-[#A5A5A5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Column 1: Brand */}
          <div>
            <BrandLogo size="sm" />
            <p className="mt-4 leading-relaxed text-[#A5A5A5]">
              Bold gourmet cheeseburgers, crispy chicken favorites, loaded cheese fries, and wraps
              crafted fresh for comfort food lovers in Islamabad.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message The Cheese Hub on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#111111] text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.phoneHref}
                aria-label="Call The Cheese Hub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#111111] text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View The Cheese Hub on Google Maps"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#111111] text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400]"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block py-0.5 text-[#A5A5A5] transition-colors hover:text-[#FFC400]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#FFC400] mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFC400] transition-colors"
                >
                  {BUSINESS_INFO.address}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#FFC400] shrink-0" aria-hidden="true" />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="font-semibold text-white hover:text-[#FFC400] transition-colors tabular-nums"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Editable Opening Hours */}
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">
              Opening Hours
            </h3>
            <ul className="mt-4 space-y-2.5">
              {BUSINESS_INFO.openingHours.map((slot) => (
                <li key={slot.days} className="border-b border-white/5 pb-2 last:border-b-0">
                  <p className="font-medium text-white">{slot.days}</p>
                  <p className="mt-0.5 text-xs text-[#A5A5A5]">{slot.hours}</p>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[11px] text-[#A5A5A5]/80">
              {BUSINESS_INFO.openingHoursNote}
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#A5A5A5]">
          <p>&copy; {year} {BUSINESS_INFO.shortName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#FFC400] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#FFC400] transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
