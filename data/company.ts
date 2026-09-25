export interface OfficeLocation {
  title: string;
  address: string[];
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  isHeadquarters?: boolean;
}

export const COMPANY_INFO = {
  legalName: "AGTRS IDART PRIVATE LIMITED",
  brandName: "IDART",
  tagline: "Built on Trust. Driven by Safety. Powered by People.",
  heroHeadline: "WE BRING FLAMES TO EVERY HOME ACROSS SOUTH INDIA",
  heroSubtitle: "Safety, service and technology powering LPG consumers, distributors and businesses across South India.",
  foundedYear: 2009,
  incorporatedYear: 2017,
  yearsOfExperience: "17+",
  activeBranches: "457+",
  qualifiedStaff: "482+",
  distributorsServed: "3687+",
  regionalOfficesCount: "4",
  networkCoverage: "South India Wide Service Network",
  
  ceo: {
    name: "S. Gowtham Kumar",
    title: "Chief Executive Officer",
    company: "AGTRS IDART PRIVATE LIMITED",
    quote1: "At IDART, our ambition is simple — to build an organization where safety, service quality, technology and people come together to create lasting value.",
    quote2: "Every service we deliver represents a responsibility toward our customers, partners and communities.",
    quote3: "We are committed to building IDART into a trusted and respected leader in India's safety and service ecosystem."
  },

  compliance: {
    cin: "U01100TZ2017PTC029601",
    gst: "33AAQCA1658M1ZA",
    msme: "03-0095886",
    duns: "772076483",
    iso: "ISO 9001:2015",
    isoScope: "Providing inspection services and conducting consumer safety awareness programs & import and trading of fire extinguishers.",
    iafCode: "IAF - 22IQLU17",
    iafServiceCodes: ["34", "36", "29"]
  },

  headOffice: {
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India",
    address: [
      "SF No - 350, AGTRS IDART Building",
      "Maruthamalai Main Road, Mullai Nagar",
      "Coimbatore, Tamil Nadu, India - 641041"
    ],
    phone: "0422 - 4369081",
    email: "info@idartpvtltd.in"
  },

  regionalOffices: [
    {
      title: "Corporate Head Office",
      address: [
        "SF No - 350, AGTRS IDART Building",
        "Maruthamalai Main Road, Mullai Nagar",
        "Coimbatore, Tamil Nadu - 641041"
      ],
      city: "Coimbatore",
      state: "Tamil Nadu",
      pincode: "641041",
      phone: "0422 - 4369081",
      email: "info@idartpvtltd.in",
      isHeadquarters: true
    },
    {
      title: "Tamil Nadu Regional Office",
      address: [
        "No 22, Kalidass Nagar, 2nd Cross Street",
        "Vadavalli, Coimbatore",
        "Tamil Nadu, India - 641041"
      ],
      city: "Coimbatore",
      state: "Tamil Nadu",
      pincode: "641041",
      phone: "+91 8248012319",
      email: "tn.region@idartpvtltd.in"
    },
    {
      title: "Andhra Pradesh Regional Office",
      address: [
        "No 4/2044 - Vellore Road, Opp. NPS Women's College",
        "Greamspet, Chittoor",
        "Andhra Pradesh, India - 517002"
      ],
      city: "Chittoor",
      state: "Andhra Pradesh",
      pincode: "517002",
      phone: "+91 97904 47005",
      email: "ap.region@idartpvtltd.in"
    }
  ],

  statesServed: ["Tamil Nadu", "Kerala", "Andhra Pradesh", "Telangana", "Puducherry"],
  expansionStates: ["Karnataka", "Madhya Pradesh", "Odisha", "Maharashtra"]
};
