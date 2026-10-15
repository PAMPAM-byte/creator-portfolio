import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { aiTools, craft, tools } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-28 px-6 py-16 sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          id="skills-heading"
          kicker="Skills"
          title="Tools and craft"
        />
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <h3 className="text-sm tracking-[0.16em] text-mute uppercase">
              Editing tools
            </h3>
            <ul className="mt-8 space-y-4">
              {tools.map((tool) => (
                <li key={tool.id} className="text-lg text-ink">
                  {tool.name}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="text-sm tracking-[0.16em] text-mute uppercase">
              AI tools
            </h3>
            <ul className="mt-8 space-y-4">
              {aiTools.map((tool) => (
                <li key={tool.id} className="text-lg text-ink">
                  {tool.name}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.16}>
            <h3 className="text-sm tracking-[0.16em] text-mute uppercase">
              Craft
            </h3>
            <ul className="mt-8 space-y-4">
              {craft.map((skill) => (
                <li key={skill.id} className="text-lg text-ink">
                  {skill.name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
