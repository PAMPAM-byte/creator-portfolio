import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-28 px-6 pt-16 pb-14 sm:px-10 md:pt-24 md:pb-20 lg:px-16"
    >
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          id="about-heading"
          kicker="About"
          title="About me"
          className="max-w-[800px]"
          ledeClassName="max-w-[800px]"
          marginClassName="mb-10"
        >
          Visual storytelling, social content, and AI-powered production by
          PAMPAM, currently based in Ekiti State, Nigeria.
        </SectionHeader>

        <Reveal>
          <div className="max-w-[800px] space-y-7 text-lg leading-8 text-mute">
            <p>
              I’m Favour Oluwapamilerin Akintade, a video editor, AI content
              creator, and visual storyteller based in Ekiti State, Nigeria. I
              transform ideas and raw footage into engaging videos that capture
              attention and communicate clearly.
            </p>
            <p>
              My work includes short-form social content, promotional videos,
              product explainers, comedy advertisements, motion graphics,
              UGC-style videos, and AI-generated storytelling. I combine
              creative concepts, purposeful editing, captions, pacing, and
              visual direction to produce content suited for brands and digital
              audiences.
            </p>
            <p>
              Whether I’m working with existing footage or developing an idea
              from the beginning, my focus is always the same: creating content
              that feels natural, visually engaging, and memorable.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
