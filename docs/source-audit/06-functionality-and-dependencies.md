# 06 — Functionality & Technical Dependencies

Verification levels: **Observed** (visible) · **Interaction tested** (we clicked/hovered/requested it) · **Functionality verified** (intended outcome confirmed) · **Partially verified** · **Unverified**.
No form was submitted, no booking was made, no purchase was attempted, and no CAPTCHA was bypassed.

## 1. Platform

| Item | Finding | Level |
|---|---|---|
| CMS / host | WordPress.com (simple site, not Atomic/Jetpack-connected), site ID 5969783, primary domain jelila.com, also `jelila.wordpress.com`; `spiritualhealerbali.com` 301-redirects every path to the jelila.com **homepage** | Functionality verified (headers, public API, redirects) |
| Theme | **Digg 3 Column** (`pub/digg3`), classic (non-block) theme; Custom Colors + Custom Background enabled; Custom CSS present but empty (only the default comment) | Verified |
| Responsive | No `<meta name="viewport">`; fixed 904px container | Verified |
| Content API | Public WP REST API (`public-api.wordpress.com/wp/v2/sites/jelila.wordpress.com`) returns all 72 pages, 173 posts, 153 categories, 1,027 tags. Media library and menus endpoints require auth (401) | Verified |
| Sitemaps | `/sitemap.xml` (245 URLs, image sitemap entries), `/news-sitemap.xml` (empty); robots.txt standard WordPress.com | Verified |
| Bot protection | WordPress.com served a "Confirm you are human" interstitial to headless mobile/tablet emulation after ~25 page loads | Observed |

## 2. Features

| Feature | Where | Behaviour / destination | Level | Phase 2 consideration |
|---|---|---|---|---|
| Main navigation (11 tabs + dropdowns) | header, every page | CSS hover dropdowns (stacked green blocks); "Home" tab has no href; no mobile menu exists | Interaction tested (hover screenshots for Sessions/Vibes/Quiz) | Rebuild IA (see `09`); keyboard/touch access was not verifiable on original |
| In-content link row | ~every page, up to 5× | static links | Observed | Replace with real nav/CTAs |
| **Booking — Calendly** | Home, Sessions, Contact, menus | `https://calendly.com/jelila` (200); separate `https://calendly.com/biohackinghealingjourney` (200). Instructions: pick 'China Singapore Perth' timezone, choose day/time, enter email + session, then **prepay** | Partially verified (pages load; no booking made) | Link out or embed Calendly (third-party script); keep the prepay instruction only if confirmed |
| **WhatsApp** | everywhere | `https://wa.me/6281339561271` → api.whatsapp.com (200). Malformed variants exist (`wa.me/62`, `wa.me/628133956127`, `wa.me/81339561271`, `https:/wa.me/…`) | Functionality verified for the correct link; malformed ones verified wrong | Single canonical WhatsApp link, optional prefilled text (one existing variant: "Hi Jelila I found you on your website!") |
| Email | everywhere | plain text `jelila@jelila.com`, some `mailto:` | Observed | Deliverability unverified |
| Contact form | — | **None on the site** | Verified absent | Do not invent a backend; if a form is wanted, a form service must be chosen in Phase 2 |
| Online store | Store, Sessions, menus | `jelilahealing.storenvy.com` collections (200). Legacy Etsy shop `etsy.com/shop/JelilaHealing` (403 to bots). Bio page: **"Online Store: Payment not working June 2026"** | Partially verified (store pages load; checkout not tested; owner notice says payment broken) | Treat as external; confirm with owner which store is live |
| Payments stated | Home, menu page, menu image | Credit card (not Amex), cash, PayPal, WISE transfer, Storenvy online pay | Unverified | Owner to confirm current methods |
| Newsletter / mailing list | "Join" links, sidebar | Mailchimp: `eepurl.com/kPeqf`, `GnG9v`, `icHlw` → `wordpress.us2.list-manage.com/…id=4dcb0e94d2`; `eepurl.com/Ls8xD` → `jelila.us2.list-manage.com/…id=d121f5a7c4` (two different lists). Also a WordPress.com "Subscribe" (follow) button; site has 86 WP subscribers | Partially verified (signup pages load; no signup made) | Confirm which list is current; link or embed one |
| Quizzes | nav "Quiz", sidebar | Storenvy-hosted quiz pages and `uquiz.com/quiz/O3qkQG/…` (200); local WP quiz pages are empty shells (`uquiz.com/embed.js`) | Partially verified | Link out, or drop |
| Audio | many pages | 24 Bandcamp album/track embeds (iframes, `bandcamp.com/EmbeddedPlayer`); jelila.bandcamp.com | Observed (players render) | Lazy-load / click-to-load embeds; heavy |
| Video | various | YouTube embeds/playlists (37 distinct refs), 2 VideoPress embeds, **Flash-era `[gigya …]` / `youtube.com/v/` shortcodes that render as raw text** | Observed | Use privacy-friendly lite embeds; rebuild only current videos |
| Gallery lightbox | content images | Jetpack Carousel (`jp-carousel`) | Observed (markup present) | Optional |
| Comments | pages & posts | WordPress comments + Jetpack comments; homepage shows "One Response" + "Leave a Reply" | Observed | Not needed for a static rebuild unless requested |
| Likes / sharing | posts | Jetpack likes, sharing buttons | Observed | Optional |
| Search | header + 3 sidebar widgets | WordPress search `/?s=` (returns 200) | Interaction tested (request only); result quality unverified | Probably drop or replace with journal filter |
| Archives / categories | sidebar | month dropdown, category list (153), Top Posts widgets (14) | Observed | Do not rebuild |
| Cookie notice | fixed bottom | Jetpack EU cookie-law widget ("Close and accept") | Observed | Replace with a compliant notice only if trackers remain |
| Analytics | global | WordPress.com Stats (`stats.wp.com/w.js`), `bilmur` RUM, **Statcounter** widget | Observed | Owner to choose analytics for new site |
| Social | sidebar, meta | Facebook Page plugin iframe, Twitter/X @JelilaJelila, Instagram @online_healer, Gravatar hovercards, LinkedIn (old) | Observed | Simple icon links |
| Translation | Home | Single link "Klik di sini untuk Bahasa Indonesia – Penyembuhan Kristal" to a Storenvy Indonesian collection; image broken | Observed | No translation system exists |
| Downloads | Free, Sessions, Reviews | PDFs on WordPress.com uploads (`data/documents-and-downloads.csv`) | Verified (HEAD 200, sizes) | Host only current documents |
| Separate business site | Biohacking pages | `biohackinghealingjourney.com` (+ `/bookings/`), `biohackinghealing.com` | Pages load (200) | Link out |
| Courses platform | sidebar | Teachable: `jelila-healing-for-your-happy-life.teachable.com/p/create-your-dreams-manifestation-mastery` (via bit.ly/dreamscourse) | Page loads (200) | Confirm if still offered |
| Amazon / Kindle | Books | author store B00BNPD78S, dp links (200) | Verified | Keep as outbound links |
| Tripadvisor | many | Attraction_Review-g297701-d7113538 (3 URL variants) | Unverified (403 to automated requests) | Use one canonical URL; consider a static badge, not the widget |
| Maps | — | **No map embed anywhere** | Verified absent | Add only if owner confirms a public address |
| Login / account | /account/, /login-2/ | empty pages (membership remnant) | Verified empty | Do not build |

## 3. Sidebars (rendered on every page) — `data/sidebar-widgets.json`

108 widgets: 74 image widgets, 14 Top-Posts, 9 text, 2 search, 2 pages lists, 2 recent posts, 1 archive dropdown ("Blog Jelila"), 1 category list, 1 Facebook likebox, 1 block, 1 cookie widget. Titles are mostly questions ("Stressing Out?", "Feel stuck?", "Metatron's Cube?", "Dude?", "Zappy?", "Hot?", "Get it on?"). Notable content inside widgets:
- Coupon "FREESHIPINDO" (free shipping) and "Flower of Life Earrings $19".
- "Get The Gift of Harmony Book", "Get my Metatron's Cube Kindle Ebook", "THE UGLY GRUB – Inspiring Kids Book", "Alien Wedding Book".
- "Free Download: My Detail Healing Menu (6mb)".
- "Create your Dreams – Become a master manifestor" (Teachable course).
- A text widget with an obsolete `[gigya … youtube …]` Flash shortcode.

These sidebars cause ~200 image requests and ~4.4 MB on **every** page, even the 7-word Thank-You page.

## 4. Broken / misdirected links (verified)

| Issue | Count | Example |
|---|---|---|
| Links to dead staging domain `atomic-temporary-5969783.wpcomstaging.com` (→ wordpress.com "typo" page) | **1,203 links on 45 routes** | Home tiles, Sessions, Bio |
| "Reviews" links into WordPress **admin editor** `wordpress.com/page/spiritualhealerbali.com/3981` (requires login) | 9 links on 3 routes | Home, Bio, Healing Menu 2026 |
| Legacy slugs that 404 | 126 distinct paths (e.g. `/healing-music` — 103 links; `/reviews-comments-jelila`; `/home`; `/bhj-plan-page`; `/plans/bhj-join`; relative Bandcamp `/album/...` paths) | `data/legacy-internal-link-targets.csv` |
| Legacy slugs that **resolve to the wrong page** (WordPress slug guessing) | e.g. `/about` (199 links) → 2009 crystal-remedies post; `/crystals` (101 links) → 2014 "crystals for home" post; `/crystal-remedies` → 2009 post | same CSV |
| `spiritualhealerbali.com/*` deep links all land on the homepage | 28 links | `/reprog/`, `/jelila-healing-menu/`, `/contact` |
| Malformed hrefs (curly quotes, `&#8221`, `http://Https://…`, double URLs) | dozens | `…/527494-reprogramming-sessionshttp://…` (404) |
| Dead third parties | fileden.com MP3 (403), fineartamerica artworks (410), amzn.com title links (404), LinkedIn (999) | `data/external-link-status-sample.json` |
| Images not loading on render | `the-reprogramming-promo-poster-orange.jpg` (404), Indonesian flag via staging domain | — |
| Content images returning 404 | 27 of 824 catalogued | `04-assets-manifest.csv` (availability column) |

## 5. Third-party scripts loaded on every page (observed)

WordPress.com core + Jetpack bundles (`/_static/…`), Gravatar hovercards, Jetpack Carousel, Jetpack Comments, Jetpack Likes (`widgets.wp.com/likes`), sharing, CoBlocks loader, Facebook SDK (likebox), WordPress.com stats `w.js` + `bilmur.min.js`, Statcounter, emoji script, speculation-rules prefetch. Bandcamp/YouTube iframes on content pages.

## 6. Implications for Phase 2

- The new site is a **static front end**; there is no backend functionality to port. All transactional functions are external: Calendly, WhatsApp, Storenvy/Etsy, Mailchimp, Bandcamp, Amazon, Teachable, biohackinghealingjourney.com.
- Decide with the owner: which store (Storenvy vs Etsy) and whether its payment works; which Mailchimp list; which Calendly event types; whether quizzes and the Teachable course remain.
- Plan a **redirect map** from the old WordPress URLs (pages, date-based posts, legacy slugs like `/the-gift`, `/about`, `/healing-music`, `/crystals`) to new routes; otherwise inbound links and SEO equity are lost. If the domain moves off WordPress.com, the old URLs stop existing.
- Do not claim online payment, booking confirmation or newsletter delivery works until tested with the owner.
