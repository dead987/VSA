import type { MetadataRoute } from "next";

import { company } from "@/data/company";
import { productSlugs } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.websiteUrl;
  const staticRoutes = ["", "/about", "/products", "/why-choose-us", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date()
    })),
    ...productSlugs.map((slug) => ({
      url: `${base}/products/${slug}`,
      lastModified: new Date()
    }))
  ];
}
