import { Mail, MessageCircleMore, Phone } from "lucide-react";

import { company } from "@/data/company";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="rounded-[2rem] border border-brass/20 bg-gradient-to-br from-brass/10 via-graphite to-[#111215] p-8 shadow-card lg:p-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass">
            Ready To Enquire
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-[-0.05em] text-warm-ivory lg:text-5xl">
            Direct contact stays front and center because that is the fastest route to business.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-smoke lg:text-lg">
            Call, email, or start a WhatsApp conversation to discuss category requirements,
            sourcing needs, bulk supply, and dispatch timelines.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Contact VSA</Button>
            <Button
              href={`https://wa.me/${company.whatsappNumber}`}
              variant="secondary"
              className="gap-2"
            >
              <MessageCircleMore className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>
          <div className="mt-10 grid gap-4 border-t border-steel-line/90 pt-8 md:grid-cols-3">
            <div className="rounded-2xl border border-steel-line bg-obsidian/40 p-5">
              <Phone className="h-5 w-5 text-brass" />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-metal">
                Phones
              </p>
              <div className="mt-3 space-y-2 text-sm text-warm-ivory">
                {company.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`} className="block">
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-steel-line bg-obsidian/40 p-5">
              <Mail className="h-5 w-5 text-brass" />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-metal">
                Email
              </p>
              <a href={`mailto:${company.email}`} className="mt-3 block text-sm text-warm-ivory">
                {company.email}
              </a>
            </div>
            <div className="rounded-2xl border border-steel-line bg-obsidian/40 p-5">
              <MessageCircleMore className="h-5 w-5 text-brass" />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-metal">
                Service Promise
              </p>
              <p className="mt-3 text-sm leading-7 text-warm-ivory">{company.promiseQuote}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
