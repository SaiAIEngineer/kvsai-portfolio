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
    { name: "DT", accuracy: 78 }, // Shortened for mobile
    { name: "RF", accuracy: 82 }, // Shortened for mobile
    { name: "SVM", accuracy: 80 },
    { name: "ANN", accuracy: 84.44 },
  ];

  return (
    <section
      id="research"
      className="min-h-screen px-4 sm:px-6 md:px-20 py-16 md:py-28 text-white overflow-x-hidden"
    >
      {/* 🔥 TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-6xl font-bold text-center flex flex-wrap items-center justify-center gap-3"
      >
        <FaBookOpen className="text-cyan-400 shrink-0" />
        <span>
          Research & <span className="text-cyan-400">Publications</span>
        </span>
      </motion.h2>

      <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto text-base md:text-lg px-2">
        I focus on building practical AI systems and solving real-world problems
        using machine learning and deep learning.
      </p>

      {/* 🔥 CARD */}
      <div className="mt-12 md:mt-16 max-w-5xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative p-px rounded-2xl group overflow-hidden"
        >
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,#06b6d4,#22d3ee,#06b6d4)] opacity-50 md:opacity-100" />

          <div className="relative bg-[#0a0a0a] rounded-2xl p-5 md:p-8 border border-white/10">
            <span className="inline-block mb-4 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
              Published Research
            </span>

            <h3 className="text-lg md:text-2xl font-semibold text-cyan-400 leading-tight">
              Machine Learning and Deep Learning Techniques for Coronary Heart
              Disease Prediction
            </h3>

            <div className="mt-3 flex flex-col gap-1">
              <p className="text-xs text-cyan-300/80 italic">
                👨‍🔬 Sai (Lead Researcher), Co-authors
              </p>
              <p className="text-gray-500 text-xs font-medium">
                IEEE ICCCMC 2023 • Feb 2023
              </p>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-6 space-y-4 text-sm md:text-base text-gray-300 leading-relaxed text-left md:text-justify">
              <p>
                This research compares multiple machine learning and deep
                learning models to predict coronary heart disease. It evaluates
                traditional algorithms alongside neural networks to understand
                their reliability in medical prediction tasks.
              </p>

              {/* Hidden on very small screens to save space, shown on md+ */}
              <p className="hidden sm:block text-gray-400">
                Special focus was given to{" "}
                <span className="text-white">data preprocessing</span> and
                <span className="text-cyan-400"> feature engineering</span>,
                which significantly improved model performance.
              </p>
            </div>

            {/* 🔥 METRICS GRID */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/5 p-3 md:p-4 rounded-xl border border-white/10 flex items-center sm:flex-col sm:text-center gap-3 sm:gap-1">
                <FaBrain className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-[10px] uppercase text-gray-500 tracking-wider">
                    Best Model
                  </p>
                  <p className="font-bold text-sm">ANN</p>
                </div>
              </div>

              <div className="bg-white/5 p-3 md:p-4 rounded-xl border border-white/10 flex items-center sm:flex-col sm:text-center gap-3 sm:gap-1">
                <FaChartLine className="text-green-400 text-xl" />
                <div>
                  <p className="text-[10px] uppercase text-gray-500 tracking-wider">
                    Accuracy
                  </p>
                  <p className="font-bold text-sm">84.44%</p>
                </div>
              </div>

              <div className="bg-white/5 p-3 md:p-4 rounded-xl border border-white/10 flex items-center sm:flex-col sm:text-center gap-3 sm:gap-1">
                <FaBookOpen className="text-purple-400 text-xl" />
                <div>
                  <p className="text-[10px] uppercase text-gray-500 tracking-wider">
                    Impact
                  </p>
                  <p className="font-bold text-sm">High</p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://ieeexplore.ieee.org/abstract/document/10083756/"
                target="_blank"
                className="bg-cyan-400 text-black px-6 py-3 rounded-xl text-sm font-bold text-center hover:bg-cyan-300 transition"
              >
                View Paper
              </a>

              <button
                onClick={() => setOpen(!open)}
                className="border border-white/10 bg-white/5 px-6 py-3 rounded-xl text-sm font-semibold hover:border-cyan-400 transition"
              >
                {open ? "Hide Details" : "View Details & Chart"}
              </button>
            </div>

            {/* 🔥 EXPANDABLE DETAILS */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 overflow-hidden"
                >
                  <div className="pt-4 border-t border-white/10">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-400 text-xs md:text-sm mb-6">
                      <li>• Compared multiple ML/DL models</li>
                      <li>• ANN achieved highest accuracy</li>
                      <li>• Feature engineering improved results</li>
                      <li>• Useful for real-world healthcare</li>
                    </ul>

                    <div className="h-48 md:h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={modelData}
                          margin={{ top: 5, right: 20, bottom: 5, left: -20 }}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="rgba(255,255,255,0.05)"
                            vertical={false}
                          />
                          <XAxis
                            dataKey="name"
                            stroke="#64748b"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                          />
                          <YAxis
                            stroke="#64748b"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#111",
                              border: "1px solid #333",
                              fontSize: "12px",
                            }}
                            itemStyle={{ color: "#22d3ee" }}
                          />
                          <Line
                            type="monotone"
                            dataKey="accuracy"
                            stroke="#06b6d4"
                            strokeWidth={2}
                            dot={{ fill: "#06b6d4", r: 4 }}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* 🔥 WORKFLOW */}
      <div className="mt-20 md:mt-32 text-center relative px-2">
        <h3 className="text-2xl md:text-3xl font-semibold mb-12 flex justify-center items-center gap-2">
          <FaCogs className="text-cyan-400" />
          Research Workflow
        </h3>

        {/* Vertical line for mobile, horizontal for desktop */}
        <div className="absolute top-30 md:top-[55%] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-px md:w-full h-75 md:h-px bg-linear-to-b md:bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {[
            { name: "Problem", icon: <FaSearch /> },
            { name: "Data", icon: <FaDatabase /> },
            { name: "Model", icon: <FaBrain /> },
            { name: "Evaluate", icon: <FaChartLine /> },
            { name: "Deploy", icon: <FaRocket /> },
          ].map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative w-40 md:w-auto"
            >
              {/* Dot - Hidden on mobile to avoid clutter */}
              <div className="hidden md:block absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />

              <div className="px-5 py-3 rounded-xl bg-[#0f172a] border border-white/10 flex items-center justify-center gap-2 hover:border-cyan-400 transition-all cursor-default z-10 relative">
                <span className="text-cyan-400">{step.icon}</span>
                <span className="text-xs md:text-sm font-medium">
                  {step.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
