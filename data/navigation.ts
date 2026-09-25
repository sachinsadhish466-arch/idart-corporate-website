export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Mandatory Inspection", href: "/mandatory-inspection", badge: "Core" },
  { label: "LPG Pipeline", href: "/lpg-pipeline" },
  { label: "Startup Solutions", href: "/startup-solutions" },
  { label: "Roof Truss", href: "/roof-truss" },
  { label: "Why Us", href: "/why-us" },
  { label: "Branches", href: "/branches" },
  { label: "Social Activity", href: "/social-activity" },
  { label: "Careers", href: "/careers", badge: "Hiring" },
  { label: "Contact", href: "/contact" }
];

export const LANGUAGES = [
  { code: "en", label: "English", nativeName: "English" },
  { code: "ta", label: "Tamil", nativeName: "தமிழ்" },
  { code: "hi", label: "Hindi", nativeName: "हिन्दी" },
  { code: "ml", label: "Malayalam", nativeName: "മലയാളം" },
  { code: "te", label: "Telugu", nativeName: "తెలుగు" },
  { code: "kn", label: "Kannada", nativeName: "ಕನ್ನಡ" }
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "About IDART", href: "/about" },
    { label: "Mandatory Inspection", href: "/mandatory-inspection" },
    { label: "LPG Pipeline Solutions", href: "/lpg-pipeline" },
    { label: "Startup Financial Solutions", href: "/startup-solutions" },
    { label: "Roof Truss Solutions", href: "/roof-truss" },
    { label: "Our Branch Network", href: "/branches" },
    { label: "CSR & Social Activity", href: "/social-activity" },
    { label: "Careers at IDART", href: "/careers" },
    { label: "Contact Us", href: "/contact" }
  ],
  services: [
    { label: "LPG Mandatory Inspection", href: "/mandatory-inspection" },
    { label: "Copper Gas Pipeline Installation", href: "/lpg-pipeline" },
    { label: "Commercial Pipeline Maintenance", href: "/lpg-pipeline" },
    { label: "Subsidy & Business Loans", href: "/startup-solutions" },
    { label: "Roof Truss Construction", href: "/roof-truss" },
    { label: "Distributor Support Services", href: "/why-us" },
    { label: "Consumer Safety Programs", href: "/social-activity" }
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Disclaimer", href: "#disclaimer" },
    { label: "ISO 9001:2015 Compliance", href: "/about#iso-certification" }
  ]
};
