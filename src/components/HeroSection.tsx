import { ArrowRight, MapPin } from 'lucide-react';
import { BUSINESS_INFO, SITE_IMAGES } from '../data/restaurantData';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onOrderNow: () => void;
}

export function HeroSection({ onOrderNow }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#080808] pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
          {/* Left Column: Brand Messaging & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#FFC400] uppercase mb-4">
              WELCOME TO THE CHEESE EXPERIENCE
            </p>

            <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] font-bold uppercase leading-[0.98] tracking-tight text-white text-balance">
              CRAVING SOMETHING{' '}
              <span className="text-[#FFC400]">EXTRA CHEESY?</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#F3F3F3]/85">
              From juicy seared burgers and crispy chicken fillets to loaded cheddar fries, discover
              comfort food crafted to satisfy every craving.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOrderNow}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#FFC400] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#080808] transition-all duration-200 hover:bg-[#FFB800] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,196,0,0.3)] active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>

              <a
                href="#menu"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/30 bg-transparent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:border-[#FFC400] hover:text-[#FFC400] hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                EXPLORE OUR MENU
              </a>
            </div>

            {/* Clean unboxed location & ordering metadata */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#A5A5A5]">
              <span className="inline-flex items-center gap-1.5 text-[#F3F3F3]">
                <MapPin className="h-4 w-4 text-[#FFC400] shrink-0" aria-hidden="true" />
                <span>{BUSINESS_INFO.address}</span>
              </span>
              <span aria-hidden="true" className="text-white/25">·</span>
              <span>Dine-In &amp; Takeaway</span>
              <span aria-hidden="true" className="text-white/25">·</span>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="text-[#FFC400] hover:underline font-medium tabular-nums"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Column: Gourmet Cheeseburger Centerpiece */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Subtle radial golden glow behind burger */}
            <div
              className="pointer-events-none absolute -inset-6 hero-radial-glow"
              aria-hidden="true"
            />
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_28px_70px_rgba(0,0,0,0.85)]">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <SafeImage
                  src={SITE_IMAGES.heroBurger}
                  alt="Towering gourmet cheeseburger with melted cheddar cheese, sesame bun, fresh lettuce, tomato, and house sauce"
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  fallbackTitle="The Cheese Hub Signature Cheeseburger"
                />
              </div>
              <div className="flex items-center justify-between border-t border-white/10 bg-[#111111]/95 px-5 py-3.5">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
                  Signature Melted Cheddar
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#FFC400]">
                  Fresh Off The Grill
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
