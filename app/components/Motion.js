"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// One place for page motion. Only opacity, transform and clip-path are
// animated, so layout (and therefore section-link offsets) never changes.
// Nothing is pinned. Reduced-motion visitors get static content.
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Hero entrance
      const heroItems = gsap.utils.toArray("[data-hero]");
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(heroItems, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12 });

      // Resonance rings breathe slowly, like sound from a struck bowl
      gsap.utils.toArray("[data-ring]").forEach((ring, i) => {
        gsap.fromTo(
          ring,
          { scale: 0.97, opacity: 0.55 },
          { scale: 1.03, opacity: 1, duration: 4.5, ease: "sine.inOut", repeat: -1, yoyo: true, delay: (i % 6) * 0.4 }
        );
      });

      // Side photos float gently, out of step with each other
      gsap.utils.toArray("[data-float]").forEach((el, i) => {
        gsap.to(el, { y: i ? 10 : -10, duration: 3.6 + i, ease: "sine.inOut", repeat: -1, yoyo: true });
      });

      // Section content
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 24,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray("[data-reveal-image]").forEach((el) => {
        const img = el.querySelector("img");
        gsap.fromTo(
          el,
          { clipPath: "inset(12% 8% 12% 8%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.12 },
            { scale: 1, duration: 1.6, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }
          );
        }
      });

      // Watercolour washes drift slightly with a mouse pointer. Moved with
      // GSAP transforms on the washes only, so the rest of the page is untouched.
      const washes = gsap.utils.toArray("[data-wash]").map((el, i) => ({
        x: gsap.quickTo(el, "x", { duration: 1.2, ease: "power3.out" }),
        y: gsap.quickTo(el, "y", { duration: 1.2, ease: "power3.out" }),
        depth: 10 + (i % 3) * 5,
      }));
      const onPointer = (e) => {
        if (e.pointerType !== "mouse") return;
        const px = e.clientX / window.innerWidth - 0.5;
        const py = e.clientY / window.innerHeight - 0.5;
        washes.forEach((w) => {
          w.x(-px * w.depth);
          w.y(-py * w.depth);
        });
      };
      window.addEventListener("pointermove", onPointer, { passive: true });

      // Images load lazily; refresh trigger positions once they settle
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      return () => {
        window.removeEventListener("load", refresh);
        window.removeEventListener("pointermove", onPointer);
      };
    });

    return () => mm.revert();
  }, []);

  return null;
}
