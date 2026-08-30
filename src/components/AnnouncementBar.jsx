import React, { useState } from 'react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-600 text-white text-xs md:text-sm py-2.5 px-4 transition-all duration-300 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 text-center font-medium tracking-wide">
          <span>
            <strong className="font-semibold underline underline-offset-2">Announcement:</strong> Lock & Key Solutions is now accepting urgent Facebook Page recovery cases! Same legal expertise, direct Meta appeals.
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white/80 hover:text-white p-1 transition-colors rounded-full hover:bg-blue-700/50 flex-shrink-0"
          aria-label="Close notification"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
