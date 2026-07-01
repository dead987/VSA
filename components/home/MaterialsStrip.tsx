import { company } from "@/data/company";
import { Container } from "@/components/shared/Container";

export function MaterialsStrip() {
  return (
    <section className="border-b border-steel-line bg-[#0e0f11]">
      <Container className="overflow-hidden py-5">
        <div className="flex gap-3 overflow-x-auto">
          {company.materialsStrip.map((item) => (
            <span
              key={item}
              className="shrink-0 rounded-full border border-steel-line bg-graphite px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-smoke"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
