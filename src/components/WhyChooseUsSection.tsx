import { Flame, Layers, ShoppingBag, Sparkles } from 'lucide-react';

const FEATURES = [
  {
    icon: Flame,
    title: 'Delicious Flavors',
    description: 'Enjoy satisfying burgers, fries, and melts packed with rich cheddar and bold sauces.',
  },
  {
    icon: Sparkles,
    title: 'Fresh Preparation',
    description: 'Food prepared fresh with close attention to heat, crunch, quality, and taste.',
  },
  {
    icon: Layers,
    title: 'Something For Everyone',
    description: 'Explore a diverse lineup of beef burgers, crispy chicken, wraps, sides, and bites.',
  },
  {
    icon: ShoppingBag,
    title: 'Easy Ordering',
    description: 'Build your bag in seconds and send your order straight to us via WhatsApp.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-[#080808] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#FFC400] uppercase">
            THE CHEESE HUB STANDARD
          </p>
          <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold uppercase leading-[1.04] text-white text-balance">
            WHY FOOD LOVERS <span className="text-[#FFC400]">CHOOSE US</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-white/10 bg-[#111111] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#FFC400]/45"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#FFC400]/25 bg-[#181818] text-[#FFC400] transition-colors group-hover:bg-[#FFC400] group-hover:text-[#080808]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-white">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#A5A5A5]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
