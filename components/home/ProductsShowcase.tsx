import { products } from "@/data/products";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProductCategoryCard } from "@/components/products/ProductCategoryCard";

export function ProductsShowcase() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Product Range"
            title="Seven product lines, structured for fast buyer scanning."
            description="Every category can be reached in two clicks or less, with details generated directly from content data."
          />
        </AnimatedReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <AnimatedReveal key={product.slug} delay={index * 0.05}>
              <ProductCategoryCard product={product} />
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
