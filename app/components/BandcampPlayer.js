"use client";

import { useState } from "react";
import styles from "./Creations.module.css";

// The Bandcamp iframe only loads when the visitor asks for it, so the page
// makes no third-party requests on first view.
const ALBUM_SRC =
  "https://bandcamp.com/EmbeddedPlayer/album=3935717766/size=large/bgcol=ffffff/linkcol=669404/tracklist=false/artwork=small/transparent=true/";

export default function BandcampPlayer() {
  const [loaded, setLoaded] = useState(false);

  return loaded ? (
    <iframe
      title="Jelila on Bandcamp: recordings explaining her methods and sessions"
      src={ALBUM_SRC}
      className={styles.playerFrame}
      seamless
    />
  ) : (
    <button type="button" className="btn btn-outline" onClick={() => setLoaded(true)}>
      <span className={styles.playIcon} aria-hidden="true" />
      Play here
    </button>
  );
}
