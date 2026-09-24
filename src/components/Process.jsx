import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-28 px-6 py-16 sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          id="process-heading"
          kicker="Process"
          title="How I work"
        />
        <ol className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.07} as="li">
              <article>
                <p className="text-sm text-mute">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 text-xl tracking-tight text-ink">
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
