"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { company } from "@/data/company";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ease-premium ${
          scrolled
            ? "border-steel-line bg-obsidian/90 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Container wide className="flex h-[4.75rem] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/brand/logo.png"
              alt={`${company.name} logo`}
              width={56}
              height={56}
              className="h-12 w-12 rounded-full border border-steel-line/70 object-cover"
            />
            <div>
              <p className="font-display text-lg font-semibold tracking-[-0.03em] text-warm-ivory">
                {company.name}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-metal">
                {company.subTagline}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-smoke transition hover:text-warm-ivory"
              >
                {link.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <Link href="/products" className="text-sm text-smoke transition hover:text-warm-ivory">
                Products
              </Link>
              <MegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} />
            </div>
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="rounded-full border border-steel-line p-3 text-smoke transition hover:border-brass/40 hover:text-brass lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </Container>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
