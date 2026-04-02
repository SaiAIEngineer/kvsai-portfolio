"use client";

import { useEffect, useState } from "react";
import { Menu, X, Play, Camera, Home, FolderOpen, Zap, FlaskConical, Mail } from "lucide-react";
import { motion } from "framer-motion";

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
        <div
          className="absolute w-full h-full flex items-center justify-center 
          rounded-lg border border-cyan-500/30 
          bg-white/5 backdrop-blur-md text-cyan-400 font-bold tracking-widest
          shadow-[0_0_12px_rgba(0,255,255,0.3)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          KVSAI
        </div>
        <div
          className="absolute w-full h-full flex items-center justify-center 
          rounded-lg border border-purple-500/30 
          bg-white/5 backdrop-blur-md text-purple-400 text-xs font-semibold text-center px-2
          shadow-[0_0_12px_rgba(180,0,255,0.3)]"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          Applied AI Engineer
        </div>
      </motion.div>
    </div>
  );
}

const navItems = [
  { id: "home",     label: "Home",     icon: <Home size={18} /> },
  { id: "projects", label: "Projects", icon: <FolderOpen size={18} /> },
  { id: "skills",   label: "Skills",   icon: <Zap size={18} /> },
  { id: "research", label: "Research", icon: <FlaskConical size={18} /> },
  { id: "contact",  label: "Contact",  icon: <Mail size={18} /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
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
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#020617]/95 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.15)]"
            : "bg-[#020617]"
        }`}
      >
        {/* LEFT - LOGO */}
        <div className="flex items-center shrink-0">
          <LogoFlip />
        </div>

        {/* CENTER - Desktop Nav */}
        <div className="hidden md:flex justify-center gap-6 lg:gap-8 text-sm">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="group relative"
            >
              <span className="transition group-hover:text-cyan-400">{label}</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* RIGHT - Desktop Socials */}
        <div className="hidden md:flex justify-end items-center gap-2 shrink-0">
          <a href="https://www.youtube.com/@NovarionAI" target="_blank"
            className="p-2 rounded-full border border-red-500/30 hover:border-red-500 hover:bg-red-500/10 transition hover:scale-110">
            <Play className="w-5 h-5 text-red-400" />
          </a>
          <a href="https://www.instagram.com/saikalyanam.ai/" target="_blank"
            className="p-2 rounded-full border border-pink-500/30 hover:border-pink-500 hover:bg-pink-500/10 transition hover:scale-110">
            <Camera className="w-5 h-5 text-pink-400" />
          </a>
          <a href="https://www.linkedin.com/in/sai089/" target="_blank"
            className="border border-white/20 px-4 py-1.5 rounded-full text-sm hover:border-blue-500 hover:text-blue-400">
            LinkedIn
          </a>
          <a href="https://github.com/SaiAIEngineer" target="_blank"
            className="border border-white/20 px-4 py-1.5 rounded-full text-sm hover:border-purple-500 hover:text-purple-400">
            GitHub
          </a>
          <a href="/Kalyanam_Venkata_Sree_Sai_Resume.pdf" target="_blank"
            className="bg-linear-to-r from-cyan-400 to-blue-500 text-black px-5 py-1.5 rounded-full text-sm font-semibold hover:scale-110">
            Resume
          </a>
        </div>

        {/* ✅ MOBILE HAMBURGER - pushed to far right */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#020617]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* ✅ Nav items with icons */}
        {navItems.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="flex items-center gap-3 text-xl hover:text-cyan-400 transition-colors"
          >
            <span className="text-cyan-400">{icon}</span>
            {label}
          </button>
        ))}

        {/* SOCIAL MOBILE */}
        <div className="flex gap-4 mt-6 pt-6 border-t border-white/10">
          <a href="https://www.youtube.com/@NovarionAI" target="_blank"
            className="p-2 rounded-full border border-red-500/30 hover:border-red-500">
            <Play className="w-5 h-5 text-red-400" />
          </a>
          <a href="https://www.instagram.com/saikalyanam.ai/" target="_blank"
            className="p-2 rounded-full border border-pink-500/30 hover:border-pink-500">
            <Camera className="w-5 h-5 text-pink-400" />
          </a>
          <a href="https://www.linkedin.com/in/sai089/" target="_blank"
            className="px-4 py-1.5 rounded-full border border-blue-500/30 text-sm text-blue-400">
            LinkedIn
          </a>
          <a href="https://github.com/SaiAIEngineer" target="_blank"
            className="px-4 py-1.5 rounded-full border border-purple-500/30 text-sm text-purple-400">
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}