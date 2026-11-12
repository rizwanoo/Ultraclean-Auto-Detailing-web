import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES_DATA, PORTFOLIO_DATA } from '../data/businessData';
import { InteractiveBeforeAfter } from '../components/InteractiveBeforeAfter';
import { getSectionTheme } from '../utils/sectionThemes';
import {
  ArrowRight,
  Phone,
  Sparkles,
  MapPin,
  ExternalLink,
  Check,
  Truck,
  ArrowUpRight
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  // Dynamically resolved section themes from the palette
  const brandIntroTheme = getSectionTheme('ice-blue');
  const servicesTheme = getSectionTheme('vibrant-aqua');
  const workTheme = getSectionTheme('warm-white');
  const trustTheme = getSectionTheme('electric-blue');
  const beforeAfterTheme = getSectionTheme('soft-mint');
  const mapsTheme = getSectionTheme('ice-blue');
  const finalCtaTheme = getSectionTheme('electric-blue');

  return (
    <div className="w-full">
      {/* 1. HERO — FULL-WIDTH BRIGHT CINEMATIC AUTOMOTIVE PHOTOGRAPHY (Extends behind navbar) */}
      <section className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Full-bleed Daytime Supercar Background visible directly behind the navbar */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero_automotive_bright.jpg"
            alt="Glossy electric blue supercar reflecting natural daylight with crisp water beads"
            className="w-full h-full object-cover object-center scale-100 sm:scale-105 transition-transform duration-1000"
          />
          {/* Balanced gradient: preserves natural car colors while ensuring high text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent sm:to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </div>

        {/* Content Container (Open, unboxed, bold Barlow typography) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            {/* Main Headline - Barlow ExtraBold 800 in White & Vibrant Aqua */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.93] drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
              YOUR CAR.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C7C7] via-[#D7F34A] to-[#00C7C7]">
                OUR OBSESSION
              </span><br />
              <span className="text-white">
                WITH PERFECTION.
              </span>
            </h1>

            {/* Supporting Message */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Professional auto detailing designed to bring out the best in every vehicle. Experience a cleaner finish and a fresh new look with Ultraclean Auto Detailing.
            </p>

            {/* COMPLETELY BORDERLESS CTA BUTTONS */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <button
                onClick={() => {
                  setCurrentPage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-borderless text-base text-[#D7F34A] hover:text-white p-0 group drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                <span className="tracking-widest">EXPLORE OUR SERVICES</span>
                <ArrowRight className="w-5 h-5 text-[#00C7C7] group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneInternational}`}
                className="btn-borderless text-base text-white hover:text-[#00C7C7] p-0 group drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                <Phone className="w-4 h-4 text-[#00C7C7]" />
                <span className="tracking-widest">CALL {BUSINESS_INFO.phone}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Verified Trust Strip under hero */}
            <div className="pt-8 sm:pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 text-xs">
              <div>
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white block drop-shadow">
                  6.2K+
                </span>
                <span className="text-white/80 uppercase tracking-wider text-[11px] font-semibold">
                  Facebook Community
                </span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#00C7C7] block drop-shadow">
                  9H Quartz
                </span>
                <span className="text-white/80 uppercase tracking-wider text-[11px] font-semibold">
                  Ceramic Armor
                </span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#D7F34A] block drop-shadow">
                  Seats Out
                </span>
                <span className="text-white/80 uppercase tracking-wider text-[11px] font-semibold">
                  Deep Interior Renewal
                </span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#00C7C7] block drop-shadow">
                  Curbside
                </span>
                <span className="text-white/80 uppercase tracking-wider text-[11px] font-semibold">
                  Doorstep Pickup
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION — DYNAMIC ICE BLUE SECTION (#DCEEFF) */}
      <section className={`relative py-24 ${brandIntroTheme.bgClass} ${brandIntroTheme.textClass} hairline-t hairline-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Prominent Large Transparent Logo Mark */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
                <div className="absolute inset-0 bg-[#075BFF]/15 blur-3xl rounded-full" />
                <img
                  src="/assets/logo-transparent.png"
                  alt="Ultraclean Original Logo Crest"
                  className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_8px_30px_rgba(7,91,255,0.25)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Authentic Brand Narrative & Purpose */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className={`text-xs uppercase tracking-widest ${brandIntroTheme.accentClass} font-bold`}>
                  Authentic Automotive Heritage
                </span>
                <h2 className={`font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight ${brandIntroTheme.headingClass} leading-tight`}>
                  ENGINEERED AUTOMOTIVE CARE IN RAWALPINDI
                </h2>
              </div>

              <p className={`${brandIntroTheme.subtextClass} text-base sm:text-lg leading-relaxed font-normal`}>
                Operating directly from Qadeer Market, Main Gulzar-e-Quaid, Rawalpindi, <strong className="font-bold">Ultraclean Auto Detailing</strong> was founded with a singular conviction: vehicles in Pakistan deserve meticulous, defect-free detailing without harmful shortcuts.
              </p>

              <p className={`${brandIntroTheme.subtextClass} text-sm leading-relaxed`}>
                Every vehicle that enters our studio or is picked up through our curbside doorstep program undergoes rigorous multi-step inspection. We reject harsh laundry detergents and abrasive cloths that leave swirl webs. Instead, we employ rotary compounding, precision pH-neutral foam baths, commercial steam sanitization, and 9H SiO2 ceramic coatings.
              </p>

              {/* Core Pillars (Open, unboxed list) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#075BFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block uppercase">Zero Hologram Compounding</span>
                    <span className="opacity-75">Micro-abrasive defect leveling without swirl hazing</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#075BFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block uppercase">Full Seats-Out Extraction</span>
                    <span className="opacity-75">Unbolted seat frames for authentic deep floor sanitizing</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#075BFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block uppercase">Curbside Pickup Service</span>
                    <span className="opacity-75">Doorstep vehicle logistics across Rawalpindi & Islamabad</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#075BFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block uppercase">9H Chemical & UV Shield</span>
                    <span className="opacity-75">SiO2 quartz molecular bonding for extreme water beading</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED DETAILING SERVICES — DYNAMIC VIBRANT AQUA SECTION (#00C7C7) */}
      <section className={`py-24 ${servicesTheme.bgClass} ${servicesTheme.textClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b ${servicesTheme.dividerClass}`}>
            <div>
              <span className="text-xs uppercase tracking-widest text-white font-extrabold">
                Studio & Mobile Capabilities
              </span>
              <h2 className={`font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight ${servicesTheme.headingClass} mt-1`}>
                Specialized Detailing Services
              </h2>
            </div>

            <button
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`btn-borderless text-sm ${servicesTheme.ctaClass} p-0 group`}
            >
              <span className="font-bold">View All 6 Verified Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Asymmetrical Editorial Service Showcase (NO CARDS / NO BOXES) */}
          <div className={`divide-y ${servicesTheme.dividerClass}`}>
            {SERVICES_DATA.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group"
              >
                {/* Service Index & Title */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-white bg-[#075BFF] px-2.5 py-0.5">
                      {service.number}
                    </span>
                    <span className="w-8 h-px bg-[#27313B]/30" />
                    <span className="text-xs font-mono uppercase text-[#27313B] font-bold">
                      {service.duration}
                    </span>
                  </div>

                  <h3 className={`font-heading font-extrabold text-2xl sm:text-3xl ${servicesTheme.headingClass} uppercase tracking-tight group-hover:text-white transition-colors`}>
                    {service.title}
                  </h3>

                  <p className="text-sm text-white font-semibold leading-relaxed">
                    {service.tagline}
                  </p>

                  <p className={`text-xs ${servicesTheme.subtextClass} leading-relaxed`}>
                    {service.description.slice(0, 160)}...
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setCurrentPage('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`btn-borderless text-xs ${servicesTheme.ctaClass} p-0 group`}
                    >
                      <span className="font-bold">Explore Technical Process</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Service Authentic Visual (Unboxed, pure aspect ratio) */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-video overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.altText}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="font-mono text-[11px] tracking-wider text-[#D7F34A] uppercase font-bold">
                        {service.bestFor}
                      </span>
                      <span className="text-white/90 text-[10px] uppercase font-medium">
                        Ultraclean Detailing Center
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED WORK — DYNAMIC WARM WHITE SECTION (#FFFDF7) */}
      <section className={`py-24 ${workTheme.bgClass} ${workTheme.textClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b ${workTheme.dividerClass}`}>
            <div>
              <span className={`text-xs uppercase tracking-widest ${workTheme.accentClass} font-bold`}>
                Customer Vehicle Archive
              </span>
              <h2 className={`font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight ${workTheme.headingClass} mt-1`}>
                Genuine Detailing Transformations
              </h2>
            </div>
            <p className={`text-xs ${workTheme.subtextClass} max-w-sm`}>
              Real cars photographed in our Qadeer Market studio and twin cities client residences. Zero stock photography.
            </p>
          </div>

          {/* Asymmetrical Gallery Arrangement (NO BOXES / NO CARDS) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
            {/* Big Feature Left - Honda Civic Ruby Red Ceramic Coating */}
            <div className="md:col-span-7 space-y-4">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden shadow-xl group">
                <img
                  src={PORTFOLIO_DATA[0].image}
                  alt={PORTFOLIO_DATA[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-mono text-[#075BFF] font-bold uppercase shadow">
                  {PORTFOLIO_DATA[0].badge}
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-xs font-mono text-[#D7F34A] uppercase tracking-wider block font-bold">
                    {PORTFOLIO_DATA[0].vehicle}
                  </span>
                  <h4 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase">
                    {PORTFOLIO_DATA[0].title}
                  </h4>
                  <p className="text-xs text-white/90 max-w-lg">
                    {PORTFOLIO_DATA[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Split Stack Right - Technician Polishing & Prado SUV */}
            <div className="md:col-span-5 space-y-8">
              {/* Technician Rotary Buffing */}
              <div className="space-y-3">
                <div className="relative aspect-video overflow-hidden shadow-lg group">
                  <img
                    src={PORTFOLIO_DATA[2].image}
                    alt={PORTFOLIO_DATA[2].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono text-[#00C7C7] uppercase block font-bold">
                      {PORTFOLIO_DATA[2].badge}
                    </span>
                    <h5 className="font-heading font-bold text-lg uppercase">
                      {PORTFOLIO_DATA[2].title}
                    </h5>
                  </div>
                </div>
                <p className={`text-xs ${workTheme.subtextClass}`}>
                  {PORTFOLIO_DATA[2].description}
                </p>
              </div>

              {/* Toyota Prado Studio View */}
              <div className="space-y-3">
                <div className="relative aspect-video overflow-hidden shadow-lg group">
                  <img
                    src={PORTFOLIO_DATA[3].image}
                    alt={PORTFOLIO_DATA[3].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono text-[#00C7C7] uppercase block font-bold">
                      {PORTFOLIO_DATA[3].badge}
                    </span>
                    <h5 className="font-heading font-bold text-lg uppercase">
                      {PORTFOLIO_DATA[3].title}
                    </h5>
                  </div>
                </div>
                <p className={`text-xs ${workTheme.subtextClass}`}>
                  {PORTFOLIO_DATA[3].description}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-12 text-center">
            <button
              onClick={() => {
                setCurrentPage('work-about-contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`btn-borderless text-sm ${workTheme.ctaClass} p-0 group`}
            >
              <span>Explore Complete Gallery & Studio Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. BRAND STORYTELLING — DYNAMIC ELECTRIC BLUE SECTION (#075BFF) */}
      <section className={`py-24 ${trustTheme.bgClass} ${trustTheme.textClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className={`text-xs uppercase tracking-widest ${trustTheme.accentClass} font-extrabold`}>
                Verified Twin Cities Reputation
              </span>
              <h2 className={`font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight ${trustTheme.headingClass} leading-tight`}>
                TRUSTED BY OVER 6.2K CAR OWNERS
              </h2>
              <p className={`text-sm ${trustTheme.subtextClass} leading-relaxed font-normal`}>
                We believe in total transparency. Our daily progress, before/after videos, and paint correction finishes are documented publicly on Facebook and YouTube for automotive enthusiasts across Rawalpindi and Islamabad to inspect.
              </p>

              <div className="pt-4 flex flex-wrap gap-8">
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-borderless ${trustTheme.ctaClass} p-0 group`}
                >
                  <span className="font-bold">Visit Facebook Page</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={BUSINESS_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-borderless ${trustTheme.ctaClass} p-0 group`}
                >
                  <span className="font-bold">YouTube Channel</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Metrics List (Open, unboxed, clean divider lines) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              <div className="space-y-6 pt-4 sm:pt-0 sm:pr-6">
                <div>
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl text-white block">
                    6.2K+
                  </span>
                  <span className={`text-xs uppercase font-bold ${trustTheme.accentClass} tracking-wider block mt-1`}>
                    Official Facebook Followers
                  </span>
                  <p className="text-xs text-white/80 mt-2">
                    Verified organic community tracking our real car transformations and detailing tips.
                  </p>
                </div>

                <div>
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl text-white block">
                    100%
                  </span>
                  <span className={`text-xs uppercase font-bold ${trustTheme.accentClass} tracking-wider block mt-1`}>
                    Authentic Craftsmanship
                  </span>
                  <p className="text-xs text-white/80 mt-2">
                    Executed exclusively by trained technicians with specialized rotary tools and clean microfiber.
                  </p>
                </div>
              </div>

              <div className="space-y-6 pt-4 sm:pt-0 sm:pl-6">
                <div>
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl text-white block">
                    Twin Cities
                  </span>
                  <span className={`text-xs uppercase font-bold ${trustTheme.accentClass} tracking-wider block mt-1`}>
                    Coverage Area
                  </span>
                  <p className="text-xs text-white/80 mt-2">
                    Providing pickup and doorstep operations throughout Rawalpindi, Islamabad, Wah, and Taxila.
                  </p>
                </div>

                <div>
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl text-white block">
                    0302 0100070
                  </span>
                  <span className={`text-xs uppercase font-bold ${trustTheme.accentClass} tracking-wider block mt-1`}>
                    Direct Master Line
                  </span>
                  <p className="text-xs text-white/80 mt-2">
                    Instant phone and WhatsApp consultation with our lead detailing specialist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BEFORE-AND-AFTER SHOWCASE — DYNAMIC SOFT MINT SECTION (#E5F6EF) */}
      <section className={`py-24 ${beforeAfterTheme.bgClass} hairline-t hairline-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveBeforeAfter
            beforeImage="/assets/work/yU9umWIxfkg.jpg"
            afterImage="/assets/work/yLH4GfFotq0.jpg"
            beforeLabel="PRE-DETAILING // SEATS REMOVAL & FLOOR PAN EXTRACTION"
            afterLabel="POST-TREATMENT // 9H CERAMIC GLASS MIRROR REFLECTION"
          />
        </div>
      </section>

      {/* 7. GOOGLE MAPS LOCATION & LOCAL PRESENCE — DYNAMIC ICE BLUE SECTION (#DCEEFF) */}
      <section className={`py-24 ${mapsTheme.bgClass} ${mapsTheme.textClass} hairline-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Address Details */}
            <div className="lg:col-span-5 space-y-6">
              <span className={`text-xs uppercase tracking-widest ${mapsTheme.accentClass} font-bold`}>
                Physical Detailing Center
              </span>
              <h2 className={`font-heading font-extrabold text-3xl sm:text-4xl uppercase tracking-tight ${mapsTheme.headingClass} leading-tight`}>
                VISIT OUR WORKSHOP IN GULZAR-E-QUAID
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#075BFF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Workshop Address:</strong>
                    <span>{BUSINESS_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-[#075BFF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Curbside Pickup Service:</strong>
                    <span className="opacity-80">We pick up your car anywhere in Rawalpindi & Islamabad, detail it, and return it safely to your driveway.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-8">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-borderless text-sm ${mapsTheme.ctaClass} p-0 group`}
                >
                  <MapPin className="w-4 h-4 text-[#075BFF]" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneInternational}`}
                  className={`btn-borderless text-sm ${mapsTheme.secondaryCtaClass} p-0 group`}
                >
                  <Phone className="w-4 h-4 text-[#075BFF]" />
                  <span>Call 0302 0100070</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Interactive Google Map Embed */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden shadow-xl border border-[#075BFF]/15">
                <iframe
                  title="Ultraclean Auto Detailing Location Map"
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
              <div className="flex justify-between items-center text-[11px] opacity-70 pt-2 font-medium">
                <span>Qadeer Market, Main Gulzar-e-Quaid, Rawalpindi</span>
                <span>Open 7 Days: 9:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA — DYNAMIC ELECTRIC BLUE SECTION (#075BFF) */}
      <section className={`py-24 ${finalCtaTheme.bgClass} ${finalCtaTheme.textClass} hairline-t relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className={`text-xs uppercase tracking-widest ${finalCtaTheme.accentClass} font-extrabold`}>
              Ready For Uncompromising Paint Clarity?
            </span>
            <h2 className={`font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight ${finalCtaTheme.headingClass} leading-none`}>
              EXPERIENCE TRUE AUTOMOTIVE EXCELLENCE
            </h2>
            <p className={`text-base ${finalCtaTheme.subtextClass} leading-relaxed font-normal`}>
              Whether your vehicle requires our complete 9H ceramic coating treatment, a seats-out interior extraction, or convenient curbside pickup at your residence, our team delivers unmatched perfection.
            </p>

            {/* COMPLETELY BORDERLESS ACTION BUTTONS WITH FRESH LIME HOVER */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <button
                onClick={() => {
                  setCurrentPage('work-about-contact');
                  setTimeout(() => {
                    const el = document.getElementById('booking-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`btn-borderless text-base ${finalCtaTheme.ctaClass} p-0 group`}
              >
                <span>BOOK YOUR DETAILING NOW</span>
                <ArrowRight className="w-5 h-5 text-[#D7F34A] group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-borderless text-base ${finalCtaTheme.secondaryCtaClass} p-0 group`}
              >
                <span>WhatsApp 0302 0100070</span>
                <ArrowUpRight className="w-5 h-5 text-[#D7F34A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
