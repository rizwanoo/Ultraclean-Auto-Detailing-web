import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  onOpenBooking
}) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'OUR SERVICES' },
    { id: 'work-about-contact', label: 'OUR WORK, ABOUT & CONTACT' }
  ];

  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFFDF7]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(7,91,255,0.08)] border-b border-[#075BFF]/10 py-3 text-[#27313B]'
          : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-5 sm:py-6 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Logo Zone - Prominently visible directly over hero photo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 sm:gap-4 text-left group cursor-pointer border-none bg-transparent p-0 outline-none"
            aria-label="Ultraclean Auto Detailing Home"
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/logo-transparent.png"
                alt="Ultraclean Auto Detailing Crest"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-heading font-extrabold text-lg sm:text-xl lg:text-2xl tracking-tight uppercase leading-none transition-colors ${
                  scrolled
                    ? 'text-[#27313B] group-hover:text-[#075BFF]'
                    : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:text-[#00C7C7]'
                }`}
              >
                ULTRACLEAN
              </span>
              <span
                className={`text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold mt-1 transition-colors ${
                  scrolled
                    ? 'text-[#075BFF]'
                    : 'text-[#D7F34A] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]'
                }`}
              >
                AUTO DETAILING · RAWALPINDI
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden lg:flex items-center gap-9 text-xs font-semibold tracking-widest ${
              scrolled ? 'text-[#27313B]/80' : 'text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]'
            }`}
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors uppercase cursor-pointer border-none bg-transparent outline-none ${
                    isActive
                      ? scrolled
                        ? 'text-[#075BFF] font-bold'
                        : 'text-[#D7F34A] font-bold'
                      : scrolled
                      ? 'hover:text-[#075BFF] text-[#27313B]'
                      : 'hover:text-[#00C7C7] text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#075BFF] to-[#00C7C7]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary Action Zone - COMPLETELY BORDERLESS CTA */}
          <div className="hidden sm:flex items-center gap-6">
            <a
              href={`tel:${BUSINESS_INFO.phoneInternational}`}
              className={`hidden xl:flex items-center gap-2 text-xs font-semibold transition-colors ${
                scrolled
                  ? 'text-[#27313B] hover:text-[#075BFF]'
                  : 'text-white hover:text-[#00C7C7] drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]'
              }`}
              title="Call Ultraclean Auto Detailing"
            >
              <Phone className="w-3.5 h-3.5 text-[#00C7C7]" />
              <span className="tracking-wider">{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                if (currentPage !== 'work-about-contact') {
                  setCurrentPage('work-about-contact');
                }
                if (onOpenBooking) onOpenBooking();
                setTimeout(() => {
                  const el = document.getElementById('booking-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className={`btn-borderless p-0 group ${
                scrolled
                  ? 'text-[#075BFF] hover:text-[#00C7C7]'
                  : 'text-[#D7F34A] hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
              }`}
            >
              <span>BOOK DETAILING</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneInternational}`}
              className={`p-2 transition-colors ${
                scrolled ? 'text-[#075BFF]' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
              }`}
              aria-label="Direct Call"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors bg-transparent border-none outline-none ${
                scrolled ? 'text-[#27313B]' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Bright Warm White) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF7] border-b border-[#075BFF]/15 px-6 py-8 space-y-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 text-[#27313B]">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm font-bold uppercase tracking-widest py-2 border-none bg-transparent outline-none flex items-center justify-between ${
                    isActive ? 'text-[#075BFF]' : 'text-[#27313B]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-[#00C7C7]">●</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneInternational}`}
              className="w-full py-2 text-left text-xs font-bold uppercase tracking-wider text-[#27313B] hover:text-[#075BFF] flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#075BFF]" />
              <span>CALL {BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                handleNavClick('work-about-contact');
                setTimeout(() => {
                  const el = document.getElementById('booking-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 200);
              }}
              className="btn-borderless text-[#075BFF] hover:text-[#00C7C7] text-left pt-2"
            >
              <span>SCHEDULE DETAILING</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 text-[11px] text-[#27313B]/70 space-y-1 border-t border-[#27313B]/10">
            <p>Qadeer Market, Main Gulzar-e-Quaid, Rawalpindi</p>
            <p>Curbside & Doorstep Pickup Available across Twin Cities</p>
          </div>
        </div>
      )}
    </header>
  );
};
