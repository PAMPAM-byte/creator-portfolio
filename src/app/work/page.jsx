import SectionHeader from "@/components/SectionHeader";
import WorkGallery from "@/components/WorkGallery";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Work",
  description:
    "Featured video edits by Favour Akintade: short-form, AI video, promotional, motion graphics, and social content.",
};

export default function WorkPage() {
  return (
    <main id="main" className="px-5 pt-10 pb-16 sm:px-10 md:pt-16 md:pb-24 lg:px-16">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          id="all-work-heading"
          as="h1"
          kicker="Work"
          meta={`${projects.length} projects`}
          title="All projects"
        >
          Filter by format, play a piece, or open the case study for the
          brief, my role, and the tools behind it.
        </SectionHeader>
        <WorkGallery />
      </div>
    </main>
  );
}
