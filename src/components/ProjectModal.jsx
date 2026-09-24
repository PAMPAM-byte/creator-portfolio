"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { motion } from "framer-motion";
import PlaceholderBadge from "@/components/PlaceholderBadge";
import VideoPlayer from "@/components/VideoPlayer";

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
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-0 sm:items-center sm:p-8"
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
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto bg-snow"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`relative ${
            project.frame === "vertical"
              ? "aspect-[9/16] max-h-[52vh] w-full sm:mx-auto sm:max-w-sm"
              : project.frame === "square"
                ? "aspect-square w-full sm:mx-auto sm:max-w-md"
                : "aspect-video"
          }`}
        >
          <VideoPlayer
            url={project.videoUrl}
            title={project.title}
            poster={project.thumbnail}
            posterAlt={project.thumbnailAlt}
            className="absolute inset-0"
          />
        </div>
        <div className="space-y-5 px-8 py-10 sm:px-12">
          <div className="flex flex-wrap items-baseline gap-4">
            <p className="text-sm text-mute">{project.category}</p>
            {project.isPlaceholder ? <PlaceholderBadge /> : null}
          </div>
          <h2 id={titleId} className="text-3xl tracking-tight text-ink">
            {project.title}
          </h2>
          <p className="max-w-xl text-[15px] leading-7 text-mute">
            {project.summary}
          </p>
          {project.tools.length > 0 ? (
            <p className="text-sm text-mute">{project.tools.join("  ·  ")}</p>
          ) : null}
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <Link
              href={`/work/${project.slug}`}
              className="btn-primary"
              onClick={onClose}
            >
              Read case study
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="nav-link text-sm text-ink"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
