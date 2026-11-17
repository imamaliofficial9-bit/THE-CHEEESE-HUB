import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { AboutSection } from './components/AboutSection';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { ContactSection } from './components/ContactSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HighlightsStrip } from './components/HighlightsStrip';
import { LegalModal } from './components/LegalModal';
import { MenuSection } from './components/MenuSection';
import { SignatureSection } from './components/SignatureSection';
import { SpecialsSection } from './components/SpecialsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { BUSINESS_INFO, SpecialDeal } from './data/restaurantData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [legalDoc, setLegalDoc] = useState<'privacy' | 'terms' | null>(null);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleAddToCart = (item: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
  }) => {
    setCartItems((prev) => {
      const existing = prev.find((entry) => entry.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleOrderDeal = (deal: SpecialDeal) => {
    handleAddToCart({
      id: deal.id,
      name: deal.title,
      price: deal.price,
      image: deal.image,
      category: 'Meal Deals',
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleHeaderOrderNow = () => {
    if (cartItems.length > 0) {
      setIsCartOpen(true);
    } else {
      const menuEl = document.getElementById('menu');
      if (menuEl) {
        menuEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Header cartCount={totalCount} onOpenCart={() => setIsCartOpen(true)} />

      <main>
        <HeroSection onOrderNow={handleHeaderOrderNow} />
        <HighlightsStrip />
        <AboutSection />
        <MenuSection onAddToCart={handleAddToCart} onOpenCart={() => setIsCartOpen(true)} />
        <SpecialsSection onOrderDeal={handleOrderDeal} />
        <SignatureSection onOrderNow={handleHeaderOrderNow} />
        <WhyChooseUsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        <FinalCtaSection onOrderNow={handleHeaderOrderNow} />
      </main>

      <Footer onOpenLegal={(doc) => setLegalDoc(doc)} />

      {/* Quick Floating Cart Bar when items are in bag and drawer is closed */}
      {totalCount > 0 && !isCartOpen && (
        <div className="fixed bottom-4 right-4 z-30">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="inline-flex min-h-[48px] items-center gap-3 rounded-xl border border-[#FFC400] bg-[#181818] px-4 py-2.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(0,0,0,0.75)] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
            aria-label={`Open cart with ${totalCount} items`}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#FFC400] text-xs font-bold text-[#080808] tabular-nums">
              {totalCount}
            </span>
            <span className="flex items-center gap-1.5">
              <ShoppingBag className="h-4 w-4 text-[#FFC400]" aria-hidden="true" />
              <span>VIEW ORDER</span>
            </span>
            <span className="text-[#FFC400] tabular-nums">
              {BUSINESS_INFO.currencySymbol} {subtotal.toLocaleString()}
            </span>
          </button>
        </div>
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <LegalModal doc={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}
