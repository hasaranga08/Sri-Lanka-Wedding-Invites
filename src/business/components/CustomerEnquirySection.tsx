import React, { useState } from 'react';
import { Send, MessageCircle, Mail, MapPin, Sparkles, CheckCircle2, Phone } from 'lucide-react';

export const CustomerEnquirySection: React.FC = () => {
  const [coupleNames, setCoupleNames] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [venues, setVenues] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [packageChoice, setPackageChoice] = useState('Royal Video Envelope Suite');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const BUSINESS_WHATSAPP = '94766148615';

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello Sri Lanka Wedding Invites!%0A%0AI would like to inquire about a digital wedding invitation suite.%0A%0A*Couple:* ${encodeURIComponent(
      coupleNames || 'Not specified'
    )}%0A*Wedding Date:* ${encodeURIComponent(weddingDate || 'TBD')}%0A*Venues:* ${encodeURIComponent(
      venues || 'Not specified'
    )}%0A*Estimated Guests:* ${encodeURIComponent(guestCount || 'Not specified')}%0A*Selected Suite:* ${encodeURIComponent(
      packageChoice
    )}%0A*Contact Phone:* ${encodeURIComponent(phone || 'Not specified')}%0A*Notes:* ${encodeURIComponent(
      message || 'None'
    )}`;

    const url = `https://wa.me/${BUSINESS_WHATSAPP}?text=${formattedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <section id="enquire" className="py-20 md:py-28 bg-[#FFFDF9] border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#FFFDF5]">
            <Sparkles className="w-3.5 h-3.5 text-[#B88937]" />
            <span className="font-serif-luxury text-xs font-semibold tracking-wider text-[#8A6818] uppercase">
              Get In Touch With Us
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241C16]">
            Check Availability &amp; Request a Quote
          </h2>

          <p className="text-base sm:text-lg text-[#615248] font-sans font-light leading-relaxed">
            Planning your wedding? Let us know your event dates and preferred invitation design. We will get back to you with design samples and a custom quote within 2–4 hours.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1C0A1A] via-[#2A0E27] to-[#120411] text-[#FAF6EE] shadow-lg border border-[#ECC880]/30 space-y-6">
              <div>
                <span className="font-serif-luxury text-xs tracking-widest text-[#ECC880] uppercase">
                  Direct Studio Support
                </span>
                <h3 className="font-display text-2xl font-bold text-[#FFF8EC] mt-1">
                  We’re Here to Help
                </h3>
                <p className="text-xs sm:text-sm text-[#D4C3B7] mt-2 leading-relaxed">
                  Have questions about video envelopes, music choices, or bilingual wording? Chat directly with our design team.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-xs sm:text-sm">
                <a
                  href={`https://wa.me/${BUSINESS_WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#C4B3A7]">WhatsApp Inquiry</p>
                    <p className="font-semibold text-[#FAF6EE] group-hover:text-[#ECC880] transition-colors">
                      +94 76 614 8615
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#ECC880]/20 border border-[#ECC880]/40 flex items-center justify-center text-[#ECC880] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#C4B3A7]">Email</p>
                    <p className="font-semibold text-[#FAF6EE]">
                      contact@srilankaweddinginvites.lk
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#ECC880]/20 border border-[#ECC880]/40 flex items-center justify-center text-[#ECC880] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#C4B3A7]">Serving All of Sri Lanka</p>
                    <p className="font-semibold text-[#FAF6EE]">
                      Negombo &amp; Colombo, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-[11px] text-[#ECC880]/80 italic">
                  * Overseas Sri Lankan couples can connect anytime via WhatsApp (GMT+5:30).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Customer Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-md">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#2A201A]">
                    Thank You for Your Enquiry!
                  </h3>
                  <p className="text-sm text-[#66574E] max-w-md mx-auto">
                    Your details have been prepared and forwarded. If your WhatsApp did not open automatically, please tap the button below to connect with our designer.
                  </p>
                  <div className="pt-4">
                    <a
                      href={`https://wa.me/${BUSINESS_WHATSAPP}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat Directly on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleWhatsAppSend} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Couple Names */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#4E4138] mb-1.5">
                        Couple's Names <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={coupleNames}
                        onChange={(e) => setCoupleNames(e.target.value)}
                        placeholder="e.g. Kasun & Tharushi"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#FFFDF9] text-sm text-[#2A201A] focus:outline-hidden focus:border-[#B88937] focus:ring-1 focus:ring-[#B88937]"
                      />
                    </div>

                    {/* Wedding Date */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#4E4138] mb-1.5">
                        Wedding Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={weddingDate}
                        onChange={(e) => setWeddingDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#FFFDF9] text-sm text-[#2A201A] focus:outline-hidden focus:border-[#B88937] focus:ring-1 focus:ring-[#B88937]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Venues */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#4E4138] mb-1.5">
                        Venues (Church / Poruwa / Reception)
                      </label>
                      <input
                        type="text"
                        value={venues}
                        onChange={(e) => setVenues(e.target.value)}
                        placeholder="e.g. St. Mary's & Cinnamon Grand"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#FFFDF9] text-sm text-[#2A201A] focus:outline-hidden focus:border-[#B88937] focus:ring-1 focus:ring-[#B88937]"
                      />
                    </div>

                    {/* Estimated Guests */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#4E4138] mb-1.5">
                        Estimated Guest Count
                      </label>
                      <input
                        type="text"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        placeholder="e.g. 250 guests"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#FFFDF9] text-sm text-[#2A201A] focus:outline-hidden focus:border-[#B88937] focus:ring-1 focus:ring-[#B88937]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Preferred Package */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#4E4138] mb-1.5">
                        Preferred Suite
                      </label>
                      <select
                        value={packageChoice}
                        onChange={(e) => setPackageChoice(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#FFFDF9] text-sm text-[#2A201A] focus:outline-hidden focus:border-[#B88937] focus:ring-1 focus:ring-[#B88937]"
                      >
                        <option value="Royal Video Envelope Suite">Royal Video Envelope Suite (Popular)</option>
                        <option value="Signature Digital Suite">Signature Digital Suite</option>
                        <option value="Bespoke Heritage Suite">Bespoke Heritage Suite (Multi-Event)</option>
                        <option value="Not Sure Yet">Not sure yet / Recommend for me</option>
                      </select>
                    </div>

                    {/* Mobile / WhatsApp Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#4E4138] mb-1.5">
                        WhatsApp / Contact Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +94 77 123 4567"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#FFFDF9] text-sm text-[#2A201A] focus:outline-hidden focus:border-[#B88937] focus:ring-1 focus:ring-[#B88937]"
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#4E4138] mb-1.5">
                      Special Requests, Songs, or Color Preferences
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your wedding theme, preferred song, or specific stationery ideas..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D4AF37]/40 bg-[#FFFDF9] text-sm text-[#2A201A] focus:outline-hidden focus:border-[#B88937] focus:ring-1 focus:ring-[#B88937]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full gold-gradient-bg text-[#1A1203] text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:brightness-105 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-[#1A1203]" />
                      <span>Send Inquiry via WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-center text-[#8C7D73] mt-2">
                      Pre-fills your message directly in WhatsApp with zero spam or obligation.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
