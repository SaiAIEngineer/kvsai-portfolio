"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();

  // Cinematic scroll effects
  const yBg = useTransform(scrollY, [0, 600], [0, 100]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.3]);
  const yOrbs = useTransform(scrollY, [0, 600], [0, 60]);

  const handleScroll = () => {
    const section = document.getElementById("projects");
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // ✨ Typing animation - FIXED: Increased loop buffer for smoother reset
  const fullText = "Kalyanam Venkata Sree Sai";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      setIndex((prev) => {
        // Keeps the name fully visible for a moment before restarting
        if (prev > fullText.length + 25) return 0; 
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  // Expanded Professional Bio - FIXED: Cleaned up spacing
  const words = [
    "I", "am", "NAME_PLACEHOLDER", ",", "an", "Applied", "AI", "Research", "Engineer",
    "dedicated", "to", "mastering", "the", "complex", "intersection", "of", "Generative", 
    "AI,", "LLM", "orchestration,", "and", "scalable", "cloud", "architecture.", "My", 
    "work", "bridges", "the", "critical", "gap", "between", "theoretical", "innovation", 
    "and", "industrial", "utility;", "I", "specialize", "in", "transforming", "intricate", 
    "datasets", "and", "cutting-edge", "research", "papers", "into", "robust,", 
    "deployable,", "and", "high-performance", "AI", "solutions.", "By", "leveraging", 
    "advanced", "prompt", "engineering,", "RAG", "pipelines,", "and", "efficient", 
    "model", "fine-tuning,", "I", "ensure", "that", "every", "system", "I", "architect", 
    "is", "meticulously", "optimized", "for", "reliability,", "minimal", "latency,", 
    "and", "measurable", "real-world", "impact,", "ultimately", "turning", "the", 
    "potential", "of", "artificial", "intelligence", "into", "a", "tangible", "tool", 
    "for", "global", "progress."
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 overflow-hidden font-(--font-sora)"
    >
      {/* BACKGROUND EFFECTS */}
      <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/hero-bg.webp')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.7) contrast(1.1)" }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl top-0 left-0 opacity-50" />
        <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl bottom-0 right-0 opacity-50" />
      </motion.div>

      {/* 🔥 TAGLINE - FIXED: Scaled text for mobile so it never wraps awkwardly */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] mb-6 flex flex-wrap gap-2 items-center justify-center uppercase font-bold"
      >
        <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse">
          AI
        </span>
        <span className="text-gray-600 opacity-50">•</span>
        <span className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse">
          LLM
        </span>
        <span className="text-gray-600 opacity-50">•</span>
        <span className="text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] animate-pulse">
          GENERATIVE SYSTEMS
        </span>
      </motion.p>

      {/* TITLE - FIXED: Scaled for mobile */}
      <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight px-2">
        Building Scalable <br className="hidden sm:block" />
        <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">Intelligent AI Systems</span>
      </h1>

      {/* 🔥 DESCRIPTION & TYPING - FIXED: Added min-height and proper alignment for mobile */}
      <div className="mt-8 text-gray-300 max-w-5xl text-xs sm:text-sm md:text-lg leading-relaxed px-2">
        <p className="flex flex-wrap justify-center gap-x-1.5 gap-y-1">
          {words.map((word, i) => {
            if (word === "NAME_PLACEHOLDER") {
              return (
                <span key={i} className="text-cyan-300 font-semibold border-b border-cyan-500/20 whitespace-nowrap">
                  {displayText}
                  <span className="inline-block w-[2px] h-[1.1em] bg-cyan-400 ml-1 animate-pulse align-middle" />
                </span>
              );
            }
            return <span key={i} className="hover:text-white transition-colors">{word}</span>;
          })}
        </p>
      </div>

      {/* BUTTONS */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-10 sm:px-0">
        <button
          onClick={handleScroll}
          className="bg-cyan-400 text-black px-8 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          View Projects
        </button>

        <a
          href="/Kalyanam_Venkata_Sree_Sai_Resume.pdf"
          target="_blank"
          className="border border-white/20 px-8 py-3.5 rounded-full text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 transition text-center backdrop-blur-sm"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
