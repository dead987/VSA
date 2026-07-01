"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Settings2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProductModal } from "@/components/products/ProductModal";

const studTypes = [
  { 
    name: "Fully Threaded", 
    image: "/images/Studs/Fully threaded.png",
    description: "A continuous rod that is threaded along its entire length from end to end.",
    usage: "Used heavily in flange connections in the oil, gas, and petrochemical industries.",
    importance: "Allows nuts to be threaded from either end, applying massive, even clamping force to secure high-pressure pipeline flanges."
  },
  { 
    name: "Tap End", 
    image: "/images/Studs/Tape end.png",
    description: "A stud with threads on both ends separated by an unthreaded body, where one threaded end (the tap end) is shorter and designed to be permanently screwed into a tapped hole.",
    usage: "Used in engine blocks, heavy machinery, and large castings.",
    importance: "Provides a permanent, projecting threaded post that components can be repeatedly bolted to without wearing out the threads in the main engine block."
  },
  { 
    name: "Double End", 
    image: "/images/Studs/Double end stud.png",
    description: "Features threads on both ends separated by an unthreaded center section, with both threaded ends generally being of equal length.",
    usage: "Used in suspension systems, aerospace structures, and high-strength mechanical assemblies.",
    importance: "Allows two separate components to be mated together tightly, with nuts compressing the assembly from both sides simultaneously."
  },
  { 
    name: "Reduced Shank", 
    image: "/images/Studs/Reduced shank.png",
    description: "A stud where the unthreaded center section (shank) is machined down to a diameter smaller than the root diameter of the threads.",
    usage: "Used in extreme high-temperature and high-pressure environments like steam turbines and engine cylinder heads.",
    importance: "The reduced shank allows the stud to stretch like a very stiff spring under extreme loads, preventing the threads from stripping or fracturing under thermal expansion."
  },
  { 
    name: "Shoulder Stud", 
    image: "/images/Studs/Shoulder stud.png",
    description: "Features a precision-machined, unthreaded shoulder between the threaded ends.",
    usage: "Used as a pivot point for pulleys, linkages, and rotating mechanical assemblies.",
    importance: "Provides an incredibly accurate, smooth bearing surface for rotating components to ride on while firmly bolting the assembly to a chassis."
  },
  { 
    name: "Weld Bolts Stud", 
    image: "/images/Studs/Weld bolts stud.png",
    description: "A stud with a specialized, often flanged base designed to be permanently welded to a metal surface using a stud welding gun.",
    usage: "Used extensively in automotive chassis fabrication, shipbuilding, and transformer manufacturing.",
    importance: "Creates a permanent, high-strength threaded mounting point on sheet metal instantly, without needing to drill holes or tap threads."
  },
  { 
    name: "Dowel Stud", 
    image: "/images/Studs/Dowel stud.png",
    description: "A hybrid fastener featuring wood screw threads on one end and machine screw threads on the other.",
    usage: "Primarily used in furniture assembly, staircases, and attaching metal table legs to wooden frames.",
    importance: "Seamlessly bridges the gap between wood and metal, providing a hidden connection that can be tightly secured with a metal nut."
  }
];

export default function StudPage() {
  const [selectedStud, setSelectedStud] = useState<typeof studTypes[0] | null>(null);

  return (
    <>
      <main className="min-h-screen bg-black text-white pt-32 pb-24">
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-white/50 mb-16 font-mono text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-[#E8B833] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#E8B833]">Stud</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
            
            {/* Left Column: Title & Description */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-10">
                Stud <span className="text-[#E8B833] font-light">:-</span>
              </h1>
              
              <div className="space-y-6 text-xl md:text-[22px] text-white/70 leading-relaxed font-medium max-w-2xl">
                <p>
                  A stud bolt is a threaded rod or fastener without a head. Unlike a standard bolt, which has a forged head on one end, a stud bolt is threaded on both ends or along its entire length.
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
                  "MS Stud with Grade 4.6, 4.8, 8.8, 10.9 & 12.9.",
                  "SS Stud with Grade 302, 304 & 316."
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
              <h2 className="font-display text-4xl font-bold text-white uppercase tracking-widest">Stud Variants</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {studTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  onClick={() => setSelectedStud(type)}
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
        {selectedStud && (
          <ProductModal 
            product={selectedStud} 
            onClose={() => setSelectedStud(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
