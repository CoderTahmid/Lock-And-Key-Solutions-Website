import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import Home from './pages/Home';

// Main Layout Component
function MainLayout() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Header & Navbar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Outlet for Page Content (Nothing between Navbar & Footer) */}
      <main className="flex-1">
        <Outlet context={{ openConsultation: () => setIsConsultationOpen(true) }} />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Consultation Request Popup Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home Route */}
          <Route index element={<Home />} />

          {/* Fallback route pointing to Home for now until additional pages are added */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
