import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Inter } from "next/font/google";

import "./globals.css";

import { PremiumFooter } from "@/components/layout/PremiumFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { company } from "@/data/company";
import { siteMetadata } from "@/lib/metadata";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display"
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: company.subTagline,
  image: `${company.websiteUrl}/images/brand/og-image.jpg`,
  telephone: company.phones,
  email: company.email,
  url: company.websiteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "5/589, Bhiwadi, UIT Colony, RIICO Industrial Area Kharani, Khairthal - Tijara",
    addressLocality: "Bhiwadi",
    addressRegion: "Rajasthan",
    postalCode: "301019",
    addressCountry: "IN"
  },
  taxID: company.gstin
};

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} ${mono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <main>{children}</main>
        <PremiumFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
