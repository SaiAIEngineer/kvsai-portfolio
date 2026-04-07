"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function Hero() {
  const { scrollY } = useScroll();

  // Cinematic scroll effects
  const yBg = useTransform(scrollY, [0, 600], [0, 100]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.3]);

  const handleScroll = () => {
    const section = document.getElementById("projects");
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // ✨ Optimized Typing animation for the Name
  const fullText = "Kalyanam Venkata Sree Sai";
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else if (i > fullText.length + 30) { // Pause at the end before reset
        i = 0;
        setDisplayText("");
      } else {
        i++;
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Updated Professional Bio: Exactly 39 words
  const words = useMemo(() => [
    "I", "am", "NAME_PLACEHOLDER", ",", "a", "dedicated", "Applied", "AI", "Research", 
    "Engineer", "focused", "on", "mastering", "Generative", "AI", "and", "LLM", 
    "orchestration.", "I", "specialize", "in", "transforming", "complex", "research", 
    "into", "robust,", "high-performance", "AI", "solutions", "meticulously", 
    "optimized", "for", "reliability,", "minimal", "latency,", "and", "measurable", 
    "real-world", "impact."
  ], []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 overflow-hidden font-sora"
    >
      {/* BACKGROUND EFFECTS */}
      <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 -z-10 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "url('/hero-bg.webp')", 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            filter: "brightness(0.5) contrast(1.1)" 
          }} 
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute w-72 h-72 bg-cyan-500/10 blur-[120px] top-0 left-0" />
        <div className="absolute w-72 h-72 bg-purple-500/10 blur-[120px] bottom-0 right-0" />
      </motion.div>

      {/* TAGLINE */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[10px] sm:text-xs md:text-sm tracking-[0.3em] mb-6 flex flex-wrap gap-2 items-center justify-center uppercase font-bold text-gray-400"
      >
        <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] animate-pulse">AI</span>
        <span className="opacity-30">•</span>
        <span className="text-purple-400">LLM</span>
        <span className="opacity-30">•</span>
        <span className="text-pink-400">GENERATIVE SYSTEMS</span>
      </motion.p>

      {/* MAIN TITLE */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tighter text-white">
        Building Scalable <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Intelligent AI Systems
        </span>
      </h1>

      {/* DESCRIPTION & TYPING */}
      <div className="mt-8 text-gray-400 max-w-4xl text-sm md:text-base lg:text-lg leading-relaxed px-2 min-h-[100px]">
        <p className="flex flex-wrap justify-center gap-x-1.5 gap-y-1">
          {words.map((word, i) => {
            if (word === "NAME_PLACEHOLDER") {
              return (
                <span key={i} className="text-cyan-300 font-bold border-b border-cyan-500/30 min-w-[180px] inline-block text-left">
                  {displayText}
                  <span className="inline-block w-[2px] h-[1em] bg-cyan-400 ml-1 animate-pulse align-middle" />
                </span>
              );
            }
            return <span key={i} className="hover:text-white transition-colors duration-300">{word}</span>;
          })}
        </p>
      </div>

      {/* BUTTONS */}
      <div className="mt-12 flex flex-col sm:flex-row gap-5 relative z-20">
        <button
          onClick={handleScroll}
          className="bg-cyan-500 text-black px-10 py-4 rounded-full font-bold text-sm hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
        >
          View Projects
        </button>

        <a
          href="/Kalyanam_Venkata_Sree_Sai_Resume.pdf"
          target="_blank"
          className="border border-white/10 px-10 py-4 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all backdrop-blur-md"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
