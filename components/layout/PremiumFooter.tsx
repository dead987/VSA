import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function PremiumFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020202] text-white relative z-10 border-t border-white/5 overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(232,184,51,0.08)_0%,_transparent_70%)] pointer-events-none" />
      
      {/* Top glowing edge */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 border-b border-white/10 pb-16 mb-10">
          
          {/* Brand & Logo */}
          <div className="flex flex-col gap-8 max-w-lg">
            <Link href="/" className="inline-block relative w-56 h-20 group">
              <Image 
                src="/Picture1-Photoroom.png" 
                alt="VSA Enterprises Logo" 
                fill 
                className="object-contain object-left filter brightness-0 invert opacity-90 group-hover:opacity-100 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500"
              />
            </Link>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium">
              VSA Enterprises is your trusted partner in premium industrial fasteners and engineering solutions, delivering uncompromising quality and reliability.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-6 pt-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-16 lg:gap-32 font-display font-medium text-white/70 pt-4">
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-2xl tracking-wide mb-2 font-bold border-b border-white/20 pb-4 inline-block">Navigation</h4>
              <Link href="/" className="text-lg hover:text-[#E8B833] hover:translate-x-2 transition-all duration-300 flex items-center gap-3 group">
                <span className="w-0 h-px bg-[#E8B833] group-hover:w-4 transition-all duration-300" /> Home
              </Link>
              <Link href="/products/bolt" className="text-lg hover:text-[#E8B833] hover:translate-x-2 transition-all duration-300 flex items-center gap-3 group">
                <span className="w-0 h-px bg-[#E8B833] group-hover:w-4 transition-all duration-300" /> Bolt
              </Link>
              <Link href="/products/nut" className="text-lg hover:text-[#E8B833] hover:translate-x-2 transition-all duration-300 flex items-center gap-3 group">
                <span className="w-0 h-px bg-[#E8B833] group-hover:w-4 transition-all duration-300" /> Nut
              </Link>
              <Link href="/products/screw" className="text-lg hover:text-[#E8B833] hover:translate-x-2 transition-all duration-300 flex items-center gap-3 group">
                <span className="w-0 h-px bg-[#E8B833] group-hover:w-4 transition-all duration-300" /> Screw
              </Link>
              <Link href="/products/washer" className="text-lg hover:text-[#E8B833] hover:translate-x-2 transition-all duration-300 flex items-center gap-3 group">
                <span className="w-0 h-px bg-[#E8B833] group-hover:w-4 transition-all duration-300" /> Washer
              </Link>
              <Link href="/products/rivet" className="text-lg hover:text-[#E8B833] hover:translate-x-2 transition-all duration-300 flex items-center gap-3 group">
                <span className="w-0 h-px bg-[#E8B833] group-hover:w-4 transition-all duration-300" /> Rivet
              </Link>
              <Link href="/products/stud" className="text-lg hover:text-[#E8B833] hover:translate-x-2 transition-all duration-300 flex items-center gap-3 group">
                <span className="w-0 h-px bg-[#E8B833] group-hover:w-4 transition-all duration-300" /> Stud
              </Link>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-2xl tracking-wide mb-2 font-bold border-b border-white/20 pb-4 inline-block">Support</h4>
              <Link href="/#contact" className="text-lg hover:text-[#E8B833] hover:translate-x-2 transition-all duration-300 flex items-center gap-3 group">
                <span className="w-0 h-px bg-[#E8B833] group-hover:w-4 transition-all duration-300" /> Contact Us
              </Link>
              <Link href="/faq" className="text-lg hover:text-[#E8B833] hover:translate-x-2 transition-all duration-300 flex items-center gap-3 group">
                <span className="w-0 h-px bg-[#E8B833] group-hover:w-4 transition-all duration-300" /> FAQs
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-base font-mono text-white/50">
          <p className="tracking-wide">© {currentYear} VSA Enterprises. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
