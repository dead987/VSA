import Image from "next/image";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about VSA Enterprises, its industrial fastener supply focus, vision, and operating strengths."
});

export default function AboutPage() {
  return (
    <div className="pb-20 pt-14 lg:pb-28 lg:pt-20">
      <Container>
        <SectionHeading
          eyebrow="About VSA"
          title="Industrial supply presented with clarity, seriousness, and buyer confidence."
          description={company.about}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-steel-line bg-graphite/70 p-8 shadow-card">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
              Vision & Mission
            </p>
            <p className="mt-5 text-base leading-8 text-smoke">{company.visionMission}</p>
            <blockquote className="mt-10 border-l border-brass/35 pl-6">
              <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-warm-ivory">
                “{company.promiseQuote}”
              </p>
              <p className="mt-4 text-sm leading-7 text-smoke">{company.promiseBody}</p>
            </blockquote>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-steel-line bg-graphite/70 shadow-card">
            <Image
              src="/images/brand/facility-placeholder.png"
              alt="VSA Enterprises branded brochure placeholder for future facility photography"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {company.strengths.map((strength) => (
            <article
              key={strength.title}
              className="rounded-[1.25rem] border border-steel-line bg-graphite/70 p-6 shadow-card"
            >
              <p className="font-display text-xl font-semibold tracking-[-0.03em] text-warm-ivory">
                {strength.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-smoke">{strength.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
