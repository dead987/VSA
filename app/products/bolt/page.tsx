"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Settings2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProductModal } from "@/components/products/ProductModal";

const boltTypes = [
  { 
    name: "Wedge Anchor", 
    image: "/images/Bolts/Wedge Anchor.png",
    description: "A mechanical expansion anchor that consists of a threaded stud with a conical end and an expansion clip.",
    usage: "Exclusively used in solid concrete base materials.",
    importance: "Crucial for heavy-duty structural anchoring, providing maximum holding power and reliability for securing heavy equipment and structural steel."
  },
  { 
    name: "Blind Bolt", 
    image: "/images/Bolts/Blind.png",
    description: "A specialized, high-strength fastener designed to be installed from one side of a workpiece.",
    usage: "Used in hollow steel sections, tubing, or environments where access to the back side of the joint is restricted or impossible.",
    importance: "Revolutionizes structural steelwork by allowing secure, high-tensile connections without the need for welding or cutting access holes."
  },
  { 
    name: "Carriage Bolt", 
    image: "/images/Bolts/Carriage.png",
    description: "A bolt featuring a shallow, smooth, domed head and a square neck underneath.",
    usage: "Primarily used in woodworking, timber framing, and attaching metal plates to wood.",
    importance: "The square neck bites into the wood, preventing the bolt from turning while the nut is tightened, offering a smooth, tamper-resistant finish on the head side."
  },
  { 
    name: "Eye Bolt", 
    image: "/images/Bolts/Eye.png",
    description: "A bolt featuring a looped head (an eye) instead of a standard solid head.",
    usage: "Used as a connection point for rigging, anchoring, pulling, pushing, or hoisting applications.",
    importance: "Essential for safety and load distribution in heavy lifting, allowing cables and ropes to be securely tied to a structural anchor."
  },
  { 
    name: "Hex Bolt", 
    image: "/images/Bolts/HEX.png",
    description: "A highly versatile machine bolt characterized by its six-sided hexagonal head.",
    usage: "General-purpose fastening in machinery, construction, and automotive industries.",
    importance: "The hexagonal shape allows for excellent grip and torque application using standard wrenches from multiple angles, making it the industry standard for secure joints."
  },
  { 
    name: "Flange Bolt", 
    image: "/images/Bolts/Flange.png",
    description: "A hex-headed bolt with a built-in, washer-like circular flange underneath the head.",
    usage: "Automotive assembly, plumbing, and applications subject to high vibrations.",
    importance: "The integrated flange distributes the clamping load over a significantly wider surface area than a standard bolt, eliminating the need for a separate washer and reducing the chance of loosening."
  },
  { 
    name: "Socket Head Bolt", 
    image: "/images/Bolts/Socket Head.png",
    description: "A cylindrical-headed bolt featuring a recessed hexagonal drive (Allen drive).",
    usage: "Machinery, dies, and applications where space is too restricted to accommodate a standard external wrench.",
    importance: "Offers high tensile strength and allows for flush or counter-bored installations, resulting in a cleaner, safer, and more aerodynamic surface."
  },
  { 
    name: "Shoulder Bolt", 
    image: "/images/Bolts/Shoulder.png",
    description: "A specialized fastener (also known as a stripper bolt) with an unthreaded, precision-machined cylindrical shoulder between the head and the threads.",
    usage: "Used as a pivot point, shaft, or guide for rotating or sliding components in punch presses, dies, and moving machinery.",
    importance: "Provides a highly precise, smooth surface for moving parts to ride on while securely fastening the assembly."
  },
  { 
    name: "Anchor Bolt", 
    image: "/images/Bolts/Anchor.png",
    description: "A heavy-duty fastener designed to attach objects or structures to concrete.",
    usage: "Cast-in-place or post-installed in concrete foundations to secure structural steel columns, light poles, and heavy machinery.",
    importance: "Forms the critical structural link between concrete foundations and the structures they support, resisting extreme tensile and shear forces."
  },
  { 
    name: "U Bolt", 
    image: "/images/Bolts/U-shaped.png",
    description: "A fastener shaped like the letter \"U\" with machine screw threads on both ends.",
    usage: "Primarily used to support and secure pipework, conduits, and round tubing to structural beams.",
    importance: "Provides a secure, stable cradle that prevents lateral movement of pipes, critical in plumbing, gas lines, and automotive leaf spring assemblies."
  },
  { 
    name: "Hanger Bolt", 
    image: "/images/Bolts/Hanger.png",
    description: "A headless, dual-threaded fastener with wood screw threads on one end and machine screw threads on the other.",
    usage: "Used to suspend objects (like pipes or electrical conduit) from wooden structures, or to attach metal table legs to wooden furniture.",
    importance: "Bridges the gap between wood and metal fastening, allowing a threaded metal nut to securely anchor an object to a wooden base."
  },
  { 
    name: "J Bolt", 
    image: "/images/Bolts/J-shaped.png",
    description: "A J-shaped fastener typically threaded on the straight end.",
    usage: "Often cast into wet concrete to act as an anchor, or used to hook around rebar or other structural elements.",
    importance: "The hooked end provides massive pull-out resistance, making it an indispensable anchoring solution for heavy construction and roofing."
  }
];

export default function BoltPage() {
  const [selectedBolt, setSelectedBolt] = useState<typeof boltTypes[0] | null>(null);

  return (
    <>
      <main className="min-h-screen bg-black text-white pt-32 pb-24">
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-white/50 mb-16 font-mono text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-[#E8B833] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#E8B833]">Bolt</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
            
            {/* Left Column: Title & Description */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-10">
                Bolt <span className="text-[#E8B833] font-light">:-</span>
              </h1>
              
              <div className="space-y-6 text-xl md:text-[22px] text-white/70 leading-relaxed font-medium max-w-2xl">
                <p>
                  A threaded fastener that is typically used with a nut.
                </p>
                <p>
                  A bolt passes through aligned holes in two or more parts, and a nut is tightened onto the bolt's threaded end to clamp the parts together.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Raw Materials */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8B833]/5 via-transparent to-transparent pointer-events-none rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight flex items-center gap-5">
                <div className="p-3 rounded-2xl bg-[#E8B833]/10 border border-[#E8B833]/20">
                  <Settings2 className="w-8 h-8 text-[#E8B833]" />
                </div>
                Raw Materials <span className="text-white/20 font-light">:-</span>
              </h2>
              
              <ul className="space-y-6">
                {[
                  "MS Bolts with Grade 4.6, 4.8, 8.8, 10.9 & 12.9.",
                  "All Bolts are available in Plated (Zinc, Black Oxide, HDG & etc.) and Non Plated both conditions.",
                  "SS Bolts with Grade 302, 304 & 316.",
                  "Brass and copper bolts."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5 text-lg md:text-xl text-white/80 leading-relaxed group/item">
                    <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#E8B833]/50 group-hover/item:bg-[#E8B833] mt-2.5 transition-colors shadow-[0_0_15px_rgba(232,184,51,0.5)]" />
                    <span className="group-hover/item:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
          </div>

          {/* Sub-categories Grid */}
          <div className="mb-24">
            <div className="flex items-center gap-6 mb-16">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#E8B833]" />
              <h2 className="font-display text-4xl font-bold text-white uppercase tracking-widest">Bolt Variants</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {boltTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  onClick={() => setSelectedBolt(type)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative h-[360px] rounded-[2.5rem] bg-gradient-to-br from-[#0c0c0c] to-[#020202] border border-white/5 hover:border-[#E8B833]/40 transition-all duration-700 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(232,184,51,0.15)] cursor-pointer"
                >
                  {/* Inner Golden Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,184,51,0.15)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Top Highlight Line */}
                  <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-[#E8B833]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Huge Diagonal Watermark Background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-all duration-1000 pointer-events-none z-0">
                    <span className="font-display text-[4rem] font-black text-transparent whitespace-nowrap rotate-[-30deg] scale-150 tracking-tighter" style={{ WebkitTextStroke: '2px #E8B833' }}>
                      {type.name.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Image Area */}
                  <div className="absolute inset-x-0 top-4 bottom-24 flex items-center justify-center p-4 z-10">
                    <div className="relative w-full h-full transform transition-all duration-700 scale-[1.2] group-hover:scale-[1.4] group-hover:-translate-y-3 group-hover:drop-shadow-[0_30px_40px_rgba(0,0,0,0.9)]">
                      <Image
                        src={type.image}
                        alt={type.name}
                        fill
                        className="object-contain filter contrast-[1.3] drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Elegant Frosted Title Area */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent flex items-end justify-center pb-6 z-20 border-t border-white/5 group-hover:border-[#E8B833]/20 transition-colors duration-700">
                    <h3 className="font-display text-[22px] font-bold text-white/80 group-hover:text-white tracking-wide group-hover:-translate-y-1 transition-all duration-500 flex flex-col items-center gap-2">
                      {type.name}
                      <span className="w-0 h-0.5 bg-[#E8B833] group-hover:w-12 transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(232,184,51,0.5)]" />
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </main>
      
      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedBolt && (
          <ProductModal 
            product={selectedBolt} 
            onClose={() => setSelectedBolt(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
