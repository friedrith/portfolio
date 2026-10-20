import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/profile";
import { projectHref, projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/projects", "/skills", "/blog", ...projects.map((p) => projectHref(p.slug))];
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
