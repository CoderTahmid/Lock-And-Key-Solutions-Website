import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ onOpenConsultation }) {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 text-slate-600 font-sans pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          
          {/* Column 1: Brand Info & Addresses (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="font-brand font-bold text-2xl text-slate-900 tracking-tight">
                Lock & Key<span className="text-xs align-top font-sans text-slate-500 font-normal ml-0.5">™</span>
              </span>
            </Link>

            {/* Trading Name */}
            <p className="text-sm text-slate-600 font-medium">
              Lock and Key Solutions LTD trading as Lock & Key.
            </p>

            {/* Address Details */}
            <div className="space-y-2.5 text-xs md:text-sm text-slate-500 leading-relaxed max-w-md pt-1">
              <p>
                <strong className="font-medium text-slate-700">Office address:</strong> Plexal, Here East, 14 East Bay Lane, London, UK, E15 2GW.
              </p>
              <p>
                <strong className="font-medium text-slate-700">Registered address:</strong> 167-169 Great Portland Street, 5th Floor, London, UK, W1W 5PF.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 text-base tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition-colors inline-block">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-600 transition-colors inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600 transition-colors inline-block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Main Pages */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 text-base tracking-tight">
              Main Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-blue-600 transition-colors inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-blue-600 transition-colors inline-block">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-blue-600 transition-colors inline-block">
                  Case Studies
                </Link>
              </li>
              <li>
                <button 
                  onClick={onOpenConsultation}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  Meta Policy Audit
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow us */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 text-base tracking-tight">
              Follow us
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-blue-600 transition-colors group"
                >
                  {/* LinkedIn Icon */}
                  <span className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/>
                    </svg>
                  </span>
                  <span className="font-medium text-slate-700 group-hover:text-blue-600">Linkedin</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-blue-600 transition-colors group"
                >
                  {/* Facebook Icon */}
                  <span className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.61.76-1.61 1.54V12h2.72l-.43 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8z"/>
                    </svg>
                  </span>
                  <span className="font-medium text-slate-700 group-hover:text-blue-600">Facebook</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Notice & Copyright */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Lock and Key Solutions LTD. All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right leading-normal">
            Disclaimer: Lock and Key Solutions LTD is an independent policy & account recovery legal consultancy. We are not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc. Facebook® is a registered trademark of Meta Platforms, Inc.
          </p>
        </div>

      </div>
    </footer>
  );
}
