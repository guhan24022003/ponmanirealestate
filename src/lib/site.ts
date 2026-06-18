import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

export const site = {
  name: "Ponmani Real Estate",
  tagline: "Where Trust Meets Opportunity",
  motto: "Building Trust Through Every Property",
  location: "Thanjavur, Tamil Nadu",
  address: "No. 9/2886, Srinivasam Pillai Road, Santhapillai Gate Bus Stop, Thanjavur - 613001",
  phone: "+91 70107 97593",
  phoneRaw: "+917010797593",
  whatsapp: "917010797593",
  email: "guhanvikas@gmail.com",
  instagram: "https://instagram.com/ponmanirealestate",
mapEmbed:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4542443108076!2d79.13973370129698!3d10.776479407608349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab9003b5a4c4f%3A0x1081b86d90b246fe!2sPonmani%20Real-estate!5e0!3m2!1sen!2sin!4v1781793047389!5m2!1sen!2sin",
};

export const whatsappLink = (msg = "Hi, I'd like to know more about your properties.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const services = [
  {
    slug: "residential-plots",
    title: "Residential Plots",
    icon: "Home",
    short: "DTCP-approved residential plots in prime Thanjavur locations.",
    description:
      "We offer a curated selection of legally verified residential plots across Thanjavur and surrounding towns. Every plot is clear-titled, surveyed and ready for registration.",
  },
  {
    slug: "land-investments",
    title: "Land Investments",
    icon: "TrendingUp",
    short: "Long-term land investment opportunities with appreciation potential.",
    description:
      "Build generational wealth through carefully selected agricultural and developable land parcels in high-growth corridors around Thanjavur.",
  },
  {
    slug: "buying-selling",
    title: "Property Buying & Selling",
    icon: "Handshake",
    short: "End-to-end assistance for buyers and sellers, with fair pricing.",
    description:
      "From sourcing the right property to negotiating the right price and completing paperwork, we handle every step transparently.",
  },
  {
    slug: "layout-development",
    title: "Layout Development",
    icon: "LayoutGrid",
    short: "Professionally planned layouts with roads, drainage and approvals.",
    description:
      "We develop residential layouts with proper road network, drainage planning and statutory approvals — ready for families to build.",
  },
  {
    slug: "legal-verification",
    title: "Legal Verification",
    icon: "ShieldCheck",
    short: "Title checks, EC verification and complete legal due-diligence.",
    description:
      "Our in-house legal network conducts thorough title searches, encumbrance verification and document audits before any deal proceeds.",
  },
  {
    slug: "property-registration",
    title: "Property Registration",
    icon: "FileText",
    short: "Smooth registration support at the sub-registrar office.",
    description:
      "We coordinate stamp-duty calculation, drafting, appointment scheduling and registration assistance — saving you time and stress.",
  },
  {
    slug: "consultation",
    title: "Real Estate Consultation",
    icon: "Briefcase",
    short: "Trusted advice for first-time buyers, NRIs and investors.",
    description:
      "Tap into 36+ years of market insight. We help you evaluate locations, pricing trends and long-term suitability.",
  },
  {
    slug: "construction-guidance",
    title: "Construction Guidance",
    icon: "HardHat",
    short: "Referrals and oversight for trusted local builders.",
    description:
      "From architect introductions to vetted contractors, we help you build your home with confidence and quality.",
  },
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    icon: "LineChart",
    short: "Strategic advice on property portfolios and ROI planning.",
    description:
      "Personalised advisory for HNIs and NRIs looking to grow a real-estate portfolio across Tamil Nadu's emerging markets.",
  },
];

// type PropertyDef = {
//   id: string;
//   name: string;
//   location: string;
//   address: string;
//   type: string;
//   size: string;
//   roadWidth: string;
//   facing: string;
//   approval: string;
//   ownership: string;
//   status: string;
//   image: string;
//   images: string[];
//   short: string;
//   description: string[];
//   highlights: string[];
//   amenities: string[];
//   investmentBenefits: string[];
//   nearby: { name: string; time: string }[];
// };

export const properties = [
  {
    id: "thanjavur-coconut-grove-plots",
    name: "Coconut Grove Residential Plots",
    location: "Vallam Road, Thanjavur",
    address: "Vallam Road, Near Mariamman Temple, Thanjavur — 613403",
    type: "Residential Plot",
    size: "1200 – 2400 Sq Ft",
    roadWidth: "30 Feet",
    facing: "East / North",
    approval: "DTCP Approved",
    ownership: "Clear Marketable Title",
    status: "Available",
    image: property1,
    images: [property1, property2, property4, property3],
    short:
      "DTCP-approved residential plots surrounded by mature coconut groves, ready for immediate registration.",
    description: [
      "Coconut Grove is a thoughtfully planned DTCP-approved residential layout situated on the fast-developing Vallam Road corridor of Thanjavur. Spread across a serene patch of mature coconut groves, the layout offers a rare combination of clean air, traditional charm and modern infrastructure.",
      "Every plot is clear-titled, surveyed and ready for immediate registration. The internal roads, drainage system and avenue plantation have been completed — making this an ideal opportunity for families who want to build their own home or investors looking for steady long-term appreciation.",
    ],
    highlights: [
      "DTCP Approved Layout",
      "Clear Marketable Title",
      "Ready For Registration",
      "Compound Marking Done",
      "Water Connection Available",
      "EB Connection Available",
      "High Appreciation Area",
      "Near Schools & Temple",
    ],
    amenities: [
      "Tar Road Access",
      "Street Lighting",
      "Storm Water Drains",
      "Water Supply",
      "Electricity",
      "Compound Wall",
      "Children's Park",
      "Avenue Plantation",
    ],
    investmentBenefits: [
      "High Growth Vallam Corridor",
      "Steady 12–15% Annual Appreciation",
      "Strong End-User Demand",
      "Close To Proposed Ring Road",
      "Rapid Infrastructure Development",
      "Excellent Long-Term Value",
    ],
    nearby: [
      { name: "Mariamman Temple", time: "2 Minutes" },
      { name: "Vallam Bus Stop", time: "5 Minutes" },
      { name: "Government School", time: "5 Minutes" },
      { name: "Thanjavur Railway Station", time: "12 Minutes" },
      { name: "Multi-speciality Hospital", time: "8 Minutes" },
    ],
  },
  {
    id: "thanjavur-premium-gated-layout",
    name: "Premium Gated Layout",
    location: "Trichy Highway, Thanjavur",
    address: "NH-67 Trichy Highway, Thanjavur — 613005",
    type: "Gated Plots",
    size: "1500 – 3000 Sq Ft",
    roadWidth: "40 Feet Main / 30 Feet Internal",
    facing: "Multiple Options",
    approval: "DTCP Approved",
    ownership: "Clear Title — Plot-wise Patta",
    status: "Available",
    image: property2,
    images: [property2, property1, property3, property4],
    short:
      "Premium gated community layout with planned infrastructure, perfect for families building their dream home.",
    description: [
      "A premium gated residential layout right on the Trichy Highway, designed for families who value security, quality infrastructure and easy connectivity. The layout features wide entry, paved internal roads and underground drainage.",
      "Each plot comes with its own Patta and Encumbrance Certificate. Statutory approvals are complete and registrations can be done immediately at the Thanjavur sub-registrar office.",
    ],
    highlights: [
      "Gated Community Layout",
      "DTCP Approved",
      "Plot-wise Patta",
      "Underground Drainage",
      "Paved Internal Roads",
      "Compound Wall on All Sides",
      "Ready For Registration",
      "Highway Frontage",
    ],
    amenities: [
      "24/7 Security Concept",
      "Compound Wall",
      "Avenue Plantation",
      "Designated Parks",
      "RCC Drains",
      "Street Lights",
      "Water Supply",
      "Electricity",
    ],
    investmentBenefits: [
      "Prime Highway Location",
      "Excellent Connectivity to Trichy",
      "Premium Gated Community Value",
      "Strong Resale Demand",
      "Continuous Infrastructure Upgrades",
      "Long-Term Capital Growth",
    ],
    nearby: [
      { name: "Trichy Highway (NH-67)", time: "On the road" },
      { name: "CBE School", time: "4 Minutes" },
      { name: "Thanjavur Medical College", time: "10 Minutes" },
      { name: "New Bus Stand", time: "8 Minutes" },
      { name: "Railway Junction", time: "12 Minutes" },
    ],
  },
  {
    id: "thanjavur-independent-villa",
    name: "Independent Villa Home",
    location: "Medical College Road, Thanjavur",
    address: "Medical College Road, Thanjavur — 613004",
    type: "Independent House",
    size: "2400 Sq Ft Built-up · 3600 Sq Ft Land",
    roadWidth: "30 Feet",
    facing: "East",
    approval: "Local Body Approved Plan",
    ownership: "Patta in Owner's Name",
    status: "Ready To Move",
    image: property3,
    images: [property3, property2, property1, property4],
    short:
      "Spacious two-storey independent home with garden, compound wall and quiet residential surroundings.",
    description: [
      "A beautifully built two-storey independent villa in one of Thanjavur's most respected residential pockets. The home features 3 spacious bedrooms, a separate pooja room, a modular kitchen and a landscaped garden.",
      "Built using premium materials and Vaastu-compliant planning. Ideal for families looking for a ready-to-move home in a quiet, established neighbourhood.",
    ],
    highlights: [
      "3 BHK with Pooja Room",
      "Vaastu Compliant Plan",
      "Car Parking & Garden",
      "Patta in Owner's Name",
      "Ready to Move In",
      "Premium Construction",
      "Quiet Residential Area",
      "Established Neighbourhood",
    ],
    amenities: [
      "Borewell + Corporation Water",
      "Compound Wall",
      "Solar Provision",
      "Landscaped Garden",
      "Servant Quarters",
      "Car Parking",
      "Modular Kitchen",
      "Backup Power Ready",
    ],
    investmentBenefits: [
      "Premium Locality",
      "Ready Rental Income Potential",
      "Established Resale Market",
      "Close to Hospitals & Schools",
      "Low Maintenance Asset",
      "Strong End-User Demand",
    ],
    nearby: [
      { name: "Thanjavur Medical College", time: "3 Minutes" },
      { name: "Kalyana Mahal School", time: "5 Minutes" },
      { name: "Big Bazaar Street", time: "7 Minutes" },
      { name: "Railway Junction", time: "10 Minutes" },
      { name: "Brihadeeswarar Temple", time: "12 Minutes" },
    ],
  },
  {
    id: "thanjavur-coconut-farmland",
    name: "Coconut Farmland",
    location: "Kumbakonam Road, Thanjavur District",
    address: "Kumbakonam Road, Thanjavur District — 612001",
    type: "Agricultural Land",
    size: "2 – 5 Acres",
    roadWidth: "20 Feet Motorable",
    facing: "Road Frontage",
    approval: "Patta Land",
    ownership: "Clear Title — Single Owner",
    status: "Available",
    image: property4,
    images: [property4, property1, property2, property3],
    short:
      "Fertile coconut farmland in the Thanjavur delta with assured irrigation and motorable road frontage.",
    description: [
      "Productive coconut farmland in the heart of the fertile Thanjavur delta. The land is yielding, well-maintained and has an assured water source through a deep borewell with motor.",
      "Ideal for buyers looking to build a farmhouse, expand an agricultural portfolio or hold long-term land in a high-demand belt along the Kumbakonam Road corridor.",
    ],
    highlights: [
      "Patta Land with Clear Title",
      "Assured Water Source",
      "Motorable Road Frontage",
      "Yielding Coconut Trees",
      "Suitable for Farmhouse",
      "Fertile Delta Soil",
      "Single Owner Property",
      "Quick Registration",
    ],
    amenities: [
      "Borewell with Motor",
      "Drip Irrigation Ready",
      "Compound Fencing",
      "Caretaker Quarters",
      "Storage Shed",
      "Three-Phase Power",
      "Road Access",
      "Approach Track",
    ],
    investmentBenefits: [
      "Active Agricultural Income",
      "Appreciating Delta Land",
      "Future Farmhouse Potential",
      "Strong Local Demand",
      "Low Holding Cost",
      "Hedge Against Inflation",
    ],
    nearby: [
      { name: "Kumbakonam Road", time: "On the road" },
      { name: "Village School", time: "5 Minutes" },
      { name: "Local Market", time: "7 Minutes" },
      { name: "Kumbakonam Town", time: "20 Minutes" },
      { name: "Thanjavur City", time: "25 Minutes" },
    ],
  },
];

export type Property = (typeof properties)[number];

export const whyChoose = [
  { title: "36+ Years Experience", icon: "Award" },
  { title: "26+ Years Business Excellence", icon: "Trophy" },
  { title: "Trusted by Generations", icon: "Users" },
  { title: "Legally Verified Properties", icon: "ShieldCheck" },
  { title: "Transparent Documentation", icon: "FileCheck" },
  { title: "Fair Pricing", icon: "BadgeIndianRupee" },
  { title: "Professional Consultation", icon: "Briefcase" },
  { title: "Strong Industry Network", icon: "Network" },
  { title: "Personalized Support", icon: "HeartHandshake" },
  { title: "Long-Term Relationships", icon: "Handshake" },
];
