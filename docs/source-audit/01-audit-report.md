# 01 — Audit Report: jelila.com (Phase 1)

- **Site:** https://jelila.com — "Jelila – Spiritual Healer & Sound Journey Guide in Bali"
- **Audit date:** 2026-10-27
- **Scope:** research and documentation only. No code, redesign, configuration change, package install in the project, git push or deployment.

## 1. Overview

Jelila is a spiritual / sound healer based in Ubud, Bali, also working online. She offers intuitive healing, chakra balancing, her own method "The Reprogramming™", longer programmes (The Gift of Harmony™, The Gift of Self-Love, Alien Wedding), past-life/trauma journeys, a separate "Biohacking Healing Journey" experience, books (7 on Amazon), healing music (Bandcamp) and crystal jewellery (Storenvy/Etsy). Bookings happen by WhatsApp and Calendly.

The site is a **WordPress.com** blog running since **2008** on the classic **Digg 3 Column** theme. It has accumulated 72 pages, 173 posts, 153 categories, ~800 content images and 9,470 links. It is not responsive, every page carries 108 sidebar widgets, and the most current price list exists only as an image.

## 2. Method

| Step | Tool / source | Output |
|---|---|---|
| Workspace inspection | file listing | Workspace was **empty** (no project files, no prior evidence) |
| Route discovery | `robots.txt`, `sitemap.xml` (245 URLs), `news-sitemap.xml` (empty), rendered main menu, 9,470 content links | `data/route-inventory.csv`, `data/main-menu.json`, `data/legacy-internal-link-targets.csv` |
| Content capture | Public WordPress REST API (pages, posts, categories) | `content/pages/*.md` (72), `content/posts/*.md` (173), `data/routes-content.json` |
| Rendering, styles, interaction | Playwright 1.58 / Chromium (installed in a scratch directory outside the project) at 1440px; hover states; computed styles | `screenshots/`, `05-brand-reference.md` |
| Theme CSS | `digg3/style.css`, inline `custom-colors-css`, `custom-background-css`, Custom CSS endpoint | `05` |
| HTTP checks | All 245 routes (GET), 812 images (HEAD), 9 documents, 212 legacy internal paths, 104 sampled external links | `data/route-status.json`, `04-assets-manifest.csv`, `data/documents-and-downloads.csv`, `data/external-link-status-sample.json` |
| Asset download | 50 priority originals (≈21 MB) saved unmodified | `assets/p1-originals/` |

## 3. Coverage

| Category | Result |
|---|---|
| Pages fully inspected (content + desktop render + screenshot) | 22 key routes + 404 (`screenshots/INDEX.md`) |
| Pages inspected via content only (verbatim text, headings, images, links, embeds, HTTP status) | all 245 sitemap routes (72 pages + 173 posts) |
| Partially inspected | category archives (1 rendered), monthly archives, search (`/?s=` returns 200; results not reviewed), RSS feeds (not opened) |
| Discovered but inaccessible | WordPress media library and menu definitions (API 401); drafts/private content (not public); Tripadvisor / Etsy / Facebook pages (403/400 to automation) |
| Broken / unavailable routes | No sitemap route is broken (245 × 200). 126 legacy internal paths return 404; several legacy slugs resolve to the wrong page; 1,203 links point to a dead staging domain (`06 §4`) |
| Interactive states not verified | Mobile/tablet rendering and touch behaviour; dropdown keyboard access; Calendly booking; Storenvy checkout; Mailchimp signup; WhatsApp delivery; comment submission; Jetpack carousel |
| Limitations | WordPress.com bot challenge (403 "Confirm you are human") blocked device-emulated mobile/tablet captures; not bypassed. Narrow-window desktop captures used instead (`07`). |

## 4. Key findings

1. **Content is valuable but buried.** Real, specific material exists — services and prices, booking instructions, 11 FAQs, ~60 named testimonials, press coverage, 7 books with descriptions, music catalogue, 25 recent articles — spread across many overlapping pages with heavy repetition (`03`, `02`).
2. **Facts conflict.** Years of practice (21–30), book count (4–9), phone numbers (3), prices (e.g. $210 vs $220), Gift of Harmony duration (3 vs 4 days), payment methods (PayPal vs Wise), and the store's payment status (Bio says broken since June 2026). See `08 §A` (17 owner questions).
3. **The current price list is image-only** (2026 menu JPEG). Transcribed in `data/offerings-and-prices.json`.
4. **Brand identity** is carried by forest/leaf/lime greens (#073F13, #669404, #7DB20A, #B6F334) on warm sand (#F5DEC6), the maroon serif "Jelila" wordmark and gold carved-wood imagery in the header banner. Web typography is just Arial/Helvetica; there is no standalone logo file and no custom favicon (`05`).
5. **Not responsive.** Fixed 904px layout, no viewport meta, horizontal overflow at 768/390px (`07`).
6. **Heavy pages.** Median 239 requests / ~4.9 MB per page; Music page 488 requests / ~12 MB; ~26,000px tall pages due to sidebars.
7. **Link rot.** Dead staging domain, admin-editor links, Flash video shortcodes, malformed WhatsApp links, wrong slug redirects (`06 §4`).
8. **All functionality is external** (Calendly, WhatsApp, Storenvy/Etsy, Mailchimp, Bandcamp, YouTube, Amazon, Teachable, uQuiz, biohackinghealingjourney.com). No contact form, no map (`06`).
9. **Assets:** 812 unique images catalogued (≈229 MB of originals; 42 > 1 MB; 17 unavailable). 50 priority originals downloaded. Many images contain baked-in text; some covers are low-res (`04`).
10. **SEO hygiene:** keyword-stuffed titles, auto-generated meta descriptions starting with nav text, AI-artefact and malformed slugs, H1 = site name on every page (`03 §13`).

## 5. Pages and routes (summary)

Main navigation: Home · Reviews · Sessions · Vibes · Store · Contact · Blog · Free · Quiz · Books · After The Gift of Harmony by Jelila (dropdown tree in `02 §1`).
Route recommendations (245): IMPLEMENT 19 · MERGE 15 · CONSOLIDATE 20 · MIGRATE 55 · LEGACY 135 · REVIEW 1.

## 6. Evidence labels

Throughout the documents: **VERIFIED** (read from live HTML/CSS/API or HTTP response), **OBSERVED** (seen in render/screenshot), **ESTIMATE** (pixel sampling or approximate), **INFERRED** (standard browser behaviour, not observed), **UNVERIFIED** (could not be tested). Content files are verbatim and not corrected.

## 7. Confirmations

- The two-font rule and all mandatory Phase 2 design requirements are recorded in `09-phase-2-recommendations.md §5`.
- No redesign or implementation was started; no project configuration was created or changed; no packages were installed in the project (Playwright was installed only in a temporary scratch directory); nothing was pushed to GitHub or deployed to Vercel.
- Original assets on the website were not modified; local copies in `assets/p1-originals/` are unmodified downloads.
