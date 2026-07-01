"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Settings2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProductModal } from "@/components/products/ProductModal";

const screwTypes = [
  { 
    name: "Flat Head", 
    image: "/images/Screws/Flat Head.png",
    description: "A countersunk head with a flat top designed to sit flush with or below the surface.",
    usage: "Used heavily in woodworking, cabinetry, and metal applications where a protruding head would interfere.",
    importance: "Provides a smooth, aerodynamic, and snag-free finish while ensuring the joint is tightly secured."
  },
  { 
    name: "Binding Head", 
    image: "/images/Screws/Binding Head.png",
    description: "Features a slightly undercut bottom and a thicker head, usually with a deep slot.",
    usage: "Primarily used in electrical and wiring connections to bind wires against terminal blocks.",
    importance: "The undercut prevents wires from fraying or slipping out when the screw is tightened down."
  },
  { 
    name: "Dome Head", 
    image: "/images/Screws/Dome Head.png",
    description: "A low-profile, rounded head that provides a smooth, aesthetically pleasing finish.",
    usage: "Commonly used in sheet metal applications and visible assemblies like motorcycle fairings.",
    importance: "Distributes the clamping pressure over a wide area and eliminates sharp edges that could catch clothing or skin."
  },
  { 
    name: "Pin Head", 
    image: "/images/Screws/Pin Head.png",
    description: "A security screw featuring a central pin in the drive socket that rejects standard bits.",
    usage: "Used in public infrastructure, bathroom partitions, and high-security electronics.",
    importance: "Effectively prevents tampering, vandalism, and unauthorized removal by requiring a specialized, matching driver."
  },
  { 
    name: "Philips Head", 
    image: "/images/Screws/Philips Head.png",
    description: "The classic cross-shaped drive designed to self-center the driver.",
    usage: "Used ubiquitously across general construction, electronics, and household assembly.",
    importance: "Allows for rapid assembly line production by easily accepting the driver bit, though designed to intentionally slip (cam-out) before overtightening."
  },
  { 
    name: "Raised Head", 
    image: "/images/Screws/Raised Head.png",
    description: "Also known as an oval head, it is countersunk with a slightly rounded, decorative top.",
    usage: "Often used with cup washers in switch plates, marine hardware, and decorative panels.",
    importance: "Combines the flush-fitting strength of a countersunk screw with a highly polished, aesthetic dome finish."
  },
  { 
    name: "Sentinel Head", 
    image: "/images/Screws/Sentinel Head.png",
    description: "A highly specialized security drive designed for one-way, permanent installation.",
    usage: "Used in prisons, banks, and structural joints that must never be disassembled.",
    importance: "Provides the ultimate anti-tamper security; the driver slips out if turned counter-clockwise, making removal virtually impossible without destroying the head."
  },
  { 
    name: "Bugle Head", 
    image: "/images/Screws/Bugle Head.png",
    description: "Features a smooth, curved transition from the head to the threaded shank (resembling a bugle horn).",
    usage: "The absolute standard for attaching drywall to wood or metal studs.",
    importance: "Compresses the paper surface of drywall without tearing it, drawing the board tight to the stud for a perfect mudding surface."
  },
  { 
    name: "Pozidriv Head", 
    image: "/images/Screws/Pozidriv Head.png",
    description: "An evolution of the Phillips drive featuring four additional smaller lines radiating from the center.",
    usage: "Heavily used in European manufacturing and high-torque woodworking applications.",
    importance: "Vastly reduces the 'cam-out' effect of standard Phillips screws, allowing for significantly higher torque application without stripping the head."
  },
  { 
    name: "Tri Wing Head", 
    image: "/images/Screws/Tri Wing.png",
    description: "A tamper-resistant drive with three radial slots.",
    usage: "Used extensively in aerospace, military equipment, and modern consumer electronics (like game consoles).",
    importance: "Restricts access to sensitive internal components from untrained users, preserving warranties and safety."
  },
  { 
    name: "Torx Head", 
    image: "/images/Screws/Torx Head.png",
    description: "Features a distinctive 6-point star-shaped drive (also known as a star drive).",
    usage: "Automotive engineering, disk drives, motorcycles, and structural timber framing.",
    importance: "Allows for massive torque transfer directly into the screw without any cam-out, drastically extending the life of the tooling and the fastener."
  },
  { 
    name: "2 Hole Head", 
    image: "/images/Screws/2 Hole Head.png",
    description: "Also known as a spanner or snake-eye drive, featuring a flat head with two small, drilled holes.",
    usage: "Elevators, public restrooms, and museum displays.",
    importance: "Provides a visually unobtrusive, smooth surface while offering moderate security against casual tampering."
  },
  { 
    name: "Truss Head", 
    image: "/images/Screws/Truss Head.png",
    description: "An extra-wide, low-profile domed head.",
    usage: "Used for joining sheet metal and attaching hardware to thin materials where a wide bearing surface is needed.",
    importance: "The wide footprint prevents the screw from pulling through thin materials and can cover over-sized or inaccurately drilled clearance holes."
  },
  { 
    name: "Square Head", 
    image: "/images/Screws/Square Head.png",
    description: "Features a square-shaped recess (Robertson drive).",
    usage: "The standard in Canadian manufacturing, decking, and high-end cabinetry.",
    importance: "Offers a slight taper that 'holds' the screw on the bit (stick-fit), allowing for incredibly easy one-handed installation in awkward positions."
  },
  { 
    name: "Internal Hex", 
    image: "/images/Screws/Internal Head.png",
    description: "Features a hexagonal recess driven by an Allen key.",
    usage: "Used in machinery, robotics, bicycles, and applications requiring a flush, counter-bored finish.",
    importance: "Allows high torque application in very tight spaces where a traditional external wrench cannot fit."
  },
  { 
    name: "Slotted Head", 
    image: "/images/Screws/Slotted Head.png",
    description: "The oldest and simplest screw drive, featuring a single flat slot.",
    usage: "Used in antique restoration, classical woodworking, and low-torque applications.",
    importance: "Can be driven by a simple flat-blade screwdriver or even a coin in emergencies, though it is prone to driver slippage."
  },
  { 
    name: "Star Head", 
    image: "/images/Screws/Star Head.png",
    description: "A variation of the Torx design, utilizing a multi-pointed star pattern for superior bit engagement.",
    usage: "High-performance construction, automotive chassis, and heavy machinery.",
    importance: "Maximizes the contact area between the tool and the screw, completely eliminating stripping even under extreme industrial torque."
  }
];

export default function ScrewPage() {
  const [selectedScrew, setSelectedScrew] = useState<typeof screwTypes[0] | null>(null);

  return (
    <>
      <main className="min-h-screen bg-black text-white pt-32 pb-24">
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-white/50 mb-16 font-mono text-sm uppercase tracking-widest">
            <Link href="/" className="hover:text-[#E8B833] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#E8B833]">Screw</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
            
            {/* Left Column: Title & Description */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-10">
                Screw <span className="text-[#E8B833] font-light">:-</span>
              </h1>
              
              <div className="space-y-6 text-xl md:text-[22px] text-white/70 leading-relaxed font-medium max-w-2xl">
                <p>
                  A threaded fastener that is usually driven directly into a material or into a pre-threaded hole. Unlike a bolt, a screw often does not require a separate nut.
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
                  "MS Screws with Grade 4.6, 4.8, 8.8, 10.9 & 12.9.",
                  "All Screws are available in Plated (Zinc, Black Oxide, HDG etc.) and Non Plated both conditions.",
                  "SS Screws with Grade 302, 304 & 316.",
                  "Brass and copper Screws."
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
              <h2 className="font-display text-4xl font-bold text-white uppercase tracking-widest">Screw Variants</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {screwTypes.map((type, index) => (
                <motion.div
                  key={`${type.name}-${index}`}
                  onClick={() => setSelectedScrew(type)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
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
        {selectedScrew && (
          <ProductModal 
            product={selectedScrew} 
            onClose={() => setSelectedScrew(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
