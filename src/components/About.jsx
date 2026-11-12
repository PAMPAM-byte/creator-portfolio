import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/data/site";
import { aiTools, tools } from "@/data/skills";

const facts = [
  { label: "Based in", value: site.location },
  { label: "Edits in", value: tools.map((tool) => tool.name).join(", ") },
  {
    label: "Generates with",
    value: aiTools
      .slice(0, 4)
      .map((tool) => tool.name)
      .join(", "),
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 px-5 py-16 sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          id="about-heading"
          kicker="About"
          meta={site.location}
          title="Editor, AI creator, visual storyteller"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-8 text-mute">
              <p className="text-2xl leading-9 text-ink">
                I’m Favour Oluwapamilerin Akintade. I turn ideas and raw
                footage into videos that capture attention and communicate
                clearly.
              </p>
              <p>
                My work includes short-form social content, promotional videos,
                product explainers, motion graphics, UGC-style videos, and
                AI-generated storytelling. I combine creative concepts,
                purposeful editing, captions, pacing, and visual direction to
                produce content suited for brands and digital audiences.
              </p>
              <p>
                Whether I’m working with existing footage or developing an idea
                from the beginning, my focus is always the same: creating
                content that feels natural, visually engaging, and memorable.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-4 lg:col-start-9">
            <dl className="border-t border-line">
              {facts.map((fact) => (
                <div key={fact.label} className="border-b border-line py-5">
                  <dt className="eyebrow text-mute">{fact.label}</dt>
                  <dd className="mt-2 text-[16px] leading-7 text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
