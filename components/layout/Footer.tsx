import Link from "next/link";

import { company } from "@/data/company";
import { products } from "@/data/products";
import { Container } from "@/components/shared/Container";

export function Footer() {
  return (
    <footer className="border-t border-steel-line bg-[#0d0e10]">
      <Container className="grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-warm-ivory">
            {company.name}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-smoke">
            Premium industrial fasteners, fabrication materials, and dependable supply support
            for engineering and manufacturing requirements.
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-metal">
            GSTIN / UIN
          </p>
          <p className="mt-2 font-mono text-sm text-warm-ivory">{company.gstin}</p>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
            Quick Links
          </p>
          <div className="mt-5 grid gap-3 text-sm text-smoke">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/why-choose-us">Why Choose Us</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
            Categories
          </p>
          <div className="mt-5 grid gap-3 text-sm text-smoke">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`}>
                {product.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
            Contact
          </p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-smoke">
            <p>{company.address}</p>
            <div>
              {company.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`} className="block">
                  {phone}
                </a>
              ))}
            </div>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
      </Container>
      <div className="border-t border-steel-line/80 py-5 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-metal">
        © 2026 {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
