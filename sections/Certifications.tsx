"use client";

import Reveal from "@/components/Reveal";
import { FaAws, FaPython, FaMicrosoft } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen px-6 md:px-20 py-32 text-white"
    >
      {/* Title */}
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          My <span className="text-cyan-400">Certifications</span>
        </h2>
      </Reveal>

      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* AWS */}
        <Reveal>
          <div className="p-6 rounded-xl border border-white/10 hover:border-yellow-400 hover:shadow-yellow-400/20 hover:shadow-lg hover:scale-[1.03] transition">
            <div className="flex items-center gap-3">
              <FaAws className="text-yellow-400 text-2xl" />
              <h3 className="text-yellow-400 font-semibold text-lg">
                AWS Certifications
              </h3>
            </div>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>Cloud Practitioner</li>
              <li>Developer – Associate</li>
              <li>Solutions Architect – Associate</li>
            </ul>
          </div>
        </Reveal>

        {/* Azure */}
        <Reveal>
          <div className="p-6 rounded-xl border border-white/10 hover:border-blue-400 hover:shadow-blue-400/20 hover:shadow-lg hover:scale-[1.03] transition">
            <div className="flex items-center gap-3">
              <FaMicrosoft className="text-blue-400 text-2xl" />
              <h3 className="text-blue-400 font-semibold text-lg">
                Microsoft Azure
              </h3>
            </div>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>AZ-900</li>
              <li>DP-900</li>
              <li>AI-900</li>
            </ul>
          </div>
        </Reveal>

        {/* TensorFlow */}
        <Reveal>
          <div className="p-6 rounded-xl border border-white/10 hover:border-cyan-400 hover:shadow-cyan-400/20 hover:shadow-lg hover:scale-[1.03] transition">
            <div className="flex items-center gap-3">
              <SiTensorflow className="text-orange-400 text-2xl" />
              <h3 className="text-cyan-400 font-semibold text-lg">
                AI / Machine Learning
              </h3>
            </div>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>TensorFlow Developer Certificate</li>
            </ul>
          </div>
        </Reveal>

        {/* Additional */}
        <Reveal>
          <div className="p-6 rounded-xl border border-white/10 hover:border-green-400 hover:shadow-green-400/20 hover:shadow-lg hover:scale-[1.03] transition">
            <div className="flex items-center gap-3">
              <FaPython className="text-green-400 text-2xl" />
              <h3 className="text-green-400 font-semibold text-lg">
                Additional Certifications
              </h3>
            </div>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>Python & Computer Vision Bootcamp</li>
              <li>AI-ML Virtual Internship</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
