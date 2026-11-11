import React from 'react';
import { Sparkles, Heart, ExternalLink } from 'lucide-react';
import { getInvitationUrl } from '../../utils/assets';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C140E] text-[#D8C7BC] border-t border-[#D4AF37]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#D4AF37] flex items-center justify-center bg-gradient-to-br from-[#FFF9E6] to-[#F2DFAC]">
                <span className="font-display text-xs font-bold text-[#8C6D1F]">SL</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold text-[#FFF9EF] tracking-wider">
                  SRI LANKA
                </span>
                <span className="font-serif-luxury text-[10px] tracking-[0.25em] text-[#D4AF37] -mt-1 uppercase">
                  Wedding Invites
                </span>
              </div>
            </div>

            <p className="text-xs text-[#B8A79B] leading-relaxed font-light">
              Sri Lanka's dedicated digital wedding invitation studio. Creating unforgettable 3D animated video envelopes, background music, and seamless WhatsApp RSVP experiences.
            </p>

            <div className="text-[11px] text-[#D4AF37]">
              <span>Domain: </span>
              <span className="font-mono text-white/90">srilankaweddinginvites.lk</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-[#FFF9EF] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#samples" className="hover:text-[#D4AF37] transition-colors">
                  Our Designs &amp; Samples
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#D4AF37] transition-colors">
                  Interactive Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#D4AF37] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#D4AF37] transition-colors">
                  Suites &amp; Packages
                </a>
              </li>
              <li>
                <a href="#enquire" className="hover:text-[#D4AF37] transition-colors">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Live Wedding Invitations */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-[#FFF9EF] uppercase tracking-wider">
              Customer Portals
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={getInvitationUrl('roshini-hasaranga')}
                  className="inline-flex items-center gap-1.5 text-[#ECC880] hover:underline"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Roshini &amp; Hasaranga</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
                <p className="text-[10px] text-[#A8988D] pl-5">
                  Church Ceremony &amp; Reception Suite
                </p>
              </li>
              <li className="pt-1 text-[#8C7B71] text-[11px]">
                Additional wedding subfolders are added per couple under our central domain.
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3 text-xs">
            <h4 className="font-display text-sm font-bold text-[#FFF9EF] uppercase tracking-wider">
              Studio Location
            </h4>
            <p className="text-[#B8A79B]">
              Negombo &amp; Colombo, Sri Lanka
            </p>
            <p className="text-[#B8A79B]">
              WhatsApp: <span className="text-[#ECC880]">+94 76 614 8615</span>
            </p>
            <p className="text-[#B8A79B]">
              Email: contact@srilankaweddinginvites.lk
            </p>
            <p className="text-[11px] text-[#A8988D] pt-1">
              Worldwide delivery &bull; GMT+5:30
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#99887C] gap-4">
          <p>
            &copy; {new Date().getFullYear()} Sri Lanka Wedding Invites. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with love in Sri Lanka</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
