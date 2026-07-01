export const company = {
  name: "VSA Enterprises",
  tagline: "A Paradise of Fasteners",
  subTagline: "Industrial Hardware & Engineering Solutions",
  locationLine: "Bhiwadi, Rajasthan, India (301019)",
  shortAbout:
    "Supplier and trader of industrial fasteners and engineering materials for industrial, fabrication, electrical panel, and maintenance applications across India.",
  about:
    "Supplier and trader of industrial fasteners - bolts, nuts, screws, washers, studs, and anchors - available in Mild Steel (MS), Stainless Steel (SS), Galvanized Iron (GI), Copper, Aluminium, and Brass, catering to diverse industrial and engineering applications.",
  visionMission:
    "Committed to providing high-quality products with timely delivery and competitive pricing, ensuring complete customer satisfaction and reliable service.",
  address:
    "5/589, Bhiwadi, UIT Colony, RIICO Industrial Area Kharani, Khairthal - Tijara, Rajasthan, 301019",
  phones: ["+91 8650343496", "+91 8853144855", "+91 9509570570"],
  email: "info@vsaenterprises.in",
  website: "www.vsaenterprises.in",
  websiteUrl: "https://www.vsaenterprises.in",
  gstin: "08DAFPK1297H1ZI",
  strengths: [
    {
      title: "Uncompromised Quality",
      description: "Premium-grade fasteners to meet industry standards and customer expectations."
    },
    {
      title: "Affordable Prices",
      description: "Competitive pricing without compromising on quality and reliability."
    },
    {
      title: "Friendly & Professional Staff",
      description: "Dedicated team committed to excellent customer support and technical assistance."
    },
    {
      title: "Ready Stock Availability",
      description: "Extensive inventory for quick order fulfillment and reduced lead times."
    },
    {
      title: "Timely Delivery",
      description: "Efficient logistics and supply chain management."
    },
    {
      title: "State-of-the-Art Warehouse",
      description: "Proper storage, inventory management, and prompt dispatch."
    }
  ],
  commitments: [
    "Premium Quality Products",
    "Timely & Reliable Delivery",
    "Competitive Pricing",
    "Ready Stock for Fast Dispatch",
    "Customized Sourcing Solutions",
    "Strong Vendor Network",
    "Bulk Order & Project Supply",
    "PAN India Delivery"
  ],
  promiseQuote: "Quality Products. Trusted Service. Long-Term Partnerships.",
  promiseBody:
    "We don't just supply materials - we build lasting relationships by providing dependable service, competitive pricing, and consistent quality.",
  materialsStrip: ["MS", "SS 304", "SS 316", "Brass", "Copper", "Aluminium", "GI"],
  whatsappNumber: "918650343496"
} as const;

export type Company = typeof company;
