"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { blurDataURL } from "@/lib/image";

export default function CoverMedia({
  src,
  poster,
  alt,
  sizes,
  className = "",
}) {
  const rootRef = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || !src) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPlay(entry.isIntersecting && !motion.matches);
      },
      { threshold: 0.25 },
    );
    observer.observe(node);

    const onMotion = () => {
      if (motion.matches) setPlay(false);
    };
    motion.addEventListener("change", onMotion);

    return () => {
      observer.disconnect();
      motion.removeEventListener("change", onMotion);
    };
  }, [src]);

  return (
    <span ref={rootRef} className={`pointer-events-none absolute inset-0 ${className}`}>
      <Image
        src={poster}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
      {play && src ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </span>
  );
}
