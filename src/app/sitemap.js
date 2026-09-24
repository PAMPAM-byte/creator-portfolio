import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified },
    { url: `${site.url}/work`, lastModified },
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      lastModified,
    })),
  ];
}
