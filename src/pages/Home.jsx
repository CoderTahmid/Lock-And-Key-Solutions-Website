import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ClientLogos from '../components/home/ClientLogos';
import OurServicesSection from '../components/home/OurServicesSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import RestrictionChecker from '../components/home/RestrictionChecker';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ConsultationSection from '../components/home/ConsultationSection';
import FaqSection from '../components/home/FaqSection';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Client Brands / Social Proof */}
      <ClientLogos />

      {/* 3. Comprehensive Services Catalog (All 13 Services) */}
      <OurServicesSection />

      {/* 4. How We Solve Meta & Asset Problems */}
      <ServicesSection />

      {/* 5. 4-Step Legal Unban Process */}
      <ProcessSection />

      {/* 5. Interactive Restriction Feasibility Checker Tool */}
      <RestrictionChecker />

      {/* 6. Testimonials & Client Reviews */}
      <TestimonialsSection />

      {/* 7. Free Consultation Booking Section */}
      <ConsultationSection />

      {/* 8. Frequently Asked Questions */}
      <FaqSection />

      {/* 9. Final Pre-Footer CTA Banner */}
      <CtaBanner />
    </div>
  );
}
