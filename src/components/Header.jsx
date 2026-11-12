"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { nav, site } from "@/data/site";

const links = nav.filter((item) => item.href !== "/#contact");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-snow/90 backdrop-blur-md"
          : "border-transparent bg-snow"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1368px] items-center justify-between gap-6 px-5 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="display text-[1.35rem] leading-none text-ink"
          onClick={() => setOpen(false)}
        >
          {site.displayName}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-[15px] text-mute transition-colors duration-300 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary btn-sm">
            Let’s talk
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-5 bg-ink transition duration-300 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="h-[calc(100dvh-4rem)] border-t border-line bg-snow px-5 pt-6 pb-10 md:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    className="display block py-4 text-4xl text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
