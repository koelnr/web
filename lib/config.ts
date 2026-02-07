import { Car, Sparkles, Zap } from "lucide-react";

export const allowedCities = ["Ludhiana", "Delhi", "New Delhi"];

export type HeroStoreButton = {
  store: "apple" | "play";
  label: string;
  href: string;
  variant?: "default" | "secondary" | "outline";
};

export type HeroConfig = {
  badge: string;
  title: string;
  subtitle: string;
  highlights: string[];
  sideCard: {
    eyebrow: string;
    price: string;
    points: string[];
  };
  backgroundImage: {
    src: string;
    alt: string;
  };
  overlayClassName: string;
  ctas: HeroStoreButton[];
};

export type ServiceTierConfig = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  details: string[];
};

export type SubscriptionPlanConfig = {
  name: string;
  badge?: string;
  price: string;
  includes: string[];
  idealFor: string;
};

export type OnDemandPriceConfig = {
  label: string;
  value: string;
};

export type FleetPlanConfig = {
  name: string;
  price: string;
  includes: string[];
};

export type LandingPageConfig = {
  brand: {
    name: string;
    tagline: string;
    description: string;
    copyright: string;
  };
  hero: HeroConfig;
  serviceTiers: {
    title: string;
    subtitle: string;
    tiers: ServiceTierConfig[];
  };
  subscriptionPlans: {
    title: string;
    subtitle: string;
    plans: SubscriptionPlanConfig[];
  };
  subscriptionBenefits: {
    title: string;
    items: string[];
  };
  onDemandPricing: {
    title: string;
    items: OnDemandPriceConfig[];
  };
  fleetPricing: {
    title: string;
    subtitle: string;
    contactOnlyMessage: string;
    contactEmail: string;
  };
  conversionCta: {
    title: string;
    subtitle: string;
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
  mobileStickyCta: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
};

export const landingPageConfig: LandingPageConfig = {
  brand: {
    name: "koelnr",
    tagline: "Doorstep Car Care, Simplified",
    description:
      "Eco-friendly doorstep car care plans for individuals and fleets with predictable pricing and priority slots.",
    copyright: "2026 koelnr. All rights reserved.",
  },
  hero: {
    badge: "Now booking subscriptions",
    title: "Consistent car care at your doorstep.",
    subtitle:
      "Book exterior washes, interior upgrades, and fleet plans with transparent monthly pricing.",
    highlights: [
      "Eco-first water usage",
      "Priority booking slots",
      "Quality redo guarantee",
    ],
    sideCard: {
      eyebrow: "Starting from",
      price: "Rs 799/mo",
      points: [
        "25-35 min standard exterior service",
        "Free redo on quality issues",
        "Flexible on-demand and subscription plans",
      ],
    },
    backgroundImage: {
      src: "/images/brad-starkey-W5yX_dPokH4-unsplash.jpg",
      alt: "Car being cleaned by a professional service",
    },
    overlayClassName: "bg-gradient-to-b from-black/70 via-black/55 to-black/65",
    ctas: [
      {
        store: "apple",
        label: "Download on App Store",
        href: "#",
        variant: "default",
      },
      {
        store: "play",
        label: "Get it on Play Store",
        href: "#",
        variant: "secondary",
      },
    ],
  },
  serviceTiers: {
    title: "Service Tiers",
    subtitle: "Choose from exterior-only service to deep interior care.",
    tiers: [
      {
        id: "tier-1",
        title: "Tier 1 - Exterior Wash",
        subtitle: "Base Plan",
        price: "One-time: Rs 299-Rs 399 | Subscription: Rs 999-Rs 1,399/month",
        details: [
          "Waterless or low-water wash (eco-friendly)",
          "Exterior shine and polish",
          "Tire and rim cleaning",
          "Standard duration: 25-35 minutes per vehicle",
        ],
      },
      {
        id: "tier-2",
        title: "Tier 2 - Interior Vacuum Add-on",
        subtitle: "Add-on Service",
        price: "Add-on charge: Rs 149-Rs 199",
        details: [
          "Comprehensive vacuum of seats, floor mats, trunk",
          "Dust wipe-down of dashboard and door panels",
          "Air freshener application",
          "Boosts AOV on base wash by 15-20%",
        ],
      },
      {
        id: "tier-3",
        title: "Tier 3 - Deep Interior Cleaning",
        subtitle: "Weekly Subscription Add-on",
        price: "Rs 299-Rs 399 add-on to weekly subscription",
        details: [
          "Interior vacuum + shampooing of seats + floor mat extraction",
          "Dashboard and steering wheel cleaning",
          "Window glass cleaning (interior and exterior)",
        ],
      },
    ],
  },
  subscriptionPlans: {
    title: "Subscription Tiers",
    subtitle: "Predictable plans for different usage patterns.",
    plans: [
      {
        name: "Starter (Bi-weekly)",
        price: "Rs 799 / month",
        includes: ["2 exterior washes", "1 quick interior vacuum (monthly)"],
        idealFor: "Regular users; weekend drivers",
      },
      {
        name: "Recommended (Weekly)",
        badge: "Recommended",
        price: "Rs 1,399 / month",
        includes: [
          "4 exterior washes",
          "2 quick vacuums",
          "Priority slots",
          "Free redo vacuum",
        ],
        idealFor: "High-use vehicles; daily commuters",
      },
      {
        name: "Care+",
        price: "Rs 1,899 / month",
        includes: [
          "4 exterior washes",
          "4 quick vacuums",
          "1 deep interior / month",
          "Priority support",
        ],
        idealFor: "Occasional users; value-conscious",
      },
    ],
  },
  subscriptionBenefits: {
    title: "Subscription Benefits",
    items: [
      "Lock-in pricing (no surge pricing on peak days)",
      "Priority booking (same day or next day slot guaranteed)",
      "Free redo for any quality issues",
      "10% referral credit (Rs 100 per successful new subscriber)",
    ],
  },
  onDemandPricing: {
    title: "On-Demand (B2C) Pricing",
    items: [
      { label: "Exterior wash (weekday)", value: "Rs 449" },
      { label: "Exterior wash (weekend/peak)", value: "Rs 599" },
      { label: "Quick vacuum add-on", value: "Rs 199" },
      { label: "Deep interior", value: "Rs 1,199+" },
    ],
  },
  fleetPricing: {
    title: "B2B Fleet Pricing",
    subtitle: "Fleet plans are currently available on request only.",
    contactOnlyMessage:
      "For business fleet servicing, please contact our support team and we will share a custom proposal.",
    contactEmail: "support@koelnr.com",
  },
  conversionCta: {
    title: "Ready to Scale Car Care Across Your Vehicles?",
    subtitle:
      "Book a demo to see koelnr workflows in action or speak with sales for fleet rollout planning.",
    primary: {
      label: "Book Demo",
      href: "#",
    },
    secondary: {
      label: "Contact Sales",
      href: "#",
    },
  },
  mobileStickyCta: {
    primary: {
      label: "Book Demo",
      href: "#",
    },
    secondary: {
      label: "Contact Sales",
      href: "#",
    },
  },
};

export const siteConfig = {
  name: landingPageConfig.brand.name,
  tagline: landingPageConfig.brand.tagline,
  description: landingPageConfig.brand.description,
  hero: {
    title: "Welcome to koelnr",
    subtitle: landingPageConfig.brand.description,
    primaryCTA: "Download App",
    secondaryCTA: "View Pricing",
  },
  features: {
    title: "Why Choose koelnr?",
    subtitle: "Professional car care with reliable scheduling",
    items: [
      {
        icon: Car,
        title: "Doorstep Service",
        description:
          "No need to drive anywhere. We come to your location at your scheduled time.",
      },
      {
        icon: Zap,
        title: "Quick & Efficient",
        description:
          "Time-boxed services and subscriptions designed for busy vehicle owners.",
      },
      {
        icon: Sparkles,
        title: "Consistent Quality",
        description:
          "SLA-backed workflows with redo support for quality issues.",
      },
    ],
  },
  footer: {
    copyright: landingPageConfig.brand.copyright,
  },
  comingSoon: (city: string) => {
    return allowedCities.includes(city)
      ? {
          badge: "Coming Soon",
          title: `Launching in ${city} this February`,
          subtitle:
            "We're working hard to bring you the best car wash experience. Stay tuned!",
          description:
            "koelnr is launching soon with premium car wash services at your doorstep. Be the first to know when we launch.",
          features: [
            {
              icon: Car,
              title: "Doorstep Service",
              description: "Premium car wash at your location",
            },
            {
              icon: Zap,
              title: "Quick Service",
              description: "Express washes and flexible scheduling",
            },
            {
              icon: Sparkles,
              title: "Premium Quality",
              description: "Professional care for your car",
            },
          ],
          notifyButton: "Notify Me",
          emailPlaceholder: "Enter your email",
          socialLinks: {
            twitter: "#",
            instagram: "#",
            facebook: "#",
          },
        }
      : {
          badge: "Coming Soon",
          title: "Something Exciting is Coming",
          subtitle:
            "We're working hard to bring you the best car wash experience. Stay tuned!",
          description:
            "koelnr is launching soon with premium car wash services at your doorstep. Be the first to know when we launch.",
          features: [
            {
              icon: Car,
              title: "Doorstep Service",
              description: "Premium car wash at your location",
            },
            {
              icon: Zap,
              title: "Quick Service",
              description: "Express washes and flexible scheduling",
            },
            {
              icon: Sparkles,
              title: "Premium Quality",
              description: "Professional care for your car",
            },
          ],
          notifyButton: "Notify Me",
          emailPlaceholder: "Enter your email",
          socialLinks: {
            twitter: "#",
            instagram: "#",
            facebook: "#",
          },
        };
  },
};
