import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import VideoPlayer from "@/components/VideoPlayer";
import { getProject, projects } from "@/data/projects";
import { frameRatio } from "@/lib/embed";

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

  const position = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(position + 1) % projects.length];

  const facts = project.facts?.length
    ? project.facts
    : [{ label: "Tools", value: project.tools.join(", ") }];
  const blocks = [
    { label: "Overview", copy: project.overview },
    { label: "Creative objective", copy: project.objective },
    { label: "My role", copy: project.role },
    { label: "Editing approach", copy: project.approach },
    { label: "Final outcome", copy: project.outcome },
  ].filter((block) => block.copy);

  return (
    <main id="main">
      <article>
        <header className="mx-auto max-w-[1368px] px-5 pt-10 pb-12 sm:px-10 md:pt-16 md:pb-16 lg:px-16">
          <nav aria-label="Breadcrumb" className="eyebrow text-mute">
            <Link href="/#work" className="nav-link text-ink">
              Work
            </Link>
            <span aria-hidden="true" className="mx-3">
              /
            </span>
            <span>{project.category}</span>
          </nav>
          {project.isPlaceholder ? (
            <p className="mt-6">
              <PlaceholderBadge />
            </p>
          ) : null}
          <h1 className="display mt-8 max-w-5xl text-[clamp(2.6rem,7vw,6rem)] leading-[0.9] text-ink">
            {project.title}
          </h1>
        </header>

        <section
          aria-label="Video"
          className="on-dark bg-panel text-snow"
        >
          <div className="mx-auto max-w-[1368px] px-5 sm:px-10 lg:px-16">
            <div className="flex items-center justify-between border-b border-panel-line py-3">
              <p className="eyebrow text-panel-mute">Program</p>
              <p className="eyebrow text-snow">{frameRatio[project.frame]}</p>
            </div>
            <div className="py-6 md:py-10">
              <div
                className={`relative mx-auto ${
                  project.frame === "vertical"
                    ? "aspect-[9/16] w-full max-w-[380px]"
                    : project.frame === "square"
                      ? "aspect-square w-full max-w-[620px]"
                      : "aspect-video w-full"
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
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-[1368px] gap-14 px-5 py-16 sm:px-10 md:py-24 lg:grid-cols-12 lg:gap-10 lg:px-16">
          <div className="lg:col-span-7">
            <p className="eyebrow border-t border-ink pt-4 text-ink">
              The project
            </p>
            <div className="mt-8 space-y-6 text-lg leading-8 text-mute">
              <p className="text-2xl leading-9 text-ink">{project.summary}</p>
              {project.detail ? <p>{project.detail}</p> : null}
            </div>
            {blocks.length > 0 ? (
              <div className="mt-12 space-y-10">
                {blocks.map((block) => (
                  <section key={block.label}>
                    <h2 className="eyebrow text-mute">{block.label}</h2>
                    <p className="mt-3 text-lg leading-8 text-ink/80">
                      {block.copy}
                    </p>
                  </section>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow border-t border-ink pt-4 text-ink">
              Credits
            </p>
            <dl className="mt-4">
              {facts.map((fact) => (
                <div key={fact.label} className="border-b border-line py-4">
                  <dt className="eyebrow text-mute">{fact.label}</dt>
                  <dd className="mt-2 text-[16px] leading-7 text-ink">
                    {fact.href ? (
                      <a
                        href={fact.href}
                        className="nav-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {fact.value} ↗
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <Link href="/#contact" className="btn-primary mt-8 w-full">
              Start a project like this
            </Link>
          </aside>
        </div>

        {nextProject && nextProject.slug !== project.slug ? (
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block border-t border-line"
          >
            <div className="mx-auto flex max-w-[1368px] items-end justify-between gap-6 px-5 py-12 sm:px-10 md:py-16 lg:px-16">
              <div className="min-w-0">
                <p className="eyebrow text-mute">Next project</p>
                <p className="display mt-4 text-[clamp(2rem,5vw,4rem)] leading-[0.92] text-ink transition-opacity duration-300 group-hover:opacity-60">
                  {nextProject.title}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="display shrink-0 text-5xl text-ink transition-transform duration-300 group-hover:translate-x-2"
              >
                →
              </span>
            </div>
          </Link>
        ) : null}
      </article>
    </main>
  );
}
