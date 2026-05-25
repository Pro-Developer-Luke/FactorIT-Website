# FactorIT Website

Static marketing site for **FactorIT**, a digital technology agency based in Yorkshire (serving Yorkshire, Humberside and Lancashire). Phone `01274 916237`, email `enquiries@factorit.co.uk`. The build is a hand-written HTML/CSS/JS boilerplate intended for **eventual import into WordPress**; see `migration/content-audit.md` for the live-site content reference and per-section WP implementation notes embedded in the HTML.

## How to run

No build step. Open any `.html` in a browser, or serve the directory with any static server (e.g. `python -m http.server 8000`).

## Tech stack

- Plain HTML5, one CSS file (`css/style.css`), one JS file (`js/main.js`).
- No framework, no bundler, no package manager.
- Page-level navigation is duplicated on each HTML file — there is no templating layer until WordPress import.

## File layout

```
.
├── index.html
├── services.html              # What We Do
├── team.html                  # Who We Are
├── cyber-security.html        # IT & Cyber Security
├── blog.html                  # Blog listing
├── blog-post.html             # Single-post template
├── contact.html
├── robots.txt                 # Crawler rules + sitemap pointer
├── sitemap.xml                # XML sitemap
├── CLAUDE.md                  # This file (disallowed from crawlers)
├── css/style.css              # All styles
├── js/main.js                 # Hamburger toggle + year stamp
├── _dev/                      # Dev-only artefacts, robots-disallowed
│   └── home-example.png
├── assets/
│   ├── logos/                 # Brand wordmarks
│   │   ├── factorit-wordmark.svg              # Canonical (transparent, white)
│   │   ├── factorit-wordmark-on-light.svg     # Alt for white surfaces
│   │   ├── factorit-mark.png                  # Just the "it" mark
│   │   └── factorit-company.png               # Screenshot-style PNG fallback
│   └── mascots/
│       ├── group/             # Multi-mascot photography
│       │   ├── team-portrait.png              # Hero image
│       │   └── team-collaboration.png         # CTA-strip image
│       ├── pascal/            # Polar bear
│       │   ├── datacenter.jpg                 # Pascal in suit, server room
│       │   └── portrait.png                   # Legacy clean portrait (currently unused)
│       ├── frozen/            # Arctic fox
│       │   ├── laptop.png                     # Managed IT
│       │   ├── mobile.png                     # Telephony
│       │   ├── presenting.png                 # Web & App
│       │   └── portrait.jpg                   # Team card (Courtenay)
│       ├── oracle/            # Eagle
│       │   └── portrait.png                   # Infrastructure + team card (Dean)
│       └── nano/              # Shark
│           └── portrait.jpg                   # Connectivity + team card (Mark)
└── migration/content-audit.md # Verbatim content from the live factorit.co.uk
```

Folder convention: lowercase, kebab-case file names, mascot images grouped under `assets/mascots/<mascot-name>/<scene>.<ext>`. Logos under `assets/logos/`.

## Brand identity

### Logo

The canonical wordmark is **`assets/logos/factorit-wordmark.svg`** — transparent background, white text with light-blue accent. Always use it on the dark brand-coloured header/footer bar. `factorit-wordmark-on-light.svg` (same wordmark with a grey rounded background rect) is the alternate for use on white surfaces. `factorit-mark.png` is the standalone "it" mark only. `factorit-company.png` is a screenshot-style PNG fallback.

### Colour palette

Driven by CSS custom properties in `css/style.css`:

| Token       | Value     | Purpose                              |
|-------------|-----------|--------------------------------------|
| `--navy`    | `#6c6e72` | Dark brand colour (header, footer, dark sections). A darker tone of the logo's grey-blue `#939598` so white text keeps WCAG AA contrast. |
| `--navy-2`  | `#7d7f83` | Slightly lighter for cards on dark sections |
| `--cyan`    | `#5A7FA8` | Accent (eyebrows, brand-dot, form focus, small badges). Variable still named `--cyan` for legacy reasons; the actual colour is a **slate blue** derived from the logo's own light-blue accent `#cfdef2`. Used **sparingly** — primary CTAs are glass, not coloured. |
| `--cyan-ink`| `#ffffff` | White text on slate-blue badges (`.post-cat`, `.page-link.is-current`) |
| `--ink`     | `#0E1A33` | Body text on light surfaces          |
| `--mute`    | `#5A6A85` | Secondary text                       |
| `--line`    | `#E5E9F0` | Hairline borders                     |

Both `--navy` (actual: grey-blue) and `--cyan` (actual: slate-blue) keep their legacy variable names. Don't introduce hard-coded hex values, extend the palette via new variables.

### Button & card treatments (glass aesthetic)

The site uses a consistent glassmorphism language for prominent interactive surfaces:

- **`.btn-primary`** — dark glass (`rgba(20, 22, 28, 0.88)` + `backdrop-filter: blur(10px) saturate(140%)`) with white text and a 1px white-12% border. Matches the nav pill. Hover deepens the background and adds a soft drop shadow.
- **`.header-cta`** — inverted to a **white-glass** variant so it stands out against the dark pill it sits inside. Modifier rule: `.header-cta.btn-primary { background: rgba(255,255,255,0.92); color: var(--ink); }`.
- **`.service-card.is-featured`** — also dark glass with white text, so the highlighted card on the home page reads as a peer of the primary CTA.
- **`.site-header > .header-inner`** — the pill (`rgba(30,32,36,0.65)` + blur).
- **`.primary-nav` (mobile drawer)** — same glass treatment when open.

Don't use the accent `var(--cyan)` for button backgrounds. CTAs are intentionally glass, not coloured — that was a deliberate move away from coloured primary buttons.

### CTA chevron

Buttons and arrow-links use a small CSS-drawn chevron rendered by `<span class="btn-chev" aria-hidden="true"></span>` placed inside the `<a>` or `<button>`. The chevron is a 0.45em square with `border-right`/`border-top` rotated 45°, currentColor, and slides right on hover. Do **not** use `&rarr;` / `→` / unicode arrows — they've all been removed.

### Mascots

FactorIT's brand differentiator is sustainability, expressed through a roster of animal mascots.

| Mascot   | Animal       | Team member | Service area |
|----------|--------------|-------------|--------------|
| Pascal   | Polar bear   | Gavin (Director)                          | IT Support, plus the overall sustainability symbol |
| Frozen   | Arctic fox   | Courtenay (Office Manager)                | Managed IT, Telephony, Web & App (three poses available) |
| Oracle   | Eagle        | Dean (Senior Engineer / IT Consultant)    | Infrastructure Management |
| Nano     | Shark        | Mark (Helpdesk Manager / Senior Analyst)  | Connectivity |

Use these exact spellings and species. **Do not** describe Oracle as an owl or Nano as a generic "sea creature" — earlier copy had both mistakes.

### Mascot image assets

Mascot images are grouped by mascot under `assets/mascots/<mascot>/<scene>.<ext>`. Current inventory:

- `group/team-portrait.png` — all four mascots, formal portrait. Home-page hero.
- `group/team-collaboration.png` — all four around a laptop. Home-page CTA strip.
- `pascal/datacenter.jpg` — Pascal in suit interacting with holographic dashboards in a data centre. Used in three places: IT Support service tile, Sustainability section, Gavin's team card. **Pascal images currently come only from this file** — there's a legacy `pascal/portrait.png` (the original polar bear portrait) but it is intentionally not used in production until/unless we get fresh Pascal shots.
- `frozen/laptop.png` / `mobile.png` / `presenting.png` — Frozen at a laptop / on mobile / presenting. Mapped to Managed IT, Telephony and Web & App services respectively.
- `frozen/portrait.jpg` — clean fox portrait. Courtenay's team card.
- `oracle/portrait.png` — eagle portrait. Used on Infrastructure service tile and Dean's team card.
- `nano/portrait.jpg` — shark portrait. Used on Connectivity service tile and Mark's team card.

When adding images, use the `.media-img` class (sets `width: 100%`, `object-fit: cover`, aspect-ratio per-section) or the `.team-photo` class for the square team-grid cells.

**Adding new mascot assets:** drop them into the matching `assets/mascots/<mascot>/` folder, name them descriptively (e.g. `pascal/meeting.jpg`), then update CLAUDE.md's inventory and the `src` references in HTML.

## Services (canonical list)

1. IT Support
2. Managed IT Services
3. Infrastructure Management
4. Web & App Development
5. Connectivity
6. Telephony

Plus the standalone proposition on `cyber-security.html`: free IT & Cyber Security Assessment, Cove Backup trial, User Awareness Training trial.

## Navigation pattern

- The header is a **floating glass pill** — `position: fixed`, transparent outer (`pointer-events: none`), with `.header-inner` as a centered `fit-content` capsule (dark `rgba` background, `backdrop-filter: blur`, fully rounded). It overlays the page rather than taking flow space.
- On the home page the hero image (`.hero-cover`) extends behind the pill. On every other page `.page-hero` carries `padding-top: 7rem` so its content clears the pill.
- Six top-level items: Home, What We Do, Who We Are, IT & Cyber Security, Blog, Contact Us.
- Three items have dropdown submenus on desktop: What We Do (6 services), Who We Are (Our Team, Sustainability), IT & Cyber Security (Free Assessment, Trial Offers, Why FactorIT).
- Submenu items deep-link to section IDs on their parent page (e.g. `services.html#it-support`). Keep these IDs stable; if you add a new section the nav should follow.
- Below `960px` the nav collapses into a hamburger drawer that drops full-width below the pill. **Submenus are intentionally hidden on mobile** — the top-level link goes to the parent page.
- Hamburger animates with a 405° / −405° spin into an X. Toggle wiring is in `js/main.js`.
- The header markup is duplicated across every page. When you add a nav item, update **all 7** HTML files.

## Writing conventions

- British English (e.g. *recognise*, *organisations*, *behaviour*).
- **No em-dashes or en-dashes in prose** — they're a tell of AI-generated copy. Use a comma, colon, or split the sentence. The only exceptions are: numeric ranges (`5–30 users`) and traditional quote-attribution (`— Client Name`).
- Avoid the "X — here's what Y" construction entirely.
- Service names are title-cased (IT Support, Managed IT Services, Web & App Development).
- "FactorIT" is one word, no space.

## WordPress migration notes

- Each HTML file contains `<!-- WP IMPLEMENTATION NOTE: -->` comments indicating how that block maps to a WP construct (CF7 shortcode, The Loop, Gutenberg blocks, etc.). Preserve them.
- `migration/content-audit.md` is the source of truth for verbatim copy from the live site.
- The contact form spec lives at `migration/contact-form-7.txt` (referenced from `contact.html`, file not yet created).

## SEO conventions

The site targets local search for **"IT support / cyber security / managed IT in West Yorkshire"** (Bradford-area, 01274 phone code) and the surrounding regions FactorIT serves (Yorkshire, Humberside, Lancashire).

**Files at the root:**
- `robots.txt` — allows all crawlers, blocks `/.claude/`, `/migration/` and `CLAUDE.md`, points to the sitemap.
- `sitemap.xml` — six pages (the blog-post template is intentionally excluded). Update `<lastmod>` when content materially changes.

**Per-page `<head>` pattern:**
- `<html lang="en-GB">` everywhere (British English signal).
- `<title>` formula: `{Page Topic with local keyword} | FactorIT` or `FactorIT | {page topic} in West Yorkshire`.
- `<meta name="description">` ~150–160 chars, includes location + primary service keyword.
- `<link rel="canonical" href="https://factorit.co.uk/{path}">` on every page (prevents duplicate-content issues when the site is mirrored or pre-prod).
- Open Graph (`og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:image:alt`, `og:site_name`, `og:locale`) — share image is `assets/mascots/group/team-portrait.png` for every page until per-page hero images are supplied.
- Twitter Card (`summary_large_image`) mirroring OG.
- `<meta name="theme-color" content="#6c6e72">` (mobile browser chrome).

**JSON-LD structured data (one or two `<script type="application/ld+json">` blocks per page, right before `</head>`):**
- `index.html` — `ProfessionalService` (LocalBusiness equivalent) with full address/phone/email/areaServed + `makesOffer` array of all services.
- `services.html` — `ItemList` of `Service` items + `BreadcrumbList`.
- `team.html` — `Organization` with `employee` Persons + `BreadcrumbList`.
- `cyber-security.html` — `Service` (Free IT Assessment, `price: 0 GBP`) + `BreadcrumbList`.
- `blog.html` — `Blog` + `BreadcrumbList`.
- `blog-post.html` — `Article` template (per-post WP import fills `headline`, `datePublished`, `author`) + `BreadcrumbList`.
- `contact.html` — `ContactPage` with nested `ProfessionalService` + `BreadcrumbList`.

**Production domain assumed: `factorit.co.uk`** (per the migration audit). Search-and-replace if the live URL ever differs.

## Open design questions

- **Remaining `.img-placeholder` blocks.** News-card thumbnails, the cyber-security trial icons and the blog feature/related images are still placeholders. Real client photography hasn't been supplied. Leave them until assets land or until a mascot fit is agreed.
- **Blog post URLs.** The cards link to `blog/<slug>.html` files that don't exist yet; they're stubs for the WordPress import.
- **Street address for LocalBusiness schema.** No physical address is published — only the region. If one becomes available, add `streetAddress`, `postalCode` and `addressLocality` to the `PostalAddress` blocks in `index.html` and `contact.html` for richer Google Business profile linking.
