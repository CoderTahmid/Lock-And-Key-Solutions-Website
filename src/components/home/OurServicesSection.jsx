import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function OurServicesSection() {
  const context = useOutletContext();
  const openConsultation = context?.openConsultation || (() => {});
  const [activeCategory, setActiveCategory] = useState('all');

  const filterCategories = [
    { id: 'all', name: 'All Services (13)' },
    { id: 'marketing', name: 'Marketing & PR' },
    { id: 'social_security', name: 'Social & Security' },
    { id: 'dev_tech', name: 'Dev & Cloud' },
    { id: 'creative', name: 'Creative & Video' },
    { id: 'consulting', name: 'Commerce & Consulting' },
  ];

  const services = [
    {
      number: '01',
      title: 'Digital Marketing',
      tag: 'Growth & Acquisition',
      group: 'marketing',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      items: [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing',
        'Search Engine Marketing (SEM)',
        'Google Ads Management',
        'Meta Ads Management',
        'TikTok & LinkedIn Advertising',
        'Content Marketing',
        'Influencer Marketing',
        'Performance Marketing',
        'Digital Marketing Strategy',
      ],
    },
    {
      number: '02',
      title: 'Social Media Solutions',
      tag: 'Asset & Account Recovery',
      group: 'social_security',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      items: [
        'Facebook Account Recovery',
        'Instagram Account Recovery',
        'Hacked Account Recovery',
        'Disabled Account Assistance',
        'Locked Account Assistance',
        'Facebook Page Recovery',
        'Business Manager Support',
        'Monetization Issue Assistance',
        'Copyright Dispute Assistance',
        'Trademark Issue Assistance',
        'Content Removal & Restoration Assistance',
        'Meta Business Support',
      ],
    },
    {
      number: '03',
      title: 'Social Media Verification & Brand Protection',
      tag: 'Verification & Defense',
      group: 'social_security',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        'Meta Verified Assistance',
        'Facebook & Instagram Verification',
        'Business Verification Support',
        'Impersonation Report Assistance',
        'Fake Profile/Page Removal Assistance',
        'Brand Identity Protection',
        'Digital Brand Protection',
        'Online Reputation Protection',
      ],
    },
    {
      number: '04',
      title: 'Web Design & Development',
      tag: 'Engineering & Architecture',
      group: 'dev_tech',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      items: [
        'Business Website Development',
        'Corporate Website Development',
        'E-commerce Website Development',
        'WordPress Development',
        'Landing Page Design',
        'Custom Web Application Development',
        'Website Redesign',
        'Website Maintenance',
        'Website Speed Optimization',
        'Website Security',
      ],
    },
    {
      number: '05',
      title: 'Mobile App Development',
      tag: 'iOS & Android Solutions',
      group: 'dev_tech',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        'Android App Development',
        'iOS App Development',
        'Cross-Platform App Development',
        'Business App Development',
        'E-commerce App Development',
        'UI/UX Design',
        'App Maintenance & Support',
      ],
    },
    {
      number: '06',
      title: 'Cybersecurity',
      tag: 'Security & Compliance',
      group: 'social_security',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      items: [
        'Cybersecurity Assessment',
        'Website Security',
        'Vulnerability Assessment',
        'Security Auditing',
        'Malware Detection & Removal',
        'Account Security',
        'Network Security',
        'Firewall Configuration',
        'VPN Setup',
        'Security Monitoring',
        'Incident Response',
        'Cybersecurity Consulting',
      ],
    },
    {
      number: '07',
      title: 'Creative & Design Services',
      tag: 'Visual Identity & UI/UX',
      group: 'creative',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4 4 4 0 014-4h4a4 4 0 014 4 4 4 0 01-4 4H7zM7 7a4 4 0 014-4h4a4 4 0 014 4 4 4 0 01-4 4H7a4 4 0 01-4-4z" />
        </svg>
      ),
      items: [
        'Logo Design',
        'Brand Identity Design',
        'Social Media Creative Design',
        'Banner & Poster Design',
        'Business Card Design',
        'Brochure Design',
        'UI/UX Design',
        'Presentation Design',
        'Marketing Creative Design',
      ],
    },
    {
      number: '08',
      title: 'Video Production & Animation',
      tag: 'Motion & Multimedia',
      group: 'creative',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      items: [
        'Professional Video Editing',
        'YouTube Video Editing',
        'Social Media Video Editing',
        'Promotional Video Production',
        'Motion Graphics',
        '2D Animation',
        '3D Animation',
        'Explainer Videos',
        'Reels & Short-Form Videos',
        'Video Advertising',
      ],
    },
    {
      number: '09',
      title: 'Cloud & IT Solutions',
      tag: 'Infrastructure & DevOps',
      group: 'dev_tech',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      items: [
        'Cloud Migration',
        'Cloud Infrastructure',
        'Cloud Management',
        'AWS Solutions',
        'Microsoft Azure Solutions',
        'Google Cloud Solutions',
        'IT Infrastructure Management',
        'Technical Support',
        'Remote IT Support',
        'Backup & Disaster Recovery',
      ],
    },
    {
      number: '10',
      title: 'Branding & Online Presence',
      tag: 'Authority & Brand Setup',
      group: 'marketing',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      items: [
        'Brand Strategy',
        'Digital Branding',
        'Personal Branding',
        'Corporate Branding',
        'Social Media Branding',
        'Google Business Profile Setup',
        'Facebook Business Page Setup',
        'Instagram Business Setup',
        'E-commerce Branding',
        'Online Reputation Management',
      ],
    },
    {
      number: '11',
      title: 'PR & Media Services',
      tag: 'Public Relations & Press',
      group: 'marketing',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      items: [
        'Public Relations',
        'Digital PR',
        'Media Outreach',
        'Press Release Distribution',
        'Brand Promotion',
        'Online Media Promotion',
        'TV Commercial Production',
        'Promotional Campaigns',
      ],
    },
    {
      number: '12',
      title: 'E-commerce Solutions',
      tag: 'Storefronts & Conversions',
      group: 'consulting',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      items: [
        'E-commerce Website Development',
        'Online Store Setup',
        'Product Listing & Optimization',
        'Payment Gateway Integration',
        'E-commerce SEO',
        'Conversion Rate Optimization',
        'Facebook & Instagram Shop Setup',
        'E-commerce Advertising',
        'Store Management',
      ],
    },
    {
      number: '13',
      title: 'Consulting & Professional Support',
      tag: 'Strategic Advisory',
      group: 'consulting',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      items: [
        'Digital Business Consulting',
        'Technology Consulting',
        'Cybersecurity Consulting',
        'Digital Marketing Consulting',
        'Social Media Consulting',
        'Brand Strategy Consulting',
        'Website Consulting',
        'IT Consulting',
      ],
    },
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter((s) => s.group === activeCategory);

  return (
    <section id="our-services" className="py-24 bg-slate-50/60 border-b border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore our end-to-end suite of digital marketing, account recovery, cybersecurity, custom software engineering, and strategic business solutions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80 shadow-xs'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid (All 13 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.number}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Number, Tag, & Icon */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                      {service.tag}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 group-hover:bg-blue-600 group-hover:text-white text-blue-600 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-4 tracking-tight leading-snug">
                  {service.title}
                </h3>

                {/* Sub-items List */}
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Inquire / Consultation Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  {service.items.length} Offerings Included
                </span>
                <button
                  onClick={openConsultation}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/btn cursor-pointer py-1"
                >
                  <span>Request Service</span>
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight">
              Need a Custom Multi-Service Solution?
            </h3>
            <p className="text-blue-100 text-sm max-w-xl">
              We provide tailored packages combining asset recovery, full-stack development, continuous cybersecurity, and performance marketing.
            </p>
          </div>
          <button
            onClick={openConsultation}
            className="bg-white hover:bg-slate-50 text-blue-600 font-bold text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Speak with an Expert
          </button>
        </div>

      </div>
    </section>
  );
}

