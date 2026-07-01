import { notFound } from "next/navigation";

import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MaterialBadgeRow } from "@/components/products/MaterialBadgeRow";
import { ProductHero } from "@/components/products/ProductHero";
import { RawMaterialsList } from "@/components/products/RawMaterialsList";
import { getProductBySlug, productSlugs } from "@/data/products";
import { buildMetadata } from "@/lib/metadata";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return buildMetadata({
      title: "Product",
      description: "Product details from VSA Enterprises."
    });
  }

  return buildMetadata({
    title: product.name,
    description: product.shortDescription
  });
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pb-20 lg:pb-28">
      <ProductHero product={product} />

      <Container className="pt-14 lg:pt-20">
        <SectionHeading
          eyebrow="Materials & Grades"
          title={`Material coverage for ${product.name.toLowerCase()}.`}
          description="Content is driven from the product data layer so category details remain easy to update without editing component code."
        />
        <div className="mt-10">
          <MaterialBadgeRow product={product} />
        </div>
      </Container>

      <Container className="grid gap-10 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:pt-20">
        <RawMaterialsList product={product} />
        <div className="rounded-[1.5rem] border border-steel-line bg-graphite/70 p-8 shadow-card">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
            Types Available
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {product.types.map((type) => (
              <div
                key={type}
                className="rounded-xl border border-steel-line bg-obsidian/50 px-4 py-4 text-sm text-smoke transition hover:border-brass/25 hover:text-warm-ivory"
              >
                {type}
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-steel-line pt-8">
            <p className="max-w-xl text-sm leading-7 text-smoke">
              Need this category for a project, maintenance requirement, or recurring industrial
              supply? Reach out directly for availability, grades, and dispatch support.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/contact">Enquire About {product.name}</Button>
              <Button href="/products" variant="secondary">
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
