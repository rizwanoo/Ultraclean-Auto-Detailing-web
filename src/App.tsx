import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkAboutContactPage } from './pages/WorkAboutContactPage';
import { BUSINESS_INFO } from './data/businessData';

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

      {/* Professional Circular Floating WhatsApp Action Icon (Borderless, Round, Luxury Presentation) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center group">
        {/* Sleek contextual badge/tooltip on hover */}
        <div className="hidden sm:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-[#27313B]/90 backdrop-blur-md text-white text-xs font-semibold tracking-wide shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2 animate-pulse" />
          <span>Chat on WhatsApp · 0302 0100070</span>
        </div>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#20ba59] to-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          title="Chat directly on WhatsApp (0302 0100070)"
          aria-label="Direct WhatsApp Consultation with Ultraclean"
        >
          {/* Subtle radar pulse ping */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10 pointer-events-none" />

          {/* Official WhatsApp Vector Icon */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white drop-shadow"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.83.498 3.551 1.365 5.035L2 22l5.127-1.344A9.957 9.957 0 0 0 12.004 22C17.524 22 22 17.52 22 12.004 22 6.48 17.524 2 12.004 2zm0 18.293a8.26 8.26 0 0 1-4.234-1.162l-.304-.18-3.143.824.838-3.064-.198-.315a8.27 8.27 0 0 1-1.259-4.392c0-4.57 3.72-8.29 8.296-8.29 4.575 0 8.294 3.72 8.294 8.29 0 4.574-3.719 8.289-8.294 8.289zm4.55-6.223c-.249-.125-1.474-.727-1.703-.81-.228-.083-.395-.125-.561.125-.166.25-.644.81-.789.977-.146.166-.291.187-.54.062-.25-.125-1.054-.388-2.008-1.238-.742-.662-1.243-1.48-1.389-1.73-.145-.25-.015-.385.11-.509.112-.112.25-.291.374-.437.125-.145.166-.25.25-.415.083-.166.041-.312-.021-.437-.063-.125-.561-1.352-.769-1.851-.203-.487-.409-.42-.561-.428-.146-.008-.312-.01-.478-.01-.166 0-.437.062-.666.312-.229.25-.873.853-.873 2.08 0 1.228.894 2.413 1.019 2.579.125.167 1.76 2.688 4.263 3.769.595.257 1.06.411 1.423.526.598.19 1.142.163 1.572.099.48-.072 1.474-.603 1.682-1.185.208-.582.208-1.081.146-1.185-.063-.104-.229-.166-.479-.291z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
