import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/businessData';
import { BookingForm } from '../components/BookingForm';
import {
  ArrowRight,
  Clock,
  Phone,
  Truck,
  Car,
  ArrowUpRight
} from 'lucide-react';

interface ServicesPageProps {
  setCurrentPage: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage }) => {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | null>(null);

  const handleBookService = (serviceId: string) => {
    setSelectedServiceForModal(serviceId);
    setTimeout(() => {
      const el = document.getElementById('services-booking-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Section background map based on user's exact specification
  const serviceBackgrounds = [
    { bg: 'bg-[#FFFDF7]', text: 'text-[#27313B]', isDark: false }, // 01: Warm White
    { bg: 'bg-[#DCEEFF]', text: 'text-[#27313B]', isDark: false }, // 02: Ice Blue
    { bg: 'bg-[#075BFF]', text: 'text-white', isDark: true },      // 03: Electric Blue
    { bg: 'bg-[#E5F6EF]', text: 'text-[#27313B]', isDark: false }, // 04: Soft Mint
    { bg: 'bg-[#FFFDF7]', text: 'text-[#27313B]', isDark: false }, // 05: Warm White
    { bg: 'bg-[#DCEEFF]', text: 'text-[#27313B]', isDark: false }  // 06: Ice Blue
  ];

  return (
    <div className="w-full">
      {/* 1. HERO — FULL-WIDTH BRIGHT AUTOMOTIVE PHOTOGRAPHY (Extends behind navbar) */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/work/yLH4GfFotq0.jpg"
            alt="Glossy Honda Civic ceramic coating reflection in natural daylight"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle daylight gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/40" />
          <div className="absolute inset-0 bg-[#075BFF]/15 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D7F34A] font-extrabold drop-shadow">
              Verified Workshop & Doorstep Offerings
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-white leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              OUR DETAILING SERVICES
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow">
              Every service is formulated with precision chemistry, rotary machinery, and specialized microfiber to protect and elevate automotive surfaces. Available at our Qadeer Market studio or via curbside pickup in Rawalpindi & Islamabad.
            </p>

            {/* Quick Service Anchor List */}
            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono uppercase text-white/90">
              {SERVICES_DATA.map((service) => (
                <a
                  key={service.id}
                  href={`#service-${service.id}`}
                  className="hover:text-[#D7F34A] transition-colors flex items-center gap-1.5 font-bold drop-shadow"
                >
                  <span className="text-[#00C7C7]">{service.number}.</span>
                  <span>{service.title.split('&')[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED FULL-WIDTH COLOR-BLOCKED SERVICE SECTIONS */}
      <div className="divide-y divide-black/5">
        {SERVICES_DATA.map((service, index) => {
          const config = serviceBackgrounds[index] || serviceBackgrounds[0];
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={`service-${service.id}`}
              className={`py-24 relative scroll-mt-24 ${config.bg} ${config.text}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 2-Column Split Composition (Dynamic Alternation) */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Text Column (6 cols) */}
                  <div className={`space-y-6 ${isEven ? 'lg:col-span-6' : 'lg:col-span-6 lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-sm font-bold px-2.5 py-0.5 ${
                          config.isDark ? 'bg-white text-[#075BFF]' : 'bg-[#075BFF] text-white'
                        }`}
                      >
                        SERVICE // {service.number}
                      </span>
                      <span className={`w-12 h-px ${config.isDark ? 'bg-white/30' : 'bg-black/20'}`} />
                      <span
                        className={`text-xs font-mono uppercase font-bold flex items-center gap-1 ${
                          config.isDark ? 'text-[#D7F34A]' : 'text-[#075BFF]'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>{service.duration}</span>
                      </span>
                    </div>

                    <h2
                      className={`font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-tight ${
                        config.isDark ? 'text-white' : 'text-[#27313B]'
                      }`}
                    >
                      {service.title}
                    </h2>

                    <p
                      className={`text-base font-semibold leading-relaxed ${
                        config.isDark ? 'text-[#D7F34A]' : 'text-[#075BFF]'
                      }`}
                    >
                      {service.tagline}
                    </p>

                    <p
                      className={`text-sm leading-relaxed ${
                        config.isDark ? 'text-white/85' : 'text-[#27313B]/80'
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Operational Highlights */}
                    <div className="space-y-3 pt-2">
                      <span
                        className={`text-xs uppercase font-mono tracking-wider block font-bold ${
                          config.isDark ? 'text-white/70' : 'text-[#27313B]/70'
                        }`}
                      >
                        Technical Execution Standards:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {service.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5">
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${
                                config.isDark ? 'bg-[#D7F34A]' : 'bg-[#075BFF]'
                              }`}
                            />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Target Vehicle Type */}
                    <div
                      className={`pt-2 text-xs flex items-center gap-2 ${
                        config.isDark ? 'text-white/80' : 'text-[#27313B]/70'
                      }`}
                    >
                      <Car
                        className={`w-4 h-4 shrink-0 ${
                          config.isDark ? 'text-[#D7F34A]' : 'text-[#075BFF]'
                        }`}
                      />
                      <span>
                        <strong className={config.isDark ? 'text-white' : 'text-[#27313B]'}>
                          Recommended For:{' '}
                        </strong>
                        {service.bestFor}
                      </span>
                    </div>

                    {/* BORDERLESS Action CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-8">
                      <button
                        onClick={() => handleBookService(service.id)}
                        className={`btn-borderless text-sm p-0 group ${
                          config.isDark
                            ? 'text-[#D7F34A] hover:text-white'
                            : 'text-[#075BFF] hover:text-[#00C7C7]'
                        }`}
                      >
                        <span>Book This Treatment</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </button>

                      <a
                        href={`tel:${BUSINESS_INFO.phoneInternational}`}
                        className={`btn-borderless text-sm p-0 group ${
                          config.isDark
                            ? 'text-white hover:text-[#D7F34A]'
                            : 'text-[#27313B] hover:text-[#075BFF]'
                        }`}
                      >
                        <Phone className="w-4 h-4" />
                        <span>Inquire: {BUSINESS_INFO.phone}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Imagery Column (6 cols) */}
                  <div className={`space-y-3 ${isEven ? 'lg:col-span-6' : 'lg:col-span-6 lg:order-1'}`}>
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden shadow-2xl group">
                      <img
                        src={service.image}
                        alt={service.altText}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Technical Badge */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="font-mono text-[10px] tracking-wider text-[#D7F34A] uppercase bg-black/60 backdrop-blur-sm px-2.5 py-1 font-bold">
                          {service.number} // AUTHENTIC ULTRACLEAN DETAILING
                        </span>
                        <span className="text-white/90 text-[10px] uppercase font-semibold">
                          RAWALPINDI FACILITY
                        </span>
                      </div>
                    </div>

                    <p
                      className={`text-[11px] font-mono tracking-wide ${
                        config.isDark ? 'text-white/70' : 'text-[#27313B]/70'
                      }`}
                    >
                      {service.altText}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. CURBSIDE PICKUP PROCESS (SOFT MINT #E5F6EF) */}
      <section className="py-24 bg-[#E5F6EF] text-[#27313B] hairline-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#075BFF] font-bold flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#075BFF]" />
                <span>Verified Service Specialty</span>
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#27313B] leading-tight">
                HOW CURBSIDE PICKUP OPERATES
              </h2>
              <p className="text-sm text-[#27313B]/80 leading-relaxed font-normal">
                As advertised on our official Facebook page, we offer a dedicated curbside pickup logistics program for car owners in Rawalpindi and Islamabad who want studio-grade detailing without taking time off work.
              </p>

              {/* 3-Step Process */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 pb-4 border-b border-[#27313B]/10">
                  <span className="font-mono text-lg font-bold text-[#075BFF] w-6 shrink-0">01</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#27313B] uppercase tracking-wider">
                      Scheduled Driveway Pickup
                    </h4>
                    <p className="text-xs text-[#27313B]/70 mt-0.5">
                      Our insured team arrives at your home or office address in the twin cities at your appointed time and conducts a digital walk-around inspection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-[#27313B]/10">
                  <span className="font-mono text-lg font-bold text-[#00C7C7] w-6 shrink-0">02</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#27313B] uppercase tracking-wider">
                      Studio Detailing & Paint Curing
                    </h4>
                    <p className="text-xs text-[#27313B]/70 mt-0.5">
                      Your vehicle is transported safely to our Qadeer Market facility in Gulzar-e-Quaid where all multi-stage correction, ceramic curing, or interior extraction is performed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-lg font-bold text-[#075BFF] w-6 shrink-0">03</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#27313B] uppercase tracking-wider">
                      Pristine Curbside Return
                    </h4>
                    <p className="text-xs text-[#27313B]/70 mt-0.5">
                      Upon final quality inspection, we return your sanitized, mirror-finish vehicle directly to your driveway, ready for immediate driving.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-video overflow-hidden shadow-2xl">
                <img
                  src="/assets/work/Orq9mhFH60I.jpg"
                  alt="Toyota Prado receiving ceramic treatment inside Ultraclean workshop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="font-mono text-[#D7F34A] block uppercase text-[10px] font-bold">
                    Workshop Bay // Qadeer Market, Gulzar-e-Quaid
                  </span>
                  <span className="font-bold text-sm">Toyota Prado Ceramic Coating & Curbside Prep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA & BOOKING SECTION — VIBRANT AQUA BACKGROUND (#00C7C7) */}
      <section id="services-booking-section" className="py-24 bg-[#00C7C7] text-[#27313B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm
            initialServiceId={selectedServiceForModal || undefined}
            onSuccess={() => {}}
          />
        </div>
      </section>
    </div>
  );
};
