export default function SectionHeader({
  kicker,
  title,
  children,
  id,
  className = "max-w-2xl",
  ledeClassName = "max-w-xl",
  marginClassName = "mb-12 md:mb-14",
}) {
  return (
    <header className={`${marginClassName} ${className}`}>
      {kicker ? (
        <p className="mb-5 text-sm tracking-[0.16em] text-mute uppercase">
          {kicker}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-4xl font-medium leading-[1.12] tracking-tight text-ink md:text-5xl"
      >
        {title}
      </h2>
      {children ? (
        <p className={`mt-6 text-lg leading-8 text-mute ${ledeClassName}`}>
          {children}
        </p>
      ) : null}
    </header>
  );
}
