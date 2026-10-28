"use client";

import { about } from "../content";
import useTabs from "./useTabs";
import { BlobPhoto, ResonanceRings, RingPhoto } from "./Decor";
import styles from "./About.module.css";

const TABS = ["Story", "Method", "Venues", "Press"];

export default function About() {
  const { tabProps, panelProps } = useTabs(TABS.length, "about");

  return (
    <section id="about" className="panel" aria-labelledby="about-title">
      <div className="sheet sheet-sand">
        <ResonanceRings className={styles.rings} />
        <div className={`container ${styles.grid}`}>
          <div className={styles.media} data-reveal>
            <BlobPhoto
              className={styles.portrait}
              img={{
                src: "/images/jelila-portrait-1200.webp",
                width: 1200,
                height: 900,
                alt: "Jelila smiling, in front of carved Balinese wood",
                position: "45% 30%",
              }}
            />
            <RingPhoto
              className={styles.inset}
              tone="sand"
              img={{
                src: "/images/jelila-talk-680.webp",
                width: 680,
                height: 510,
                alt: "Jelila giving a talk about the discoveries shared in her books, with her guitar beside her",
              }}
            />
          </div>

          <div className={styles.copy}>
            <h2 id="about-title" className="section-title" tabIndex={-1} data-reveal>
              About <em>Jelila</em>
            </h2>
            <p className={`lead ${styles.lead}`} data-reveal>
              A well-known international spiritual teacher and healer, recognised for her unique, simple yet powerful
              methods and her commitment to supporting your personal growth and happiness.
            </p>

            <div className={styles.tabsWrap} data-reveal>
              <div className="tabs" role="tablist" aria-label="About Jelila">
                {TABS.map((t, i) => (
                  <button key={t} type="button" className="tab" {...tabProps(i)}>
                    {t}
                  </button>
                ))}
              </div>

              <div className={styles.panel} {...panelProps(0)}>
                <p>{about.story[0]}</p>
              </div>

              <div className={styles.panel} {...panelProps(1)}>
                <p>{about.story[1]}</p>
              </div>

              <div className={styles.panel} {...panelProps(2)}>
                <ul className={styles.list}>
                  {about.residencies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.panel} ${styles.pressPanel}`} {...panelProps(3)}>
                <ul className={styles.pressList}>
                  {about.press.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className={styles.scans}>
                  {about.pressScans.map((scan) => (
                    <img
                      key={scan.src}
                      src={scan.src}
                      width={scan.width}
                      height={scan.height}
                      alt={scan.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
