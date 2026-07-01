"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Settings2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProductModal } from "@/components/products/ProductModal";

const washerTypes = [
  { 
    name: "Conical Washer", 
    image: "/images/Washers/Conical.png",
    description: "Also known as a Belleville washer, it has a slight conical shape that gives the washer a spring characteristic.",
    usage: "Used in assemblies where there is thermal expansion, relaxation, or high vibration.",
    importance: "Acts as a heavy-duty spring to maintain tension in a bolted joint, preventing it from loosening under dynamic loads."
  },
  { 
    name: "C-washer", 
    image: "/images/Washers/C-washer.png",
    description: "A flat washer with a slot cut out, forming the shape of a 'C'.",
    usage: "Used in assemblies where the washer needs to be slipped in or out without removing the fastener completely.",
    importance: "Significantly speeds up maintenance and assembly processes by allowing side-entry placement."
  },
  { 
    name: "Dome Washer", 
    image: "/images/Washers/Dome washer.png",
    description: "A washer with a domed, rounded profile.",
    usage: "Typically paired with countersunk or oval head screws, especially in decorative or upholstery applications.",
    importance: "Provides a clean, aesthetic finish while distributing the load and preventing the screw head from crushing soft materials."
  },
  { 
    name: "Fender Washer", 
    image: "/images/Washers/Fender.png",
    description: "A flat washer with a particularly large outer diameter in proportion to its central hole.",
    usage: "Used in automotive, plumbing, and drywall applications to attach objects to thin metal or soft surfaces.",
    importance: "Distributes the load over a massively increased surface area, preventing the fastener from pulling through thin or brittle materials."
  },
  { 
    name: "Internal Tooth Washer", 
    image: "/images/Washers/Internal tooth.png",
    description: "A lock washer featuring teeth on the inner edge of the ring.",
    usage: "Used when locking teeth need to be hidden for aesthetics or to prevent snagging on surrounding components.",
    importance: "The teeth bite into the bolt head and the mating surface, providing excellent resistance to backward rotation and loosening."
  },
  { 
    name: "Finger Washer", 
    image: "/images/Washers/Finger.png",
    description: "A specialized spring washer with extended \"fingers\" radiating outward.",
    usage: "Primarily used in bearing assemblies and rotating machinery.",
    importance: "Applies a highly controlled axial preload to bearings, reducing noise and preventing rattling at high speeds."
  },
  { 
    name: "Countersunk Washer", 
    image: "/images/Washers/Countersunk.png",
    description: "A finishing washer with a recessed center designed to capture the head of a countersunk screw.",
    usage: "Used in woodworking, paneling, and interior trim.",
    importance: "Allows a countersunk screw to sit flush or slightly proud in a decorative ring without needing to countersink the base material."
  },
  { 
    name: "Flat Washer", 
    image: "/images/Washers/Flat.png",
    description: "The most common washer; a simple flat metal ring.",
    usage: "Used in virtually every mechanical assembly under a nut or a bolt head.",
    importance: "Distributes clamping pressure evenly, reduces friction during tightening, and protects the surface of the joined materials from scoring."
  },
  { 
    name: "Shoulder Washer", 
    image: "/images/Washers/Shoulder washer.png",
    description: "An insulating washer with a cylindrical sleeve (shoulder) that fits into a hole.",
    usage: "Extensively used in electronics, circuit boards, and electrical assemblies.",
    importance: "Electrically insulates the metal screw from the panel or chassis, preventing short circuits and galvanic corrosion."
  },
  { 
    name: "External Tooth Washer", 
    image: "/images/Washers/External tooth.png",
    description: "A lock washer with twisted teeth on the outer circumference.",
    usage: "Used for maximum locking efficiency, especially on hard surfaces or under large-headed screws.",
    importance: "Provides the highest rotational resistance of any tooth washer because the teeth are at the maximum possible radius from the center."
  },
  { 
    name: "Split Washer", 
    image: "/images/Washers/Split.png",
    description: "A ring split at one point and bent into a helical shape.",
    usage: "General purpose locking applications in automotive and heavy machinery.",
    importance: "Acts as a stiff spring under load; its sharp split edges dig into the metal, actively resisting the nut from unwinding due to vibration."
  },
  { 
    name: "Torque Washer", 
    image: "/images/Washers/Torque.png",
    description: "A washer featuring prongs or cleats that dig into wood.",
    usage: "Paired with carriage bolts in heavy timber construction.",
    importance: "Prevents the carriage bolt head from spinning in the wood while the nut is tightened with high torque on the other end."
  },
  { 
    name: "Crescent Washer", 
    image: "/images/Washers/Crescent.png",
    description: "A gently curved, moon-shaped spring washer.",
    usage: "Used in light-load applications where a consistent, flexible tension is required over a wide area.",
    importance: "Provides a soft spring rate to absorb minor vibrations and maintain tension without exerting massive force."
  },
  { 
    name: "Wave Washer", 
    image: "/images/Washers/Wave.png",
    description: "A washer deformed into a wave pattern along its axis.",
    usage: "Commonly used in electric motors, gearboxes, and as load compensators.",
    importance: "Acts as a cushion and takes up end-play in rotating assemblies, maintaining a consistent thrust load to prevent wear."
  }
];

export default function WasherPage() {
  const [selectedWasher, setSelectedWasher] = useState<typeof washerTypes[0] | null>(null);

  return (
    <>
      <main className="min-h-screen bg-black text-white pt-32 pb-24">
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-white/50 mb-16 font-mono text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-[#E8B833] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#E8B833]">Washer</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
            
            {/* Left Column: Title & Description */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-10">
                Washer <span className="text-[#E8B833] font-light">:-</span>
              </h1>
              
              <div className="space-y-6 text-xl md:text-[22px] text-white/70 leading-relaxed font-medium max-w-2xl">
                <p>
                  A flat disc with a hole in the center, generally used to distribute the load of a threaded fastener, such as a screw or nut.
                </p>
                <p>
                  It can also be used as a spacer, spring, wear pad, preload indicating device, locking device, or to reduce vibration.
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
                  "MS Washers",
                  "SS Washers",
                  "Aluminium Washers",
                  "Copper Washers"
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
              <h2 className="font-display text-4xl font-bold text-white uppercase tracking-widest">Washer Variants</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {washerTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  onClick={() => setSelectedWasher(type)}
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
        {selectedWasher && (
          <ProductModal 
            product={selectedWasher} 
            onClose={() => setSelectedWasher(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
