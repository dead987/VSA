import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProductCategoryCard } from "@/components/products/ProductCategoryCard";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Browse all VSA Enterprises product categories, from bolts and nuts to studs and special purpose materials."
});

export default function ProductsPage() {
  return (
    <div className="pb-20 pt-14 lg:pb-28 lg:pt-20">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="All product categories in one scan-friendly technical overview."
          description="The product hub is designed for quick orientation: category, use case, materials, and direct access to detail pages."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCategoryCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
