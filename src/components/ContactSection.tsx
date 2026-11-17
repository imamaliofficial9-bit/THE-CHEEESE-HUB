import { FormEvent, useState } from 'react';
import { Check, Copy, ExternalLink, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [preparedMessage, setPreparedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }
    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    if (!/^\+?\d{7,15}$/.test(cleanPhone)) {
      nextErrors.phone = 'Please enter a valid phone number (7–15 digits).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (message.trim().length < 10) {
      nextErrors.message = 'Please enter a message of at least 10 characters.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setPreparedMessage(null);
      return;
    }

    const formatted = [
      `Hello ${BUSINESS_INFO.shortName},`,
      `Name: ${fullName.trim()}`,
      `Phone: ${phone.trim()}`,
      `Email: ${email.trim()}`,
      `Inquiry: ${message.trim()}`,
    ].join('\n');

    setPreparedMessage(formatted);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!preparedMessage) return;
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const whatsappInquiryUrl = preparedMessage
    ? `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(preparedMessage)}`
    : '#';

  return (
    <section
      id="contact"
      className="bg-[#111111] py-16 sm:py-20 lg:py-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Location Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#FFC400] uppercase">
                VISIT OR REACH OUT
              </p>
              <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold uppercase leading-[1.04] text-white text-balance">
                COME VISIT <span className="text-[#FFC400]">THE CHEESE HUB</span>
              </h2>
              <p className="mt-3 text-base text-[#A5A5A5]">
                Drop by for hot burgers and loaded fries, call ahead for quick takeaway, or send
                an inquiry directly via WhatsApp.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-white/10 bg-[#181818] p-6">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFC400]/15 text-[#FFC400]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A5A5A5]">
                    Location
                  </p>
                  <p className="mt-0.5 text-base font-semibold text-white">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-sm text-[#A5A5A5]">{BUSINESS_INFO.cityCountry}</p>
                </div>
              </div>

              <div className="h-px bg-white/10" />

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFC400]/15 text-[#FFC400]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A5A5A5]">
                    Phone &amp; WhatsApp Ordering
                  </p>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="mt-0.5 inline-block text-lg font-bold text-[#FFC400] hover:underline tabular-nums"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#FFC400] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#080808] transition-colors hover:bg-[#FFB800]"
                >
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400]"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>CALL NOW</span>
                </a>
              </div>
            </div>

            {/* Interactive Google Map Embed */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#181818]">
              <iframe
                title="The Cheese Hub Location Map — AL Rafay Arcade, E 17/3, Islamabad"
                src="https://maps.google.com/maps?q=AL%20Rafay%20Arcade%20E%2017%2F3%20Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0 grayscale contrast-125 invert-[0.92] hue-rotate-180"
              />
            </div>
          </div>

          {/* Right Column: Validated Contact & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#181818] p-6 sm:p-8 lg:p-10">
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                SEND US A <span className="text-[#FFC400]">MESSAGE</span>
              </h3>
              <p className="mt-2 text-sm text-[#A5A5A5]">
                Planning a group meal, takeaway pickup, or catering inquiry? Fill in your details
                below to prepare your message for our WhatsApp team.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#F3F3F3]">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.fullName)}
                      className="mt-2 w-full rounded-lg border border-white/15 bg-[#080808] px-4 py-3 text-sm text-white placeholder-[#A5A5A5]/60 transition-colors focus:border-[#FFC400] focus:outline-none"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-[#E94B35]" role="alert">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#F3F3F3]">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="03XX-XXXXXXX"
                      aria-invalid={Boolean(errors.phone)}
                      className="mt-2 w-full rounded-lg border border-white/15 bg-[#080808] px-4 py-3 text-sm text-white placeholder-[#A5A5A5]/60 transition-colors focus:border-[#FFC400] focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-[#E94B35]" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#F3F3F3]">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className="mt-2 w-full rounded-lg border border-white/15 bg-[#080808] px-4 py-3 text-sm text-white placeholder-[#A5A5A5]/60 transition-colors focus:border-[#FFC400] focus:outline-none"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-[#E94B35]" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#F3F3F3]">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you'd like to ask or order..."
                    aria-invalid={Boolean(errors.message)}
                    className="mt-2 w-full rounded-lg border border-white/15 bg-[#080808] px-4 py-3 text-sm text-white placeholder-[#A5A5A5]/60 transition-colors focus:border-[#FFC400] focus:outline-none resize-y"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-[#E94B35]" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#FFC400] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#080808] transition-all duration-200 hover:bg-[#FFB800] hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>GET IN TOUCH</span>
                </button>
              </form>

              {/* Transparent Handoff State once form validates */}
              {preparedMessage && (
                <div
                  className="mt-6 rounded-xl border border-[#FFC400]/40 bg-[#080808] p-5"
                  role="status"
                >
                  <p className="text-sm font-semibold text-[#FFC400]">
                    Your inquiry is validated and ready to send.
                  </p>
                  <p className="mt-1 text-xs text-[#A5A5A5]">
                    Send directly via WhatsApp to {BUSINESS_INFO.phoneDisplay} or copy the message
                    below.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#FFC400] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#080808] transition-colors hover:bg-[#FFB800]"
                    >
                      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>SEND VIA WHATSAPP</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#FFC400] hover:text-[#FFC400] cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-[#FFC400]" aria-hidden="true" />
                          <span>COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" aria-hidden="true" />
                          <span>COPY MESSAGE</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
