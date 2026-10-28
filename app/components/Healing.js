"use client";

import { links, services } from "../content";
import useTabs from "./useTabs";
import { BlobPhoto, ResonanceRings } from "./Decor";
import styles from "./Healing.module.css";

export default function Healing() {
  const { tabProps, panelProps } = useTabs(services.length, "healing");

  return (
    <section id="healing" className="panel" aria-labelledby="healing-title">
      <div className="sheet sheet-forest on-dark">
        <ResonanceRings className={styles.rings} />
        <div className={`container ${styles.grid}`}>
          <div className={styles.side}>
            <h2 id="healing-title" className="section-title" tabIndex={-1} data-reveal>
              Healing <em>experiences</em>
            </h2>
            <p className={`muted ${styles.intro}`} data-reveal>
              Every session is beneficial – each one will help you. Trust your intuition and begin with what draws you
              most.
            </p>
            <div className={styles.list} role="tablist" aria-label="Healing experiences" aria-orientation="vertical" data-reveal>
              {services.map((s, i) => (
                <button key={s.id} type="button" className={styles.option} {...tabProps(i)}>
                  <span className={styles.optionTitle}>{s.title}</span>
                  <span className={styles.optionDetail}>{s.detail}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.stage} data-reveal>
            {services.map((s, i) => (
              <article key={s.id} className={styles.detail} {...panelProps(i)}>
                <BlobPhoto className={styles.image} img={s.image} />
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p>{s.text}</p>
                  <a className="text-link" href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                    Ask about this session <span className="arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
