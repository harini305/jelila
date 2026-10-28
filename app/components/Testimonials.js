"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "../content";
import { RingPhoto } from "./Decor";
import styles from "./Testimonials.module.css";

const AUTOPLAY_MS = 8000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);
  const touchX = useRef(null);
  const count = testimonials.length;

  const go = (i) => setIndex((i + count) % count);
  const userGo = (i) => {
    setStopped(true);
    go(i);
  };

  // Gentle autoplay that stops for good once the visitor takes control,
  // pauses on hover/focus, and never runs under reduced motion.
  useEffect(() => {
    if (paused || stopped || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, stopped, count]);

  const current = testimonials[index];
  const long = current.quote.length > 170;

  return (
    <section id="testimonials" className="panel" aria-labelledby="testimonials-title">
      <div className="sheet sheet-sage">
        <div className={`container ${styles.grid}`}>
          <div className={styles.photo} data-reveal>
            <RingPhoto
              tone="sand"
              img={{ src: "/images/jelila-grass-guitar-900.webp", width: 900, height: 1080, alt: "Jelila lying on the grass with her painted guitar, eyes closed" }}
            />
          </div>

          <div
            className={styles.body}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 40) userGo(index + (dx < 0 ? 1 : -1));
              touchX.current = null;
            }}
          >
            <h2 id="testimonials-title" className="section-title" tabIndex={-1} data-reveal>
              Client <em>experiences</em>
            </h2>

            <div className={styles.slide} aria-live={stopped || paused ? "polite" : "off"} data-reveal>
              <span className={styles.mark} aria-hidden="true">
                “
              </span>
              <figure key={index} className={styles.quote} data-long={long || undefined}>
                <blockquote>
                  <p>{current.quote}</p>
                </blockquote>
                <figcaption>
                  {current.name}
                  {current.context && <span className={styles.context}> {current.context}</span>}
                </figcaption>
              </figure>
            </div>

            <div className={styles.controls} data-reveal>
              <div className={styles.names} role="group" aria-label="Choose a testimonial">
                {testimonials.map((t, i) => (
                  <button key={t.name} type="button" className={styles.name} aria-pressed={i === index} onClick={() => userGo(i)}>
                    {t.name}
                  </button>
                ))}
              </div>
              <div className={styles.arrows}>
                <button type="button" className={styles.arrowBtn} onClick={() => userGo(index - 1)} aria-label="Previous testimonial">
                  ←
                </button>
                <button type="button" className={styles.arrowBtn} onClick={() => userGo(index + 1)} aria-label="Next testimonial">
                  →
                </button>
              </div>
            </div>
            {!stopped && !paused && (
              <span key={`p${index}`} className={styles.timer} aria-hidden="true" style={{ "--dur": `${AUTOPLAY_MS}ms` }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
