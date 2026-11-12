import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-[70vh] w-full max-w-[1368px] flex-col justify-center px-5 py-24 sm:px-10 lg:px-16"
    >
      <p className="eyebrow border-t border-ink pt-4 text-ink">
        Error 404 · Missing media
      </p>
      <h1 className="display mt-8 text-[clamp(3rem,9vw,7rem)] leading-[0.88] text-ink">
        This page isn’t in the edit
      </h1>
      <p className="mt-6 max-w-md text-lg leading-8 text-mute">
        The link may be out of date. Go back to the homepage or browse the
        work.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/work" className="btn-outline">
          Browse all work
        </Link>
      </div>
    </main>
  );
}
