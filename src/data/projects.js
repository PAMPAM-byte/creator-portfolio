/**
 * FEATURED WORK — each object is one project card + case-study page.
 *
 * How to edit:
 * 1. Replace `thumbnail` with a file in /public/images/projects/
 * 2. Set `videoUrl` to a YouTube, Vimeo, or local /videos/your-file.mp4 link
 * 3. Rewrite overview, objective, role, approach, outcome in your own words
 * 4. Set `isPlaceholder: false` when the entry is real
 * 5. Delete any sample project you do not want to show
 *
 * Do not invent client names, view counts, or campaign results.
 */

export const filters = [
  { id: "all", label: "All" },
  { id: "short-form", label: "Short-Form" },
  { id: "ai", label: "AI Videos" },
  { id: "promotional", label: "Promotional" },
  { id: "motion", label: "Motion Graphics" },
  { id: "social", label: "Social Media" },
];

export const projects = [
  {
    slug: "chef-jollof-ai-series",
    title: "Chef — Nigerian Jollof Rice AI Cooking Video",
    category: "AI Video · Food Content · Visual Storytelling",
    categories: ["ai", "short-form", "social"],
    frame: "square",
    thumbnail: "/images/projects/chef-jollof.jpg",
    thumbnailAlt:
      "A chef in a white coat and yellow apron, smiling over a pot of rice with a wooden spoon",
    tools: ["Google Flow", "CapCut"],
    summary:
      "An AI-generated cooking video featuring my original recurring chef character, preparing Nigerian jollof rice. I developed the concept, planned the scenes, maintained the character's visual consistency, generated the clips, and edited them into an engaging food-content experience rooted in Nigerian culture.",
    facts: [
      {
        label: "My Role",
        value: "AI Video Creator, Video Editor and Creative Director",
      },
      { label: "Project Type", value: "Original AI Food-Content Series" },
      { label: "Tools", value: "Google Flow, CapCut" },
    ],
    videoUrl: "/images/chef-jollof.mp4",
    isPlaceholder: false,
  },
  {
    slug: "elora-medical-centre",
    title: "Elora Medical Centre — AI UGC Healthcare Video",
    category: "AI Video · UGC Content · Healthcare Promotion",
    categories: ["ai", "social", "promotional"],
    frame: "vertical",
    thumbnail: "/images/projects/elora-hospital.jpg",
    thumbnailAlt:
      "A clinician in teal Elora Medical Centre scrubs holding an automatic blood-pressure monitor, with the cuff in her lap",
    tools: ["Google Flow", "CapCut"],
    summary:
      "An AI-generated UGC-style concept video featuring a virtual healthcare creator demonstrating an automatic blood-pressure monitor. I developed the concept, created the consistent AI character, structured the scenes, and combined the generated clips into a natural social-media video designed to make health information engaging and easy to understand.",
    facts: [
      {
        label: "My Role",
        value: "AI Video Creator, Video Editor and Creative Director",
      },
      { label: "Project Type", value: "Independent Healthcare UGC Concept" },
      { label: "Tools", value: "Google Flow, CapCut" },
    ],
    videoUrl: "/images/Elora-Hospital%20AI%20video.mp4",
    isPlaceholder: false,
  },
  {
    slug: "junqo-motion-graphics",
    title: "Junqo — Product Motion Graphics",
    category: "Motion Graphics · Product Promotion",
    categories: ["motion", "promotional"],
    frame: "wide",
    thumbnail: "/images/projects/junqo-motiongraphics.jpg",
    thumbnailAlt:
      "Black title card reading First prototype reveal, September 20, 2:00 PM WAT, junqo.cc",
    tools: ["CapCut", "Canva"],
    summary:
      "A motion-graphics promotional video created for Junqo, a technology product designed to keep a physical SIM in one place while making calls, SMS, USSD, and cellular data available across supported devices.",
    detail:
      "I used motion, typography, sound, and clean visual transitions to introduce Junqo's concept in a simple, engaging way and build anticipation for its upcoming prototype.",
    facts: [
      {
        label: "My Role",
        value: "Motion Graphics Designer and Video Editor",
      },
      { label: "Tools", value: "CapCut, Canva" },
      { label: "Project Type", value: "Promotional Product Video" },
      { label: "Website", value: "junqo.cc", href: "https://junqo.cc" },
    ],
    videoUrl: "/images/junqo-motiongraphics.mp4",
    isPlaceholder: false,
  },
  {
    slug: "gala-sausage-roll",
    title: "Gala Sausage Roll — Social Media Brand Content",
    category: "Social Media · Product Content · Brand Promotion",
    categories: ["social", "promotional", "short-form"],
    frame: "square",
    thumbnail: "/images/projects/gala-content.jpg",
    thumbnailAlt:
      "A person holding a red Gala sausage-roll pack toward the camera",
    tools: ["CapCut"],
    summary:
      "An independently created short-form video featuring Gala Sausage Roll. I used relatable storytelling, product-focused visuals, and engaging editing to present the product naturally while creating content suited for social-media audiences.",
    facts: [
      {
        label: "My Role",
        value: "Content Creator, Video Editor and On-Camera Talent",
      },
      { label: "Project Type", value: "Independent Brand-Content Concept" },
      { label: "Format", value: "Short-Form Social Media Video" },
      { label: "Tools", value: "CapCut" },
    ],
    videoUrl: "/images/gala%20content.mp4",
    isPlaceholder: false,
  },
  {
    slug: "paystack-comedy-ad",
    title: "Paystack — Short-Form Comedy Advertisement",
    category: "Comedy Advertising · Social Media · Brand Content",
    categories: ["social", "short-form", "promotional"],
    frame: "square",
    thumbnail: "/images/projects/paystack-ads.jpg",
    thumbnailAlt:
      "A person in glasses and a patterned top speaking to camera, with a red bottle beside them",
    tools: ["CapCut"],
    summary:
      "An independently created short-form comedy video featuring Paystack. I used a relatable character, humour, storytelling, and engaging editing to introduce the brand naturally within an entertaining social-media scenario.",
    facts: [
      {
        label: "My Role",
        value: "Content Creator, Video Editor, Scriptwriter and On-Camera Talent",
      },
      {
        label: "Project Type",
        value: "Independent Brand-Advertising Concept",
      },
      { label: "Format", value: "Short-Form Comedy Video" },
      { label: "Tools", value: "CapCut" },
      { label: "Website", value: "paystack.com", href: "https://paystack.com" },
    ],
    videoUrl: "/images/projects/paystack%20ads.mp4",
    isPlaceholder: false,
  },
  {
    slug: "nannoy-announcement",
    title: "Nannoy — Cinematic Product Update Teaser",
    category: "Promotional Video · Cinematic Editing",
    categories: ["promotional"],
    frame: "wide",
    thumbnail: "/images/projects/cinematic-announcement-nannoy.jpg",
    thumbnailAlt:
      "A dark corridor with the title Nannoy Happened in white type",
    tools: [],
    summary:
      "A cinematic promotional video created to build anticipation for an upcoming Nannoy product update. I combined dramatic pacing, typography, music, sound design, and visual storytelling to create suspense while introducing the announcement without revealing too much.",
    facts: [
      { label: "My Role", value: "Video Editor and Content Creator" },
      { label: "Project Type", value: "Product-Update Promotion" },
      { label: "Website", value: "nannoy.com", href: "https://nannoy.com" },
    ],
    videoUrl: "/images/cinematic%20announcement-nannoy.mp4",
    isPlaceholder: false,
  },
  {
    slug: "nannoy-product-explainer",
    title: "Nannoy — Product Explainer Video",
    category: "Product Advertisement · Brand Promotion · Social Media",
    categories: ["promotional", "social"],
    frame: "square",
    thumbnail: "/images/projects/nannoy-ads.jpg",
    thumbnailAlt:
      "A person beside a red Nannoy bottle, with the Nannoy logo in the corner",
    tools: ["CapCut"],
    summary:
      "A product-explainer video introducing Nannoy and how its AI-powered learning platform helps people learn technology through personalized learning paths, practical projects, and AI-guided support. I presented the product in a clear and engaging way to help viewers understand its purpose and encourage them to explore the platform.",
    facts: [
      {
        label: "My Role",
        value: "Content Creator, Video Editor and Brand Ambassador",
      },
      {
        label: "Project Type",
        value: "Product Explainer and Promotional Video",
      },
      { label: "Website", value: "nannoy.com", href: "https://nannoy.com" },
      { label: "Tools", value: "CapCut" },
    ],
    videoUrl: "/images/projects/nannoy%20ads.mp4",
    isPlaceholder: false,
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
