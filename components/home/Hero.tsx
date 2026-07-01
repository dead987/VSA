"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const marqueeText = Array(4).fill("A Paradise of Fasteners").join(" • ");

  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col justify-start">
      {/* Background Image (Not cut off on desktop) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center pt-20">
        <div className="relative w-full h-[85vh] max-w-[1920px]">
          <Image
            src="/chatgpt-bg-image.png"
            alt="VSA Fasteners Background"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Navbar placed on the hero section */}
      <nav className="relative z-20 w-full px-6 py-5 lg:px-12 flex items-center justify-between text-white border-b border-white/10 bg-black/20 backdrop-blur-sm">
        {/* Left: Logo */}
        <Link href="/" className="relative w-36 h-12 flex items-center">
          <Image
            src="/Picture1-Photoroom.png"
            alt="Logo"
            fill
            className="object-contain object-left"
          />
        </Link>

        {/* Middle: Links */}
        <div className="hidden lg:flex items-center space-x-12 text-[17px] font-medium tracking-wide">
          <Link href="/" className="px-6 py-2 border border-white/40 rounded-full hover:bg-white/10 transition-colors">
            Home
          </Link>
          <Link href="/#products" className="hover:text-white/70 transition-colors">
            Products
          </Link>
          <Link href="/#features" className="hover:text-white/70 transition-colors">
            Features
          </Link>
          <Link href="/#contact" className="hover:text-white/70 transition-colors">
            Contact Us
          </Link>
          <Link href="/faq" className="hover:text-white/70 transition-colors">
            FAQs
          </Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-white/70 transition-colors" aria-label="Search">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <button className="hover:text-white/70 transition-colors" aria-label="Account">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
          <button className="hover:text-white/70 transition-colors" aria-label="Cart">
             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </button>
        </div>
      </nav>

      {/* Top Marquee */}
      <div className="relative z-10 w-full overflow-hidden flex whitespace-nowrap mt-4">
        <motion.div
          className="flex w-max"
          animate={reduceMotion ? undefined : { x: ["-50%", "0%"] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
          }
        >
          <div className="font-display text-[14vw] sm:text-[12vw] leading-[1.1] font-bold tracking-[-0.04em] pr-12 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            {marqueeText}
          </div>
          <div className="font-display text-[14vw] sm:text-[12vw] leading-[1.1] font-bold tracking-[-0.04em] pr-12 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            {marqueeText}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
