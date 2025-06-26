import { createClient } from "@/prismicio";

export const baseUrl = "https://investors.darkalphacapital.com";

export default async function sitemap() {
  const client = createClient();

  const routes = [
    "/",
    "/about",
    "/contact",
    "/offerings",
    "/how-it-works",
    "/investment-process",
    "/track-record",
    "/frequently-asked-questions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
