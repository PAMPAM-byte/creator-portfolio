export default function FilmFrame({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-white/10 bg-gate ${className}`}
    >
      <Sprockets side="left" />
      <Sprockets side="right" />
      <div className="px-5 sm:px-6">{children}</div>
    </div>
  );
}

function Sprockets({ side }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute top-0 flex h-full w-5 flex-col justify-between py-4 ${
        side === "left" ? "left-0" : "right-0"
      }`}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          key={index}
          className="mx-auto block h-2.5 w-2 rounded-[1px] bg-void shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)]"
        />
      ))}
    </div>
  );
}
