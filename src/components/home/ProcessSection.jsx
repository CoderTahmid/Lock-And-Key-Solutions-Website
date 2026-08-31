import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Free Case Audit & Submission',
      description:
        'Submit your restricted Facebook Page URL and restriction notices. Our compliance specialists analyze the root cause within 2 hours.',
    },
    {
      number: '02',
      title: 'Legal Strategy & Evidence Drafting',
      description:
        'We compile corporate proof, trademark documentation, and legal policy briefs proving your business page operates in full compliance.',
    },
    {
      number: '03',
      title: 'Direct Meta Compliance Filing',
      description:
        'Our legal advocacy team files direct internal appeals to Meta policy directors, bypassing generic automated support bot queues.',
    },
    {
      number: '04',
      title: 'Page Restored & Shielded',
      description:
        'Your page is officially unbanned, organic reach & monetization are restored, and protective compliance guidelines are put in place.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            Proven Legal Appeal Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our 4-Step Facebook Unban Process
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No secret hacks. We use legitimate legal channels and direct Meta policy representation to resolve page restrictions permanently.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 rounded-2xl p-8 border border-slate-200/60 hover:bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 relative group"
            >
              <div className="text-5xl font-black font-brand text-blue-600/20 group-hover:text-blue-600 transition-colors duration-300 mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
