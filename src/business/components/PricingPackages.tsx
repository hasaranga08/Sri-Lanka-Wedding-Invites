import React from 'react';
import { Sparkles, Check, ArrowRight, Star } from 'lucide-react';

export const PricingPackages: React.FC = () => {
  const packages = [
    {
      name: 'Signature Digital Suite',
      tagline: 'Essential elegance for modern weddings',
      isPopular: false,
      features: [
        'Personalized custom wedding stationery design',
        'Church / Poruwa & Reception event details',
        'One-Tap WhatsApp RSVP message integration',
        'Interactive Google Maps venue navigation',
        'Live wedding countdown timer',
        'Add-to-Calendar (.ics) integration',
        'Dedicated subfolder URL (e.g. /Couple-Name/)',
        'Mobile-first responsive layout',
      ],
      ctaText: 'Inquire for Quote',
    },
    {
      name: 'Royal Video Envelope Suite',
      tagline: 'Our flagship 3D animated unboxing experience',
      isPopular: true,
      features: [
        'Everything included in Signature Suite',
        'Cinematic 3D video envelope-opening experience',
        'Custom wax seal animation with couple monogram',
        'Synchronized romantic background song integration',
        'Smart audio player with non-glitch mute/unmute',
        'GSAP smooth scroll-triggered animations',
        'Photo gallery & couple story sections',
        'Priority draft turnaround (48–72 hours)',
      ],
      ctaText: 'Inquire for Quote',
    },
    {
      name: 'Bespoke Heritage Suite',
      tagline: 'Multi-event luxury for multi-day celebrations',
      isPopular: false,
      features: [
        'Everything in Royal Video Envelope Suite',
        'Multi-event schedule (Poruwa, Church, Reception, Homecoming)',
        'Bilingual invitation text (Sinhala / Tamil / English)',
        'Custom illustrated venue watercolor accents',
        'Multiple RSVP destinations for separate events',
        'Tailored dress code visual palettes',
        'Dedicated invitation concierge support',
        'VIP expedited revisions',
      ],
      ctaText: 'Request Custom Quote',
    },
  ];

  return (
    <section id="packages" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#FFFDF5]">
            <Sparkles className="w-3.5 h-3.5 text-[#B88937]" />
            <span className="font-serif-luxury text-xs font-semibold tracking-wider text-[#8A6818] uppercase">
              Transparent Package Options
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241C16]">
            Invitation Suites &amp; Packages
          </h2>

          <p className="text-base sm:text-lg text-[#615248] font-sans font-light leading-relaxed">
            Every couple’s celebration is unique. Choose the tier that best matches your wedding itinerary, and request an obligation-free quotation tailored to your event requirements.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-[#1C091A] to-[#2E102B] text-[#FAF6EE] border-2 border-[#ECC880] shadow-xl scale-100 lg:-translate-y-2'
                  : 'bg-white text-[#2C2420] border border-[#D4AF37]/30 shadow-xs hover:shadow-md'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full gold-gradient-bg text-[#1A1203] text-xs font-bold uppercase tracking-wider shadow-md">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div>
                <div className="border-b pb-6 mb-6 border-current/15">
                  <h3
                    className={`font-display text-xl sm:text-2xl font-bold ${
                      pkg.isPopular ? 'text-[#FFF8EC]' : 'text-[#291F18]'
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mt-1.5 font-sans font-light ${
                      pkg.isPopular ? 'text-[#ECC880]' : 'text-[#7A6B62]'
                    }`}
                  >
                    {pkg.tagline}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  <p
                    className={`text-xs font-semibold tracking-wider uppercase ${
                      pkg.isPopular ? 'text-[#ECC880]' : 'text-[#8A6818]'
                    }`}
                  >
                    Included In This Suite:
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.isPopular ? 'text-[#ECC880]' : 'text-[#997A15]'
                          }`}
                        />
                        <span className={pkg.isPopular ? 'text-[#F5EDE6]' : 'text-[#4A3E37]'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#enquire"
                className={`w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  pkg.isPopular
                    ? 'gold-gradient-bg text-[#1A1203] hover:brightness-105 shadow-md'
                    : 'border border-[#D4AF37] bg-[#FFFDF7] text-[#8C6D1F] hover:bg-[#F8EED4]'
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
