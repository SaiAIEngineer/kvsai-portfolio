"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();

  // 🎬 Cinematic scroll effects - Adjusted for better performance
  const yBg = useTransform(scrollY, [0, 600], [0, 80]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.2]);
  const yOrbs = useTransform(scrollY, [0, 600], [0, 40]);

  // 🔽 Scroll to Projects
  const handleScroll = () => {
    const section = document.getElementById("projects");
    if (section) {
      const offset = window.innerWidth < 768 ? 60 : 80;
      window.scrollTo({
        top: section.offsetTop - offset,
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
        if (prev > fullText.length + 15) return 0;
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  const words = [
    "I", "am", "NAME_PLACEHOLDER", ",", "an", "Applied", "AI", 
    "Research", "Engineer", "focused", "on", "Generative", "AI,", 
    "LLM", "systems,", "and", "scalable", "intelligent", "applications."
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 overflow-hidden"
    >
      {/* 🔥 BACKGROUND & OVERLAYS */}
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
            filter: "brightness(0.8) contrast(1.1)", // Slightly darker for better text readability on mobile
          }}
        />
        <div className="absolute inset-0 bg-black/40 md:bg-black/25" />
        
        {/* Optimized Blur Orbs for Mobile */}
        <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-cyan-500/20 blur-[80px] md:blur-[120px] -top-10 -left-10 opacity-60" />
        <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 blur-[80px] md:blur-[120px] -bottom-10 -right-10 opacity-60" />
      </motion.div>

      {/* PARALLAX ORBS - Hidden or scaled down on mobile */}
      <motion.div
        style={{ y: yOrbs }}
        className="hidden md:block absolute w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl top-20 left-20 -z-10"
      />

      {/* 🔥 TAGLINE */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-2 text-[10px] md:text-sm tracking-[0.2em] mb-6 uppercase font-bold"
      >
        <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">AI</span>
        <span className="text-gray-600">•</span>
        <span className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">LLM</span>
        <span className="text-gray-600">•</span>
        <span className="text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">Generative Systems</span>
      </motion.div>

      {/* 🔥 TITLE - Scale reduced for mobile */}
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight px-2">
        Building Scalable <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
          Intelligent AI Systems
        </span>
      </h1>

      {/* 🔥 DESCRIPTION - Better spacing for mobile */}
      <div className="mt-8 text-gray-300 max-w-2xl text-sm md:text-lg leading-relaxed px-4">
        <p className="inline-flex flex-wrap justify-center gap-x-1.5">
          {words.map((word, i) => {
            if (word === "NAME_PLACEHOLDER") {
              return (
                <span key={i} className="text-cyan-300 font-semibold min-w-[100px]">
                  {displayText}
                  <span className="inline-block w-[2px] h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle" />
                </span>
              );
            }
            return <span key={i}>{word}</span>;
          })}
        </p>
      </div>

      {/* 🔥 BUTTONS - Full width on very small screens */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-10 sm:px-0">
        <button
          onClick={handleScroll}
          className="bg-cyan-400 text-black px-8 py-3.5 rounded-full font-bold text-sm md:text-base hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
        >
          View Projects
        </button>

        <a
          href="/Kalyanam_Venkata_Sree_Sai_Resume.pdf"
          target="_blank"
          className="border border-white/20 px-8 py-3.5 rounded-full text-sm md:text-base font-medium hover:bg-white/5 hover:border-cyan-400/50 transition-all text-center"
        >
          Download Resume
        </a>
      </div>
      
      {/* Scroll Indicator for Desktop */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 hidden md:flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>
    </section>
  );
}
