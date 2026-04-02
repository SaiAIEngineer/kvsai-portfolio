"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

// ICONS
import {
  FaPython,
  FaReact,
  FaDocker,
  FaAws,
  FaBrain,
  FaServer,
} from "react-icons/fa";

import { SiJavascript, SiNextdotjs, SiTensorflow } from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-20 py-32 text-white"
    >
      {/* 🔥 TITLE */}
      <Reveal>
        <h2 className="text-4xl md:text-6xl font-bold text-center tracking-tight">
          Skills & <span className="text-cyan-400">Technologies</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Technologies I use to build scalable AI systems and applications.
        </p>
      </Reveal>

      {/* 🔥 SKILL CARDS */}
      <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* AI / ML */}
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.05, rotateX: 6, rotateY: -6 }}
            className="relative p-px rounded-2xl group overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,#7c3aed,#a855f7,#7c3aed)] bg-size-[200%_200%] animate-[neonBorder_4s_linear_infinite]" />

            <div
              className="relative bg-black rounded-2xl p-8 border border-white/10 group-hover:border-[#a855f7]
            transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]"
            >
              <h3 className="flex items-center gap-2 text-[#a855f7] text-xl font-semibold">
                <FaBrain /> AI / ML
              </h3>

              <ul className="mt-5 space-y-3 text-base text-gray-300">
                <li>⚡ PyTorch</li>
                <li className="flex items-center gap-2">
                  <SiTensorflow className="text-orange-400" /> TensorFlow
                </li>
                <li>⚡ Scikit-learn</li>
              </ul>
            </div>
          </motion.div>
        </Reveal>

        {/* Generative AI */}
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.05, rotateX: -6, rotateY: 6 }}
            className="relative p-px rounded-2xl group overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,#06b6d4,#22d3ee,#06b6d4)] bg-size-[200%_200%] animate-[neonBorder_4s_linear_infinite]" />

            <div
              className="relative bg-black rounded-2xl p-8 border border-white/10 group-hover:border-[#22d3ee]
            group-hover:shadow-[0_0_50px_rgba(34,211,238,0.8)]"
            >
              <h3 className="text-[#22d3ee] text-xl font-semibold">
                ✨ Generative AI
              </h3>

              <ul className="mt-5 space-y-3 text-base text-gray-300">
                <li>⚡ LLMs</li>
                <li>⚡ RAG</li>
                <li>⚡ Prompt Engineering</li>
              </ul>
            </div>
          </motion.div>
        </Reveal>

        {/* Computer Vision */}
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.05, rotateX: 6, rotateY: 6 }}
            className="relative p-px rounded-2xl group overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,#10b981,#34d399,#10b981)] bg-size-[200%_200%] animate-[neonBorder_4s_linear_infinite]" />

            <div
              className="relative bg-black rounded-2xl p-8 border border-white/10 group-hover:border-[#34d399]
            group-hover:shadow-[0_0_50px_rgba(52,211,153,0.8)]"
            >
              <h3 className="text-[#34d399] text-xl font-semibold">
                👁️ Computer Vision
              </h3>

              <ul className="mt-5 space-y-3 text-base text-gray-300">
                <li>⚡ OpenCV</li>
                <li>⚡ MediaPipe</li>
                <li>⚡ Detection</li>
              </ul>
            </div>
          </motion.div>
        </Reveal>

        {/* Backend */}
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.05, rotateX: -6, rotateY: -6 }}
            className="relative p-px rounded-2xl group overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,#f59e0b,#fbbf24,#f59e0b)] bg-size-[200%_200%] animate-[neonBorder_4s_linear_infinite]" />

            <div
              className="relative bg-black rounded-2xl p-8 border border-white/10 group-hover:border-[#fbbf24]
            group-hover:shadow-[0_0_50px_rgba(251,191,36,0.8)]"
            >
              <h3 className="flex items-center gap-2 text-[#fbbf24] text-xl font-semibold">
                <FaServer /> Backend
              </h3>

              <ul className="mt-5 space-y-3 text-base text-gray-300">
                <li>⚡ FastAPI</li>
                <li>⚡ Node.js</li>
                <li>⚡ REST APIs</li>
              </ul>
            </div>
          </motion.div>
        </Reveal>
      </div>

      {/* 🔥 NEXT-LEVEL TECH STACK */}
      <div className="mt-32 text-center">
        <h3 className="text-3xl font-semibold">
          Tech <span className="text-cyan-400">Stack</span>
        </h3>

        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {[
            { name: "Python", icon: <FaPython />, color: "#facc15" },
            { name: "JavaScript", icon: <SiJavascript />, color: "#fde047" },
            { name: "React", icon: <FaReact />, color: "#22d3ee" },
            { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
            { name: "Docker", icon: <FaDocker />, color: "#3b82f6" },
            { name: "AWS", icon: <FaAws />, color: "#fb923c" },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.2, y: -5 }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3 + index * 0.3,
                repeat: Infinity,
              }}
              className="relative p-0.5 rounded-full group"
            >
              {/* 🔥 Animated gradient border */}
              <div
                className="absolute inset-0 rounded-full opacity-70 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(120deg, ${tech.color}, transparent, ${tech.color})`,
                  backgroundSize: "200% 200%",
                  animation: "neonBorder 5s linear infinite",
                }}
              />

              {/* Content */}
              <div className="relative flex items-center gap-3 px-8 py-3 rounded-full bg-black border border-white/10 backdrop-blur-md">
                <span style={{ color: tech.color }} className="text-xl">
                  {tech.icon}
                </span>
                <span className="text-lg">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
