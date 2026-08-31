import { useState } from 'react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How long does a Facebook Page unban take?',
      a: 'The typical resolution timeframe for Facebook Page unbans ranges between 2 to 7 business days once our legal compliance notices are formally submitted to Meta internal channels.',
    },
    {
      q: 'Can permanently disabled or "Final Decision" pages really be unbanned?',
      a: 'Yes. Automated Meta AI support bots often issue generic "Final Decision" canned responses. Our team bypasses standard support queues and submits formal legal documentation directly to Meta compliance directors, resulting in a 98.4% success rate.',
    },
    {
      q: 'Is your unban process legal and safe for our Facebook brand page?',
      a: '100% legal, compliant, and safe. We do not use illegal hacks, exploits, or automated bot scripts. All representations are conducted under strict international intellectual property and corporate compliance laws.',
    },
    {
      q: 'Do you require our Facebook admin password or account credentials?',
      a: 'No! We will NEVER ask for your personal Facebook password. We only require your Facebook Page URL, Business Manager ID, and a copy of the restriction notice issued by Meta.',
    },
    {
      q: 'What happens if a hacked admin stole our Facebook Page ownership?',
      a: 'We initiate our Corporate Ownership Reclaim Protocol. By submitting corporate registration, trademark proof, and government identification directly to Meta Legal, Meta strips the unauthorized admin and transfers ownership back to you.',
    },
    {
      q: 'How does your consultation and fee structure work?',
      a: 'Our initial consultation and case audit are 100% free. Once we evaluate your restriction feasibility, we provide a clear, transparent resolution agreement.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need to know about our Meta unban process and legal policy representation.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all duration-200"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full px-6 py-5 text-left font-bold text-slate-900 text-base flex items-center justify-between gap-4 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-500">
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openIdx === idx ? 'rotate-180 text-blue-600' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
