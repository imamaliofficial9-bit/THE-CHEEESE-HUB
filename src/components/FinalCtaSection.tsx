import { ArrowRight } from 'lucide-react';
import { SITE_IMAGES } from '../data/restaurantData';
import { SafeImage } from './SafeImage';

interface FinalCtaSectionProps {
  onOrderNow: () => void;
}

export function FinalCtaSection({ onOrderNow }: FinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-16 sm:py-20 lg:py-24 border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 cta-radial-glow" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 rounded-2xl border border-[#FFC400]/25 bg-[#111111] p-6 sm:p-10 lg:p-12">
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#FFC400] uppercase">
              READY TO BITE IN?
            </p>
            <h2 className="mt-2 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.0] text-white text-balance">
              YOUR NEXT FAVORITE BITE IS <span className="text-[#FFC400]">WAITING.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base sm:text-lg text-[#A5A5A5]">
              Explore our menu of melted-cheddar burgers, crispy chicken, and loaded fries, and
              send your order in seconds.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOrderNow}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#FFC400] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#080808] transition-all duration-200 hover:bg-[#FFB800] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,196,0,0.28)] cursor-pointer"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>
              <a
                href="#menu"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400]"
              >
                BROWSE MENU
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#080808]">
              <SafeImage
                src={SITE_IMAGES.heroBurger}
                alt="Gourmet cheeseburger with melted cheddar ready to order at The Cheese Hub"
                className="h-full w-full object-cover"
                fallbackTitle="The Cheese Hub Signature Burger"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
