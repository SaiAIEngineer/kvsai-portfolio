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

  // PROJECT DATA (⚠️ Replace links with your real ones)
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

  // COLOR THEMES
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
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-32 text-white"
    >
      {/* TITLE */}
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          <span className="text-cyan-400">Projects</span>
        </h2>
      </Reveal>

      {/* WORKFLOW */}
      <Reveal>
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold">
            My Project <span className="text-cyan-400">Workflow</span>
          </h3>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {steps.map((step, i) => (
              <div key={step.name} className="flex items-center gap-3">
                <motion.span
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
                  className={`px-4 py-2 rounded-full ${step.color}`}
                >
                  {step.name}
                </motion.span>

                {i < steps.length - 1 && (
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* PROJECT CARDS */}
      <div className="mt-20 grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => {
          const theme = themes[index];

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
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
              className="relative rounded-xl p-6 group overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* SPOTLIGHT */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                style={{
                  background: `radial-gradient(250px circle at var(--x) var(--y), ${theme.light}, transparent 40%)`,
                }}
              />

              {/* NEON GLOW */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br ${theme.glow}`}
              />

              {/* GLASS SHINE */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2 text-sm">{project.desc}</p>

                {/* TECH */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-white/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                {/* DETAILS */}
                {open === project.id && (
                  <ul className="mt-4 text-xs text-gray-300 space-y-1">
                    {project.details.map((d, i) => (
                      <li key={i}>• {d}</li>
                    ))}
                  </ul>
                )}

                {/* ACTIONS */}
                <div className="mt-6 flex justify-between items-center text-sm">
                  <button
                    onClick={() =>
                      setOpen(open === project.id ? null : project.id)
                    }
                    className="text-cyan-400 hover:underline"
                  >
                    {open === project.id ? "Hide Details" : "View Details"}
                  </button>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative px-3 py-1.5 rounded border border-white/20 text-sm overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:-translate-y-0.5"
                    >
                      GitHub
                      <span className="absolute inset-0 opacity-0 hover:opacity-100 bg-cyan-400/10 transition" />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative px-3 py-1.5 rounded bg-cyan-400 text-black text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:-translate-y-0.5"
                    >
                      Demo
                      <span className="absolute inset-0 opacity-0 hover:opacity-100 bg-white/10 transition" />
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
