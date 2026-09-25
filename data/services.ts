export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  href: string;
  highlights: string[];
  stats?: { label: string; value: string };
  badge?: string;
}

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "mandatory-inspection",
    title: "LPG Mandatory Inspection",
    shortDesc: "End-to-end statutory and safety inspections protecting consumers, ensuring compliance, and empowering LPG distributors.",
    fullDesc: "Our qualified field technicians conduct thorough physical and electronic leak inspections, checking LPG cylinders, high-pressure hoses, regulators, and hot plate appliances with digital compliance records.",
    icon: "ShieldCheck",
    href: "/mandatory-inspection",
    highlights: [
      "Physical & electronic leak detection",
      "Suraksha rubber hose inspection & replacement",
      "LPG stove/hotplate burner assessment",
      "Digital compliance certificate & record generation",
      "Comprehensive on-the-spot consumer education"
    ],
    stats: { label: "Distributors Served", value: "3687+" },
    badge: "Government & ISO Compliant"
  },
  {
    id: "lpg-pipeline",
    title: "LPG Gas Pipeline Solutions",
    shortDesc: "24/7 Professional Copper LPG pipeline design, installation, maintenance & pressure testing for homes and commercial giants.",
    fullDesc: "Engineered LPG copper pipeline systems complying with ISI / BIS standards. Tailored for modern residential apartments, commercial kitchens, hotels, hospitals, industrial canteens, and educational institutions.",
    icon: "Flame",
    href: "/lpg-pipeline",
    highlights: [
      "ISI / BIS Standard Food-Grade Copper Pipes",
      "30% Greater Flow Efficiency over conventional conduits",
      "Electronic Pressure Decay & Helium Leak Testing",
      "Multi-point manifold systems with emergency shut-off valves",
      "24/7 Rapid Emergency Response & Annual Maintenance Contracts"
    ],
    stats: { label: "Installation Standards", value: "BIS & ISI Certified" },
    badge: "24/7 Support"
  },
  {
    id: "startup-solutions",
    title: "Startup Financial Solutions",
    shortDesc: "Structured financial assistance, subsidy funding, and unsecured business capital empowering Indian enterprises to scale.",
    fullDesc: "We facilitate end-to-end financial solutions in partnership with leading centralized banks, guiding enterprises from eligibility assessment and documentation to rapid sanction and fund disbursal.",
    icon: "TrendingUp",
    href: "/startup-solutions",
    highlights: [
      "Government Subsidy Schemes (PMEGP, MSME, State Subsidies)",
      "Unsecured Business Loans with competitive interest rates",
      "Structured documentation & Project Report Preparation",
      "Direct facilitation with leading centralized Indian banks",
      "Dedicated corporate relationship managers"
    ],
    stats: { label: "Sanctioned Value", value: "1872+ Loans" },
    badge: "Bank Partnered"
  },
  {
    id: "roof-truss",
    title: "Roof Truss Solutions",
    shortDesc: "Precision-engineered steel roof truss structures engineered for durability, weather-resistance, and aesthetic architectural appeal.",
    fullDesc: "High-grade structural steel trusses for residential bungalows, commercial warehouses, industrial sheds, and wedding halls. Designed for maximum load-bearing strength and minimal maintenance.",
    icon: "Hammer",
    href: "/roof-truss",
    highlights: [
      "CAD-engineered high-tensile structural steel trusses",
      "Corrosion-resistant galvanized coating & primer protection",
      "Lightweight yet high-load bearing structural resilience",
      "Fast-track modular on-site fabrication & erection",
      "Custom architectural shapes, curved profiles, and gable roofs"
    ],
    stats: { label: "Protection Life", value: "Long-Lasting" },
    badge: "Structural Engineering"
  },
  {
    id: "fire-safety",
    title: "Fire & Safety Services",
    shortDesc: "Certified fire safety equipment, fire extinguisher import, supply, installation, refilling, and on-site emergency drills.",
    fullDesc: "Operating under IAF scope 29, 34, and 36, IDART provides certified fire safety gear, ABC dry powder, CO2 extinguishers, and automated suppression systems with routine audit inspections.",
    icon: "ShieldAlert",
    href: "/about#iso-certification",
    highlights: [
      "Import & distribution of certified fire extinguishers",
      "Periodic pressure testing, hydro-testing & refilling",
      "Institutional and industrial fire risk audits",
      "Hands-on fire drill demonstrations for staff & residents",
      "Emergency exit routing and signage compliance"
    ],
    stats: { label: "IAF Scope", value: "29, 34 & 36" }
  },
  {
    id: "consumer-awareness",
    title: "Consumer Safety Awareness",
    shortDesc: "Community outreach campaigns and practical safety workshops teaching millions of families safe LPG handling practices.",
    fullDesc: "Conducting mass awareness programs in residential colonies, colleges, and rural clusters, demonstrating how to prevent cylinder gas leaks, maintain ventilation, and act safely during emergencies.",
    icon: "Users",
    href: "/social-activity",
    highlights: [
      "Door-to-door domestic safety education flyers & sessions",
      "Live demonstrations of leak management & fire control",
      "Multi-lingual safety leaflets (Tamil, Telugu, Malayalam, etc.)",
      "Free domestic safety health-checks during inspection drives",
      "Student & homemaker safety interactive symposiums"
    ],
    stats: { label: "Families Reached", value: "500,000+" }
  },
  {
    id: "technical-field",
    title: "Technical Field Services",
    shortDesc: "A dedicated force of 482+ qualified technical field officers deployed across South India with digital field diagnostic tools.",
    fullDesc: "Our on-ground service engineers are trained in gas dynamics, precision pipe-fitting, pressure testing, and emergency valve intervention, backed by centralized scheduling and real-time tracking.",
    icon: "Wrench",
    href: "/why-us",
    highlights: [
      "482+ Trained & certified technical field engineers",
      "Equipped with calibrated electronic combustible gas detectors",
      "Standard operating procedures matching oil marketing company norms",
      "GPS-enabled job dispatch for rapid turnaround times",
      "Continuous safety training & quality assurance audits"
    ],
    stats: { label: "Field Force", value: "482+ Staff" }
  },
  {
    id: "distributor-support",
    title: "Distributor Support Services",
    shortDesc: "Comprehensive operational and compliance assistance for LPG distributors to manage inspections, audits, and customer satisfaction.",
    fullDesc: "Partnering with 3,687+ LPG distributors to handle statutory consumer inspections, pipeline queries, customer safety complaints, and digital documentation without burdening distributor staff.",
    icon: "Briefcase",
    href: "/why-us",
    highlights: [
      "Complete offloading of statutory mandatory inspection logistics",
      "Automated digital audit reporting and consumer compliance records",
      "Dedicated relationship coordinators for distributor agencies",
      "Assistance in distributor safety compliance verification",
      "High consumer satisfaction ratings and brand reputation enhancement"
    ],
    stats: { label: "Distributors", value: "3,687+ Agencies" }
  }
];

export const PIPELINE_BENEFITS = [
  { title: "ISI / BIS Standard Products", desc: "Every pipe, fitting, valve, and manifold complies with rigorous Bureau of Indian Standards specifications." },
  { title: "Professional Engineers", desc: "Designed, installed, and certified by experienced mechanical and pipeline safety engineers." },
  { title: "Electronic Leak Detection", desc: "Dual verification using nitrogen pressure hold tests and electronic ultrasonic leak sensors." },
  { title: "Long Service Life", desc: "Non-corrosive copper tubing engineered to last decades without degradation or sediment accumulation." },
  { title: "Hygienic Food Grade", desc: "Clean, contamination-free fuel delivery suited for luxury hotels, commercial cloud kitchens, and homes." },
  { title: "30% More Flow Efficiency", desc: "Optimized hydraulic bore diameter delivers smooth gas flow even during peak multi-burner operation." },
  { title: "Easy Installation & Compact", desc: "Architecturally clean routing that preserves interior aesthetics without cumbersome wall breaches." },
  { title: "Lightweight & Flexible Copper", desc: "Superior ductile copper allows safe seismic vibration tolerance and thermal expansion resilience." }
];

export const INSPECTION_STEPS = [
  { step: 1, title: "Customer Request", desc: "Service scheduled via distributor agency, online booking, or automated cyclical inspection roster." },
  { step: 2, title: "Technician Visit", desc: "Uniformed, badged IDART safety technician arrives at premise equipped with calibrated diagnostic tools." },
  { step: 3, title: "Installation Inspection", desc: "Physical check of cylinder placement, natural ventilation, O-ring integrity, and safety cap availability." },
  { step: 4, title: "Leak Detection", desc: "Electronic leak detector scan and soap bubble test at regulator neck, joint seals, and hose clamps." },
  { step: 5, title: "Safety Assessment", desc: "Evaluation of Suraksha rubber hose expiry date, stove burner condition, and distance from combustible materials." },
  { step: 6, title: "Customer Awareness", desc: "Personal demonstration to homemakers on emergency shutoff, regulator locking, and leak precautions." },
  { step: 7, title: "Documentation", desc: "On-site checklist completion noting component health, replacement recommendations, and safety status." },
  { step: 8, title: "Digital Record", desc: "Instant upload to centralized IDART cloud database with automated SMS/digital certificate sent to consumer and distributor." }
];
