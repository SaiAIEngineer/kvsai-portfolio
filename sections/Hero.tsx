"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();

  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  const handleScroll = () => {
    const section = document.getElementById("projects");
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // --- MAGNETIC BUTTON COMPONENT WITH 'VIEW' BUBBLE ---
  const MagneticButton = ({ children, className, onClick, href, isPrimary }: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    const springConfig = { damping: 15, stiffness: 150 };
    const translateX = useSpring(x, springConfig);
    const translateY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current!.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Magnetic pull effect
      x.set((clientX - centerX) * 0.3);
      y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      setIsHovered(false);
    };

    const Content = (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ x: translateX, y: translateY }}
        className="relative group p-4"
      >
        <button
          onClick={onClick}
          className={`${className} relative overflow-hidden transition-all duration-300 rounded-full flex items-center justify-center`}
        >
          {/* 'VIEW' Bubble Effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            className="absolute z-30 pointer-events-none bg-cyan-400 text-black text-[10px] font-bold py-1 px-3 rounded-full flex items-center justify-center shadow-lg"
            style={{
              top: '10%',
              right: '-10%',
            }}
          >
            VIEW
          </motion.div>

          <span className="relative z-20 px-10 py-4 font-bold text-sm">
            {children}
          </span>
          
          {/* Internal Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
        </button>
      </motion.div>
    );

    return href ? <a href={href} target="_blank" className="inline-block">{Content}</a> : Content;
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

  const words = useMemo(() => [
    "I", "am", "NAME_PLACEHOLDER", ",", "a", "dedicated", "Applied", "AI", "Research",
    "Engineer", "focused", "on", "mastering", "Generative", "AI", "and", "LLM",
    "orchestration.", "I", "specialize", "in", "transforming", "complex", "research",
    "into", "robust,", "high-performance", "AI", "solutions", "meticulously",
    "optimized", "for", "reliability,", "minimal", "latency,", "and", "measurable",
    "real-world", "impact."
  ], []);

  return (
    <motion.section
      id="home"
      style={{ opacity: opacityHero }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black font-sora overflow-hidden"
    >
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-[10px] tracking-[0.5em] mb-8 uppercase font-bold text-gray-500"
      >
        <span className="text-cyan-400 animate-pulse">AI</span> • LLM • RESEARCH
      </motion.p>

      <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-10">
        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Intelligent</span> Systems
      </h1>

      <div className="text-gray-400 max-w-4xl text-sm md:text-lg leading-relaxed min-h-[120px] mb-12">
        <p className="flex flex-wrap justify-center gap-x-2">
          {words.map((word, i) => word === "NAME_PLACEHOLDER" ? (
            <span key={i} className="text-cyan-300 font-bold border-b-2 border-cyan-500/20 min-w-[200px] text-left">
              {displayText}<span className="w-[2px] h-5 bg-cyan-400 inline-block animate-pulse ml-1" />
            </span>
          ) : (
            <span key={i} className="hover:text-white transition-colors duration-300">{word}</span>
          ))}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 relative z-20">
        <MagneticButton
          isPrimary
          onClick={handleScroll}
          className="bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.2)]"
        >
          View Projects
        </MagneticButton>

        <MagneticButton
          href="/Kalyanam_Venkata_Sree_Sai_Resume.pdf"
          className="bg-white/5 border border-white/10 text-white backdrop-blur-xl"
        >
          Download Resume
        </MagneticButton>
      </div>
    </motion.section>
  );
}
