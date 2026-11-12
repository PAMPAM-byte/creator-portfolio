import Link from "next/link";
import CoverMedia from "@/components/CoverMedia";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import { frameRatio, reelClipSrc } from "@/lib/embed";

export default function ProjectCard({ project, onWatch }) {
  const vertical = project.frame === "vertical";
  const square = project.frame === "square";

  return (
    <article className="group">
      <button
        type="button"
        onClick={() => onWatch(project)}
        aria-label={`Play ${project.title}`}
        className={`relative block w-full overflow-hidden bg-panel ${
          square ? "aspect-square" : vertical ? "aspect-[4/5]" : "aspect-[16/10]"
        }`}
      >
        <CoverMedia
          src={reelClipSrc(project.videoUrl)}
          poster={project.thumbnail}
          alt={project.thumbnailAlt}
          sizes={
            project.frame === "wide"
              ? "(max-width: 768px) 100vw, 58vw"
              : "(max-width: 768px) 100vw, 42vw"
          }
          className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />
        <span className="eyebrow absolute top-3 right-3 bg-panel/80 px-2 py-1 text-snow">
          {frameRatio[project.frame]}
        </span>
        <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center gap-2 bg-gradient-to-t from-black/70 to-transparent px-4 pt-10 pb-4 text-sm text-snow opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
            <path d="M7 4.5v15l12-7.5z" />
          </svg>
          Play with sound
        </span>
      </button>

      <div className="pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="eyebrow text-mute">{project.category}</p>
          {project.isPlaceholder ? <PlaceholderBadge /> : null}
        </div>
        <h3 className="mt-3 text-2xl leading-tight font-semibold tracking-tight text-ink">
          <Link
            href={`/work/${project.slug}`}
            className="transition-opacity duration-300 hover:opacity-60"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 max-w-lg text-[15px] leading-7 text-mute">
          {project.summary}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
          {project.tools.length > 0 ? (
            <p className="eyebrow text-mute">{project.tools.join(" · ")}</p>
          ) : (
            <span />
          )}
          <Link
            href={`/work/${project.slug}`}
            className="nav-link text-sm font-medium text-ink"
          >
            Case study →
          </Link>
        </div>
      </div>
    </article>
  );
}
