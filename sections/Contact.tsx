"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen px-4 md:px-16 py-20 text-white flex items-center justify-center"
    >
      {/* 🔥 BACKGROUND GLOW */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl top-0 left-1/2 -translate-x-1/2 -z-10"
      />

      {/* 🔥 MAIN CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl relative p-[1px] rounded-3xl overflow-hidden"
      >
        {/* 🌈 BORDER */}
        <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(120deg,#06b6d4,#22d3ee,#06b6d4)] animate-[neonBorder_6s_linear_infinite]" />

        {/* 🧊 CONTENT */}
        <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl border border-white/10">

          {/* 🔥 HEADER */}
          <div className="text-center px-6 md:px-12 pt-10 pb-6 border-b border-white/10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Let’s <span className="text-cyan-400">Connect 🤝</span>
            </h2>

            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Whether you're building an AI-driven product, exploring innovative ideas, or looking for someone who can turn concepts into real, scalable systems — 
              I’d love to collaborate and bring meaningful solutions to life.
            </p>

            <p className="text-gray-400 mt-2 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
              I focus on <span className="text-white font-medium">real-world AI applications</span>, 
              <span className="text-cyan-400 font-medium"> scalable systems</span>, and 
              meaningful <span className="text-white font-medium">innovation</span>.
            </p>
          </div>

          {/* 🔥 BODY */}
          <div className="grid md:grid-cols-2">

            {/* ================= LEFT CARDS ================= */}
            <div className="p-6 md:p-10 space-y-6 border-b md:border-b-0 md:border-r border-white/10">

              {/* EMAIL */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="group relative p-5 rounded-xl border border-cyan-400/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl transition" />
                <div className="relative flex gap-4">
                  <FaEnvelope className="text-cyan-400 text-2xl group-hover:scale-110 transition" />
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-base font-semibold">
                      kvsreesai.ai.engineer@gmail.com
                    </p>
                    <p className="text-xs text-gray-500">
                      Best for projects, collaborations, and opportunities
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* LINKEDIN */}
              <motion.a
                href="https://www.linkedin.com/in/sai089/"
                target="_blank"
                whileHover={{ scale: 1.04 }}
                className="group relative p-5 rounded-xl border border-blue-400/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="relative flex gap-4">
                  <FaLinkedin className="text-blue-400 text-2xl group-hover:rotate-6 transition" />
                  <div>
                    <p className="text-xs text-gray-400">LinkedIn</p>
                    <p className="text-base font-semibold">
                      View my professional experience
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* GITHUB */}
              <motion.a
                href="https://github.com/SaiAIEngineer"
                target="_blank"
                whileHover={{ scale: 1.04 }}
                className="group relative p-5 rounded-xl border border-white/20 overflow-hidden"
              >
                <div className="absolute inset-0 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition" />
                <div className="relative flex gap-4">
                  <FaGithub className="text-white text-2xl group-hover:scale-125 transition" />
                  <div>
                    <p className="text-xs text-gray-400">GitHub</p>
                    <p className="text-base font-semibold">
                      Explore my projects and experiments
                    </p>
                  </div>
                </div>
              </motion.a>

            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="p-6 md:p-10 flex flex-col justify-center space-y-6">

              <h3 className="text-xl md:text-2xl font-semibold text-cyan-400">
                Let’s Build Something Meaningful 🚀
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                If you have an idea, a project, or an opportunity — feel free to reach out.  
                I’m always open to collaborating with individuals, teams, and organizations 
                that are passionate about building impactful technology.
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                I enjoy working on challenging problems — from AI systems and automation pipelines 
                to research-driven solutions and scalable architectures.
              </p>

              {/* TRUST */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <p className="text-sm text-gray-300">✔ Experience building AI and ML systems</p>
                <p className="text-sm text-gray-300">✔ Focus on scalable, production-ready solutions</p>
                <p className="text-sm text-gray-300">✔ Strong research and problem-solving mindset</p>
                <p className="text-sm text-gray-300">✔ Open to internships, collaborations, and roles</p>
              </div>

              {/* CTA */}
              <p className="text-xs text-cyan-400 font-medium">
                🚀 Let’s collaborate and turn ideas into impactful AI solutions
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-2">

                <motion.a
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:kvsreesai.ai.engineer@gmail.com"
                  className="relative px-5 py-2 rounded-full text-sm font-semibold overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition"></span>
                  <span className="absolute inset-0 border border-cyan-400/40 group-hover:border-cyan-300 rounded-full"></span>

                  <span className="relative flex items-center gap-2 text-cyan-400 group-hover:text-white">
                    <FaEnvelope />
                    Send Email
                  </span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/2055789980"
                  target="_blank"
                  className="relative px-5 py-2 rounded-full text-sm flex items-center gap-2 overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-green-500/20 blur-md opacity-0 group-hover:opacity-100 transition"></span>
                  <span className="absolute inset-0 border border-green-400/40 group-hover:border-green-300 rounded-full"></span>

                  <span className="relative text-green-400 group-hover:text-white flex items-center gap-2">
                    <FaWhatsapp />
                    WhatsApp
                  </span>
                </motion.a>

              </div>

              <p className="text-xs text-gray-500">
                ⚡ I typically respond within <span className="text-white">24 hours</span>.
              </p>

            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}