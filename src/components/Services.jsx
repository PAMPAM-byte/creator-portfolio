import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-28 px-6 py-16 sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          id="services-heading"
          kicker="Services"
          title="What I can help with"
        />
        <div className="grid gap-x-16 gap-y-14 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <article className="max-w-md">
                <h3 className="text-2xl tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-mute">
                  {service.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
