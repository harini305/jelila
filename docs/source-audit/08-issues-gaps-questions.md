# 08 — Issues, Gaps, Inconsistencies & Open Questions

Nothing here has been "corrected" in the audit files — the source text is preserved verbatim in `content/`. Each item needs an owner decision or is a known defect for Phase 2 to avoid.

## A. Questions for the owner (blocking or high-impact)

| # | Question | Why it matters | Evidence |
|---|---|---|---|
| Q1 | **Which prices are current?** 2026 menu image vs Sessions text differ (Soulmate Healing $220 vs $210; Past-life 1 hr $110 vs Past-Life Reading $95). Are Packages (2015–2017 maths) and Light Language Grids still offered? | Prices will be shown as text | `data/offerings-and-prices.json` |
| Q2 | **Which phone numbers are live?** +62 813 3956 1271 (current) vs +62 8585 735 4228 / +62 8585 732 6822 (on Sessions, Reprogramming, Packages, Reviews, Vibes, Store). Skype JELILA2255 still valid? | Contact accuracy | `03 §2` |
| Q3 | **Where do in-person sessions take place?** No address for Jelila's sessions; 2023 posts give 31 Jalan Sukma Kesuma, Tebesaya (Biohacking Healing Journey, Ubud Fairy Village); an old page says Jalan Hanoman. Should an address/map be public? | Contact page, schema, map | `03 §2` |
| Q4 | **Online store:** is Storenvy payment fixed (Bio says "not working June 2026")? Is Etsy (JelilaHealing) closed? Which store to link? | Shop link, payment claims | Bio page; `06` |
| Q5 | **Payment methods:** PayPal (Home) vs WISE transfer (2026 menu page); cards except Amex. | Booking/FAQ copy | `03 §2` |
| Q6 | **Years of experience:** 30 (Home/Bio/FAQ) vs 28, 26, 25, 21. | Headline claim | `03 §2` |
| Q7 | **Number of books:** Books page lists 7; other pages say 4, 5, 6 or 9 (slug). Is *The Ugly Grub* and *How to Draw Metatron's Cube* to be listed? Correct Amazon link for *The Reprogramming II*? | Books page | `03 §8` |
| Q8 | **Gift of Harmony format:** 8 hours over 3 days (current) vs "4 Days" / "4 day course, 2 hours per day" / "2.5 days". | Offering detail | Sessions, Packages, Contact |
| Q9 | **Music catalogue size:** "17 mp3 sets", "14 CDs", "50 albums", "hundreds of healing songs". | Music page | Home, Bio, sitemap |
| Q10 | **Mailing list:** two Mailchimp audiences (`4dcb0e94d2` on wordpress.us2 and `d121f5a7c4` on jelila.us2). Which one? Is the "11-minute free training video" opt-in still delivered? Discount "15% – 10%" on join still valid? | Join CTA | `06` |
| Q11 | **Privacy policy:** names "PT Hidup Indah Bahagia" (Kerobokan) and info@mybeautifullife.com — is this Jelila's legal entity? | Legal | `/privacy-policy/` |
| Q12 | **Is there an original logo file** (vector or high-res transparent) for the "Jelila" wordmark? Only a 904×160 banner exists online. Is there a preferred brand colour (greens vs maroon)? | Header/logo | `05 §3` |
| Q13 | Which **quizzes**, the **Teachable** "Create your Dreams" course, **courses list**, **Indonesian** page, and **Biohacking Healing Journey** (location, Rp. 795k, plans) are still active? | Scope | `06` |
| Q14 | Which **recent posts** should be migrated to the journal, and should older (2009–2014) posts be kept, redirected or dropped? | Blog scope | `data/route-inventory.csv` |
| Q15 | Is the domain staying on WordPress.com, or moving to a new host (affects redirects and existing uploads/PDF URLs)? | Migration | `09` |
| Q16 | Testimonials: may first names be published as-is? Any newer reviews (e.g. Tripadvisor rating/count) the owner wants shown? We could not verify Tripadvisor (blocked). | Reviews page | `03 §6` |
| Q17 | Health-adjacent claims ("your trauma is gone", "permanent", "safe alongside medical treatment", "best healer") — does the owner want these kept verbatim? | Risk / tone | Home FAQ, menu image |

## B. Content inconsistencies and errors (verified, preserved verbatim)

| Issue | Where |
|---|---|
| Currency typo "£300" inside a US$ price list | `/healing-change-your-life-fast/`, `/packages/` |
| "$1,8o0" (letter o) | `/healing-change-your-life-fast/` |
| "Total $940,50" (comma decimal) | `/packages/` |
| "Gift of Hrarmony", "thrown iin", "PSCHIC", "Enerlgy", "Wierd", "Butteflies", "Upates", "availalble", "derk energies" (slug), "attact" (slug), "wellbeng" (filename/slug) | various pages, image text, slugs |
| "Which of 3 Kinds of Spiritual Pathfinder" vs "Which of 4 Kinds" | Sessions/Home vs Packages |
| "Sacred Geometric Shape Lover?j." stray character | Home, Sessions, Contact, Bio |
| "Soulmate Love Reading 40 min US$40 / 60 min US$60" legacy block below current $210 | `/sessions/` |
| Complimentary CD "worth $22" vs "$30" | Sessions, Packages |
| "Reviews" link row points to a 2013 post, while nav "Reviews" points to the Reviews page | all link rows |
| "Healing Menu" link row label opens the *Free downloads* page | all link rows |
| `/blog/` page says "Click the 'Blog' tab at the top" — it *is* that tab; no listing | `/blog/` |
| Two Bandcamp players of the same album back-to-back | Home |
| Homepage section label "🌟 Homepage FAQ Entries" and "🌺 Service‑Specific FAQ (Sound Healing Example)" — look like pasted drafting notes | Home |
| A UTM tag `?utm_source=copilot.com` in a link | Sessions |
| Slugs containing the pasted phrase "heres-a-clean-seo-friendly-slug-for-your-post…" (AI-assistant output) | pages 4537, 4480 |
| Slugs beginning `http-jelila-com-…` / `https-jelila-com-…`, duplicated dates (`/2025/08/22/2025-08-22-…`), URL-encoded emoji | many |
| Titles that are long keyword strings (230+ chars) | Sessions, Home, Bio, Best Healer |
| Image/attachment titles "Oplus_131072" (camera default) | After GoH page assets |
| Halloween costume rental post + PDF (unrelated business) | `/2023/10/27/halloween-costumes-ubud/` |

## C. Duplicated / repetitive content

- Same bio blurb ("Jelila is a well-known International Healer who Blossoms Hearts Desires…") + same 6 testimonials repeated on Home (×2), Bio, Contact, Packages, Sessions.
- Link row repeated up to 5× per page; "Queries? Call or sms me…" ×12 on Sessions.
- Duplicate pages: Sacred Geometry (8323 = 6560), Higher Consciousness (9651 ≈ 11994), Useful Links (3640 = 12366), Free downloads (9609 ≈ 11991), music pages (4404 ≈ 7220), Biohacking (11001 ≈ 11378 ≈ 10977), Gift of Harmony ×4, Reviews page ≈ 2013 testimonial post, latest brochure/menu posts duplicated (`…-www-jelila-com/` and `…-2/`), two near-identical past-life posts dated 2020-09-19 (ids 10491 "A Real Past-Life Journey Story, that Released Joy" and 12186 "How Past-Life Journey lets you release trauma, and experience joy" — both 528 words).
- Same image uploaded multiple times (41 filename stems, 90 files — e.g. `3011-footer-…jpg` ×3, `menu-jelila-best-healer-ubud-and-online.jpg` in 2025/08 and 2026/06).

## D. Outdated / low-priority content

2013 event pages; 2013 payment/CC guides; 2013 PDF menu (60 pages) still promoted as "Free Download Menu"; 2015–2017 package summary; Christmas voucher (2013); "special 24-hour pay what you want" (2023); Flash `[gigya]` video shortcodes; "Vodpod videos no longer available"; links to fileden.com, fineartamerica (410), LinkedIn profile; empty login/account/quiz pages.

## E. Technical / UX issues (verified)

- Not responsive (no viewport meta; fixed 904px) — `07`.
- 1,203 links to a dead staging domain on 45 routes; 9 links to the WordPress admin editor; 126 legacy internal paths 404; legacy slugs silently resolve to wrong pages (`/about`, `/crystals`) — `06 §4`.
- ~240 requests and ~5 MB per page; 108 sidebar widgets; heaviest page ~12 MB.
- Key information (2026 prices, menu, reviews collage) only in images — not accessible, not searchable, not translatable.
- Images: 42 originals > 1 MB, 27 > 1.4 MB, largest 6.1 MB (4032×3024); several GIFs; many images have baked-in text; low-res book covers (146×220, 188×303); 17 catalogued images unavailable (404 / staging / blocked) — `04-assets-manifest.csv`.
- No custom favicon; no standalone logo file; og:image is a small 300×450 portrait for every page.
- Meta descriptions auto-generated from link rows; H1 is always the site name.
- Accessibility (observed, not formally audited): empty or keyword-stuffed alt text, link text like ".", hover-only menus, low-contrast lime headings (#7DB20A on white = 2.55:1), 12px body text.

## F. Audit coverage gaps (what we could not verify)

- True mobile/tablet rendering (bot challenge) — only narrow-window desktop captures exist.
- Calendly booking flow, Storenvy checkout, Mailchimp signup, WhatsApp chat delivery, email deliverability — not executed (would create real bookings/messages/orders).
- Tripadvisor, Etsy, Facebook pages (403/400 to automated requests).
- WordPress media library (dimensions/sizes of unused uploads), drafts, private pages, navigation menu definitions beyond the rendered menu (API requires auth).
- Comment content (only counts observed).
- Contents of PDFs (sizes and status checked; documents not read).
- Image licensing (e.g. `woman-celebrating-birthday-balloon-27368902.jpg` looks like a stock photo ID).
