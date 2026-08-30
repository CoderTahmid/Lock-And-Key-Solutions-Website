import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Marcus Sterling',
      role: 'Founder, E-Commerce Apparel (1.2M Followers)',
      impact: 'FB Page Unbanned in 4 Days',
      content:
        'Our main brand page with 1.2M followers was unpublished without warning right before Q4. Meta support bots gave us automated rejections for 2 months. Lock & Key Solutions escalated our legal proof to Meta legal and got us back live in 4 days.',
      stars: 5,
    },
    {
      name: 'Elena Rostova',
      role: 'Director of Growth, Media Spark Agency',
      impact: 'Business Manager Restored ($250k/mo Ad Spend)',
      content:
        'When our primary Meta Business Manager was disabled, 12 client ad accounts went dark simultaneously. Lock & Key cleared the policy audit flags and unbanned the Business Manager. Unmatched expertise in Meta compliance.',
      stars: 5,
    },
    {
      name: 'David Vance',
      role: 'CEO, Fitness Vault Media',
      impact: 'Hacked Page Admin Recovered',
      content:
        'A rogue admin hijacked ownership of our verified Facebook page. Lock & Key used corporate trademark verification with Meta legal to strip the unauthorized admin and restore primary ownership to us. Saved our company.',
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/70 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            Verified Unban Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            What Our Clients Say About Lock & Key
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Real brands and agencies who reclaimed their high-revenue Facebook assets with our legal advocacy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.stars)].map((_, sIdx) => (
                    <svg key={sIdx} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Metric Badge */}
                <span className="inline-block text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-4">
                  {item.impact}
                </span>

                {/* Testimonial Quote */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
