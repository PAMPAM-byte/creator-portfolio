import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { blurDataURL } from "@/lib/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="px-5 pt-10 pb-16 sm:px-10 md:pt-16 md:pb-20 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 lg:order-1 lg:col-span-7 lg:pb-2">
            <p className="eyebrow text-mute">
              {site.role} <span aria-hidden="true">·</span> {site.location}
            </p>
            <h1
              id="hero-heading"
              className="display mt-6 text-[clamp(3.4rem,9.5vw,8.5rem)] leading-[0.86] text-ink"
            >
              {site.displayName}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-mute">
              {site.tagline}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#work" className="btn-primary">
                View selected work
              </Link>
              <Link href="/#contact" className="btn-outline">
                Start a project
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-wash">
              <Image
                src={site.profile.src}
                alt={site.profile.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-top"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-y border-line py-6 sm:flex-row sm:items-baseline sm:gap-8">
          <p className="eyebrow shrink-0 text-mute">Made for</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ink">
            {site.clients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
