# 02 — Page & Route Inventory

- **Complete route list (all 245 sitemap URLs + archive types), one row each, with classification and recommendation:** `data/route-inventory.csv`
- **Verbatim content per route:** `content/pages/*.md`, `content/posts/*.md`
- **HTTP status of every route:** `data/route-status.json` (all 245 → 200 OK on 2026-10-27)
- **Inbound links pointing at routes that are not in the sitemap (legacy slugs, 404s, wrong redirects):** `data/legacy-internal-link-targets.csv`

Recommendation vocabulary: **IMPLEMENT** (build in Phase 2) · **MERGE / CONSOLIDATE** (fold content into another route) · **MIGRATE** (bring over as journal article) · **LEGACY** (do not rebuild; keep URL for redirects only) · **REVIEW** (owner decision needed).

Counts across all 245 routes: LEGACY 135 · MIGRATE 55 · CONSOLIDATE 20 · IMPLEMENT 19 · MERGE 15 · REVIEW 1.

---

## 1. Main navigation (verified from DOM `ul#menu-menu-jelila`, desktop hover dropdowns)

| Top tab | Destination | Dropdown items → destination |
|---|---|---|
| **Home** | *(no href — `<a>` without link)* | Welcome! → /members/ · Best Spiritual Healer in Ubud Bali → /spiritual-advisor-ubud-bali-and-online/ · Journeys with Jelila – 'A Real Healer' ♥ – Singing your soul into harmony → / · Jelila – Spiritual Teacher in Asia Ubud Bali, Online → /jelila-beloved-healer-…-author-of-9-boo/ · What's My Why? → /why/ |
| **Reviews** | /reviews-testimonials-tripadvisor-comments-jelila-spiritual-soul-healer-ubud-bali/ | Press Reviews → /press-reviews-jelila-spiritual-healer-ubud-bali-www-jelila-com/ |
| **Sessions** | /sessions/ | The Reprogramming → /healing-change-your-life-fast/ · The Gift of Harmony – Complete Life Change → /gift-of-harmony-work-treadmill-life-balance-jelila/ · Healing Sessions → /jelila-is-a-beloved-healer-…-online/ (2026 menu) · Packages → /packages/ · Useful Links & Freebies → /useful-links-free-download-…-2026/ · Biohacking Healing Journey – What is it? → /http-jelila-com-biohacking-healing-journey-what-is-it/ · Burnout to Break-through → /2025/09/27/✨-a-new-kind-of-therapy-for-burnout-…/ (post) · Trauma Resolution (Gentle Yet Permanent) → /2025/08/22/🌿-trauma-release-in-ubud-…/ (post) |
| **Vibes** | /shamanic-healing-music-guided-meditation-cds-…/ | Courses → /courses-with-jelila-…/ · Chakra Balancing → /chakras-chakra-balancing-how-light-language-…/ · Are Your Chakras Blocked? → /is-your-aura-in-a-good-state-…/ · What Colours are in your Aura? → /2010/10/07/chakras-how-light-language-…/ · What Sacred Shapes are in your Aura? → /chakras-wheels-of-colour-…/ · What Crystals balance my Chakras? → /2014/05/25/what-crystals-balance-my-chakras-…/ · Sound Healing → /sessions/ · Sacred Geometry → /sacred-geometry/ |
| **Store** | /store/ | The Yoga Chord – a Rainbow of Chakra Balancing Crystals → /2014/06/11/… · What Crystals Open your Third Eye Chakra? → /2014/06/03/… · Which Crystals can relieve pain…? → /2014/09/30/… |
| **Contact** | /contact-jelila-spiritual-soul-healer-ubud-bali-online/ | Privacy Policy → /privacy-policy/ |
| **Blog** | /blog/ (stub page, no post list) | Confusion Buster → /2014/07/08/… · How to find your Soulmate → /2020/08/06/… · Crystal Healing Necklaces → /heres-a-clean-seo-friendly-slug-…/ · Your Inner Child & Your Throat Chakra. → /2018/09/25/… · Open your 3rd Eye → /crystal-eyemask-…/ · Articles by Jelila → /category/articles-by-jelila/ |
| **Free** | /free-download-jelila-pdf-mp3-jpeg-etc/ | Free Download Jelila PDF MP3 JPEG etc – Great Free Stuff! → /http-jelila-com-usefullinks/ · Your Free Training Video → /free-training-video-reprogramming-…/ |
| **Quiz** | **external** jelilahealing.storenvy.com/quiz-how-advanced-are-you-spiritually | How Spiritually Advanced are You? / What Colour is your Heart Chakra Today? / What's Your Spiritual Style? / What Chakra Crystal Colour are You? → Storenvy pages · Are You a Master Manifestor? → uquiz.com |
| **Books** | /books-by-jelila/ | — |
| **After The Gift of Harmony by Jelila** | /after-the-gift-of-harmony-by-jelila/ | — |

Observations: 11 top-level items (one is a long article title); the "Home" tab has no link; 2 dropdown items point to blog posts; "Quiz" leaves the site; "Sound Healing" points to /sessions/; dropdowns are hover-only (no click/tap toggle observed) — see `06`.

Secondary navigation systems on every page: in-content link row (Online Store · Healing Menu · Packages · Contact · Reviews · To Book · Join · Books) repeated up to 5×; left + right sidebars with **108 widgets** (`06 §3`); theme search box; RSS links.

---

## 2. Shared layout (every route)

`#container` 904px fixed → `#header` (tab menu + 904×160 banner + RSS/search strip) → `.pagewrapper` [ left sidebar `.obar` 192px | content `.wrapper` 500px | right sidebar `.sidebar` 192px ] → `#footer` ("Blog at WordPress.com. WP Designer.") → cookie bar + WordPress.com "Subscribe" action bar (fixed bottom).
Because the sidebars are ~25,000px tall, **every page is ~26,000px tall at 1440px**, even short ones (Blog stub: 47 words → 26,262px page).

---

## 3. Key routes in detail

Format: **Route · status · type · purpose** → sections in original order → retain → assets → interactive → responsive → SEO → dependencies → risks → recommendation.
Desktop screenshots: `screenshots/<name>__desktop-1440__fold.jpg` and `__full.jpg` (first 9,000px).

### 3.1 Home — `/` (WP page 3981) · 200 · Homepage
- **Purpose:** introduce Jelila, push booking (WhatsApp/Calendly), promote everything.
- **Sections (order):** portrait thumbnail + link row → welcome paragraph with WhatsApp number → "30 years" line → Bandcamp player (session explainer MP3s) → venues/methods paragraph → Bandcamp player → reviews collage image (links to WhatsApp) → long "down-to-earth / corporate" paragraph → stuck/overwhelmed paragraph + payment note → Biohacking image → **"Menu" (H3)** with 2023–24 brochure image → Tripadvisor quote block → "Book Now" → specialises line → Bandcamp library player → whimsical "pink lemon cloud" paragraph → Biohacking Healing Journey promo ×2 with images → YouTube client-testimonial playlist → author block (book links) → magazines/venues/press quotes → quiz promo → Biohacking repeat → online store link → Tripadvisor image + bullet → join-list image → flyer/menu/email links → "How to decide" + Bandcamp → quiz H5 + image → review-link paragraph → YouTube playlist (repeat) → store/package tiles → "POPULAR PICKS" (4 services ×2 repeated) → testimonial H3 → menu download links → link row → 2023 menu image → 2013 PDF cover → 7 legacy promo tiles (staging links) → long keyword H3 → join image → Indonesian-language link (broken image) → video/article links (staging) → spiritual-style tiles ×2 sets → bio blurb + testimonials (repeated) → phone/email H3s → **FAQ (11 Q&As)** → Revivo sound-healing photo → link row.
- **Retain:** welcome/positioning, WhatsApp + Calendly, online availability, venues/press, author/music summary, Biohacking teaser, real testimonial quotes, all 11 FAQs, payment methods (after confirmation).
- **Assets:** og portrait `messenger_creation_…jpeg`; `best-healer-in-ubud-jelila-reviews.jpg`; `jelila-sound-healing-revivo-guitar-ubud.png`; biohacking images (2023/09); 2023-24 brochure `a4-jelila-healing-brochure-23-jun-2023-2024.jpg`; `photo-17-08-23-06.49.35.jpg` (Self-Love audio book); `816fb799-…jpeg`. 53 content images total.
- **Interactive:** 4× Bandcamp players, 2× YouTube playlist embeds, links to Storenvy/Calendly/WhatsApp/Mailchimp/Tripadvisor, comments form ("One Response", "Leave a Reply").
- **SEO:** title "Jelila – Spiritual Healer & Sound Journey Guide in Bali | Transformative Healing • Chakra Journeys • Light Language"; meta description begins with the link row; page H2 is a 190-character keyword title.
- **Risks:** 3,062 words; 60 links to dead `atomic-temporary-5969783.wpcomstaging.com`; 6× "Reviews" links into the WordPress admin editor (`wordpress.com/page/spiritualhealerbali.com/3981`); 1 broken image (Indonesian flag via staging domain); conflicting years (25/28/30) and book counts (5/6).
- **Recommendation:** IMPLEMENT as a concise homepage. FAQ block → dedicated FAQ section.

### 3.2 About / Bio — `/jelila-beloved-healer-has-30-years-…-author-of-9-boo/` (page 2) · 200
- **Purpose:** biography and credentials. In Home dropdown as "Jelila – Spiritual Teacher in Asia Ubud Bali, Online".
- **Sections:** link row → store image + **"Online Store: Payment not working June 2026"** notice → Tripadvisor PDF link → portrait tile → "Journeys with Jelila" intro (30-year practice) → mailing list tile → creator/author paragraph (5 books, 12 necklaces, 14 CDs) → Gift of Harmony / Alien Wedding paragraph (21-year) → residencies & magazines → music paragraph → Reprogramming paragraph → services list (Subconscious Mind Reprogramming, Negativity Clearing, Energy Healing, Sound, Crystal, Past-Life Regression, Soulmate Love Healing, Soul Retrieval, Heart Chakra, Matrix Activation, Light Language Grids, Channelling, Reconnective, Inter-Dimensional Journeys, Aura reading, Chakra Balancing, Yoga) → Power of Crystals / Alien Wedding → background (English, 17 yrs IT PM, yoga in London, Advanced Light Language) → 12 short testimonials → repeated bio blurb → spiritual-style links.
- **Retain:** background/credentials, residencies & press, services list, testimonials (deduped).
- **Assets:** `jelila-icon3.jpg` (1938×2218 portrait w/ text), `dsc02837-adj-hi-res3.jpg`, `gift-book-n-cd-set.jpg`, `capture.jpg` (Alien Wedding).
- **Risks:** URL slug truncated ("…author-of-9-boo"); many staging and Etsy links.
- **Recommendation:** IMPLEMENT as `/about` (merge "What's My Why?" — 5 numbered reasons, Dec 2013).

### 3.3 Sessions — `/sessions/` (page 4493) · 200 · primary service & price page
- **Sections:** link row → 2013 PDF menu cover ("Soulmate Love Reading is now US$210") → store tile, credit-card image → link row → flyer / Tripadvisor PDF downloads → Tripadvisor badge → **2026 menu image** → **Booking instructions** (choose session; MP3s; "every session is beneficial"; Calendly steps incl. 'China Singapore Perth' timezone; prepay to hold) → WhatsApp → intro H4 + quote strip → Online clients (Zoom/WhatsApp) → Soulmate Love Aura Reading (description, $210, General Aura Reading 40 min $60) → secure payment image → Storenvy shipping-address note → Chakra Balancing ($80) → "5 Popular Sessions" list → The Reprogramming / Signature Session ($300/$150) → Detox packages link → The Gift of Harmony ($1,800) → Chakra (repeat) → 5 Popular Sessions (repeat) → Past-Life Reading $95 / Journey $165 → Light Language Grids $45/$195/$395 → testimonials → crystals necklaces → venues/press + Amana Virani → 2013 flyer → "Previous Menu" **legacy block repeating all of the above with older prices** (e.g. Soulmate 40 min $40) → spiritual-style tiles.
- **Retain:** booking instructions, online-session note, service descriptions, current prices (confirm), testimonials.
- **Assets:** `menu-jelila-best-healer-ubud-and-online.jpg` (2026), `cover-v5.jpg`, `intuitive-healing.jpg`, `2238-smaller.jpg`, `soulmate-love-aura-reading-…jpg`, `past-life-1-5hr.jpg`, `the-gift1.jpg`, `the-reprogram-2-hr-signature1.jpg`, `composite-neckls-line-…jpg`.
- **Risks:** "Queries? Call or sms…" repeated ~12×; legacy phone +62 8585 735 4228; `wa.me/62` broken links; duplicated price blocks with conflicting values; "3 Days" vs "4 Days".
- **Recommendation:** IMPLEMENT as the single source of truth for offerings + prices (text, not image).

### 3.4 Healing Menu 2026 — `/jelila-is-a-beloved-healer-…-online/` (page 12341) · 200
- **Sections:** link row → intro + WhatsApp + Calendly + session-type guidance → **2026 menu image** → Bandcamp player → booking links (Jelila / Biohacking Calendly) → WhatsApp, Storenvy, Instagram → payment methods (card, cash, WISE) → online sessions note → link row.
- **Recommendation:** MERGE into Sessions (its unique facts: WISE transfer, two Calendly links, Instagram).

### 3.5 Packages — `/packages/` (page 4464) · 200
- **Sections:** flyer/menu links → link row → intro → NEW PACKAGES: 'Not Sure What to Book' Package 1 ($544.50) → Detox Support 1 ($450) → Detox Support 2 ($957) → '5 Days in Ubud' ($702) → '10 Days in Ubud' ($940.50) → 'Ubud Dreaming' 11×1h ($950) → Stop Negativity Course / Gift of Harmony ($1,800, "4 day course, 2 hours per day") → 2015–2017 summary (Love Healing $1,148, General $1,499, Individual $383, Starter $704, GoH $1,800 / $1,908) → Reprogramming packages (£300 [sic], $850, …) → testimonials → old WhatsApp + **Skype JELILA2255** → bio blurb (repeat) → tiles.
- **Risks:** package arithmetic uses superseded unit prices; mentions partner retreats (Ubud Sari, One World Retreat) — current status unknown.
- **Recommendation:** REVIEW with owner; if packages still offered, show 3–4 as cards within Sessions.

### 3.6 The Reprogramming — `/healing-change-your-life-fast/` (page 7345) · 200
- **Sections:** images + list/PDF/Tripadvisor links → link row → "You are amazing – and your belief system…" → Bandcamp → "teaspoon" metaphor → **REPROG / THE REPROGRAMMING™** explanation → Reprogramming Packages (1×2h **£300** [currency error], 6×1h $850, 6×2h $1,200, GoH **$1,8o0** [typo], 12×2h $3,600, 22×2h $6,864) → raw `[gigya …]` shortcode (broken video) → garden metaphor (4 areas) → Gift of Harmony fast track → teaspoons pros/cons → … → sign-up (11-minute training video) → old phones.
- **Recommendation:** IMPLEMENT as offering detail; keep the method explanation and metaphors concise.

### 3.7 The Gift of Harmony — 4 routes
`/gift-of-harmony-work-treadmill-life-balance-jelila/` (3816, in nav), `/the-gift-of-harmony-by-jelila-radical-life-change-in-only-3-days/` (12994; legacy `/the-gift` redirects here, 142 inbound links), `/http-jelila-com-the-gift-of-harmony-by-jelila-powerful-transformation-course-…/` (13299, price table $50–$2,000), `/after-the-gift-of-harmony-by-jelila/` (14143, 2,813-word "before/after" article, 2026-07, top-level nav item). Plus posts 2025-10-03 and 2026-07-01.
- **Retain:** the 4 inner characters concept, 8 hours over 3 days, $1,800, client quotes (Diana, Xchemaya, Judith, Fifi, Billy), the "after" outcomes (morning energy, inner soundtrack, mental chatter, creativity, relationships, shame…), workshop paper-chain activity, Successful Relationship Transaction.
- **Assets:** `goh-the-gift-of-harmony-by-jelila-brochure-2025-1.jpg`, `the-gift1.jpg`, `the-gift-of-harmony-jelila.png`, `the-feeling-one-…jpg`, `masculine-never-satisfied-…png`, `the-masculine-bullying-the-feminine-…jpg`, `1000258508-1.jpg` (3600×2700 — duplicate `1000258508.jpg` also exists), YouTube `fSuKXB5o_cY`, playlists `PLYJ_Yan0b0bWLoyWSM2X7Wh2Ormpaz_Ir`.
- **Risks:** "Vodpod videos no longer available"; Flash `[gigya]` embeds render as raw text; "3 days" vs "4 days".
- **Recommendation:** one detail page; "After" article → journal post linked from it.

### 3.8 Biohacking Healing Journey — `/http-jelila-com-biohacking-healing-journey-what-is-it/` (10977, in nav) + 11001 + 11378 + posts (2022-03-23, 2022-05-13 review, 2023-09-04, 2023-09-18 "What's near", 2025-10-01)
- **Sections (10977):** questions to reader → what it is (biohacking tech + intuitive & sound healing) → regular use benefits → free Crystal Eyemask with monthly plan → eyemask description → "what people most often say" list → closing.
- **External:** biohackinghealingjourney.com (separate site, 200), calendly.com/biohackinghealingjourney; `/bhj-plan-page`, `/plans/bhj-join` linked but 404.
- **Recommendation:** one offering page linking out to the dedicated BHJ site; confirm location & pricing.

### 3.9 Reviews — `/reviews-testimonials-tripadvisor-comments-…/` (7063) · 200
- **Sections:** H2 title → Tripadvisor PDF + link row → flyer → ~60 short testimonials interleaved with promo images and "Free Download Flyer/Menu" H6 links (×12) → broken `[gigya]` video → Gift of Harmony promo → old phones.
- **Recommendation:** IMPLEMENT `/reviews` with a curated set + Tripadvisor link; merge Press.

### 3.10 Press Reviews — `/press-reviews-…/` (6349) · 200
- **Sections:** Bali Advertiser / Holistic Bali (Alison Bone) article → Simply Her Singapore June 2006 scan → "A New Path to Chakra Meditation" (12 Feb 2012) → Desa Seni Tripadvisor review → About Jelila → magazine scans (Yak etc.) → contact.
- **Assets:** `simply-her-magazine-singapore-june-2006(-edited).jpg`, `yak-mag.jpg`, `jelila-self-love-retreat-ubud-sound-healing.jpg`, `basic-e-brochure.jpg`.
- **Recommendation:** MERGE into Reviews ("In the press").

### 3.11 Contact — `/contact-jelila-spiritual-soul-healer-ubud-bali-online/` (8742) · 200
- **Sections:** round portrait → Tel/WhatsApp +6281339561271 + wa.me → email → link row + bio blurb → spiritual pathfinder quiz tile → tiles → phone/email H3s → mini nav → bio blurb + testimonials → footer image.
- **No contact form, no map, no address, no hours.**
- **Recommendation:** IMPLEMENT a compact contact page (WhatsApp, email, Calendly, Instagram, location once confirmed).

### 3.12 Books — `/books-by-jelila/` (13706) · 200 · cleanest page on the site
- **Sections:** Bandcamp "Listen to Jelila reading from her books" → 7 books (cover + description + Amazon link) with link rows between → talk photo → About the author.
- **Risks:** Reprogramming II uses the same Amazon link as Reprogramming; two covers are low-resolution (146×220, 188×303).
- **Recommendation:** IMPLEMENT `/books`.

### 3.13 Music ("Vibes") — `/shamanic-healing-music-guided-meditation-cds-…/` (4404) · 200 · heaviest page (488 requests, ~12 MB declared)
- **Sections:** join-for-free-MP3 → per-CD blocks (CD 01 Love Travels, CD 02 Goldensong, …): title, Bandcamp embed, cover, track/length, description, "HELPS WITH / LISTEN WHEN", US$22, View CD Back / Add to Cart → repeated join tiles.
- **Duplicate:** `/download-free-meditations-…/` (7220) has the same 8 embeds; `/sound-healing-music-by-jelila/` (11962) short.
- **Recommendation:** IMPLEMENT `/music` with a few embeds (lazy-loaded) + link to Bandcamp.

### 3.14 Courses — `/courses-with-jelila-…/` (3880) · 200
- **Sections:** GoH course → Sacred Geometry course → Crystal Healing course (+ testimonial Shanti) → Sacred Geometry Aura Reading (13 shapes × 20 colours = 260 permutations) → Meditation course (4 kinds) → Crystal Healing Remedies course (18 bags) → "Also available" list (Energy Healing, Creativity, Shamanism, Intuitive Energy Healing, The Business of Healing, Sound Healing) → email for details.
- **Recommendation:** IMPLEMENT as a short section/page; no prices published — confirm which courses are current.

### 3.15 Store — `/store/` (8658) · 200
- **Sections:** tiles linking out: 12 Crystal Healing Necklaces, 14 Shamanic Healing Music Journey CDs, 18 Crystal Healing Remedies, Packages and Courses, Sessions, Detox Packages, Light Language Grids → credit-card note → old phones → join list → reviews/bio links.
- **Recommendation:** outbound "Shop" link (Storenvy) — but note payments reported broken (June 2026).

### 3.16 Free resources — `/free-download-jelila-pdf-mp3-jpeg-etc/` (9609, nav "Free") + duplicates 11991, 3640, 12366, 8553
- **Sections (9609):** free MP3 "My Father's Love" → free Tantra talk MP3 → quiz → 1-page menu flyer → booking/pay/email/tel → 60-page PDF menu → Tripadvisor PDF → GoH PDF → Crystal necklaces reference → free MP3 downloads ("As I Sit", "My Father's Love").
- **Recommendation:** one `/free-resources` page (or section) with current items only.

### 3.17 Blog — `/blog/` (10965) · 200
- 47-word stub: "Click the 'Blog' tab at the top of her website to read them." **No post listing exists** on the site; posts are reached via sidebar Recent Posts / Archives dropdown / category links.
- **Recommendation:** IMPLEMENT a simple journal index (≤10 images on first view) with the 2025–2026 posts; legacy posts optional.

### 3.18 Category archive — `/category/articles-by-jelila/` · 200
- Full-length posts stacked (37,877px tall). No canonical tag. **LEGACY**.

### 3.19 Representative post — `/2025/08/22/🌿-trauma-release-in-ubud-past-life-journey-…/` · 200
- Title, content (573 words, 1 image), share buttons, likes, comments; canonical present. Slug has URL-encoded emoji and a duplicated date (`/2025/08/22/2025-08-22-…`).

### 3.20 Privacy Policy — `/privacy-policy/` (10444) · 200
- Generic template (2020) naming **PT Hidup Indah Bahagia** and **info@mybeautifullife.com**, Californian privacy sections. **REVIEW** (legal).

### 3.21 404 — `/this-route-does-not-exist-audit/` · 404
- Theme 404 inside the full layout (sidebars still render). Note that WordPress **guesses redirects** for unknown slugs (e.g. `/about` → an unrelated 2009 crystal post), so many "broken" legacy links silently land on wrong pages instead of 404.

---

## 4. Secondary page groups (summary)

| Group | Routes | Recommendation |
|---|---|---|
| Sacred geometry / chakra / aura articles (pages) | 8752, 8749, 8745, 8323 (=6560), 9282, 6061, 9488, 6297, 5710, 13398, 13315, 8715 | MIGRATE best 4–6 as journal articles; others LEGACY |
| Crystal products | 4537 (necklaces), 4480 (remedies), 10984 (eyemask) | Fold into Shop/Crystals section or LEGACY; fix AI-artefact slugs via redirects |
| Quizzes | 11607, 11592, 11604, 11600, 11598, 9651, 11994 | LEGACY — live quizzes are on Storenvy/uQuiz |
| 2013 events | 8280, 8219, 8329, 8311, 8446, 8384 | LEGACY |
| Utility | 12003 thank-you, 10748 account, 10750 login, 9073 art, 8249 folder, 7229 payment, 8070 cc-guide, 8522 stub | LEGACY / do not implement |
| Book/process | 7059 Alien Wedding, 13232 free chapters, 7050 Reprog (legacy) | MERGE into Books / offering pages |

## 5. Hidden / unpublished / inaccessible

- Drafts, private pages and the media library are not publicly accessible (REST `media` and `menus` endpoints return 401). Nothing unpublished was inspected.
- `news-sitemap.xml` is empty.
- Pages reachable only by direct link (not in nav): most of section 4, all SEO landing pages (9474, 13315, 13398), Gift of Harmony variants, Biohacking variants.
- Uncertain routes: anything under `atomic-temporary-5969783.wpcomstaging.com` (dead — redirects to wordpress.com "typo" page) and `spiritualhealerbali.com/*` (every path 301→ jelila.com **homepage**, so deep links lose their target).
