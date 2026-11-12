"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { motion } from "framer-motion";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import VideoPlayer from "@/components/VideoPlayer";
import { frameRatio } from "@/lib/embed";

export default function ProjectModal({ project, onClose }) {
  const titleId = useId();
  const closeRef = useRef(null);
  const lastActive = useRef(null);

  useEffect(() => {
    lastActive.current = document.activeElement;
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const root = document.getElementById("project-modal");
      if (!root) return;
      const focusable = root.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      if (lastActive.current instanceof HTMLElement) lastActive.current.focus();
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
    >
      <motion.div
        id="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[94vh] w-full max-w-4xl overflow-y-auto bg-snow"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="on-dark flex items-center justify-between border-b border-panel-line bg-panel px-5 py-3 text-snow">
          <p className="eyebrow text-panel-mute">
            Now playing · {frameRatio[project.frame]}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="eyebrow flex h-8 items-center px-2 text-snow"
          >
            Close ✕
          </button>
        </div>
        <div className="bg-panel">
          <div
            className={`relative mx-auto ${
              project.frame === "vertical"
                ? "aspect-[9/16] h-[62vh] max-w-full"
                : project.frame === "square"
                  ? "aspect-square w-full max-w-[62vh]"
                  : "aspect-video w-full"
            }`}
          >
            <VideoPlayer
              url={project.videoUrl}
              title={project.title}
              poster={project.thumbnail}
              posterAlt={project.thumbnailAlt}
              className="absolute inset-0"
              autoPlay
            />
          </div>
        </div>
        <div className="grid gap-6 px-6 py-8 sm:px-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-4">
            <div className="flex flex-wrap items-baseline gap-4">
              <p className="eyebrow text-mute">{project.category}</p>
              {project.isPlaceholder ? <PlaceholderBadge /> : null}
            </div>
            <h2
              id={titleId}
              className="text-2xl leading-tight font-semibold tracking-tight text-ink md:text-3xl"
            >
              {project.title}
            </h2>
            {project.tools.length > 0 ? (
              <p className="eyebrow text-mute">{project.tools.join(" · ")}</p>
            ) : null}
          </div>
          <Link
            href={`/work/${project.slug}`}
            className="btn-primary"
            onClick={onClose}
          >
            Read case study
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
