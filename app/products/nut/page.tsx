"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Settings2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProductModal } from "@/components/products/ProductModal";

const nutTypes = [
  { 
    name: "Acorn", 
    image: "/images/Nuts/Acorn.png",
    description: "Also known as a cap nut, it features a domed top that encloses the threads.",
    usage: "Used in exposed locations to cover threaded ends for safety and decorative purposes.",
    importance: "Prevents injuries from sharp exposed threads and protects the bolt threads from weathering and corrosion."
  },
  { 
    name: "Flange", 
    image: "/images/Nuts/Flange nut.png",
    description: "A nut with a wide flange at one end that acts as an integrated, non-spinning washer.",
    usage: "Widely used in automotive assembly lines and heavy machinery.",
    importance: "Distributes the clamping load over a wider surface area, reducing the risk of damage to the part and preventing loosening."
  },
  { 
    name: "Tee", 
    image: "/images/Nuts/Tee.png",
    description: "A T-shaped nut with a long, internally threaded barrel and a flat base with prongs.",
    usage: "Primarily driven into wood, particle board, or composite materials.",
    importance: "Leaves a flush surface while providing a strong steel thread in materials that cannot hold a standard thread."
  },
  { 
    name: "Square", 
    image: "/images/Nuts/Square.png",
    description: "A four-sided nut that was the standard before hex nuts became popular.",
    usage: "Used in blind locations, older construction, or railway applications.",
    importance: "Its flat sides offer a greater surface area for wrenches, and its shape prevents it from rotating in narrow, restrictive channels."
  },
  { 
    name: "Prevailing Torque Lock", 
    image: "/images/Nuts/Prevailing torque.png",
    description: "A locknut featuring either a nylon insert (Nyloc) or distorted threads that bind to the bolt.",
    usage: "Used in highly dynamic environments subjected to intense vibration or continuous motion.",
    importance: "Guarantees the nut will not vibrate loose, ensuring the safety of critical mechanical assemblies."
  },
  { 
    name: "K-Lock or Kep", 
    image: "/images/Nuts/K-lock.png",
    description: "A nut with an attached, free-spinning external tooth lock washer.",
    usage: "Used in electronics, electrical components, and high-volume assembly lines.",
    importance: "Speeds up assembly operations by combining the nut and lock washer into one piece, eliminating dropped or forgotten washers."
  },
  { 
    name: "Coupling", 
    image: "/images/Nuts/Coupling.png",
    description: "A long, hexagonal or cylindrical nut designed specifically to connect two threaded rods.",
    usage: "Used in construction, plumbing, and suspending HVAC equipment from ceilings.",
    importance: "Allows continuous extension of threaded shafts securely, transferring the tension seamlessly across the rods."
  },
  { 
    name: "Slotted", 
    image: "/images/Nuts/Slotted.png",
    description: "A hex nut with slots cut into the top face to accommodate a cotter pin.",
    usage: "Used in automotive axles and engine components.",
    importance: "When a cotter pin is inserted through the slot and a hole in the bolt, the nut is mechanically locked and cannot rotate, offering supreme safety."
  },
  { 
    name: "Castle", 
    image: "/images/Nuts/Castle.png",
    description: "Similar to a slotted nut, but the slots are cut into a raised cylindrical section on top of the hex base, resembling a castle's battlements.",
    usage: "Used extensively in automotive wheel bearings, steering linkages, and aerospace.",
    importance: "Provides the same mechanical locking as a slotted nut but keeps the hex flats completely intact for maximum wrench engagement."
  }
];

export default function NutPage() {
  const [selectedNut, setSelectedNut] = useState<typeof nutTypes[0] | null>(null);

  return (
    <>
      <main className="min-h-screen bg-black text-white pt-32 pb-24">
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-white/50 mb-16 font-mono text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-[#E8B833] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#E8B833]">Nut</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
            
            {/* Left Column: Title & Description */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-10">
                Nut <span className="text-[#E8B833] font-light">:-</span>
              </h1>
              
              <div className="space-y-6 text-xl md:text-[22px] text-white/70 leading-relaxed font-medium max-w-2xl">
                <p>
                  A small metal block (usually hexagonal) with an internal threaded hole. It mates with the external threads of a bolt (or threaded rod) to create a secure joint.
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
                  "MS Nuts with Grade 4.6, 4.8, 8.8, 10.9 & 12.9.",
                  "All Nuts are available in Plated (Zinc, Black Oxide, HDG etc.) and Non Plated both conditions.",
                  "SS Nuts with Grade 302, 304 & 316.",
                  "Brass and copper Nuts."
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
              <h2 className="font-display text-4xl font-bold text-white uppercase tracking-widest">Nut Variants</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {nutTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  onClick={() => setSelectedNut(type)}
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
        {selectedNut && (
          <ProductModal 
            product={selectedNut} 
            onClose={() => setSelectedNut(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
