// Landing page navigation sections
export const LANDING_SECTIONS = {
  // Main sections
  HERO: "#hero",
  FEATURES: "#features",
  ABOUT: "#about",
  HOW_IT_WORKS: "#how-it-works", 
  PRICING: "#pricing",
  CONTACT: "#contact",
  
  // Footer sections
  TEMPLATES: "#templates",
  SECURITY: "#security",
  DOCS: "#docs",
  API: "#api",
  COMMUNITY: "#community",
  SUPPORT: "#support",
  BLOG: "#blog",
  CAREERS: "#careers",
  PRESS: "#press",
  HELP: "#help",
  TYPES: "#types",
  MOBILE: "#mobile",
  
  // Legal pages
  PRIVACY: "/privacy",
  TERMS: "/terms",
  COOKIES: "/cookies",
  GDPR: "/gdpr",
  
  // Additional links
  STATUS: "https://status.knockoutzone.com",
  CHANGELOG: "/changelog",
  SITEMAP: "/sitemap",
  
  // Additional resources (for navigation dropdown)
  RESOURCES: "#resources"
};

// Social links with additional platforms for Footer
export const SOCIAL_LINKS = {
  TWITTER: "https://twitter.com/knockoutzone",
  FACEBOOK: "https://facebook.com/knockoutzone",
  INSTAGRAM: "https://instagram.com/knockoutzone", 
  LINKEDIN: "https://linkedin.com/company/knockoutzone",
  YOUTUBE: "https://youtube.com/@knockoutzone",
  GITHUB: "https://github.com/knockoutzone",
  DISCORD: "https://discord.gg/knockoutzone"
};

// Section IDs for direct DOM access
export const SECTION_IDS = {
  HERO: "hero",
  FEATURES: "features",
  ABOUT: "about",
  HOW_IT_WORKS: "how-it-works",
  PRICING: "pricing",
  CONTACT: "contact"
};

// UI text constants for landing sections
export const UI_TEXT = {
  APP_NAME: "KnockoutZone",
  NAV_FEATURES: "Features",
  NAV_CONTACT: "Contact",
  NAV_HOW_IT_WORKS: "How It Works",
  BUTTON_START_TRIAL: "Start Free Trial",
  BUTTON_GET_STARTED: "Get Started",
  BUTTON_GET_STARTED_FREE: "Get Started Free",
  BUTTON_LEARN_MORE: "Learn More",
  BUTTON_CONTACT_SALES: "Contact Sales",
  BUTTON_VIEW_PRICING: "View Pricing",
  BUTTON_SCHEDULE_DEMO: "Schedule Demo",
  BUTTON_LOGIN: "Login"
};

// Helper function to scroll to section
export const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

// Helper function to get current section
export const getCurrentSection = () => {
  const sections = Object.values(LANDING_SECTIONS).filter(section => section.startsWith('#'));
  
  for (const section of sections) {
    const element = document.querySelector(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        return section;
      }
    }
  }
  
  return LANDING_SECTIONS.HERO;
};
