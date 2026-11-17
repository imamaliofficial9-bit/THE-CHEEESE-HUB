import heroBurgerImg from '../assets/images/hero_gourmet_cheeseburger_1794936183611.jpg';
import aboutMealImg from '../assets/images/about_burger_meal_1794936183508.jpg';
import classicBurgerImg from '../assets/images/classic_cheeseburger_1794936184653.jpg';
import crispyChickenImg from '../assets/images/crispy_chicken_burger_1794936185253.jpg';
import loadedFriesImg from '../assets/images/loaded_cheese_fries_1794936185551.jpg';
import doubleBurgerImg from '../assets/images/double_cheeseburger_1794936186790.jpg';
import chickenWrapImg from '../assets/images/chicken_wrap_1794936187252.jpg';
import chickenBitesImg from '../assets/images/crispy_chicken_bites_1794936187883.jpg';
import smokyMeltImg from '../assets/images/smoky_melt_sandwich_1794936187664.jpg';
import signatureFeastImg from '../assets/images/signature_banner_feast_1794936188205.jpg';
import burgerComboImg from '../assets/images/burger_combo_deal_1794936188945.jpg';
import chickenMealImg from '../assets/images/chicken_meal_deal_1794936189909.jpg';

export type MenuCategory =
  | 'All'
  | 'Burgers'
  | 'Chicken Burgers'
  | 'Loaded Fries'
  | 'Sandwiches'
  | 'Wraps'
  | 'Snacks'
  | 'Drinks'
  | 'Meal Deals';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
  featuredLabel?: string;
}

export interface SpecialDeal {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
  price: number;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  layoutSpan: 'tall' | 'wide' | 'standard';
}

export interface TestimonialItem {
  id: string;
  name: string;
  context: string;
  quote: string;
  rating: number;
  isSample: boolean;
}

/**
 * Centralized Business Configuration
 * Edit contact details, opening hours, and WhatsApp number here.
 */
export const BUSINESS_INFO = {
  name: 'THE CHEESE HUB',
  shortName: 'The Cheese Hub',
  tagline: 'Big Flavors. More Cheese. Pure Happiness.',
  address: 'AL Rafay Arcade, E 17/3, ISB',
  cityCountry: 'Islamabad, Pakistan',
  phoneDisplay: '0330-6669211',
  phoneHref: 'tel:+923306669211',
  whatsappNumber: '923306669211', // International format for Pakistan (+92 330 6669211)
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=AL+Rafay+Arcade+E+17%2F3+Islamabad',
  currencySymbol: 'Rs.',
  /**
   * Editable opening hours — replace with verified restaurant schedule before launch.
   */
  openingHoursNote: 'Hours editable in configuration — confirm daily schedule with store.',
  openingHours: [
    { days: 'Monday – Thursday', hours: 'To Be Confirmed (Sample: 12:00 PM – 12:00 AM)' },
    { days: 'Friday – Sunday', hours: 'To Be Confirmed (Sample: 12:00 PM – 1:00 AM)' },
  ],
  socialLinks: {
    instagram: '#contact',
    facebook: '#contact',
  },
} as const;

export const SITE_IMAGES = {
  heroBurger: heroBurgerImg,
  aboutMeal: aboutMealImg,
  signatureFeast: signatureFeastImg,
};

export const MENU_CATEGORIES: MenuCategory[] = [
  'All',
  'Burgers',
  'Chicken Burgers',
  'Loaded Fries',
  'Sandwiches',
  'Wraps',
  'Snacks',
  'Drinks',
  'Meal Deals',
];

/**
 * Editable Menu Catalog
 * NOTE: Sample prices (in PKR) are marked for client confirmation prior to live launch.
 */
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'classic-cheeseburger',
    name: 'Classic Cheeseburger',
    category: 'Burgers',
    description: 'A delicious burger with melted cheddar cheese, crisp pickles, fresh vegetables, and signature sauce.',
    price: 750,
    image: classicBurgerImg,
    imageAlt: 'Classic Cheeseburger with melted cheddar cheese, tomato, pickles, and lettuce on a toasted sesame bun',
    featuredLabel: 'House Favorite',
  },
  {
    id: 'crispy-chicken-burger',
    name: 'Crispy Chicken Burger',
    category: 'Chicken Burgers',
    description: 'Golden crispy fried chicken fillet layered with melted cheese, fresh lettuce, and creamy sauce in a toasted bun.',
    price: 790,
    image: crispyChickenImg,
    imageAlt: 'Crispy Chicken Burger topped with melted cheddar and shredded lettuce on a brioche bun',
    featuredLabel: 'Crispy Crunch',
  },
  {
    id: 'double-cheese-burger',
    name: 'Double Cheese Burger',
    category: 'Burgers',
    description: 'A satisfying double-patty burger layered with rich melted cheddar, caramelized onions, and fresh toppings.',
    price: 1090,
    image: doubleBurgerImg,
    imageAlt: 'Double Cheese Burger with two seared patties, double melted cheddar layers, and fries',
    featuredLabel: 'Extra Cheesy',
  },
  {
    id: 'loaded-cheese-fries',
    name: 'Loaded Cheese Fries',
    category: 'Loaded Fries',
    description: 'Golden crispy fries topped generously with warm melted cheddar cheese sauce, jalapenos, and smoky drizzle.',
    price: 650,
    image: loadedFriesImg,
    imageAlt: 'Bowl of Loaded Cheese Fries smothered in melted cheddar sauce and sliced jalapenos',
    featuredLabel: 'Most Popular',
  },
  {
    id: 'chicken-wrap',
    name: 'Cheesy Chicken Wrap',
    category: 'Wraps',
    description: 'A toasted tortilla wrap stuffed with crispy chicken strips, melted cheddar, crisp greens, and creamy sauce.',
    price: 690,
    image: chickenWrapImg,
    imageAlt: 'Toasted Cheesy Chicken Wrap sliced in half showing crispy chicken and melted cheddar',
  },
  {
    id: 'crispy-chicken-bites',
    name: 'Crispy Chicken Bites',
    category: 'Snacks',
    description: 'Crunchy golden chicken bites served hot with a rich melted cheese dipping cup, ideal for sharing.',
    price: 620,
    image: chickenBitesImg,
    imageAlt: 'Golden Crispy Chicken Bites served on a dark tray with melted cheese dipping sauce',
  },
  {
    id: 'smoky-cheese-melt-sandwich',
    name: 'Smoky Cheese Melt Sandwich',
    category: 'Sandwiches',
    description: 'Toasted artisan bread stacked with smoky grilled chicken, fresh tomato, and generous melted cheddar pull.',
    price: 780,
    image: smokyMeltImg,
    imageAlt: 'Toasted Smoky Cheese Melt Sandwich sliced diagonally with melted cheddar pull',
  },
  {
    id: 'hub-signature-combo',
    name: 'The Cheese Hub Combo',
    category: 'Meal Deals',
    description: 'Double cheeseburger paired with crispy seasoned fries, warm cheese dip, and an ice-cold soft drink.',
    price: 1390,
    image: burgerComboImg,
    imageAlt: 'Double cheeseburger combo meal with fries, cheese dip, and chilled beverage',
    featuredLabel: 'Complete Meal',
  },
  {
    id: 'chilled-house-beverages',
    name: 'Chilled Soft Drinks & Coolers',
    category: 'Drinks',
    description: 'Ice-cold cola or citrus fizz served chilled to pair with burgers, wraps, and loaded fries.',
    price: 220,
    image: chickenMealImg,
    imageAlt: 'Chilled sparkling citrus beverage served alongside a crispy chicken meal',
  },
];

/**
 * Editable Special Deals & Combos
 * NOTE: Sample prices are editable and intentionally exclude unverified percentage discount claims.
 */
export const SPECIAL_DEALS: SpecialDeal[] = [
  {
    id: 'deal-chicken-meal',
    title: 'Crispy Chicken Meal',
    subtitle: 'Crispy Burger + Fries + Bites',
    description: 'Golden crispy chicken burger paired with seasoned fries, chicken bites, creamy dip, and a chilled drink.',
    includes: ['Crispy Chicken Burger', 'Seasoned Fries & Bites', 'Chilled Citrus Drink'],
    price: 1350,
    image: chickenMealImg,
    imageAlt: 'Crispy Chicken Meal featuring fried chicken burger, fries basket, chicken bites, and cold drink',
  },
  {
    id: 'deal-burger-combo',
    title: 'Signature Burger Combo',
    subtitle: 'Flagship Meal Experience',
    description: 'Our signature double cheeseburger served with golden fries, warm cheddar dip cup, and a refreshing cold drink.',
    includes: ['Double Cheeseburger', 'Crispy Fries & Cheese Dip', 'Chilled Soft Drink'],
    price: 1390,
    image: burgerComboImg,
    imageAlt: 'Signature Burger Combo with double cheeseburger, golden fries, cheese dip, and cold soda',
    featured: true,
  },
  {
    id: 'deal-loaded-fries',
    title: 'Loaded Fries Duo Deal',
    subtitle: 'Shareable Cheesy Feast',
    description: 'A hearty serving of Loaded Cheese Fries paired with Crispy Chicken Bites and warm cheddar dip for sharing.',
    includes: ['Loaded Cheese Fries', 'Crispy Chicken Bites', 'Warm Cheddar Dip'],
    price: 1190,
    image: loadedFriesImg,
    imageAlt: 'Loaded Cheese Fries topped with rich melted cheddar and jalapenos',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Gourmet Double Cheeseburger',
    category: 'Burgers',
    image: heroBurgerImg,
    alt: 'Towering gourmet cheeseburger with melted cheddar and sesame bun',
    layoutSpan: 'tall',
  },
  {
    id: 'gal-2',
    title: 'Crispy Chicken Crunch',
    category: 'Chicken Burgers',
    image: crispyChickenImg,
    alt: 'Crispy fried chicken fillet burger with melted cheese',
    layoutSpan: 'standard',
  },
  {
    id: 'gal-3',
    title: 'Loaded Cheddar Fries',
    category: 'Loaded Fries',
    image: loadedFriesImg,
    alt: 'Crispy fries loaded with melted cheddar sauce and jalapenos',
    layoutSpan: 'standard',
  },
  {
    id: 'gal-4',
    title: 'Signature Feast Spread',
    category: 'Signature Table',
    image: signatureFeastImg,
    alt: 'Full restaurant table spread of cheeseburgers, chicken burgers, and loaded fries',
    layoutSpan: 'wide',
  },
  {
    id: 'gal-5',
    title: 'Toasted Chicken Wrap',
    category: 'Wraps',
    image: chickenWrapImg,
    alt: 'Toasted chicken tortilla wrap sliced diagonally with cheddar cheese',
    layoutSpan: 'standard',
  },
  {
    id: 'gal-6',
    title: 'Smoky Cheese Melt',
    category: 'Sandwiches',
    image: smokyMeltImg,
    alt: 'Grilled cheese and smoky chicken melt sandwich with cheese pull',
    layoutSpan: 'standard',
  },
  {
    id: 'gal-7',
    title: 'Golden Chicken Bites',
    category: 'Snacks',
    image: chickenBitesImg,
    alt: 'Crispy golden chicken bites served with melted cheese dip',
    layoutSpan: 'standard',
  },
  {
    id: 'gal-8',
    title: 'Classic Burger Meal',
    category: 'Meal Deals',
    image: aboutMealImg,
    alt: 'Gourmet cheeseburger meal with crispy fries, cheese dip, and beverage',
    layoutSpan: 'standard',
  },
];

/**
 * Editable Sample Testimonials
 * NOTE: Marked as sample content until verified customer reviews are supplied by The Cheese Hub.
 */
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Hamza Tariq',
    context: 'Sample Guest Review · Burger Lover',
    quote: 'The cheddar melt on the Double Cheese Burger and the crispness of the fries hit the spot every single time. Easily our go-to hangout meal.',
    rating: 5,
    isSample: true,
  },
  {
    id: 't-2',
    name: 'Ayesha Malik',
    context: 'Sample Guest Review · Takeaway Regular',
    quote: 'Everything arrives hot, neatly packed, and generously loaded with cheese sauce. Ordering on WhatsApp is quick and hassle-free.',
    rating: 5,
    isSample: true,
  },
  {
    id: 't-3',
    name: 'Bilal Ahmed',
    context: 'Sample Guest Review · Evening Group Order',
    quote: 'Tried the Crispy Chicken Burger alongside the Loaded Cheese Fries with friends. Great crunch, balanced seasoning, and rich cheese flavor.',
    rating: 5,
    isSample: true,
  },
  {
    id: 't-4',
    name: 'Zainab Raza',
    context: 'Sample Guest Review · Wrap & Snack Fan',
    quote: 'The Cheesy Chicken Wrap and Crispy Chicken Bites make an awesome quick dinner. Love the bold menu and warm hospitality.',
    rating: 5,
    isSample: true,
  },
];
