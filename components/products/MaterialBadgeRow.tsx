import { ProductCategory } from "@/data/products";
import { Badge } from "@/components/shared/Badge";

export function MaterialBadgeRow({ product }: { product: ProductCategory }) {
  return (
    <div className="flex flex-wrap gap-3">
      {product.rawMaterials.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  );
}
