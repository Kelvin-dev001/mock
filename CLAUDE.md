[Read CLAUDE.md for full project context, then:

1. Use this palette derived from the company logo (red #C8102E, charcoal #1A1A1A,
   off-white #F5F5F5, muted gray #3A3A3A as a secondary accent). Define these as
   named theme tokens in tailwind.config.js (primary, primary-dark, dark, surface,
   surface-light, accent) plus any tints/shades needed for glassmorphism overlays.
   Show me how you've mapped these before applying site-wide.

2. Once I approve, apply the new palette across Navbar, Hero, Services,
   WhyChooseUs, TrustBadges, Branches, Contact, Footer, and WhatsAppButton,
   replacing any hardcoded colors with the new tokens.

3. Redesign Hero.jsx and Services.jsx with:
   - Image placeholders per the Image Plan in CLAUDE.md, using relevant stock
     placeholder URLs, each with a TODO comment marking where to swap real photos
   - Glassmorphism panels/cards (backdrop-blur, translucent bg, subtle border)
   - Subtle Framer Motion entrance animations (fade/slide on scroll) and hover effects

4. Apply matching glassmorphism + animation polish to the remaining sections so
   the whole site feels cohesive.

5. Run the dev server and confirm it builds with no errors.

6. Update CLAUDE.md's Status Log with what changed.

7. Commit to a new branch "redesign/v2" and open a pull request against main —
   do not push directly to main.

Ask me before adding new sections or content; proceed without asking for
styling, color, image placeholder, and animation work.]

---

## Project Context

**Mock Electrical and Electronics Ltd** — corporate marketing site for a Kenyan
automotive electronics & telematics company. Tagline: _"Kenya's Trusted Leader in
Vehicle Safety & Tracking Solutions."_

**Tech stack**
- React 18 + Vite 5
- Tailwind CSS 3 (utility-first, theme tokens in `tailwind.config.js`)
- Framer Motion 11 (entrance + hover animations)
- React Icons (Font Awesome set)

**Section components** (`src/components/`, assembled in `src/App.jsx`):
`Navbar` → `Hero` → `Services` → `WhyChooseUs` → `TrustBadges` → `Branches`
→ `Contact` → `Footer`, plus a floating `WhatsAppButton`.

**Company details used across the site**
- Branches: Nairobi (Head Office), Sagana, Embu
- Phones: 0706888600 (Nairobi), 0703222356 (Sagana/Embu)
- WhatsApp: 0716439680 (`wa.me/254716439680`)
- Services: NTSA Speed Limiters, GPS Trackers, Basic Trackers, Bluetooth
  Trackers, Video Telematics, Car Alarms

**Brand palette** (derived from the company logo)
| Token            | Hex / value                  | Role                                   |
| ---------------- | ---------------------------- | -------------------------------------- |
| `primary`        | `#C8102E`                    | Logo red — primary brand, CTAs, links  |
| `primary-dark`   | `#A00D24`                    | Darker red — hover / active states     |
| `primary-light`  | `#E04B60`                    | Lighter red — soft tints, badges       |
| `dark`           | `#1A1A1A`                    | Charcoal — dark sections, headings     |
| `surface`        | `#F5F5F5`                    | Off-white — page / section backgrounds |
| `surface-light`  | `#FFFFFF`                    | White — elevated card surfaces         |
| `accent`         | `#3A3A3A`                    | Muted gray — secondary accent / text   |
| `glass-light`    | `rgba(255,255,255,0.65)`     | Light frosted glass panel fill         |
| `glass-surface`  | `rgba(245,245,245,0.55)`     | Off-white frosted glass panel fill     |
| `glass-dark`     | `rgba(26,26,26,0.55)`        | Dark frosted glass panel fill          |
| `glass-border`   | `rgba(255,255,255,0.35)`     | Subtle light glass border              |
| `glass-border-dark` | `rgba(58,58,58,0.30)`     | Subtle dark glass border               |

## Image Plan

All images are placeholders for now. Each uses a relevant stock placeholder URL
and is marked with a `TODO:` comment indicating the real photo to drop in. Store
final assets in `public/images/`.

| Location              | Placeholder purpose                          | Suggested real photo                                  |
| --------------------- | -------------------------------------------- | ----------------------------------------------------- |
| Hero — main visual    | Fleet of protected vehicles / Kenyan road    | Hero shot of a branded fleet or installed dashboard   |
| Hero — floating cards | Reinforce "3 locations" + "NTSA approved"    | (icon/text overlays — no photo needed)                |
| Services — speed limiter | Installed NTSA speed-limiter device       | Close-up of a fitted speed limiter unit               |
| Services — GPS tracker   | Live tracking dashboard / map on a device  | GPS tracker hardware or live tracking UI              |
| Services — basic tracker | Compact tracker unit                       | Basic tracker product photo                           |
| Services — bluetooth     | Smart key / phone-based ignition           | Bluetooth ignition module / app screen                |
| Services — video telematics | In-cab dash camera                      | Dash-cam mounted in a vehicle                         |
| Services — car alarms    | Car security / alarm fob                    | Alarm system / siren / key fob                        |

Placeholder URL convention: `https://placehold.co/<w>x<h>/<bg>/<fg>?text=...`
using the brand red `C8102E` / charcoal `1A1A1A` so placeholders stay on-brand.

## Status Log

_(Newest first — updated as work lands.)_

- **2026-06-15 (redesign/v2):** Rebrand to the logo-derived red/charcoal palette
  with glassmorphism + Framer Motion polish — landed.
  - **`tailwind.config.js`** — added named brand tokens (`primary` `#C8102E`,
    `primary-dark` `#A00D24`, `primary-light` `#E04B60`, `dark` `#1A1A1A`,
    `surface` `#F5F5F5`, `surface-light` `#FFFFFF`, `accent` `#3A3A3A`) plus
    glassmorphism overlay tints (`glass-light`, `glass-surface`, `glass-dark`,
    `glass-border`, `glass-border-dark`). Removed the legacy blue/teal/orange
    palette.
  - **`src/index.css`** — repointed `body`, `.glass-card`, and `.gradient-text`
    to the new palette; added `.glass-surface` and `.glass-dark` frosted-panel
    utilities.
  - **All sections** (`Navbar`, `Hero`, `Services`, `WhyChooseUs`, `TrustBadges`,
    `Branches`, `Contact`, `Footer`, `WhatsAppButton`, `App`) — swapped every
    hardcoded color to the new tokens. Old per-card teal/orange/indigo/purple
    accents consolidated onto red + charcoal + gray; WhatsApp green retained as
    intentional channel branding.
  - **`Hero.jsx`** — redesigned: real `<img>` placeholder (on-brand placehold.co
    URL) inside a glass frame with a `TODO` to swap in a fleet photo, glassmorphism
    floating stat/compliance cards, and fade/slide entrance + hover animations.
  - **`Services.jsx`** — redesigned: per-service image placeholders (placehold.co
    URLs, each with a `TODO` for the real product photo per the Image Plan),
    glassmorphism cards with overlapping icon badges, image zoom-on-hover, and
    staggered scroll-in animation.
  - **Verification** — `npm run build` passes; `npm run dev` serves on
    `http://localhost:5173` (HTTP 200) with no errors.
