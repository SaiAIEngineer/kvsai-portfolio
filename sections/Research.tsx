"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBrain,
  FaChartLine,
  FaBookOpen,
  FaDatabase,
  FaCogs,
  FaRocket,
  FaSearch,
} from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Research() {
  const [open, setOpen] = useState(false);

  const modelData = [
    { name: "KNN", accuracy: 75 },
    { name: "Decision Tree", accuracy: 78 },
    { name: "Random Forest", accuracy: 82 },
    { name: "SVM", accuracy: 80 },
    { name: "ANN", accuracy: 84.44 },
  ];

  return (
    <section
      id="research"
      className="min-h-screen px-6 md:px-20 py-28 text-white"
    >
      {/* 🔥 TITLE */}
      <h2 className="text-4xl md:text-6xl font-bold text-center flex items-center justify-center gap-3">
        <FaBookOpen className="text-cyan-400" />
        Research & <span className="text-cyan-400">Publications</span>
      </h2>

      <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
        I focus on building practical AI systems and solving real-world problems
        using machine learning and deep learning.
      </p>

      {/* 🔥 CARD */}
      <div className="mt-16 max-w-5xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.02, rotateX: 4, rotateY: -4 }}
          className="relative p-px rounded-2xl group overflow-hidden"
        >
          <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,#06b6d4,#22d3ee,#06b6d4)] animate-[neonBorder_5s_linear_infinite]" />

          <div className="relative bg-black rounded-2xl p-8 border border-white/10 group-hover:border-cyan-400 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]">
            <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
              Published Research
            </span>

            <h3 className="text-xl md:text-2xl font-semibold text-cyan-400">
              Machine Learning and Deep Learning Techniques for Coronary Heart
              Disease Prediction
            </h3>

            {/* 🔥 AUTHORS (ADDED) */}
            <p className="text-xs text-cyan-300 mt-1">
              👨‍🔬 Authors: Sai (Lead Researcher), Co-authors • IEEE Conference
            </p>

            <p className="text-gray-400 mt-2 text-sm">
              IEEE ICCCMC 2023 • February 2023
            </p>

            {/* 🔥 EXPANDED DESCRIPTION */}
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              This research compares multiple machine learning and deep learning
              models to predict coronary heart disease. It evaluates traditional
              algorithms alongside neural networks to understand their
              performance, accuracy, and reliability in medical prediction
              tasks.
            </p>

            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Special focus was given to{" "}
              <span className="text-white font-medium">data preprocessing</span>{" "}
              and
              <span className="text-cyan-400 font-medium">
                {" "}
                feature engineering
              </span>
              , which significantly improved model performance. Among all
              models, Artificial Neural Networks (ANN) achieved the highest
              accuracy by effectively capturing complex patterns in the dataset.
            </p>

            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              The results demonstrate the potential of AI-driven healthcare
              systems in enabling early diagnosis and supporting clinical
              decision-making in real-world scenarios.
            </p>

            {/* 🔥 METRICS */}
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <FaBrain className="text-cyan-400 mb-1" />
                <p className="text-xs text-gray-400">Best Model</p>
                <p className="font-semibold text-sm">ANN</p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <FaChartLine className="text-green-400 mb-1" />
                <p className="text-xs text-gray-400">Accuracy</p>
                <p className="font-semibold text-sm">84.44%</p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <FaBookOpen className="text-purple-400 mb-1" />
                <p className="text-xs text-gray-400">Impact</p>
                <p className="font-semibold text-sm">High</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://ieeexplore.ieee.org/abstract/document/10083756/"
                target="_blank"
                className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-semibold"
              >
                View Paper
              </a>

              <button
                onClick={() => setOpen(!open)}
                className="border border-white/20 px-4 py-2 rounded-full text-sm hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                {open ? "Hide Details" : "View Details"}
              </button>
            </div>

            {/* 🔥 DETAILS */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6"
                >
                  <ul className="text-gray-400 text-sm space-y-2 mb-6">
                    <li>• Compared multiple ML/DL models</li>
                    <li>• ANN achieved highest accuracy</li>
                    <li>• Feature engineering improved results</li>
                    <li>• Useful for real-world healthcare</li>
                  </ul>

                  <div className="h-64">
                    <ResponsiveContainer>
                      <LineChart data={modelData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="rgba(255,255,255,0.05)"
                        />
                        <XAxis dataKey="name" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="accuracy"
                          stroke="#06b6d4"
                          strokeWidth={3}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* 🔥 WORKFLOW (UNCHANGED) */}
      <div className="mt-24 text-center relative">
        <h3 className="text-3xl font-semibold mb-16 flex justify-center items-center gap-2">
          <FaCogs className="text-cyan-400" />
          Research Workflow
        </h3>

        <div className="absolute top-[55%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: "Problem", icon: <FaSearch /> },
            { name: "Data", icon: <FaDatabase /> },
            { name: "Model", icon: <FaBrain /> },
            { name: "Evaluate", icon: <FaChartLine /> },
            { name: "Deploy", icon: <FaRocket /> },
          ].map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.15 }}
              className="relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full" />

              <div className="px-6 py-3 rounded-full bg-[#0f172a] border border-white/10 flex items-center gap-2 hover:border-cyan-400 transition">
                {step.icon}
                <span className="text-sm">{step.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
