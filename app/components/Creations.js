"use client";

import { useState } from "react";
import { albums, books, crystalImages, links, musicTestimonial } from "../content";
import BandcampPlayer from "./BandcampPlayer";
import useTabs from "./useTabs";
import { BlobPhoto, RingPhoto } from "./Decor";
import styles from "./Creations.module.css";

const TABS = ["Books", "Music", "Crystals"];

export default function Creations() {
  const { tabProps, panelProps } = useTabs(TABS.length, "creations");
  const [book, setBook] = useState(0);
  const selected = books[book];

  return (
    <section id="creations" className="panel" aria-labelledby="creations-title">
      <div className="sheet sheet-clay">
        <div className="container">
          <div className={styles.head}>
            <h2 id="creations-title" className="section-title" tabIndex={-1} data-reveal>
              Books, music <em>&amp; creations</em>
            </h2>
            <div className="tabs" role="tablist" aria-label="Books, music and creations" data-reveal>
              {TABS.map((t, i) => (
                <button key={t} type="button" className="tab" {...tabProps(i)}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Books: choose a cover to read about it */}
          <div className={`${styles.panel} ${styles.books}`} {...panelProps(0)} data-reveal>
            <div className={styles.shelf} role="group" aria-label="Choose a book">
              {books.map((b, i) => (
                <button
                  key={b.title}
                  type="button"
                  className={styles.cover}
                  aria-pressed={i === book}
                  aria-label={b.title}
                  onClick={() => setBook(i)}
                >
                  <img src={b.image} width={b.width} height={b.height} alt="" loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
            <div key={book} className={styles.bookDetail} aria-live="polite">
              <h3 className={styles.itemTitle}>{selected.title}</h3>
              <p className="muted">{selected.text}</p>
              <a className="text-link" href={selected.href} target="_blank" rel="noopener noreferrer">
                View on Amazon<span className="visually-hidden">: {selected.title}</span>{" "}
                <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Music */}
          <div className={`${styles.panel} ${styles.music}`} {...panelProps(1)}>
            <div className={styles.albums}>
              <BlobPhoto
                className={styles.guitar}
                img={{ src: "/images/painted-guitar-1000.webp", width: 1000, height: 449, alt: "Jelila’s hand-painted guitar" }}
              />
              {albums.map((a) => (
                <img
                  key={a.title}
                  className={styles.album}
                  src={a.src}
                  width={a.width}
                  height={a.height}
                  alt={`${a.title}, an album by Jelila`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
            <div className={styles.musicCopy}>
              <p className="muted">
                Jelila’s voice is more than music; it is a healing instrument, weaving Light Language, crystal resonance,
                and sacred geometry into songs that touch the soul. Each album is a focused healing journey.
              </p>
              <figure className={styles.miniQuote}>
                <blockquote>
                  <p>“{musicTestimonial.quote}”</p>
                </blockquote>
                <figcaption>{musicTestimonial.name}</figcaption>
              </figure>
              <div className={styles.musicActions}>
                <a className="btn btn-primary" href={links.bandcamp} target="_blank" rel="noopener noreferrer">
                  Listen on Bandcamp <span className="arrow" aria-hidden="true">→</span>
                </a>
                <BandcampPlayer />
              </div>
            </div>
          </div>

          {/* Crystal jewellery */}
          <div className={`${styles.panel} ${styles.crystals}`} {...panelProps(2)}>
            <div className={styles.crystalCopy}>
              <p className="muted">
                Jelila’s handmade crystal healing jewellery is specially programmed to harmonise and balance the
                chakras. Paired with her book The Power of Crystals, it offers a simple yet profound path into crystal
                healing.
              </p>
              <a className="text-link" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                Ask Jelila which pieces are available <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
            <div className={styles.crystalGrid}>
              {crystalImages.map((img, i) => (
                <RingPhoto key={img.src} img={img} tone={i % 2 ? "sand" : "sage"} className={styles.crystal} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
