import React, { useState, useEffect } from "react";

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

  const activeIndex = categories.findIndex(cat => cat.id === active);

  // Prevent horizontal scroll globally
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-slate-950 overflow-x-hidden py-28"
    >
      <div className="container mx-auto max-w-6xl px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            MY{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              SKILLS
            </span>
          </h2>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {categories.map((cat) => (
            <div key={cat.id}>

              {/* Card */}
              <div
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

              {/* MOBILE Animation */}
              {active === cat.id && (
                <div className="md:hidden mt-6 overflow-hidden w-full">
                  <div
                    className={`flex w-max gap-4 whitespace-nowrap ${
                      categories.findIndex(c => c.id === cat.id) % 2 === 0
                        ? "animate-left-to-right"
                        : "animate-right-to-left"
                    }`}
                  >
                    {[...data[cat.id], ...data[cat.id]].map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-lg text-sm font-medium
                        bg-blue-500/10 border border-blue-500/30
                        text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* DESKTOP FULL WIDTH ANIMATION */}
        {active && (
          <div className="hidden md:block mt-10 overflow-hidden w-full">
            <div
              className={`flex w-max gap-6 whitespace-nowrap ${
                activeIndex % 2 === 0
                  ? "animate-left-to-right"
                  : "animate-right-to-left"
              }`}
            >
              {[...data[active], ...data[active]].map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 rounded-xl text-sm font-medium
                  bg-blue-500/10 border border-blue-500/30
                  text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes leftToRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        @keyframes rightToLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-left-to-right {
          animation: leftToRight 22s linear infinite;
        }

        .animate-right-to-left {
          animation: rightToLeft 22s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
