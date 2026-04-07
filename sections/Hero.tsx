"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  const handleScroll = () => {
    const section = document.getElementById("projects");
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
    }
  };

  // --- STATIC BUTTON (no movement) WITH VIEW BUBBLE + SHIMMER ---
  const StaticButton = ({
    children,
    className,
    onClick,
    href,
    bubbleLabel = "VIEW",
  }: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    bubbleLabel?: string;
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [shimmer, setShimmer] = useState(false);

    const handleClick = () => {
      setShimmer(false);
      setTimeout(() => setShimmer(true), 10);
      onClick?.();
    };

    const Content = (
      <div
        className="relative inline-flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* VIEW bubble */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="absolute z-30 pointer-events-none bg-cyan-400 text-black text-[9px] font-black tracking-widest py-1 px-2.5 rounded-full"
          style={{ top: "-8px", right: "-10px" }}
        >
          {bubbleLabel}
        </motion.div>

        <button
          onClick={handleClick}
          className={`${className} relative overflow-hidden rounded-full flex items-center justify-center transition-all duration-300`}
        >
          <span className="relative z-20 px-10 py-4 font-bold text-sm flex items-center gap-2">
            {children}
          </span>

          {/* Shimmer sweep on click */}
          {shimmer && (
            <span
              key={Date.now()}
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%)",
                animation: "shimmerSweep 0.5s ease forwards",
              }}
            />
          )}
        </button>
      </div>
    );

    return href ? (
      <a href={href} target="_blank" rel="noreferrer" className="inline-block">
        {Content}
      </a>
    ) : (
      Content
    );
  };

  // --- TYPING ANIMATION ---
  const fullText = "Kalyanam Venkata Sree Sai";
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i % (fullText.length + 30)));
      i++;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const words = useMemo(
    () => [
      "I", "am", "NAME_PLACEHOLDER", ",", "a", "dedicated", "Applied", "AI",
      "Research", "Engineer", "focused", "on", "mastering", "Generative", "AI",
      "and", "LLM", "orchestration.", "I", "specialize", "in", "transforming",
      "complex", "research", "into", "robust,", "high-performance", "AI",
      "solutions", "meticulously", "optimized", "for", "reliability,", "minimal",
      "latency,", "and", "measurable", "real-world", "impact.",
    ],
    []
  );

  // --- CURSOR ORB ---
  const orbRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const orb = orbRef.current;
    if (!section || !orb) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      orb.style.left = `${x}px`;
      orb.style.top = `${y}px`;
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Shimmer keyframe injection */}
      <style>{`
        @keyframes shimmerSweep {
          from { transform: translateX(-100%); }
          to   { transform: translateX(140%); }
        }
        .btn-cyan {
          background: #22d3ee;
          color: #000;
          border: none;
          box-shadow: none;
          transition: box-shadow 0.35s ease, transform 0.2s ease;
        }
        .btn-cyan:hover {
          box-shadow: 0 0 16px 3px rgba(34,211,238,0.55), 0 0 32px 8px rgba(34,211,238,0.2);
        }
        .btn-violet {
          background: rgba(255,255,255,0.05);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: none;
          transition: box-shadow 0.35s ease, border-color 0.35s ease, transform 0.2s ease;
        }
        .btn-violet:hover {
          border-color: rgba(167,139,250,0.6);
          box-shadow: 0 0 16px 3px rgba(167,139,250,0.45), 0 0 32px 8px rgba(167,139,250,0.15);
        }
        .btn-cyan:active, .btn-violet:active {
          transform: scale(0.96);
        }
        @keyframes glowLoop {
          0%   { opacity: 0.9; text-shadow: none; }
          50%  { opacity: 1;   text-shadow: 0 0 6px currentColor; }
          100% { opacity: 0.9; text-shadow: none; }
        }
        .glow-ai {
          color: #22d3ee;
          animation: glowLoop 4s ease-in-out infinite;
        }
        .glow-llm {
          color: #93c5fd;
          animation: glowLoop 4s ease-in-out infinite;
          animation-delay: 1.3s;
        }
        .glow-research {
          color: #c4b5fd;
          animation: glowLoop 4s ease-in-out infinite;
          animation-delay: 2.6s;
        }
        .dot-sep {
          color: rgba(255,255,255,0.2);
          margin: 0 0.5rem;
        }
      `}</style>

      <motion.section
        id="home"
        ref={sectionRef}
        style={{ opacity: opacityHero }}
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black font-sora overflow-hidden"
      >
        {/* Cursor orb — follows mouse, no movement on buttons */}
        <div
          ref={orbRef}
          className="pointer-events-none absolute z-0"
          style={{
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,211,238,0.11) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            transition: "left 0.06s linear, top 0.06s linear",
          }}
        />

        {/* Tag line — large glowing words */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 flex items-center mb-8 uppercase font-black tracking-[0.35em] text-2xl md:text-3xl select-none"
        >
          <span className="glow-ai">AI</span>
          <span className="dot-sep">•</span>
          <span className="glow-llm">LLM</span>
          <span className="dot-sep">•</span>
          <span className="glow-research">RESEARCH</span>
        </motion.p>

        {/* Headline */}
        <h1 className="relative z-10 text-5xl md:text-8xl font-black tracking-tighter text-white mb-10">
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Intelligent
          </span>{" "}
          Systems
        </h1>

        {/* Typing bio */}
        <div className="relative z-10 text-gray-400 max-w-4xl text-sm md:text-lg leading-relaxed min-h-[120px] mb-12">
          <p className="flex flex-wrap justify-center gap-x-2">
            {words.map((word, i) =>
              word === "NAME_PLACEHOLDER" ? (
                <span
                  key={i}
                  className="text-cyan-300 font-bold border-b-2 border-cyan-500/20 min-w-[200px] text-left"
                >
                  {displayText}
                  <span className="w-[2px] h-5 bg-cyan-400 inline-block animate-pulse ml-1" />
                </span>
              ) : (
                <span key={i} className="hover:text-white transition-colors duration-300">
                  {word}
                </span>
              )
            )}
          </p>
        </div>

        {/* Separate buttons — glow only on hover */}
        <div className="relative z-20 flex items-center gap-5">
          <StaticButton
            onClick={handleScroll}
            bubbleLabel="VIEW"
            className="btn-cyan"
          >
            View Projects
          </StaticButton>

          <StaticButton
            href="/Kalyanam_Venkata_Sree_Sai_Resume.pdf"
            bubbleLabel="SAVE"
            className="btn-violet"
          >
            Download Resume
          </StaticButton>
        </div>
      </motion.section>
    </>
  );
}
