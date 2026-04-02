"use client";

import { useEffect, useRef } from "react";

export default function GlobalSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        if (!ref.current) return;

        ref.current.style.background = `radial-gradient(
          300px circle at ${e.clientX}px ${e.clientY}px,
          rgba(34,211,238,0.06),
          transparent 60%
        )`;
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div ref={ref} className="fixed inset-0 pointer-events-none z-1" />;
}
