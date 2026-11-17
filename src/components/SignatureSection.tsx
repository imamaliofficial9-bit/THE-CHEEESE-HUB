import { SITE_IMAGES } from '../data/restaurantData';
import { SafeImage } from './SafeImage';

interface SignatureSectionProps {
  onOrderNow: () => void;
}

export function SignatureSection({ onOrderNow }: SignatureSectionProps) {
  return (
    <section
      aria-label="Signature Food Experience"
      className="relative overflow-hidden bg-[#080808] border-y border-white/10"
    >
      <div className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] flex items-center">
        {/* Background Food Feast Photograph */}
        <div className="absolute inset-0">
          <SafeImage
            src={SITE_IMAGES.signatureFeast}
            alt="Cinematic table spread of gourmet cheeseburgers, crispy chicken burgers, and loaded cheese fries"
            className="h-full w-full object-cover"
            fallbackTitle="The Cheese Hub Signature Spread"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/75 to-[#080808]/35"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40"
            aria-hidden="true"
          />
        </div>

        {/* Editorial Content */}
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#FFC400] uppercase">
              SIGNATURE EXPERIENCE
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.25rem,5vw,4.25rem)] font-bold uppercase leading-[0.98] text-white text-balance">
              MADE TO SATISFY <span className="text-[#FFC400]">EVERY CRAVING.</span>
            </h2>
            <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-[#F3F3F3]/90">
              Every bite brings together freshly seared patties, crispy golden textures, bold
              sauces, and the rich melted cheese goodness you love.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOrderNow}
                className="inline-flex min-h-[46px] items-center justify-center rounded-lg bg-[#FFC400] px-7 py-3 text-sm font-bold uppercase tracking-wider text-[#080808] transition-all duration-200 hover:bg-[#FFB800] hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                ORDER NOW
              </button>
              <a
                href="#gallery"
                className="inline-flex min-h-[46px] items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] whitespace-nowrap"
              >
                VIEW GALLERY
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
