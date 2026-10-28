# 09 — Phase 2 Recommendations & Mandatory Requirements

Status: **Phase 1 only. Nothing here has been implemented.** These are inputs for the Phase 2 session, which starts only after the owner reviews this audit and approves.

## 1. Stack (as specified for Phase 2)

Next.js (App Router) · JavaScript · React · GSAP + ScrollTrigger · responsive frontend.

Image configuration requirement: avoid the default Vercel Image Optimization quota by **merging** `images: { unoptimized: true }` (or an equivalent) into the existing `next.config` — do not replace unrelated settings. Because the optimizer is off, images must be pre-sized and compressed locally (see §6). No configuration was changed during this audit (there was no project in the workspace).

## 2. Proposed information architecture (recommendation — to be confirmed)

Based on `02-page-inventory.md` and `data/route-inventory.csv`:

| New route | Built from (original) | Notes |
|---|---|---|
| `/` Home | 3981 (+ 9474, 7270) | Short intro, offerings overview, proof (press/venues/testimonials), books & music teaser, FAQ excerpt, booking CTA |
| `/about` | 2 (+ 8274 "Why?") | Bio, background, credentials, venues/press |
| `/sessions` | 4493 + 12341 (+ 13398, 13315) | One clean price list (HTML), booking instructions, online sessions |
| `/sessions/<offering>` *(optional)* | Reprogramming (7345, 7050), Gift of Harmony (3816, 12994, 13299, 14143), Biohacking (10977, 11001, 11378), Past Life Journey (posts 2025-08-22, 2020-09-19) | Only for offerings with substantial verified content; otherwise sections within `/sessions` |
| `/programmes` or section in `/sessions` | Packages 4464, longer programmes from 2026 menu, Courses 3880 | After owner confirms what is current |
| `/reviews` | 7063 + 6349 (press) + 2013 testimonial posts | Curated quotes, press scans, Tripadvisor link |
| `/books` | 13706 (+ 13232, 7059) | 7 books |
| `/music` | 4404 + 7220 + 11962 | Few lazy-loaded Bandcamp embeds + link to Bandcamp |
| `/journal` + `/journal/[slug]` | 2025–2026 posts (+ selected older articles) | Simple; ≤10 images on first view |
| `/free-resources` *(optional)* | 9609, 11991, 3640, 12366, 8553 | Only current downloads |
| `/contact` | 8742 | WhatsApp, email, Calendly, Instagram, location (if confirmed) |
| `/privacy` | 10444 | Only after legal review (Q11) |
| External links | Storenvy/Etsy, Bandcamp, Amazon, Calendly, Teachable, biohackinghealingjourney.com, quizzes | Clearly marked as external |

Plan a redirect map (old WordPress URL → new route) covering: all IMPLEMENT/MERGE/MIGRATE rows in `data/route-inventory.csv`, high-traffic legacy slugs (`/the-gift`, `/about`, `/crystals`, `/healing-music`, `/download`, `/courses`, `/reprog`, `/category/a-latest-brochure-menu-jelila/`), and date-based post URLs.

## 3. Content guidance

- Use the verbatim files in `content/` as the source; condense, don't invent. Preserve facts, names, prices (after confirmation), and quotes with their original attributions.
- Present the 2026 prices as **HTML text** (currently image-only).
- Remove repeated link rows, repeated "Queries?" blocks, repeated bio blurbs, legacy price blocks, staging/admin links, Flash shortcodes.
- Resolve every item in `08 §A` before publishing; where unresolved, omit the conflicting detail rather than choose one.
- FAQ: reuse the 11 verbatim Q&As (`03 §7`); no new FAQs unless supplied by the owner.
- Blog: real posts exist (25 from 2025–2026). Initial journal presentation ≤10 images. Do not create new posts.

## 4. Assets

- Start from `assets/p1-originals/` (50 originals, unmodified) and `04-assets-manifest.csv` (812 catalogued images with URLs, dimensions, sizes, pages, concerns; P1 = 50, P2 = 170, P3 = 592).
- Prefer real photos of Jelila (`jelila-icon3.jpg` 1938×2218, `messenger_creation_…jpeg`, `photo-17-08-23-06.49.35.jpg`, `jelila-sound-healing-revivo-guitar-ubud.png`, `round-jelila-with-jelila.jpg`, Simply Her scan), book covers, Gift of Harmony illustrations, crystal product shots, sacred-geometry artwork.
- Flyer/menu images: keep as optional downloads only; never as the sole information source.
- Missing for a polished build: high-res logo/wordmark, favicon, high-res covers for *The Reprogramming II* and *The Gift of Harmony*, recent landscape-format photography for wide sections. Ask the owner (Q12) — **do not substitute stock or AI imagery** while originals exist.
- Do not modify the files in `assets/p1-originals/`; write optimised derivatives elsewhere in the Phase 2 project.

## 5. Mandatory design rules for Phase 2 (recorded as requirements)

### Typography
- **Exactly two font families across the entire website**: one for headings, one for body text, navigation, buttons, forms, cards, footer and all other UI.
- Both readable, professional and not overly fancy. No third family for decorative headings, special sections, the footer, quotes, prices or any individual component.
- Consistent heading and body sizes across equivalent components; a controlled, responsive type scale (e.g. fluid `clamp()` steps). Hierarchy through size, weight, line-height and letter-spacing only.
- The original used only Arial/Helvetica on the web; the brand's recognisable lettering is an elegant serif/italic in the logo artwork (`05 §1`). The two-font choice is made in Phase 2.
- The logo wordmark, if kept, is an image/SVG asset, not a font.

### Visual design
- Professional, human-designed appearance; intentional image/text alignment; consistent content widths, margins and spacing.
- No unnecessary decorative numbering, eyebrow text, random symbols, floating badges or ornamental elements.
- Avoid repetitive AI-looking layouts and generic template patterns; use visual effects (GSAP/ScrollTrigger) only where they serve a clear purpose, and respect `prefers-reduced-motion`.
- Keep the recognisable identity: forest green #073F13, leaf/lime greens #669404 / #7DB20A, sand #F5DEC6, white, with maroon/gold heritage accents (estimates) — see `05 §2`. Fix contrast (lime is not a text colour on white).

### Content
- Pages concise and focused; no repeated paragraphs, unnecessary sections or excessive length.
- Preserve meaningful facts and essential information.
- **Do not invent** claims, testimonials, FAQs, prices or blog posts.

### Footer
- Compact and content-driven; only necessary, verified information (e.g. name, short tagline, WhatsApp, email, key links, social, copyright, privacy).
- No excessive padding, unnecessary columns, duplicated content or oversized layout.
- The final content section must be fully visible above the footer, with a natural transition into it; no overlap, clipping, excessive blank space or fixed-footer interference.

### Images and performance
- Prefer original assets already available; resize and compress locally; modern formats (WebP/AVIF) where practical; correct intrinsic dimensions; lazy-load below-the-fold images; responsive `sizes`/`srcset` (or pre-generated variants) since the Next.js optimizer will be disabled.
- Avoid large downloads and duplicate copies (the original library has 42 images > 1 MB and duplicate uploads).
- Embeds (Bandcamp, YouTube, Calendly) load on interaction or when near the viewport.
- Configure `images: { unoptimized: true }` by merging into the existing Next.js config.

## 6. Technical recommendations

- Mobile-first, proper viewport meta, accessible tap-friendly navigation (no hover-only menus), visible focus states, semantic headings (one H1 per page = page title), real alt text.
- Per-page `<title>` and meta descriptions written for the page (not auto-generated), canonical URLs, Open Graph image per key page, `LocalBusiness`/`Person` structured data only with confirmed facts.
- External dependencies stay external (Calendly, WhatsApp, Storenvy/Etsy, Mailchimp, Bandcamp, Amazon, Teachable); no claims of working payments/booking/newsletter until tested with the owner.
- Replace sidebar promos with a few deliberate CTAs (Book / WhatsApp / Listen / Read).
- A custom favicon and app icons from the logo once a logo file is provided.
- Analytics and cookie notice: owner decision (original used WordPress.com Stats + Statcounter).

## 7. Original design problems not to carry forward

904px fixed three-column layout; 108 sidebar widgets; tiled carved-wood background behind everything; text-in-image tiles and menus; repeated link rows; polaroid borders on every image; inline ad-hoc colours (#FF6600, #333399, #0000FF); 12px body text; hover-only dropdowns; 26,000px pages; footer with no business info; cookie bar + subscribe bar overlaying content.

## 8. Phase 2 entry checklist

1. Owner answers `08 §A` (at minimum Q1–Q5, Q12, Q15).
2. Confirm route plan (§2) and redirect strategy.
3. Choose the two font families (headings / body+UI).
4. Confirm palette emphasis (green-led vs maroon-led).
5. Prepare optimised image derivatives from `assets/p1-originals/` and selected P2 assets.
6. Then begin implementation.
