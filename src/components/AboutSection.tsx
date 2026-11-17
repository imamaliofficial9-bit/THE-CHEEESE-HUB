import { ArrowRight, Check } from 'lucide-react';
import { SITE_IMAGES } from '../data/restaurantData';
import { SafeImage } from './SafeImage';

const STORY_POINTS = [
  'Flavor-packed favorites made with real cheddar richness',
  'Freshly prepared meals served piping hot for dine-in or takeaway',
  'Crowd-pleasing burgers, loaded fries, wraps, and bites made for sharing',
];

export function AboutSection() {
  return (
    <section id="about" className="bg-[#080808] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-10 lg:gap-14">
          {/* Left: Gourmet Burger Meal Image */}
          <div className="lg:col-span-6">
            <div className="h-full overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
              <SafeImage
                src={SITE_IMAGES.aboutMeal}
                alt="Gourmet burger meal plated with crispy golden fries, melted cheddar dip cup, and a cold beverage"
                className="aspect-[4/3] lg:aspect-auto lg:h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                fallbackTitle="The Cheese Hub Burger Meal"
              />
            </div>
          </div>

          {/* Right: Story Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#FFC400] uppercase">
              OUR STORY
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold uppercase leading-[1.04] text-white text-balance">
              GOOD FOOD. BIG FLAVORS.{' '}
              <span className="text-[#FFC400]">GREAT MOMENTS.</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#F3F3F3]/85">
              At The Cheese Hub, we believe great food brings people together. From juicy seared
              burgers and cheesy comfort favorites to crispy golden sides, our menu is built around
              bold flavors, satisfying bites, and meals worth coming back for.
            </p>

            <ul className="mt-7 space-y-3.5">
              {STORY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-[#F3F3F3]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#FFC400]/15 text-[#FFC400]">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#menu"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#FFC400] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#080808] transition-all duration-200 hover:bg-[#FFB800] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,196,0,0.25)] whitespace-nowrap"
              >
                <span>DISCOVER OUR MENU</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
