"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Settings2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProductModal } from "@/components/products/ProductModal";

const rivetTypes = [
  { 
    name: "Snap Head", 
    image: "/images/Rivets/Snap head.png",
    description: "The most common traditional solid rivet featuring a semi-circular, dome-shaped head.",
    usage: "Used heavily in structural steel framing, bridge building, and heavy engineering.",
    importance: "Provides immense shear strength and is driven while red-hot, shrinking as it cools to tightly clamp the joint together."
  },
  { 
    name: "Pan Head", 
    image: "/images/Rivets/Pan head.png",
    description: "A solid rivet with a wide, flat top and slightly rounded edges.",
    usage: "Used where maximum strength is required, often replacing snap head rivets in tight clearance spaces.",
    importance: "The wide bearing surface distributes the clamping force effectively over a larger area than a snap head rivet."
  },
  { 
    name: "Countersunk", 
    image: "/images/Rivets/Countersunk rivet.png",
    description: "A rivet designed with a flat head and a conical underside to sit flush with the material surface.",
    usage: "Extensively used in aerospace, aircraft skins, and shipbuilding.",
    importance: "Eliminates aerodynamic drag and provides a completely smooth, snag-free surface after installation."
  },
  { 
    name: "Round Counter", 
    image: "/images/Rivets/Round counter.png",
    description: "A variation of the countersunk rivet featuring a slightly domed top rather than a completely flat one.",
    usage: "Used where flushness is required but a slightly thicker head is needed for added tensile strength.",
    importance: "Offers a compromise between the aerodynamic properties of a flush rivet and the robust strength of a dome head."
  },
  { 
    name: "Blind Rivet", 
    image: "/images/Rivets/Blind rivet.png",
    description: "Also known as a 'pop' rivet; a tubular rivet with a central mandrel.",
    usage: "Used in sheet metal fabrication and applications where access is limited to only one side of the assembly.",
    importance: "Revolutionized manufacturing by allowing fast, secure fastening from a single side without requiring a bucking bar on the rear."
  },
  { 
    name: "Tubular Rivet", 
    image: "/images/Rivets/Tubular.png",
    description: "A rivet with a hole in the end opposite the head, leaving a thin tubular wall.",
    usage: "Used in leatherwork, brake linings, electronics, and light mechanical assemblies.",
    importance: "Requires significantly less force to install than a solid rivet because only the thin tubular section needs to be rolled over to form the clinch."
  },
  { 
    name: "Split Rivet", 
    image: "/images/Rivets/Split rivet.png",
    description: "A rivet with a bifurcated (split) shank forming two prongs.",
    usage: "Used in woodworking, luggage manufacturing, and joining soft materials like plastic or leather.",
    importance: "Can pierce soft materials directly without a pre-drilled hole; the prongs simply bend backward upon striking a solid backing."
  },
  { 
    name: "Flush Rivet", 
    image: "/images/Rivets/Flush.png",
    description: "A highly precision-machined countersunk rivet installed using a dimpling or micro-shaving process.",
    usage: "The gold standard for the exterior skin of high-speed aircraft and racing vehicles.",
    importance: "Absolutely essential for minimizing parasitic drag on supersonic aircraft and achieving a perfectly glassy surface finish."
  },
  { 
    name: "Self Piercing", 
    image: "/images/Rivets/Self-piercing.png",
    description: "A specialized semi-tubular rivet designed to pierce the top sheet of material and flare into the bottom sheet without fully punching through.",
    usage: "Modern automotive chassis assembly, particularly for joining aluminum to steel.",
    importance: "Creates a watertight, fatigue-resistant joint without the need for pre-drilled holes, vastly speeding up automated production."
  },
  { 
    name: "Drive Rivet", 
    image: "/images/Rivets/Drive.png",
    description: "A blind rivet that features a short central pin protruding from the head.",
    usage: "Used in architectural paneling, truck body assembly, and attaching nameplates.",
    importance: "Can be installed simply by hitting the central pin with a hammer, requiring no specialized riveting tools."
  },
  { 
    name: "Cherry Rivet", 
    image: "/images/Rivets/Cherry.png",
    description: "A highly specialized, aerospace-grade blind friction-lock or mechanical-lock rivet.",
    usage: "Used for critical structural repairs on aircraft where solid rivets cannot be installed.",
    importance: "Provides shear and tensile strengths equivalent to solid rivets, maintaining the extreme structural integrity required in aviation."
  },
  { 
    name: "Conical Rivet", 
    image: "/images/Rivets/Conical rivet.png",
    description: "A solid rivet featuring a cone-shaped head instead of a dome.",
    usage: "Used in heavy boiler construction, pressure vessels, and shipbuilding.",
    importance: "The conical shape provides massive strength against high-pressure outward forces, ensuring steam boilers and hulls remain sealed."
  }
];

export default function RivetPage() {
  const [selectedRivet, setSelectedRivet] = useState<typeof rivetTypes[0] | null>(null);

  return (
    <>
      <main className="min-h-screen bg-black text-white pt-32 pb-24">
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-white/50 mb-16 font-mono text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-[#E8B833] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#E8B833]">Rivet</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
            
            {/* Left Column: Title & Description */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-10">
                Rivets <span className="text-[#E8B833] font-light">:-</span>
              </h1>
              
              <div className="space-y-6 text-xl md:text-[22px] text-white/70 leading-relaxed font-medium max-w-2xl">
                <p>
                  A rivet is a permanent mechanical fastener. Before being installed, a rivet consists of a smooth cylindrical shaft with a head on one end. The end opposite to the head is called the tail.
                </p>
                <p>
                  On installation, the rivet is placed in a punched or drilled hole, and the tail is upset, or bucked, so that it expands to about 1.5 times the original shaft diameter, holding the rivet in place.
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
                  "MS",
                  "SS",
                  "Aluminium",
                  "Copper"
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
              <h2 className="font-display text-4xl font-bold text-white uppercase tracking-widest">Rivet Variants</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {rivetTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  onClick={() => setSelectedRivet(type)}
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
                    <span className="font-display text-[3.5rem] font-black text-transparent whitespace-nowrap rotate-[-30deg] scale-150 tracking-tighter" style={{ WebkitTextStroke: '2px #E8B833' }}>
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
                    <h3 className="font-display text-[22px] font-bold text-white/80 group-hover:text-white tracking-wide group-hover:-translate-y-1 transition-all duration-500 flex flex-col items-center gap-2 text-center px-4 leading-tight">
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
        {selectedRivet && (
          <ProductModal 
            product={selectedRivet} 
            onClose={() => setSelectedRivet(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
