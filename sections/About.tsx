"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Sparkles, Eye } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-20 py-24 text-white relative overflow-hidden"
    >
      {/* Background Glow (STATIC) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/10 blur-3xl top-10 left-10 rounded-full"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 blur-3xl bottom-10 right-10 rounded-full"></div>
      </div>

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am <span className="text-white font-semibold">Kalyanam Venkata Sree Sai</span>, an Applied AI Research Engineer focused on building intelligent systems that transform ideas into real-world AI applications.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I specialize in Artificial Intelligence, Generative AI, and Large Language Models, with a strong foundation in Machine Learning, Deep Learning, and Computer Vision. I focus on bridging the gap between research and real-world implementation.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-4">
            <span className="px-5 py-2 border border-cyan-400/30 rounded-full text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition">
              AI Systems Builder
            </span>

            <span className="px-5 py-2 border border-purple-400/30 rounded-full text-purple-400 hover:bg-purple-400/10 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] transition">
              LLM & Generative AI
            </span>

            <span className="px-5 py-2 border border-green-400/30 rounded-full text-green-400 hover:bg-green-400/10 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] transition">
              Research Driven
            </span>
          </div>
        </motion.div>

        {/* RIGHT SIDE (NO LOOP ANIMATION) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition">

            {/* Glow Layer (STATIC) */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">

              <h3 className="text-2xl font-semibold text-cyan-400 flex justify-center items-center gap-2">
                <Sparkles size={20} />
                Applied AI Focus
              </h3>

              <p className="text-gray-300">
                Designing intelligent systems that integrate learning, reasoning, and real-world adaptability.
              </p>

              {/* ICON GRID */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center gap-2"
                >
                  <Brain className="text-cyan-400" />
                  <p className="text-sm">AI Models</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center gap-2"
                >
                  <Cpu className="text-purple-400" />
                  <p className="text-sm">LLMs</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center gap-2"
                >
                  <Eye className="text-green-400" />
                  <p className="text-sm">Vision</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center gap-2"
                >
                  <Sparkles className="text-yellow-400" />
                  <p className="text-sm">Research</p>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}