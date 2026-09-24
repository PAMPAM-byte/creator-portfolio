"use client";

import Image from "next/image";
import { useState } from "react";
import { getEmbed } from "@/lib/embed";
import { blurDataURL } from "@/lib/image";

export default function VideoPlayer({
  url,
  title,
  poster,
  posterAlt,
  className = "",
  autoPlayOnClick = true,
}) {
  const embed = getEmbed(url);
  const [playing, setPlaying] = useState(false);

  if (!embed) {
    return (
      <div className={`relative overflow-hidden bg-wash ${className}`}>
        {poster ? (
          <Image
            src={poster}
            alt={posterAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        ) : null}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/50 to-transparent p-8">
          <p className="max-w-md text-sm text-snow">
            Video not added yet. Paste a YouTube, Vimeo, or local .mp4 URL in
            src/data/projects.js.
          </p>
        </div>
      </div>
    );
  }

  if (embed.type === "file") {
    return (
      <div className={`relative overflow-hidden bg-ink ${className}`}>
        <video
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="none"
          poster={poster}
          aria-label={title}
        >
          <source src={embed.src} />
          Your browser cannot play this video.
        </video>
      </div>
    );
  }

  if (!playing) {
    return (
      <div className={`relative overflow-hidden bg-wash ${className}`}>
        {poster ? (
          <Image
            src={poster}
            alt={posterAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        ) : null}
        <button
          type="button"
          className="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors duration-300 hover:bg-ink/20"
          onClick={() => setPlaying(true)}
        >
          <span className="sr-only">Play {title}</span>
          <span
            aria-hidden="true"
            className="flex size-16 items-center justify-center bg-snow text-ink transition-transform duration-300 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="ml-0.5 size-6 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      </div>
    );
  }

  const src = autoPlayOnClick
    ? `${embed.src}${embed.src.includes("?") ? "&" : "?"}autoplay=1`
    : embed.src;

  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
