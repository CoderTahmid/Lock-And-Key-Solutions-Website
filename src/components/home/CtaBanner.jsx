import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function CtaBanner() {
  const context = useOutletContext();
  const openConsultation = context?.openConsultation || (() => {});

  return (
    <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to Unban Your Facebook Page & Reclaim Business Revenue?
        </h2>
        <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto">
          Get in touch with Lock & Key Solutions today. Our compliance specialists will audit your restriction notice within 2 hours.
        </p>

        <div className="pt-4">
          <button
            onClick={openConsultation}
            className="bg-white hover:bg-blue-50 text-blue-700 font-bold text-base px-9 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Schedule Free Case Audit Now</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
