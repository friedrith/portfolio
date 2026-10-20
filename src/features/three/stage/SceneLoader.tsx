"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Stage = dynamic(() => import("./Stage"), { ssr: false });

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Loads the 3D layer only in the browser, only when WebGL is available, and
 * only once the page has hydrated and painted (it is decoration, not content).
 */
export function SceneLoader() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const start = () => setEnabled(hasWebGL());
    // Safari has no requestIdleCallback: fall back to a short timeout.
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(start, { timeout: 800 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(start, 200);
    return () => clearTimeout(id);
  }, []);
  return enabled ? <Stage /> : null;
}
