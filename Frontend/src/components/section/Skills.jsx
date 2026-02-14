import React, { useState } from "react";
import { X } from "lucide-react";

const Skills = () => {
  const [active, setActive] = useState(null);

  const data = {
    frontend: [
      "HTML", "CSS", "JavaScript", "React", "Next.js",
      "Tailwind CSS", "Framer Motion", "Zustand",
      "Performance Optimize", "SSR"
    ],
    backend: [
      "Node.js", "Express", "REST API", "JWT/Auth",
      "SQL", "Postgres", "Prisma ORM",
      "DB Modeling", "Stripe Payments"
    ],
    tools: [
      "Git", "GitHub", "Linux", "Vercel",
      "VS Code", "Postman",
      "Figma", "UX/UI Design"
    ]
  };

  const categories = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & AI" },
    { id: "tools", label: "Dev Tools" }
  ];

  const handleClick = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-slate-950 overflow-hidden py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 opacity-90" />
      <div
        className="absolute inset-0 
        bg-[radial-gradient(#1e293b_1px,transparent_1px)]
        [background-size:20px_20px] opacity-20"
      />

      {/* Glow Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">SKILLS</span>
          </h2>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleClick(cat.id)}
              className={`cursor-pointer p-8 rounded-2xl border transition-all duration-300 backdrop-blur-xl
              ${
                active === cat.id
                  ? "bg-blue-600/10 border-blue-500 shadow-xl shadow-blue-500/20 scale-105"
                  : "bg-slate-900/50 border-slate-800 hover:border-blue-400 hover:scale-105"
              }`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${
                active === cat.id ? "text-blue-400" : "text-white"
              }`}>
                {cat.label}
              </h3>

              <p className="text-gray-400 text-sm">
                Click to explore tools & technologies
              </p>
            </div>
          ))}
        </div>

        {/* Skill Reveal Panel */}
        {active && (
          <div className="relative bg-slate-900/80 border border-slate-800 rounded-3xl p-10 backdrop-blur-md shadow-2xl transition-all duration-300">

            {/* Exit Button */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-red-400 transition"
            >
              <X size={22} />
            </button>

            {/* Skills */}
            <div className="flex flex-wrap gap-4 justify-center">
              {data[active].map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-2 rounded-lg text-sm font-medium
                  bg-blue-500/10 border border-blue-500/30
                  text-blue-300 hover:bg-blue-500/20
                  transition"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
