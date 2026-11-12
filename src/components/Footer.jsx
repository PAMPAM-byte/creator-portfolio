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
    <footer className="mt-auto overflow-hidden bg-panel text-snow">
      <div className="mx-auto max-w-[1368px] px-5 pt-16 pb-10 sm:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-panel-mute">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="nav-link mt-5 text-xl break-all text-snow"
            >
              {site.email}
            </a>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow text-panel-mute">Navigate</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow text-panel-mute">Social</p>
            <ul className="mt-5 space-y-3">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="nav-link"
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

        <div className="mt-16 flex flex-col gap-2 border-t border-panel-line pt-6 sm:flex-row sm:justify-between">
          <p className="eyebrow text-panel-mute">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="eyebrow text-panel-mute">
            {site.role} · {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
