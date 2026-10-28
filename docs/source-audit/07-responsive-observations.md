# 07 — Responsive Observations

## 1. What was actually tested

| Viewport | Method | Pages | Result |
|---|---|---|---|
| **Desktop 1440×900** | Live site, headless Chromium (Playwright 1.58), desktop UA, DPR 1 | 23 routes (incl. 404) | Captured. Fold + full-page (first 9,000px) screenshots, metrics, hover states for 3 dropdowns |
| **Tablet 768×1024** (iPad Mini emulation) | Live site | 23 routes | **Blocked** — WordPress.com returned HTTP 403 "Confirm you are human". Captures discarded. Not bypassed. |
| **Mobile 390×844** (iPhone 13 emulation) | Live site | 23 routes, then 1 retry | **Blocked** — same 403 interstitial. Captures discarded. |
| Mobile/tablet via offline render of curl-fetched HTML | Saved HTML + inlined CSS | 4 | Rejected — WordPress.com served a differently styled document to curl, so the render was not faithful. Discarded. |
| **Narrow window 768×1024 and 390×844** | Live site, same desktop browser/UA at narrow window widths (no device emulation) | Home, Sessions, Contact, Books | Captured. Shows overflow behaviour; **does not** reproduce mobile-browser zoom-to-fit. |

**Unverified:** true phone/tablet rendering (iOS Safari / Android Chrome), touch behaviour of dropdowns, WordPress.com mobile-specific behaviours (e.g. AMP for posts), orientation changes.

## 2. Findings

### 2.1 Layout — VERIFIED
- No viewport meta tag; fixed `#container { width: 904px }`, three fixed columns (192 + 500 + 192 + gutters). No media queries in the theme CSS for layout.
- At 768px and 390px window widths, `document.documentElement.scrollWidth = 904` on all 4 pages → **horizontal scrolling** of 136px (768) and 514px (390). Content column, right sidebar and part of the nav are off-screen at 390px (`screenshots/home__narrow-window-390__fold.jpg`).
- At 1440px the 904px column sits centred with ~268px of tiled background each side.

### 2.2 Expected behaviour on real phones — INFERRED (standard browser behaviour, not observed)
- With no viewport meta, iOS/Android browsers lay out at a ~980px virtual width and scale down to fit (~0.4× at 390px). Body text (12px CSS) would appear ≈ 4.8px until the user pinch-zooms; tap targets (14px tab labels, 12px links) would be far below 44×44px.

### 2.3 Header & navigation — VERIFIED (desktop)
- 11 green tabs in one row, fits 904px exactly at 1440; at narrow widths the row is clipped by the viewport (no wrapping because the container is fixed).
- Dropdowns appear on `:hover` only (stacked 130px-wide green blocks overlapping the banner). No hamburger/mobile menu exists. Touch/keyboard opening not verified.
- Header banner is a fixed 904×160 image with small baked-in text — not legible at mobile scale.

### 2.4 Content & images — VERIFIED (desktop)
- Content column is 500px with ~475px max entry width; images are floated left/right at fixed pixel widths (100–468px) with 1px border + 4px padding.
- Large flyer images (1200×1800 menu, 1012×1800 reviews collage) are displayed at 468px wide; their text becomes very small.
- Bandcamp iframes have fixed widths (350px) and heights (300–420px).

### 2.5 Page height & sticky elements — VERIFIED
- Every route is ~26,000px tall (sidebars), Category archive 37,877px.
- Fixed bottom elements: cookie bar (full width, ~53px tall) and WordPress.com "Subscribe" action bar; both overlay content until dismissed.
- No sticky header.

### 2.6 Footer — VERIFIED
- Single centred line "Blog at WordPress.com. WP Designer." (11px, black) below the 26,000px layout. No business details.

### 2.7 Performance indicators (desktop, live, declared `content-length` sum — undercounts chunked responses)

| Metric | Median (23 routes) | Max |
|---|---|---|
| Requests per page | 239 | 488 (Vibes/Music) |
| Declared transfer | ~4.9 MB | ~12.1 MB (Vibes/Music); Home ~9.8 MB |
| `load` + 2.5s settle | ~7.0 s | 15.3 s (Sessions) |
| `<img>` elements | ~215 | 281 |
| iframes | 4–5 | 18 (Vibes) |

Source: `screenshots/_screenshot-metrics.json`, `data/seo-and-load-key-pages.json`. Original image library ≈ 227 MB across 795 reachable images; 25 originals exceed 1.4 MB (largest 6.1 MB, 4032×3024).

### 2.8 Mobile-specific content differences
None found in the HTML (same markup served); WordPress.com may serve AMP versions of posts to mobile — **unverified**.

## 3. Implications for Phase 2 (not copying the original)

- Build mobile-first with a proper viewport meta; target 360–430px phones, 768–1024px tablets, 1280–1440px desktops.
- Replace hover-only dropdowns with an accessible, tap-friendly menu.
- Never ship text-in-image (menu flyers, promo tiles) as the only source of information; render prices and services as HTML.
- Make embeds responsive and load them on demand.
- Remove sidebars; this alone removes ~200 requests per page.

## 4. Screenshot index

See `screenshots/INDEX.md`.
