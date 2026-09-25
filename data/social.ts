export interface SocialInitiative {
  id: string;
  title: string;
  category: "Safety" | "Community" | "Awareness" | "Employees" | "Events";
  date: string;
  location: string;
  desc: string;
  impact: string;
  imagePlaceholder: string;
}

export const SOCIAL_INITIATIVES: SocialInitiative[] = [
  {
    id: "soc-1",
    title: "Gram Panchayat Consumer LPG Safety Drive",
    category: "Safety",
    date: "January 2026",
    location: "Coimbatore & Pollachi Rural Clusters, TN",
    desc: "Demonstrated safe regulator replacement, Suraksha rubber hose integrity, and fire emergency protocols to over 2,400 rural homemakers.",
    impact: "2,400+ Homemakers Trained",
    imagePlaceholder: "safety-demo"
  },
  {
    id: "soc-2",
    title: "School & College Fire Prevention Workshop",
    category: "Awareness",
    date: "December 2025",
    location: "Chittoor & Tirupati Districts, AP",
    desc: "Hands-on fire extinguisher operations and emergency evacuation drills conducted with 1,800+ students and teaching staff.",
    impact: "1,800+ Students Certified",
    imagePlaceholder: "school-awareness"
  },
  {
    id: "soc-3",
    title: "Annual Technician Skill & Safety Conclave",
    category: "Employees",
    date: "November 2025",
    location: "IDART Training Academy, Coimbatore",
    desc: "Three-day intensive refresher camp covering electronic leak diagnostic meters, high-pressure pipeline joint welding, and first responder CPR.",
    impact: "482+ Field Engineers Trained",
    imagePlaceholder: "technician-conclave"
  },
  {
    id: "soc-4",
    title: "Green Kitchen & Clean Energy Drive",
    category: "Community",
    date: "October 2025",
    location: "Ernakulam & Thrissur Districts, Kerala",
    desc: "Subsidized replacement of cracked rubber hoses and complimentary burner soot-cleaning to boost fuel efficiency and lower emissions.",
    impact: "3,500+ Domestic Stoves Serviced",
    imagePlaceholder: "green-kitchen"
  },
  {
    id: "soc-5",
    title: "Big Freedom Offer & Distributor Excellence Awards",
    category: "Events",
    date: "August 2025",
    location: "Le Méridien Convention Centre, Coimbatore",
    desc: "Felicitating outstanding distributor agency partners and announcing consumer rewards for highest safety checklist adherence.",
    impact: "450+ Partner Agencies Felicitated",
    imagePlaceholder: "distributor-awards"
  },
  {
    id: "soc-6",
    title: "Public Market Fire Extinguisher Donation & Training",
    category: "Safety",
    date: "June 2025",
    location: "Salem Commercial Bazaar, TN",
    desc: "Installed 60+ commercial dry powder fire extinguishers in bustling market zones with dedicated volunteer warden training.",
    impact: "60+ Fire Points Established",
    imagePlaceholder: "market-safety"
  }
];

export const GALLERY_CATEGORIES = ["All", "Safety", "Community", "Awareness", "Employees", "Events"] as const;
