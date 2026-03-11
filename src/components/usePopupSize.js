"use client";

import { useState, useEffect } from "react";

/**
 * Returns responsive Leaflet Popup maxWidth / minWidth values
 * based on the current viewport width.
 *
 *   mobile  (<640px)  → 300 / 260
 *   sm      (≥640px)  → 360 / 320
 *   md+     (≥768px)  → 420 / 380
 */
function getPopupSize(width) {
  if (width >= 768) return { maxWidth: 420, minWidth: 380 };
  if (width >= 640) return { maxWidth: 360, minWidth: 320 };
  return { maxWidth: 300, minWidth: 260 };
}

export function usePopupSize() {
  const [size, setSize] = useState(() =>
    typeof window !== "undefined"
      ? getPopupSize(window.innerWidth)
      : { maxWidth: 300, minWidth: 260 },
  );

  useEffect(() => {
    function handleResize() {
      setSize(getPopupSize(window.innerWidth));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
