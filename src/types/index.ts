export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'tealights' | 'pillars' | 'tapers' | 'votives' | 'bundles';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  burnTime: string;
  dimensions: string;
  waxWeight: string;
  image: string;
  badge?: string;
  description: string;
  features: string[];
  inStock: boolean;
  bestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  productName: string;
}

export interface BundleTier {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  price: number;
  originalPrice: number;
  savings: string;
  burnHoursTotal: string;
  itemsIncluded: string[];
  bonusGift?: string;
  image: string;
  recommended?: boolean;
}
