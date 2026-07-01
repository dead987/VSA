import { PremiumAboutUs } from "@/components/home/PremiumAboutUs";
import { PremiumContact } from "@/components/home/PremiumContact";
import { Hero } from "@/components/home/Hero";
import { PremiumKeyStrengths } from "@/components/home/PremiumKeyStrengths";
import { PremiumProducts } from "@/components/home/PremiumProducts";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Home",
  description:
    "Explore VSA Enterprises, a premium industrial fastener and engineering supply company serving buyers across India."
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <PremiumKeyStrengths />
      <PremiumProducts />
      <PremiumAboutUs />
      <PremiumContact />
    </>
  );
}
