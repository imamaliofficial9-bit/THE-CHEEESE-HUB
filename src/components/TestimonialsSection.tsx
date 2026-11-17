import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  // Show 2 cards on desktop, 1 on mobile starting from activeIndex
  const visibleItems = [
    TESTIMONIALS[activeIndex],
    TESTIMONIALS[(activeIndex + 1) % TESTIMONIALS.length],
  ];

  return (
    <section className="bg-[#080808] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#FFC400] uppercase">
              GUEST FEEDBACK PREVIEW
            </p>
            <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold uppercase leading-[1.04] text-white text-balance">
              WHAT FOOD LOVERS <span className="text-[#FFC400]">SAY</span>
            </h2>
            <p className="mt-2 text-xs text-[#A5A5A5]">
              Editable sample review cards — replace with verified customer reviews once collected.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-[#111111] text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-[#111111] text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleItems.map((item, idx) => (
            <article
              key={`${item.id}-${idx}`}
              className={`flex flex-col justify-between rounded-2xl border border-white/10 bg-[#181818] p-6 sm:p-8 ${
                idx === 1 ? 'hidden md:flex' : 'flex'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div
                    className="flex items-center gap-1 text-[#FFC400]"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from({ length: item.rating }).map((_, sIdx) => (
                      <Star key={sIdx} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-[#FFC400]/35" aria-hidden="true" />
                </div>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#F3F3F3]">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-0.5 text-xs text-[#A5A5A5]">{item.context}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonial Slides">
          {TESTIMONIALS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              aria-selected={activeIndex === idx}
              className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                activeIndex === idx ? 'w-8 bg-[#FFC400]' : 'w-2 bg-white/25 hover:bg-white/45'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
