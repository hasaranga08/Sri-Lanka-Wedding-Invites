import React from 'react';
import { Film, Music2, MessageSquare, MapPinned, CalendarClock, Link2, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Film,
      title: '3D Video Envelope Unboxing',
      description:
        'A cinematic opening video simulating a luxurious wax-sealed envelope that peels open before guests dive into your wedding story.',
      tag: 'Cinematic Visuals',
    },
    {
      icon: Music2,
      title: 'Background Wedding Song',
      description:
        'Play your chosen romantic melody seamlessly in high fidelity. Includes smart mute/unmute controls that preserve playback position.',
      tag: 'Audio Integration',
    },
    {
      icon: MessageSquare,
      title: 'One-Tap WhatsApp RSVP',
      description:
        'Guests select their attendance and guest count, generating an instant pre-formatted WhatsApp confirmation message directly to your phone.',
      tag: 'Direct Messaging',
    },
    {
      icon: MapPinned,
      title: 'Google Maps Navigation',
      description:
        'Exact GPS links for both church / poruwa and reception venues, ensuring out-of-town and overseas relatives arrive effortlessly.',
      tag: 'Easy Navigation',
    },
    {
      icon: CalendarClock,
      title: 'Live Countdown & Calendar Sync',
      description:
        'An accurate countdown to your auspicious time, plus one-tap calendar export for Apple Calendar, Google Calendar, and Outlook.',
      tag: 'Save The Date',
    },
    {
      icon: Link2,
      title: 'Dedicated Custom URL',
      description:
        'Your invitation is published under your own clean address (srilankaweddinginvites.lk/Couple-Name/) with independent hosting.',
      tag: 'Exclusive Address',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#FFFDF5]">
            <Sparkles className="w-3.5 h-3.5 text-[#B88937]" />
            <span className="font-serif-luxury text-xs font-semibold tracking-wider text-[#8A6818] uppercase">
              Technology Meets Romance
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241C16]">
            Every Feature Crafted for Delight
          </h2>

          <p className="text-base sm:text-lg text-[#615248] font-sans font-light leading-relaxed">
            Designed specifically for smartphone viewing, our digital invitations provide an unmatched guest experience without app installations or complicated passwords.
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#D4AF37]/25 p-8 shadow-xs hover:shadow-md hover:border-[#D4AF37]/60 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFF9E6] to-[#F5E6BF] border border-[#D4AF37]/40 flex items-center justify-center text-[#8C6D1F] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#8C6D1F] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#FFFDF5] border border-[#D4AF37]/30">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#291F18] group-hover:text-[#8C6D1F] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#66574E] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F2ECE1] flex items-center gap-1.5 text-xs font-semibold text-[#8C6D1F]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Included in every custom suite</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
