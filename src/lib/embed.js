/** Parse a YouTube, Vimeo, or local/file video URL into an embeddable source. */

export function getEmbed(url) {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  const youtube = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([A-Za-z0-9_-]{11})/,
  );
  if (youtube) {
    return {
      type: "youtube",
      src: `https://www.youtube-nocookie.com/embed/${youtube[1]}?rel=0&modestbranding=1`,
    };
  }

  const vimeo = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) {
    return {
      type: "vimeo",
      src: `https://player.vimeo.com/video/${vimeo[1]}`,
    };
  }

  if (/\.(mp4|webm|ogg)(\?|$)/i.test(trimmed) || trimmed.startsWith("/videos/")) {
    return { type: "file", src: trimmed };
  }

  return null;
}

export function fileVideoSrc(url) {
  const embed = getEmbed(url);
  return embed?.type === "file" ? embed.src : null;
}
