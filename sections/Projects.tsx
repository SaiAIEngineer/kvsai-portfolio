"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
type Project = {
id: string;
title: string;
desc: string;
tech: string[];
github: string;
demo: string;
details: string[];
};
export default function Projects() {
const [open, setOpen] = useState<string | null>(null);
const projects: Project[] = [
{
id: "health",
title: "AI Health Assistant",
desc: "Explainable multi-label chest X-ray diagnosis with AI chatbot.",
tech: ["PyTorch", "Grad-CAM", "LLM", "Streamlit"],
github: "https://github.com/yourusername/ai-health-assistant",
demo: "https://your-demo-link.com",
details: [
"Multi-label disease detection using CheXpert dataset",
"Explainable AI using Grad-CAM visualization",
"Integrated AI chatbot for medical queries",
"End-to-end pipeline from training to deployment",
],
},
{
id: "career",
title: "AI Career Copilot",
desc: "AI-powered resume analysis and job matching platform.",
tech: ["LLM", "RAG", "Next.js"],
github: "https://github.com/yourusername/ai-career-copilot",
demo: "https://your-demo-link.com",
details: [
"Resume parsing and skill extraction",
"ATS scoring system",
"Job matching using AI",
"Personalized career recommendations",
],
},
{
id: "qa",
title: "AI QA Automation System",
desc: "AI-powered automated testing and bug detection system.",
tech: ["Selenium", "OpenCV", "LLM", "Python"],
github: "https://github.com/yourusername/ai-qa-system",
demo: "https://your-demo-link.com",
details: [
"Automated UI testing using Selenium",
"Visual bug detection using OpenCV",
"AI-generated test cases",
"Smart bug reporting system",
],
},
];
return ( <section id="projects" className="min-h-screen px-6 md:px-20 py-32 text-white"> <Reveal> <h2 className="text-3xl md:text-5xl font-bold text-center"> <span className="text-cyan-400">🚀 Projects</span> </h2> </Reveal>
  <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project) => (
      <motion.div
        key={project.id}
        whileHover={{ scale: 1.03 }}
        className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-md"
      >
        <h3 className="text-xl font-semibold">🚀 {project.title}</h3>

        <p className="text-gray-400 mt-2 text-sm">{project.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-white/10 px-2 py-1 rounded text-xs text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
        {open === project.id && (
          <ul className="mt-4 text-xs text-gray-300 space-y-1">
            {project.details.map((d, i) => (
              <li key={i}>• {d}</li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() =>
              setOpen(open === project.id ? null : project.id)
            }
            className="text-xs text-cyan-400"
          >
            {open === project.id ? "HIDE" : "VIEW"}
          </button>

          <div className="flex gap-2">
            <a href={project.github} target="_blank" className="text-xs">
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              className="text-xs bg-cyan-400 text-black px-2 py-1 rounded"
            >
              Demo
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>
);
}
