import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const details = [
  {
    label: "Email",
    value: "favourpamilerin1@gmail.com",
    href: "mailto:favourpamilerin1@gmail.com",
  },
  {
    label: "Phone",
    value: "07050850039",
    href: "tel:+2347050850039",
  },
  { label: "Location", value: "Ekiti State, Nigeria" },
];

const socials = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@pamilhereen",
    Icon: TikTokIcon,
  },
  { name: "X", href: "https://x.com/pamilhereen", Icon: XIcon },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/favour-akintade-394a55342",
    Icon: LinkedInIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pamilhereen",
    Icon: InstagramIcon,
  },
  { name: "WhatsApp", href: "https://wa.me/2347050830039", Icon: WhatsAppIcon },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-28 px-6 py-16 sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          id="contact-heading"
          kicker="Contact"
          title="Let’s talk"
        />

        <div className="grid gap-20 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <ul className="space-y-8">
              {details.map((item) => (
                <li key={item.label}>
                  <p className="text-sm text-mute">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 inline-block text-lg text-ink transition-opacity duration-300 hover:opacity-60"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg text-ink">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>
            <ul className="mt-10 flex items-center gap-3">
              {socials.map(({ name, href, Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} profile`}
                    title={name}
                    className="flex size-11 items-center justify-center text-ink transition-opacity duration-300 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 3c.35 2.15 1.62 3.72 3.8 4.15v2.55a6.7 6.7 0 0 1-3.8-1.2v6.35c0 3.22-2.5 5.75-5.7 5.75S2.8 18.07 2.8 14.85c0-3.1 2.38-5.64 5.45-5.75v2.62a3.15 3.15 0 0 0-2.7 3.12 3.13 3.13 0 0 0 3.15 3.13 3.13 3.13 0 0 0 3.15-3.2V3h2.35Z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.7 10.4 21.4 3h-1.6l-5.8 6.4L9.2 3H3.4l7 9.7L3.4 21h1.6l6.2-6.8 4.9 6.8h5.8l-7.2-10.6Zm-2.2 2.4-.7-1-5.7-7.7h2.4l4.6 6.2.7 1 6 8.1h-2.4l-4.9-6.6Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.7 3.4A2.1 2.1 0 1 1 2.6 5.5a2.1 2.1 0 0 1 2.1-2.1ZM3 8.6h3.4V21H3V8.6Zm6 0h3.3v1.7h.05c.46-.87 1.58-1.8 3.25-1.8 3.48 0 4.12 2.29 4.12 5.27V21H16.3v-5.5c0-1.31-.02-3-1.83-3s-2.11 1.43-2.11 2.9V21H9V8.6Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.35" cy="6.65" r="0.9" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2c-5.5 0-10 4.47-10 10 0 1.76.46 3.47 1.34 5L2 22l5.16-1.35A10 10 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.18c-1.57 0-3.1-.42-4.44-1.22l-.32-.19-3.06.8.82-2.98-.2-.33A8.16 8.16 0 0 1 3.86 12c0-4.5 3.67-8.16 8.18-8.16 4.5 0 8.16 3.66 8.16 8.16 0 4.5-3.66 8.18-8.16 8.18Zm4.47-6.12c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.43.06-.65.3-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  );
}
