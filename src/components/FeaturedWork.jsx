import SectionHeader from "@/components/SectionHeader";
import WorkGallery from "@/components/WorkGallery";

export default function FeaturedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="px-6 pt-14 pb-16 sm:px-10 md:pt-20 md:pb-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          id="work-heading"
          kicker="Work"
          title="Selected work"
        >
          Filter by format, watch a piece, or open the case study.
        </SectionHeader>
        <WorkGallery />
      </div>
    </section>
  );
}
