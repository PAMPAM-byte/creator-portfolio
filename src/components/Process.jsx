import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-20 px-5 py-16 sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          id="process-heading"
          kicker="Process"
          meta={`${processSteps.length} stages`}
          title="From brief to final export"
        />
        <ol className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute top-[5px] right-0 left-0 hidden h-px bg-ink lg:block"
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.07} as="li">
              <article className="relative">
                <span
                  aria-hidden="true"
                  className="relative block size-[11px] bg-ink"
                />
                <p className="eyebrow mt-6 text-mute">
                  Stage {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="display mt-3 text-[1.9rem] leading-[0.95] text-ink">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-mute">
                  {step.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
