"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();

  // 🎬 Cinematic scroll effects
  const yBg = useTransform(scrollY, [0, 600], [0, 100]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.3]);
  const yOrbs = useTransform(scrollY, [0, 600], [0, 60]);

  // 🔽 Scroll to Projects
  const handleScroll = () => {
    const section = document.getElementById("projects");
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // ✨ Typing animation
  const fullText = "Kalyanam Venkata Sree Sai";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      setIndex((prev) => {
        if (prev > fullText.length + 10) return 0;
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  const words = [
    "I",
    "am",
    "NAME_PLACEHOLDER",
    ",",
    "an",
    "Applied",
    "AI",
    "Research",
    "Engineer",
    "focused",
    "on",
    "Generative",
    "AI,",
    "LLM",
    "systems,",
    "and",
    "scalable",
    "intelligent",
    "applications.",
    "I",
    "design",
    "and",
    "build",
    "AI-driven",
    "solutions",
    "that",
    "bridge",
    "research",
    "and",
    "real-world",
    "impact.",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden font-(--font-sora)"
    >
      {/* 🔥 BACKGROUND */}
      <motion.div
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(1.25) contrast(1.1) saturate(1.1)",
          }}
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute w-125 h-125 bg-cyan-500/30 blur-3xl top-10 left-10" />
        <div className="absolute w-100 h-100 bg-purple-500/30 blur-3xl bottom-10 right-10" />
      </motion.div>

      {/* ORBS */}
      <motion.div
        style={{ y: yOrbs }}
        className="absolute w-62.5 h-62.5 bg-cyan-400/10 rounded-full blur-xl top-20 left-20 -z-10 pointer-events-none"
      />
      <motion.div
        style={{ y: yOrbs }}
        className="absolute w-62.5 h-62.5 bg-purple-500/10 rounded-full blur-xl bottom-20 right-20 -z-10 pointer-events-none"
      />

      {/* 🔥 TAGLINE */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-lg tracking-widest mb-4 flex gap-2 items-center justify-center"
      >
        <span className="text-cyan-400 font-semibold drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] animate-pulse">
          AI
        </span>
        <span className="text-gray-500">•</span>
        <span className="text-purple-400 font-semibold drop-shadow-[0_0_10px_rgba(168,85,247,0.9)] animate-pulse">
          LLM
        </span>
        <span className="text-gray-500">•</span>
        <span className="text-pink-400 font-semibold drop-shadow-[0_0_10px_rgba(236,72,153,0.9)] animate-pulse">
          GENERATIVE SYSTEMS
        </span>
      </motion.p>

      {/* 🔥 TITLE */}
      <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]">
        Building Scalable
        <br />
        <span className="text-cyan-400">Intelligent AI Systems</span>
      </h1>

      {/* 🔥 DESCRIPTION */}
      <p className="mt-6 text-gray-300 max-w-3xl text-base md:text-lg leading-relaxed flex flex-wrap justify-center gap-x-1">
        {words.map((word, i) => {
          if (word === "NAME_PLACEHOLDER") {
            return (
              <span key={i} className="text-cyan-300 font-medium">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            );
          }
          return <span key={i}>{word}</span>;
        })}
      </p>

      {/* 🔥 BUTTONS */}
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        <button
          onClick={handleScroll}
          data-cursor="VIEW"
          className="bg-cyan-400 text-black px-7 py-3 rounded-full font-semibold text-base hover:scale-105 transition"
        >
          View Projects
        </button>

        <a
          href="/Kalyanam_Venkata_Sree_Sai_Resume.pdf"
          target="_blank"
          data-cursor="OPEN"
          className="border border-white/20 px-7 py-3 rounded-full text-base hover:border-cyan-400 hover:text-cyan-400 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
