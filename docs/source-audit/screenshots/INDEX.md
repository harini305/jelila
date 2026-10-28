# Screenshot Index

Captured 2026-10-27 from the live site with headless Chromium (Playwright 1.58). JPEG.
Naming: `<page>__<viewport>__<kind>.jpg`
- `fold` = first screen at that viewport.
- `full` = full page clipped to the first **9,000 CSS px** (every page is ~26,000px tall because of the sidebars).
- `menu-hover-*` = desktop dropdown state while hovering a main-nav tab (top 700px).

| Viewport key | Size | Method |
|---|---|---|
| `desktop-1440` | 1440×900, DPR 1, desktop Chrome UA | Live site |
| `narrow-window-768` | 768×1024, desktop UA, **no device emulation** | Live site |
| `narrow-window-390` | 390×844, desktop UA, **no device emulation** | Live site |

True tablet/mobile device emulation was blocked by a WordPress.com bot challenge (HTTP 403 "Confirm you are human"); those captures were discarded. See `../07-responsive-observations.md`.

| Page key | Route | desktop-1440 | narrow-768 | narrow-390 |
|---|---|---|---|---|
| home | `/` | fold, full, menu-hover-sessions, menu-hover-vibes, menu-hover-quiz | fold, full | fold, full |
| bio | `/jelila-beloved-healer-has-30-years-…-author-of-9-boo/` | fold, full | — | — |
| best-healer | `/spiritual-advisor-ubud-bali-and-online/` | fold, full | — | — |
| sessions | `/sessions/` | fold, full | fold, full | fold, full |
| healing-menu-2026 | `/jelila-is-a-beloved-healer-known-for-…-online/` | fold, full | — | — |
| packages | `/packages/` | fold, full | — | — |
| reprogramming | `/healing-change-your-life-fast/` | fold, full | — | — |
| gift-of-harmony | `/gift-of-harmony-work-treadmill-life-balance-jelila/` | fold, full | — | — |
| after-gift-of-harmony | `/after-the-gift-of-harmony-by-jelila/` | fold, full | — | — |
| biohacking | `/http-jelila-com-biohacking-healing-journey-what-is-it/` | fold, full | — | — |
| reviews | `/reviews-testimonials-tripadvisor-comments-jelila-spiritual-soul-healer-ubud-bali/` | fold, full | — | — |
| press-reviews | `/press-reviews-jelila-spiritual-healer-ubud-bali-www-jelila-com/` | fold, full | — | — |
| contact | `/contact-jelila-spiritual-soul-healer-ubud-bali-online/` | fold, full | fold, full | fold, full |
| books | `/books-by-jelila/` | fold, full | fold, full | fold, full |
| vibes-music | `/shamanic-healing-music-guided-meditation-cds-relaxation-peace-energy-balance-jelila-ubud-bali/` | fold, full | — | — |
| courses | `/courses-with-jelila-spiritual-soul-healer-ubud-bali-online/` | fold, full | — | — |
| store | `/store/` | fold, full | — | — |
| free-downloads | `/free-download-jelila-pdf-mp3-jpeg-etc/` | fold, full | — | — |
| blog | `/blog/` | fold, full | — | — |
| category-articles | `/category/articles-by-jelila/` | fold, full | — | — |
| post-trauma-2025 | `/2025/08/22/🌿-trauma-release-in-ubud-past-life-journey-…/` | fold, full | — | — |
| privacy | `/privacy-policy/` | fold, full | — | — |
| 404-test | `/this-route-does-not-exist-audit/` (HTTP 404) | fold, full | — | — |

Metrics: `_screenshot-metrics.json` (desktop: status, load time, requests, declared bytes, image/iframe counts, broken images, title, meta description, canonical) and `_screenshot-metrics-narrow-window-768-narrow-window-390.json`.
