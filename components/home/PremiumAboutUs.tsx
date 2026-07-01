"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

export function PremiumAboutUs() {
  return (
    <section className="bg-black text-white py-24 lg:py-32 w-full relative z-10 border-t border-white/5 overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brass/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: About Us */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-brass" />
              <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-brass">About Us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] font-bold tracking-tight mb-10">
              Your Trusted Partner in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Industrial Fasteners</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed font-medium">
              Supplier and trader of industrial fasteners, including bolts, nuts, screws, washers, studs, and anchors, available in Mild Steel (MS), Stainless Steel (SS), Galvanized Iron (GI), Copper, Aluminium, and Brass, catering to diverse industrial and engineering applications.
            </p>
          </motion.div>

          {/* Right Column: Vision & Mission */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="p-10 md:p-14 rounded-[2.5rem] bg-[#070707] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brass/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-black border border-white/10 flex items-center justify-center shadow-inner group-hover:border-brass/30 transition-colors duration-500">
                    <Target className="w-8 h-8 text-brass" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
                    Vision & Mission
                  </h3>
                </div>
                
                <p className="text-white/50 text-[17px] md:text-[19px] leading-relaxed font-medium group-hover:text-white/80 transition-colors duration-500">
                  We are committed to providing high-quality products with timely delivery and competitive pricing, ensuring complete customer satisfaction and reliable service.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
