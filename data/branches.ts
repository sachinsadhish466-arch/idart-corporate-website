export interface Branch {
  id: string;
  name: string;
  city: string;
  district: string;
  state: string;
  type: "Headquarters" | "Regional Office" | "Main Branch" | "Service Hub" | "Expansion Center";
  address: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
  techniciansCount: number;
}

export const BRANCH_DATA: Branch[] = [
  // TAMIL NADU - Headquarters & Major Hubs
  {
    id: "tn-cbe-hq",
    name: "IDART Corporate Head Office",
    city: "Coimbatore",
    district: "Coimbatore",
    state: "Tamil Nadu",
    type: "Headquarters",
    address: "SF No - 350, AGTRS IDART Building, Maruthamalai Main Road, Mullai Nagar, Coimbatore - 641041",
    phone: "0422 - 4369081",
    email: "info@idartpvtltd.in",
    coordinates: { lat: 11.0168, lng: 76.9558 },
    techniciansCount: 45
  },
  {
    id: "tn-cbe-vadavalli",
    name: "Coimbatore Regional Operations",
    city: "Vadavalli",
    district: "Coimbatore",
    state: "Tamil Nadu",
    type: "Regional Office",
    address: "No 22, Kalidass Nagar, 2nd Cross Street, Vadavalli, Coimbatore - 641041",
    phone: "+91 8248012319",
    email: "tn.region@idartpvtltd.in",
    coordinates: { lat: 11.0258, lng: 76.9056 },
    techniciansCount: 38
  },
  {
    id: "tn-cbe-pollachi",
    name: "Pollachi Service Hub",
    city: "Pollachi",
    district: "Coimbatore",
    state: "Tamil Nadu",
    type: "Service Hub",
    address: "New Scheme Road, Near Bus Stand, Pollachi - 642001",
    phone: "+91 97904 47011",
    email: "pollachi@idartpvtltd.in",
    coordinates: { lat: 10.6609, lng: 77.0048 },
    techniciansCount: 14
  },
  {
    id: "tn-chn-central",
    name: "Chennai Metro Hub",
    city: "Chennai",
    district: "Chennai",
    state: "Tamil Nadu",
    type: "Main Branch",
    address: "Anna Salai, Mount Road, Teynampet, Chennai - 600018",
    phone: "+91 98402 11982",
    email: "chennai@idartpvtltd.in",
    coordinates: { lat: 13.0827, lng: 80.2707 },
    techniciansCount: 52
  },
  {
    id: "tn-chn-tambaram",
    name: "Tambaram South Hub",
    city: "Tambaram",
    district: "Chennai",
    state: "Tamil Nadu",
    type: "Service Hub",
    address: "GST Road, Near Tambaram Railway Station, Chennai - 600045",
    phone: "+91 98402 11985",
    email: "tambaram@idartpvtltd.in",
    coordinates: { lat: 12.9249, lng: 80.1000 },
    techniciansCount: 22
  },
  {
    id: "tn-mdu-central",
    name: "Madurai South Hub",
    city: "Madurai",
    district: "Madurai",
    state: "Tamil Nadu",
    type: "Main Branch",
    address: "West Veli Street, Near Periyar Bus Stand, Madurai - 625001",
    phone: "+91 97890 22341",
    email: "madurai@idartpvtltd.in",
    coordinates: { lat: 9.9252, lng: 78.1198 },
    techniciansCount: 30
  },
  {
    id: "tn-slm-junction",
    name: "Salem Central Hub",
    city: "Salem",
    district: "Salem",
    state: "Tamil Nadu",
    type: "Main Branch",
    address: "Omalur Main Road, Near New Bus Stand, Salem - 636004",
    phone: "+91 97890 33452",
    email: "salem@idartpvtltd.in",
    coordinates: { lat: 11.6643, lng: 78.1460 },
    techniciansCount: 26
  },
  {
    id: "tn-try-central",
    name: "Tiruchirappalli Central Hub",
    city: "Tiruchirappalli",
    district: "Tiruchirappalli",
    state: "Tamil Nadu",
    type: "Main Branch",
    address: "Cantonment, Near Central Bus Stand, Trichy - 620001",
    phone: "+91 97890 44563",
    email: "trichy@idartpvtltd.in",
    coordinates: { lat: 10.7905, lng: 78.7047 },
    techniciansCount: 28
  },
  {
    id: "tn-erd-bhavani",
    name: "Erode Kongu Hub",
    city: "Erode",
    district: "Erode",
    state: "Tamil Nadu",
    type: "Main Branch",
    address: "Brough Road, Commercial Complex, Erode - 638001",
    phone: "+91 97890 55674",
    email: "erode@idartpvtltd.in",
    coordinates: { lat: 11.3410, lng: 77.7172 },
    techniciansCount: 24
  },
  {
    id: "tn-tpr-knit",
    name: "Tiruppur Industrial Hub",
    city: "Tiruppur",
    district: "Tiruppur",
    state: "Tamil Nadu",
    type: "Main Branch",
    address: "Avinashi Road, Pushpa Theatre Corner, Tiruppur - 641602",
    phone: "+91 97890 66785",
    email: "tiruppur@idartpvtltd.in",
    coordinates: { lat: 11.1085, lng: 77.3411 },
    techniciansCount: 32
  },
  {
    id: "tn-vlr-katpadi",
    name: "Vellore Fort Branch",
    city: "Vellore",
    district: "Vellore",
    state: "Tamil Nadu",
    type: "Service Hub",
    address: "Katpadi Main Road, Near Gandhi Nagar, Vellore - 632006",
    phone: "+91 97890 77896",
    email: "vellore@idartpvtltd.in",
    coordinates: { lat: 12.9165, lng: 79.1325 },
    techniciansCount: 18
  },
  {
    id: "tn-tvl-junction",
    name: "Tirunelveli Nellai Branch",
    city: "Tirunelveli",
    district: "Tirunelveli",
    state: "Tamil Nadu",
    type: "Service Hub",
    address: "Trivandrum Road, Palayamkottai, Tirunelveli - 627002",
    phone: "+91 97890 88907",
    email: "tirunelveli@idartpvtltd.in",
    coordinates: { lat: 8.7139, lng: 77.7567 },
    techniciansCount: 16
  },
  {
    id: "tn-thj-delta",
    name: "Thanjavur Delta Hub",
    city: "Thanjavur",
    district: "Thanjavur",
    state: "Tamil Nadu",
    type: "Service Hub",
    address: "Medical College Road, Thanjavur - 613007",
    phone: "+91 97890 99018",
    email: "thanjavur@idartpvtltd.in",
    coordinates: { lat: 10.7870, lng: 79.1378 },
    techniciansCount: 15
  },
  {
    id: "tn-dgl-rock",
    name: "Dindigul City Hub",
    city: "Dindigul",
    district: "Dindigul",
    state: "Tamil Nadu",
    type: "Service Hub",
    address: "Round Road, Near City Bus Stand, Dindigul - 624005",
    phone: "+91 97890 10129",
    email: "dindigul@idartpvtltd.in",
    coordinates: { lat: 10.3673, lng: 77.9803 },
    techniciansCount: 14
  },
  {
    id: "tn-krr-textile",
    name: "Karur Industrial Branch",
    city: "Karur",
    district: "Karur",
    state: "Tamil Nadu",
    type: "Service Hub",
    address: "Kovai Road, Sengunthapuram, Karur - 639002",
    phone: "+91 97890 12230",
    email: "karur@idartpvtltd.in",
    coordinates: { lat: 10.9601, lng: 78.0766 },
    techniciansCount: 12
  },
  {
    id: "tn-nmk-transport",
    name: "Namakkal Transport Hub",
    city: "Namakkal",
    district: "Namakkal",
    state: "Tamil Nadu",
    type: "Service Hub",
    address: "Salem Road, Near Collectorate, Namakkal - 637001",
    phone: "+91 97890 13341",
    email: "namakkal@idartpvtltd.in",
    coordinates: { lat: 11.2189, lng: 78.1674 },
    techniciansCount: 12
  },

  // ANDHRA PRADESH - Regional Office & Hubs
  {
    id: "ap-ctr-ro",
    name: "Andhra Pradesh Regional Office",
    city: "Chittoor",
    district: "Chittoor",
    state: "Andhra Pradesh",
    type: "Regional Office",
    address: "No 4/2044 - Vellore Road, Opp. NPS Women's College, Greamspet, Chittoor - 517002",
    phone: "+91 97904 47005",
    email: "ap.region@idartpvtltd.in",
    coordinates: { lat: 13.2172, lng: 79.1003 },
    techniciansCount: 34
  },
  {
    id: "ap-tpt-temple",
    name: "Tirupati City Center",
    city: "Tirupati",
    district: "Tirupati",
    state: "Andhra Pradesh",
    type: "Main Branch",
    address: "Air Bypass Road, Near Leela Mahal, Tirupati - 517501",
    phone: "+91 97904 47008",
    email: "tirupati@idartpvtltd.in",
    coordinates: { lat: 13.6288, lng: 79.4192 },
    techniciansCount: 22
  },
  {
    id: "ap-vza-river",
    name: "Vijayawada Commercial Hub",
    city: "Vijayawada",
    district: "Krishna",
    state: "Andhra Pradesh",
    type: "Main Branch",
    address: "MG Road, Benz Circle, Vijayawada - 520010",
    phone: "+91 97904 47014",
    email: "vijayawada@idartpvtltd.in",
    coordinates: { lat: 16.5062, lng: 80.6480 },
    techniciansCount: 28
  },
  {
    id: "ap-vzg-coastal",
    name: "Visakhapatnam Steel City Branch",
    city: "Visakhapatnam",
    district: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Main Branch",
    address: "Dwaraka Nagar, Main Road, Visakhapatnam - 530016",
    phone: "+91 97904 47020",
    email: "vizag@idartpvtltd.in",
    coordinates: { lat: 17.6868, lng: 83.2185 },
    techniciansCount: 26
  },
  {
    id: "ap-gtr-chilli",
    name: "Guntur Agritech Branch",
    city: "Guntur",
    district: "Guntur",
    state: "Andhra Pradesh",
    type: "Service Hub",
    address: "Arundelpet, Brodipet Center, Guntur - 522002",
    phone: "+91 97904 47025",
    email: "guntur@idartpvtltd.in",
    coordinates: { lat: 16.3067, lng: 80.4365 },
    techniciansCount: 18
  },

  // KERALA - High Density Domestic & Hospitality Hubs
  {
    id: "kl-ekm-metro",
    name: "Kochi Marine Hub",
    city: "Kochi",
    district: "Ernakulam",
    state: "Kerala",
    type: "Main Branch",
    address: "MG Road, Ravipuram, Ernakulam, Kochi - 682016",
    phone: "+91 94470 12345",
    email: "kochi@idartpvtltd.in",
    coordinates: { lat: 9.9312, lng: 76.2673 },
    techniciansCount: 36
  },
  {
    id: "kl-tvm-capital",
    name: "Thiruvananthapuram Capital Branch",
    city: "Thiruvananthapuram",
    district: "Thiruvananthapuram",
    state: "Kerala",
    type: "Main Branch",
    address: "Statue Junction, MG Road, Thiruvananthapuram - 695001",
    phone: "+91 94470 23456",
    email: "trivandrum@idartpvtltd.in",
    coordinates: { lat: 8.5241, lng: 76.9366 },
    techniciansCount: 25
  },
  {
    id: "kl-kkd-malabar",
    name: "Kozhikode Malabar Hub",
    city: "Kozhikode",
    district: "Kozhikode",
    state: "Kerala",
    type: "Service Hub",
    address: "Mavoor Road, Near Bus Terminal, Kozhikode - 673004",
    phone: "+91 94470 34567",
    email: "calicut@idartpvtltd.in",
    coordinates: { lat: 11.2588, lng: 75.7804 },
    techniciansCount: 20
  },
  {
    id: "kl-pkd-gap",
    name: "Palakkad Border Hub",
    city: "Palakkad",
    district: "Palakkad",
    state: "Kerala",
    type: "Service Hub",
    address: "TB Road, Near Fort Maidan, Palakkad - 678001",
    phone: "+91 94470 45678",
    email: "palakkad@idartpvtltd.in",
    coordinates: { lat: 10.7867, lng: 76.6548 },
    techniciansCount: 16
  },
  {
    id: "kl-tsr-cultural",
    name: "Thrissur Cultural Branch",
    city: "Thrissur",
    district: "Thrissur",
    state: "Kerala",
    type: "Service Hub",
    address: "Round South, Kuruppam Road, Thrissur - 680001",
    phone: "+91 94470 56789",
    email: "thrissur@idartpvtltd.in",
    coordinates: { lat: 10.5276, lng: 76.2144 },
    techniciansCount: 18
  },

  // TELANGANA
  {
    id: "tg-hyd-cyber",
    name: "Hyderabad Cyber City Hub",
    city: "Hyderabad",
    district: "Hyderabad",
    state: "Telangana",
    type: "Main Branch",
    address: "Madhapur, Hitech City Road, Hyderabad - 500081",
    phone: "+91 99890 11223",
    email: "hyderabad@idartpvtltd.in",
    coordinates: { lat: 17.3850, lng: 78.4867 },
    techniciansCount: 40
  },
  {
    id: "tg-wgl-heritage",
    name: "Warangal Kakatiya Hub",
    city: "Warangal",
    district: "Warangal",
    state: "Telangana",
    type: "Service Hub",
    address: "Hanamkonda Main Road, Warangal - 506001",
    phone: "+91 99890 22334",
    email: "warangal@idartpvtltd.in",
    coordinates: { lat: 17.9689, lng: 79.5941 },
    techniciansCount: 16
  },

  // PUDUCHERRY
  {
    id: "py-pondy-heritage",
    name: "Puducherry Coastal Operations",
    city: "Puducherry",
    district: "Puducherry",
    state: "Puducherry",
    type: "Service Hub",
    address: "Mission Street, Heritage Town, Puducherry - 605001",
    phone: "+91 94430 99881",
    email: "pondicherry@idartpvtltd.in",
    coordinates: { lat: 11.9416, lng: 79.8083 },
    techniciansCount: 15
  },

  // KARNATAKA (Expansion)
  {
    id: "ka-blr-tech",
    name: "Bengaluru Tech Corridor Hub",
    city: "Bengaluru",
    district: "Bengaluru Urban",
    state: "Karnataka",
    type: "Expansion Center",
    address: "Hosur Road, Electronic City Phase 1, Bengaluru - 560100",
    phone: "+91 98860 12340",
    email: "bengaluru@idartpvtltd.in",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    techniciansCount: 28
  },
  {
    id: "ka-mys-palace",
    name: "Mysuru Heritage Branch",
    city: "Mysuru",
    district: "Mysuru",
    state: "Karnataka",
    type: "Expansion Center",
    address: "Jhansi Lakshmibai Road, Mysuru - 570005",
    phone: "+91 98860 23451",
    email: "mysuru@idartpvtltd.in",
    coordinates: { lat: 12.2958, lng: 76.6394 },
    techniciansCount: 14
  },

  // MAHARASHTRA (Expansion)
  {
    id: "mh-pun-auto",
    name: "Pune Industrial Node",
    city: "Pune",
    district: "Pune",
    state: "Maharashtra",
    type: "Expansion Center",
    address: "Chinchwad Station Road, PCMC, Pune - 411019",
    phone: "+91 98220 34567",
    email: "pune@idartpvtltd.in",
    coordinates: { lat: 18.5204, lng: 73.8567 },
    techniciansCount: 15
  },

  // ODISHA (Expansion)
  {
    id: "od-bbi-temple",
    name: "Bhubaneswar Smart Hub",
    city: "Bhubaneswar",
    district: "Khurda",
    state: "Odisha",
    type: "Expansion Center",
    address: "Janpath Road, Saheed Nagar, Bhubaneswar - 751007",
    phone: "+91 94370 45678",
    email: "bhubaneswar@idartpvtltd.in",
    coordinates: { lat: 20.2961, lng: 85.8245 },
    techniciansCount: 12
  },

  // MADHYA PRADESH (Expansion)
  {
    id: "mp-ind-commercial",
    name: "Indore Central Gateway",
    city: "Indore",
    district: "Indore",
    state: "Madhya Pradesh",
    type: "Expansion Center",
    address: "AB Road, Vijay Nagar, Indore - 452010",
    phone: "+91 98260 56789",
    email: "indore@idartpvtltd.in",
    coordinates: { lat: 22.7196, lng: 75.8577 },
    techniciansCount: 10
  }
];

export const STATES_LIST = [
  "All States",
  "Tamil Nadu",
  "Kerala",
  "Andhra Pradesh",
  "Telangana",
  "Puducherry",
  "Karnataka",
  "Maharashtra",
  "Odisha",
  "Madhya Pradesh"
];
