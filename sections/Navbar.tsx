"use client";

import { useEffect, useState } from "react";
import { Menu, X, Play, Camera } from "lucide-react";
import { motion } from "framer-motion";

/* =========================
   LOGO FLIP
========================= */
function LogoFlip() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-27.5 h-10 cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute w-full h-full flex items-center justify-center 
          rounded-lg border border-cyan-500/30 
          bg-white/5 backdrop-blur-md text-cyan-400 font-bold tracking-widest
          shadow-[0_0_12px_rgba(0,255,255,0.3)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          KVSAI
        </div>

        {/* BACK */}
        <div
          className="absolute w-full h-full flex items-center justify-center 
          rounded-lg border border-purple-500/30 
          bg-white/5 backdrop-blur-md text-purple-400 text-xs font-semibold text-center px-2
          shadow-[0_0_12px_rgba(180,0,255,0.3)]"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          Applied AI Engineer
        </div>
      </motion.div>
    </div>
  );
}

/* =========================
   NAVBAR
========================= */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const y = section.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });

    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 grid grid-cols-3 items-center transition-all duration-300 ${
          scrolled
            ? "bg-[#020617]/95 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.15)]"
            : "bg-[#020617]"
        }`}
      >
        {/* LEFT - LOGO */}
        <div className="flex items-center">
          <LogoFlip />
        </div>

        {/* CENTER */}
        <div className="hidden md:flex justify-center gap-6 lg:gap-8 text-sm">
          {["home", "projects", "skills", "research", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="group relative"
            >
              <span className="transition group-hover:text-cyan-400">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex justify-end items-center gap-2 md:gap-3">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@NovarionAI"
            target="_blank"
            className="hidden md:flex p-2 rounded-full border border-red-500/30 hover:border-red-500 hover:bg-red-500/10 transition hover:scale-110"
          >
            <Play className="w-5 h-5 text-red-400" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/saikalyanam.ai/"
            target="_blank"
            className="hidden md:flex p-2 rounded-full border border-pink-500/30 hover:border-pink-500 hover:bg-pink-500/10 transition hover:scale-110"
          >
            <Camera className="w-5 h-5 text-pink-400" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sai089/"
            target="_blank"
            className="hidden md:flex items-center gap-2 border border-white/20 px-4 py-1.5 rounded-full text-sm hover:border-blue-500 hover:text-blue-400"
          >
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SaiAIEngineer"
            target="_blank"
            className="hidden md:flex items-center gap-2 border border-white/20 px-4 py-1.5 rounded-full text-sm hover:border-purple-500 hover:text-purple-400"
          >
            GitHub
          </a>

          {/* Resume */}
          <a
            href="/Kalyanam_Venkata_Sree_Sai_Resume.pdf"
            target="_blank"
            className="hidden md:block bg-linear-to-r from-cyan-400 to-blue-500 text-black px-5 py-1.5 rounded-full text-sm font-semibold hover:scale-110"
          >
            Resume
          </a>

          {/* MOBILE MENU */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#020617]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-lg transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {["home", "projects", "skills", "research", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="hover:text-cyan-400 text-xl"
          >
            {item}
          </button>
        ))}

        {/* SOCIAL MOBILE */}
        <div className="flex gap-4 mt-4">
          <a href="https://www.youtube.com/@NovarionAI" target="_blank">
            <Play className="w-6 h-6 text-red-400" />
          </a>
          <a href="https://www.instagram.com/saikalyanam.ai/" target="_blank">
            <Camera className="w-6 h-6 text-pink-400" />
          </a>
        </div>
      </div>
    </>
  );
}
