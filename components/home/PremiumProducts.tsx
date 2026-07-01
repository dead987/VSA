"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Bolt", image: "/images/products/Bolt.png", href: "/products/bolt" },
  { name: "Nut", image: "/images/products/Nut.png", href: "/products/nut" },
  { name: "Screw", image: "/images/products/Screw.png", href: "/products/screw" },
  { name: "Washer", image: "/images/products/Washer.png", href: "/products/washer" },
  { name: "Rivet", image: "/images/products/Rivet.png", href: "/products/rivet" },
  { name: "Stud", image: "/images/products/Stud.png", href: "/products/stud" },
];

export function PremiumProducts() {
  return (
    <section id="products" className="bg-[#000000] text-white py-24 lg:py-32 w-full relative z-10 border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,184,51,0.05)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 lg:mb-32 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 lg:w-24 bg-gradient-to-r from-transparent to-[#E8B833]" />
            <span className="uppercase tracking-[0.3em] text-[#E8B833] text-sm font-semibold">Our Portfolio</span>
            <div className="h-px w-12 lg:w-24 bg-gradient-to-l from-transparent to-[#E8B833]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 leading-[1.1]"
          >
            Precision Engineered <br className="hidden md:block"/> Components
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group"
            >
              <Link href={category.href} className="block w-full h-[400px] relative rounded-[2.5rem] bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-white/5 hover:border-[#E8B833]/30 transition-all duration-700 overflow-hidden shadow-[0_0_0_rgba(232,184,51,0)] hover:shadow-[0_20px_50px_rgba(232,184,51,0.08)]">
                
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,184,51,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Massive Watermark Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] text-center z-0 transition-transform duration-1000 group-hover:scale-110 flex items-center justify-center">
                  <span className="font-display text-[7rem] md:text-[9rem] font-black text-transparent opacity-30 select-none tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
                    {category.name.toUpperCase()}
                  </span>
                </div>
                
                {/* Product Image */}
                <div className="absolute inset-0 z-10 flex items-center justify-center p-12">
                  <div className="relative w-full h-full transform transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-4 group-hover:drop-shadow-[0_30px_40px_rgba(0,0,0,0.9)]">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain filter contrast-125 drop-shadow-2xl"
                    />
                  </div>
                </div>
                
                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 inset-x-0 p-8 z-20 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/40 font-mono text-sm uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Category</p>
                      <h3 className="font-display text-4xl font-bold text-white tracking-wide">
                        {category.name}
                      </h3>
                    </div>
                    
                    <div className="w-12 h-12 rounded-full bg-[#E8B833]/10 border border-[#E8B833]/20 flex items-center justify-center text-[#E8B833] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 shadow-[0_0_20px_rgba(232,184,51,0.2)]">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
