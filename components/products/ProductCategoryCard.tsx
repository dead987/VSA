import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProductCategory } from "@/data/products";
import { Badge } from "@/components/shared/Badge";
import { ProductIcon } from "@/components/shared/ProductIcon";

export function ProductCategoryCard({ product }: { product: ProductCategory }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group overflow-hidden rounded-[1.5rem] border border-steel-line bg-graphite/70 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brass/30 hover:shadow-glow"
    >
      <div className="relative h-56 overflow-hidden border-b border-steel-line">
        <Image
          src={product.thumbImage}
          alt={`${product.name} category preview`}
          fill
          className="object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent" />
        <div className="absolute left-5 top-5 rounded-xl border border-brass/15 bg-obsidian/70 p-3 text-brass backdrop-blur-md">
          <ProductIcon icon={product.icon} className="h-5 w-5" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-warm-ivory">
            {product.name}
          </h3>
          <ArrowUpRight className="h-5 w-5 text-smoke transition group-hover:text-brass" />
        </div>
        <p className="mt-4 text-sm leading-7 text-smoke">{product.shortDescription}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {product.rawMaterials.slice(0, 3).map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
