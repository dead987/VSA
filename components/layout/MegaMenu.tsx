import Link from "next/link";

import { products } from "@/data/products";
import { ProductIcon } from "@/components/shared/ProductIcon";

type MegaMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MegaMenu({ open, onClose }: MegaMenuProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="absolute left-0 top-full hidden w-[38rem] rounded-2xl border border-steel-line bg-[#101114]/95 p-5 shadow-card backdrop-blur-xl lg:block">
      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            onClick={onClose}
            className="group rounded-xl border border-transparent bg-graphite/65 p-4 transition-all duration-300 ease-premium hover:border-brass/30 hover:bg-graphite"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-lg border border-brass/15 bg-brass/10 p-2 text-brass">
                <ProductIcon icon={product.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-warm-ivory group-hover:text-brass">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-smoke">
                  {product.shortDescription}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
