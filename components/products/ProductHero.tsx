import Image from "next/image";

import { ProductCategory } from "@/data/products";
import { Badge } from "@/components/shared/Badge";
import { Container } from "@/components/shared/Container";
import { ProductIcon } from "@/components/shared/ProductIcon";

export function ProductHero({ product }: { product: ProductCategory }) {
  return (
    <section className="border-b border-steel-line pb-14 pt-14 lg:pb-20 lg:pt-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <Badge className="border-brass/20 bg-brass/10 text-brass">Product Category</Badge>
          <div className="mt-6 flex items-center gap-4">
            <div className="rounded-2xl border border-brass/15 bg-brass/10 p-4 text-brass">
              <ProductIcon icon={product.icon} className="h-7 w-7" />
            </div>
            <h1 className="font-display text-4xl font-bold tracking-[-0.05em] text-warm-ivory sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-smoke lg:text-lg">
            {product.fullDescription}
          </p>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-metal">
            Materials Summary
          </p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-warm-ivory">
            {product.materialsSummary}
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-steel-line shadow-card">
          <Image
            src={product.heroImage}
            alt={`${product.name} brochure hero`}
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
        </div>
      </Container>
    </section>
  );
}
