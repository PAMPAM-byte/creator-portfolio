import Link from "next/link";
import CoverMedia from "@/components/CoverMedia";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { fileVideoSrc } from "@/lib/embed";

export default function ProjectCard({ project, onWatch }) {
  const vertical = project.frame === "vertical";
  const square = project.frame === "square";

  return (
    <article className="group">
      <button
        type="button"
        onClick={() => onWatch(project)}
        className={`relative block w-full overflow-hidden bg-wash ${
          square ? "aspect-square" : vertical ? "aspect-[4/5]" : "aspect-[16/10]"
        }`}
      >
        <CoverMedia
          src={fileVideoSrc(project.videoUrl)}
          poster={project.thumbnail}
          alt={project.thumbnailAlt}
          sizes={
            square || vertical
              ? "(max-width: 768px) 100vw, 42vw"
              : "(max-width: 768px) 100vw, 58vw"
          }
          className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="bg-snow px-5 py-2.5 text-sm text-ink">
            Watch project
          </span>
        </span>
      </button>

      <div className="pt-6">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-sm text-mute">{project.category}</p>
          {project.isPlaceholder ? <PlaceholderBadge /> : null}
        </div>
        <h3 className="mt-2 text-2xl tracking-tight text-ink">
          <Link
            href={`/work/${project.slug}`}
            className="transition-opacity duration-300 hover:opacity-60"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-7 text-mute">
          {project.summary}
        </p>
        {project.tools.length > 0 ? (
          <p className="mt-4 text-sm text-mute">{project.tools.join("  ·  ")}</p>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-8">
          <button
            type="button"
            onClick={() => onWatch(project)}
            className="nav-link text-sm text-ink"
          >
            Watch project
          </button>
          <Link
            href={`/work/${project.slug}`}
            className="nav-link text-sm text-ink"
          >
            Case study
          </Link>
        </div>
      </div>
    </article>
  );
}
