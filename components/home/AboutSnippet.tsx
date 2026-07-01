import Link from "next/link";

import { company } from "@/data/company";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function AboutSnippet() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Overview"
            title="A brochure site built to answer trust, range, and reach at a glance."
          />
        </AnimatedReveal>
        <AnimatedReveal delay={0.1}>
          <div className="rounded-[1.5rem] border border-steel-line bg-graphite/70 p-8 shadow-card">
            <p className="text-base leading-8 text-smoke lg:text-lg">
              {company.about}
            </p>
            <p className="mt-6 text-base leading-8 text-smoke">{company.visionMission}</p>
            <Link
              href="/about"
              className="mt-8 inline-flex font-mono text-[11px] uppercase tracking-[0.18em] text-brass transition hover:text-brass-hover"
            >
              Read full company story
            </Link>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
