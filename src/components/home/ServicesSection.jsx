import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function ServicesSection() {
  const context = useOutletContext();
  const openConsultation = context?.openConsultation || (() => {});

  const services = [
    {
      title: 'Facebook Page Ban Recovery',
      tagline: 'Permanent Unbans & Unpublished Pages',
      description:
        'We submit formal legal compliance notices directly to Meta internal teams to unban permanently disabled, unpublished, or restricted Facebook business pages.',
      features: [
        'Direct Meta Compliance Advocacy',
        'Overturn "Final Decision" Restrictions',
        'Restore Monetization & Organic Reach',
      ],
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Business Manager & Ad Clearance',
      tagline: 'Disabled BM & Ad Accounts',
      description:
        'Clear disabled Meta Business Managers, unfreeze ad accounts, and recover pixel tracking assets blocked by automated AI policy false flags.',
      features: [
        'Unban Disabled Business Managers',
        'Ad Account Restriction Resolution',
        'Pixel & Catalog Data Preservation',
      ],
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Hacked Admin & Ownership Recovery',
      tagline: 'Asset Theft & Hijacked Pages',
      description:
        'If an admin was removed, your account was hacked, or a business partner illegally took over your Facebook page, we legally verify corporate ownership with Meta.',
      features: [
        'Legal Corporate ID Verification',
        'Remove Unauthorized Admins',
        'Reclaim Primary Admin Control',
      ],
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Meta Policy Audit & Safeguard',
      tagline: 'Pre-emptive Compliance Shield',
      description:
        'Deep audit of your page content, advertising history, and landing pages to fix hidden policy triggers before Meta AI bots trigger account shutdowns.',
      features: [
        'Community Standards Deep Audit',
        'Ad Copy & Landing Page Review',
        'Ongoing Meta Policy Monitoring',
      ],
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 border-b border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            How We Solve Your Facebook Page & Asset Problems
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Meta's automated bots wrongfully restrict thousands of legitimate business pages daily. We navigate the legal and policy frameworks to get your assets unbanned.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center text-blue-600 group-hover:text-white">
                    {service.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                    {service.tagline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={openConsultation}
                  className="w-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 font-medium text-sm py-3 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <span>Request Recovery Consultation</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
