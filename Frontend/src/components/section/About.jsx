import React, { useState } from "react";
import { Code2, BrainCircuit, Database, Globe, X } from "lucide-react";

const About = () => {
  const [activeCard, setActiveCard] = useState(null);

  const skills = [
    {
      icon: <Code2 size={22} />,
      title: "Frontend Development",
      desc: "Building modern, scalable and responsive user interfaces.",
      tools: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
    },
    {
      icon: <Database size={22} />,
      title: "Backend Systems",
      desc: "Designing secure and high-performance server architectures.",
      tools: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      icon: <BrainCircuit size={22} />,
      title: "AI Engineering",
      desc: "Developing intelligent automation and AI-driven solutions.",
      tools: ["RAG Systems", "Vector Databases", "NLP", "TensorFlow"],
    },
    {
      icon: <Globe size={22} />,
      title: "Full Stack Architecture",
      desc: "Creating scalable and production-ready systems.",
      tools: [
        "System Design",
        "Performance Optimization",
        "Deployment",
        "Clean Code",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen pt-24 flex items-center bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 opacity-90"
    >
      <div className="container mx-auto px-6 md:px-12">

        {/* 🔥 TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-bold text-white leading-tight">
              About <span className="text-blue-500">Me</span>
            </h2>
            <div className="w-16 h-1 bg-blue-500 mt-4 rounded-full" />
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am <span className="text-white font-semibold">Vipin Jaiswal</span>, 
              a passionate Full Stack Developer and AI Researcher dedicated 
              to building scalable, intelligent, and high-performance digital 
              products. My expertise lies in crafting seamless user experiences 
              while integrating smart automation and AI-driven systems that 
              create measurable real-world impact.
            </p>

            <p className="text-gray-400 text-base leading-relaxed">
              I specialize in combining modern frontend technologies with 
              powerful backend architectures and machine learning workflows. 
              From designing responsive interfaces to developing secure APIs 
              and deploying AI-powered applications, my goal is to create 
              solutions that are efficient, optimized, scalable, and future-ready.
            </p>
          </div>

        </div>

        {/* 🔥 SKILLS SECTION */}
        <h3 className="text-2xl font-semibold text-white text-center mb-8">
          Core <span className="text-blue-500">Skills</span>
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(skill)}
              className="cursor-pointer bg-white/5 border border-white/10 
              p-5 rounded-xl hover:border-blue-500/50 
              hover:-translate-y-1 transition duration-200"
            >
              <div className="text-blue-500 mb-3">{skill.icon}</div>

              <h4 className="text-sm font-semibold text-white mb-1">
                {skill.title}
              </h4>

              <p className="text-gray-400 text-xs">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* 🔥 MODAL */}
      {activeCard && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm 
          flex items-center justify-center z-50"
          onClick={() => setActiveCard(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-900 border border-blue-500/40 
            w-[90%] md:w-[500px] p-7 rounded-xl"
          >
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="text-blue-500 mb-3">{activeCard.icon}</div>

            <h2 className="text-xl font-bold text-white mb-3">
              {activeCard.title}
            </h2>

            <p className="text-gray-300 text-sm mb-5">
              {activeCard.desc}
            </p>

            <div className="grid grid-cols-2 gap-2">
              {activeCard.tools.map((tool, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 
                  px-3 py-1.5 rounded-md text-xs text-gray-300"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
