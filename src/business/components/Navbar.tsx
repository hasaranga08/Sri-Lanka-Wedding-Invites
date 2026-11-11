import React, { useState } from 'react';
import { Menu, X, Sparkles, ExternalLink, Heart } from 'lucide-react';
import { getInvitationUrl } from '../../utils/assets';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onOpenDemo) {
      e.preventDefault();
      onOpenDemo();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-gradient-to-br from-[#FFF9E6] to-[#F2DFAC] shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-display text-sm font-bold text-[#8C6D1F] tracking-tighter">SL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-[#2A231F]">
                SRI LANKA
              </span>
              <span className="font-serif-luxury text-xs tracking-[0.25em] text-[#997A15] -mt-1 uppercase">
                Wedding Invites
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-[#4A3E37] hover:text-[#997A15] transition-colors">
              About Us
            </a>
            <a href="#samples" className="text-sm font-medium text-[#4A3E37] hover:text-[#997A15] transition-colors">
              Our Designs
            </a>
            <a href="#features" className="text-sm font-medium text-[#4A3E37] hover:text-[#997A15] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-[#4A3E37] hover:text-[#997A15] transition-colors">
              How It Works
            </a>
            <a href="#packages" className="text-sm font-medium text-[#4A3E37] hover:text-[#997A15] transition-colors">
              Packages
            </a>
            <a href="#enquire" className="text-sm font-medium text-[#4A3E37] hover:text-[#997A15] transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Action: Live Sample Link & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getInvitationUrl('roshini-hasaranga')}
              onClick={handleDemoClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#FFFDF7] text-xs font-semibold text-[#8C6D1F] hover:bg-[#FBF4DE] transition-all shadow-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Live Sample: Roshini &amp; Hasaranga</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="#enquire"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full gold-gradient-bg text-xs font-bold uppercase tracking-wider text-[#1C1407] hover:brightness-105 transition-all shadow-sm"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getInvitationUrl('roshini-hasaranga')}
              onClick={handleDemoClick}
              className="px-2.5 py-1 rounded-full border border-[#D4AF37]/40 bg-[#FFFDF7] text-[11px] font-medium text-[#8C6D1F] flex items-center gap-1 cursor-pointer"
            >
              <span>Demo</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#4A3E37] hover:text-[#997A15] hover:bg-[#F2ECE1] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#D4AF37]/20 bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#3A3029] hover:bg-[#F2ECE1]"
          >
            About Us
          </a>
          <a
            href="#samples"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#3A3029] hover:bg-[#F2ECE1]"
          >
            Our Designs &amp; Samples
          </a>
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#3A3029] hover:bg-[#F2ECE1]"
          >
            Interactive Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#3A3029] hover:bg-[#F2ECE1]"
          >
            How It Works
          </a>
          <a
            href="#packages"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#3A3029] hover:bg-[#F2ECE1]"
          >
            Packages
          </a>
          <a
            href="#enquire"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#3A3029] hover:bg-[#F2ECE1]"
          >
            Contact &amp; Enquiry
          </a>

          <div className="pt-2 border-t border-[#D4AF37]/20 flex flex-col gap-2">
            <a
              href={getInvitationUrl('roshini-hasaranga')}
              onClick={(e) => {
                setIsOpen(false);
                handleDemoClick(e);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[#D4AF37] bg-[#FFF9E6] text-sm font-semibold text-[#8C6D1F] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>View Roshini &amp; Hasaranga Invitation</span>
            </a>
            <a
              href="#enquire"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-full gold-gradient-bg text-sm font-bold uppercase tracking-wider text-[#1C1407]"
            >
              Enquire for Your Wedding
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
