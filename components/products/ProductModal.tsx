"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface ProductDetails {
  name: string;
  image: string;
  description?: string;
  usage?: string;
  importance?: string;
}

interface ProductModalProps {
  product: ProductDetails;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[2.5rem] bg-[#050505] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,1)] flex flex-col lg:flex-row z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Side: Image Presentation */}
        <div className="relative w-full lg:w-2/5 h-64 lg:h-auto min-h-[300px] lg:min-h-[600px] bg-gradient-to-br from-[#111] to-black border-r border-white/5 overflow-hidden flex items-center justify-center p-8 group">
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,184,51,0.15)_0%,_transparent_70%)] pointer-events-none" />
          
          {/* Huge Watermark Name */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span className="font-display text-[5rem] lg:text-[7rem] font-black text-transparent opacity-10 select-none tracking-tighter -rotate-12 scale-150" style={{ WebkitTextStroke: '2px #E8B833' }}>
              {product.name.toUpperCase()}
            </span>
          </div>
          
          {/* Product Image */}
          <div className="relative w-full h-full z-10 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain filter contrast-[1.3] drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side: Information */}
        <div className="w-full lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center overflow-y-auto custom-scrollbar">
          
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight text-white mb-12">
            {product.name}
            <div className="w-24 h-1 bg-gradient-to-r from-[#E8B833] to-transparent mt-6 rounded-full" />
          </h2>
          
          <div className="space-y-10">
            {product.description && (
              <div>
                <h4 className="text-[#E8B833] font-mono text-sm uppercase tracking-widest mb-3 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#E8B833]" /> What it is
                </h4>
                <p className="text-xl text-white/80 leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>
            )}
            
            {product.usage && (
              <div>
                <h4 className="text-[#E8B833] font-mono text-sm uppercase tracking-widest mb-3 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#E8B833]" /> Where it is used
                </h4>
                <p className="text-xl text-white/80 leading-relaxed font-medium">
                  {product.usage}
                </p>
              </div>
            )}
            
            {product.importance && (
              <div>
                <h4 className="text-[#E8B833] font-mono text-sm uppercase tracking-widest mb-3 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#E8B833]" /> Importance
                </h4>
                <p className="text-xl text-white/80 leading-relaxed font-medium">
                  {product.importance}
                </p>
              </div>
            )}
          </div>
          
        </div>
      </motion.div>
    </motion.div>
  );
}
