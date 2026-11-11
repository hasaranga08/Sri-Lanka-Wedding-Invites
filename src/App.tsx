import React, { useState, useEffect } from 'react';
import AppBusiness from './business/AppBusiness';
import RoshiniHasarangaApp from './invitations/roshini-hasaranga/App';
import { Sparkles, ArrowLeft, ExternalLink } from 'lucide-react';
import { getInvitationUrl } from './utils/assets';

export default function App() {
  const [currentView, setCurrentView] = useState<'business' | 'roshini-hasaranga'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        path.includes('roshini') ||
        search.includes('roshini') ||
        hash.includes('roshini')
      ) {
        return 'roshini-hasaranga';
      }
    }
    return 'business';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        path.includes('roshini') ||
        search.includes('roshini') ||
        hash.includes('roshini')
      ) {
        setCurrentView('roshini-hasaranga');
      } else {
        setCurrentView('business');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const openDemo = () => {
    try {
      const demoUrl = getInvitationUrl('roshini-hasaranga');
      window.history.pushState({}, '', demoUrl);
    } catch (e) {
      // In restricted iframe environments, pushState might be restricted
    }
    setCurrentView('roshini-hasaranga');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const openBusiness = () => {
    try {
      const homeUrl = import.meta.env.BASE_URL || '/';
      window.history.pushState({}, '', homeUrl);
    } catch (e) {
      // ignore
    }
    setCurrentView('business');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (currentView === 'roshini-hasaranga') {
    return (
      <div className="relative min-h-screen">
        {/* Quick return bar for in-app preview */}
        <div className="fixed top-3 left-3 z-[9999] print:hidden">
          <button
            onClick={openBusiness}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black text-[#ECC880] border border-[#ECC880]/50 text-xs font-serif-luxury tracking-wider backdrop-blur-md shadow-xl transition-all cursor-pointer hover:scale-105"
            title="Return to Sri Lanka Wedding Invites Business Homepage"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#ECC880]" />
            <span>Sri Lanka Wedding Invites</span>
          </button>
        </div>

        {/* The 100% UNTOUCHED original Roshini & Hasaranga Invitation */}
        <RoshiniHasarangaApp />
      </div>
    );
  }

  return (
    <div className="relative">
      <AppBusiness onOpenDemo={openDemo} />

      {/* Persistent Floating Preview Switcher Badge in AI Studio preview */}
      <aside aria-label="Live Demo Preview Switcher" className="fixed bottom-5 right-5 z-40 print:hidden">
        <button
          onClick={openDemo}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#1E091C] to-[#2E102B] text-[#ECC880] border border-[#ECC880]/60 shadow-2xl hover:scale-105 hover:brightness-110 transition-all cursor-pointer group"
          title="Open Roshini & Hasaranga Invitation Demo"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <Sparkles className="w-4 h-4 text-[#ECC880]" />
          <span className="font-serif-luxury text-xs font-semibold tracking-wider uppercase">
            Preview Invitation: Roshini &amp; Hasaranga
          </span>
        </button>
      </aside>
    </div>
  );
}
