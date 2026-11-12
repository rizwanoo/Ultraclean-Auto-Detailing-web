export type PageId = 'home' | 'services' | 'work-about-contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  duration: string;
  bestFor: string;
  image: string;
  altText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  vehicle: string;
  service: string;
  location: string;
  image: string;
  badge?: string;
  description: string;
  results: string[];
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  vehicleMakeModel: string;
  serviceId: string;
  serviceMode: 'workshop' | 'curbside';
  preferredDate: string;
  notes: string;
}
