export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  yearlyPrice: number;
  features: string[];
  popular?: boolean;
}

export interface StatCard {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: string;
}
