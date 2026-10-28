# 05 — Brand Reference (Typography, Colour, Logo, Visual Identity)

Source: https://jelila.com (WordPress.com, theme **Digg 3 Column** `pub/digg3`, with WordPress.com *Custom Colors* and a custom background).
Audit date: 2026-10-27.

**Evidence labels used in this document**
- **VERIFIED** — read directly from the live CSS / computed styles (Playwright `getComputedStyle`, 1440px desktop) or from the theme/custom stylesheet source.
- **ESTIMATE** — sampled from raster images (pixel sampling of the header banner), or inferred visually. Treat as approximate.

---

## 1. Typography

### 1.1 Web typography actually used on the site — VERIFIED

The site loads **no web fonts** (no `@font-face`, Google Fonts, Typekit, or WordPress.com font service found in the homepage HTML). Everything renders in the theme's system stack:

`font-family: Arial, Helvetica, Georgia, sans-serif` (theme `digg3/style.css`, applied to `body`, all headings, inputs)

| Element | Font | Size | Weight | Line height | Letter spacing | Transform | Colour |
|---|---|---|---|---|---|---|---|
| Body (`body`) | Arial stack | 12px | 400 | normal | normal | none | #333333 inside page wrapper (body default #FFFFFF) |
| Paragraph in content | Arial stack | 12px | 400 | 18px | normal | none | #333333 |
| Site title `#pagetitle h1` | Arial stack | 24px | 700 | normal | 1px | UPPERCASE | #FFFFFF (visually hidden behind the header banner image) |
| Post/page title `.post h2` | Arial stack | 16px | 700 | 27px | normal | none | #073F13, underlined (1px border-bottom) |
| Content `h2` (`.entry h2`) | Arial stack | 16px | 700 | 18px | normal | none | #333333 |
| Content `h3` | Arial stack | 14px | 700 | 18px | normal | none | #333333 |
| Content `h4` | Arial stack | 12px | 700 | — | — | — | #333333 |
| Sidebar widget title `.sidebar ul li h2` | Arial stack | 16px | 700 | 27px | normal | none | #7DB20A |
| Main nav tab link `#menu ul li a` | Arial stack | 14px | 700 | normal | normal | none | #FFFFFF on #669404 (with white→transparent gradient) |
| Links in content | Arial stack | inherits | inherits | — | — | — | #073F13, underlined; hover removes underline |
| Footer `#footer` | Arial stack | 11px | 400 | normal | — | — | #000000 |
| Post meta `.postinfo` | Arial stack | 11px | — | — | — | — | #999999 |

Inline styles inside page/post content (from 245 pages+posts, REST API HTML) — VERIFIED counts:
- `font-family: Arial, sans-serif` ×254, `'Arial','sans-serif'` ×16, `Arvo, sans-serif` ×2, `Calibri` ×2 (pasted from external editors).
- Inline font sizes: `medium` ×49, `small` ×37, `10pt` ×16, `18px` ×9, `x-small` ×8 and others — i.e. inconsistent ad-hoc sizing.

### 1.2 Typography baked into images — ESTIMATE

Brand lettering that visitors associate with "Jelila" exists **only inside raster images**, not as web text:
- **Header banner wordmark "Jelila"** — large high-contrast italic/calligraphic serif, deep oxblood/maroon. Font not identifiable from the image.
- **"Exquisite gifts for your soul"** — italic serif in dark brown/maroon.
- **"Be the peaceful, beautiful presence that you are!"** — serif, red-brown.
- 2026 healing-menu images mix many display faces (Didone-style caps, rounded geometric sans, script "Online Store"/"Healing Music by Jelila", alien-themed graphics). These are flyer graphics, not a typographic system.

### 1.3 Font files available in the project

None. The workspace contained no project files before this audit, and the live site loads no font files.

### 1.4 Typography rule for the redesign (Phase 2 requirement — documented, not decided)

- The original effectively uses **one family on the web (Arial/Helvetica system stack)** plus image-baked display lettering.
- Phase 2 **must use exactly two font families** across the entire site: one for headings, one for body/UI (nav, buttons, forms, cards, footer).
- No third family for logo-like headings, quotes, prices, footer, or any one component. Hierarchy comes from size, weight, line-height and letter-spacing.
- Final font choice is **deferred to Phase 2** (not selected here). Considerations for that choice, from the evidence:
  - The recognisable brand voice is an *elegant serif/italic* (wordmark, "Exquisite gifts for your soul"). A readable, professional serif for headings would preserve that association without imitating the decorative script.
  - Body/UI should be a highly readable sans-serif (the original's Arial is functional but generic).
  - The logo wordmark can remain an image/SVG of the original artwork (that is an asset, not a third font family) — confirm with the owner whether a cleaned-up logo file exists.

---

## 2. Colour

### 2.1 Verified brand colours (from the WordPress.com Custom Colors stylesheet `#custom-colors-css`) — VERIFIED

| Role on original site | HEX | Where |
|---|---|---|
| Page background (behind tiled image) | **#F5DEC6** | `body { background-color }` — warm sand/peach |
| Primary dark green — links, post titles, sticky post bg | **#073F13** | `a`, `.post h2 a`, `.postinfo a`, `.sticky h2 a` background |
| Nav tab background | **#669404** | `#menu ul li a` background (olive/leaf green) |
| Nav tab border / highlight | **#B6F334** | `#menu ul li a` border-color (bright lime) |
| Sidebar widget headings | **#7DB20A** | `.sidebar ul li h2, .obar ul li h2` (lime green) |
| Content panel background | **#FFFFFF** | `.pagewrapper`, `#menu ul li` (radius 6px / tabs 5px 5px 0 0) |

### 2.2 Theme defaults still visible — VERIFIED (theme CSS), lower brand weight

| HEX | Where | Brand status |
|---|---|---|
| #333333 | body text in content | neutral text colour |
| #999999 | post meta | neutral |
| #DDDDDD | image border `.post img { border:1px solid #ddd; padding:4px }` | template default |
| #E45B00 | comments heading `h3#comments` | template default (orange), incidental |
| #FFFADA / #736926 | blockquote background / text | template default, incidental |
| #105CB6 / #75ABEA | theme default link blue (overridden by custom colours) | not brand |
| #F3F3F3 | `.wp-caption` background | template default |

### 2.3 Colours in the header banner (logo artwork) — ESTIMATE (pixel sampling of `cropped-exquisite-gifts-with-jelila-for-wordpress-3.jpg`)

| Role | Approx. HEX | Notes |
|---|---|---|
| "Jelila" wordmark | ~#400000 – #480000 | deep oxblood/maroon |
| "Exquisite gifts…" lettering | ~#401008 | very dark brown-maroon |
| "Be the peaceful…" tagline | ~#882818 | red-brown / brick |
| Banner background | gold/ochre carved Balinese wood, cream highlights | photographic |

### 2.4 Background tile — ESTIMATE

`dsc_0043-straigh-adj3t-25-in.jpg` (180×175px, tiled across the whole viewport): carved Balinese motif. Dominant sampled tones: ~#B0A080, #C0B0A0, #B09060, #C0B090 (beige/gold), with maroon recesses visible on screen. The custom-colors CSS sets `body { background-image: none }` but a later rule re-applies the custom background, so **the tile is visible on every page** (confirmed in screenshots).

### 2.5 Incidental colours in content (inline styles) — VERIFIED counts, NOT brand

From inline `color:` usage in content HTML: #FFFFFF ×2700, #000000 ×469, **#FF6600 ×244**, **#333399 ×214**, #0000FF ×133, #C0C0C0 ×121, #008000 ×101, #888888 ×91, #800080 ×77, #800000 ×76, #3D7DC2 ×63, #FF0000 ×48 and more. Inline background `rgb(250,89,36)` ×14 (orange buttons). These are ad-hoc editor colours accumulated since 2008 and **should not be treated as brand colours**.

Third-party embed colours (not brand): Bandcamp player `bgcol=ffffff linkcol=0687f5` (blue), Tripadvisor green badge, Calendly, YouTube.

### 2.6 Brand colour summary for Phase 2 (recommendation, not a final palette)

- **Core identity:** deep forest green **#073F13** + leaf green **#669404** / lime **#7DB20A** + warm sand **#F5DEC6** + white.
- **Heritage accent from the logo/banner:** oxblood/maroon (~#400000) and gold/ochre (from the carved-wood imagery). These are estimates — confirm with the owner whether the maroon wordmark or the greens are the "official" brand colour.
- Lime **#B6F334** is a border highlight only; it fails contrast as text on white and should be used sparingly if at all.
- WCAG contrast (computed from the HEX values): #073F13 on #FFFFFF = 12.14:1 (pass AAA); #073F13 on #F5DEC6 = 9.34:1 (pass AAA); #333333 on #FFFFFF = 12.63:1; #7DB20A on #FFFFFF = 2.55:1 (**fails** even for large text); #FFFFFF on #669404 = 3.62:1 (passes only for large/bold text, AA-large); #B6F334 on #FFFFFF = 1.32:1 (decorative only); ~#400000 on #F5DEC6 ≈ 13.3:1 (estimate colour).

---

## 3. Logo and brand marks

| Item | Status | File |
|---|---|---|
| Header banner containing the "Jelila" wordmark, tagline, collage of photos, Tripadvisor badge, credit-card logos | VERIFIED, 904×160 (theme crop) | `assets/p1-originals/cropped-exquisite-gifts-with-jelila-for-wordpress-3.jpg` |
| Standalone logo / wordmark file (SVG/PNG, transparent) | **NOT FOUND** | — WordPress site-logo is empty (`"logo":{"id":0}` in the public site API). |
| Favicon | **No custom favicon** — the site serves the generic WordPress.com favicon (`s1.wp.com/i/favicon.ico`) and `webclip.png`. | — |
| Social share image (og:image / twitter:image) | Portrait of Jelila, 300×450, with "Jelila Audio" badge overlaid | `assets/p1-originals/messenger_creation_b96a94f0-…-e1754497745952.jpeg` |
| Secondary marks | "Journeys with Jelila" badge, "Online Store" script, Storenvy/Tripadvisor badges (inside menu images) | baked into images |

Logo placement on original: the banner sits at the top of the 904px column directly under the green tab navigation; the site title text is present in the DOM but covered by the banner image.

---

## 4. Other visual identity elements (observed on 1440px desktop)

| Element | Observation |
|---|---|
| Layout frame | Fixed **904px** centred column on a tiled carved-wood background. Three columns: left sidebar ("obar", 192px) + content (500px) + right sidebar (192px). |
| Shape language | White panels with 6px radius; nav "tabs" with 5px top radius; image frames with 1px #DDD border + 4px padding (polaroid-like). |
| Shadows / depth | None beyond the theme's background images; flat. Nav tabs use a white→transparent vertical gradient. |
| Navigation style | Row of green rounded tabs above the banner; hover dropdowns of stacked green blocks (see `screenshots/home__desktop-1440__menu-hover-*.jpg`). |
| Icon style | No icon system. Promo "icons" are photographic JPEG tiles with baked-in text (`sessions-icon-4.jpg`, `packages-icon-2.jpg`, `courses-icon-v2.jpg`, `music-icon5psd.jpg`, `crystals-icon-v1.jpg`, `remedies-icon-v2.jpg`, `gift-icon-v9.jpg`). Emoji (✨🌿🌟❓🌸🎧) are used as bullets in recent content. |
| Image treatment | Mixed: candid portraits of Jelila, flyer-style graphics with heavy text, product shots of crystal necklaces, sacred-geometry artwork, stock-like lifestyle photos (e.g. `woman-celebrating-birthday-balloon-27368902.jpg` — filename suggests a stock ID; licensing unknown). Many images are left/right floated small thumbnails (100–468px displayed). |
| Decorative motifs | Balinese carved-wood/gold texture, sacred geometry (Metatron's Cube, Flower of Life), rainbow chakra colours, crystals, butterflies, "blossoming" imagery. |
| Recurring brand phrases | "Exquisite gifts for your soul", "Be the peaceful, beautiful presence that you are!", "Blossoming Hearts Desires", "Living in Delight", "For your happy life", "Journeys with Jelila", "A Real Healer", "Peaceful, Trusted & Wise". |
| Tone / personality | Warm, spiritual, personal first-person voice ("I will help you"), playful and whimsical ("businesslike angel-fairy", "pink lemon cloud with gold stardust"), testimonial-heavy, sales-forward (many "Buy Now", "Book Now", "Join"). Mix of grounded credentials (17 years IT project management, resorts, magazines) and esoteric topics (Annunaki, Lemuria, Pleiadian codes). |

## 5. What to carry forward vs. leave behind (for Phase 2)

Carry forward: the greens + sand palette core, a maroon/gold heritage accent, the "Exquisite gifts for your soul" positioning, real photography of Jelila, sacred-geometry and crystal imagery used sparingly, the warm personal voice.

Leave behind: the 904px three-column frame, 100+ sidebar promo widgets, tiled background, text-in-image tiles, inline ad-hoc colours (#FF6600, #333399, #0000FF…), repeated link rows, polaroid borders on every image.
