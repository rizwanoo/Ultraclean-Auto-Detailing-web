import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkAboutContactPage } from './pages/WorkAboutContactPage';
import { BUSINESS_INFO } from './data/businessData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'services') return 'services';
    if (hash === 'work' || hash === 'about' || hash === 'contact' || hash === 'work-about-contact') {
      return 'work-about-contact';
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'services') {
        setCurrentPage('services');
      } else if (
        hash === 'work' ||
        hash === 'about' ||
        hash === 'contact' ||
        hash === 'work-about-contact'
      ) {
        setCurrentPage('work-about-contact');
      } else if (hash === 'home' || hash === '') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#27313B] flex flex-col font-sans relative selection:bg-[#075BFF] selection:text-white">
      {/* Top Navbar with transparent initial state & large logo */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
      />

      {/* Main Content Area (Exactly 3 Complete Pages) */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage setCurrentPage={handlePageChange} />}
        {currentPage === 'services' && <ServicesPage setCurrentPage={handlePageChange} />}
        {currentPage === 'work-about-contact' && (
          <WorkAboutContactPage setCurrentPage={handlePageChange} />
        )}
      </main>

      {/* Footer with verified Qadeer Market location and prominent branding */}
      <Footer setCurrentPage={handlePageChange} />

      {/* Quick Action WhatsApp Floater (Clean bright styling, zero popup) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#075BFF]/30 hover:border-[#075BFF] hover:bg-[#EAF7FF] text-[#075BFF] transition-all duration-300 shadow-[0_4px_20px_rgba(7,91,255,0.15)] flex items-center gap-2.5 group cursor-pointer"
          title="Chat directly on WhatsApp (0302 0100070)"
          aria-label="Direct WhatsApp Consultation"
        >
          <MessageCircle className="w-5 h-5 text-[#075BFF] group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider text-[#27313B] group-hover:text-[#075BFF] transition-colors">
            WhatsApp 0302 0100070
          </span>
        </a>
      </div>
    </div>
  );
}
