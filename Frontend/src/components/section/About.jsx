import React, { useState, useEffect } from "react";
import { Code2, BrainCircuit, Database, Globe, X } from "lucide-react";
import { siteData } from "../../data/siteData";

const aboutIconMap = {
  Code2,
  BrainCircuit,
  Database,
  Globe,
};

const About = () => {
  const [activeCard, setActiveCard] = useState(null);

  const [lightOn] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  // Mouse Follow Glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!lightOn) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setPosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [lightOn]);

  useEffect(() => {
    if (lightOn) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPosition({ x: 75, y: 40 });
    }
  }, [lightOn]);

  const skills = siteData.about.skillCards;

  return (
    <section
      id="about"
      className="relative min-h-screen pt-24 flex items-center bg-slate-950 overflow-hidden"
    >
      {/* BASE BACKGROUND */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-950 to-blue-950" />

      {/* DOTTED GRID */}
      <div
        className="absolute inset-0 z-0
        bg-[radial-gradient(circle,rgba(96,165,250,0.25)_1.2px,transparent_1.2px)]
        bg-size-[32px_32px]"
      />

      {/* SUBTLE GLOW */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at ${position.x}% ${position.y}%,
            rgba(59,130,246,0.07),
            transparent 55%
          )`,
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* LEFT */}
          <div>
            <h2 className="text-6xl px-40 font-bold text-white leading-tight">
              {siteData.about.heading} <span className="text-blue-500">{siteData.about.headingHighlight}</span>
            </h2>

            <div className="ml-44 w-48 h-1 bg-blue-500 mt-4 rounded-full" />
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {siteData.about.intro}
            </p>

            <p className="text-gray-400 text-base leading-relaxed">
              {siteData.about.details}
            </p>
          </div>

        </div>

        {/* SKILLS */}
        <h3 className="text-2xl font-semibold text-white text-center mb-8">
          {siteData.about.skillsHeading} <span className="text-blue-500">{siteData.about.skillsHeadingHighlight}</span>
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <div
              key={skill.title + index}
              onClick={() => setActiveCard(skill)}
              className="cursor-pointer bg-white/5 border border-white/10 
              p-5 rounded-xl hover:border-blue-500/50 
              hover:-translate-y-1 transition duration-200"
            >
              <div className="text-blue-500 mb-3">
                {(aboutIconMap[skill.icon] ? React.createElement(aboutIconMap[skill.icon], { size: 22 }) : <Code2 size={22} />)}
              </div>

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

      {/* MODAL */}
      {activeCard && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm 
          flex items-center justify-center z-50"
          onClick={() => setActiveCard(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-900 border border-blue-500/40 
            w-[90%] md:w-125 p-7 rounded-xl"
          >
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="text-blue-500 mb-3">
              {(aboutIconMap[activeCard.icon] ? React.createElement(aboutIconMap[activeCard.icon], { size: 22 }) : <Code2 size={22} />)}
            </div>

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