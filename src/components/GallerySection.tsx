import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { SafeImage } from './SafeImage';

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev === null ? null : (prev + 1) % GALLERY_ITEMS.length));
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const activeItem = activeIndex !== null ? GALLERY_ITEMS[activeIndex] : null;

  return (
    <section id="gallery" className="bg-[#111111] py-16 sm:py-20 lg:py-24 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#FFC400] uppercase">
              FRESH FROM OUR KITCHEN
            </p>
            <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold uppercase leading-[1.04] text-white text-balance">
              A FEAST FOR <span className="text-[#FFC400]">YOUR EYES</span>
            </h2>
          </div>
          <p className="text-sm text-[#A5A5A5]">Click any dish to view full size</p>
        </div>

        {/* Asymmetrical Masonry-Style Desktop Grid / 2-Column Mobile Grid */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:auto-rows-[210px]">
          {GALLERY_ITEMS.map((item, idx) => {
            const spanClasses =
              item.layoutSpan === 'tall'
                ? 'lg:row-span-2'
                : item.layoutSpan === 'wide'
                  ? 'col-span-2'
                  : '';

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[#080808] text-left focus-visible:ring-2 focus-visible:ring-[#FFC400] cursor-pointer aspect-[4/3] lg:aspect-auto ${spanClasses}`}
                aria-label={`Open ${item.title} in gallery lightbox`}
              >
                <SafeImage
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  fallbackTitle={item.title}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/25 to-transparent opacity-80 sm:opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3.5 sm:p-4 sm:opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#FFC400]">
                      {item.category}
                    </p>
                    <p className="text-sm font-semibold text-white leading-snug">{item.title}</p>
                  </div>
                  <Expand className="h-4 w-4 text-white/90 shrink-0" aria-hidden="true" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {activeItem && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[#111111] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#FFC400]">
                  {activeItem.category}
                </p>
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white">
                  {activeItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#181818] text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#080808]">
              <SafeImage
                src={activeItem.image}
                alt={activeItem.alt}
                className="h-full w-full object-contain"
                fallbackTitle={activeItem.title}
              />

              <button
                type="button"
                onClick={() =>
                  setActiveIndex((activeIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#080808]/80 text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex + 1) % GALLERY_ITEMS.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#080808]/80 text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs text-[#A5A5A5]">
              <span>{activeItem.alt}</span>
              <span className="tabular-nums shrink-0 ml-4">
                {activeIndex + 1} / {GALLERY_ITEMS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
