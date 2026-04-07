"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();

  // Cinematic scroll fade-out
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

  // --- MAGNETIC BUTTON LOGIC ---
  const MagneticButton = ({ children, className, onClick, href, isPrimary }: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const translateX = useSpring(x, springConfig);
    const translateY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current!.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      x.set(clientX - centerX);
      y.set(clientY - centerY);
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
        className="relative"
      >
        <button
          onClick={onClick}
          className={`${className} relative overflow-hidden group transition-transform duration-300`}
        >
          {/* Border Beam Effect for Primary Button */}
          {isPrimary && (
            <span className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 [mask-image:linear-gradient(white,white)_padding-box,linear-gradient(white,white)] border-box opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          )}
          
          <span className="relative z-10">{children}</span>
          
          {/* Internal Glow Follow */}
          <span className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </motion.div>
    );

    return href ? <a href={href} target="_blank">{Content}</a> : Content;
  };

  // --- NEURAL NETWORK CANVAS ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: any[] = [];
    let mouse = { x: -1000, y: -1000 };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 211, 238, 0.5)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(p.x - particles[j].x, p.y - particles[j].y);
          if (d < 150) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${1 - d / 150 * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.strokeRect(p.x, p.y, 1, 1); // Optimization: connect lines
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", init);
    window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    return () => window.removeEventListener("resize", init);
  }, []);

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
    "real-world", "impact.",
  ], []);

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      style={{ opacity: opacityHero }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-black font-sora"
    >
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 pointer-events-none" />

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-[10px] tracking-[0.4em] mb-6 uppercase font-bold text-gray-500"
      >
        <span className="text-cyan-400 animate-pulse">AI</span> • LLM • GENERATIVE SYSTEMS
      </motion.p>

      <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white mb-8">
        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Intelligent</span> Systems
      </h1>

      <div className="text-gray-400 max-w-4xl text-sm md:text-lg leading-relaxed min-h-[100px]">
        <p className="flex flex-wrap justify-center gap-x-1.5">
          {words.map((word, i) => word === "NAME_PLACEHOLDER" ? (
            <span key={i} className="text-cyan-300 font-bold border-b border-cyan-500/30 min-w-[180px] text-left">
              {displayText}<span className="w-1 h-5 bg-cyan-400 inline-block animate-pulse" />
            </span>
          ) : (
            <span key={i} className="hover:text-white transition-colors">{word}</span>
          ))}
        </p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-8 relative z-20">
        <MagneticButton
          isPrimary
          onClick={handleScroll}
          className="bg-cyan-500 text-black px-12 py-5 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
        >
          View Projects
        </MagneticButton>

        <MagneticButton
          href="/Kalyanam_Venkata_Sree_Sai_Resume.pdf"
          className="border border-white/20 text-white px-12 py-5 rounded-full font-medium text-sm backdrop-blur-md hover:bg-white/5"
        >
          Download Resume
        </MagneticButton>
      </div>
    </motion.section>
  );
}
