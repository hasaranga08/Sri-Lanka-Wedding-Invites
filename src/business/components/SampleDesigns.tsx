import React from 'react';
import { Sparkles, ExternalLink, Play, Heart, Music, Check, ArrowUpRight } from 'lucide-react';
import { getAssetUrl, getInvitationUrl } from '../../utils/assets';

interface SampleDesignsProps {
  onOpenDemo?: () => void;
}

export const SampleDesigns: React.FC<SampleDesignsProps> = ({ onOpenDemo }) => {
  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onOpenDemo) {
      e.preventDefault();
      onOpenDemo();
    }
  };

  return (
    <section id="samples" className="py-20 md:py-28 bg-[#FFFDF9] border-y border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#FFFDF5]">
            <Sparkles className="w-3.5 h-3.5 text-[#B88937]" />
            <span className="font-serif-luxury text-xs font-semibold tracking-wider text-[#8A6818] uppercase">
              Our Curated Portfolio
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241C16]">
            Invitation Samples &amp; Signature Designs
          </h2>

          <p className="text-base sm:text-lg text-[#615248] font-sans font-light leading-relaxed">
            Explore our real-world customer invitations and signature templates. Experience how an interactive digital invitation looks, moves, and sounds.
          </p>
        </div>

        {/* FEATURED LIVE SAMPLE: ROSHINI & HASARANGA */}
        <div className="mb-16">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1E091C] via-[#2A0E28] to-[#120411] text-[#FAF6EE] p-6 sm:p-10 lg:p-12 shadow-2xl border border-[#ECC880]/30 overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ECC880]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Media preview column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#ECC880]/40 shadow-xl group">
                  <img
                    src={getAssetUrl('assets/aistudio/envelope_rings_first_frame.jpg')}
                    alt="Roshini & Hasaranga Wedding Invitation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-center">
                    <span className="font-calligraphy text-2xl text-[#FFF8EC] mb-1">
                      Roshini &amp; Hasaranga
                    </span>
                    <span className="font-serif-luxury text-[11px] tracking-widest uppercase text-[#ECC880]">
                      Monday, 28th December 2026
                    </span>
                    <a
                      href={getInvitationUrl('roshini-hasaranga')}
                      onClick={handleDemoClick}
                      className="mt-3 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-[#ECC880] text-[#160415] text-xs font-bold uppercase tracking-wider hover:bg-[#FFE099] transition-colors shadow-md cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Open Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Invitation Information & Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECC880]/15 border border-[#ECC880]/40 text-[#ECC880] text-xs font-serif-luxury tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Customer Invitation Demo
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFF8EC]">
                    Roshini &amp; Hasaranga
                  </h3>
                  <p className="font-serif-luxury text-sm tracking-widest text-[#ECC880] uppercase">
                    Royal Plum &amp; Champagne Gold Suite
                  </p>
                </div>

                <p className="text-[#D8C7BC] text-sm sm:text-base leading-relaxed font-light">
                  A bespoke invitation created for a traditional Catholic Holy Matrimony at Our Lady of Good Voyage Church in Duwa, followed by an elegant luncheon reception at the Auric Grand Ballroom in Negombo, Sri Lanka.
                </p>

                {/* Specific features included in this live sample */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#F5EAE1]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ECC880]" />
                    <span>3D Video Envelope opening</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ECC880]" />
                    <span>Song: "Mathakaida Ada Wage"</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ECC880]" />
                    <span>Instant WhatsApp RSVP (+94)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ECC880]" />
                    <span>Duwa Church &amp; Auric Maps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ECC880]" />
                    <span>Interactive Countdown Timer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ECC880]" />
                    <span>Mobile Portrait Stationery</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={getInvitationUrl('roshini-hasaranga')}
                    onClick={handleDemoClick}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#ECC880] hover:bg-[#FFE299] text-[#1E051D] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md group cursor-pointer"
                  >
                    <span>Launch Live Invitation</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <span className="text-xs text-[#C8B8AC] self-center">
                    Slug: <code className="text-[#ECC880] font-mono">/roshini-hasaranga/</code>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ADDITIONAL DESIGN THEMES SHOWCASE */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#241C16]">
              Explore Other Signature Themes
            </h3>
            <p className="text-xs sm:text-sm text-[#73645B] mt-1">
              Customized to your religious traditions, color palette, and preferred venues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Theme 1: Traditional Poruwa Gold */}
            <div className="rounded-2xl bg-white border border-[#D4AF37]/25 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF9E6] border border-[#D4AF37]/50 flex items-center justify-center text-[#997A15]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#261E18]">
                  Kandyan Lotus &amp; Poruwa Gold
                </h4>
                <p className="text-xs text-[#6E5E55] leading-relaxed">
                  Designed for traditional Sinhala Buddhist Poruwa rituals and hotel receptions. Features sacred lotus ornaments, auspicious Nekath time schedules, and classical flute audio.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F0E6D8] mt-4 flex items-center justify-between text-xs font-semibold text-[#8C6D1F]">
                <span>Poruwa &amp; Homecoming</span>
                <span className="text-[11px] font-normal text-[#9E8E85]">Customizable</span>
              </div>
            </div>

            {/* Theme 2: Coastal Ivory & Botanical */}
            <div className="rounded-2xl bg-white border border-[#D4AF37]/25 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#F0F8F5] border border-emerald-600/30 flex items-center justify-center text-emerald-800">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#261E18]">
                  Coastal Palms &amp; Sunset Ivory
                </h4>
                <p className="text-xs text-[#6E5E55] leading-relaxed">
                  Tailored for beachfront celebrations in Bentota, Negombo, Galle Fort, and Mirissa. Delicate watercolor palm leaves, sunset golden hues, and acoustic guitar melodies.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F0E6D8] mt-4 flex items-center justify-between text-xs font-semibold text-emerald-800">
                <span>Destination Beachfront</span>
                <span className="text-[11px] font-normal text-[#9E8E85]">Customizable</span>
              </div>
            </div>

            {/* Theme 3: Royal Crimson & Temple Heritage */}
            <div className="rounded-2xl bg-white border border-[#D4AF37]/25 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF0F0] border border-red-700/30 flex items-center justify-center text-red-800">
                  <Music className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#261E18]">
                  Temple Crimson &amp; Heritage Gold
                </h4>
                <p className="text-xs text-[#6E5E55] leading-relaxed">
                  Inspired by South Asian &amp; Hindu Kovil matrimony. Rich maroon and gold foil borderwork, Nadaswaram wedding song integration, and comprehensive feast details.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F0E6D8] mt-4 flex items-center justify-between text-xs font-semibold text-red-900">
                <span>Kovil &amp; Grand Ballroom</span>
                <span className="text-[11px] font-normal text-[#9E8E85]">Customizable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
