import { links, navItems } from "../content";
import { BlobPhoto, ResonanceRings } from "./Decor";
import styles from "./Connect.module.css";

const channels = [
  {
    label: "WhatsApp",
    value: links.whatsappLabel,
    href: links.whatsapp,
    note: "Ask a question, arrange an online session or request the current healing menu and prices.",
    primary: true,
  },
  {
    label: "Book online",
    value: "calendly.com/jelila",
    href: links.calendly,
    note: "Choose ‘China Singapore Perth’ in the ‘Times are in…’ menu for the correct timezone.",
  },
  { label: "Email", value: links.emailLabel, href: links.email },
  { label: "Instagram", value: links.instagramLabel, href: links.instagram },
];

// The last panel holds the booking options and the footer, so it fills the
// final screen without anything trailing below it.
export default function Connect() {
  return (
    <section id="connect" className="panel" aria-labelledby="connect-title">
      <div className={`sheet sheet-forest on-dark ${styles.sheet}`}>
        <ResonanceRings className={styles.rings} />
        <div className={`container ${styles.grid}`}>
          <div className={styles.copy}>
            <h2 id="connect-title" className="section-title" tabIndex={-1} data-reveal>
              Connect <em>&amp; book</em>
            </h2>
            <p className={`lead ${styles.lead}`} data-reveal>
              Start with one session, do a series, or dive into a longer programme – message Jelila and she will advise
              you in a down-to-earth, friendly way.
            </p>
            <p className="muted" data-reveal>
              In person in Ubud, Bali, and online by Zoom or WhatsApp. Please book in advance.
            </p>
            <div className={styles.photo} data-reveal>
              <BlobPhoto
                img={{
                  src: "/images/sound-healing-group-900.webp",
                  width: 900,
                  height: 438,
                  alt: "Participants lying on mats, deeply relaxing during a sound healing experience with Jelila",
                }}
              />
            </div>
          </div>

          <ul className={styles.channels}>
            {channels.map((c) => (
              <li key={c.label} data-reveal>
                <a
                  className={styles.channel}
                  data-primary={c.primary || undefined}
                  href={c.href}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className={styles.channelLabel}>{c.label}</span>
                  <span className={styles.channelValue}>
                    {c.value} <span className="arrow" aria-hidden="true">→</span>
                  </span>
                  {c.note && <span className={styles.channelNote}>{c.note}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className={`container ${styles.footer}`}>
          <div className={styles.brandBlock}>
            <p className={styles.brand}>Jelila</p>
            <p className="muted">Exquisite gifts for your soul</p>
          </div>
          <nav aria-label="Footer">
            <ul className={styles.footLinks}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href={links.bandcamp} target="_blank" rel="noopener noreferrer">
                  Bandcamp
                </a>
              </li>
            </ul>
          </nav>
          <p className={`muted ${styles.copyright}`}>© {new Date().getFullYear()} Jelila · Ubud, Bali and online</p>
        </footer>
      </div>
    </section>
  );
}
