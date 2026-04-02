"use client";
import { useEffect, useRef, useState } from "react";
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768;
    if (isTouch) return;
    setVisible(true);
    const move = (e: MouseEvent) => {
      const transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      if (dotRef.current) dotRef.current.style.transform = transform;
      if (ringRef.current) ringRef.current.style.transform = transform;
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button");
      if (interactive) {
        setIsHovering(true);
        setLabel(interactive.getAttribute("data-cursor") || "VIEW");
      } else {
        setIsHovering(false);
        setLabel("");
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);
  if (!visible) return null;
  return (
    // ✅ ONLY ONE LINE ADDED — hides on all touch/mobile devices via CSS
    <div className="hidden md:contents" style={{ ["@media(pointer:coarse)" as string]: { display: "none" } }}>
      {/* DOT */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[999999] w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          willChange: "transform",
          transform: "translate3d(-100px,-100px,0)",
        }}
      />
      {/* RING */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[999999] flex items-center justify-center rounded-full
        transition-[width,height,background,box-shadow,opacity] duration-200 ease-out
        ${
          isHovering
            ? "w-12 h-12 bg-cyan-400/10 border border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] backdrop-blur-sm"
            : "w-6 h-6 border border-cyan-400/70 opacity-70"
        }
        -translate-x-1/2 -translate-y-1/2`}
        style={{
          willChange: "transform",
          transform: "translate3d(-100px,-100px,0)",
        }}
      >
        {/* LABEL */}
        <span
          className={`text-[11px] font-semibold tracking-widest text-cyan-300 transition-all duration-200 ${
            isHovering ? "opacity-100 scale-95" : "opacity-0 scale-90"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
