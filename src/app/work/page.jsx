import SectionHeader from "@/components/SectionHeader";
import WorkGallery from "@/components/WorkGallery";

export const metadata = {
  title: "Work",
  description:
    "Featured video edits by Favour Akintade: short-form, AI video, promotional, motion graphics, and social content.",
};

export default function WorkPage() {
  return (
    <main id="main" className="px-6 py-16 sm:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          id="all-work-heading"
          kicker="Work"
          title="All projects"
        >
          Filter by format, watch a piece, or open the case study.
        </SectionHeader>
        <WorkGallery />
      </div>
    </main>
  );
}
