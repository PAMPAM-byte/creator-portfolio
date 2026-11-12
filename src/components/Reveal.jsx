"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

/**
 * Fades content up as it scrolls into view.
 * Always renders the same element on server and client so hydration never
 * leaves server styles (opacity: 0) stuck in place. With reduced motion the
 * animation runs instantly.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.8, delay, ease }}
    >
      {children}
    </Tag>
  );
}
