import Link from "next/link";
import { notFound } from "next/navigation";
import CoverMedia from "@/components/CoverMedia";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import VideoPlayer from "@/components/VideoPlayer";
import { getProject, projects } from "@/data/projects";
import { fileVideoSrc } from "@/lib/embed";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const facts = project.facts ?? [];
  const blocks = [
    { label: "Overview", copy: project.overview },
    { label: "Creative objective", copy: project.objective },
    { label: "My role", copy: project.role },
    { label: "Editing approach", copy: project.approach },
    { label: "Final outcome", copy: project.outcome },
  ].filter((block) => block.copy);

  return (
    <main id="main" className="pb-16 md:pb-24">
      <article>
        <header className="mx-auto max-w-[1180px] px-6 pb-16 pt-16 sm:px-10 md:pt-24 lg:px-16">
          <p className="text-sm text-mute">
            <Link href="/#work" className="transition-opacity hover:opacity-60">
              Work
            </Link>
            <span aria-hidden="true">  /  </span>
            <span>{project.category}</span>
          </p>
          {project.isPlaceholder ? (
            <p className="mt-8">
              <PlaceholderBadge />
            </p>
          ) : null}
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-ink md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-mute">
            {project.summary}
          </p>
          {project.detail ? (
            <p className="mt-6 max-w-xl text-lg leading-8 text-mute">
              {project.detail}
            </p>
          ) : null}
          {facts.length === 0 ? (
            <p className="mt-6 text-sm text-mute">{project.tools.join("  ·  ")}</p>
          ) : null}
        </header>

        <div
          className={`relative mx-auto overflow-hidden bg-wash ${
            project.frame === "vertical"
              ? "aspect-[9/16] max-w-sm"
              : project.frame === "square"
                ? "aspect-square max-w-xl"
                : "aspect-video max-w-[1180px]"
          }`}
        >
          <VideoPlayer
            url={project.videoUrl}
            title={project.title}
            poster={project.thumbnail}
            posterAlt={project.thumbnailAlt}
            className="absolute inset-0"
          />
        </div>

        <div className="mx-auto grid max-w-[1180px] gap-20 px-6 py-24 sm:px-10 lg:grid-cols-12 lg:px-16">
          <div className="space-y-14 lg:col-span-7">
            {facts.length > 0 ? (
              <dl className="space-y-10">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm tracking-[0.14em] text-mute uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-4 text-lg leading-8 text-ink/80">
                      {fact.href ? (
                        <a
                          href={fact.href}
                          className="nav-link text-ink"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {fact.value}
                        </a>
                      ) : (
                        fact.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <>
                {blocks.map((block) => (
                  <section key={block.label}>
                    <h2 className="text-sm tracking-[0.14em] text-mute uppercase">
                      {block.label}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-ink/80">
                      {block.copy}
                    </p>
                  </section>
                ))}
                <section>
                  <h2 className="text-sm tracking-[0.14em] text-mute uppercase">
                    Tools used
                  </h2>
                  <ul className="mt-5 space-y-2">
                    {project.tools.map((tool) => (
                      <li key={tool} className="text-lg text-ink">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </section>
              </>
            )}
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div
              className={`relative overflow-hidden bg-wash ${
                project.frame === "vertical"
                  ? "aspect-[4/5]"
                  : project.frame === "square"
                    ? "aspect-square"
                    : "aspect-[16/10]"
              }`}
            >
              <CoverMedia
                src={fileVideoSrc(project.videoUrl)}
                poster={project.thumbnail}
                alt={project.thumbnailAlt}
                sizes="400px"
              />
            </div>
            <p className="mt-6 text-sm leading-6 text-mute">
              {project.isPlaceholder
                ? "Sample case study. Replace the video, still, and copy in src/data/projects.js."
                : project.category}
            </p>
            <Link href="/#contact" className="btn-primary mt-8">
              Start a brief
            </Link>
          </aside>
        </div>
      </article>
    </main>
  );
}
