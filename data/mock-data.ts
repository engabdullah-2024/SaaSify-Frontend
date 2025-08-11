import { PricingPlan, StatCard, Feature, NavItem, SocialLink } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    yearlyPrice: 290,
    features: [
      'Up to 5 projects',
      'Basic analytics',
      '24/7 support',
      'API access',
      '1GB storage'
    ]
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 99,
    yearlyPrice: 990,
    features: [
      'Up to 25 projects',
      'Advanced analytics',
      'Priority support',
      'API access',
      '10GB storage',
      'Custom integrations'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 299,
    yearlyPrice: 2990,
    features: [
      'Unlimited projects',
      'Enterprise analytics',
      'Dedicated support',
      'Custom API',
      'Unlimited storage',
      'White-label solution',
      'SLA guarantee'
    ]
  }
];

export const statCards: StatCard[] = [
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    changeType: 'positive',
    icon: 'TrendingUp'
  },
  {
    id: 'subscriptions',
    title: 'Subscriptions',
    value: '+2,350',
    change: '+180.1%',
    changeType: 'positive',
    icon: 'Users'
  },
  {
    id: 'sales',
    title: 'Sales',
    value: '+12,234',
    change: '+19%',
    changeType: 'positive',
    icon: 'CreditCard'
  },
  {
    id: 'active-users',
    title: 'Active Users',
    value: '+573',
    change: '+201',
    changeType: 'positive',
    icon: 'Activity'
  }
];

export const features: Feature[] = [
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    description: 'Get detailed insights into your business performance with our powerful analytics dashboard.',
    icon: 'BarChart3'
  },
  {
    id: 'automation',
    title: 'Smart Automation',
    description: 'Automate repetitive tasks and workflows to save time and increase productivity.',
    icon: 'Zap'
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption and compliance certifications.',
    icon: 'Shield'
  },
  {
    id: 'integrations',
    title: 'Seamless Integrations',
    description: 'Connect with your favorite tools and services with our extensive integration library.',
    icon: 'Link'
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Get help whenever you need it with our round-the-clock customer support team.',
    icon: 'Headphones'
  },
  {
    id: 'scalability',
    title: 'Scalable Infrastructure',
    description: 'Built to grow with your business, from startup to enterprise scale.',
    icon: 'ArrowUpRight'
  }
];

export const navItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/dashboard',
    icon: 'LayoutDashboard'
  },
  {
    id: 'pricing',
    label: 'Pricing',
    href: '/pricing',
    icon: 'CreditCard'
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/settings',
    icon: 'Settings'
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 'twitter',
    name: 'Twitter',
    href: '#',
    icon: 'Twitter'
  },
  {
    id: 'github',
    name: 'GitHub',
    href: '#',
    icon: 'Github'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: '#',
    icon: 'Linkedin'
  }
];
