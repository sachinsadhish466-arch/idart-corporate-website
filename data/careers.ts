export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  ageRequirement?: string;
  shortDescription: string;
  responsibilities: string[];
  qualifications: string[];
  skills: string[];
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "safety-officer",
    title: "SAFETY OFFICER",
    department: "Field Inspection & Technical Operations",
    location: "Coimbatore / Across South India",
    type: "Full-Time",
    experience: "Freshers / 0–3 Years",
    ageRequirement: "21–28 years",
    shortDescription: "Looking for energetic field professionals. Freshers may also apply. Age requirement: 21–28 years.",
    responsibilities: [
      "Conduct door-to-door domestic and commercial LPG mandatory safety inspections.",
      "Execute calibrated electronic leak detection tests on cylinders, rubber hoses, regulators, and burners.",
      "Educate consumers and domestic homemakers on emergency precautions and cylinder handling safety.",
      "Issue digital compliance inspection certificates via the IDART mobile field portal.",
      "Liaise with local LPG distributor agencies to ensure coverage of scheduled consumer clusters."
    ],
    qualifications: [
      "Any Graduate / Diploma in Mechanical / Fire & Safety / Industrial Safety or equivalent.",
      "Freshers possessing high energy and commitment to field operations are welcome to apply.",
      "Age requirement strictly 21 to 28 years.",
      "Valid two-wheeler driving license is preferred."
    ],
    skills: ["Safety Mindset", "Communication in Regional Language", "Punctuality", "Field Dedication", "Customer Empathy"]
  },
  {
    id: "web-developer",
    title: "WEB DEVELOPER",
    department: "Information Technology & Digital Services",
    location: "Head Office, Coimbatore (Hybrid/On-site)",
    type: "Full-Time",
    experience: "2–5 Years",
    shortDescription: "We are looking for a skilled Web Developer to build, optimize and maintain high-quality websites and web applications.",
    responsibilities: [
      "Design, build, optimize and maintain enterprise-grade web applications and distributor portal interfaces.",
      "Collaborate with product and operations teams to translate field workflow requirements into responsive digital tools.",
      "Ensure fast page load times, robust API integrations, responsive layouts, and cross-browser accessibility.",
      "Maintain high code quality, security audits, and continuous cloud deployments.",
      "Integrate interactive maps, real-time tracking, and automated inspection reporting dashboards."
    ],
    qualifications: [
      "B.E. / B.Tech in Computer Science / IT / MCA or relevant practical experience.",
      "Proven track record with Next.js, React, TypeScript, and modern CSS frameworks.",
      "Solid understanding of REST APIs, database schemas, and state management.",
      "Strong debugging and performance optimization skills."
    ],
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API Integration", "UI/UX Engineering"]
  },
  {
    id: "process-engineer",
    title: "PROCESS ENGINEER",
    department: "Engineering & Quality Assurance",
    location: "Coimbatore / Field Clusters",
    type: "Full-Time",
    experience: "3–6 Years",
    shortDescription: "We are looking for a Process Engineer to analyze, improve and optimize processes for efficiency, quality and operational performance.",
    responsibilities: [
      "Analyze, improve and optimize field inspection, pipeline installation, and structural fabrication workflows.",
      "Formulate standard operating procedures (SOPs) compliant with ISO 9001:2015 and Bureau of Indian Standards (BIS).",
      "Monitor operational turnaround times, identify bottlenecks, and engineer corrective action loops.",
      "Lead technical safety training sessions for field technicians and quality audit inspectors.",
      "Generate monthly operational excellence metrics and root-cause analysis reports for executive leadership."
    ],
    qualifications: [
      "Bachelor's Degree in Mechanical, Chemical, Industrial, or Production Engineering.",
      "3+ years of experience in process optimization, quality engineering, or gas piping/safety domains.",
      "Familiarity with ISO 9001 quality management systems and industrial safety standards.",
      "Proficient in process mapping, statistical process control, and root cause analysis."
    ],
    skills: ["Process Optimization", "ISO 9001:2015", "Root Cause Analysis", "Field Engineering", "Quality Assurance"]
  }
];

export const CULTURE_PERKS = [
  { title: "Safety-First Culture", desc: "Highest enterprise commitment to safety gear, certified training, and employee health insurance." },
  { title: "Pan-South India Growth", desc: "Merit-based promotions with leadership pathways across 457+ running branches." },
  { title: "Skill Certification", desc: "Regular specialized technical training programs in gas engineering and safety protocols." },
  { title: "Supportive Environment", desc: "Collaborative, transparent leadership under CEO S. Gowtham Kumar's people-centric vision." }
];
