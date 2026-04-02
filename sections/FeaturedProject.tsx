"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCamera,
  FaBrain,
  FaUser,
  FaTshirt,
  FaCheckCircle,
  FaShoppingCart,
} from "react-icons/fa";

export default function FeaturedProject() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen px-6 md:px-20 py-32 text-white overflow-hidden">
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-150 h-150 bg-cyan-500/10 rounded-full blur-3xl top-10 left-1/2 -translate-x-1/2 -z-10" />

      {/* 🔥 TITLE */}
      <h2 className="text-4xl md:text-6xl font-bold text-center">
        Flagship <span className="text-cyan-400">AI System</span>
      </h2>

      <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
        Building intelligent retail experiences through multimodal AI systems.
      </p>

      {/* 🔥 MAIN GRID */}
      <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">
        {/* 🔥 LEFT */}
        <div>
          <h3 className="text-3xl md:text-5xl font-bold text-cyan-400">
            Virtual AI Try-On System
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">
            A multimodal AI system enabling real-time virtual try-on using
            computer vision, avatar generation, and recommendation engines.
          </p>

          {/* 🔥 FLOW */}
          <div className="mt-10 space-y-4 text-sm">
            {[
              { icon: <FaCamera />, text: "Capture Body" },
              { icon: <FaBrain />, text: "Extract Features" },
              { icon: <FaUser />, text: "Generate Avatar" },
              { icon: <FaTshirt />, text: "Virtual Try-On" },
              { icon: <FaCheckCircle />, text: "Size Recommendation" },
              { icon: <FaShoppingCart />, text: "Checkout" },
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, x: 8 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <span className="text-cyan-400">{step.icon}</span>
                {step.text}
              </motion.div>
            ))}
          </div>

          {/* 🔥 BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            {/* 🎬 DEMO BUTTON */}
            <a
              href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="PLAY"
              className="bg-cyan-400 text-black px-7 py-3 rounded-full font-semibold
              hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition flex items-center gap-2"
            >
              ▶ View Demo
            </a>

            {/* 📖 DETAILS BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              data-cursor="OPEN"
              className="border border-white/20 px-7 py-3 rounded-full
              hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              {open ? "Close Details" : "View Details"}
            </button>
          </div>

          {/* 🔥 EXPANDABLE DETAILS */}
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-10 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur"
            >
              {/* Problem */}
              <h4 className="text-cyan-400 font-semibold text-lg">Problem</h4>
              <p className="text-gray-400 mt-2 text-sm">
                Users struggle with size and fit when shopping online.
              </p>

              {/* Solution */}
              <h4 className="text-cyan-400 font-semibold text-lg mt-6">
                Solution
              </h4>
              <p className="text-gray-400 mt-2 text-sm">
                Built a real-time AI try-on system using computer vision and
                recommendation models.
              </p>

              {/* Architecture */}
              <h4 className="text-cyan-400 font-semibold text-lg mt-6">
                Architecture
              </h4>
              <p className="text-gray-400 mt-2 text-sm">
                Camera → Detection → Feature Extraction → Avatar → Try-On →
                Recommendation
              </p>

              {/* Tech */}
              <div className="mt-6 flex flex-wrap gap-3">
                {["Computer Vision", "Deep Learning", "FastAPI", "React"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white/10 border border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              {/* Results */}
              <h4 className="text-cyan-400 font-semibold text-lg mt-6">
                Results
              </h4>
              <ul className="text-gray-400 mt-2 text-sm space-y-1">
                <li>✔ Improved user confidence</li>
                <li>✔ Reduced returns</li>
                <li>✔ Real-time performance</li>
              </ul>
            </motion.div>
          )}
        </div>

        {/* 🔥 RIGHT SIDE PIPELINE */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative p-px rounded-2xl group overflow-hidden"
        >
          <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,#06b6d4,#22d3ee,#06b6d4)] bg-size-[200%_200%] animate-[neonBorder_5s_linear_infinite]" />

          <div
            className="relative bg-black rounded-2xl p-8 border border-white/10
          group-hover:border-cyan-400 group-hover:shadow-[0_0_50px_rgba(34,211,238,0.6)]"
          >
            <p className="text-center text-sm text-gray-400 mb-6">
              System Pipeline
            </p>

            <div className="space-y-4 text-sm text-gray-300">
              {[
                "Camera Input",
                "Body Detection",
                "Feature Extraction",
                "Avatar Generation",
                "Try-On Engine",
                "Recommendation System",
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                  {step}
                </motion.div>
              ))}
            </div>

            {/* Connector */}
            <div className="absolute left-6 top-16 bottom-10 w-0.5 bg-linear-to-b from-cyan-400/40 to-transparent blur-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
