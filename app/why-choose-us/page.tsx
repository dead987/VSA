import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Why Choose Us",
  description:
    "See the service commitments, supply strengths, and trust signals that define VSA Enterprises."
});

export default function WhyChooseUsPage() {
  return (
    <div className="pb-20 pt-14 lg:pb-28 lg:pt-20">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A new company can still feel like a safe industrial buying decision when the operating signals are clear."
          description="This page turns credibility into structure: commitments, fulfillment readiness, sourcing capability, and a direct promise of dependable service."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {company.commitments.map((item) => (
            <article
              key={item}
              className="rounded-[1.25rem] border border-steel-line bg-graphite/70 p-6 shadow-card"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass">
                Commitment
              </p>
              <p className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-warm-ivory">
                {item}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-steel-line bg-graphite/70 p-8 shadow-card">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
              Our Promise
            </p>
            <blockquote className="mt-6 max-w-2xl">
              <p className="font-display text-4xl font-semibold tracking-[-0.05em] text-warm-ivory lg:text-5xl">
                “{company.promiseQuote}”
              </p>
              <p className="mt-5 text-base leading-8 text-smoke">{company.promiseBody}</p>
            </blockquote>
          </div>
          <div className="rounded-[1.5rem] border border-steel-line bg-[#101114] p-8 shadow-card">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
              Trust Framing
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-smoke">
              <p>
                VSA Enterprises is positioned as a serious, responsive supply partner from day one.
              </p>
              <p>
                Instead of overstating legacy, the site emphasizes operational cues buyers care
                about: ready stock, material breadth, competitive pricing, and direct contact.
              </p>
              <p>
                The result is a digital brochure that reduces hesitation and helps buyers reach out
                with confidence.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
