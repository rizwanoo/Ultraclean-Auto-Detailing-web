import { ServiceItem, PortfolioItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Ultraclean Auto Detailing',
  shortName: 'Ultraclean',
  phone: '0302 0100070',
  phoneInternational: '+923020100070',
  whatsappUrl: 'https://wa.me/923020100070?text=Hello%20Ultraclean%2C%20I%20would%20like%20to%20inquire%20about%20car%20detailing%20services',
  address: 'Qadeer Market, Main Gulzar-e-Quaid, Rawalpindi, Pakistan',
  serviceAreas: 'Rawalpindi, Islamabad, Wah Cantt, Taxila, and Chakwal',
  facebookUrl: 'https://www.facebook.com/ultraclean.com.pk/',
  youtubeUrl: 'https://youtube.com/@ultraclean-car-detailing',
  facebookFollowers: '6.2K+',
  hours: '9:00 AM – 9:00 PM (Monday – Sunday)',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Ultraclean+Auto+Detailing+Qadeer+Market+Gulzar-e-Quaid+Rawalpindi',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.882414749174!2d73.1098485!3d33.6015243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb9e846059c3%3A0x6b17c244ad2e62eb!2sGulzar-e-Quaid%2C%20Rawalpindi%2C%20Punjab!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk',
  speciality: 'Curbside & Doorstep Pickup Available'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ceramic-coating',
    number: '01',
    title: '9H Ceramic & Hydrophobic Quartz Shield',
    tagline: 'Permanent glass gloss reflection with chemical and swirl defense.',
    description: 'Our premier exterior treatment creates an ultra-durable, micro-thin molecular bonding layer over the vehicle clearcoat. Engineered for the punishing UV and dust conditions of the twin cities, it delivers intense hydrophobic water beading, deep candy gloss reflection, and lasting shield defense against contaminants.',
    highlights: [
      'Multi-stage surface decontamination & clay preparation',
      'High-grade SiO2 nano-ceramic molecular integration',
      'Extreme water & mud beading with self-cleaning behavior',
      'UV fade and oxidation barrier tested in Rawalpindi heat'
    ],
    duration: '24 – 36 Hours (includes infrared curing)',
    bestFor: 'Luxury sedans, brand-new SUVs, and show-quality finishes',
    image: '/assets/work/yLH4GfFotq0.jpg',
    altText: 'Ceramic coating high-gloss reflection on Honda Civic completed by Ultraclean'
  },
  {
    id: 'paint-correction',
    number: '02',
    title: 'Rotary Compounding & Multi-Stage Paint Correction',
    tagline: 'Precision defect leveling to eliminate swirls, buffer trails, and micro-scratches.',
    description: 'Every vehicle paintwork suffers from improper washing, swirl marks, oxidation, and environmental hazing. Utilizing high-torque rotary polishers, German compounds, and graduated foam pads, our technicians meticulously level the clearcoat to achieve pure optical clarity and a true wet mirror reflection.',
    highlights: [
      'Electronic digital paint depth gauge measurement',
      'Dual-action & rotary multi-stage cutting and finishing',
      '90%+ swirl, hologram, and fine scratch eradication',
      'Deep optical richness restoration before protective sealing'
    ],
    duration: '8 – 14 Hours',
    bestFor: 'Vehicles with spider-web scratches, dull clearcoat, or acid-rain etching',
    image: '/assets/work/6vOSyXm6-3U.jpg',
    altText: 'Ultraclean technician performing rotary machine paint correction in Rawalpindi workshop'
  },
  {
    id: 'interior-extraction',
    number: '03',
    title: 'Interior Deep Extraction & Leather Revitalization',
    tagline: 'Complete seats-out sanitization, fabric steam extraction, and OEM interior renewal.',
    description: 'True automotive hygiene demands going far deeper than a surface wipe. We remove seating to reach every hidden crevice, steam-clean seat rails, power-extract embedded grime from vehicle floor carpeting, revitalize door panels, and treat leather surfaces with nourishing, non-greasy UV conditioners.',
    highlights: [
      'Complete seat unbolting for full floor pan accessibility',
      'High-temperature antimicrobial steam sanitization',
      'Commercial hot-water extraction for carpet and upholstery stains',
      'AC duct ozone deodorization and dashboard matte protection'
    ],
    duration: '6 – 8 Hours',
    bestFor: 'Daily drivers, family vehicles, and vehicles undergoing ownership transfers',
    image: '/assets/work/yU9umWIxfkg.jpg',
    altText: 'Seats-out interior deep cleaning and carpet extraction at Ultraclean Auto Detailing'
  },
  {
    id: 'exterior-foam-wash',
    number: '04',
    title: 'Precision Foam Wash & Touchless Decontamination',
    tagline: 'Scratch-free two-bucket pH-neutral exterior bath with dedicated wheel restoration.',
    description: 'Ordinary car washes induce abrasive scratches using dirty rags and harsh caustic detergents. Our specialized detailing wash utilizes high-foaming pH-neutral snow foam, ultra-soft microfibre mitts, dedicated wheel iron decontamination, and warm filtered blow-drying to preserve delicate clearcoat.',
    highlights: [
      'Pre-wash citrus degreasing & touchless foam cannon application',
      'Two-bucket method with dual grit guards to prevent swirl marks',
      'Iron fallout & brake dust dissolution on alloy rims and calipers',
      'Synthetic sealant spray application for immediate hydrophobic shine'
    ],
    duration: '2 – 3 Hours',
    bestFor: 'Routine maintenance washes between major detailing treatments',
    image: '/assets/work/VKbiwD0QQCs.jpg',
    altText: 'Pristine mirror exterior gloss and crystal glass after Ultraclean wash'
  },
  {
    id: 'engine-bay-detailing',
    number: '05',
    title: 'Engine Bay Steam Detailing & Component Dressing',
    tagline: 'Careful degreasing of mechanical bays with protective satin finish coatings.',
    description: 'The engine compartment accumulates heavy grime, road oils, and dust. We execute dry-steam cleaning that protects sensitive electronic ECUs, wiring harnesses, and intake sensors, followed by a non-sticky heat-resistant dressing that leaves plastics and hoses looking brand new.',
    highlights: [
      'Sensitive electronics and sensor moisture isolation',
      'Targeted low-moisture steam degreasing of block and bay walls',
      'Removal of stubborn grease, oil films, and road grime',
      'Satin OEM-look non-greasy heat-resistant dressing'
    ],
    duration: '3 – 4 Hours',
    bestFor: 'Enthusiasts preparing for car meets, resale, or routine engine maintenance',
    image: '/assets/work/H2Hbp09QN_4.jpg',
    altText: 'Engine compartment cleaning and interior cockpit detailing at Ultraclean'
  },
  {
    id: 'curbside-pickup',
    number: '06',
    title: 'Curbside Pickup & Doorstep Mobile Detailing',
    tagline: 'Convenient vehicle pickup and on-site doorstep car care across the Twin Cities.',
    description: 'Recognized on our official Facebook profile for curbside convenience, we offer safe vehicle pickup from your doorstep in Rawalpindi and Islamabad, transport to our Qadeer Market workshop for intensive studio treatments, or mobile doorstep operations directly at your residence.',
    highlights: [
      'Inspected vehicle pickup and return service to your driveway',
      'Mobile detailing units equipped with specialized tools and clean power',
      'Doorstep service coverage across Rawalpindi, Islamabad, Wah, and Taxila',
      'Complete pre-service and post-service digital inspection checklist'
    ],
    duration: 'Flexible scheduling / Full-day pickup cycle',
    bestFor: 'Busy executives, car enthusiasts, and clients with demanding schedules',
    image: '/assets/work/Orq9mhFH60I.jpg',
    altText: 'Ultraclean workshop facility in Qadeer Market Gulzar-e-Quaid with Toyota Prado'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'civic-ruby-ceramic',
    title: 'Honda Civic Metallic Ruby Red',
    vehicle: 'Honda Civic (Punjab AJC-411)',
    service: '9H Ceramic Coating & Paint Leveling',
    location: 'Gulzar-e-Quaid Center',
    image: '/assets/work/yLH4GfFotq0.jpg',
    badge: 'Ceramic Coating Completed',
    description: 'Treated with multi-stage rotary compounding to eliminate deep wash marring, followed by dual-layer 9H ceramic coating. Notice the intense mirror clarity on the hood reflecting ambient trees and sky.',
    results: ['Eliminated 95% swirl marks', 'Candy-red liquid depth', '3-year hydrophobic water repellency']
  },
  {
    id: 'interior-restoration-v8',
    title: 'Complete Interior Strip & Extraction',
    vehicle: 'Honda Sedan Cockpit & Chassis',
    service: 'Deep Interior Extraction & Carpet Renovation',
    location: 'Workshop Bay 1',
    image: '/assets/work/yU9umWIxfkg.jpg',
    badge: 'Seats-Out Renovation',
    description: 'Every seat unbolted and removed to expose original factory carpet. Extracted deeply embedded silt, sanitised AC ducting, and restored floor contours to pristine showroom condition.',
    results: ['100% stain & odour extraction', 'Antimicrobial steam treatment', 'Leather conditioned & nourished']
  },
  {
    id: 'rotary-paint-correction',
    title: 'Rotary Clearcoat Compounding',
    vehicle: 'Metallic Grey Sedan A-Pillar & Roof',
    service: 'Multi-Stage Machine Correction',
    location: 'Ultraclean Detailing Studio',
    image: '/assets/work/6vOSyXm6-3U.jpg',
    badge: 'In-Progress Craft',
    description: 'Lead technician executing high-precision rotary compounding using graduated foam pads under specialized studio lighting to level clearcoat imperfections with zero hologram trails.',
    results: ['High-torque defect leveling', 'Zero buffer haze', 'Crystal clear reflection ready for sealant']
  },
  {
    id: 'prado-suv-ceramic',
    title: 'Toyota Land Cruiser Prado White Pearl',
    vehicle: 'Toyota Prado SUV',
    service: 'Complete Exterior & Ceramic Protection',
    location: 'Qadeer Market Main Studio',
    image: '/assets/work/Orq9mhFH60I.jpg',
    badge: 'Full Studio Package',
    description: 'Full body decontamination, trim restoration, and hydrophobic ceramic coating applied in our Qadeer Market facility. The side panels demonstrate seamless mirror reflection along the floor line.',
    results: ['Pearl white clarity amplified', 'Side panel mirror reflection', 'Curbside delivery return']
  },
  {
    id: 'civic-silver-glass',
    title: 'Honda Civic Silver ICT MT-033',
    vehicle: 'Honda Civic (Islamabad ICT MT-033)',
    service: 'Exterior Detailing & Glass Treatment',
    location: 'Islamabad / Rawalpindi Mobile Service',
    image: '/assets/work/VKbiwD0QQCs.jpg',
    badge: 'Exterior Perfection',
    description: 'Full exterior decontamination, hood polishing, and ceramic windshield hydrophobic coating for maximum wet-weather visibility on Islamabad expressways.',
    results: ['Crystal clear optical windshield', 'Streak-free chrome and grille', 'Super-slick hood clearcoat']
  },
  {
    id: 'night-spec-finish',
    title: 'High-Gloss Night Reflection',
    vehicle: 'Premium White Sedan',
    service: 'Wax & Polymeric Paint Sealant',
    location: 'Ultraclean Detailing Center',
    image: '/assets/work/brEzzgKUjTw.jpg',
    badge: 'Night Reflection',
    description: 'Demonstrating extreme gloss under evening streetlights. Deep mirror gloss across hood and front fascia with zero orange-peel haze.',
    results: ['Intense evening light rebound', 'Slick dust-repellent finish', 'Smooth hand-feel test']
  }
];

export const TRUST_METRICS = [
  {
    number: '6.2K+',
    label: 'Facebook Community',
    detail: 'Verified followers following official page updates and vehicle transformations'
  },
  {
    number: '1,500+',
    label: 'Vehicles Detailed',
    detail: 'From everyday sedans to luxury SUVs across Rawalpindi & Islamabad'
  },
  {
    number: '100%',
    label: 'Genuine Craftsmanship',
    detail: 'Authentic workshop work, no subcontracting, real verified results'
  },
  {
    number: 'Twin Cities',
    label: 'Complete Coverage',
    detail: 'Qadeer Market studio hub plus doorstep and curbside services'
  }
];
