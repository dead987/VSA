export type ProductCategory = {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  rawMaterials: string[];
  materialsSummary: string;
  heroImage: string;
  thumbImage: string;
  icon: string;
  types: string[];
};

export const products: ProductCategory[] = [
  {
    slug: "bolts",
    name: "Bolts",
    shortDescription: "Threaded fasteners for clamping aligned parts with strength, precision, and grade flexibility.",
    fullDescription:
      "A threaded fastener typically used with a nut; passes through aligned holes in two or more parts, and a nut is tightened onto the threaded end to clamp the parts together.",
    rawMaterials: [
      "MS Bolts (Grade 4.6, 4.8, 8.8, 10.9, 12.9)",
      "Plated options: Zinc, Black Oxide, HDG, and more",
      "Non-Plated options",
      "SS Bolts (Grade 302, 304, 316)",
      "Brass bolts",
      "Copper bolts"
    ],
    materialsSummary: "MS grades 4.6 to 12.9, plated and non-plated, SS 302/304/316, brass, and copper.",
    heroImage: "/images/products/bolts-hero.png",
    thumbImage: "/images/products/bolts-thumb.png",
    icon: "bolt",
    types: ["Wedge Anchor", "Socket Head Bolt", "Blind Bolt", "Shoulder Bolt", "Carriage Bolt", "Anchor Bolt", "Eye Bolt", "U Bolt", "Hex Bolt", "Hanger Bolt", "Flange Bolt", "J Bolt"]
  },
  {
    slug: "nuts",
    name: "Nuts",
    shortDescription: "Secure threaded joints across general, heavy-duty, lock, and specialty nut formats.",
    fullDescription:
      "A small (usually hexagonal) metal block with an internal threaded hole that mates with a bolt's external threads to create a secure joint.",
    rawMaterials: [
      "MS Nuts (Grade 4.6, 4.8, 8.8, 10.9, 12.9)",
      "Plated options",
      "Non-Plated options",
      "SS Nuts (302, 304, 316)",
      "Brass nuts",
      "Copper nuts"
    ],
    materialsSummary: "MS grades 4.6 to 12.9, plated or non-plated, SS 302/304/316, brass, and copper.",
    heroImage: "/images/products/nuts-hero.png",
    thumbImage: "/images/products/nuts-thumb.png",
    icon: "hexagon",
    types: ["Hex", "Heavy Hex", "Nylon Insert Lock", "Jam", "Nylon Insert Jam Lock", "Wing", "Cap", "Acorn", "Flange", "Tee", "Square", "Prevailing Torque Lock", "K-Lock/Kep", "Coupling", "Slotted", "Castle"]
  },
  {
    slug: "screws",
    name: "Screws",
    shortDescription: "Drive-ready threaded fasteners spanning standard, tamper-resistant, and precision head styles.",
    fullDescription:
      "A threaded fastener usually driven directly into a material or pre-threaded hole; unlike a bolt, it often doesn't require a separate nut.",
    rawMaterials: [
      "MS Screws (Grade 4.6, 4.8, 8.8, 10.9, 12.9)",
      "Plated options",
      "Non-Plated options",
      "SS Screws (302, 304, 316)",
      "Brass screws",
      "Copper screws"
    ],
    materialsSummary: "MS grades 4.6 to 12.9, plated or non-plated, SS 302/304/316, brass, and copper.",
    heroImage: "/images/products/screws-hero.png",
    thumbImage: "/images/products/screws-thumb.png",
    icon: "screw",
    types: ["Flat", "Binding", "Dome", "Pin", "Philips", "Raised", "Sentinel", "Bugle", "Pozidriv", "Tri Wing", "Torx", "2 Hole", "Truss", "Quadrex", "Square", "Internal Hex", "External Hex", "Slotted", "Star head"]
  },
  {
    slug: "washers",
    name: "Washers",
    shortDescription: "Support, spacing, locking, and load-distribution solutions for industrial fastening systems.",
    fullDescription:
      "A thin, flat disc with a center hole, placed between a bolt/screw head and the fastened surface, or between a nut and the surface.",
    rawMaterials: [
      "MS Washers (Grade 4.6, 4.8, 8.8, 10.9, 12.9)",
      "Plated options",
      "Non-Plated options",
      "SS Washers (302, 304, 316)",
      "Brass washers",
      "Copper washers"
    ],
    materialsSummary: "MS grades 4.6 to 12.9, plated or non-plated, SS 302/304/316, brass, and copper.",
    heroImage: "/images/products/washers-hero.png",
    thumbImage: "/images/products/washers-thumb.png",
    icon: "circle-dot",
    types: ["Conical", "C-washer", "Dome", "Fender", "Internal Tooth", "Finger", "Countersunk", "Flat", "Shoulder", "External Tooth", "Split", "Torque", "Crescent", "Wave"]
  },
  {
    slug: "rivets",
    name: "Rivets",
    shortDescription: "Permanent fastening options for durable joins across metal, plastic, leather, and fabrication work.",
    fullDescription:
      "A permanent mechanical fastener joining two or more pieces of material (metal, plastic, leather); unlike bolts/screws, not intended to be removed and reused.",
    rawMaterials: ["MS", "SS", "Aluminium", "Copper"],
    materialsSummary: "Available in MS, SS, aluminium, and copper.",
    heroImage: "/images/products/rivets-hero.png",
    thumbImage: "/images/products/rivets-thumb.png",
    icon: "construction",
    types: ["Snap Head", "Pan Head", "Countersunk", "Round Counter", "Blind", "Tubular", "Split", "Flush", "Self Piercing", "Drive", "Cherry", "Conical"]
  },
  {
    slug: "studs",
    name: "Studs",
    shortDescription: "Threaded rods and stud bolts for rigid clamping assemblies across industrial use cases.",
    fullDescription:
      "A threaded rod with threads on both ends or full length, used with two nuts (and often washers) to clamp two components together.",
    rawMaterials: ["MS", "SS"],
    materialsSummary: "Available in MS and SS.",
    heroImage: "/images/products/studs-hero.png",
    thumbImage: "/images/products/studs-thumb.png",
    icon: "waypoints",
    types: ["Fully Threaded", "Tap End", "Double End", "Reduced Shank", "Shoulder Stud", "Weld Bolt Stud", "Dowel Stud", "Partial Thread", "U-Stud Bolt", "Eye Stud Bolt"]
  },
  {
    slug: "special-purpose-materials",
    name: "Special Purpose Materials",
    shortDescription: "Industrial hardware, fabrication stock, and custom engineering materials for project supply.",
    fullDescription:
      "A comprehensive range of MS, SS, and customized engineering materials for industrial, electrical panel manufacturing, fabrication, construction, and maintenance applications.",
    rawMaterials: [
      "Security Hardware (Tamper Proof Fasteners)",
      "MS & SS Angles",
      "MS & SS Channels",
      "MS & SS Flats",
      "MS & SS Round Bars, Square Bars, Hex Bars, Bright Bars, Pipes & Tubes",
      "Sheets, Plates & Coils",
      "Threaded Rods",
      "U-Clamps, Foundation Bolts, Custom Fabricated Components, Laser Cut & CNC Profile Parts",
      "MS Circlips (Internal & External)"
    ],
    materialsSummary: "MS, SS, and custom engineering materials for fabrication, panel manufacturing, and maintenance.",
    heroImage: "/images/products/special-purpose-materials-hero.png",
    thumbImage: "/images/products/special-purpose-materials-thumb.png",
    icon: "factory",
    types: [
      "Security Hardware",
      "MS & SS Angles",
      "MS & SS Channels",
      "MS & SS Flats",
      "Round Bars",
      "Square Bars",
      "Hex Bars",
      "Bright Bars",
      "Pipes & Tubes",
      "Sheets, Plates & Coils",
      "Threaded Rods",
      "U-Clamps",
      "Foundation Bolts",
      "Custom Fabricated Components",
      "Laser Cut & CNC Profile Parts",
      "MS Circlips"
    ]
  }
];

export const productSlugs = products.map((product) => product.slug);

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
