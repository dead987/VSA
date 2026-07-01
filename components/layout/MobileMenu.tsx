"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

import { products } from "@/data/products";
import { mobileMenuVariants, fadeUp } from "@/lib/animations";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/contact", label: "Contact" }
];

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 bg-obsidian/95 px-6 py-6 backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-smoke">
              Navigation
            </p>
            <button
              aria-label="Close menu"
              onClick={onClose}
              className="rounded-full border border-steel-line p-3 text-smoke transition hover:border-brass/40 hover:text-brass"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <motion.div
            className="mt-16 space-y-6"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {links.map((link) => (
              <motion.div key={link.href} variants={fadeUp}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block font-display text-4xl font-semibold tracking-[-0.04em] text-warm-ivory transition hover:text-brass"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div variants={fadeUp} className="border-t border-steel-line pt-6">
              <button
                onClick={() => setProductsOpen((value) => !value)}
                className="flex w-full items-center justify-between font-display text-4xl font-semibold tracking-[-0.04em] text-warm-ivory transition hover:text-brass"
              >
                Products
                <ChevronDown
                  className={`h-6 w-6 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {productsOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 grid gap-3">
                      {products.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          onClick={onClose}
                          className="rounded-xl border border-steel-line bg-graphite/70 px-4 py-3 text-sm text-smoke transition hover:border-brass/40 hover:text-warm-ivory"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
