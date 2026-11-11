import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SampleDesigns } from './components/SampleDesigns';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorks } from './components/HowItWorks';
import { PricingPackages } from './components/PricingPackages';
import { CustomerEnquirySection } from './components/CustomerEnquirySection';
import { Footer } from './components/Footer';

interface AppBusinessProps {
  onOpenDemo?: () => void;
}

export default function AppBusiness({ onOpenDemo }: AppBusinessProps) {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2420] flex flex-col font-sans selection:bg-[#D4AF37]/25 selection:text-[#1A1412]">
      <Navbar onOpenDemo={onOpenDemo} />
      <main className="grow">
        <HeroSection onOpenDemo={onOpenDemo} />
        <AboutSection />
        <SampleDesigns onOpenDemo={onOpenDemo} />
        <FeaturesSection />
        <HowItWorks />
        <PricingPackages />
        <CustomerEnquirySection />
      </main>
      <Footer />
    </div>
  );
}
