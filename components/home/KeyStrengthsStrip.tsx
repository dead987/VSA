"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Boxes,
  CircleDollarSign,
  PackageCheck,
  Warehouse
} from "lucide-react";

import { company } from "@/data/company";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Container } from "@/components/shared/Container";
import { ProductIcon } from "@/components/shared/ProductIcon";
import { SectionHeading } from "@/components/shared/SectionHeading";

const strengthIcons = [Award, CircleDollarSign, BadgeCheck, Boxes, PackageCheck, Warehouse];

export function KeyStrengthsStrip() {
  return (
    <section className="border-y border-steel-line bg-[#101114] py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Key Strengths"
          title="Operational discipline that makes a new supplier feel established."
          description="Every strength is presented as a buyer-facing reason to trust response speed, quality control, and supply readiness."
        />
        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {company.strengths.map((strength, index) => {
            const Icon = strengthIcons[index] ?? ProductIcon;

            return (
              <motion.article
                key={strength.title}
                variants={fadeUp}
                className="group rounded-[1.25rem] border border-steel-line bg-graphite/70 p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brass/30 hover:shadow-glow"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl border border-brass/15 bg-brass/10 p-3 text-brass">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-warm-ivory">
                    {strength.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-7 text-smoke">{strength.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
