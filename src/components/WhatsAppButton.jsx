import { site } from "@/data/site";
import { whatsappHref } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref(site.whatsappNumber, site.whatsappMessage)}
      className="fixed bottom-6 right-6 z-30 flex size-12 items-center justify-center bg-ink text-snow ring-2 ring-snow transition-transform duration-300 hover:-translate-y-0.5"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
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
