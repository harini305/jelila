import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// One family for the whole site: the elegant serif of the Jelila wordmark
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://jelila.com"),
  // No logo file exists yet (audit Q12); an empty icon stops browsers
  // requesting a missing /favicon.ico on every visit
  icons: { icon: "data:," },
  title: "Jelila – Spiritual Healer & Sound Healing in Ubud, Bali and Online",
  description:
    "Jelila is an international spiritual healer, sound healer and author in Ubud, Bali and online. Explore The Reprogramming, chakra balancing, past-life journeys, her books and healing music, and arrange a session.",
  openGraph: {
    title: "Jelila – Spiritual Healer & Sound Healing in Ubud, Bali and Online",
    description:
      "Intuitive healing, sound healing and The Reprogramming with Jelila, in Ubud, Bali and online.",
    images: [{ url: "/images/og-jelila.jpg", width: 1200, height: 630, alt: "Jelila smiling in front of carved Balinese wood" }],
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F1E9DE",
};

// Marks the document before first paint so the hero can start hidden for its
// entrance animation. Skipped under reduced motion; CSS has a timed fallback.
const motionScript = `try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion')}}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={cormorant.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
