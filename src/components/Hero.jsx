"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { blurDataURL } from "@/lib/image";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="px-6 py-16 sm:px-10 md:py-24 lg:px-16"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-[1180px] items-end gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 lg:pb-8">
          <motion.h1
            id="hero-heading"
            className="font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
          >
            Hi, I’m {site.shortName}.
          </motion.h1>

          <motion.p
            className="mt-8 text-xl text-ink md:text-2xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
          >
            {site.role}
          </motion.p>

          <motion.p
            className="mt-8 max-w-xl text-lg leading-8 text-mute"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
          >
            {site.tagline}
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap items-center gap-8"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease }}
          >
            <Link href="/#work" className="btn-primary">
              View my work
            </Link>
            <Link href="/#contact" className="nav-link text-[15px] text-ink">
              Contact me
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-4 lg:col-start-9"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-wash">
            <Image
              src={site.profile.src}
              alt={site.profile.alt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 360px"
              className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
