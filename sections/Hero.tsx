"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();

  // 🎬 Cinematic scroll effects
  const yBg = useTransform(scrollY, [0, 600], [0, 80]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.2]);
  const yOrbs = useTransform(scrollY, [0, 600], [0, 40]);

  // 🔽 Smooth Scroll to Projects
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

  // ✨ Typing animation for Name
  const fullText = "Kalyanam Venkata Sree Sai";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      setIndex((prev) => {
        if (prev > fullText.length + 20) return 0;
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  // 📝 Expanded Professional Bio
  const bioWords = [
    "I", "am", "NAME_PLACEHOLDER", ",", "an", "Applied", "AI", "Research", "Engineer",
    "focused", "on", "the", "intersection", "of", "Generative", "AI,", "LLM", "orchestration,",
    "and", "scalable", "cloud", "architecture.", "I", "transform", "complex", "datasets",
    "and", "research", "papers", "into", "deployable,", "high-performance", "AI", "solutions,",
    "ensuring", "that", "every", "model", "I", "build", "is", "optimized", "for", "reliability,",
    "latency,", "and", "real-world", "impact."
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 overflow-hidden"
    >
      {/* 🔥 DYNAMIC BACKGROUND */}
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
            filter: "brightness(0.7) contrast(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/30" />
        
        {/* Neon Accents */}
        <div className="absolute w-72 h-72 md:w-[500px] md:h-[500px] bg-cyan-500/10 blur-[100px] -top-20 -left-20 opacity-50" />
        <div className="absolute w-72 h-72 md:w-[500px] md:h-[500px] bg-purple-500/10 blur-[100px] -bottom-20 -right-20 opacity-50" />
      </motion.div>

      {/* 🔥 TAGLINE / SPECIALIZATION */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-2 text-[10px] md:text-xs tracking-[0.3em] mb-8 uppercase font-bold text-gray-400"
      >
        <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Generative AI</span>
        <span className="hidden sm:inline opacity-30">|</span>
        <span className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">LLM Ops</span>
        <span className="hidden sm:inline opacity-30">|</span>
        <span className="text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">Cloud Architecture</span>
      </motion.div>

      {/* 🔥 MAIN HEADLINE */}
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight max-w-5xl">
        Architecting the Future of <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Intelligent Systems
        </span>
      </h1>

      {/* 🔥 EXPANDED BIO */}
      <div className="mt-10 text-gray-300 max-w-4xl text-sm md:text-lg leading-relaxed px-2 md:px-10">
        <p className="inline-flex flex-wrap justify-center gap-x-1.5 gap-y-1">
          {bioWords.map((word, i) => {
            if (word === "NAME_PLACEHOLDER") {
              return (
                <span key={i} className="text-cyan-300 font-semibold border-b border-cyan-500/30">
                  {displayText}
                  <span className="inline-block w-[2px] h-[1.1em] bg-cyan-400 ml-1 animate-pulse align-middle" />
                </span>
              );
            }
            return <span key={i} className="hover:text-white transition-colors duration-300 cursor-default">{word}</span>;
          })}
        </p>
      </div>

      {/* 🔥 CALL TO ACTION */}
      <div className="mt-12 flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-10 sm:px-0">
        <button
          onClick={handleScroll}
          className="group relative bg-cyan-400 text-black px-10 py-4 rounded-full font-bold text-sm md:text-base transition-all hover:scale-105 active:scale-95 overflow-hidden"
        >
          <span className="relative z-10">Explore Projects</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </button>

        <a
          href="/Kalyanam_Venkata_Sree_Sai_Resume.pdf"
          target="_blank"
          className="border border-white/10 px-10 py-4 rounded-full text-sm md:text-base font-medium hover:bg-white/5 hover:border-cyan-400/50 transition-all text-center backdrop-blur-sm"
        >
          Download Resume
        </a>
      </div>
      
      {/* Scroll Hint */}
      <motion.div 
        animate={{ y: [0, 8, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 hidden md:flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
