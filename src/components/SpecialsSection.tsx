import { ArrowRight, Check } from 'lucide-react';
import { BUSINESS_INFO, SPECIAL_DEALS, SpecialDeal } from '../data/restaurantData';
import { SafeImage } from './SafeImage';

interface SpecialsSectionProps {
  onOrderDeal: (deal: SpecialDeal) => void;
}

export function SpecialsSection({ onOrderDeal }: SpecialsSectionProps) {
  return (
    <section
      id="specials"
      className="relative overflow-hidden bg-[#080808] py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle Golden Ambient Lighting */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] cta-radial-glow"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#FFC400] uppercase">
            DEALS YOU&apos;LL LOVE
          </p>
          <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold uppercase leading-[1.04] text-white text-balance">
            MORE FOOD. <span className="text-[#FFC400]">MORE FUN.</span>
          </h2>
          <p className="mt-3 text-base text-[#A5A5A5]">
            Built for big appetites and group hangouts. Pick a meal deal and send your order
            straight to our kitchen.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 items-stretch gap-6 lg:gap-8">
          {SPECIAL_DEALS.map((deal) => (
            <article
              key={deal.id}
              className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-200 ${
                deal.featured
                  ? 'border-[#FFC400]/60 bg-[#181818] lg:-my-3 shadow-[0_24px_60px_rgba(255,196,0,0.08)]'
                  : 'border-white/10 bg-[#111111] hover:border-[#FFC400]/40'
              }`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#080808]">
                <SafeImage
                  src={deal.image}
                  alt={deal.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  fallbackTitle={deal.title}
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2 text-xs font-medium text-[#FFC400]">
                  <span className="uppercase tracking-wider">{deal.subtitle}</span>
                  {deal.featured && (
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Featured Deal
                    </span>
                  )}
                </div>

                <div className="mt-2 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold uppercase text-white">
                    {deal.title}
                  </h3>
                  <span className="text-lg font-bold text-[#FFC400] tabular-nums whitespace-nowrap">
                    {BUSINESS_INFO.currencySymbol} {deal.price.toLocaleString()}
                  </span>
                </div>

                <p className="mt-2.5 text-sm leading-relaxed text-[#A5A5A5]">{deal.description}</p>

                <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 flex-1">
                  {deal.includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-2.5 text-sm text-[#F3F3F3]">
                      <Check className="h-4 w-4 text-[#FFC400] shrink-0" aria-hidden="true" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onOrderDeal(deal)}
                  className={`mt-6 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    deal.featured
                      ? 'bg-[#FFC400] text-[#080808] hover:bg-[#FFB800] hover:shadow-[0_8px_24px_rgba(255,196,0,0.28)]'
                      : 'border border-[#FFC400] bg-transparent text-[#FFC400] hover:bg-[#FFC400] hover:text-[#080808]'
                  }`}
                >
                  <span>ORDER THIS DEAL</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
