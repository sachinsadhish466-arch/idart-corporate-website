export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  stat?: string;
}

export const TIMELINE_MILESTONES: TimelineEvent[] = [
  {
    year: "2009",
    title: "Founding in Coimbatore",
    subtitle: "A Six-Member Field Vision",
    description: "IDART commenced operations in Coimbatore, Tamil Nadu, as a dedicated field team passionate about LPG consumer safety, domestic hose inspections, and distributor assistance.",
    stat: "6 Initial Team Members"
  },
  {
    year: "2012",
    title: "South India Operations Expanded",
    subtitle: "Crossing State Horizons",
    description: "Expanded technical inspection services beyond Western Tamil Nadu into Kerala, Andhra Pradesh, and Puducherry, building deep partnerships with regional gas distributors.",
    stat: "50+ Distribution Partners"
  },
  {
    year: "2017",
    title: "Corporate Incorporation",
    subtitle: "AGTRS IDART PRIVATE LIMITED",
    description: "Formally incorporated as a Private Limited Company (CIN: U01100TZ2017PTC029601), institutionalizing governance, technical standards, and regional operating hubs.",
    stat: "Private Limited Entity"
  },
  {
    year: "2018",
    title: "Digital / E-Development Initiatives",
    subtitle: "Pioneering Paperless Safety Audits",
    description: "Launched centralized cloud-based field inspection databases, GPS technician dispatch, digital checklists, and automated SMS inspection certificates for consumers.",
    stat: "100% Digital Inspection Records"
  },
  {
    year: "2019",
    title: "ISO 9001:2015 Certification",
    subtitle: "International Quality Management Standard",
    description: "Conferred ISO 9001:2015 accreditation under IAF - 22IQLU17 (Service Codes 34, 36, and 29) for quality management in inspection services, safety awareness, and fire equipment.",
    stat: "IAF Certified Compliance"
  },
  {
    year: "2026",
    title: "Large-Scale South India Service Network",
    subtitle: "Enterprise Scale with 457+ Branches",
    description: "Today, IDART stands as a recognized titan in South Indian energy safety, field inspection, copper gas pipelines, roof trusses, and startup loan facilitation, expanding actively into western and central India.",
    stat: "457+ Branches & 3,687+ Distributors"
  }
];
