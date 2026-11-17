import { Flame, HeartHandshake, ShoppingBag, UtensilsCrossed } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Flame,
    title: 'Freshly Prepared',
    description: 'Cooked to order on hot grills',
  },
  {
    icon: UtensilsCrossed,
    title: 'Loaded With Flavor',
    description: 'Generous melted cheddar pours',
  },
  {
    icon: HeartHandshake,
    title: 'Made For Food Lovers',
    description: 'Crafted for friends and families',
  },
  {
    icon: ShoppingBag,
    title: 'Easy Ordering',
    description: 'Quick pickup & WhatsApp handoff',
  },
];

export function HighlightsStrip() {
  return (
    <section
      aria-label="Brand Highlights"
      className="border-y border-white/10 bg-[#111111] py-7 sm:py-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 lg:px-6 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#FFC400]/25 bg-[#181818] text-[#FFC400]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {item.title}
                  </h2>
                  <p className="mt-0.5 text-xs sm:text-sm text-[#A5A5A5]">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
