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

  // --- ADVANCED MAGNETIC BUTTON WITH GLASS SHIMMER ---
  const MagneticButton = ({ children, className, onClick, href, isPrimary }: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const translateX = useSpring(x, springConfig);
    const translateY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current!.getBoundingClientRect();
      
      // Magnetic pull
      x.set(clientX - (left + width / 2));
      y.set(clientY - (top + height / 2));
      
      // Local mouse position for internal glow
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const Content = (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: translateX, y: translateY }}
        className="relative group p-1"
      >
        <button
          onClick={onClick}
          className={`${className} relative overflow-hidden transition-all duration-500 rounded-full flex items-center justify-center`}
        >
          {/* 1. Background Shimmer Effect */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] transition-transform" />
          
          {/* 2. Rotating Border Beam (Primary Only) */}
          {isPrimary && (
            <div className="absolute inset-0 p-[2px] rounded-full overflow-hidden">
              <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22d3ee_0%,#a855f7_50%,#22d3ee_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[2px] bg-black rounded-full z-10 hidden group-hover:block" />
            </div>
          )}

          {/* 3. Mouse-Follow Glow */}
          <motion.div 
            className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([latestX, latestY]) => `radial-gradient(60px circle at ${latestX}px ${latestY}px, rgba(34, 211, 238, 0.15), transparent 80%)`
              )
            }}
          />

          <span className="relative z-20 px-10 py-4 flex items-center gap-2">
            {children}
          </span>
        </button>
      </motion.div>
    );

    return href ? <a href={href} target="_blank" className="inline-block">{Content}</a> : Content;
  };

  // --- NEURAL NETWORK CANVAS ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let particles: any[] = [];
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
      }));
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 211, 238, 0.4)"; ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(p.x - particles[j].x, p.y - particles[j].y);
          if (d < 160) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - d/160)})`;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };
    init(); animate();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, []);

  // Typing Logic
  const fullText = "Kalyanam Venkata Sree Sai";
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i % (fullText.length + 40)));
      i++;
    }, 120);
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
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 pointer-events-none" />

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-[10px] tracking-[0.5em] mb-8 uppercase font-bold text-gray-500"
      >
        <span className="text-cyan-400 animate-pulse">AI</span> • LLM • RESEARCH
      </motion.p>

      <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-10">
        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Intelligent</span> Systems
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

      <div className="flex flex-col sm:flex-row gap-8 relative z-20">
        <MagneticButton
          isPrimary
          onClick={handleScroll}
          className="bg-cyan-500 text-black font-bold text-sm shadow-[0_0_30px_rgba(34,211,238,0.2)]"
        >
          View Projects
        </MagneticButton>

        <MagneticButton
          href="/Kalyanam_Venkata_Sree_Sai_Resume.pdf"
          className="bg-white/5 border border-white/10 text-white font-medium text-sm backdrop-blur-xl"
        >
          Download Resume
        </MagneticButton>
      </div>
    </motion.section>
  );
}
