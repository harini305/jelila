# jelila.com — Source Audit (Phase 1)

Research-only audit of https://jelila.com, prepared on 2026-10-27 so that a Phase 2 session can rebuild the front end (Next.js App Router, JavaScript, React, GSAP/ScrollTrigger) without repeating the research.
**Status: complete, awaiting owner review. Phase 2 has not started.**

## Start here

1. `01-audit-report.md` — what was audited, how, coverage, top findings, limitations.
2. `08-issues-gaps-questions.md` — 17 owner questions to answer before building.
3. `09-phase-2-recommendations.md` — proposed routes, asset plan and the **mandatory Phase 2 design rules** (incl. the two-font rule).

## Documents

| File | Contents |
|---|---|
| `01-audit-report.md` | Overview, method, coverage, key findings, confirmations |
| `02-page-inventory.md` | Main menu tree, shared layout, 21 key routes in detail (sections in order, content, assets, interactions, SEO, risks, recommendation), page groups |
| `03-content-inventory.md` | Where the verbatim content lives; business facts with sources and conflicts; prices; nav/CTA labels; testimonials; **verbatim FAQs**; books; music; blog; downloads; footer/legal; SEO; content priorities |
| `04-assets-manifest.csv` | 812 unique images: id, priority (P1/P2/P3), type (keyword heuristic), filename, original URL, local path, availability, dimensions, size, pages, global slot (sidebar/header/og), title/alt/caption, link target, concerns |
| `05-brand-reference.md` | Typography (verified computed styles), colours (verified HEX + labelled estimates + WCAG contrast), logo/marks, visual identity, what to keep/leave |
| `06-functionality-and-dependencies.md` | Platform, every feature with verification level, sidebar widgets, broken/misdirected links, third-party scripts |
| `07-responsive-observations.md` | Tested viewports and methods, findings, performance indicators, limitations |
| `08-issues-gaps-questions.md` | Owner questions, content errors, duplicates, outdated content, technical/UX issues, coverage gaps |
| `09-phase-2-recommendations.md` | IA proposal, redirects, content and asset guidance, mandatory design rules, technical recommendations, entry checklist |

## Evidence folders

| Path | Contents |
|---|---|
| `content/pages/` (72) and `content/posts/` (173) | Verbatim Markdown of every published page and post (from the WordPress REST API), with front-matter (source URL, dates, counts) |
| `data/route-inventory.csv` | All 245 routes + archive types: classification, recommendation, proposed route, flags, notes |
| `data/routes-content.json` | Per-route metadata: headings outline, embeds, detected prices/phones/emails, excerpt, categories, featured image |
| `data/offerings-and-prices.json` | Services and prices transcribed from the 2026 menu image + Sessions page, with conflicts, payment and booking channels |
| `data/assets-manifest.json` | Same as the CSV, as JSON |
| `data/assets-raw.json` | Intermediate image list before CDN-URL de-duplication (kept for traceability; use the manifest) |
| `data/documents-and-downloads.csv` | Linked PDFs/MP3s with status and size |
| `data/embeds.json` | Bandcamp / YouTube / VideoPress / other embeds by page |
| `data/external-links.csv`, `data/internal-links.csv` | Every content link with source page and anchor text |
| `data/external-link-status-sample.json` | HTTP results for 104 key external destinations |
| `data/legacy-internal-link-targets.csv` | 212 linked internal paths not in the sitemap, with status / where they actually resolve |
| `data/route-status.json` | HTTP status for all 245 sitemap routes |
| `data/main-menu.json` | Rendered main navigation with submenus and hrefs |
| `data/sidebar-widgets.json` | All 108 sidebar widgets (type, title, text preview) |
| `data/seo-and-load-key-pages.json` | Title, meta description, canonical, H1, load metrics for 23 key routes |
| `screenshots/` | 65 JPEGs (desktop 1440 fold/full for 23 routes, 3 menu-hover states, narrow-window 768/390 for 4 routes) + metrics JSON. See `screenshots/INDEX.md` |
| `assets/p1-originals/` | 50 priority original images (≈21 MB), downloaded unmodified, referenced from the manifest's `local_path` |

## Ground rules followed

- Verified facts, observations, estimates and unknowns are labelled.
- Source text is verbatim; errors are documented, not corrected.
- No redesign, code, project configuration, package installation in the project, git push or deployment.
- No CAPTCHA or bot challenge was bypassed; no bookings, purchases, sign-ups or messages were made.
