import React from 'react';
import { PageId } from '../types';
import { PORTFOLIO_DATA, BUSINESS_INFO } from '../data/businessData';
import { BookingForm } from '../components/BookingForm';
import {
  MapPin,
  Phone,
  Youtube,
  Facebook,
  ExternalLink,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

interface WorkAboutContactPageProps {
  setCurrentPage: (page: PageId) => void;
}

export const WorkAboutContactPage: React.FC<WorkAboutContactPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="w-full">
      {/* 1. HERO — FULL-WIDTH BRIGHT AUTOMOTIVE PHOTOGRAPHY (Extends behind navbar) */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/work/VKbiwD0QQCs.jpg"
            alt="Pristine mirror exterior gloss and crystal glass after Ultraclean wash"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle natural daylight gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/35" />
          <div className="absolute inset-0 bg-[#075BFF]/15 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D7F34A] font-extrabold drop-shadow">
              Authentic Archive & Workshop Presence
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-white leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              OUR WORK, ABOUT & CONTACT
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow">
              Explore authentic vehicle projects from our Qadeer Market studio, discover the standards behind Ultraclean, and book your detailing slot directly with our master technicians.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono uppercase text-white/90">
              <a href="#our-work" className="hover:text-[#D7F34A] transition-colors font-bold drop-shadow">
                ↓ 01. Client Work Archive
              </a>
              <span>·</span>
              <a href="#about-ultraclean" className="hover:text-[#D7F34A] transition-colors font-bold drop-shadow">
                ↓ 02. About The Studio
              </a>
              <span>·</span>
              <a href="#booking-section" className="hover:text-[#D7F34A] transition-colors font-bold drop-shadow">
                ↓ 03. Location & Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR WORK — ALTERNATING COLORFUL IMAGE-LED BACKGROUNDS (ICE BLUE #DCEEFF / WARM WHITE #FFFDF7) */}
      <section id="our-work" className="py-24 bg-[#DCEEFF] text-[#27313B] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#27313B]/15">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#075BFF] font-bold">
                Section 01 // Vehicle Results
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#27313B] mt-1">
                Authentic Detailing Archive
              </h2>
            </div>
            <p className="text-xs text-[#27313B]/70 max-w-md">
              Every photograph shown here captures real vehicle projects completed by Ultraclean in Rawalpindi and surrounding regions.
            </p>
          </div>

          {/* Unboxed Asymmetric Layout for Portfolio (NO BOXED CARDS) */}
          <div className="divide-y divide-[#27313B]/15 pt-4">
            {PORTFOLIO_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group"
                >
                  {/* Photo Display (7 columns) */}
                  <div className={`space-y-3 ${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'}`}>
                    <div className="relative aspect-[16/10] overflow-hidden shadow-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-mono text-[#075BFF] uppercase font-bold shadow">
                        {item.badge}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="font-mono text-[#D7F34A] text-[11px] uppercase font-bold">
                          {item.vehicle}
                        </span>
                        <span className="text-white/80 text-[10px] uppercase font-medium">
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Content (5 columns) */}
                  <div className={`space-y-5 ${isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'}`}>
                    <div className="space-y-1">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#075BFF] font-bold">
                        {item.service}
                      </span>
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase text-[#27313B] tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#27313B]/80 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Results unboxed list */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#27313B]/70 block font-semibold">
                        Verified Outcomes:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#27313B]">
                        {item.results.map((res, rIdx) => (
                          <li key={rIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#075BFF] rounded-full shrink-0" />
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a
                        href="#booking-section"
                        className="btn-borderless text-xs text-[#075BFF] hover:text-[#00C7C7] p-0 group"
                      >
                        <span className="font-bold">Request Similar Treatment</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ABOUT ULTRACLEAN — SOFT MINT BACKGROUND (#E5F6EF) */}
      <section id="about-ultraclean" className="py-24 bg-[#E5F6EF] text-[#27313B] hairline-t scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Lead Detailer / Founder Real Photo Feature */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden shadow-2xl group">
                <img
                  src="/assets/work/omF6QwHcrmw.jpg"
                  alt="Lead detailer welcoming clients at Ultraclean Auto Detailing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs font-mono text-[#D7F34A] uppercase tracking-wider block font-bold">
                    FOUNDER & LEAD DETAILER
                  </span>
                  <h4 className="font-heading font-extrabold text-2xl uppercase">
                    DIRECT CLIENT COMMITMENT
                  </h4>
                  <p className="text-xs text-white/90">
                    "Every car is inspected personally. We don't release a vehicle until the finish meets our uncompromising standard."
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-[#27313B]/70 font-mono font-medium">
                <span>0302 0100070</span>
                <span>RAWALPINDI & ISLAMABAD</span>
              </div>
            </div>

            {/* Authentic Brand Narrative (Open, unboxed, bold Barlow typography) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#075BFF] font-bold">
                Section 02 // Studio Philosophy
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#27313B] leading-tight">
                BUILT ON OBSESSION WITH PAINT PRESERVATION
              </h2>

              <p className="text-[#27313B]/90 text-base leading-relaxed">
                Ultraclean Auto Detailing was established to provide the twin cities with an automotive care sanctuary where science replaces guesswork. Located in <strong className="text-[#27313B] font-bold">Qadeer Market, Main Gulzar-e-Quaid, Rawalpindi</strong>, our studio caters to car owners who recognize that clearcoat is delicate and irreversible once burnt by inexperienced buffers.
              </p>

              <p className="text-[#27313B]/80 text-sm leading-relaxed">
                Whether detailing a daily commuter sedan or a luxury Toyota Land Cruiser, our methodology remains identical: measure clearcoat with electronic gauges, strip contaminants with non-acidic chemistry, level micro-scratches with rotary compound, and seal surfaces with authentic 9H quartz coatings.
              </p>

              {/* Three Core Tenets (Clean hairline separated list) */}
              <div className="space-y-4 pt-4 border-t border-[#27313B]/10">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-[#075BFF] font-bold">01</span>
                  <div>
                    <h5 className="text-sm font-bold uppercase text-[#27313B]">Genuine Center & Doorstep Operations</h5>
                    <p className="text-xs text-[#27313B]/70 mt-0.5">
                      We operate a physical studio in Gulzar-e-Quaid and provide professional curbside pickup and doorstep mobile car care across Rawalpindi, Islamabad, Wah Cantt, and Taxila.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-[#00C7C7] font-bold">02</span>
                  <div>
                    <h5 className="text-sm font-bold uppercase text-[#27313B]">No Caustic Chemicals or Dirty Rags</h5>
                    <p className="text-xs text-[#27313B]/70 mt-0.5">
                      Conventional washes cause permanent swirl marring with harsh alkaline powders. We use imported pH-balanced shampoos, two-bucket grit filter systems, and 800 GSM plush microfibers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-[#075BFF] font-bold">03</span>
                  <div>
                    <h5 className="text-sm font-bold uppercase text-[#27313B]">Transparent Public Record</h5>
                    <p className="text-xs text-[#27313B]/70 mt-0.5">
                      With over 6.2K followers on Facebook and regular video demonstrations on YouTube, our detailing work is public, authentic, and verified by real local clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT & APPOINTMENT RESERVATION — ELECTRIC BLUE (#075BFF) WITH WHITE TYPOGRAPHY */}
      <section id="booking-section" className="py-24 bg-[#075BFF] text-white hairline-t scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Info & Google Maps Embed */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#D7F34A] font-extrabold">
                  Section 03 // Direct Communication
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
                  CONTACT ULTRACLEAN
                </h2>
                <p className="text-sm text-white/90 leading-relaxed font-normal">
                  Have questions regarding your vehicle's paintwork, ceramic coating longevity, or booking a curbside pickup? Reach us directly via call, WhatsApp, or through the reservation form.
                </p>
              </div>

              {/* Contact Info (Open, unboxed list) */}
              <div className="space-y-4 text-sm divide-y divide-white/20">
                <div className="pt-2 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D7F34A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/70 text-xs block uppercase font-medium">Studio Location</span>
                    <strong className="text-white font-semibold">{BUSINESS_INFO.address}</strong>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D7F34A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/70 text-xs block uppercase font-medium">Direct Calls & Consultation</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneInternational}`}
                      className="text-white hover:text-[#D7F34A] font-bold text-base transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-3 space-y-2">
                  <span className="text-white/70 text-xs block uppercase font-medium">Official Channels</span>
                  <div className="flex flex-wrap gap-6 pt-1">
                    <a
                      href={BUSINESS_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-borderless text-xs text-white hover:text-[#D7F34A] p-0 group"
                    >
                      <Facebook className="w-4 h-4 text-white" />
                      <span>Facebook ({BUSINESS_INFO.facebookFollowers})</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={BUSINESS_INFO.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-borderless text-xs text-[#D7F34A] hover:text-white p-0 group"
                    >
                      <Youtube className="w-4 h-4 text-[#D7F34A]" />
                      <span>YouTube Channel</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-mono text-white/80 font-semibold">
                  Google Maps Location // Qadeer Market, Gulzar-e-Quaid
                </span>
                <div className="relative aspect-[16/10] overflow-hidden shadow-2xl border border-white/20">
                  <iframe
                    title="Ultraclean Workshop Location"
                    src={BUSINESS_INFO.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-borderless text-xs text-[#D7F34A] hover:text-white p-0 group pt-1"
                >
                  <span>Open in Google Maps App for Turn-by-Turn Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Validated Booking & Inquiry Form */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
