// Shared hand-painted decoration used across every panel: watercolour washes,
// brushed rings and an organic photo frame. All are drawn with SVG in brand
// tones; nothing here is a stock or generated image.
import styles from "./Decor.module.css";

// Organic frame shape in objectBoundingBox units (0–1)
export const BLOB =
  "M0.5,0.02 C0.66,0.01 0.79,0.06 0.88,0.17 C0.97,0.28 0.99,0.44 0.98,0.6 C0.97,0.76 0.92,0.9 0.8,0.96 C0.68,1.01 0.55,0.99 0.42,0.99 C0.28,0.99 0.15,0.97 0.07,0.86 C0,0.76 0.01,0.6 0.02,0.45 C0.03,0.3 0.08,0.16 0.19,0.08 C0.28,0.03 0.39,0.02 0.5,0.02 Z";

// Same shape in 0–1000 units for the brushed outline, where the filter's noise
// and displacement read at a sensible scale
const BLOB_1000 = BLOB.replace(/\d*\.\d+|\d+/g, (n) => String(Math.round(parseFloat(n) * 1000)));

/** Filters and clip paths, rendered once per page. */
export function DecorDefs() {
  return (
    <svg width="0" height="0" className={styles.defs} aria-hidden="true" focusable="false">
      <defs>
        <filter id="wc-watercolour" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="3" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="38" />
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="wc-brush" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="4" />
        </filter>
        <clipPath id="wc-blob" clipPathUnits="objectBoundingBox">
          <path d={BLOB} />
        </clipPath>
      </defs>
    </svg>
  );
}

const SHAPES = {
  peach: [
    { d: "M40,30 C140,0 260,40 250,150 C240,250 120,290 60,230 C0,170 -30,60 40,30 Z", fill: "#e9c9a6", o: 0.75 },
    { d: "M20,170 C90,140 190,200 170,290 C150,370 50,380 10,320 C-20,270 -10,190 20,170 Z", fill: "#b9c9a0", o: 0.55 },
  ],
  sand: [
    { d: "M200,20 C300,-10 410,40 400,150 C390,250 290,280 230,220 C170,160 120,50 200,20 Z", fill: "#f5dec6", o: 0.95 },
    { d: "M260,180 C340,150 420,210 400,300 C380,380 280,390 240,330 C210,280 200,200 260,180 Z", fill: "#9db37a", o: 0.42 },
  ],
  sage: [
    { d: "M30,170 C120,130 240,180 240,280 C240,380 120,420 50,370 C-10,320 -40,210 30,170 Z", fill: "#b9c9a0", o: 0.6 },
    { d: "M140,250 C220,220 320,280 300,360 C280,430 180,430 140,380 C110,340 90,270 140,250 Z", fill: "#e9c9a6", o: 0.7 },
  ],
  clay: [
    { d: "M190,190 C290,150 410,210 400,310 C390,410 270,430 210,370 C160,320 110,220 190,190 Z", fill: "#e9c9a6", o: 0.8 },
    { d: "M90,280 C160,250 250,300 230,370 C210,430 120,430 90,390 C60,350 40,300 90,280 Z", fill: "#9db37a", o: 0.4 },
  ],
};

/** A watercolour wash with two flowing lines, pinned to a corner of its panel. */
export function Wash({ corner = "tl", tone = "peach", size }) {
  return (
    <svg
      className={`${styles.wash} ${styles[corner]}`}
      style={size ? { "--wash-w": size } : undefined}
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
      data-wash
    >
      {SHAPES[tone].map((b, i) => (
        <path key={i} d={b.d} fill={b.fill} opacity={b.o} filter="url(#wc-watercolour)" />
      ))}
      <path d="M10,60 C120,20 160,140 250,110 S380,40 395,150" className={styles.line} />
      <path d="M30,10 C90,90 60,200 160,230 S330,250 360,390" className={`${styles.line} ${styles.lineFaint}`} />
    </svg>
  );
}

/** Painted ring that sits around a circular photo. */
export function BrushRing({ tone = "sage" }) {
  return (
    <svg className={styles.ring} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <circle cx="50" cy="50" r="47" className={styles[`${tone}Bold`]} filter="url(#wc-brush)" />
      <circle cx="50" cy="50" r="45" className={styles[`${tone}Thin`]} filter="url(#wc-brush)" />
    </svg>
  );
}

/** Circular photo with a painted ring. Extra props go to the wrapper. */
export function RingPhoto({ img, tone = "sage", className = "", alt, ...rest }) {
  return (
    <span className={`${styles.ringPhoto} ${className}`} {...rest}>
      <BrushRing tone={tone} />
      <span className={styles.ringImg}>
        <img src={img.src} width={img.width} height={img.height} alt={alt ?? img.alt ?? ""} loading="lazy" decoding="async" />
      </span>
    </span>
  );
}

/** Photo clipped to the organic blob shape, with a brushed outline. */
export function BlobPhoto({ img, className = "", eager = false, alt, imgKey }) {
  return (
    <span className={`${styles.blob} ${className}`}>
      <span className={styles.blobImg}>
        <img
          key={imgKey ?? img.src}
          src={img.src}
          width={img.width}
          height={img.height}
          alt={alt ?? img.alt ?? ""}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          decoding="async"
          style={{
            objectPosition: img.position,
            objectFit: img.contain ? "contain" : undefined,
            padding: img.contain ? "6%" : undefined,
            background: img.contain ? "#fff" : undefined,
          }}
        />
      </span>
      <svg className={styles.blobOutline} viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d={BLOB_1000} filter="url(#wc-brush)" />
        <path d={BLOB_1000} className={styles.blobOutlineThin} transform="translate(500 500) scale(1.03) translate(-500 -500)" />
      </svg>
    </span>
  );
}

/** Thin concentric circles, like sound spreading from a struck bowl. */
export function ResonanceRings({ className = "", count = 6 }) {
  return (
    <svg className={`${styles.resonance} ${className}`} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      {Array.from({ length: count }, (_, i) => (
        <circle key={i} cx="100" cy="100" r={20 + i * 15} data-ring />
      ))}
    </svg>
  );
}
