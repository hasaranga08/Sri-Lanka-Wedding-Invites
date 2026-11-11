import React from 'react';
import { Sparkles, Play, ArrowRight, CheckCircle2, Music, MessageCircle, MapPin, Smartphone } from 'lucide-react';
import { getAssetUrl, getInvitationUrl } from '../../utils/assets';

interface HeroSectionProps {
  onOpenDemo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onOpenDemo) {
      e.preventDefault();
      onOpenDemo();
    }
  };
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-[#FAF8F5] via-[#FFFDF9] to-[#F5EFE6]">
      {/* Delicate background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#F7E7CE]/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#FFFDF5] shadow-xs">
              <Sparkles className="w-4 h-4 text-[#B88937]" />
              <span className="font-serif-luxury text-xs sm:text-sm font-semibold tracking-wider text-[#8A6818] uppercase">
                Sri Lanka's Premier Digital Wedding Invitation Studio
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#241C16] leading-[1.15] tracking-tight">
              Celebrate Your Love with <br />
              <span className="gold-gradient-text italic font-serif-luxury font-normal">
                Timeless Digital Luxury
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#5A4D45] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
              Elevate your celebration with bespoke, mobile-first invitations. Delight your guests with cinematic 3D envelope-opening videos, romantic background music, one-tap WhatsApp RSVP, and instant venue directions for celebrations across Sri Lanka and worldwide.
            </p>

            {/* Key feature pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 pt-1 text-xs sm:text-sm text-[#4E4138]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#997A15]" />
                Cinematic Video Envelopes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#997A15]" />
                Instant WhatsApp RSVP
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#997A15]" />
                No Postal Delays Worldwide
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={getInvitationUrl('roshini-hasaranga')}
                onClick={handleDemoClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full gold-gradient-bg text-sm font-bold uppercase tracking-wider text-[#1F1505] shadow-md hover:brightness-105 hover:shadow-lg transition-all group cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current text-[#1F1505]" />
                <span>View Live Demo Invitation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#enquire"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#D4AF37]/60 bg-white/80 hover:bg-[#FFFDF7] text-sm font-semibold text-[#4A3D34] shadow-xs hover:border-[#D4AF37] transition-all"
              >
                <span>Enquire for Your Date</span>
              </a>
            </div>

            {/* Domain Highlight Note */}
            <div className="pt-2 text-xs text-[#7A6A60] font-sans">
              Each couple receives their own private link under <span className="font-semibold text-[#8A6818]">srilankaweddinginvites.lk/Your-Names/</span>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/30 to-[#F7E7CE]/50 rounded-[44px] blur-xl opacity-70 -z-10" />

              {/* Realistic Mobile Frame */}
              <div className="relative rounded-[38px] border-4 border-[#2E241E] bg-[#140513] shadow-2xl overflow-hidden p-2.5 transition-transform duration-500 hover:scale-[1.02]">
                {/* Phone Speaker Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#2E241E] rounded-full z-30 flex items-center justify-center">
                  <div className="w-10 h-1 bg-white/20 rounded-full" />
                </div>

                {/* Inner Screen displaying the actual Roshini & Hasaranga Invitation preview */}
                <div className="relative rounded-[30px] overflow-hidden bg-[#140513] aspect-[9/18.5] flex flex-col justify-between text-center p-4 pt-10">
                  {/* Background preview image */}
                  <img
                    src={getAssetUrl('assets/aistudio/envelope_rings_first_frame.jpg')}
                    alt="Roshini & Hasaranga Luxury Wedding Invitation Mockup"
                    className="absolute inset-0 w-full h-full object-cover opacity-85 select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140513] via-transparent to-black/40" />

                  {/* Top Live Badge */}
                  <div className="relative z-10 flex items-center justify-between px-2 pt-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] text-[#FAF6EE] font-serif-luxury tracking-widest uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Demo
                    </span>
                    <span className="text-[10px] text-[#ECC880] font-sans font-medium">
                      /roshini-hasaranga/
                    </span>
                  </div>

                  {/* Centered Monogram & Invitation Title */}
                  <div className="relative z-10 my-auto space-y-2 py-4">
                    <div className="w-12 h-12 mx-auto rounded-full border border-[#D4AF37]/70 flex items-center justify-center bg-black/40 backdrop-blur-md shadow-md">
                      <span className="font-display text-sm font-bold text-[#ECC880]">R&amp;H</span>
                    </div>
                    <p className="font-calligraphy text-2xl text-[#FFF8EC] drop-shadow-md">
                      Roshini &amp; Hasaranga
                    </p>
                    <p className="font-serif-luxury text-[11px] tracking-[0.2em] text-[#ECC880] uppercase">
                      Holy Matrimony &bull; Negombo
                    </p>
                  </div>

                  {/* Bottom Action inside Mockup */}
                  <div className="relative z-10 pb-4 space-y-2">
                    <a
                      href={getInvitationUrl('roshini-hasaranga')}
                      onClick={handleDemoClick}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-[#ECC880]/60 text-xs font-serif-luxury tracking-widest uppercase text-[#FAF6EE] transition-all cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-[#ECC880] text-[#ECC880]" />
                      <span>Tap to Open Invitation</span>
                    </a>
                    <p className="text-[9px] text-[#ECC880]/80">
                      Features 3D video envelope &bull; Music &bull; WhatsApp RSVP
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Feature Badges around device */}
              <div className="hidden sm:flex absolute -left-8 top-1/4 items-center gap-2 px-3 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/30 shadow-lg text-xs font-semibold text-[#3C322B] animate-bounce duration-1000">
                <Music className="w-4 h-4 text-[#D4AF37]" />
                <span>Wedding Song Synced</span>
              </div>

              <div className="hidden sm:flex absolute -right-6 bottom-1/4 items-center gap-2 px-3 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/30 shadow-lg text-xs font-semibold text-[#3C322B]">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>One-Tap WhatsApp RSVP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
