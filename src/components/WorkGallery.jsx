"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { filters, projects } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1];

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
        role="tablist"
        aria-label="Filter projects by type"
        className="mb-14 flex flex-wrap gap-x-8 gap-y-3"
      >
        {filters.map((filter) => {
          const selected = filter.id === active;
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={selected}
              data-active={selected}
              className={`nav-link text-[15px] transition-colors duration-300 ${
                selected ? "text-ink" : "text-mute hover:text-ink"
              }`}
              onClick={() => setActive(filter.id)}
            >
              {filter.label}
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

      {visible.length === 0 ? (
        <p className="py-20 text-mute">
          No projects in this category yet. Add one in src/data/projects.js.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                className={
                  project.frame === "vertical" || project.frame === "square"
                    ? "md:col-span-5"
                    : "md:col-span-7"
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
      )}

      <AnimatePresence>
        {watching ? (
          <ProjectModal project={watching} onClose={() => setWatching(null)} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
