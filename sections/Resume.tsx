"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen px-6 md:px-16 py-20 bg-[#020617] text-white flex flex-col items-center"
    >
      {/* TITLE */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Resume
      </motion.h2>

      {/* DOWNLOAD BUTTON */}
      <motion.a
        href="/Kalyanam_Venkata_Sree_Sai_Resume.pdf"
        download
        className="flex items-center gap-3 bg-[#ff4c60] hover:bg-[#ff6578] px-6 py-3 rounded-lg font-semibold text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Download size={20} />
        Download Resume
      </motion.a>

      {/* EXPERIENCE & EDUCATION */}
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12">
        {/* EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <FileText size={24} /> Experience
          </h3>
          <ul className="space-y-6">
            <li>
              <h4 className="text-xl font-bold">AI Model Fine-Tuning Intern</h4>
              <p className="text-gray-300">Jan 2024 – Mar 2024 | Remote</p>
              <p className="mt-2 text-gray-200 text-sm">
                Worked on fine-tuning transformer models for specific NLP tasks, optimizing for
                efficiency and accuracy.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-bold">Generative AI Research Project</h4>
              <p className="text-gray-300">Apr 2024 – Jun 2024 | Remote</p>
              <p className="mt-2 text-gray-200 text-sm">
                Implemented multi-modal generative AI pipelines using text and image datasets,
                achieving realistic outputs with minimal artifacts.
              </p>
            </li>
          </ul>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <FileText size={24} /> Education
          </h3>
          <ul className="space-y-6">
            <li>
              <h4 className="text-xl font-bold">B.Tech in Computer Science</h4>
              <p className="text-gray-300">XYZ University | 2020 – 2024</p>
              <p className="mt-2 text-gray-200 text-sm">
                Focused on AI and machine learning coursework, including deep learning and
                natural language processing.
              </p>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* SKILLS */}
      <motion.div
        className="w-full max-w-4xl mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "Python",
            "PyTorch",
            "TensorFlow",
            "Hugging Face",
            "NLP",
            "Computer Vision",
            "Generative AI",
            "LLMs",
            "React",
            "Next.js",
            "Tailwind CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-[#1a1f2a] px-4 py-2 rounded-full text-gray-200 text-sm hover:bg-[#ff4c60] transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}