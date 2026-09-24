/**
 * SITE SETTINGS — edit this file first.
 * Replace placeholders (email, phone, social URLs, showreel).
 * Do not put API keys here. Keys belong in `.env.local` (see `.env.example`).
 */

export const site = {
  name: "Favour Oluwapamilerin Akintade",
  shortName: "Favour",
  brand: "PAMPAM",
  role: "Video Editor & AI Content Creator",
  location: "Ekiti State, Nigeria",
  tagline:
    "I create engaging short-form videos, AI-powered visuals, promotional content, and story-driven edits that help brands communicate and connect with their audience.",
  description:
    "Portfolio of Favour Oluwapamilerin Akintade — a video editor and AI content creator in Ekiti State, Nigeria, working in short-form, promotional, motion-graphics, and AI-generated video.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "en_NG",

  /**
   * Hero portrait. File: public/images/projects/my portrait.png
   */
  profile: {
    src: "/images/projects/my portrait.png",
    alt: "Favour Oluwapamilerin Akintade — Video Editor and AI Content Creator.",
  },

  /**
   * Optional hero showreel. Paste a YouTube, Vimeo, or /videos/file.mp4 URL.
   * Leave empty until you have a reel — the portrait still will be used.
   */
  showreelUrl: "",

  /**
   * CONTACT — replace every placeholder before publishing.
   * WhatsApp uses the digits-only number (country code, no + or spaces).
   */
  email: "your-email@example.com",
  phoneDisplay: "+234 800 000 0000",
  phoneHref: "tel:+2348000000000",
  whatsappNumber: "2348000000000",
  whatsappMessage:
    "Hi Favour, I would like to talk about a video project.",

  social: {
    linkedin: "https://www.linkedin.com/in/your-handle",
    twitter: "https://x.com/your-handle",
    instagram: "https://www.instagram.com/your-handle",
    tiktok: "https://www.tiktok.com/@your-handle",
  },

  form: {
    projectTypes: [
      "Short-form video",
      "AI video",
      "Promotional / brand",
      "Motion graphics",
      "Social media content",
      "Content repurposing",
      "Something else",
    ],
  },
};

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];
