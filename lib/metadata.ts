import type { Metadata } from "next";

import { company } from "@/data/company";

const defaultTitle = `${company.name} | ${company.subTagline}`;
const defaultDescription =
  "Premium industrial fasteners, hardware, and engineering supply solutions from VSA Enterprises in Bhiwadi, Rajasthan.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(company.websiteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${company.name}`
  },
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: company.websiteUrl,
    siteName: company.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${company.name} Open Graph preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/brand/og-image.jpg"]
  }
};

export const buildMetadata = ({
  title,
  description
}: {
  title: string;
  description: string;
}): Metadata => ({
  title,
  description,
  openGraph: {
    title: `${title} | ${company.name}`,
    description,
    images: ["/images/brand/og-image.jpg"]
  }
});
