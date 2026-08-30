import React from 'react';

export default function ClientLogos() {
  const clients = [
    { name: 'Meta Media Partners', label: 'E-COMMERCE MEDIA' },
    { name: 'Vanguard Growth', label: 'AGENCY PARTNER' },
    { name: 'Apex Social Asset Mgmt', label: 'DIGITAL RIGHTS' },
    { name: 'HyperDrive Commerce', label: 'FB STOREFRONT' },
    { name: 'OmniBrand Global', label: 'VERIFIED BRAND' },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Trusted by 200+ E-Commerce Brands, Digital Agencies & High-Traffic Creators
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md hover:border-blue-100 transition-all duration-200"
            >
              <span className="font-brand font-bold text-slate-800 text-lg tracking-tight">
                {client.name}
              </span>
              <span className="text-[9px] font-semibold text-blue-600 tracking-wider uppercase mt-0.5">
                {client.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
