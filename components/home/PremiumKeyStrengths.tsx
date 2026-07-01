"use client";

import { motion } from "framer-motion";
import {
  Award,
  CircleDollarSign,
  UserCheck,
  Boxes,
  PackageCheck,
  Warehouse
} from "lucide-react";

const strengths = [
  {
    title: "Uncompromised Quality",
    description: "Premium-grade fasteners to meet industry standards and customer expectations.",
    Icon: Award
  },
  {
    title: "Affordable Prices",
    description: "Competitive pricing without compromising on quality and reliability.",
    Icon: CircleDollarSign
  },
  {
    title: "Friendly & Professional Staff",
    description: "Dedicated team committed to excellent customer support and technical assistance.",
    Icon: UserCheck
  },
  {
    title: "Ready Stock Availability",
    description: "Extensive inventory for quick order fulfillment and reduced lead times.",
    Icon: Boxes
  },
  {
    title: "Timely Delivery",
    description: "Efficient logistics and supply chain management.",
    Icon: PackageCheck
  },
  {
    title: "State-of-the-Art Warehouse",
    description: "Proper storage, inventory management, and prompt dispatch.",
    Icon: Warehouse
  }
];

export function PremiumKeyStrengths() {
  return (
    <section id="features" className="bg-black text-white py-24 lg:py-32 w-full relative z-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6"
          >
            Our Key Strengths
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Operational discipline that makes a new supplier feel established and trusted.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {strengths.map((strength, index) => {
            const { Icon, title, description } = strength;
            
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 md:p-10 rounded-[2rem] bg-[#070707] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle top light effect */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Glowing background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-black border border-white/10 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] group-hover:border-brass/30 group-hover:shadow-[0_0_20px_rgba(201,162,75,0.15)] transition-all duration-500">
                      <Icon className="w-8 h-8 text-brass/80 group-hover:text-brass transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-2xl md:text-[1.6rem] font-bold tracking-tight text-white/90 group-hover:text-white transition-colors duration-500">
                      {title}
                    </h3>
                  </div>
                  <p className="text-white/50 text-base md:text-[17px] leading-relaxed font-medium group-hover:text-white/70 transition-colors duration-500">
                    {description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
