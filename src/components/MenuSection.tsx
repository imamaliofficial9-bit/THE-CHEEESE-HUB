import { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import {
  BUSINESS_INFO,
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuCategory,
  MenuItem,
} from '../data/restaurantData';
import { SafeImage } from './SafeImage';

interface MenuSectionProps {
  onAddToCart: (item: { id: string; name: string; price: number; image: string; category: string }) => void;
  onOpenCart: () => void;
}

export function MenuSection({ onAddToCart, onOpenCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
    });
    setRecentlyAddedId(item.id);
    window.setTimeout(() => {
      setRecentlyAddedId((current) => (current === item.id ? null : current));
    }, 1200);
  };

  return (
    <section id="menu" className="bg-[#111111] py-16 sm:py-20 lg:py-24 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#FFC400] uppercase">
              OUR FAVORITES
            </p>
            <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold uppercase leading-[1.04] text-white text-balance">
              THE MENU THAT <span className="text-[#FFC400]">HITS DIFFERENT.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#A5A5A5]">
              Discover your next favorite bite from our selection of gourmet cheeseburgers, crispy
              chicken, loaded fries, wraps, and meal combos.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              if (selectedCategory !== 'All') {
                setSelectedCategory('All');
              } else {
                onOpenCart();
              }
            }}
            className="self-start lg:self-auto inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/25 px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] whitespace-nowrap shrink-0 cursor-pointer"
          >
            {selectedCategory !== 'All' ? 'VIEW FULL MENU' : 'REVIEW YOUR ORDER'}
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="mt-8 flex items-center gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Menu Categories"
        >
          {MENU_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`min-h-[42px] rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#FFC400] text-[#080808] shadow-[0_4px_16px_rgba(255,196,0,0.22)]'
                    : 'border border-white/10 bg-[#181818] text-[#F3F3F3] hover:border-[#FFC400]/50 hover:text-[#FFC400]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isAdded = recentlyAddedId === item.id;
            return (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#181818] transition-all duration-200 hover:-translate-y-1 hover:border-[#FFC400]/50 hover:shadow-[0_14px_34px_rgba(255,196,0,0.09)]"
              >
                {/* 4:3 Food Photography */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#080808]">
                  <SafeImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    fallbackTitle={item.name}
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#A5A5A5]">
                    <span>{item.category}</span>
                    {item.featuredLabel && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#FFC400]">{item.featuredLabel}</span>
                      </>
                    )}
                  </div>

                  <div className="mt-2 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white leading-snug">
                      {item.name}
                    </h3>
                    <span className="text-base font-bold text-[#FFC400] tabular-nums whitespace-nowrap shrink-0">
                      {BUSINESS_INFO.currencySymbol} {item.price.toLocaleString()}
                    </span>
                  </div>

                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#A5A5A5]">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleAdd(item)}
                    className={`mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isAdded
                        ? 'bg-white text-[#080808]'
                        : 'bg-[#FFC400] text-[#080808] hover:bg-[#FFB800]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>ADDED TO ORDER</span>
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>ADD TO ORDER</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-[#A5A5A5]">
          Sample menu pricing is displayed for preview and can be updated directly in the
          restaurant menu configuration.
        </p>
      </div>
    </section>
  );
}
