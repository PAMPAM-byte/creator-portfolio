"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { filters, projects } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1];

function countFor(id) {
  if (id === "all") return projects.length;
  return projects.filter((project) => project.categories.includes(id)).length;
}

export default function WorkGallery() {
  const [active, setActive] = useState("all");
  const [watching, setWatching] = useState(null);
  const reduce = useReducedMotion();

  const visible = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((project) => project.categories.includes(active));
  }, [active]);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by type"
        className="mb-12 flex flex-wrap gap-2"
      >
        {filters.map((filter) => {
          const selected = filter.id === active;
          const count = countFor(filter.id);
          if (count === 0) return null;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={selected}
              className={`eyebrow flex items-center gap-2 border px-3.5 py-2.5 transition-colors duration-300 ${
                selected
                  ? "border-ink bg-ink text-snow"
                  : "border-line text-ink hover:border-ink"
              }`}
              onClick={() => setActive(filter.id)}
            >
              {filter.label}
              <span className={selected ? "text-snow/60" : "text-mute"}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {active === "all"
          ? ""
          : ` in ${filters.find((item) => item.id === active)?.label}`}
        .
      </p>

      <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-12 md:gap-y-20">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              className={
                project.frame === "wide" ? "md:col-span-7" : "md:col-span-5"
              }
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: 0.55, delay: index * 0.04, ease }}
            >
              <ProjectCard project={project} onWatch={setWatching} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {watching ? (
          <ProjectModal project={watching} onClose={() => setWatching(null)} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
