"use client";

import { useState } from "react";
import { faqs } from "../content";
import { RingPhoto, Wash } from "./Decor";
import styles from "./Faq.module.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="panel" aria-labelledby="faq-title">
      <div className="sheet sheet-white">
        <Wash corner="br" tone="sage" />
        <div className={`container ${styles.grid}`}>
          <div className={styles.side}>
            <h2 id="faq-title" className="section-title" tabIndex={-1} data-reveal>
              Your <em>questions</em>
            </h2>
            <div className={styles.photo} data-reveal>
              <RingPhoto
                tone="sand"
                img={{
                  src: "/images/stack-mural-560.webp",
                  width: 560,
                  height: 700,
                  alt: "Jelila laughing with her hand-painted guitar in front of a painted mural",
                }}
              />
            </div>
          </div>

          <div className={styles.list} data-reveal>
            {faqs.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={item.q} className={styles.item} data-open={open}>
                  <h3 className={styles.question}>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={open}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpenIndex(open ? -1 : i)}
                    >
                      <span>{item.q}</span>
                      <span className={styles.icon} aria-hidden="true" />
                    </button>
                  </h3>
                  <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={styles.answer} inert={!open}>
                    <div className={styles.answerInner}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
