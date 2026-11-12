import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { aiTools, craft, tools } from "@/data/skills";

const groups = [
  { title: "Editing", items: tools },
  { title: "AI generation", items: aiTools },
  { title: "Craft", items: craft },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="on-dark scroll-mt-20 bg-panel px-5 py-16 text-snow sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          id="skills-heading"
          kicker="Toolkit"
          meta={`${tools.length + aiTools.length} tools`}
          title="Tools and craft"
          tone="dark"
        />
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <h3 className="eyebrow border-b border-panel-line pb-4 text-panel-mute">
                {group.title}
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.id}
                    className="border border-panel-line px-3.5 py-2 text-[15px] text-snow"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
