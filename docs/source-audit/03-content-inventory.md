# 03 — Content Inventory (Content Preservation Reference)

This document tells Phase 2 **where the real content lives** and **which facts matter**. It does not rewrite copy.

## 1. Where the verbatim content is saved

| Location | What it contains |
|---|---|
| `content/pages/<wp-id>-<slug>.md` (72 files) | Every published WordPress page, converted from the REST API's rendered HTML to Markdown. Front-matter records source URL, WP id, published/modified dates, word and image counts. Text is **verbatim** (spelling, emoji and errors preserved). Images keep their original-size URLs; embeds appear as `[EMBED: url]`. |
| `content/posts/<date>-<slug>.md` (173 files) | Every published blog post, same format, plus categories. |
| `data/routes-content.json` | Per route: title, dates, word count, image count, headings outline, embeds, prices / phones / emails detected, excerpt, categories, featured image, path to its content file. |
| `data/offerings-and-prices.json` | Services, durations and prices transcribed from the 2026 menu image and the Sessions page, **with every conflict listed**. |
| `data/embeds.json` | All Bandcamp, YouTube, VideoPress and other embeds, mapped to pages. |
| `data/external-links.csv` / `data/internal-links.csv` | Every link in content (9,470 total) with source page and anchor text. |
| `data/documents-and-downloads.csv` | Linked PDFs/MP3s with HTTP status and size. |
| `data/seo-and-load-key-pages.json` | `<title>`, meta description, canonical, H1 and load metrics for 23 key routes. |

Not captured: comment threads (only counts observed), sidebar widget text beyond titles/teasers (listed in `06`), Storenvy/Etsy/Bandcamp/Amazon product data (external sites).

## 2. Core business facts (as stated on the site)

| Fact | Value as published | Source(s) | Status |
|---|---|---|---|
| Name / brand | **Jelila** (single name). Site title: "Jelila – Spiritual Healer & Sound Journey Guide in Bali"; tagline "Transformative Healing • Chakra Journeys • Light Language" | `<title>`, og tags | Verified (live) |
| Role descriptors | Spiritual (soul) healer, sound healer / healing singer, intuitive healer, spiritual teacher, author, "Dynamic Wellness Facilitator", "Visionary Soul Mentor" | Home, Bio, menu image, posts | Verified (multiple variants) |
| Location | Ubud, Bali, Indonesia + online worldwide. Older text also mentions France, Singapore, Australia. | Home, Bio | Verified text |
| Physical address | **Not stated for Jelila's own sessions.** The Biohacking Healing Journey is described (2023 posts) as "31 Jalan Sukma Kesuma, Tebesaya, Ubud", upstairs at Ubud Fairy Village, "pink shop next to Tebesaya banjar". An old page mentions "Fashion stores, directly opposite Kafe, Jalan Hanoman, Ubud". Privacy policy names "PT Hidup Indah Bahagia, Jl. Raya Semer… Kerobokan". | posts 2023-09-18, 2023-09-04; privacy-policy | **Needs owner confirmation** |
| Phone / WhatsApp (current) | **+62 813 3956 1271** (formatted variously: +6281339561271, +62 81339561271, +62 813 395 61271, +62 813-395-61271). wa.me link `https://wa.me/6281339561271` | Home, Contact, Sessions, 2026 menu image | Verified; link resolves to WhatsApp |
| Phone (legacy, still on live pages) | +62 8585 735 4228 and +62 8585 732 6822 ("both mobile") | Sessions, Reprogramming, Packages, Reviews, Vibes, Store | **Outdated? confirm** |
| Malformed WhatsApp links | `https://wa.me/62` (country code only), `wa.me/628133956127` (missing a digit), `wa.me/81339561271` (missing 62), `https:/wa.me/...` (single slash) | Sessions, Home, Gift of Harmony | Verified broken/incorrect |
| Email | **jelila@jelila.com** | everywhere | Verified text (deliverability not tested) |
| Other email | info@mybeautifullife.com (privacy policy only) | /privacy-policy/ | Likely template leftover — confirm |
| Booking | https://calendly.com/jelila (200 OK) | Home, Sessions, Contact | Link verified; booking flow not executed |
| Instagram | @online_healer (https://instagram.com/online_healer) | Home FAQ, 2026 menu | Link resolves |
| Twitter/X | @JelilaJelila | meta tags | Link resolves to x.com |
| Facebook | facebook.com/jelila.jelila (+ likebox widget) | sidebar, posts | Unverified (Facebook blocks automated requests) |
| Tripadvisor | "Jelila Spiritual Healer Ubud" — Attraction_Review-g297701-d7113538 | many pages | Unverified (Tripadvisor returns 403 to automated requests) |
| Online store | jelilahealing.storenvy.com (collections for sessions, packages, books, crystals); legacy Etsy shop "JelilaHealing" | many | Store pages load (200). **Bio page: "Online Store: Payment not working June 2026 so please just browse!"** |
| Music | jelila.bandcamp.com — "17 mp3 sets" / "14 CDs" / "50 albums" (conflicting counts) | Home, Bio, sitemap image title | Verified links; counts conflict |
| Years of practice | "over 30 years" (Home, Bio, FAQ) vs "28 years", "26 year", "25 year", "21 year" | Home, menu image, Bio | **Conflict** |
| Number of books | "6 popular personal development books" (Home) vs "5" (Bio, Home lower) vs "four books" (menu image) vs URL slug "author-of-9-boo…"; Books page lists **7** | | **Conflict** — Books page is the most complete |
| Credentials / background | English; 17 years as international IT project manager with blue-chip companies; studied yoga in London; certified Advanced Light Language practitioner (studied under Amana Virani) | Bio, Sessions | As stated (unverifiable) |
| Venues / press | Master in Residence at The Four Seasons and The Balé (twice); taught at Yoga Barn Ubud, The Westin; appeared at Revivo Wellness Resort; radio in Byron Bay. Magazines: Jakarta Post Weekender, Simply Her (Singapore, June 2006), Her World, That's Shanghai, Yak, Garuda In-flight, Bali Advertiser, Holistic Bali | Bio, Sessions, Press Reviews | As stated; press scans exist as images |
| Trademarks claimed | The Reprogramming™, The Gift… of Harmony™, Polarity Shift™, Judgement Release Process™, Crystal Healing Necklaces™, Crystal Healing Remedies™, The Inner Camino™ | various | As stated |
| Payment | "Credit cards (but not Amex), Cash, or Paypal" (Home); "credit card, online by credit card, cash or WISE transfer" (2026 menu page) | | Conflict (PayPal vs Wise) |

## 3. Offerings and prices

See `data/offerings-and-prices.json` for the full table with conflicts. Summary of the **current published menu (2026 menu image)**, all US$:

| Offering | Duration / price |
|---|---|
| Energetic Enhancements (intuitive Reprogramming, less talking) | $95 / hour |
| Intuitive Healing / Chakra Balancing (crystals, sound, energy) | 1 hr $80 · 1.5 hr $120 |
| Energy Healing | 1 hr $80 |
| The Reprogramming — Signature Session | 2 hr $300 (incl. free healing MP3 worth $22) · 1.5 hr $225 · 1 hr $150 |
| Good To Go (Energy + Reprogramming) | 45 min $95 · 1 hr $120 |
| Deep Reprogramming (ancestral trauma) | 2 hr $440 |
| Light Language Soulmate Reading | 40 min $60 · 1 hr $110 |
| Soulmate Healing | 1.5 hr $220 (Sessions text says **$210**) |
| Past Lives / Trauma Release | 1.5 hr $165 · 1 hr $110 |
| The Gift of Self-Love (programme) | 10 hours over 3–7 days, $2,200 |
| The Gift of Harmony (personal workshop intensive) | 8 hours over 3 days, $1,800 |
| Alien Wedding (programme) | 10 hours over 3–7 days, $2,200 |
| Yoga Chord (1.2 m crystal strand, product) | $220 |

Only on the Sessions page (not on the 2026 image): Light Language Grids $45 / $195 / $395; Past-Life Reading 1 hr $95. Package prices on `/packages/` are built from 2015–2017 component prices — **treat as unconfirmed**.

**Important:** the definitive 2026 prices exist **only inside an image**. Phase 2 should present them as real text, after owner confirmation.

## 4. Navigation labels (main menu, verified from DOM)

Top level: **Home · Reviews · Sessions · Vibes · Store · Contact · Blog · Free · Quiz · Books · After The Gift of Harmony by Jelila**. Full submenu tree with destinations: `02-page-inventory.md §1`.

Repeated in-content link row (appears up to 5× per page): **Online Store · Healing Menu · Packages · Contact · Reviews · To Book / Book · Join · Books**. Note: "Healing Menu" links to the *Free downloads* page, not to the menu page; "Reviews" links to a 2013 testimonial *post*; "Join" goes to a Mailchimp signup.

## 5. Calls to action found (verbatim labels)

"Book Now", "To Book", "BOOK ONLINE", "Online Booking", "WhatsApp Me +6281339561271", "Whatsapp Message Jelila", "Buy Now", "Begin Your Journey", "Join", "Join Free", "JOIN NOW – for Discounts, Tips, and More!", "Get Started Now – Join Free!", "Free Download Menu", "Free Download Flyer", "Download Tripadvisor Reviews PDF", "Listen to a free chapter", "DO JELILA'S QUIZ", "BROWSE IN ONLINE STORE", "Book for Biohacking Healing Journey", "Do The Course", "Read more Reviews", "Click to Find Out". The primary real conversion paths are **WhatsApp** and **Calendly**.

## 6. Testimonials and reviews

- `/reviews-testimonials-tripadvisor-comments-…/` (3,247 words) holds ~60+ short client quotes, first names only (e.g. Kumiko, Wendy, Martha, Shanti, Jacqui, Ellie, Novianna, Shauna, Judith, Nicole, Rachel, Shireen, Nicholas, Terri, Lara…). **Undated**; many appear to originate 2009–2013. Some are repeated verbatim on Home, Bio, Contact (e.g. "Fifi", "Billy", "Natascha", "Anita", "Martha", "Monique", "Ann", "Paul", "Sandra", "Mandy", "Marie").
- Short pull-quotes reused everywhere: 'A Real Healer', 'Peaceful, trusted, and wise', 'Amazing Healer', 'My Western version of Ketut Liyer from Eat Pray Love', 'Simply the best in healing, Jelila gets me the results I want', 'I saved $10,000 compared to normal therapy', 'Like doing 10 years of therapy, in a few hours. Only, it works…'.
- Tripadvisor reviews exist as **screenshots** (`a-real-life-healer-review-…jpg`, `harmonious-healing-…jpg`, `amazing-healer-review-…jpg`, `peaceful-trusted-and-wise-review-…-2015.jpg`, `best-healer-in-ubud-jelila-reviews.jpg`) and a PDF (`jelila-reviews-trip-advisor.pdf`, 1.7 MB).
- 2013 posts `/2013/08/23/jelila-blossoming-hearts-desires-testimonials-…/` and `/2012/10/16/testimonials-and-comments-about-the-gift-of-harmony…/` duplicate review content.
- Video testimonials: YouTube playlist `PLYJ_Yan0b0bVcN10ZeVEoycg2UGDHZ9ZM` ("Clients talk about their experiences with Jelila").
- Press: `/press-reviews-…/` — articles/scans: Bali Advertiser & Holistic Bali (Alison Bone, crystal healing), "A New Path to Chakra Meditation" (blog, 12 Feb 2012), Desa Seni Tripadvisor review, Simply Her Singapore (June 2006), Yak magazine.

**Rule for Phase 2:** use only these real quotes with their original attributions; do not add dates, surnames, star ratings or review counts that are not on the source.

## 7. FAQs (verbatim, homepage — the only FAQ content on the site)

Section label on page: "🌟 Homepage FAQ Entries".
1. **What is chakra balancing?** Chakra balancing is a gentle energy healing practice that restores flow and harmony in the body's energy centres. It helps release trauma and invites peace, clarity, and vitality.
2. **Who is the best trauma‑informed healer in Bali?** Jelila is a trauma‑informed healer in Bali with a unique method called Past Life Journey. This process gently resolves entire streams of trauma back to their root without re‑traumatising. The effect is permanent, as once blocked feelings are accepted they no longer trouble you. You do not need to talk about your trauma unless you wish to.
3. **Who is the best healer in Bali and Ubud?** Jelila is a highly experienced healer with 30 years of professional practice in Bali. She offers rapid therapy methods called Reprogramming and Deep Reprogramming, which quickly reach hidden soul issues and bring permanent relief in a gentle, logical, and light‑hearted way.
4. **What is chakra activation?** Chakra activation is a breath‑based practice that opens the body's energy centres, restoring balance and flow. It is included in all sessions, and you will learn it as a tool to use at home to relieve stress and connect with your divine feminine, guiding your life authentically.
5. **How does sound healing help trauma release?** Sound healing uses vibration and frequency to activate the chakras, calm the nervous system, and create flow. The resonance penetrates deeply, easing tension and supporting the body's natural ability to heal after emotional or physical trauma.
6. **Why choose healing in Ubud, Bali?** Ubud is known worldwide as a centre for spiritual healing. At Champuan, the meeting of two rivers creates an energy vortex that extends across Ubud, bringing a deep healing vibe. The sacred environment amplifies transformation and renewal, offering a unique experience unmatched elsewhere.
7. **What can I expect in a healing session?** Sessions combine breathwork, chakra activation and balancing, and intuitive guidance. You will feel relaxed, supported, and empowered to release limiting beliefs while inviting new possibilities.
8. **How do I book a session?** You can connect directly with Jelila via WhatsApp +62 813‑395‑61271 or Instagram @online_healer. You may also book online at calendly.com/jelila. Sessions are available in person and online.

Service-specific FAQ ("🌺 Service‑Specific FAQ (Sound Healing Example)"):
9. **What makes your sound healing unique?** With over 30 years of practice, Jelila blends Tibetan bowls, voice, guitar, and her own journey songs with sacred geometry to create a personalised sound journey that aligns chakras and restores harmony.
10. **How long is a session?** Sessions typically last 60 to 90 minutes, allowing time for deep relaxation, processing, and integration so that you leave feeling peaceful and renewed.
11. **Is sound healing safe alongside medical treatment?** Yes. Sound healing is complementary and can be practised alongside prescribed medication or therapies, supporting holistic recovery.

Note: answers 2–3 contain superlative claims ("the best healer"); answer 11 is a health-related claim. Flagged in `08` for owner review; do not expand them.

## 8. Books (from `/books-by-jelila/`, updated Jun 2026)

| # | Title | Link on page | Cover asset |
|---|---|---|---|
| 1 | The Gift of Harmony | amazon.com/stores/author/B00BNPD78S | `the-gift-of-harmony-look-inside1.jpg` (188×303 — low-res) |
| 2 | The Reprogramming | amazon.com/dp/B00TQWRNDU | `2025/10/1000055399.jpg` (979×1651) |
| 3 | The Reprogramming II | amazon.com/dp/B00TQWRNDU (**same link as #2** — likely error) | `the-reprogramming-ii-by-jelila.jpeg` (146×220 — low-res) |
| 4 | Alien Wedding | amazon.com/dp/1491069643 | `alien-wedding-by-jelila-on-amazon.png` (273×521) |
| 5 | The Gift of Self Love | amazon.com/…/dp/B0CFJ9JJDR | `the-gift-of-self-love-book-a-full-process-guide-by-jelila.png` (285×527) |
| 6 | The Power of Crystals | image link only (store: Storenvy `books-by-jelila`; Amazon dp/1482731231 on Bio) | `the-power-of-crystals-book-…jpg` (362×378) |
| 7 | Metatron's Cube – Remarkable Repository of Sacred Geometry | amazon.com/dp/B00P26S9G4 | `metatrons-cube-remarkable-repository-…png` (370×506) |

Also mentioned elsewhere, not on the Books page: *The Ugly Grub* (kids' book, sidebar), *How to Draw Metatron's Cube* (Kindle, amzn B00US59LA2 — that link 404s). Free audio chapters: Bandcamp album 116068646.

## 9. Music / audio

- jelila.bandcamp.com — 24 distinct Bandcamp album/track embeds across the site (`data/embeds.json`). Most-used: album **3935717766** ("FREE DOWNLOAD… Sound Healing Music & Transformational Audio" — MP3s of Jelila explaining sessions; on Home ×4, Healing Menu 2026), album **116068646** (book chapters), and the 8–12 album set on `/shamanic-healing-music-…/` and `/download-free-meditations-…/`.
- 2010–2011 "CD back" posts (14) describe individual journey CDs (e.g. Love Travels, Goldensong, Feel Good Fast, Law of Attraction, Lute Playin' Man, Spirit of the Land, Magic Book, Gift, Lullaby for the Inner Child, Introductory Journey, I Wonder How I Am The Sun, Lemurian Dreaming).
- Price references: CD/MP3 "worth US$22" (current) vs "$30" (older).

## 10. Blog / editorial

- 173 posts, 2009-01 → 2026-07. By year: 2009:10, 2010:25, 2011:7, 2012:9, 2013:20, 2014:55, 2018:1, 2020:5, 2022:4, 2023:12, 2025:19, 2026:6.
- 116 posts are "Uncategorized"; 153 categories exist, many with 1–3 posts.
- **Recent, relevant editorial (2025–2026, 25 posts)** — e.g. "Trauma Release in Ubud: Past Life Journey…" (2025-08-22), "A New Kind of Therapy for Burnout…" (2025-09-27), "Finding the Best Healer in Ubud, Bali or Online" (2025-10-01), "The Inner Camino™ – A Transformational New Year Retreat" (2025-11-27), "Chakra Balance Album…" (2026-05-12), "The Gift of Harmony by Jelila" (2026-07-01). Full list with recommendations: `data/route-inventory.csv`.
- **2014 crystal Q&A series** (~45 short posts, one image each) — low priority.
- Featured images: available via `featured_image` in `data/routes-content.json` for posts that have one.
- Real articles exist, so a journal is justified. Per Phase-2 rules the initial blog presentation should use **≤10 images**.

## 11. Downloads (`data/documents-and-downloads.csv`)

| File | Size | Status | Notes |
|---|---|---|---|
| jelila-detailed-healing-menu-www-jelila-com.pdf | 6.1 MB | 200 | "60 page full-colour guide" (2013 upload; content likely outdated) — linked from 18 pages |
| jelila-reviews-trip-advisor.pdf | 1.7 MB | 200 | Tripadvisor reviews compilation (2014) — 15 pages |
| the-gift-of-harmony-by-jelila-downloadable-pdf-handout2.pdf / handout.pdf | ~0.6 MB each | 200 | GoH handout |
| jelilahealingmenubali-v7.pdf | 1.5 MB | 200 | old menu |
| jelila-packages-summary-march-2015-2016-2017-pdf2.pdf | 0.4 MB | 200 | old packages |
| brochure-jelila-v23-one-up.pdf | 0.3 MB | 200 | 2011 brochure |
| rental-list-halloween-v13-23oct-2023.pdf | 0.2 MB | 200 | Halloween costume rental (unrelated to healing) |
| fileden.com …Father Dont Go….mp3 | — | 403 | dead third-party host |

Image "flyers" used as downloads: `a-flyer-jelila-www-jelila-com.jpg` (2013), `e8406-220e376e-…png` (2023 "Detailed Menu"), the 2026 menu images.

## 12. Footer and legal

- Footer (verified): "Blog at WordPress.com. WP Designer." only. No business info, no nav, no social links in the footer.
- Cookie bar (Jetpack EU cookie law widget): "Privacy & Cookies: This site uses cookies. By continuing to use this website, you agree to their use. To find out more, including how to control cookies, see here: Cookie Policy" + "Close and accept".
- WordPress.com action bar: "Subscribe" / "…".
- `/privacy-policy/` (2020) — generic template naming "PT Hidup Indah Bahagia" (Kerobokan) and `info@mybeautifullife.com`. **Legal text must not be reused without owner/legal confirmation.**

## 13. SEO metadata observations (key pages, `data/seo-and-load-key-pages.json`)

- `<title>` = page title + " | Jelila – Spiritual Healer & Sound Journey Guide in Bali". Page titles are very long keyword strings (e.g. Sessions: 230+ characters).
- Meta descriptions are **auto-generated** from the first text on the page, so most begin with the nav link row ("Online Store Healing Menu Packages Contact…").
- Canonicals present and self-referencing on pages/posts; none on category archives or the 404.
- og:image is the same portrait on all pages examined (300×450).
- Slugs: several start with `http-jelila-com-…` or `https-jelila-com-…`, two contain the pasted AI-assistant phrase "heres-a-clean-seo-friendly-slug-for-your-post", several contain URL-encoded emoji (`%f0%9f%8c%bf`), and many exceed 150 characters.
- Page H1 is the site name on every page (theme), the page title is an H2.

## 14. Content priority guidance for Phase 2

**Essential (must stay easy to find):** who Jelila is (short bio + credentials + photo), the services and current prices, how to book (WhatsApp, Calendly) and online-session availability, location (Ubud) once confirmed, reviews/press, books, music, contact details, FAQ.

**Present more concisely:** Home (3,000+ words → short story + services + proof + booking), Sessions (one clean price list instead of three repeated blocks), Reprogramming / Gift of Harmony (one detail page each), Bio (merge "Why?" and "Best Spiritual Healer" claims), Reviews (curated selection, not 60 quotes).

**Consolidate (duplicates):** 4 Gift of Harmony pages; 3 Biohacking pages; 4 Free/Useful-links pages; 2 music pages with identical embeds; 2 Sacred Geometry pages; 2 Higher Consciousness pages; Reviews page + 2013 testimonial posts; "Best Spiritual Healer" landing + Home.

**Low priority / legacy:** 2013 event pages, payment/CC guides, empty quiz/login/account pages, 2014 crystal Q&A posts, 2010 CD-back posts, Halloween costume rental post/PDF, Christmas voucher.

**Do not carry forward:** repeated link rows, "Queries? Call or sms me…" repeated ~12× on Sessions, text-in-image promo tiles, sidebar promos, outdated phone numbers, broken staging links, Flash/gigya shortcodes.
