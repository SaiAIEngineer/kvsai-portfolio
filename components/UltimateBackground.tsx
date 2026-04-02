"use client";

import Particles from "react-tsparticles";
import type { IOptions } from "tsparticles-engine";
import { useMemo } from "react";

export default function UltimateBackground() {
  const options = useMemo(
    () =>
      ({
        fpsLimit: 30, // ✅ reduce lag
        detectRetina: false,

        particles: {
          number: { value: 3 }, // ✅ low for performance
          color: { value: "#22d3ee" },

          links: {
            enable: true,
            color: "#22d3ee",
            distance: 120,
            opacity: 0.08,
            width: 1,
          },

          move: {
            enable: true,
            speed: 0.2,
            outModes: "out",
          },

          size: { value: 2 },
          opacity: { value: 0.2 },
        },

        interactivity: {
          events: {
            onHover: { enable: false },
            resize: true,
          },
        },
      }) as unknown as IOptions,
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      
      {/* 🌌 Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero-bg.webp')", // ✅ correct path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 💡 Glow Effects */}
      <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-10 left-10" />
      <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl bottom-10 right-10" />

      {/* ⚡ Particles (NON-BLOCKING) */}
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
}