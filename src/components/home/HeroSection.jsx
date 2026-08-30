import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HeroSection() {
  const context = useOutletContext();
  const openConsultation = context?.openConsultation || (() => {});

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/20 py-20 md:py-28 border-b border-slate-100">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      {/* Decorative Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.12]">
            Frustrated with Meta? We <span className="font-brand italic text-blue-600 font-semibold">Reclaim</span> Your Facebook Pages & Accounts.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto pt-2">
            Whether your page was permanently disabled, unpublished, or blocked for months, Lock & Key Solutions handles direct legal communications with Meta compliance teams to restore your business assets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={openConsultation}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 text-base"
            >
              <span>Book Free Consultation</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <a
              href="#checker"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-4 rounded-full border border-slate-200 shadow-sm transition-all duration-200 text-center text-base"
            >
              Check Unban Feasibility
            </a>
          </div>

          {/* Key Metrics Strip */}
          <div className="pt-14 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-slate-200/80 mt-12 text-slate-900">
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">500+</p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Facebook Pages Unbanned</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">98.4%</p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Successful Appeal Rate</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">2-7 Days</p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Average Resolution Time</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">100%</p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Legal & Confidential</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
