import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 px-5 py-16 sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader
          id="services-heading"
          kicker="Services"
          meta={`${services.length} ways to work together`}
          title="What I can help with"
        />
        <ul className="border-t border-line">
          {services.map((service, index) => (
            <Reveal key={service.id} as="li" delay={index * 0.04}>
              <div className="group grid gap-3 border-b border-line px-0 py-8 transition-colors duration-300 hover:bg-ink md:grid-cols-12 md:gap-10 md:px-4 md:py-10">
                <h3 className="display text-3xl leading-[0.95] text-ink transition-colors duration-300 group-hover:text-snow md:col-span-5 md:text-4xl">
                  {service.title}
                </h3>
                <p className="max-w-xl text-[16px] leading-7 text-mute transition-colors duration-300 group-hover:text-snow/70 md:col-span-6 md:col-start-7">
                  {service.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
