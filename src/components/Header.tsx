import { useEffect, useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Specials', href: '#specials' },
  { label: 'Contact', href: '#contact' },
];

export function Header({ cartCount, onOpenCart }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-white/10 bg-[#080808]/92 backdrop-blur-md transition-all duration-200 ${
        isScrolled ? 'py-2.5' : 'py-3.5 md:py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Mark */}
        <BrandLogo size={isScrolled ? 'sm' : 'md'} onClick={() => setMobileMenuOpen(false)} />

        {/* Zone 2: Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-sm font-medium text-[#F3F3F3] transition-colors duration-200 hover:text-[#FFC400] whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#FFC400] after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            className="inline-flex items-center gap-2 rounded-lg bg-[#FFC400] px-4 py-2.5 text-xs sm:text-sm font-bold tracking-wide text-[#080808] uppercase transition-all duration-200 hover:bg-[#FFB800] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,196,0,0.28)] active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ShoppingBag className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>ORDER NOW</span>
            {cartCount > 0 && (
              <span className="ml-0.5 inline-flex items-center justify-center rounded bg-[#080808] px-1.5 py-0.5 text-[11px] font-bold text-[#FFC400] tabular-nums leading-none">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex lg:hidden h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-[#111111] text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      <div
        className={`lg:hidden overflow-hidden border-t border-white/10 bg-[#080808] transition-all duration-200 ${
          mobileMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none border-t-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-1" aria-label="Mobile Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[44px] items-center rounded-lg px-3 py-2.5 text-base font-medium text-[#F3F3F3] transition-colors hover:bg-[#181818] hover:text-[#FFC400]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[44px] w-full items-center justify-center rounded-lg border border-white/20 px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400]"
            >
              Explore Our Menu
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
