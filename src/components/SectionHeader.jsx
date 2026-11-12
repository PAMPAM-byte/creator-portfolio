/**
 * Section opener: a black rule with a label and optional meta line
 * (like a slate), then a title-card heading and optional lede.
 */
export default function SectionHeader({
  kicker,
  meta,
  title,
  children,
  id,
  as: Heading = "h2",
  className = "",
  tone = "light",
}) {
  const dark = tone === "dark";
  return (
    <header className={`mb-12 md:mb-16 ${className}`}>
      <div
        className={`flex items-baseline justify-between gap-6 border-t pt-4 ${
          dark ? "border-snow" : "border-ink"
        }`}
      >
        {kicker ? (
          <p className={`eyebrow ${dark ? "text-snow" : "text-ink"}`}>{kicker}</p>
        ) : null}
        {meta ? (
          <p className={`eyebrow ${dark ? "text-panel-mute" : "text-mute"}`}>
            {meta}
          </p>
        ) : null}
      </div>
      <Heading
        id={id}
        className={`display mt-8 max-w-4xl text-[clamp(2.6rem,6.5vw,5.25rem)] leading-[0.9] ${
          dark ? "text-snow" : "text-ink"
        }`}
      >
        {title}
      </Heading>
      {children ? (
        <p
          className={`mt-6 max-w-xl text-lg leading-8 ${
            dark ? "text-panel-mute" : "text-mute"
          }`}
        >
          {children}
        </p>
      ) : null}
    </header>
  );
}
