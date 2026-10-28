"use client";

import { useCallback, useRef, useState } from "react";

// Accessible tabs: arrow keys, Home and End move between tabs (WAI-ARIA pattern).
export default function useTabs(count, prefix) {
  const [index, setIndex] = useState(0);
  const refs = useRef([]);

  const select = useCallback((i) => {
    setIndex(i);
    refs.current[i]?.focus();
  }, []);

  const onKeyDown = useCallback(
    (e) => {
      const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (e.key in keys) {
        e.preventDefault();
        select((index + keys[e.key] + count) % count);
      } else if (e.key === "Home") {
        e.preventDefault();
        select(0);
      } else if (e.key === "End") {
        e.preventDefault();
        select(count - 1);
      }
    },
    [count, index, select]
  );

  const tabProps = (i) => ({
    role: "tab",
    id: `${prefix}-tab-${i}`,
    "aria-selected": index === i,
    "aria-controls": `${prefix}-panel-${i}`,
    tabIndex: index === i ? 0 : -1,
    ref: (el) => (refs.current[i] = el),
    onClick: () => setIndex(i),
    onKeyDown,
  });

  const panelProps = (i) => ({
    role: "tabpanel",
    id: `${prefix}-panel-${i}`,
    "aria-labelledby": `${prefix}-tab-${i}`,
    hidden: index !== i,
    tabIndex: 0,
  });

  return { index, setIndex, tabProps, panelProps };
}
