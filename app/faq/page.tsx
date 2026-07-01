"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What types of fasteners do you supply?",
    answer: "We supply a comprehensive range of premium industrial fasteners including Bolts, Nuts, Screws, Washers, Rivets, and Studs in various configurations and standards to meet precise engineering requirements."
  },
  {
    question: "What raw materials are your fasteners available in?",
    answer: "Our fasteners are available in Mild Steel (MS) with grades 4.6, 4.8, 8.8, 10.9 & 12.9, Stainless Steel (SS) grades 302, 304 & 316, as well as Aluminium, Brass, and Copper depending on the product category."
  },
  {
    question: "Do you offer different plating and finishing options?",
    answer: "Yes, our fasteners are available in both plated and non-plated conditions. Common plating options include Zinc, Black Oxide, and Hot Dip Galvanized (HDG) to ensure superior corrosion resistance."
  },
  {
    question: "Do you cater to custom or specialized fastener requirements?",
    answer: "Absolutely. In addition to our standard range of fasteners (like Fully Threaded Studs, Countersunk Screws, and Heavy Hex Nuts), we can accommodate specialized requests to suit specific manufacturing and engineering applications."
  },
  {
    question: "How do you ensure the quality of your products?",
    answer: "Quality is our top priority. We adhere to strict industrial standards and conduct rigorous quality control checks on all our fasteners to ensure they deliver reliable, cost-effective, and error-free performance in demanding environments."
  },
  {
    question: "Where are you located and how can we get in touch?",
    answer: "We are located at 5/589, Bhiwadi, UIT Colony, RIICO Industrial Area Kharani, Khairthal – Tijara, Rajasthan. You can reach us via phone at +91 8650343496, +91 8853144855, or +91 9509570570, or email us at info@vsaenterprises.in."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-white/50 mb-16 font-mono text-sm uppercase tracking-widest">
          <Link href="/" className="hover:text-[#E8B833] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#E8B833]">FAQs</span>
        </div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-[#E8B833]/10 border border-[#E8B833]/20 mb-8 shadow-[0_0_30px_rgba(232,184,51,0.15)]">
            <MessageCircleQuestion className="w-10 h-10 text-[#E8B833]" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our premium industrial fasteners, materials, and engineering solutions.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0c0c0c] to-[#020202] border border-white/5 hover:border-[#E8B833]/30 transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left group focus:outline-none"
              >
                <h3 className="font-display text-2xl font-bold text-white/90 group-hover:text-white transition-colors pr-8">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${openIndex === index ? 'bg-[#E8B833]/20 border-[#E8B833]/50' : 'bg-white/5 border-white/10 group-hover:border-[#E8B833]/30'}`}>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-[#E8B833]' : 'text-white/50 group-hover:text-[#E8B833]'}`} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pt-0">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                      <p className="text-xl text-white/70 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <p className="text-xl text-white/60 mb-6">Still have questions?</p>
          <Link 
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E8B833] text-black font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(232,184,51,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Contact Our Team <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
