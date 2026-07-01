"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Globe } from "lucide-react";

export function PremiumContact() {
  return (
    <section id="contact" className="bg-black text-white py-24 lg:py-32 w-full relative z-10 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brass/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header Section (Reverted to Clean Version) */}
        <div className="mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-[#E8B833] mb-12"
          >
            Get In Touch <span className="text-white/20">:-</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[#E53935] mb-4 tracking-tight">
                Address <span className="text-white/20">:-</span>
              </h3>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-4xl">
                5/589, Bhiwadi, UIT Colony, RIICO Industrial Area Kharani, Khairthal – Tijara, Rajasthan, 301019
              </p>
            </div>
            
            <div className="pt-2">
              <p className="text-2xl md:text-3xl font-semibold tracking-wide text-white/80">
                GSTIN/UIN <span className="text-white/20">:-</span> <span className="text-white font-mono ml-2">08DAFPK1297H1ZI</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Info Section - Unique Layout, No Boxes */}
        <div className="mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-8 border-y border-white/10 py-16 lg:py-20"
          >
            
            {/* Contact */}
            <div className="flex-1 w-full flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#111] to-black border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:border-blue-500/30 transition-all duration-500">
                <Phone className="w-8 h-8 text-[#3b82f6] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              </div>
              <h4 className="text-3xl text-white/90 font-bold tracking-wide mb-6 font-display">Contact</h4>
              <div className="space-y-3 font-mono text-xl text-white/60 group-hover:text-white/90 transition-colors duration-500">
                <p className="hover:text-[#3b82f6] transition-colors">+91 8650343496</p>
                <p className="hover:text-[#3b82f6] transition-colors">+91 8853144855</p>
                <p className="hover:text-[#3b82f6] transition-colors">+91 9509570570</p>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px self-stretch bg-gradient-to-b from-transparent via-white/10 to-transparent mx-4" />
            <div className="block lg:hidden h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

            {/* Email */}
            <div className="flex-1 w-full flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#111] to-black border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:border-blue-500/30 transition-all duration-500">
                <Mail className="w-8 h-8 text-[#3b82f6] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              </div>
              <h4 className="text-3xl text-white/90 font-bold tracking-wide mb-6 font-display">Email</h4>
              <div className="font-mono text-xl text-white/60 group-hover:text-white/90 transition-colors duration-500">
                <a href="mailto:info@vsaenterprises.in" className="hover:text-[#3b82f6] transition-colors">info@vsaenterprises.in</a>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px self-stretch bg-gradient-to-b from-transparent via-white/10 to-transparent mx-4" />
            <div className="block lg:hidden h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

            {/* Website */}
            <div className="flex-1 w-full flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#111] to-black border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:border-white/30 transition-all duration-500">
                <Globe className="w-8 h-8 text-white/50 group-hover:text-white/80 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
              </div>
              <h4 className="text-3xl text-white/90 font-bold tracking-wide mb-6 font-display">Website</h4>
              <div className="font-mono text-xl text-white/60 group-hover:text-white/90 transition-colors duration-500">
                <a href="https://www.vsaenterprises.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.vsaenterprises.in</a>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Bottom Italic Text (Reverted to Clean Version) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mt-12"
        >
          <p className="text-[22px] md:text-3xl text-white/80 italic font-semibold max-w-5xl mx-auto leading-relaxed">
            "We are dedicated to providing the best fastening solutions that are reliable, cost-effective, and error-free."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
