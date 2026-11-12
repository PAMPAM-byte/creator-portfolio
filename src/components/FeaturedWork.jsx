import SectionHeader from "@/components/SectionHeader";
import WorkGallery from "@/components/WorkGallery";
import { projects } from "@/data/projects";

export default function FeaturedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-20 px-5 py-16 sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          id="work-heading"
          kicker="Selected work"
          meta={`${projects.length} projects`}
          title="Recent edits and AI films"
        >
          Filter by format, play a piece, or open the case study for the
          brief, my role, and the tools behind it.
        </SectionHeader>
        <WorkGallery />
      </div>
    </section>
  );
}
