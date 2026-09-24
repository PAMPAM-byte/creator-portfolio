import Link from "next/link";
import { nav, site } from "@/data/site";

const social = [
  { href: site.social.linkedin, label: "LinkedIn" },
  { href: site.social.twitter, label: "X" },
  { href: site.social.instagram, label: "Instagram" },
  { href: site.social.tiktok, label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-black text-snow">
      <div className="mx-auto max-w-[1180px] px-6 pb-16 pt-8 sm:px-10 lg:px-16">
        <div className="grid gap-16 border-t border-white/15 pt-16 md:grid-cols-3">
          <div>
            <p className="tracking-[0.16em]">{site.shortName}</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-snow/60">
              {site.role}. {site.location}.
            </p>
          </div>
          <div>
            <p className="text-sm text-snow/60">Navigate</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-opacity duration-300 hover:opacity-55"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm text-snow/60">Social</p>
            <ul className="mt-5 space-y-3">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-opacity duration-300 hover:opacity-55"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-20 text-sm text-snow/60">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
