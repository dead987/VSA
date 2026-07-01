import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Call, email, or message VSA Enterprises directly for industrial fastener and material enquiries."
});

export default function ContactPage() {
  const mapSrc =
    "https://www.google.com/maps?q=5/589%20Bhiwadi%20UIT%20Colony%20RIICO%20Industrial%20Area%20Kharani%20Khairthal%20Tijara%20Rajasthan%20301019&z=15&output=embed";

  return (
    <div className="pb-20 pt-14 lg:pb-28 lg:pt-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Direct contact pathways stay prominent because there is no backend form in v1."
          description="Phone, WhatsApp, and email are treated as the primary lead paths so buyers can move from interest to enquiry immediately."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[1.5rem] border border-steel-line bg-graphite/70 p-6 shadow-card">
              <MapPin className="h-5 w-5 text-brass" />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-metal">
                Address
              </p>
              <p className="mt-3 text-sm leading-7 text-warm-ivory">{company.address}</p>
            </div>

            <div className="rounded-[1.5rem] border border-steel-line bg-graphite/70 p-6 shadow-card">
              <Phone className="h-5 w-5 text-brass" />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-metal">
                Call
              </p>
              <div className="mt-3 space-y-3 text-sm text-warm-ivory">
                {company.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`} className="block">
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-steel-line bg-graphite/70 p-6 shadow-card">
              <Mail className="h-5 w-5 text-brass" />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-metal">
                Email & GSTIN
              </p>
              <a href={`mailto:${company.email}`} className="mt-3 block text-sm text-warm-ivory">
                {company.email}
              </a>
              <p className="mt-4 font-mono text-sm text-smoke">{company.gstin}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href={`https://wa.me/${company.whatsappNumber}`}>WhatsApp</Button>
              <Button href={`mailto:${company.email}`} variant="secondary">
                Email Us
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-steel-line bg-graphite/70 shadow-card">
            <iframe
              title="VSA Enterprises location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[28rem] w-full border-0"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
