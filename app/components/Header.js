"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { navItems } from "../content";
import styles from "./Header.module.css";

const SECTION_IDS = ["top", ...navItems.map((item) => item.id), "connect"];

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  // Active section + scroll progress. A section is active once its top passes
  // a line just below the header; at the very bottom the last section wins.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const root = document.documentElement;
      const headerH = headerRef.current?.offsetHeight ?? 0;
      const line = headerH + window.innerHeight * 0.3;
      const max = root.scrollHeight - window.innerHeight;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      if (window.scrollY >= max - 4) current = SECTION_IDS[SECTION_IDS.length - 1];
      setActive(current);
      headerRef.current?.style.setProperty("--progress", max > 0 ? String(window.scrollY / max) : "0");
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Lock page scroll and support Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 960px)");
    const onBreakpoint = (e) => e.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  // In-page navigation: close the menu, then scroll. scrollIntoView honours
  // each panel's scroll-margin-top, so the panel starts right under the header.
  const goTo = useCallback((e, id) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    setOpen(false);
    document.documentElement.style.overflow = "";
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
      target.querySelector("h1, h2")?.focus({ preventScroll: true });
      if (window.location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
      setActive(id);
    });
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand} onClick={(e) => goTo(e, "top")}>
          Jelila
        </a>

        <nav className={styles.desktopNav} aria-label="Sections">
          <ul className={styles.linkList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={styles.link}
                  aria-current={active === item.id ? "location" : undefined}
                  onClick={(e) => goTo(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#connect"
            className={styles.cta}
            aria-current={active === "connect" ? "location" : undefined}
            onClick={(e) => goTo(e, "connect")}
          >
            Book a session
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className={styles.toggleIcon} aria-hidden="true" data-open={open} />
        </button>
      </div>

      <span className={styles.progress} aria-hidden="true" />

      <nav id="mobile-menu" className={styles.mobileNav} data-open={open} aria-label="Sections" hidden={!open}>
        <ul className={`container ${styles.mobileLinks}`}>
          {navItems.map((item, i) => (
            <li key={item.id} style={{ "--i": i }}>
              <a
                href={`#${item.id}`}
                className={styles.mobileLink}
                aria-current={active === item.id ? "location" : undefined}
                onClick={(e) => goTo(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className={styles.mobileCta} style={{ "--i": navItems.length }}>
            <a href="#connect" className="btn btn-primary" onClick={(e) => goTo(e, "connect")}>
              Book a session
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
