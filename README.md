# Favour Oluwapamilerin Akintade

Portfolio for Favour Oluwapamilerin Akintade, a video editor and AI content creator based in Ekiti State, Nigeria. The site is a light editorial gallery of selected work, case studies, services, and a contact form.

The creative name PAMPAM appears only in the About section.

## Requirements

- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Pages

The homepage (`/`) is Hero, About, Selected work, Services, Skills, Process, and Contact. The header, footer, and floating WhatsApp button sit in the root layout.

| Route | Contents |
| --- | --- |
| `/` | Homepage |
| `/work` | Full project gallery |
| `/work/[slug]` | Case study for one project |

**View my work** in the hero scrolls to Selected work. The header links jump to the matching section on the homepage.

## Selected work

| Project | Route |
| --- | --- |
| Chef — Nigerian Jollof Rice AI Cooking Video | `/work/chef-jollof-ai-series` |
| Elora Medical Centre — AI UGC Healthcare Video | `/work/elora-medical-centre` |
| Junqo — Product Motion Graphics | `/work/junqo-motion-graphics` |
| Gala Sausage Roll — Social Media Brand Content | `/work/gala-sausage-roll` |
| Paystack — Short-Form Comedy Advertisement | `/work/paystack-comedy-ad` |
| Nannoy — Cinematic Product Update Teaser | `/work/nannoy-announcement` |
| Nannoy — Product Explainer Video | `/work/nannoy-product-explainer` |

The gallery filters are All, Short-Form, AI Videos, Promotional, Motion Graphics, and Social Media. A project shows under each id listed in its `categories` array.

Cards and case-study covers play the project file muted and looping while the frame is on screen. A still poster stays up until playback starts. Visitors who prefer reduced motion, and projects with no video, stay on the still. **Watch project** opens the player with sound. YouTube and Vimeo links work in that player as well as local `.mp4`, `.webm`, and `.ogg` files.

## Edit the site

Copy lives in data files and a few components. Paths below are from the project root.

| What to change | Where |
| --- | --- |
| Name, role, location, tagline, portrait, navigation | `src/data/site.js` |
| About copy, including PAMPAM | `src/components/About.jsx` |
| Email, phone, location, and social icons in Let’s talk | `src/components/Contact.jsx` |
| Footer social links, floating WhatsApp button, form fallback address | `src/data/site.js` |
| Projects and case studies | `src/data/projects.js` |
| Service cards | `src/data/services.js` |
| Tools and craft lists | `src/data/skills.js` |
| Process steps | `src/data/process.js` |

The portrait is `public/images/projects/my portrait.png`, referenced from `site.profile` in `src/data/site.js`.

### Add a project

Add an object to the `projects` array in `src/data/projects.js`. The case-study URL is `/work/` plus `slug`.

| Field | Purpose |
| --- | --- |
| `slug` | URL segment. Use lowercase words and hyphens. |
| `title`, `category`, `summary` | Card and case-study copy. `category` is the line under the title. |
| `categories` | Filter ids: `short-form`, `ai`, `promotional`, `motion`, `social`. |
| `frame` | `square` (1:1), `vertical` (9:16), or `wide`. |
| `thumbnail`, `thumbnailAlt` | Poster image and its description. |
| `tools` | Short tool list on the card. An empty array hides that line. |
| `detail` | Optional paragraph under the summary on the case study. |
| `facts` | Label and value rows on the case study. A fact may include `href`. |
| `videoUrl` | YouTube, Vimeo, or a local file path. |
| `isPlaceholder` | `false` for finished work. |

When `facts` is omitted, the case study uses `overview`, `objective`, `role`, `approach`, `outcome`, and the tools list instead.

Put posters in `public/images/projects/` and video files in `public/`. Encode spaces in `videoUrl` (`/images/gala%20content.mp4`, not a raw space).

## Contact form

The form posts to `/api/contact`. Copy `.env.example` to `.env.local`. That file is gitignored. Choose one provider and leave the other blank. Never prefix secret keys with `NEXT_PUBLIC_`.

**Resend.** Create an API key and a verified from-address, then set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_TO_EMAIL`.

**Formspree.** Create a form and set `FORMSPREE_FORM_ID` to the id in `https://formspree.io/f/<id>`.

With neither provider set, the form still checks the fields and opens the visitor’s email app, addressed to `email` in `src/data/site.js`.

The public address shown under Let’s talk is the one in `src/components/Contact.jsx`. Update both places when the address changes.

Set `NEXT_PUBLIC_SITE_URL` to the live domain. The sitemap, `robots.txt`, canonical URL, and Open Graph tags use it.

## Deploy

The production build is `npm run build`. On [Vercel](https://vercel.com/new), import the repository, add the variables from `.env.example`, and deploy. No extra Next.js config is required.

## Project layout

```
src/app/                routes, layout, sitemap, robots, contact API
src/app/work/[slug]/    case-study page
src/components/         page sections and the project gallery
src/data/               editable site content
src/lib/                video embeds, form validation, WhatsApp link
public/images/          video files and the projects/ poster folder
```

## Accessibility and SEO

The site includes a skip link, labelled landmarks and form fields, a keyboard-operable mobile menu, and a project dialog that closes with Escape. Motion follows `prefers-reduced-motion`. Metadata, an Open Graph image, a favicon, `sitemap.xml`, and `robots.txt` are generated by the App Router.
