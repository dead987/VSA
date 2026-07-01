import { ProductCategory } from "@/data/products";

export function RawMaterialsList({ product }: { product: ProductCategory }) {
  return (
    <div className="rounded-[1.5rem] border border-steel-line bg-graphite/70 p-8 shadow-card">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
        Raw Materials
      </p>
      <div className="mt-6 space-y-4">
        {product.rawMaterials.map((item) => (
          <div key={item} className="border-b border-steel-line/70 pb-4 last:border-b-0 last:pb-0">
            <p className="text-sm leading-7 text-smoke">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
