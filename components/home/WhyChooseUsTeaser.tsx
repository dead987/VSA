import Link from "next/link";

import { company } from "@/data/company";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { Badge } from "@/components/shared/Badge";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function WhyChooseUsTeaser() {
  return (
    <section className="border-y border-steel-line bg-[#101114] py-20 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Trust is built through response quality, sourcing depth, and operational follow-through."
            description="This section turns a new company into a credible buying option by foregrounding service discipline instead of inflated claims."
          />
        </AnimatedReveal>
        <AnimatedReveal delay={0.08}>
          <div className="rounded-[1.5rem] border border-steel-line bg-graphite/70 p-8 shadow-card">
            <div className="flex flex-wrap gap-3">
              {company.commitments.slice(0, 4).map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
            <blockquote className="mt-8 border-l border-brass/40 pl-6">
              <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-warm-ivory">
                “{company.promiseQuote}”
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-smoke">{company.promiseBody}</p>
            </blockquote>
            <Link
              href="/why-choose-us"
              className="mt-8 inline-flex font-mono text-[11px] uppercase tracking-[0.18em] text-brass transition hover:text-brass-hover"
            >
              See full commitment
            </Link>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
