import React from 'react';
import { Palette, FileText, Smartphone, Send, Sparkles, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Palette,
      title: 'Select Your Style & Theme',
      description:
        'Choose from our signature aesthetic suites or request a bespoke palette matching your saree, suit, and floral arrangements.',
    },
    {
      step: '02',
      icon: FileText,
      title: 'Submit Event Information',
      description:
        'Share your names, auspicious dates, ceremony and reception venues, couple portraits, chosen wedding song, and WhatsApp number.',
    },
    {
      step: '03',
      icon: Smartphone,
      title: 'Review Private Prototype',
      description:
        'Receive a private staging link within 48 to 72 hours to test the envelope opening, music, and RSVP functionality on your own phone.',
    },
    {
      step: '04',
      icon: Send,
      title: 'Publish & Share Worldwide',
      description:
        'Your unique URL goes live instantly under srilankaweddinginvites.lk/Your-Names/. Broadcast effortlessly to WhatsApp groups and loved ones.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FFFDF9] border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#FFFDF5]">
            <Sparkles className="w-3.5 h-3.5 text-[#B88937]" />
            <span className="font-serif-luxury text-xs font-semibold tracking-wider text-[#8A6818] uppercase">
              Simple 4-Step Process
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241C16]">
            How It Works
          </h2>

          <p className="text-base sm:text-lg text-[#615248] font-sans font-light leading-relaxed">
            From initial consultation to your guests tapping "Open" on their phones, we handle the technical design and hosting while you focus on enjoying your wedding planning.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-white border border-[#D4AF37]/25 p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl font-extrabold text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center text-[#1C1405] shadow-xs group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#2A201A] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#66574E] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F5EFE6] flex items-center gap-1 text-[11px] font-semibold text-[#8C6D1F]">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FAF6ED] via-[#FFFDF7] to-[#FAF6ED] border border-[#D4AF37]/30 text-center max-w-3xl mx-auto shadow-xs">
          <h4 className="font-display text-lg font-bold text-[#2A201A] mb-2">
            Ready to get started?
          </h4>
          <p className="text-xs sm:text-sm text-[#695A50] mb-5">
            Send us your wedding date and venue to check design availability and receive an obligation-free quote.
          </p>
          <a
            href="#enquire"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full gold-gradient-bg text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1C1405] shadow-md hover:brightness-105 transition-all"
          >
            <span>Inquire for Your Wedding Date</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
