import React, { useState } from "react";
import { Code2, BrainCircuit, Microscope, X } from "lucide-react";

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <section
      id="about"
      className="relative py-28 bg-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-950 to-blue-950 opacity-90" />
      <div
        className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)]
        [background-size:20px_20px] opacity-20"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[3rem] shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-blue-500">Me</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I'm Vipin, a Full Stack Developer and AI Researcher building
              scalable systems that merge modern frontend architecture
              with intelligent backend systems and AI-driven automation.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => toggleSection("frontend")}
                className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium hover:bg-blue-600/30 transition"
              >
                Full Stack Engineering
              </button>

              <button
                onClick={() => toggleSection("ai")}
                className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium hover:bg-purple-600/30 transition"
              >
                RAG Systems
              </button>

              <button
                onClick={() => toggleSection("research")}
                className="px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-full text-sm font-medium hover:bg-cyan-600/30 transition"
              >
                Structured Research
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative space-y-10">

            {/* FRONTEND CARD */}
            {(activeSection === null || activeSection === "frontend") && (
              <div
                onClick={() => activeSection === null && toggleSection("frontend")}
                className={`relative cursor-pointer bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-lg transition-all duration-500
                ${
                  activeSection === null
                    ? "rotate-[-2deg] hover:rotate-0 hover:scale-105"
                    : "rotate-0 scale-105 cursor-default"
                }`}
              >
                {activeSection === "frontend" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSection(null);
                    }}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
                  >
                    <X size={22} />
                  </button>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <Code2 className="text-blue-500" size={28} />
                  <h3 className="text-xl font-semibold text-white">
                    Frontend Engineering
                  </h3>
                </div>

                {activeSection === "frontend" && (
                  <p className="text-gray-400 leading-relaxed">
                    I develop scalable React applications with optimized
                    architecture, reusable component systems, performance tuning,
                    responsive UI systems, and seamless backend integration.
                  </p>
                )}
              </div>
            )}

            {/* AI CARD */}
            {(activeSection === null || activeSection === "ai") && (
              <div
                onClick={() => activeSection === null && toggleSection("ai")}
                className={`relative cursor-pointer bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-lg transition-all duration-500
                ${
                  activeSection === null
                    ? "rotate-[2deg] hover:rotate-0 hover:scale-105"
                    : "rotate-0 scale-105 cursor-default"
                }`}
              >
                {activeSection === "ai" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSection(null);
                    }}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
                  >
                    <X size={22} />
                  </button>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <BrainCircuit className="text-purple-500" size={28} />
                  <h3 className="text-xl font-semibold text-white">
                    AI & LegalTech
                  </h3>
                </div>

                {activeSection === "ai" && (
                  <p className="text-gray-400 leading-relaxed">
                    I design multilingual RAG systems using vector embeddings,
                    semantic retrieval, contextual reasoning, and intelligent automation
                    for AI-driven legal and enterprise platforms.
                  </p>
                )}
              </div>
            )}

            {/* RESEARCH CARD */}
            {(activeSection === null || activeSection === "research") && (
              <div
                onClick={() => activeSection === null && toggleSection("research")}
                className={`relative cursor-pointer bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-lg transition-all duration-500
                ${
                  activeSection === null
                    ? "rotate-[-1deg] hover:rotate-0 hover:scale-105"
                    : "rotate-0 scale-105 cursor-default"
                }`}
              >
                {activeSection === "research" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSection(null);
                    }}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
                  >
                    <X size={22} />
                  </button>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <Microscope className="text-cyan-500" size={28} />
                  <h3 className="text-xl font-semibold text-white">
                    Structured Research
                  </h3>
                </div>

                {activeSection === "research" && (
                  <p className="text-gray-400 leading-relaxed">
                    Focused on experimentation, benchmarking, documentation,
                    and building scalable AI systems validated by measurable metrics.
                  </p>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
