"use client";

import { useState } from "react";
import { heroImages } from "../content";
import { BlobPhoto, RingPhoto, Wash } from "./Decor";
import styles from "./Hero.module.css";

const HIGHLIGHTS = ["Sound healing", "The Reprogramming™", "Chakra balancing", "Ubud, Bali & online"];

export default function Hero() {
  // Order of photos: [left circle, centre, right circle]
  const [order, setOrder] = useState([2, 0, 1]);

  const swapIntoCentre = (slot) =>
    setOrder((o) => {
      const next = [...o];
      [next[1], next[slot]] = [next[slot], next[1]];
      return next;
    });

  const [left, centre, right] = order.map((i) => heroImages[i]);

  return (
    <section id="top" className={`panel panel-inset ${styles.hero}`} aria-labelledby="hero-title">
      <div className={`sheet ${styles.sheet}`}>
        <Wash corner="tl" tone="peach" />
        <Wash corner="tr" tone="sand" />
        <Wash corner="bl" tone="sage" />
        <Wash corner="br" tone="clay" />

        <div className={`container ${styles.copy}`}>
          <h1 id="hero-title" className={styles.title} tabIndex={-1} data-hero>
            Singing your soul <em>into harmony</em>
          </h1>
          <p className={styles.lead} data-hero>
            Jelila is a gifted international healer in Ubud, Bali and online. Known for her intuitive clarity, genuine
            soul-deep transformation and beautiful sound healing voice, she guides profound journeys of release and
            renewal.
          </p>
          <div data-hero>
            <a href="#connect" className={`btn btn-primary ${styles.cta}`}>
              Book a session <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className={styles.gallery} data-hero>
          <button type="button" className={`${styles.circle} ${styles.circleLeft}`} onClick={() => swapIntoCentre(0)} aria-label="Show this photo in the centre" data-float>
            <RingPhoto key={left.src} img={left} tone="sage" alt="" />
          </button>

          <BlobPhoto img={centre} className={styles.centre} eager />

          <button type="button" className={`${styles.circle} ${styles.circleRight}`} onClick={() => swapIntoCentre(2)} aria-label="Show this photo in the centre" data-float>
            <RingPhoto key={right.src} img={right} tone="sand" alt="" />
          </button>

          <ul className={styles.pill} aria-label="Highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
