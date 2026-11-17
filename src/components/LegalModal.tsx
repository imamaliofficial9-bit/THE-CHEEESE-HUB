import { useEffect } from 'react';
import { X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface LegalModalProps {
  doc: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export function LegalModal({ doc, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!doc) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [doc, onClose]);

  if (!doc) return null;

  const isPrivacy = doc === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label={isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-white/15 bg-[#111111] p-6 sm:p-7 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="font-display text-2xl font-bold uppercase text-white">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#181818] text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#A5A5A5]">
          {isPrivacy ? (
            <>
              <p>
                {BUSINESS_INFO.shortName} respects your privacy. Details you enter in our cart or
                contact form (such as your name, phone number, email, or delivery address) remain in
                your browser until you choose to send them directly to our restaurant via WhatsApp
                or phone.
              </p>
              <p>
                For questions about your order information, please contact us at{' '}
                <a href={BUSINESS_INFO.phoneHref} className="text-[#FFC400] hover:underline">
                  {BUSINESS_INFO.phoneDisplay}
                </a>{' '}
                or visit {BUSINESS_INFO.address}.
              </p>
            </>
          ) : (
            <>
              <p>
                Menu items, combos, and pricing displayed on this website are subject to store
                confirmation at the time you place your order via WhatsApp or in person at{' '}
                {BUSINESS_INFO.address}.
              </p>
              <p>
                An order is considered accepted and scheduled for preparation only once confirmed
                directly by {BUSINESS_INFO.shortName} staff via WhatsApp or telephone (
                {BUSINESS_INFO.phoneDisplay}).
              </p>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[42px] rounded-lg bg-[#FFC400] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#080808] hover:bg-[#FFB800] cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
