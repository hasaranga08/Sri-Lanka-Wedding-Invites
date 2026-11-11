import React from 'react';
import { Globe2, HeartHandshake, Leaf, Sparkles, MapPin, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#FFFDF7]">
            <Sparkles className="w-3.5 h-3.5 text-[#B88937]" />
            <span className="font-serif-luxury text-xs font-semibold tracking-wider text-[#8A6818] uppercase">
              Our Story &amp; Philosophy
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241C16]">
            Reimagining Wedding Stationery for Modern Sri Lankan Celebrations
          </h2>

          <p className="text-base sm:text-lg text-[#615248] font-sans font-light leading-relaxed">
            Bridging timeless cultural traditions with modern digital artistry. Created in Sri Lanka to deliver an unforgettable first impression to your guests at home and across the globe.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-[#4E4138] leading-relaxed text-base font-sans">
            <p className="first-letter:text-5xl first-letter:font-serif-luxury first-letter:font-bold first-letter:text-[#8A6818] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              A Sri Lankan wedding is more than a celebration—it is a sacred union of two families, bringing together friends from every province of our island and cherished relatives residing in Australia, the United Kingdom, Canada, Italy, the Middle East, and beyond.
            </p>

            <p>
              Traditional paper invitations frequently arrive weeks late in the international mail, lack directions to intricate church or garden venues, and leave couples anxiously calling dozens of guests to confirm table seatings.
            </p>

            <p>
              At <strong>Sri Lanka Wedding Invites</strong>, we create immersive digital keepsakes. From the tactile feeling of opening an animated wax-sealed envelope to the soulful notes of your chosen wedding melody, each guest experiences the wonder of your upcoming vows directly on their smartphone.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/25 shadow-xs">
                <h4 className="font-display text-sm font-bold text-[#2A211B] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  Sri Lankan Venues
                </h4>
                <p className="text-xs text-[#6B5C53] mt-1.5">
                  Pinpoint directions for historical coastal churches, heritage Poruwa venues, and five-star luxury ballrooms.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/25 shadow-xs">
                <h4 className="font-display text-sm font-bold text-[#2A211B] flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[#D4AF37]" />
                  Global Reach
                </h4>
                <p className="text-xs text-[#6B5C53] mt-1.5">
                  Instant WhatsApp or iMessage sharing to overseas diaspora with zero airmail delays or lost envelopes.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#FFFDF9] border border-[#D4AF37]/30 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center shrink-0 shadow-sm">
                <HeartHandshake className="w-6 h-6 text-[#1A1204]" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-[#2A211B]">
                  Bespoke Craftsmanship
                </h3>
                <p className="text-xs sm:text-sm text-[#66574E] mt-1 leading-relaxed">
                  Every invitation is handcrafted for the couple, matching your exact color scheme, stationery artwork, and musical choice.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#FFFDF9] border border-[#D4AF37]/30 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center shrink-0 shadow-sm">
                <Leaf className="w-6 h-6 text-[#1A1204]" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-[#2A211B]">
                  Eco-Conscious Luxury
                </h3>
                <p className="text-xs sm:text-sm text-[#66574E] mt-1 leading-relaxed">
                  Save hundreds of paper prints, postage expenses, and environmental footprint without sacrificing an ounce of elegance.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#FFFDF9] border border-[#D4AF37]/30 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#1A1204]" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-[#2A211B]">
                  Dedicated Independent Hosting
                </h3>
                <p className="text-xs sm:text-sm text-[#66574E] mt-1 leading-relaxed">
                  Your website lives on its own private subfolder under our custom domain, fast and securely accessible 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
