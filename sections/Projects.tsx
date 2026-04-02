"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const [open, setOpen] = useState<string | null>(null);

  // WORKFLOW
  const steps = [
    { name: "Problem", color: "bg-cyan-400/20 text-cyan-400" },
    { name: "Research", color: "bg-purple-400/20 text-purple-400" },
    { name: "Design", color: "bg-pink-400/20 text-pink-400" },
    { name: "Development", color: "bg-green-400/20 text-green-400" },
    { name: "Optimization", color: "bg-yellow-400/20 text-yellow-400" },
    { name: "Deployment", color: "bg-orange-400/20 text-orange-400" },
  ];

  // PROJECT DATA
  const projects = [
    {
      id: "career",
      title: "AI Career Copilot",
      desc: "AI assistant for resume analysis and job matching.",
      tech: ["LLM", "RAG", "Next.js"],
      github: "https://github.com/yourusername/ai-career-copilot",
      demo: "https://your-demo-link.com",
      details: [
        "Improved accuracy by 35%",
        "Reduced screening time drastically",
        "Built scalable RAG pipeline",
        "Optimized LLM responses",
      ],
    },
    {
      id: "api",
      title: "AI Microservices Platform",
      desc: "Scalable AI API system.",
      tech: ["FastAPI", "Docker", "AWS"],
      github: "https://github.com/yourusername/ai-microservices",
      demo: "https://your-demo-link.com",
      details: [
        "Handled 10K+ requests",
        "Reduced latency by 40%",
        "Containerized architecture",
        "Modular system design",
      ],
    },
    {
      id: "vision",
      title: "Real-Time AI Perception",
      desc: "Computer vision pipeline.",
      tech: ["PyTorch", "OpenCV"],
      github: "https://github.com/yourusername/vision-ai",
      demo: "https://your-demo-link.com",
      details: [
        "92% accuracy",
        "Real-time inference",
        "Edge optimized",
        "Tracking system built",
      ],
    },
  ];

  const themes = [
    {
      glow: "from-cyan-400 via-blue-500 to-transparent",
      light: "rgba(34,211,238,0.2)",
    },
    {
      glow: "from-purple-400 via-pink-500 to-transparent",
      light: "rgba(168,85,247,0.2)",
    },
    {
      glow: "from-green-400 via-emerald-500 to-transparent",
      light: "rgba(34,197,94,0.2)",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 md:px-20 py-32 text-white">
      {/* TITLE */}
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          <span className="text-cyan-400">Projects</span>
        </h2>
      </Reveal>

      {/* RESPONSIVE WORKFLOW */}
      <Reveal>
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">
            My Project <span className="text-cyan-400">Workflow</span>
          </h3>

          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-2 lg:gap-4">
            {steps.map((step, i) => (
              <div key={step.name} className="flex flex-col md:flex-row items-center gap-4">
                <motion.span
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
                  className={`px-5 py-2 rounded-full text-sm font-medium border border-white/5 ${step.color} shadow-lg shadow-black/20`}
                >
                  {step.name}
                </motion.span>

                {i < steps.length - 1 && (
                  <>
                    {/* Desktop Horizontal Arrow */}
                    <motion.span
                      className="hidden md:block text-gray-500 font-bold"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                    {/* Mobile Vertical Arrow */}
                    <motion.span
                      className="block md:hidden text-gray-600 text-xs"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      ↓
                    </motion.span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* IMPROVED GRID LAYOUT */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project, index) => {
          const theme = themes[index % themes.length];

          return (
            <motion.div
              key={project.id}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);
              }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
              className="relative rounded-xl p-6 group overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background: `radial-gradient(250px circle at var(--x) var(--y), ${theme.light}, transparent 40%)`,
                }}
              />

              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-br ${theme.glow}`} />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">{project.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-white/10 px-2 py-1 rounded text-[10px] uppercase tracking-wider font-bold text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                {open === project.id && (
                  <motion.ul 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 text-xs text-gray-300 space-y-2 border-t border-white/5 pt-4"
                  >
                    {project.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        {d}
                      </li>
                    ))}
                  </motion.ul>
                )}

                <div className="mt-6 flex justify-between items-center">
                  <button
                    onClick={() => setOpen(open === project.id ? null : project.id)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
                  >
                    {open === project.id ? "HIDE INFO" : "VIEW INFO"}
                  </button>

                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition text-xs"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded bg-cyan-400 text-black font-bold text-xs hover:bg-cyan-300 transition"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
