export type CameraStatus = 'available' | 'booked' | 'maintenance';

export interface PriceTier {
  planKey: '6h' | '1d' | '2d' | '3d';
  durationLabel: string;
  hours: number;
  price: number;
  formattedPrice: string;
}

export interface CameraProduct {
  id: string;
  name: string;
  brand: 'Canon' | 'Fujifilm';
  shortDesc: string;
  fullDesc: string;
  image: string;
  galleryImages: string[];
  lowestPrice: number;
  lowestPriceLabel: string;
  prices: PriceTier[];
  accessories: string[];
  tags: string[];
  status: CameraStatus;
  statusLabel: string;
  highlights: string[];
  suitableFor: string[];
  commonSpecs: { label: string; value: string }[];
  pickupGuide: string;
  depositPolicy: string;
  availableDatesNotice: string;
}

export interface StoreLocation {
  id: string;
  region: 'Vĩnh Yên';
  regionLabel: string;
  address: string;
  mapsSearchUrl: string;
}

export interface FacebookAccount {
  name: string;
  url: string;
}

export interface StoreInfo {
  brandName: string;
  slogan: string;
  field: string;
  serviceRegions: string[];
  phones: string[];
  zaloPhones: string[];
  facebookAccounts: FacebookAccount[];
  email: string;
  locations: StoreLocation[];
}

export interface BookingRequest {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  productId: string;
  productName: string;
  region: 'Vĩnh Yên';
  locationAddress: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  rentalPlan: '6h' | '1d' | '2d' | '3d' | 'custom';
  calculatedDaysOrHoursText: string;
  estimatedPrice: number;
  formattedPrice: string;
  note?: string;
  agreedToPolicy: boolean;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface RentalStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface PolicyItem {
  id: number;
  title: string;
  content: string;
  important?: boolean;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  rating: number;
  cameraRented: string;
  comment: string;
  date: string;
  isSample: boolean;
}
