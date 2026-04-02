"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen px-4 sm:px-6 md:px-16 py-12 md:py-20 text-white flex items-center justify-center overflow-hidden"
    >
      {/* 🔥 BACKGROUND GLOW - Scaled for mobile */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-75 md:w-150 h-75 md:h-150 bg-cyan-500/10 rounded-full blur-3xl top-10 left-1/2 -translate-x-1/2 -z-10"
      />

      {/* 🔥 MAIN CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl relative p-px rounded-2xl md:rounded-3xl overflow-hidden"
      >
        {/* 🌈 BORDER */}
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-[linear-gradient(120deg,#06b6d4,#22d3ee,#06b6d4)] animate-[neonBorder_6s_linear_infinite]" />

        {/* 🧊 CONTENT */}
        <div className="relative bg-[#050505]/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl border border-white/10">
          {/* 🔥 HEADER */}
          <div className="text-center px-5 md:px-12 pt-8 md:pt-10 pb-6 border-b border-white/10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
              Let’s <span className="text-cyan-400">Connect 🤝</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-2">
              Whether you're building an AI-driven product or looking for a
              collaborator who can turn concepts into real systems — I’d love to
              bring meaningful solutions to life.
            </p>
          </div>

          {/* 🔥 BODY - flex-col for mobile, md:grid for desktop */}
          <div className="flex flex-col md:grid md:grid-cols-2">
            {/* ================= LEFT SIDE: SOCIAL CARDS ================= */}
            <div className="p-5 md:p-10 space-y-4 md:space-y-6 border-b md:border-b-0 md:border-r border-white/10">
              {/* EMAIL */}
              <motion.div
                whileHover={{ x: 5 }}
                className="group relative p-4 md:p-5 rounded-xl border border-white/5 bg-white/5 hover:border-cyan-400/40 transition-all"
              >
                <div className="relative flex items-center gap-4 min-w-0">
                  <FaEnvelope className="text-cyan-400 text-xl md:text-2xl shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold text-left">
                      Email
                    </p>
                    <p className="text-sm md:text-base font-medium truncate text-left">
                      kvsreesai.ai.engineer@gmail.com
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* LINKEDIN */}
              <motion.a
                href="https://www.linkedin.com/in/sai089/"
                target="_blank"
                whileHover={{ x: 5 }}
                className="block group relative p-4 md:p-5 rounded-xl border border-white/5 bg-white/5 hover:border-blue-400/40 transition-all"
              >
                <div className="relative flex items-center gap-4">
                  <FaLinkedin className="text-blue-400 text-xl md:text-2xl shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                      LinkedIn
                    </p>
                    <p className="text-sm md:text-base font-medium">
                      View professional experience
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* GITHUB */}
              <motion.a
                href="https://github.com/SaiAIEngineer"
                target="_blank"
                whileHover={{ x: 5 }}
                className="block group relative p-4 md:p-5 rounded-xl border border-white/5 bg-white/5 hover:border-white/40 transition-all"
              >
                <div className="relative flex items-center gap-4">
                  <FaGithub className="text-white text-xl md:text-2xl shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                      GitHub
                    </p>
                    <p className="text-sm md:text-base font-medium">
                      Explore projects & experiments
                    </p>
                  </div>
                </div>
              </motion.a>
            </div>

            {/* ================= RIGHT SIDE: CTA & BUTTONS ================= */}
            <div className="p-5 md:p-10 flex flex-col justify-center space-y-6 text-center md:text-left">
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold text-cyan-400">
                  Let’s Build Something Meaningful 🚀
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                  I enjoy working on challenging problems — from AI systems and
                  automation pipelines to research-driven solutions.
                </p>
              </div>

              {/* TRUST PILLS - Grid on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] md:text-xs">
                {[
                  "AI/ML Expert",
                  "Scalable Tech",
                  "Problem Solver",
                  "Open to Roles",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center justify-center md:justify-start gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10"
                  >
                    <span className="text-cyan-400">✔</span>
                    <span className="text-gray-300">{text}</span>
                  </div>
                ))}
              </div>

              {/* BUTTONS - Full width stacking on mobile */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href="mailto:kvsreesai.ai.engineer@gmail.com"
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-bold bg-cyan-400 text-black flex items-center justify-center gap-2 hover:bg-cyan-300 transition-colors"
                >
                  <FaEnvelope />
                  Send Email
                </motion.a>

                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/2055789980"
                  target="_blank"
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-bold border border-green-500/50 text-green-400 flex items-center justify-center gap-2 hover:bg-green-500/10 transition-colors"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp
                </motion.a>
              </div>

              <p className="text-[10px] text-gray-500 italic">
                ⚡ Typical response time:{" "}
                <span className="text-white">within 24 hours</span>.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
