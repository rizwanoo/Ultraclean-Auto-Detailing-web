import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { Phone, MapPin, Youtube, Facebook, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#00C7C7] text-[#27313B] pt-16 pb-12 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Row - Brand Mark & Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#27313B]/15">
          {/* Brand Presentation with Large Original Logo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                <img
                  src="/assets/logo-transparent.png"
                  alt="Ultraclean Auto Detailing Crest"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-2xl text-[#27313B] uppercase tracking-tight leading-none">
                  ULTRACLEAN
                </h4>
                <p className="text-xs uppercase tracking-widest text-[#075BFF] font-bold mt-1">
                  AUTO DETAILING · RAWALPINDI
                </p>
              </div>
            </div>

            <p className="text-sm text-[#27313B]/85 leading-relaxed max-w-md font-normal">
              Specialized automotive detailing, multi-stage paint correction, and 9H nano-ceramic surface coatings engineered to protect your vehicle from heat, road grime, and harsh twin city climates.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#27313B] font-bold pt-1">
              <ShieldCheck className="w-4 h-4 text-[#075BFF]" />
              <span>Official Curbside Pickup & Center-Based Detailing</span>
            </div>
          </div>

          {/* Quick Nav Columns (Open, unboxed) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-widest text-[#27313B] font-bold">Navigation</h5>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-white transition-colors flex items-center gap-2 group cursor-pointer border-none bg-transparent p-0 outline-none"
                >
                  <span className="w-1.5 h-1.5 bg-[#075BFF] rounded-full group-hover:scale-125 transition-transform" />
                  <span className="font-bold text-[#27313B]">Home Overview</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors flex items-center gap-2 group cursor-pointer border-none bg-transparent p-0 outline-none"
                >
                  <span className="w-1.5 h-1.5 bg-[#075BFF] rounded-full group-hover:scale-125 transition-transform" />
                  <span className="font-bold text-[#27313B]">Verified Services & Processes</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('work-about-contact')}
                  className="hover:text-white transition-colors flex items-center gap-2 group cursor-pointer border-none bg-transparent p-0 outline-none"
                >
                  <span className="w-1.5 h-1.5 bg-[#075BFF] rounded-full group-hover:scale-125 transition-transform" />
                  <span className="font-bold text-[#27313B]">Client Portfolio & Studio Story</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleNavClick('work-about-contact');
                    setTimeout(() => {
                      const el = document.getElementById('booking-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 200);
                  }}
                  className="hover:text-white transition-colors flex items-center gap-2 group cursor-pointer border-none bg-transparent p-0 outline-none"
                >
                  <span className="w-1.5 h-1.5 bg-[#075BFF] rounded-full group-hover:scale-125 transition-transform" />
                  <span className="font-bold text-[#27313B]">Online Appointment Request</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Contact & Verified Social */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-widest text-[#27313B] font-bold">Studio Information</h5>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#075BFF] shrink-0 mt-0.5" />
                <span className="text-[#27313B] font-medium">{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#075BFF] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneInternational}`}
                  className="text-[#27313B] hover:text-white hover:underline font-bold transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#075BFF] shrink-0" />
                <span className="text-[#27313B]/90 font-medium">{BUSINESS_INFO.hours}</span>
              </div>
            </div>

            {/* Social channels (Borderless typography-led) */}
            <div className="pt-2 flex items-center gap-6">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-borderless text-xs text-[#27313B] hover:text-white p-0 group"
              >
                <Facebook className="w-4 h-4 text-[#075BFF]" />
                <span className="font-bold">Facebook ({BUSINESS_INFO.facebookFollowers})</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={BUSINESS_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-borderless text-xs text-red-700 hover:text-white p-0 group"
              >
                <Youtube className="w-4 h-4 text-red-700" />
                <span className="font-bold">YouTube</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Clean unboxed legal notices & local search tags) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#27313B]/80 font-medium">
          <p>© {new Date().getFullYear()} Ultraclean Auto Detailing Rawalpindi. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#27313B]/80 font-semibold">
            <span>Rawalpindi</span>
            <span>·</span>
            <span>Gulzar-e-Quaid</span>
            <span>·</span>
            <span>Qadeer Market</span>
            <span>·</span>
            <span>Islamabad</span>
            <span>·</span>
            <span>Wah Cantt</span>
            <span>·</span>
            <span>Taxila</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
