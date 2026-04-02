"use client";

import Reveal from "@/components/Reveal";

export default function EducationPage() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-32 text-white">

      {/* Title */}
      <Reveal>
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          My <span className="text-cyan-400">Education</span>
        </h1>
      </Reveal>

      {/* Content */}
      <div className="mt-20 max-w-4xl mx-auto space-y-10">

        {/* MS */}
        <Reveal>
          <div className="p-8 rounded-xl border border-white/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 transition">
            <h2 className="text-2xl font-semibold">
              Master of Science in Computer Science
            </h2>
            <p className="text-cyan-400 mt-1">
              University of Alabama at Birmingham
            </p>
            <p className="text-gray-400 mt-2">
              Aug 2024 – May 2026
            </p>
            <p className="text-gray-400 mt-4">
              Focus: Machine Learning • Deep Learning • NLP • Computer Vision
            </p>
          </div>
        </Reveal>

        {/* BTech */}
        <Reveal>
          <div className="p-8 rounded-xl border border-white/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 transition">
            <h2 className="text-2xl font-semibold">
              Bachelor of Technology in Computer Science (AI)
            </h2>
            <p className="text-cyan-400 mt-1">
              Koneru Lakshmaiah Education Foundation
            </p>
            <p className="text-gray-400 mt-2">
              Aug 2020 – May 2024 • GPA: 8.6 / 10
            </p>
            <p className="text-gray-400 mt-4">
              Focus: Artificial Intelligence • Machine Learning • Research
            </p>
          </div>
        </Reveal>

      </div>

    </section>
  );
}