import { useEffect, useState } from 'react';
import {
  Check,
  Copy,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';
import { SafeImage } from './SafeImage';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState<'Pickup' | 'Delivery'>('Pickup');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const buildOrderMessage = () => {
    const lines = [
      `Hello ${BUSINESS_INFO.shortName}! I would like to place an order:`,
      '',
      ...items.map(
        (item) =>
          `• ${item.quantity}x ${item.name} (${BUSINESS_INFO.currencySymbol} ${(
            item.price * item.quantity
          ).toLocaleString()})`
      ),
      '',
      `Order Total: ${BUSINESS_INFO.currencySymbol} ${subtotal.toLocaleString()}`,
      `Preference: ${orderType}`,
      `Customer Name: ${customerName.trim() || 'Not specified'}`,
    ];

    if (orderType === 'Delivery') {
      lines.push(`Delivery Address: ${deliveryAddress.trim() || 'To be shared in chat'}`);
    }
    if (notes.trim()) {
      lines.push(`Notes: ${notes.trim()}`);
    }

    return lines.join('\n');
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    buildOrderMessage()
  )}`;

  const handleCopyOrder = async () => {
    try {
      await navigator.clipboard.writeText(buildOrderMessage());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Your Order Cart"
      onClick={onClose}
    >
      <aside
        className="flex h-full w-full max-w-md flex-col border-l border-white/15 bg-[#111111] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="h-5 w-5 text-[#FFC400]" aria-hidden="true" />
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white">
              YOUR ORDER <span className="text-[#FFC400] tabular-nums">({totalCount})</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#181818] text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] cursor-pointer"
            aria-label="Close order drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Body */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#181818] text-[#FFC400]">
              <ShoppingBag className="h-7 w-7" aria-hidden="true" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold uppercase text-white">
              Your bag is empty
            </h3>
            <p className="mt-2 max-w-xs text-sm text-[#A5A5A5]">
              Add gourmet cheeseburgers, loaded fries, or combo deals from our menu to start your
              WhatsApp order.
            </p>
            <a
              href="#menu"
              onClick={onClose}
              className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-lg bg-[#FFC400] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#080808] transition-colors hover:bg-[#FFB800]"
            >
              EXPLORE OUR MENU
            </a>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {/* Itemized List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#181818] p-3"
                  >
                    <div className="h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-[#080808]">
                      <SafeImage
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        fallbackTitle={item.name}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-white">{item.name}</p>
                      <p className="mt-0.5 text-sm font-bold text-[#FFC400] tabular-nums">
                        {BUSINESS_INFO.currencySymbol}{' '}
                        {(item.price * item.quantity).toLocaleString()}
                      </p>

                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-[#080808] text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] cursor-pointer"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold text-white tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-[#080808] text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] cursor-pointer"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#A5A5A5] transition-colors hover:bg-[#080808] hover:text-[#E94B35] cursor-pointer"
                      aria-label={`Remove ${item.name} from order`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-xs font-medium text-[#A5A5A5] hover:text-[#E94B35] transition-colors cursor-pointer"
                >
                  Clear all items
                </button>
              </div>

              {/* Order Handoff Details */}
              <div className="space-y-4 rounded-xl border border-white/10 bg-[#181818] p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#FFC400]">
                  WhatsApp Order Details
                </p>

                <div>
                  <label htmlFor="cart-customer-name" className="block text-xs font-medium text-[#F3F3F3]">
                    Your Name
                  </label>
                  <input
                    id="cart-customer-name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#080808] px-3.5 py-2.5 text-sm text-white placeholder-[#A5A5A5]/60 focus:border-[#FFC400] focus:outline-none"
                  />
                </div>

                <div>
                  <span className="block text-xs font-medium text-[#F3F3F3]">
                    Pickup or Delivery
                  </span>
                  <div className="mt-1.5 grid grid-cols-2 gap-2">
                    {(['Pickup', 'Delivery'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setOrderType(mode)}
                        className={`min-h-[40px] rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                          orderType === mode
                            ? 'bg-[#FFC400] text-[#080808]'
                            : 'border border-white/15 bg-[#080808] text-[#F3F3F3] hover:border-[#FFC400]/50'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {orderType === 'Delivery' && (
                  <div>
                    <label htmlFor="cart-address" className="block text-xs font-medium text-[#F3F3F3]">
                      Delivery Address
                    </label>
                    <input
                      id="cart-address"
                      type="text"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="Sector / Street / House #"
                      className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#080808] px-3.5 py-2.5 text-sm text-white placeholder-[#A5A5A5]/60 focus:border-[#FFC400] focus:outline-none"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="cart-notes" className="block text-xs font-medium text-[#F3F3F3]">
                    Special Instructions (Optional)
                  </label>
                  <input
                    id="cart-notes"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Extra cheese dip, no onions, etc."
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#080808] px-3.5 py-2.5 text-sm text-white placeholder-[#A5A5A5]/60 focus:border-[#FFC400] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Drawer Footer / Checkout Handoff */}
            <div className="border-t border-white/10 bg-[#080808] px-5 py-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#A5A5A5]">Estimated Subtotal</span>
                <span className="text-xl font-bold text-[#FFC400] tabular-nums">
                  {BUSINESS_INFO.currencySymbol} {subtotal.toLocaleString()}
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#FFC400] px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#080808] transition-colors hover:bg-[#FFB800]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>ORDER VIA WHATSAPP</span>
              </a>

              <button
                type="button"
                onClick={handleCopyOrder}
                className="inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-[#111111] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#FFC400]" aria-hidden="true" />
                    <span>ORDER SUMMARY COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>COPY ORDER SUMMARY</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-[#A5A5A5]">
                Your order is confirmed directly with our staff once sent on WhatsApp (
                {BUSINESS_INFO.phoneDisplay}).
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
