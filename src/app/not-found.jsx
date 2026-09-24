import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-[70vh] max-w-[1180px] flex-col justify-center px-6 py-32 sm:px-10 lg:px-16"
    >
      <p className="text-sm tracking-[0.16em] text-mute uppercase">404</p>
      <h1 className="mt-6 font-display text-5xl text-ink md:text-6xl">
        Page not found
      </h1>
      <p className="mt-6 max-w-md text-lg leading-8 text-mute">
        That page isn’t here. Go back home, or browse the work.
      </p>
      <div className="mt-12 flex flex-wrap items-center gap-8">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/#work" className="nav-link text-[15px] text-ink">
          View work
        </Link>
      </div>
    </main>
  );
}
